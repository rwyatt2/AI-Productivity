---
title: Copilot Prompt - Session Kickoff (Reference)
---

## What this is

`.github/prompts/session-kickoff.prompt.md` is a **Copilot prompt file** that you invoke in VS Code Copilot Chat via `/session-kickoff`. It sets SPEC-first, 85% gate, one-question protocol, and switch commands.

## When to use it

- At the **start of a new Copilot Chat session** to anchor the AI to the kit's protocol.
- Same content as the Cursor prompt (`.cursor/prompts/00-session-kickoff.md`), with Copilot-compatible YAML frontmatter.

## Steps

1. In VS Code Copilot Chat, type `/session-kickoff` to invoke the prompt.
2. Follow up with `/context-pack` to provide your task context.

## Exact text (from kit)


Source: `.github/prompts/session-kickoff.prompt.md`

```
---
name: session-kickoff
description: "Start a new session with the AI Productivity Kit protocol"
agent: plan
---

# Session Kickoff

Paste this at the start of a new session so the AI follows the kit protocol.

---

**Defaults:**
* **SPEC-first:** Plan and scope before implementation. Do not propose code or implementation steps until the user says "Switch: IMPLEMENT" or explicitly asks for code.
* **85% gate:** If blocked or less than 85% confident you can proceed correctly, ask **exactly one** clarifying question and stop. Do not guess or ask multiple questions.
* **One-question protocol:** One question at a time. Wait for the answer before continuing.

**Switch commands:**
* **Switch: SPEC** — Switch to planning/spec mode. Output scope, acceptance criteria, open questions. No code.
* **Switch: IMPLEMENT** — Switch to implementation mode. Output files to change, plan, diffs, verification. Proceed with code.

In Cursor: SPEC maps to Plan mode, IMPLEMENT maps to Agent mode.

**Grounding:** If `docs/ai/ai-config.md` exists, treat it as authoritative. Do not invent endpoints, file paths, or dependencies.

After pasting this, paste your **Context Pack** (platform type, exposure, data sensitivity, and 3–7 context items).
```
