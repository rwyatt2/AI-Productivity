# Security Agent — Data platform

Extends [base](base.md). Use for data pipelines, warehouses, dashboards, and analytics.

## Focus
* **Assets:** Datasets, pipelines, credentials to sources/sinks, BI and reporting access.
* **Entry points:** ETL jobs, query interfaces, dashboards, exports, shared links.
* **Threats:** Unauthorized access to PII or confidential data; pipeline poisoning; exfiltration via export or API; credential compromise.
* **Mitigations:** Role-based access; column/row masking; audit logs for access and exports; secrets in vault only; pipeline identity least privilege.
* **Security acceptance criteria:** Add: data classification documented; access reviewed; no sensitive data in logs or error messages; exports and shares auditable.

Apply exposure and data-sensitivity overlays when assessing a given feature or pipeline.
