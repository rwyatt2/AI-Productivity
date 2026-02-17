---
title: Lenses (sub-agents)
---

Lenses are "thinking hats."

The AI uses different lenses to avoid missing things.

## The main lenses
* Discovery: are we solving the right problem?
* PM: what are the acceptance criteria?
* Design: what are the UX states and interactions?
* Analytics: how do we measure success?
* Security: what could go wrong?
* FE: how do we implement the code?
* QA: how do we test it?

## Key idea
You do not need to manually run each lens.
The Router decides what to run.

SPEC mode usually uses:
* PM + Design
and adds:
* Discovery, Analytics, Security when needed

IMPLEMENT mode usually uses:
* FE + QA
and adds:
* Security notes when needed
