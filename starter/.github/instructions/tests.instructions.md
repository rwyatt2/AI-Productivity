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
