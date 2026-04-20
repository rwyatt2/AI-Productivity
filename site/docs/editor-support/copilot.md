---
title: GitHub Copilot
---

# What this is

The kit also works with GitHub Copilot (in VS Code and elsewhere). The repo has a file that tells Copilot to use the same ideas: plan first (SPEC), ask one question at a time, don't invent things, and include security when you touch sensitive stuff.

## When to use it

Use it when you prefer Copilot over Cursor but want the same workflow and safety habits.

## Steps

**Do this:**

1. Install the kit. The file `.github/copilot-instructions.md` is part of the kit. Copilot reads it as the repo-wide baseline.
2. That file tells Copilot to:
   * Default to SPEC-first (plan before code)
   * Ask exactly one question when unsure
   * Not invent file paths or APIs
   * Include security when triggers apply (login, permissions, sensitive data, etc.)
3. Keep things consistent: use the same Context Pack template and the same switches (platform type, exposure, data sensitivity) as in Cursor.

## Path-specific instructions

The kit includes **path-specific Copilot instructions** that activate automatically when Copilot works on matching files:

* `.github/instructions/security.instructions.md` — Loaded when touching `auth/`, `authz/`, `payments/`, `uploads/`, `webhooks/`, or `secrets/` paths. Provides the full security stop gate, threat-model-lite requirement, and indirect-injection defence.
* `.github/instructions/tests.instructions.md` — Loaded when touching test or spec files (`*.test.*`, `*.spec.*`). Enforces the test-coverage-or-rationale rule.

These supplement the repo-wide `copilot-instructions.md` so security and testing rules are applied with precision rather than every request.

## Prompt files (slash commands)

The kit ships **Copilot prompt files** under `.github/prompts/`. In VS Code Copilot Chat, type `/` followed by the prompt name:

* `/session-kickoff` — Start a new session with the kit protocol (SPEC-first, 85% gate, one-question).
* `/context-pack` — Fill and paste your Context Pack (platform type, exposure, data sensitivity).
* `/router` — Route between SPEC and IMPLEMENT based on your Context Pack.
* `/handoff-summary` — Generate a max-8-bullet handoff summary for switching context.

These are the same prompts available in Cursor (under `.cursor/prompts/`), adapted with Copilot-compatible YAML frontmatter.

## Common mistakes

* Not having the kit in the repo. Without `.github/copilot-instructions.md`, Copilot won't follow the kit's rules.
* Using a different Context Pack or different labels in Copilot. Use the same template and terms so behavior matches Cursor.
* Not using the slash commands. The `/session-kickoff` and `/context-pack` prompts save time vs. copy-pasting prose into chat.
