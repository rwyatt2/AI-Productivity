# AI-Productivity
A set up for Cursor (or other editors) to utilize the tool to the best of its abilities while also generating the best possible results.

## Docs workflow

Reference docs are generated from the **kit** so they stay in sync with the source of truth:

1. **Update** anything in `kit/`
2. **Run** `npm run sync` to regenerate `site/docs/reference/*`
3. **Commit** the updated `site/docs/reference/*` pages

This keeps the docs airtight: they are literally derived from the kit.
