# Exposure overlay — Public

**Add this emphasis when the scope is publicly reachable without authentication.**

* Assume anyone on the internet can hit the surface; focus on no sensitive data exposure and abuse resistance.
* Emphasize: read-only or heavily rate-limited; no PII or secrets; input validation and safe defaults; DDoS and abuse mitigations.
* Guardrails: assume all input is hostile; no credentials or internal details in responses or errors.
