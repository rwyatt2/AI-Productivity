---
title: GitHub Copilot
---

# What this is

The kit also works with GitHub Copilot (in VS Code and elsewhere). The repo has a file that tells Copilot to use the same ideas: plan first (SPEC), ask one question at a time, don’t invent things, and include security when you touch sensitive stuff.

## When to use it

Use it when you prefer Copilot over Cursor but want the same workflow and safety habits.

## Steps

**Do this:**

1. Install the kit. The file `.github/copilot-instructions.md` is part of the kit. Copilot reads it.
2. That file tells Copilot to:
   * Default to SPEC-first (plan before code)
   * Ask exactly one question when unsure
   * Not invent file paths or APIs
   * Include security when triggers apply (login, permissions, sensitive data, etc.)
3. Keep things consistent: use the same Context Pack template and the same switches (platform type, exposure, data sensitivity) as in Cursor.

## Common mistakes

* Not having the kit in the repo. Without `.github/copilot-instructions.md`, Copilot won’t follow the kit’s rules.
* Using a different Context Pack or different labels in Copilot. Use the same template and terms so behavior matches Cursor.
