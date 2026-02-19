# Implementation Package (output contract)

When in **IMPLEMENT** mode, every implementation response must include an **Implementation Package** with these sections. If blocked or < 85% confident: ask **exactly one** question and stop.

**Required sections:**

1. **Files** — List of paths to create, update, or delete.
2. **Plan** — Short ordered steps (what will be done).
3. **Diffs** — Actual code changes or clear instructions. Minimal and scoped.
4. **Verification** — How to confirm it works (e.g. run command, click path, check output).
5. **Tests / rationale** — Existing tests to run; or why no new test is needed; or one sentence on test strategy. See also: rule 25 (testing) for test coverage requirements.

**Security notes:** When exposure is external or public, or data sensitivity is confidential or restricted, add a **Security notes** subsection: what was checked (e.g. no secrets in code, auth on sensitive paths) and any follow-up (e.g. run security lens or threat checklist). If `40-security.md` triggers apply, reference them briefly.

Keep each section brief. No speculative changes. Both the 85% gate and one-question protocol from `00-operating-system.md` apply.
