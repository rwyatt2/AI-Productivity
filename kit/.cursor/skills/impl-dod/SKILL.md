---
name: impl-dod
description: >-
  Validate an implementation against the Definition of Done checklist. Use when
  the user invokes /impl-dod, asks "is this ready to ship?", or finishes an
  IMPLEMENT-mode session and needs a readiness gate.
---

# Implementation Definition of Done

Run this checklist against the current implementation. Every box must be
checked before the work is ready to ship.

## Checklist

- [ ] **Files** — We listed what we created or changed. No surprise files.
- [ ] **Plan** — We had a short step-by-step plan and we followed it (or said why we changed it).
- [ ] **Diffs** — The code changes are small and clear. No huge refactors unless we said so.
- [ ] **Verification** — We said how to check it works (e.g. run X, click Y, see Z).
- [ ] **Tests / rationale** — We ran existing tests or said why we didn't add a new one (or one sentence on test plan).
- [ ] **Security** — If the work touched auth, uploads, sensitive data, or external exposure: we ran the security checklist and added security notes (see impl package contract).

## Verdict

If any box is unchecked, the implementation is **not ready to ship**.
State which items pass, which fail, and what the user needs to resolve.
