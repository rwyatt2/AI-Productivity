# Golden Trace 05 — Handoff Summary

Exercises: Handoff summary skill, Dispatcher Advisories (context management).

---

## Setup

Kit is installed. A SPEC session has been running with 4 exchanges. The spec covered: a notification preferences page for a `saas-b2b` app, `external-authenticated`, `internal` data sensitivity. Spec Package was completed with all 4 sections. One open question remains: "Should email frequency options include 'digest' (weekly) or only 'immediate' and 'off'?"

## User prompt

> Let's wrap this up. Give me a handoff summary so I can pick this up in an
> IMPLEMENT thread tomorrow.

## Expected AI response

### Advisories block (top of response)

```
Advisories:
• Route: SPEC
• Recommended model class: Fast
• Context risk: Low
• Switch recommendation: NONE
```

### Handoff summary (5–8 bullets)

The response must use the handoff-summary template shape. Example of a conformant response:

> **Handoff Summary**
>
> - **Decided:** Notification preferences page — users can toggle email and in-app notifications per category (billing, security, product updates).
> - **In scope:** Preferences UI, API endpoint `PATCH /api/users/:id/notifications`, persistence to user profile.
> - **Out of scope:** Push notifications, SMS, notification delivery service changes.
> - **Open question:** Should email frequency include "weekly digest" or only "immediate" and "off"? (Needs product decision.)
> - **Key files:** Spec in this thread. Design tokens from existing settings page.
> - **Next step:** Resolve the frequency question, then start an IMPLEMENT thread with Context Pack (`saas-b2b`, `external-authenticated`, `internal`).
> - **Security:** No elevated risk — `internal` data sensitivity, no PII beyond user email (already in profile).

### Shape constraints

- Between 5 and 8 bullets.
- Each bullet is one line (no nested lists or paragraphs).
- No code blocks.
- Mentions the open question.
- Includes a next-step recommendation.

## Fail criteria

- Fewer than 5 or more than 8 bullets → FAIL
- Contains code blocks → FAIL
- Omits the open question → FAIL
- No next-step recommendation → FAIL
- Missing Advisories block → FAIL
