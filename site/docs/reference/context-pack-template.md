---
title: Context Pack Template (Reference)
---

## What this is

The **Context Pack** is a short message you paste into chat at the start of a session (or when you switch tasks). It tells the AI: platform type, exposure level, data sensitivity, and 3–7 relevant files or bullets. It keeps the AI focused and avoids wrong assumptions.

## When to use it

- At the **start of a new chat** (with Session Kickoff and Router).
- When you **switch to a new task or area** (paste an updated Context Pack).
- So the AI knows **one question at a time** and doesn’t guess platform/risk.

## Steps

1. Copy the template below (or from `.cursor/prompts/10-context-pack.md` in your repo).
2. Fill in: **Platform type** (data-platform | developer-platform), **Exposure level** (internal | external-authenticated | public), **Data sensitivity** (public | internal | confidential | restricted).
3. Add 3–7 relevant file paths or short bullet points for the current task.
4. Paste the filled Context Pack into the chat before or right after Session Kickoff and Router.

## Exact text (from kit)


Source: `.cursor/prompts/10-context-pack.md`

```
# Context Pack

Paste this at the start of a session. Fill in the placeholders.

---

**Platform type:** [ data-platform | developer-platform ]

**Exposure level:** [ internal | external-authenticated | public ]

**Data sensitivity:** [ public | internal | confidential | restricted ]

---

(Add 3–7 relevant file references or short bullet points about the current task.)
```
