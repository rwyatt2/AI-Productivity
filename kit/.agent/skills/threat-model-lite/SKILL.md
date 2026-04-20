---
name: threat-model-lite
description: >-
  Generate a lightweight threat model for a change that triggers security
  review. Use when the user invokes /threat-model-lite, when security is
  triggered (auth, uploads, sensitive data, external exposure), or when
  /security-dod requires a completed threat model.
---

# Threat Model Lite

Use this when security is triggered. Keep it short and scoped to the current
change.

## Inputs

From Context Pack or `docs/ai/ai-config.md`: exposure level, data sensitivity,
platform type.

## Template

Fill each section. Only list what is real for this change — do not invent
assets or threats. If unsure, ask one question and stop.

| Section | What to write |
|---------|---------------|
| **Assets** | What we're protecting (e.g. user data, API keys, this service). |
| **Entry points** | Where someone or something can touch it (e.g. login, API, upload form). |
| **Threats** | What could go wrong (e.g. stolen password, bad upload, data leak). 2–5 is enough. |
| **Mitigations** | What we do to stop those (e.g. auth, validation, least privilege, no secrets in code). |
| **Acceptance criteria** | How we know we're safe (e.g. "no API without auth", "uploads scanned"). Must be testable or reviewable. |
