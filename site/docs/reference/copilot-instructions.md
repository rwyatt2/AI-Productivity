---
title: GitHub Copilot Instructions (Reference)
---

## What this is

`.github/copilot-instructions.md` gives **GitHub Copilot** high-level instructions so it follows the same one-question-at-a-time and spec-first behavior as the Cursor rules. GitHub uses this file when Copilot is enabled in the repo.

## When to use it

- Use if your team uses **GitHub Copilot** (in IDE or in GitHub). Copy the kit’s `.github/copilot-instructions.md` into your repo so Copilot and Cursor stay aligned.
- If you only use Cursor, this file is optional but harmless.

## Steps

1. Copy `.github/copilot-instructions.md` from the kit into your repo’s `.github/` folder.
2. Optionally tweak the instructions for your org (e.g. add project-specific rules).
3. The exact text is below for reference.

## Exact text (from kit)


Source: `.github/copilot-instructions.md`

```
# Copilot instructions (AI Kit)

- Default to SPEC-first: plan and clarify before writing code.
- If unsure, ask exactly ONE question and wait for an answer.
- Do not invent file paths or APIs; ask for the exact file or spec when needed.
- When touching auth, permissions, sensitive data, uploads, or exports: include security notes and acceptance criteria.
```
