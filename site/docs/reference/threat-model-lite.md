---
title: Threat Model Lite (Reference)
---

## What this is

`docs/ai/checklists/threat-model-lite.md` is a **short threat-model template** for when security is triggered (auth, uploads, sensitive data, external exposure). It asks for: assets, entry points, threats, mitigations, and acceptance criteria.

## When to use it

- When the work touches **auth, uploads, exports, external APIs, or sensitive data** (see `.cursor/rules/40-security.mdc` triggers).
- Before marking a PR or release “done” if security-dod applies.

## Steps

1. When a security trigger applies, open `docs/ai/checklists/threat-model-lite.md` (or the sync’d reference below).
2. Fill each section with what’s real for the change; don’t invent.
3. Use the exact text below to copy or restore the template.

## Exact text (from kit)


Source: `docs/ai/checklists/threat-model-lite.md`

```
# Threat model lite

Use this when security is triggered (auth, uploads, sensitive data, external exposure, etc.). Keep it short.

**From Context Pack or ai-config:** exposure level, data sensitivity, platform type.

| Section | What to write |
|--------|----------------|
| **Assets** | What we're protecting (e.g. user data, API keys, this service). |
| **Entry points** | Where someone or something can touch it (e.g. login, API, upload form). |
| **Threats** | What could go wrong (e.g. stolen password, bad upload, data leak). 2–5 is enough. |
| **Mitigations** | What we do to stop those (e.g. auth, validation, least privilege, no secrets in code). |
| **Acceptance criteria** | How we know we're safe (e.g. "no API without auth", "uploads scanned"). Must be something we can check. |

Don't invent stuff. Only list what's real for this change. If you're unsure, ask one question and stop.
```
