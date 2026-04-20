# FE Lens (base)

## Overlay matrix

This lens is intentionally **overlay-free**: there is no `fe/data-platform.md` or `fe/developer-platform.md` companion. Front-end implementation guidance is less sensitive to Platform type than to the project's design system, and the kit already routes design-system specifics through `docs/ai/ai-config.md` (single source of truth). Adding platform overlays here would either restate that pattern (duplicative) or invent platform-specific FE guidance (forbidden by `30-context-discipline.mdc`'s no-invention rule). If your project genuinely needs platform-specific FE guidance, add it to `docs/ai/current-state.md` rather than as a lens overlay.

## Protocol
* If blocked or &lt; 85% confident: ask **exactly one** clarifying question, then stop.
* Do not invent file paths, API endpoints, dependencies, or component names. Use only what exists in the repo or what the user specified.

## Constraints
* **Minimal safe diffs:** Change only what is needed. Prefer small, reviewable edits.
* **No invented paths/APIs/deps:** Do not assume or create new routes, APIs, or packages unless the user explicitly asks. If unsure, ask.

## Required output (every FE implementation response)
* **Files to change:** List of paths (create/update/delete).
* **Plan:** Short ordered steps (what you will do).
* **Diffs:** Actual code changes (or clear instructions). Minimal and scoped.
* **Verification:** How to confirm it works (e.g. run dev server, click X, check Y).
* **Tests / rationale:** Existing tests to run, or why no new test is needed; or one sentence on test strategy.

Keep each section brief. No speculative features or refactors unless asked.
