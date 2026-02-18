---
title: Security DoD (Reference)
---

## What this is

`docs/ai/checklists/security-dod.md` is the **Security definition of done**: switches, no secrets in code/logs, least privilege, threat-model-lite, security acceptance criteria.

## When to use it

- When the work touches auth, uploads, sensitive data, or external systems (see `.cursor/rules/40-security.mdc` triggers).
- When in doubt, run it. Use the exact text below to copy or restore.

## Exact text (from kit)


Source: `docs/ai/checklists/security-dod.md`

```
# Security definition of done

Before you ship anything that touches auth, uploads, sensitive data, or external systems, check:

* [ ] **No secrets in code** — No passwords, keys, or tokens in the repo or in logs. Use env or a vault.
* [ ] **No sensitive data in logs** — No PII or secrets in log messages or errors.
* [ ] **Least privilege** — Users and services only have the access they need. We didn't add "just in case" permissions.
* [ ] **Threat-model-lite done** — We filled the threat-model-lite (assets, entry points, threats, mitigations, acceptance criteria). See **threat-model-lite.md**.
* [ ] **Security acceptance criteria** — We have a short list of security checks (e.g. "auth required on X", "no export without role Y") that we can test or review.

If the work didn't touch any security triggers (see 40-security.mdc), you can skip this. When in doubt, run it.
```
