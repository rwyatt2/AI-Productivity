---
title: Google Antigravity
---

# What this is

The kit also works with **Google Antigravity**. The repo has a `.agent/rules/` directory with Markdown rule files. Antigravity loads them automatically when you open the repo, so the AI follows the same ideas: plan first (SPEC), ask one question at a time, don’t invent things, and include security when you touch sensitive stuff.

## When to use it

Use it when you prefer Antigravity over Cursor or Copilot but want the same workflow and safety habits. The rules are plain Markdown (same content as the Cursor rules, no YAML front matter).

## Steps

**Do this:**

1. Install the kit (copy from `kit/` and fill placeholders). See **Start here → Install (by copying the kit)**.
2. Open the repo in Google Antigravity. The `.agent/rules/` directory is loaded automatically; you don’t need to paste rules.
3. Start new work with Session Kickoff, Context Pack (filled in), and Router prompt so the AI knows the project and the rules.
4. If the AI goes off track, use **Switch: SPEC** or **Switch: IMPLEMENT**.

Antigravity uses:
* `.agent/rules/*.md` for project rules (plain Markdown; same content as Cursor rules)
* `docs/ai/*` for source-of-truth docs

## Common mistakes

* Not having the kit in the repo. Without `.agent/rules/`, Antigravity won’t follow the kit’s rules.
* Expecting Cursor-specific features (e.g. `.cursor/prompts/`, `.cursor/agents/`) in Antigravity. Antigravity uses `.agent/rules/` only; use the same Session Kickoff, Context Pack, and Router text from the docs when you start a session.
