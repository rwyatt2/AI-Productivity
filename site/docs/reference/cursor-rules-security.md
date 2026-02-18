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
description: Security rules — hygiene, triggers, threat-model-lite
---

# Security

**Always-on hygiene (every change):**
- No secrets in code, localStorage, or logs. Use env, vault, or managed secrets only.
- No sensitive data in logs (no PII, tokens, or credentials in log messages or stack traces).
- Least privilege: do not broaden permissions or scope for convenience.
- Dependency caution: do not add or upgrade dependencies without a reason; prefer minimal and maintained.

**Triggers (when any of these are in scope):**
- Auth, roles, permissions, admin flows
- Uploads, user-supplied URLs, rich text or user-generated content
- Integrations, webhooks, or external API calls
- Exports, downloads, or bulk actions
- External exposure (see exposure level: `internal` \| `external-authenticated` \| `public`)
- Sensitive data (see data sensitivity: `public` \| `internal` \| `confidential` \| `restricted`)

**When triggered:** Require **threat-model-lite** plus **security acceptance criteria**. Use exposure level and data sensitivity from the Context Pack (or ask one question if missing). Template: assets, entry points, threats, mitigations, acceptance criteria (testable or reviewable). No invention of assets or threats; scope to the change.

**Consistency:** Align mitigations and acceptance criteria with the chosen exposure level and data sensitivity (e.g. `public` + `restricted` data → strict controls and no PII in responses).
```
