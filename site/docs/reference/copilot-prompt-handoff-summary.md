---
title: Copilot Prompt - Handoff Summary (Reference)
---

## What this is

`.github/prompts/handoff-summary.prompt.md` is a **Copilot prompt file** invoked via `/handoff-summary`. It generates a max-8-bullet handoff summary when switching context or handing off to another session.

## When to use it

- When **switching mode** (e.g. SPEC → IMPLEMENT) so the next response starts with a summary.
- When **handing off** to a teammate or a new chat session.

## Steps

1. In VS Code Copilot Chat, type `/handoff-summary`.
2. The AI outputs a summary following the template (max 8 bullets, no code).

## Exact text (from kit)


Source: `.github/prompts/handoff-summary.prompt.md`

```
---
name: handoff-summary
description: "Generate a handoff summary (max 8 bullets) for switching context or sessions"
---

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
