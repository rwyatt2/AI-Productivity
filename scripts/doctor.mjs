#!/usr/bin/env node
/**
 * Doctor: always-on integrity check.
 * Ensures kit is complete, starter/docs are in sync, and docs build succeeds.
 * Fail-fast with clear errors; exit 1 on any failure.
 */

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(process.cwd());

function fail(msg, hint) {
  console.error("\n\u274c", msg);
  if (hint) console.error("   \u2192", hint);
  process.exit(1);
}

function ok(label) {
  console.log("  \u2713", label);
}

// ---------------------------------------------------------------------------
// 1) Kit completeness
// ---------------------------------------------------------------------------
const KIT_PATHS = [
  { p: "kit/.cursor/agents/", dir: true },
  { p: "kit/.cursor/prompts/", dir: true },
  { p: "kit/.cursor/rules/", dir: true },
  { p: "kit/docs/ai/", dir: true },
  { p: "kit/.github/", dir: true },
  { p: "kit/cursor-ai-kit.config.json", dir: false },
];

console.log("1) Kit completeness...");
for (const { p, dir } of KIT_PATHS) {
  const full = path.join(ROOT, p);
  const exists = fs.existsSync(full);
  const stat = exists ? fs.statSync(full) : null;
  const isDir = stat ? stat.isDirectory() : false;
  const isFile = stat ? stat.isFile() : false;
  if (!exists) {
    fail(`Missing required path: ${p}`, `Create it and re-run: npm run doctor`);
  }
  if (dir && !isDir) {
    fail(`Expected directory: ${p}`, `Fix and re-run: npm run doctor`);
  }
  if (!dir && !isFile) {
    fail(`Expected file: ${p}`, `Create it and re-run: npm run doctor`);
  }
  ok(p);
}

// ---------------------------------------------------------------------------
// 2) Starter sync check
// ---------------------------------------------------------------------------
console.log("\n2) Starter sync check...");
let run = spawnSync("npm", ["run", "sync:starter"], {
  cwd: ROOT,
  stdio: "inherit",
  shell: true,
});
if (run.status !== 0) {
  fail(
    "Starter sync failed (npm run sync:starter exited non-zero).",
    "Run: npm run sync:starter"
  );
}
ok("sync:starter completed");

run = spawnSync("git", ["diff", "--exit-code", "starter"], { cwd: ROOT });
if (run.status !== 0) {
  fail(
    "Starter has uncommitted changes after sync (drift detected).",
    "Run: npm run sync:starter then commit the changes in starter/"
  );
}
ok("starter/ has no uncommitted changes");

// ---------------------------------------------------------------------------
// 3) Reference docs sync check
// ---------------------------------------------------------------------------
console.log("\n3) Reference docs sync check...");
run = spawnSync("npm", ["run", "sync"], {
  cwd: ROOT,
  stdio: "inherit",
  shell: true,
});
if (run.status !== 0) {
  fail(
    "Reference docs sync failed (npm run sync exited non-zero).",
    "Run: npm run sync"
  );
}
ok("sync completed");

run = spawnSync("git", ["diff", "--exit-code", "site/docs/reference"], {
  cwd: ROOT,
});
if (run.status !== 0) {
  fail(
    "site/docs/reference has uncommitted changes after sync (drift detected).",
    "Run: npm run sync then commit the changes in site/docs/reference/"
  );
}
ok("site/docs/reference has no uncommitted changes");

// ---------------------------------------------------------------------------
// 4) Docs build check
// ---------------------------------------------------------------------------
console.log("\n4) Docs build check...");
run = spawnSync("npm", ["run", "site:build"], {
  cwd: ROOT,
  stdio: "inherit",
  shell: true,
});
if (run.status !== 0) {
  fail(
    "Docs build failed (npm run site:build exited non-zero).",
    "Run: npm run site:build"
  );
}
ok("site build succeeded");

console.log("\n\u2705 Doctor passed. Repo is in sync and docs build succeeds.\n");
