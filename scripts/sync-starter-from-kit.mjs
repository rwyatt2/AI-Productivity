#!/usr/bin/env node
/**
 * Sync starter/ from kit/ so starter is generated from kit (prevents drift).
 * Deletes and recreates starter/.cursor, starter/docs/ai, starter/.github,
 * copies from kit, and copies cursor-ai-kit.config.json and .cursorignore. Does NOT touch starter/README.md.
 */

import { rm, cp, copyFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const starter = path.join(root, 'starter');
const kit = path.join(root, 'kit');

async function sync() {
  const dirs = [
    path.join(starter, '.cursor'),
    path.join(starter, 'docs', 'ai'),
    path.join(starter, '.github'),
    path.join(starter, '.agent'),
  ];

  for (const dir of dirs) {
    await rm(dir, { recursive: true }).catch((err) => {
      if (err.code !== 'ENOENT') throw err;
    });
  }

  await cp(path.join(kit, '.cursor'), path.join(starter, '.cursor'), { recursive: true });
  await cp(path.join(kit, 'docs', 'ai'), path.join(starter, 'docs', 'ai'), { recursive: true });
  await cp(path.join(kit, '.github'), path.join(starter, '.github'), { recursive: true });
  await cp(path.join(kit, '.agent'), path.join(starter, '.agent'), { recursive: true });
  await copyFile(
    path.join(kit, 'cursor-ai-kit.config.json'),
    path.join(starter, 'cursor-ai-kit.config.json')
  );
  await copyFile(
    path.join(kit, '.cursorignore'),
    path.join(starter, '.cursorignore')
  );

  console.log('sync-starter-from-kit: starter/.cursor, starter/docs/ai, starter/.github, starter/.agent, starter/cursor-ai-kit.config.json, starter/.cursorignore updated from kit.');
}

sync().catch((err) => {
  console.error(err);
  process.exit(1);
});
