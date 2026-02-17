# Launch Checklist (maintainers)

One place for: update kit, sync, deploy docs, publish a release.

---

## 1) How to update the kit

* Edit files under **`kit/`** (canonical source):
  * `kit/.cursor/rules/*`, `kit/.cursor/prompts/*`
  * `kit/docs/ai/*`
  * `kit/.github/*`
  * `kit/cursor-ai-kit.config.json`
* If you add or rename a file that should appear in Reference, update **`scripts/sync-kit-snippets.mjs`** (add or change an entry in the `FILES` array).
* Keep **`starter/`** in sync with `kit/` when the kit changes (same structure and content at the root of `starter/`).

---

## 2) How to run sync

* From the **repo root** run:
  ```bash
  npm run sync
  ```
* This reads from `kit/` and writes/updates **`site/docs/reference/*`** (exact-text pages).
* Then **commit** the updated `site/docs/reference/*` files so the docs don’t drift from the kit.

---

## 3) How to deploy the docs

* **Option A — GitHub Pages (automatic on push to main):**
  * Push to `main`. The workflow **Deploy docs to GitHub Pages** builds the site (with `GITHUB_PAGES=true`) and deploys to Pages.
  * Site URL: `https://rwyatt2.github.io/AI-Productivity/`
* **Option B — Local build:**
  * From repo root: `npm run site:build`
  * To test production build locally: `cd site && npx serve build` then open the URL shown (with base path `/AI-Productivity/` if testing GH Pages).
* Before pushing, run **`npm run sync`** and commit reference changes so the deployed docs match the kit.

---

## 4) How to publish a release

* **Manual:** Follow ** [RELEASING.md](RELEASING.md)** — create the two zips (kit-only, starter) and attach them to a new GitHub Release.
* **Automated (optional):** Push a version tag, e.g. `git tag v1.0.0 && git push origin v1.0.0`. The **Release assets** workflow builds the zips and uploads them to the release for that tag. See RELEASING.md for details.

---

**Quick order:** Edit `kit/` → `npm run sync` → commit `site/docs/reference/*` → push (docs deploy) → when ready, create a release (manual or by pushing a tag).
