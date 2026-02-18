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

* [ ] **Switches** — Platform type, exposure level, and data sensitivity are set (from ai-config or Context Pack). If unknown, we asked one question and got an answer.
* [ ] **Scope** — What we're building is in a few bullets. In scope and out of scope are clear.
* [ ] **Acceptance criteria** — Short list of "done when …" that anyone can check.
* [ ] **UX states** — Default, loading, empty, error, success are called out (or we said which we skip and why).
* [ ] **A11y** — What we'll check for focus, labels, keyboard (or deferred with a reason).
* [ ] **Risks and open questions** — What could go wrong and what we don't know yet (or "none").
* [ ] **Security** — If the work touches auth, uploads, sensitive data, or external exposure: we noted it and will run security-dod + threat-model-lite in impl.

If any box is unchecked, the spec is not ready for implementation.
```
