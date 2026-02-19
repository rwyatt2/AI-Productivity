# AI Productivity Kit


[![Release](https://img.shields.io/github/v/release/rwyatt2/AI-Productivity?include_prereleases=&sort=semver&style=flat-square)](https://github.com/rwyatt2/AI-Productivity/releases)
[![Starter sync](https://github.com/rwyatt2/AI-Productivity/actions/workflows/check-starter-sync.yml/badge.svg?style=flat-square)](https://github.com/rwyatt2/AI-Productivity/actions/workflows/check-starter-sync.yml)
[![Deploy docs](https://github.com/rwyatt2/AI-Productivity/actions/workflows/deploy-pages.yml/badge.svg?style=flat-square)](https://github.com/rwyatt2/AI-Productivity/actions/workflows/deploy-pages.yml)
[![Docs](https://img.shields.io/badge/docs-site-blue?style=flat-square)](https://rwyatt2.github.io/AI-Productivity/)
[![Editors](https://img.shields.io/badge/editors-Cursor%20%C2%B7%20Copilot-8A2BE2?style=flat-square)](https://github.com/rwyatt2/AI-Productivity#readme)

A small **AI Kit** for working faster and more safely with Cursor (and optionally GitHub Copilot). It gives you a clear workflow: plan first, code second, and security checks when it matters.

**kit/ is canonical.** Only edit files in `kit/`. The `starter/` folder is generated from `kit/` — do not edit `starter/` directly.



## What it does

- **Spec-first** — Clarify the problem and acceptance criteria before code.
- **Two modes** — **SPEC** (planning, PM, design, security) and **IMPLEMENT** (code, tests, safe diffs). Say `Switch: SPEC` or `Switch: IMPLEMENT` when the conversation goes the wrong way.
- **One question at a time** — The AI asks exactly one question when it needs input, then continues.
- **Advisories** — Every response starts with a short block: route (SPEC/IMPLEMENT), recommended model, context risk, and when to switch or start a new thread.
- **Security stop gate** — For high-risk work (auth, permissions, exports, uploads, integrations, confidential data), the AI asks one security question and stops until you answer.

## Get started

1. **Read the docs** — [What is this?](https://rwyatt2.github.io/AI-Productivity/docs/getting-started/what-is-this) and [Install by copying](https://rwyatt2.github.io/AI-Productivity/docs/getting-started/install-by-copying).
2. **Get the kit** — Download [Releases](https://github.com/rwyatt2/AI-Productivity/releases) (kit-only or starter zip) or copy from `kit/` into your project root.
3. **Fill placeholders** — Design system and project info in `docs/ai/`. See [What to fill in](https://rwyatt2.github.io/AI-Productivity/docs/getting-started/what-to-fill-in).
4. **Use the workflow** — Session Kickoff, Context Pack, Router. [Daily workflow (SPEC-first)](https://rwyatt2.github.io/AI-Productivity/docs/daily-workflow/spec-first).

Full guide: **[Docs site](https://rwyatt2.github.io/AI-Productivity/)**.

## Docs workflow (maintainers)

Reference docs are generated from **kit** so they stay in sync:

1. **Edit** kit files in `kit/` (e.g. `kit/docs/ai/ai-config.md`, `kit/.cursor/rules/*`, `kit/.github/*`).
2. **Run** `npm run sync:starter` to regenerate `starter/` from `kit/`.
3. **Run** `npm run sync` to regenerate `site/docs/reference/*`.
4. **Commit** the updated `starter/` (if changed) and `site/docs/reference/*` pages.

### Commands (from repo root)

| Command | Description |
|--------|-------------|
| `npm run sync:starter` | Regenerate `starter/` from `kit/` |
| `npm run sync` | Regenerate `site/docs/reference/*` from kit |
| `npm run site:start` | Start the docs site locally |
| `npm run site:build` | Build the docs site |

## Version

See [What's New](https://rwyatt2.github.io/AI-Productivity/docs/whats-new) for the changelog. Current kit version is in `kit/cursor-ai-kit.config.json`.

**Badges** (update `rwyatt2/AI-Productivity` in the URLs if you use a fork):

| Badge | What it shows |
|-------|----------------|
| Release | Latest GitHub release. Push a version tag (e.g. `v1.3.0`) to create/update the release with **ai-kit-only.zip** and **ai-kit-starter.zip**; see [RELEASING.md](RELEASING.md). |
| Starter sync | CI passes when `starter/` matches `kit/` — run `npm run sync:starter` and commit before merging. |
| Deploy docs | GitHub Pages deploy for the docs site (runs on push to `main`). |
| Docs | Link to the docs site. |
| Editors | This kit targets Cursor and GitHub Copilot. |
