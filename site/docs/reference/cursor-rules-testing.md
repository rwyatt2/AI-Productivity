---
title: Cursor Rules - Testing (Reference)
---

## What this is

`.cursor/rules/25-testing.mdc` is a **Cursor rule** that requires a Tests / rationale section for IMPLEMENT outputs that touch business logic or security-sensitive code, with an exclusion list for config-only, generated, or asset-only files.

## When to use it

- You **don't edit this file** for normal use. It's part of the kit.
- Use it as reference when reviewing that the AI provided a test story (or rationale) for code changes.

## Steps

1. Ensure the kit is at your **project root** so Cursor sees `.cursor/rules/`.
2. In IMPLEMENT mode, the AI will follow this rule. Use the block below to see or copy the exact rule.

## Exact text (from kit)


Source: `.cursor/rules/25-testing.mdc`

```
---
description: Testing — require test coverage or rationale for business logic and security-sensitive IMPLEMENT outputs
alwaysApply: true
---

<!--
  Why: IMPLEMENT outputs that add or change business logic or security-sensitive code
  need a test story (existing tests, new tests, or explicit rationale for no test).
  This rule makes that requirement explicit and scoped so the AI doesn't skip tests
  or leave the "Tests / rationale" section empty when it matters.
-->

# Testing (IMPLEMENT)

When in **IMPLEMENT** mode, any response that **adds or changes** code in files that contain **business logic** or **security-sensitive behavior** must include a **Tests / rationale** section (see `20-implementation-package.mdc`). That section must not be empty. It must state one of:

- **Existing tests to run** — Paths or names of tests that cover the change; or
- **New test or strategy** — One sentence on what to test (e.g. unit test for X, integration test for Y); or
- **Why no test** — One sentence rationale (e.g. "Config-only change; no logic" or "Re-export only; covered by existing tests in …").

If the change touches **only** files that are in the exclusion list below, a one-line rationale (e.g. "Excluded: config only") is sufficient.

**Exclusions (no test required beyond optional one-line rationale):**

- Generated or vendored code (e.g. `node_modules/`, `dist/`, `build/`, `*.generated.*`, generated types).
- Config-only files (e.g. `*.config.js`, `*.config.ts`, `*.json` used only for config, env files).
- Static assets and styling only (e.g. `*.css`, `*.scss`, `*.png`, `*.svg`, `*.woff2`).
- Docs and prose only (e.g. `*.md`, `*.mdx`, `docs/**` with no executable logic).
- Lockfiles and manifests only (e.g. `package-lock.json`, `yarn.lock`, `Cargo.lock`).
- Files that only re-export or delegate (no branching, no data logic, no auth/validation).

**When security or exposure applies** (see `40-security.mdc` triggers): test coverage or rationale is required for any changed path that handles auth, permissions, input validation, or sensitive data. Exclusions do not apply to those paths.

See also: `20-implementation-package.mdc` (Implementation Package contract).
```
