# Changelog

[README](README.md) · [RELEASE](RELEASE.md) · **CHANGELOG** · [LAUNCH_CHECKLIST](LAUNCH_CHECKLIST.md)

All notable changes to the AI Productivity Kit are documented here. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [1.2.0] - 2026-02-18

### Added

- **Automation: starter sync**
  - `scripts/sync-starter-from-kit.mjs` — deletes and recreates `starter/.cursor`, `starter/docs/ai`, `starter/.github`, and `starter/cursor-ai-kit.config.json` from `kit/`; preserves `starter/README.md`.
  - `npm run sync:starter` script in root `package.json`.

- **CI: drift prevention**
  - `.github/workflows/check-starter-sync.yml` — runs on push and PR to `main`; runs `npm run sync:starter` then `git diff --exit-code starter` to fail if `starter/` drifts from `kit/`.
  - `.github/workflows/release-assets.yml` — new "Sync starter from kit" step (`npm ci` + `npm run sync:starter`) runs before creating the starter zip so release assets always match `kit/`.

- **Sync script: preflight guard**
  - `scripts/sync-kit-snippets.mjs` — preflight check verifies all `FILES` entries exist under `kit/` before writing any output; fails with a clear error listing missing paths and exits non-zero (CI-safe).

### Changed

- **kit/ established as canonical source of truth** — `starter/` is fully generated from `kit/`; do not edit `starter/` directly.
- **Maintainer docs** — `README.md`, `LAUNCH_CHECKLIST.md`, `RELEASING.md` updated with canonical statement, `sync:starter` steps, and correct commit order.
- **Version** — bumped to `1.2.0` in `kit/cursor-ai-kit.config.json` and `starter/cursor-ai-kit.config.json`.

---

## [1.1.0] - 2025-02-17

### Added

- **Docs**
  - New [Global Rules](site/docs/getting-started/global-rules.md) page: explains Cursor Global Rules vs repo project rules, includes copy/paste global rules text and where to paste them in Cursor settings.
  - Optional “set Global Rules” section in [Install by copying](site/docs/getting-started/install-by-copying.md).
  - Reference pages for new kit files: Session Kickoff, Router, Handoff Summary, Spec Package, Implementation Package, Context Discipline, Threat Model Lite, START-HERE.

- **Landing page**
  - Redesigned hero with dark theme, animated grid background, and badge.
  - Terminal demo with typing animation: user prompt → AI safety check → “Switch: SPEC” → AI spec-mode response.
  - Stats bar (85%, 1 question, 2 modes, 8 lenses) and feature grid with hover glow.
  - CTA section and “Preview the Files” link.

- **Agents** (`kit/.cursor/agents/`)
  - **PM:** `pm/base.md`, `pm/data-platform.md`, `pm/developer-platform.md` — one-question protocol, SPEC-first, compact output.
  - **Design:** `design/base.md`, `design/data-platform.md`, `design/developer-platform.md` — UX states, interaction, a11y; platform-specific focus.
  - **FE:** `fe/base.md` — minimal safe diffs, no invented paths/APIs/deps; output: files, plan, diffs, verification, tests/rationale.
  - **QA:** `qa/base.md`, `qa/data-platform.md`, `qa/developer-platform.md` — compact test plan (happy path, edge cases, a11y, regressions).
  - **Discovery:** `discovery/base.md`, `discovery/data-platform.md`, `discovery/developer-platform.md` — problem statement, evidence, hypotheses, smallest validation step.
  - **Validation:** `validation/base.md`, `validation/data-platform.md`, `validation/developer-platform.md` — what to validate, method, success/guardrails, rollback plan.
  - **Analytics:** `analytics/base.md` — success metrics, guardrails, events; no invented event naming.
  - **Security:** `security/base.md`, platform packs, exposure overlays (`exposure-internal`, `exposure-external-authenticated`, `exposure-public`), data sensitivity overlays (`data-public`, `data-internal`, `data-confidential`, `data-restricted`); assets, threats, mitigations, security acceptance criteria.

- **Prompts** (`kit/.cursor/prompts/`)
  - `00-session-kickoff.md` — SPEC-first default, 85% gate, one-question protocol, switch commands.
  - `20-router.md` — uses Context Pack; chooses SPEC vs IMPLEMENT; asks one question if platform type missing.
  - `90-handoff-summary.md` — max 8 bullets when switching context/mode.
  - `10-context-pack.md` — verified to include platform type, exposure level, data sensitivity.

