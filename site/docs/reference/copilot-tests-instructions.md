---
title: Copilot Tests Instructions (Reference)
---

## What this is

`.github/instructions/tests.instructions.md` is a **path-specific Copilot instruction file** that activates when Copilot works on test or spec files (`*.test.*`, `*.spec.*`). It enforces the testing posture: require a Tests/rationale section, exclusion list, and security-path override.

## When to use it

- You **don't edit this file** for normal use. Copilot loads it automatically when touching test files.
- Use it as reference when reviewing that Copilot provided a test story for code changes.

## Steps

1. Ensure the kit is at your **project root** so Copilot sees `.github/instructions/`.
2. Copilot applies these instructions automatically when editing test/spec files.
3. To see or copy the exact text, use the block below.

## Exact text (from kit)


Source: `.github/instructions/tests.instructions.md`

```
---
applyTo: "**/*.{test,spec}.{ts,tsx,js,jsx,py,rb,go}"
---

# Testing (path-specific)

This file is a test or spec file. Apply the testing posture.

**When implementing:** Any response that adds or changes code involving business logic or security-sensitive behavior must include a **Tests / rationale** section stating one of:
- **Existing tests to run** — paths or names of tests that cover the change
- **New test or strategy** — one sentence on what to test
- **Why no test** — one sentence rationale (e.g. "Config-only change; no logic")

**Exclusions (one-line rationale is sufficient):**
- Generated or vendored code (`node_modules/`, `dist/`, `build/`, `*.generated.*`)
- Config-only files (`*.config.js`, `*.config.ts`, `*.json` for config, env files)
- Static assets and styling only (`*.css`, `*.scss`, `*.png`, `*.svg`)
- Docs and prose only (`*.md`, `*.mdx`, `docs/**` with no executable logic)
- Lockfiles and manifests only (`package-lock.json`, `yarn.lock`, `Cargo.lock`)
- Files that only re-export or delegate (no branching, no data logic)

**When security or exposure applies:** Test coverage or rationale is required for any changed path that handles auth, permissions, input validation, or sensitive data. Exclusions do not apply to those paths.
```
