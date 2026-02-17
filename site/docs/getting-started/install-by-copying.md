---
title: Install (by copying the kit)
---

# What this is

You install the kit by copying files. No npm install needed.

You copy everything from the `kit/` folder into the root of your project.

## When to use it

Do this when you want to add the AI Kit to a new or existing project.

## Steps

**Do this:**

1. Copy everything inside the `kit/` folder into the root of your target repo.
2. Check that your repo now has:
   * `.cursor/` (rules and prompts)
   * `docs/ai/` (config and source of truth)
   * `.github/` (PR template and Copilot instructions)
3. Open `docs/ai/ai-config.md`. Fill in the Design System part:
   * Design system name
   * Design system docs (a link)
   * Design system imports or package name
4. Open Cursor in the repo. In a new chat, paste:
   * Session Kickoff (see Daily workflow)
   * Context Pack template
   * Router prompt
5. If something is missing, the AI should ask exactly ONE question and wait. Answer it, then it continues.

## Common mistakes

* Not filling the Design System placeholders. The kit still works, but the AI may guess UI patterns and look inconsistent.
* Pasting too much at once. Keep the Context Pack short. Use 3–7 relevant files and bullet points.
* If the AI feels wrong, say **Switch: SPEC** or **Switch: IMPLEMENT** instead of starting over without a plan.
