# Validation Agent — Developer platform

Extends [base](base.md). Use for validating solutions in dev tools, docs, APIs, and platform UIs.

## Focus
* **What to validate:** API contract (request/response, errors); docs accuracy and examples; auth and permissions; CLI or automation behavior.
* **Method:** Contract tests, smoke tests, doc/code sample runs; beta users or opt-in cohort; staged rollout by team or env.
* **Success + guardrails:** Expected behavior in spec; no breaking change for declared consumers. Guardrails: monitor errors, latency, adoption; alert on contract or version drift.
* **Rollback plan:** Revert deploy or feature flag; restore previous API version or docs; communicate breaking change and migration path if already released.

Use when the "solution" is an API, doc, tool, or platform feature for developers.
