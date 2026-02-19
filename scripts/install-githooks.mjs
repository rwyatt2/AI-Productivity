#!/usr/bin/env node
/**
 * Install version-controlled git hooks from .githooks.
 * Run once per clone: npm run hooks:install
 */

import { chmodSync, existsSync } from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = process.cwd();
const hooksDir = path.join(ROOT, ".githooks");
const preCommit = path.join(hooksDir, "pre-commit");

// 1) Confirm we are in a git repo
const revParse = spawnSync("git", ["rev-parse", "--is-inside-work-tree"], {
  cwd: ROOT,
  encoding: "utf8",
});
if (revParse.status !== 0) {
  console.error("Error: not inside a git repository. Run this from the repo root.");
  process.exit(1);
}

// 2) Configure git to use .githooks
spawnSync("git", ["config", "core.hooksPath", ".githooks"], { cwd: ROOT });
if (!existsSync(preCommit)) {
  console.error("Error: .githooks/pre-commit not found.");
  process.exit(1);
}

// 3) Make pre-commit executable (skip on Windows)
const isWindows = process.platform === "win32";
if (!isWindows) {
  chmodSync(preCommit, 0o755);
}

console.log("Git hooks installed. Hooks path: .githooks");
console.log("Run this once per clone: npm run hooks:install");
