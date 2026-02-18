---
title: Spec DoD (Reference)
---

## What this is

`docs/ai/checklists/spec-dod.md` is the **Spec definition of done**: a checklist (switches, scope, acceptance criteria, UX states, a11y, risks, security) so a spec is ready for implementation.

## When to use it

- Before implementation: ensure every box is checked (or explicitly deferred).
- Run it when the AI produces a spec; use the exact text below to copy or restore.

## Exact text (from kit)


Source: `docs/ai/checklists/spec-dod.md`

```
# Spec definition of done

A spec is "done" when all of these are true:

* [ ] **Scope** — What we're building is written in a few bullets. In scope and out of scope are clear.
* [ ] **Acceptance criteria** — We have a short list of "done when …" that anyone can check.
* [ ] **UX states** — Default, loading, empty, error, success are called out (or we said which we skip and why).
* [ ] **A11y** — We said what we'll check for focus, labels, and keyboard (or deferred with a reason).
* [ ] **Risks and open questions** — We listed what could go wrong and what we still don't know (or "none").
* [ ] **Platform type, exposure, data sensitivity** — We stated them (from ai-config defaults or Context Pack). If we didn't, we asked one question and got an answer.

If any box is unchecked, the spec is not ready for implementation.
```
