---
name: context-pack
description: >-
  Build a Context Pack with platform type, exposure level, and data sensitivity.
  Use when the user invokes /context-pack, starts a session after kickoff, or
  needs to set project context for the AI.
---

# Context Pack

Paste or invoke this at the start of a session after Session Kickoff. Fill in
the placeholders.

## Template

**Platform type:** _(use the slug from `docs/ai/ai-config.md`, e.g. `consumer-app`, `data-platform`, `saas-b2b`)_

**Exposure level:** [ internal | external-authenticated | public ]

**Data sensitivity:** [ public | internal | confidential | restricted ]

---

_(Add 3–7 relevant file references or short bullet points about the current task.)_

## Instructions

1. If the user provides values, confirm them in a short summary.
2. If values are missing and `docs/ai/ai-config.md` exists, pull defaults from there.
3. If values are still missing, ask **exactly one** question to resolve the highest-priority unknown and stop.
