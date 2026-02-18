---
title: Start Here (Reference)
---

## What this is

`docs/ai/START-HERE.md` is the **entry point** for the kit’s `docs/ai/` folder. It points you to ai-config, profiles, and checklists so the AI (and you) know how to behave and what “done” means.

## When to use it

- **After installing the kit:** Read it once to see where defaults, profiles, and checklists live.
- **Onboarding others:** Point them to `docs/ai/START-HERE.md` so they find ai-config, spec-dod, impl-dod, security-dod, and threat-model-lite.

## Steps

1. Open `docs/ai/START-HERE.md` in your repo (at project root).
2. Follow the links to ai-config.md, profiles/, and checklists/.
3. Use the exact text below if you need to restore or copy the file.

## Exact text (from kit)


Source: `docs/ai/START-HERE.md`

```
# Start here

This folder tells the AI how to behave and what to check.

**Read first:**
1. **ai-config.md** — Your defaults and project info. The AI treats this as the source of truth.
2. **profiles/** — Use **company.md** for work projects, **personal.md** for side projects. They set different expectations (e.g. stricter for company).
3. **checklists/** — Use them before you call something "done":
   * **spec-dod.md** — Definition of done for a spec (plan).
   * **impl-dod.md** — Definition of done for implementation (code).
   * **security-dod.md** — Security checks before release.
   * **threat-model-lite.md** — Short threat model when security is in play (auth, uploads, sensitive data, etc.).

**Quick rules:** Plan first (SPEC). One question at a time. No inventing paths or APIs. When in doubt, the AI asks one question and stops.
```
