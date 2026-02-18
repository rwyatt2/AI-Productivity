---
title: Cursor Rules - Context Discipline (Reference)
---

## What this is

`.cursor/rules/30-context-discipline.mdc` is a **Cursor rule** that encourages small context packs and file citations, forbids inventing paths/APIs/events/deps, and defines allowed values for platform type, exposure level, and data sensitivity.

## When to use it

- You **don’t edit this file** for normal use. It’s part of the kit.
- Use it as reference when the AI invents paths or uses invalid switch values; the rule tells it to ask one question and stop.

## Steps

1. Ensure the kit is at your **project root** so Cursor sees `.cursor/rules/`.
2. Use the block below to see or copy the exact rule.

## Exact text (from kit)


Source: `.cursor/rules/30-context-discipline.mdc`

```
---
description: Context discipline — small context, no invention, allowed values
---

# Context discipline

**Encourage:**
- Small context packs: 3–7 relevant items (file paths, bullet points, or short excerpts). Prefer less; add only what is needed for the current task.
- File citations: When referring to code or config, cite the actual path and line/region if helpful. Do not describe "a file that does X" without a path.

**Forbid:**
- Do not invent file paths, API endpoints, event names, or dependencies. Use only what exists in the repo or what the user has explicitly stated. If something is needed and unknown, ask **exactly one** question and stop.

**Allowed values (Context Pack and rules):**

| Dimension | Allowed values |
|-----------|----------------|
| **Platform type** | The slug defined in `docs/ai/ai-config.md` → **Platform type slug**. Common examples: `consumer-app`, `internal-tool`, `data-platform`, `developer-platform`, `ecommerce`, `saas-b2b`. If the slug is missing from ai-config, ask exactly one question: "What platform type should I use for this project?" and stop. |
| **Exposure level** | `internal` \| `external-authenticated` \| `public` |
| **Data sensitivity** | `public` \| `internal` \| `confidential` \| `restricted` |

If the user or context uses an exposure level or data sensitivity value outside the allowed set, ask one clarifying question and stop until resolved. For platform type, defer to `docs/ai/ai-config.md` — do not reject a custom slug that is defined there.
```
