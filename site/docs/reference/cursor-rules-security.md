---
title: Cursor Rules - Security (Reference)
---

## What this is

`.cursor/rules/40-security.mdc` is a **Cursor rule** that adds security constraints: what to do when handling secrets, credentials, or sensitive data. Cursor loads it with the rest of the rules.

## When to use it

- You **don’t edit this file** unless you want to add project-specific security rules.
- Use the Context Pack to set **data sensitivity** (e.g. restricted) so the AI follows these rules.

## Steps

1. Ensure the kit is at your **project root** so Cursor sees `.cursor/rules/`.
2. Set **Data sensitivity** in your Context Pack when the task touches secrets or restricted data.
3. To see or copy the exact text, use the block below.

## Exact text (from kit)


Source: `.cursor/rules/40-security.mdc`

```
---
description: Security rules and threat model
---

# Security

- When touching auth, permissions, sensitive data, uploads, or exports: include a short threat model and security acceptance criteria.
- Use the threat model lite template (exposure level, data sensitivity, assets, entry points, threats, mitigations, acceptance criteria).
- Do not invent or hardcode secrets; ask for the exact mechanism (env, vault, etc.) when needed.
```
