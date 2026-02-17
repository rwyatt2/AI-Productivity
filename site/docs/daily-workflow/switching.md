---
title: Switching modes (no confusion)
---

Sometimes AI starts doing the wrong thing.

That is normal.

We fix it with switch commands.

## Switch commands
Type one of these:
* Switch: SPEC
* Switch: IMPLEMENT

## What the AI must do when switching
It must output a short "Handoff Summary":
* current goal
* what we decided
* key constraints
* what is unknown
* next step

Then it continues in the new mode.

## Why this prevents confusion
It makes the current state explicit.
So you don't lose work and the AI does not mix spec text with code text.
