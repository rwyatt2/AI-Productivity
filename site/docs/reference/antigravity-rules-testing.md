---
title: Antigravity Rules - Testing (Reference)
---

Source: `.agent/rules/25-testing.md`

```
# Testing (IMPLEMENT)

When in **IMPLEMENT** mode, any response that **adds or changes** code in files that contain **business logic** or **security-sensitive behavior** must include a **Tests / rationale** section (see `20-implementation-package.md`). That section must not be empty. It must state one of:

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

**When security or exposure applies** (see `40-security.md` triggers): test coverage or rationale is required for any changed path that handles auth, permissions, input validation, or sensitive data. Exclusions do not apply to those paths.

See also: `20-implementation-package.md` (Implementation Package contract).
```
