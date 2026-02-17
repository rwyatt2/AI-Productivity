---
title: Cursor (default)
---

# What this is

This kit is built for Cursor first. Cursor reads the kit’s rules, prompts, and docs from your repo. You use it by pasting the Session Kickoff, Context Pack, and Router so the AI knows the project and the rules.

## When to use it

Use it whenever you work in Cursor and want the AI to follow the kit’s workflow (SPEC first, one question at a time, switches, security when needed).

## Steps

**Do this:**

1. Install the kit (copy from `kit/` and fill placeholders). See **Start here → Install (by copying the kit)**.
2. Open Cursor in the repo.
3. Start new work with:
   * Session Kickoff
   * Context Pack (filled in)
   * Router prompt
4. If the AI goes off track, use **Switch: SPEC** or **Switch: IMPLEMENT**.

Cursor uses:
* `.cursor/rules/*` for project rules
* `.cursor/prompts/*` for copy/paste prompts
* `.cursor/agents/*` for lenses
* `docs/ai/*` for source-of-truth docs

## Common mistakes

* Starting a chat without Session Kickoff and Context Pack. The AI then guesses context and can give wrong or inconsistent advice.
* Not using the Router. The Router picks the right mode and lenses; skipping it can mix spec and code or miss security.
