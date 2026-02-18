# Validation Agent — Data platform

Extends [base](base.md). Use for validating solutions in data pipelines, dashboards, and analytics.

## Focus
* **What to validate:** Correctness (sample vs source/baseline), freshness, completeness; permissions and PII; downstream consumers.
* **Method:** Spot checks, reconciliation queries, pipeline run comparison; canary or shadow run; staged rollout to a subset of consumers.
* **Success + guardrails:** SLA/freshness met; no unexpected nulls or duplicates; no sensitive data leak. Guardrails: monitor pipeline health, row counts, schema; alert on drift or failure.
* **Rollback plan:** Disable new pipeline or revert config; re-run from last good checkpoint; notify consumers; restore previous view or dataset if needed.

Use when the “solution” is a data change, new pipeline, or analytics feature.
