# Security Stop Gate (Hard Stop)

## Purpose
When security risk is high, do not proceed on guesses.
Ask EXACTLY ONE security question and stop until it is answered.

## What counts as high-risk work (any trigger)
High-risk is TRUE if any are involved:
* Auth/authentication/session handling
* Permissions/roles/access control/authz
* Admin-only or privileged actions
* Data export / download / bulk actions / reporting
* Secrets/tokens/credentials
* File uploads, URL ingestion, rich text/markdown rendering
* Webhooks/integrations/external network calls
* Exposure level is external-authenticated or public
* Data sensitivity is confidential or restricted

## Required security context (must be known or inherited)
Before you provide a plan, implementation, or security guidance for high-risk work, confirm the minimum context is known:

* Exposure level: internal | external-authenticated | public
* Data sensitivity: public | internal | confidential | restricted
* Authz model: what determines access (roles/permissions/ownership rules)
* Sensitive data handling: is PII/secrets present, and what must never be logged or stored client-side?
* Secrets mechanism (when applicable): env vars / vault / secrets manager / other

## Hard stop rule
If high-risk is TRUE and ANY required context above is missing or unclear:
* Ask EXACTLY ONE clarifying question that resolves the highest-risk unknown.
* STOP. Do not provide a plan, code, or additional questions.

After the user answers:
* Restate the resolved security assumptions in <= 3 bullets.
* Then proceed.

## Examples of the ONE question to ask (choose only one)
* "What is the exposure level (internal, external-authenticated, or public)?"
* "Is any data confidential/restricted or PII involved?"
* "What is the authz rule (roles/permissions) for who can do this action?"
* "How are secrets managed here (env vars, vault, etc.)?"
