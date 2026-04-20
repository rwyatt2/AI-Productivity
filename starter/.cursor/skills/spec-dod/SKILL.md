---
name: spec-dod
description: >-
  Validate a spec against the Definition of Done checklist. Use when the user
  invokes /spec-dod, asks "is this spec ready?", or finishes a SPEC-mode
  planning session and needs a readiness gate.
---

# Spec Definition of Done

Run this checklist against the current spec. Every box must be checked before
the spec is ready for implementation.

## Checklist

- [ ] **Scope** — What we're building is written in a few bullets. In scope and out of scope are clear.
- [ ] **Acceptance criteria** — We have a short list of "done when …" that anyone can check.
- [ ] **UX states** — Default, loading, empty, error, success are called out (or we said which we skip and why).
- [ ] **A11y** — We said what we'll check for focus, labels, and keyboard (or deferred with a reason).
- [ ] **Risks and open questions** — We listed what could go wrong and what we still don't know (or "none").
- [ ] **Platform type, exposure, data sensitivity** — We stated them (from ai-config defaults or Context Pack). If we didn't, we asked one question and got an answer.

## Verdict

If any box is unchecked, the spec is **not ready for implementation**.
State which items pass, which fail, and what the user needs to resolve.
