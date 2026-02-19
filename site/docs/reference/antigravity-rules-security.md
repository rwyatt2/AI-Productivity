---
title: Antigravity Rules - Security (Reference)
---

Source: `.agent/rules/40-security.md`

```
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
