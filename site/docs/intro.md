---
sidebar_position: 1
---

# AI Productivity Kit

A small **AI Kit** for working faster and more safely with Cursor (and optionally GitHub Copilot).

## What it does

- **Spec-first** — Clarify the problem and acceptance criteria before code.
- **Two modes** — **SPEC** (planning, PM, design, security) and **IMPLEMENT** (code, tests, safe diffs).
- **One question at a time** — The AI asks exactly one question when it needs input, then continues.
- **Switches** — Say `Switch: SPEC` or `Switch: IMPLEMENT` when the conversation goes the wrong way.

## How SPEC and IMPLEMENT work together

```mermaid
flowchart LR
  task([Your task]) --> route{Need a plan?}
  route -->|yes| spec["SPEC mode\nClarify · Spec · Security"]
  route -->|"code ready"| impl["IMPLEMENT mode\nFiles · Edits · Tests"]
  spec -->|"Switch: IMPLEMENT"| impl
  impl -->|"Switch: SPEC"| spec
```

## Get started

1. **[What is this?](getting-started/what-is-this)** — Overview and big idea.
2. **[Install (by copying the kit)](getting-started/install-by-copying)** — Copy the `kit/` into your repo and fill placeholders.
3. **[Daily workflow (SPEC-first)](daily-workflow/spec-first)** — Session Kickoff, Context Pack, Router.
4. **[Cursor modes](daily-workflow/cursor-modes)** — Chat vs multi-file vs small edits.
5. **[Context windows](daily-workflow/context-windows)** — Overload, rot, and reset.
6. **[Model switching](daily-workflow/model-switching)** — When to use fast vs reasoning vs best-coding.

**Preview the kit files:** See the folder structure and exact text of each file in [Reference → Kit file preview](reference/kit-preview).

Use the **Docs** menu on the left to browse the full guide.
