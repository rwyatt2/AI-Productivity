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
  { p: "kit/.cursor/hooks.json", dir: false },
  { p: "kit/.cursor/hooks/", dir: true },
  { p: "kit/.cursor/lenses/", dir: true },
  { p: "kit/.cursor/prompts/", dir: true },
  { p: "kit/.cursor/skills/", dir: true },
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
// 1b) SKILL.md frontmatter validation
// ---------------------------------------------------------------------------
console.log("\n1b) SKILL.md frontmatter validation...");
const SKILLS_DIR = path.join(ROOT, "kit/.cursor/skills");
if (fs.existsSync(SKILLS_DIR)) {
  const skillDirs = fs.readdirSync(SKILLS_DIR).filter((d) =>
    fs.statSync(path.join(SKILLS_DIR, d)).isDirectory()
  );
  for (const dir of skillDirs) {
    const skillPath = path.join(SKILLS_DIR, dir, "SKILL.md");
    if (!fs.existsSync(skillPath)) {
      fail(
        `Missing SKILL.md in kit/.cursor/skills/${dir}/`,
        "Every skill directory must contain a SKILL.md file."
      );
    }
    const content = fs.readFileSync(skillPath, "utf8");
    const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!fmMatch) {
      fail(
        `SKILL.md in kit/.cursor/skills/${dir}/ is missing YAML frontmatter.`,
        "Add --- delimited frontmatter with name and description fields."
      );
    }
    const fm = fmMatch[1];
    if (!/^name:\s*.+/m.test(fm)) {
      fail(
        `SKILL.md in kit/.cursor/skills/${dir}/ is missing 'name' in frontmatter.`,
        "Add a name field (max 64 chars, lowercase letters/numbers/hyphens)."
      );
    }
    if (!/^description:\s*.+/m.test(fm) && !/^description:\s*>/m.test(fm)) {
      fail(
        `SKILL.md in kit/.cursor/skills/${dir}/ is missing 'description' in frontmatter.`,
        "Add a description field (max 1024 chars)."
      );
    }
    ok(`kit/.cursor/skills/${dir}/SKILL.md`);
  }
} else {
  ok("No skills directory yet — skipping.");
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
