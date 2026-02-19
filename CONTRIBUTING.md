# Contributing

| Task | Command |
|------|---------|
| Install deps | `npm install && cd site && npm install` |
| Sync starter | `npm run sync:starter` |
| Sync docs | `npm run sync` |
| Health check | `npm run doctor` |
| Build docs | `cd site && npm run build` |

---

## 1. Repo structure

**kit/** is the canonical source (rules, prompts, agents, `docs/ai/`, `.github/`, config). **starter/** is generated from kit by `scripts/sync-starter-from-kit.mjs` — do not edit it. **site/** is the Docusaurus docs site; `site/docs/reference/*` is generated from kit by `scripts/sync-kit-snippets.mjs`. **scripts/** holds sync and doctor tooling. See [LAUNCH_CHECKLIST.md](LAUNCH_CHECKLIST.md) for the full workflow.

## 2. Local setup

From repo root: `npm install`. Then `cd site && npm install` for the docs site. Use `npm run site:start` to run the site locally or `npm run site:build` to build. No install needed in starter; it’s generated.

## 3. The golden rule

**Never edit starter/ or site/docs/reference/* directly.** Edit only **kit/**. After any kit change run `npm run sync:starter` then `npm run sync`, then commit updates to `starter/` and `site/docs/reference/*`. CI fails if starter drifts from kit.

## 4. Adding a new rule file

Create the file under `kit/.cursor/rules/` with a numeric prefix (see [kit/.cursor/rules/README.md](kit/.cursor/rules/README.md) for ranges). If it should appear in Reference, add an entry to the `FILES` array in `scripts/sync-kit-snippets.mjs`. Run `npm run sync:starter`, `npm run sync`, then `npm run doctor`. Commit any changed starter and reference files.

## 5. Adding a new agent or prompt

Add the file under `kit/.cursor/agents/` or `kit/.cursor/prompts/`. Run `npm run sync:starter` (sync copies all of `.cursor/`). Add to `FILES` in `scripts/sync-kit-snippets.mjs` only if you want a reference page. Run `npm run sync` and `npm run doctor` as needed.

## 6. Adding a new source-of-truth doc (kit/docs/ai/)

Create the file under `kit/docs/ai/` (or a subfolder). If it should appear in Reference, add it to `FILES` in `scripts/sync-kit-snippets.mjs` and optionally to `CONTEXT`. Run `npm run sync:starter`, `npm run sync`, then `npm run doctor`. Update `kit/docs/ai/START-HERE.md` if the new file is part of the “read first” flow.

## 7. Running and interpreting the doctor

From repo root: `npm run doctor`. It checks kit completeness, runs sync:starter and sync, verifies no uncommitted changes in `starter/` or `site/docs/reference`, and runs the docs build. It exits 1 on any failure and prints a hint. Fix the reported issue (e.g. commit synced files or add missing kit paths) before merging.

## 8. Release process

See [RELEASING.md](RELEASING.md). Sync and commit before tagging. Version must match `kit/cursor-ai-kit.config.json`. Push a tag (e.g. `v1.3.0`) to trigger the Release assets workflow.

## 9. PR expectations

Use the repo PR template: [.github/pull_request_template.md](.github/pull_request_template.md) (in kit; synced to starter). Fill What, Why, and the checklist. Check-starter-sync and doctor run on PRs and must pass.

## 10. What NOT to do

- **Don’t edit starter/ or site/docs/reference/*** — they are generated from kit.
- **Don’t skip sync** — after editing kit, run `npm run sync:starter` and `npm run sync`.
- **Don’t merge with doctor failing** — fix drift or build errors first.
- **Don’t bump version** without a [CHANGELOG.md](CHANGELOG.md) and [site/docs/whats-new.md](site/docs/whats-new.md) entry.
- **Don’t add a kit file to Reference** without adding it to `scripts/sync-kit-snippets.mjs` `FILES` — otherwise sync won’t publish it.
