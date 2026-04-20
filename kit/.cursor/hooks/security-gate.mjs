#!/usr/bin/env node

/**
 * AI Productivity Kit — security-gate hook
 *
 * Single script handling beforeShellExecution, beforeMCPExecution, and
 * afterFileEdit events. Dispatches on hook_event_name from the Cursor
 * hooks JSON input (stdin → stdout).
 *
 * Opt-in flag: reads cursor-ai-kit.config.json → hooks.enabled.
 * When false the script exits 0 with { "permission": "allow" } (no-op).
 *
 * Zero external dependencies — Node >=20 built-ins only.
 */

import { readFileSync, appendFileSync, mkdirSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";

// ---------------------------------------------------------------------------
// Config: opt-in check
// ---------------------------------------------------------------------------

const PROJECT_DIR = process.env.CURSOR_PROJECT_DIR || process.cwd();

function loadConfig() {
  const candidates = [
    resolve(PROJECT_DIR, "cursor-ai-kit.config.json"),
    resolve(PROJECT_DIR, "kit", "cursor-ai-kit.config.json"),
  ];
  for (const p of candidates) {
    try {
      return JSON.parse(readFileSync(p, "utf8"));
    } catch {
      /* not found or unparseable — try next */
    }
  }
  return {};
}

// ---------------------------------------------------------------------------
// Audit log
// ---------------------------------------------------------------------------

const AUDIT_LOG = resolve(PROJECT_DIR, ".cursor", "hooks-audit.log");

function audit(event, decision, details) {
  const ts = new Date().toISOString();
  const detail = details.slice(0, 200);
  const line = `[${ts}] ${event} ${decision} ${detail}\n`;
  try {
    const dir = dirname(AUDIT_LOG);
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
    appendFileSync(AUDIT_LOG, line, "utf8");
  } catch {
    /* Best-effort logging; never crash the hook over a write failure. */
  }
}

// ---------------------------------------------------------------------------
// Shell deny patterns (T1)
// ---------------------------------------------------------------------------

const SHELL_DENY_PATTERNS = [
  {
    name: "rm-rf-root",
    re: /\brm\s+(-[^\s]*r[^\s]*f|-[^\s]*f[^\s]*r)\s+\//,
    msg: "recursive forced removal on a root-relative path",
  },
  {
    name: "dd-device",
    re: /\bdd\b.*\bof=\/dev\//,
    msg: "dd targeting a block device",
  },
  {
    name: "mkfs",
    re: /\bmkfs\b/,
    msg: "filesystem format command",
  },
  {
    name: "secrets-path",
    re: /\/secrets\//,
    msg: "command references a /secrets/ path",
  },
  {
    name: "chmod-777",
    re: /\bchmod\s+777\b/,
    msg: "world-writable permission change",
  },
  {
    name: "redirect-device",
    re: />\s*\/dev\/[sh]d/,
    msg: "output redirection to a block device",
  },
];

// ---------------------------------------------------------------------------
// Security-sensitive file path patterns (T3)
// ---------------------------------------------------------------------------

const SECURITY_PATH_RE =
  /\/(auth|authz|payments|uploads|webhooks|secrets)\//;

// ---------------------------------------------------------------------------
// Handlers
// ---------------------------------------------------------------------------

function handleBeforeShellExecution(input) {
  const cmd = input.command || "";
  const cwd = input.cwd || "";

  for (const { name, re, msg } of SHELL_DENY_PATTERNS) {
    if (re.test(cmd)) {
      audit(
        "beforeShellExecution",
        "DENY",
        `command="${cmd}" pattern="${name}" cwd="${cwd}"`
      );
      return {
        permission: "deny",
        user_message: `Blocked by security-gate hook: ${msg}. See .cursor/hooks-audit.log.`,
        agent_message:
          "This command was blocked by the kit's security hook because it matches a destructive pattern. " +
          "Rephrase the command to be more targeted, or ask the user to run it manually outside the agent.",
      };
    }
  }

  audit("beforeShellExecution", "ALLOW", `command="${cmd}" cwd="${cwd}"`);
  return { permission: "allow" };
}

function handleBeforeMCPExecution(input) {
  const tool = input.tool_name || "";
  const params = typeof input.tool_input === "string"
    ? input.tool_input
    : JSON.stringify(input.tool_input ?? "");

  audit(
    "beforeMCPExecution",
    "ALLOW",
    `tool="${tool}" input="${params}"`
  );

  // MCP trust is enforced via rule text in 40-security.mdc (soft guidance), not
  // hook deny patterns. Tool-call payloads vary too widely to classify reliably
  // without false positives. The value of this hook is the audit trail above.
  return { permission: "allow" };
}

function handleAfterFileEdit(input) {
  const filePath = input.file_path || "";
  const editCount = Array.isArray(input.edits) ? input.edits.length : 0;

  if (SECURITY_PATH_RE.test(filePath)) {
    audit(
      "afterFileEdit",
      "SECURITY_PATH",
      `file="${filePath}" edits=${editCount}`
    );
  }

  return {};
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  let raw = "";
  for await (const chunk of process.stdin) raw += chunk;

  const input = JSON.parse(raw);
  const event = input.hook_event_name;

  const config = loadConfig();
  if (config?.hooks?.enabled === false) {
    process.stdout.write(JSON.stringify({ permission: "allow" }) + "\n");
    return;
  }

  let output;
  switch (event) {
    case "beforeShellExecution":
      output = handleBeforeShellExecution(input);
      break;
    case "beforeMCPExecution":
      output = handleBeforeMCPExecution(input);
      break;
    case "afterFileEdit":
      output = handleAfterFileEdit(input);
      break;
    default:
      output = {};
  }

  process.stdout.write(JSON.stringify(output) + "\n");
}

main().catch(() => {
  process.stdout.write("{}\n");
  process.exit(1);
});
