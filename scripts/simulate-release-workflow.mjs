#!/usr/bin/env node
/**
 * Simulates the Release assets workflow steps locally to debug missing zip assets.
 * Logs to .cursor/debug.log (NDJSON) for each hypothesis.
 */

import { appendFileSync, existsSync } from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = path.resolve(process.cwd());
const LOG_PATH = path.join(ROOT, ".cursor", "debug.log");

function log(hypothesisId, message, data = {}) {
  const line =
    JSON.stringify({
      hypothesisId,
      message,
      data: { ...data, cwd: ROOT },
      timestamp: Date.now(),
      location: "simulate-release-workflow.mjs",
    }) + "\n";
  appendFileSync(LOG_PATH, line);
}

// #region agent log
log("H1", "Simulation started: workflow trigger is push:tags; if tag was created on GitHub UI, workflow never runs", {
  note: "Check Actions tab for 'Release assets' run for v1.3.0",
});
// #endregion

// Install site deps (same as workflow)
// #region agent log
const siteCi = spawnSync("npm", ["ci"], { cwd: path.join(ROOT, "site"), encoding: "utf8" });
log("H2", "Install site deps (npm ci in site)", {
  status: siteCi.status,
  failed: siteCi.status !== 0,
  stderr: siteCi.stderr?.slice(-200),
});
// #endregion
if (siteCi.status !== 0) process.exit(1);

// Sync reference docs
// #region agent log
const sync = spawnSync("npm", ["run", "sync"], { cwd: ROOT, encoding: "utf8" });
log("H2", "Sync reference docs (npm run sync)", {
  status: sync.status,
  failed: sync.status !== 0,
});
// #endregion

// Create kit-only zip (same as workflow: cd kit && zip -r ../ai-kit-only.zip .)
// #region agent log
const kitZip = spawnSync("sh", ["-c", "cd kit && zip -r ../ai-kit-only.zip ."], { cwd: ROOT, encoding: "utf8" });
const kitZipPath = path.join(ROOT, "ai-kit-only.zip");
const kitZipExists = existsSync(kitZipPath);
log("H2", "Create kit-only zip", { status: kitZip.status, failed: kitZip.status !== 0 });
log("H3", "Kit zip path and existence at repo root", {
  path: kitZipPath,
  exists: kitZipExists,
  expectedAtRoot: kitZipPath === path.join(ROOT, "ai-kit-only.zip"),
});
// #endregion
if (kitZip.status !== 0) process.exit(1);

// Sync starter from kit (npm ci at root, then sync:starter)
// #region agent log
const rootCi = spawnSync("npm", ["ci"], { cwd: ROOT, encoding: "utf8" });
log("H2", "Root npm ci", { status: rootCi.status, failed: rootCi.status !== 0 });
const syncStarter = spawnSync("npm", ["run", "sync:starter"], { cwd: ROOT, encoding: "utf8" });
log("H2", "Sync starter from kit", {
  status: syncStarter.status,
  failed: syncStarter.status !== 0,
  stderr: syncStarter.stderr?.slice(-300),
});
// #endregion
if (rootCi.status !== 0 || syncStarter.status !== 0) process.exit(1);

// Create starter zip
// #region agent log
const starterZip = spawnSync("sh", ["-c", "cd starter && zip -r ../ai-kit-starter.zip ."], { cwd: ROOT, encoding: "utf8" });
const starterZipPath = path.join(ROOT, "ai-kit-starter.zip");
const starterZipExists = existsSync(starterZipPath);
log("H2", "Create starter zip", { status: starterZip.status, failed: starterZip.status !== 0 });
log("H3", "Starter zip path and existence at repo root", {
  path: starterZipPath,
  exists: starterZipExists,
});
// #endregion
if (starterZip.status !== 0) process.exit(1);

// Final: both zips at root (what action-gh-release expects)
// #region agent log
const bothExist = kitZipExists && starterZipExists;
log("H3", "Both zips at repo root before upload step", {
  aiKitOnlyExists: kitZipExists,
  aiKitStarterExists: starterZipExists,
  bothExist,
  actionWillFindFiles: bothExist,
});
log("H4", "If release was created via GitHub UI first, push:tags never fired so workflow never ran", {
  recommendation: "Delete release v1.3.0, then: git tag v1.3.0 && git push origin v1.3.0",
});
// #endregion

console.log("Simulation done. Check .cursor/debug.log");
console.log("ai-kit-only.zip at root:", kitZipExists);
console.log("ai-kit-starter.zip at root:", starterZipExists);
