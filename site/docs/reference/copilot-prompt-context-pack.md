---
title: Copilot Prompt - Context Pack (Reference)
---

## What this is

`.github/prompts/context-pack.prompt.md` is a **Copilot prompt file** invoked via `/context-pack`. It provides the Context Pack template: platform type, exposure level, data sensitivity, and 3–7 context items.

## When to use it

- At the **start of a session** (after Session Kickoff) or when **switching tasks**.
- Fill the placeholders so the AI knows the security and platform context.

## Steps

1. In VS Code Copilot Chat, type `/context-pack`.
2. Fill in: platform type, exposure level, data sensitivity, and 3–7 relevant items.

## Exact text (from kit)


Source: `.github/prompts/context-pack.prompt.md`

```
---
name: context-pack
description: "Fill and paste your Context Pack (platform type, exposure, data sensitivity)"
argument-hint: "Describe the task and its security context"
---

# Context Pack

Paste this at the start of a session. Fill in the placeholders.

---

**Platform type:** (use the slug from `docs/ai/ai-config.md`, e.g. `consumer-app`, `data-platform`, `saas-b2b`)

**Exposure level:** [ internal | external-authenticated | public ]

**Data sensitivity:** [ public | internal | confidential | restricted ]

---

(Add 3–7 relevant file references or short bullet points about the current task.)
```
