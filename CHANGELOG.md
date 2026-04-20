# Changelog

[README](README.md) · [RELEASE](RELEASE.md) · **CHANGELOG** · [LAUNCH_CHECKLIST](LAUNCH_CHECKLIST.md)

All notable changes to the AI Productivity Kit are documented here. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [Unreleased]

### Added

- **Invokable Skills** (audit findings F-16, F-27) — 8 new Skills under `kit/.cursor/skills/` with YAML frontmatter (`name`, `description`), mirrored to `kit/.agent/skills/` for Antigravity. Checklist skills: `/spec-dod`, `/impl-dod`, `/security-dod` (`disable-model-invocation: true`), `/threat-model-lite`. Prompt skills: `/session-kickoff`, `/context-pack`, `/router`, `/handoff-summary`. Prompt `.md` files remain as canonical body source for editors without Skills support. Synced to `starter/` via `npm run sync:starter`.
- **Golden-trace evaluation harness** (audit finding F-19) — 5 reference dialogues in `docs/audit/eval/`: 01-spec-with-advisories, 02-implement-with-security-trigger, 03-route-mismatch-advisory, 04-mcp-config-change, 05-handoff-summary. Each trace specifies setup, user prompt, expected AI response, and fail criteria. Linked from README "How we test the kit" section.
- **Doctor: SKILL.md frontmatter validation** — `npm run doctor` step 1b now validates every `kit/.cursor/skills/*/SKILL.md` has parseable YAML frontmatter with required `name` and `description` fields.
- **Path-specific Copilot instructions** (audit finding F-06) — New `kit/.github/instructions/security.instructions.md` (`applyTo: "**/{auth,authz,payments,uploads,webhooks,secrets}/**"`) and `kit/.github/instructions/tests.instructions.md` (`applyTo: "**/*.{test,spec}.{ts,tsx,js,jsx,py,rb,go}"`). Copilot now auto-loads security and testing guidance only when touching matching paths. Repo-wide `copilot-instructions.md` slimmed to universal baseline.
- **Copilot prompt files** (audit finding F-07) — 4 new `.prompt.md` files under `kit/.github/prompts/`: `session-kickoff`, `context-pack`, `router`, `handoff-summary`. VS Code Copilot Chat users can invoke via `/session-kickoff`, `/context-pack`, `/router`, `/handoff-summary`. Bodies match `kit/.cursor/prompts/*.md`; doctor step 1c validates alignment.
- **Doctor: Copilot prompt body alignment** — `npm run doctor` step 1c now validates every `kit/.github/prompts/*.prompt.md` body matches the corresponding `kit/.cursor/prompts/*.md` body (catches drift between Cursor and Copilot prompt surfaces).
- **Antigravity artefact mapping** (audit finding F-26) — New "Artefact mapping" section in `site/docs/editor-support/antigravity.md`: Spec Package = `implementation_plan.md`, Handoff Summary = `walkthrough.md`, Context Pack = `GEMINI.md`/`AGENTS.md`, task breakdown = `task.md`. One-line header notes added to `kit/.agent/rules/10-spec-package.md` and `kit/.agent/rules/20-implementation-package.md`.
- **Antigravity path verified** (audit finding F-08) — `.agent/rules/` (singular) confirmed as canonical via [T1] Google Codelabs and [T2] antigravity.codes (2026). `.agent/skills/` confirmed for workspace-scope skills. Gap-analysis confidence raised from LOW to HIGH.

- **Security enforcement hooks** (audit finding F-13) — New `kit/.cursor/hooks.json` wiring `beforeShellExecution`, `beforeMCPExecution`, and `afterFileEdit` to `kit/.cursor/hooks/security-gate.mjs`. Destructive shell patterns (`rm -rf /`, `dd`, `mkfs`, `chmod 777`, paths under `**/secrets/**`) are hard-denied with `failClosed: true`. All shell and MCP actions are logged to `.cursor/hooks-audit.log`. Opt-in flag `hooks.enabled` in `cursor-ai-kit.config.json` (default: `true`); set to `false` to disable enforcement and run rule-text-only. `.cursor/hooks-audit.log` and `.cursor/hooks/cache/` added to `.cursorignore` (F-25).
- **MCP trust posture** (audit finding F-11) — New "MCP server trust" clause in `kit/.cursor/rules/40-security.mdc` (mirrored to `kit/.agent/rules/40-security.md`): treat each MCP server as a dependency, pin versions, re-review on every change (CVE-2025-54136), check audit logs. `kit/.cursor/mcp.json` replaced with a commented reference example documenting the schema and trust checklist. One-line forward pointer added to `SECURITY.md`.
- **Indirect-injection defence** (audit finding F-14) — New "Indirect-injection defence" clause in `kit/.cursor/rules/40-security.mdc` (mirrored to `kit/.agent/rules/40-security.md`): all tool outputs (MCP results, web fetches, browser snapshots, external file reads) are DATA; emit Advisory and require confirmation if tool output contains apparent instructions. OWASP LLM01:2025 cited. The "DATA only" line in `00-operating-system.mdc` extended to include tool outputs.
- **Root `AGENTS.md`** (audit finding F-05) — New `kit/AGENTS.md` (canonical, 83 lines) distilling the kit's cross-tool agent instructions: SPEC-first protocol, 85% gate, one-question rule, switch commands, grounding, context discipline, security stop gate triggers, indirect-injection defence, output contracts, and pointers to project config and editor-specific depth. Sync script copies to repo root `AGENTS.md` and `starter/AGENTS.md`. Read by Cursor, Antigravity, Claude Code, Codex, and Aider from a single file.
- **Google Antigravity editor support** — New `kit/.agent/rules/` directory with 9 plain Markdown rule files (operating system, dispatcher/advisories, environment, spec package, implementation package, testing, context discipline, security, security stop gate). Synced to `starter/.agent` by `npm run sync:starter`. `editorTargets.antigravity` added to `cursor-ai-kit.config.json`. Install and reference docs updated; landing and README mention Antigravity.

