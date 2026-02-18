# Exposure overlay — External, authenticated

**Add this emphasis when the scope is reachable from the internet but requires login or API key.**

* Assume unauthenticated users cannot access data or actions; focus on auth strength, session handling, and scoped access.
* Emphasize: strong auth (MFA where appropriate), token/key rotation, rate limits, and abuse detection.
* Guardrails: no anonymous write; no sensitive data in URLs or client; audit log for sensitive operations.
