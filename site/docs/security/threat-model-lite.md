---
title: Threat model (lite)
---

# What this is

A threat model is a short checklist that says: what are we protecting, who could attack it, and what do we do about it? It doesn’t have to be long. It just makes risks clear so you don’t forget them.

## When to use it

Use it when security triggers apply: login, permissions, sensitive data, uploads, exports, or anything that touches confidential or restricted data.

## Steps

**Do this:**

1. Copy the exact template from **Reference → Cursor Rules - Security** or from the kit file `docs/ai/checklists/threat-model-lite.md`.
2. Fill in:
   * **Exposure level** — internal, external-authenticated, or public
   * **Data sensitivity** — public, internal, confidential, or restricted
   * **Assets to protect** — e.g. user data, credentials
   * **Entry points** — e.g. login form, API, upload
   * **Top threats** — e.g. someone steals a session, someone exports all data
   * **Mitigations** — e.g. rate limits, permission checks, no raw secrets in logs
   * **Security acceptance criteria** — short list of things you can test (e.g. “Unauthorized user gets 403”)
3. Keep it to one page. Update it when the feature or risks change.

## Common mistakes

* Skipping it because “we’re not a bank.” Even small features can leak data or be abused; the lite model is fast.
* Writing threats that are too vague. “Hackers” is vague. “Someone could call the API without a token and read all users” is clear.
* Not writing testable acceptance criteria. Each criterion should be something you can verify (e.g. a test or a manual check).