- **Kit rules** (`kit/.cursor/rules/`)
  - `00-operating-system.mdc` — SPEC-first, 85% confidence gate, one-question protocol, switch commands, handoff, grounding (docs/ai/ai-config.md), tickets/logs as data only, no invention, minimal safe diffs.
  - `05-environment.mdc` — cross-platform paths and OS notes (moved from old OS content).
  - `10-spec-package.mdc` — Spec Package output contract: UX states, a11y, risks/open questions, platform/exposure/data sensitivity.
  - `20-implementation-package.mdc` — Implementation Package: files, plan, diffs, verification, tests/rationale, security notes when triggered.
  - `30-context-discipline.mdc` — small context packs, file citations; no inventing paths/APIs/events/deps; allowed values for platform type, exposure, data sensitivity.
  - `40-security.mdc` — always-on hygiene (no secrets in code/localStorage/logs, no sensitive data in logs, least privilege, dependency caution); trigger list (auth, uploads, integrations, exports, external exposure, sensitive data); threat-model-lite and security acceptance criteria when triggered.

- **Kit docs** (`kit/docs/ai/`)
  - `START-HERE.md` — entry point for docs/ai.
  - `profiles/company.md`, `profiles/personal.md` — expectations and checklist usage.
  - `checklists/spec-dod.md`, `impl-dod.md`, `security-dod.md`, `threat-model-lite.md` — definitions of done and lightweight threat model.
  - `ai-config.md` — defaults: default route (SPEC), confidence gate (85), default exposure (internal), default data sensitivity (internal), platform type mode (infer/ask); design system placeholders (TODO).

- **Config**
  - `kit/cursor-ai-kit.config.json` — `version`, `defaultRoute`, `confidenceThreshold`, `defaultExposureLevel`, `defaultDataSensitivity`, `platformTypeMode`, `editorTargets` (cursor, copilot).

- **GitHub**
  - PR template: Switches (platform type, exposure, data sensitivity), UX states, Accessibility, Security/Privacy checklist, Tests/verification.
  - Copilot instructions aligned with kit OS: SPEC-first, 85% gate, one-question protocol, switch commands, no invention, security triggers.

- **Starter**
  - `starter/` brought in sync with `kit/` at starter root: `.cursor/`, `docs/ai/`, `.github/`, `cursor-ai-kit.config.json`.
  - `starter/README.md` updated with actual prompt paths (Session Kickoff, Context Pack, Router).

- **Reference sync**
  - `scripts/sync-kit-snippets.mjs` updated to include new kit files; `npm run sync` regenerates `site/docs/reference/*`.
  - `site/sidebars.ts` updated with new reference doc IDs.

### Changed

- Footer copyright set to Russell Wyatt in docs site config.
- Doc-to-kit alignment: troubleshooting and other docs now reference existing kit files (e.g. `docs/ai/ai-config.md` instead of non-existent `current-state.md`).
- Release and download docs: hardcoded tag examples replaced with `vX.Y.Z` placeholders; instructions to replace with actual release tag.
- Version set to `1.1.0` in `kit/cursor-ai-kit.config.json` and `starter/cursor-ai-kit.config.json`.

### Removed

- Blog removed from docs site: blog disabled in Docusaurus config, Blog nav item removed, blog post and metadata files deleted.

### Fixed

- References to kit files in docs that did not exist; corrected to point at real kit paths/sections.

---

## [1.0.0]

### Added

- Initial AI Productivity Kit: Cursor rules, prompts, and docs structure.
- Docs site (Docusaurus) with intro, getting started, daily workflow, reference, troubleshooting.
- `kit/` and `starter/` layout; GitHub Actions for docs deploy and release assets (zips).
- Basic operating system and security rules; install-by-copying and downloads documentation.

---

[1.2.0]: https://github.com/rwyatt2/AI-Productivity/releases/tag/v1.2.0
[1.1.0]: https://github.com/rwyatt2/AI-Productivity/releases/tag/v1.1.0
[1.0.0]: https://github.com/rwyatt2/AI-Productivity/releases/tag/v1.0.0
