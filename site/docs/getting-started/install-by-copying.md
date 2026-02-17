---
title: Install (by copying the kit)
---

You can use this kit without npm.

## Step 1: Copy the kit files
Copy everything inside the `kit/` folder into the root of your target repo.

After copying, your target repo should contain:
* `.cursor/` (rules, prompts, agents)
* `docs/ai/` (the source of truth)
* `.github/` (PR template, Copilot instructions)

## Step 2: Fill the placeholders (important)
The only parts that need your input are in `docs/ai/`. See **[What to fill in](what-to-fill-in)** for the full list.

At minimum, open `docs/ai/ai-config.md` and fill the Design System section:

* `Design system name: <...>`
* `Design system docs: <...>`
* `Design system imports/package: <...>`

If you don't fill these, the kit still works, but AI may guess UI patterns.

## Step 3: Confirm it works
Open Cursor in the repo.

In a new chat:
* paste the Session Kickoff (see Daily Workflow)
* paste the Context Pack template
* paste the Router prompt

If it is missing important info, it should ask EXACTLY ONE question and stop.

## If something feels wrong
Use:
* Switch: SPEC
or
* Switch: IMPLEMENT
