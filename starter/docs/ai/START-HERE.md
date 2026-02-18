# Start here

This folder tells the AI how to behave and what to check.

**Read first:**
1. **ai-config.md** — Your defaults and project info. The AI treats this as the source of truth.
2. **profiles/** — Use **company.md** for work projects, **personal.md** for side projects. They set different expectations (e.g. stricter for company).
3. **checklists/** — Use them before you call something "done":
   * **spec-dod.md** — Definition of done for a spec (plan).
   * **impl-dod.md** — Definition of done for implementation (code).
   * **security-dod.md** — Security checks before release.
   * **threat-model-lite.md** — Short threat model when security is in play (auth, uploads, sensitive data, etc.).

**Quick rules:** Plan first (SPEC). One question at a time. No inventing paths or APIs. When in doubt, the AI asks one question and stops.
