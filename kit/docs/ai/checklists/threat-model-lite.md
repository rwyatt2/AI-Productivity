# Threat model lite

Use when security is triggered (auth, uploads, sensitive data, external exposure). Keep it short.

**Switches (from Context Pack or ai-config):** platform type, exposure level, data sensitivity.

| Section | What to write |
|--------|----------------|
| **Assets** | What we're protecting (e.g. user data, API keys, this service). |
| **Entry points** | Where it can be touched (e.g. login, API, upload form). |
| **Threats** | What could go wrong (e.g. stolen password, bad upload, data leak). 2–5 is enough. |
| **Mitigations** | What we do to stop those (e.g. auth, validation, least privilege, no secrets in code). |
| **Acceptance criteria** | How we know we're safe (e.g. "no API without auth", "uploads scanned"). Must be checkable. |

Only list what's real for this change. If unsure, ask one question and stop.
