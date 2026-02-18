---
title: Impl DoD (Reference)
---

## What this is

`docs/ai/checklists/impl-dod.md` is the **Implementation definition of done**: switches, files, plan, diffs, verification, tests/rationale, security when triggered.

## When to use it

- Before marking implementation "done": ensure every box is checked.
- Use the exact text below to copy or restore the checklist.

## Exact text (from kit)


Source: `docs/ai/checklists/impl-dod.md`

```
# Implementation definition of done

Implementation is "done" when all of these are true:

* [ ] **Switches** — Platform type, exposure level, and data sensitivity match the spec or Context Pack (no guessing).
* [ ] **Files** — We listed what we created or changed. No surprise files.
* [ ] **Plan** — Short step-by-step plan; we followed it or said why we changed it.
* [ ] **Diffs** — Changes are small and clear. No big refactors unless we said so.
* [ ] **Verification** — How to check it works (e.g. run X, click Y, see Z).
* [ ] **Tests / rationale** — We ran existing tests or said why we didn't add one (or one sentence on test plan).
* [ ] **Security** — If the work touched auth, uploads, sensitive data, or external exposure: security-dod and threat-model-lite are done; security notes in the impl package.

If any box is unchecked, the implementation is not ready to ship.
```
