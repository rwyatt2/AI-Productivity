---
title: Router (Reference)
---

## What this is

`.cursor/prompts/20-router.md` is the **Router** prompt. It tells the AI how to choose between SPEC and IMPLEMENT behavior using the Context Pack (platform type, exposure, data sensitivity) and to ask one question if platform type is missing.

## When to use it

- When you need the AI to **switch or stick to SPEC vs IMPLEMENT** based on the Context Pack.
- When the AI is mixing planning and code in one response; paste the Router to enforce the split.

## Steps

1. Ensure your Context Pack is in the chat (platform type, exposure, data sensitivity).
2. Paste `.cursor/prompts/20-router.md` (or the exact text below) when you want SPEC/IMPLEMENT routing applied.

## Exact text (from kit)


Source: `.cursor/prompts/20-router.md`

```
# Router

Use this when you need the AI to choose between SPEC and IMPLEMENT behavior based on the Context Pack.

---

**Inputs (from Context Pack):**
* Platform type: [ data-platform | developer-platform ]
* Exposure level: [ internal | external-authenticated | public ]
* Data sensitivity: [ public | internal | confidential | restricted ]
* Current task or question

**Rules:**
* If platform type is missing and cannot be inferred from context: ask **exactly one** question (e.g. "Is this work for a data platform or a developer platform?") and stop.
* **SPEC behavior:** User said "Switch: SPEC" or the ask is clearly planning/scoping. Output: scope, acceptance criteria, open questions. No code. Apply PM / Discovery / Design / Security agents as relevant; use exposure and data-sensitivity overlays when security is in scope.
* **IMPLEMENT behavior:** User said "Switch: IMPLEMENT" or the ask is clearly code/build. Output: files to change, plan, diffs, verification. Proceed with minimal safe changes. Apply FE / QA / Validation / Security agents as relevant; use exposure and data-sensitivity overlays when security is in scope.

**Output:** Proceed in the chosen mode. Do not mix SPEC and IMPLEMENT in one response unless the user explicitly asks for both.
```
