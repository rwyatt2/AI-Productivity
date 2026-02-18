---
title: Handoff Summary (Reference)
---

## What this is

`.cursor/prompts/90-handoff-summary.md` is the **Handoff Summary** template: max 8 bullets for switching context (e.g. SPEC → IMPLEMENT) or handing off to another person or session.

## When to use it

- When you **switch mode** (e.g. say "Switch: IMPLEMENT") so the next response starts with a short handoff.
- When **handing off** to a teammate or a new chat; paste the template and fill the bullets that apply.

## Steps

1. When switching or handing off, the AI should output a Handoff Summary (max 8 bullets) then continue.
2. Use `.cursor/prompts/90-handoff-summary.md` or the exact text below as the template.

## Exact text (from kit)


Source: `.cursor/prompts/90-handoff-summary.md`

```
# Handoff Summary

Use this when switching context (e.g. SPEC → IMPLEMENT) or handing off to another person or session.

---

**Format: max 8 bullets.**

* What was decided or done
* What is in scope (and out of scope)
* Open questions or blockers
* Key files or artifacts
* Next recommended step
* (Optional) Assumptions or constraints
* (Optional) Security/exposure/data-sensitivity notes
* (Optional) Where to look for more detail

Keep each bullet one line. No code. Paste this template and fill only the bullets that apply.
```
