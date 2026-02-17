---
title: Cursor Rules - Operating System (Reference)
---

## What this is

`.cursor/rules/00-operating-system.mdc` is a **Cursor rule** that tells the AI how to behave: cross-platform paths, one question at a time, and how to use **Switch: SPEC** / **Switch: IMPLEMENT**. Cursor loads it automatically when you open the repo.

## When to use it

- You **don’t edit this file** for normal use. It’s part of the kit you copied.
- If you need to tweak behavior (e.g. default OS or path style), edit the file in your repo; the docs show the canonical version.

## Steps

1. Ensure the kit is at your **project root** so Cursor sees `.cursor/rules/`.
2. Open the repo in Cursor; rules load automatically.
3. To see or copy the exact text (e.g. for another editor), use the block below.

## Exact text (from kit)


Source: `.cursor/rules/00-operating-system.mdc`

```
---
description: Operating system and environment rules
---

# Operating system

- Prefer cross-platform paths and commands unless the project is explicitly OS-specific.
- Note the OS when it affects behavior (e.g. line endings, path separators).
```
