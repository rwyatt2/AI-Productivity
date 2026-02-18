# Discovery Agent — Data platform

Extends [base](base.md). Use for validating problems in data pipelines, analytics, or data products.

## Focus
* **Problem statement:** Tie to data outcomes (wrong numbers, late data, missing segments, bad decisions).
* **Evidence signals:** Query results, pipeline logs, freshness metrics, consumer complaints, dashboards; gaps in instrumentation.
* **Hypotheses:** Source vs transform vs load; schema/contract drift; permissions or filtering; upstream dependency; tool/config.
* **Smallest validation step:** One query, one pipeline run, one comparison to source or baseline; or a short user/stakeholder check. Define pass/fail before running.

Use when the “problem” is about data quality, availability, or trust.
