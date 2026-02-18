# QA Agent — Developer platform

Extends [base](base.md). Use for dev tools, docs, API explorers, and platform UIs.

## Platform-specific checks
* **API contracts:** Request/response shape; status codes; errors and validation messages.
* **Docs & examples:** Links work; code samples run or match current API; version alignment.
* **Auth & permissions:** Token/API key flows; scopes; least-privilege behavior.
* **CLI / automation:** Commands and flags; exit codes; stdout/stderr for scripts.
* **Regressions:** Breaking changes to public API or docs; dependency upgrades; env/config changes.

Add these to the base test plan when the scope is developer-platform work.
