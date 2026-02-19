---
title: Antigravity Rules - Dispatcher and Advisories (Reference)
---

Source: `.agent/rules/01-dispatcher-and-advisories.md`

```
# Dispatcher + Advisories (Always On)

## 1) Auto-route (no manual switching required)
Choose the route automatically on every user request:

* IMPLEMENT if the user asks for code changes (e.g., implement, PR, diff, update files, add tests, fix bug/build error).
* Otherwise SPEC by default.

If you are < 85% confident you understand the goal/constraints well enough to proceed correctly:
* Ask EXACTLY ONE clarifying question and stop.

## 2) Always emit an Advisories block (short)
At the very top of every response, include:

Advisories:
* Route: SPEC or IMPLEMENT
* Recommended model class: Fast | Reasoning | Best-coding
* Context risk: Low | Medium | High
* Switch recommendation: NONE | RECOMMENDED | HIGHLY RECOMMENDED
* If HIGHLY RECOMMENDED, include a short reason (<= 12 words)

Keep Advisories to max 5 bullets.

## 3) HIGHLY RECOMMENDED triggers (tailored for security/cyber + platform risk)

### A) Security / cyber risk triggers (always HIGHLY RECOMMENDED)
Mark Switch recommendation as HIGHLY RECOMMENDED if ANY apply:
* Auth/authentication/login/session handling
* Permissions/roles/access control/authz
* Admin-only features or privileged actions
* Data export / download / bulk actions / reporting
* File upload, URL ingestion, rich text/markdown rendering
* Webhooks/integrations/external network calls
* Secrets/tokens/credentials
* Exposure level is external-authenticated or public
* Data sensitivity is confidential or restricted

When any trigger applies:
* In SPEC route:
    - Include a short threat-model-lite (assets, entry points, top threats, mitigations, acceptance criteria).
* In IMPLEMENT route:
    - Include security notes + security acceptance criteria.
* If key security info is missing (data classification, authz model, secrets mechanism):
    - Ask EXACTLY ONE clarifying question and stop.

### B) Route mismatch triggers (always HIGHLY RECOMMENDED)
Mark HIGHLY RECOMMENDED when:
* User asks for code edits but requirements/acceptance criteria are unclear.
* User asks for acceptance criteria/UX states but you are in code-implementation mode.
* You are mixing spec + code in the same response.

Action:
* Recommend "Switch: SPEC" or "Switch: IMPLEMENT" (one).
* Output a short handoff summary before continuing.

### C) Model switching triggers (always HIGHLY RECOMMENDED)
Mark HIGHLY RECOMMENDED when:
* You are making multi-file changes with correctness risk (types/hooks/forms/refactors/authz).
* You see signs of "plausible but wrong":
    - invented file paths/APIs/components
    - contradicting repo patterns
    - repeated misunderstanding over 2 replies

Action:
* Recommend switching to a stronger model class (Reasoning or Best-coding).

### D) Context management triggers (always HIGHLY RECOMMENDED)
Mark HIGHLY RECOMMENDED when:
* You re-ask for info already provided
* You contradict a recent decision
* You guess repo structure or forget file names

Action:
* Recommend starting a new thread and pasting:
    - Session Kickoff
    - a fresh Context Pack
    - Router (if needed)
* Recommend limiting to 3–7 relevant files.

## 4) Cost awareness (API spend)
You cannot see usage. Only react if the user provides it.

If the user says API usage is high (e.g., "API used 87%"):
* Prefer Auto/Fast for routine work.
* Keep context small (3–7 files).
* Only recommend Reasoning/Best-coding when HIGHLY RECOMMENDED triggers apply.
```
