---
name: security-dod
description: >-
  Validate security readiness before shipping work that touches auth, uploads,
  sensitive data, or external systems. Use when the user invokes /security-dod
  or when a security trigger fires and the implementation needs a security gate.
  Must be explicitly invoked — not auto-applied.
disable-model-invocation: true
---

# Security Definition of Done

Before shipping anything that touches auth, uploads, sensitive data, or
external systems, run this checklist.

## Checklist

- [ ] **No secrets in code** — No passwords, keys, or tokens in the repo or in logs. Use env or a vault.
- [ ] **No sensitive data in logs** — No PII or secrets in log messages or errors.
- [ ] **Least privilege** — Users and services only have the access they need. We didn't add "just in case" permissions.
- [ ] **Threat-model-lite done** — We filled the threat-model-lite (assets, entry points, threats, mitigations, acceptance criteria). See `/threat-model-lite`.
- [ ] **Security acceptance criteria** — We have a short list of security checks (e.g. "auth required on X", "no export without role Y") that we can test or review.

## When to skip

If the work didn't touch any security triggers (see `40-security.mdc`), you
can skip this. When in doubt, run it.

## Verdict

State which items pass, which fail, and what the user needs to resolve before
shipping.