### Changed

- **Cursor mode mapping** (audit finding F-02) — Added "Cursor mode mapping" section to `kit/.cursor/rules/00-operating-system.mdc`: SPEC ≈ Plan mode, IMPLEMENT ≈ Agent mode, Q&A ≈ Ask mode. One-liner added to `kit/.cursor/prompts/00-session-kickoff.md`. Antigravity mirror (`kit/.agent/rules/00-operating-system.md`) uses editor-generic phrasing. The Switch: text protocol remains the editor-agnostic substrate; Cursor-native mode support is now explicitly documented.
- **Platform-type single source of truth** (audit finding F-03) — Replaced the stale two-value `[ data-platform | developer-platform ]` platform-type list in `kit/.cursor/prompts/10-context-pack.md`, `kit/.cursor/prompts/20-router.md`, and `kit/.github/copilot-instructions.md` with a reference to `docs/ai/ai-config.md` as the authoritative slug source. The rule (`30-context-discipline.mdc`) and its Antigravity mirror were already updated; this completes the single-source-of-truth migration across all 4 surfaces.
- **Rule activation modes** (audit finding F-04) — Set explicit Cursor activation modes across all 9 `kit/.cursor/rules/*.mdc` files. `00-operating-system`, `10-spec-package`, `20-implementation-package`, and `30-context-discipline` promoted to `alwaysApply: true` (ensuring the kit's core protocol, output contracts, and context discipline load on every turn). `40-security` set to glob-scoped activation (`**/auth/**,**/authz/**,**/payments/**,**/uploads/**,**/webhooks/**,**/secrets/**`) so the full security rule auto-loads when touching sensitive paths. `05-environment` remains description-only. Previously always-apply rules (`01-dispatcher`, `25-testing`, `41-security-stop-gate`) unchanged.
- **BREAKING — Lens path moved from `kit/.cursor/agents/` to `kit/.cursor/lenses/`** (audit finding F-01). Cursor 2.4 (Jan 2026) reserved `.cursor/agents/` for its first-class **Subagents** primitive — single Markdown files with YAML `name` and `description` frontmatter. The kit's lens content (folder-per-lens with `base.md` + overlays) was being parsed as malformed subagent definitions. All 27 lens files moved to `kit/.cursor/lenses/<name>/` with no content changes; `scripts/doctor.mjs` updated to require the new path; `site/docs/context-pack/agents.md`, `site/docs/editor-support/cursor.md`, `site/docs/editor-support/antigravity.md`, and `CONTRIBUTING.md` updated. The page slug `context-pack/agents` was retained for incoming-link compatibility (rename deferred to a future docs refresh). **Migration:** any consumer pinning the old path must update imports from `kit/.cursor/agents/<lens>/...` to `kit/.cursor/lenses/<lens>/...`. The `.cursor/agents/` directory is now free for users to drop real Cursor Subagents.
- **Lens overlay matrix documented** (audit finding F-30). The `fe` and `analytics` lenses are intentionally overlay-free; each `base.md` now documents the rationale (no platform-specific FE/analytics guidance without inventing claims). Other lenses (PM, Design, Discovery, QA, Validation, Security) keep their existing `data-platform` / `developer-platform` overlays.

---

## [1.4.0] - 2026-02-19

### Added

- **@Codebase and context references guide in daily-workflow docs** — New page `site/docs/daily-workflow/context-references.md`: three ways to give context (@Codebase, @file, docs/ai/), when to use and when not to use @Codebase, how Cursor indexes and how .cursorignore controls it, how docs/ai/ fits in, recognizing context rot; linked from context-windows and sidebar.
- **5-minute quick start in README and docs intro** — New "⚡ Quick start (5 minutes)" section in README (get files, fill config, paste Session Kickoff, type task); same content as tip admonition on docs home; install-by-copying has "New here?" callout linking to quick start.
- **Agents explainer documentation** — New doc `site/docs/context-pack/agents.md`: what an agent is, agents vs rules vs prompts, included agents (Security, PM, Design, Discovery, FE, QA, Validation, Analytics), when to activate, platform overlays; linked from intro and Context pack sidebar.
- **MIT License** — LICENSE at repo root; README License section added.
- **kit/.cursor/rules/README.md** — Rule numbering convention documented (ranges 00–99, 02 vs 41 resolution, gap 02→05).
- **CONTRIBUTING.md** — Contributing guide at repo root (setup, golden rule, adding rules/agents/docs, doctor, release pointer, PR template, what not to do).
- **SECURITY.md** — Vulnerability disclosure policy (supported versions, GitHub private reporting, in-scope/out-of-scope).
- **.cursorignore template in kit/** — Recommended entries with setup documentation; sync-starter copies it to starter.
- **MCP template (kit/.cursor/mcp.json) and setup documentation**
- **25-testing.mdc** — Cursor rule enforcing test coverage on business logic and security-sensitive IMPLEMENT outputs.

### Changed

- **cursor-ai-kit.config.json** — Reformatted to pretty-printed JSON with explanatory `__comment`; no semantic changes.
- **ai-config.md** — Renamed TODO headings (e.g. "Design system — fill in yours"), added inline commented Acme SaaS example and fill-in reminder comments to reduce new-user confusion.

### Fixed

- **Resolved duplicate security-stop-gate rule files (02 and 41)** — Removed duplicate `02-security-stop-gate.mdc`; kept `41-security-stop-gate.mdc` as the single always-on security stop gate (same content, no dangling references).

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

## [1.1.0] - 2025-02-17 (initial public release)

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
