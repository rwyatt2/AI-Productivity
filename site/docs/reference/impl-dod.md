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

* [ ] **Files** — We listed what we created or changed. No surprise files.
* [ ] **Plan** — We had a short step-by-step plan and we followed it (or said why we changed it).
* [ ] **Diffs** — The code changes are small and clear. No huge refactors unless we said so.
* [ ] **Verification** — We said how to check it works (e.g. run X, click Y, see Z).
* [ ] **Tests / rationale** — We ran existing tests or said why we didn't add a new one (or one sentence on test plan).
* [ ] **Security** — If the work touched auth, uploads, sensitive data, or external exposure: we ran the security checklist and added security notes (see impl package contract).

If any box is unchecked, the implementation is not ready to ship.
```
