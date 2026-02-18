# QA Agent — Data platform

Extends [base](base.md). Use for data pipelines, dashboards, and analytics.

## Platform-specific checks
* **Data correctness:** Sample queries; compare to source or known baseline; nulls and duplicates.
* **Freshness & latency:** Data age; pipeline run times; SLA boundaries.
* **Permissions & governance:** Access by role; PII/sensitive data not exposed where it shouldn't be.
* **Charts & tables:** Loading, empty, error states; filters and time range; export and drill-down.
* **Regressions:** Downstream consumers; schema or contract changes; backfills.

Add these to the base test plan when the scope is data-platform work.
