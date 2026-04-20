# Security Agent — Developer platform

Extends [base](base.md). Use for dev tools, APIs, docs, CLIs, and platform UIs.

## Focus
* **Assets:** API keys, tokens, source repos, build artifacts, deployment credentials.
* **Entry points:** APIs, CLI, login/OAuth, webhooks, docs and runbooks (if they expose config).
* **Threats:** Token/key leak; broken access control; injection in CLI or API; supply chain (deps, images); overprivileged automation.
* **Mitigations:** Auth and scoped tokens; input validation and rate limits; least privilege for bots and CI; no secrets in code or logs; dependency and image scanning where applicable.
* **Security acceptance criteria:** Add: auth on all sensitive endpoints; no secrets in repo or logs; scoped credentials; breaking changes and deprecations communicated.

Apply exposure and data-sensitivity overlays when assessing a given API, tool, or workflow.
