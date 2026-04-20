# Golden Trace 01 — Spec with Advisories

Exercises: Dispatcher + Advisories rule (01), Spec Package rule (10), Context Pack skill.

---

## Setup

Kit is installed. `docs/ai/ai-config.md` exists with `platform-type: saas-b2b`.

## User prompt

> I need to add a team-invitation flow. Users with the "admin" role can invite
> new members by email. The invite includes a temporary link valid for 72 hours.

## Expected AI response

### Advisories block (top of response)

```
Advisories:
• Route: SPEC
• Recommended model class: Reasoning
• Context risk: Low
• Switch recommendation: NONE
```

- Route is SPEC because the user is describing a feature, not asking for code.
- Model class is Reasoning because auth/roles are involved (security trigger).
- No switch recommendation because SPEC is correct for this ask.

### Spec Package (body)

The response must contain all four required Spec Package sections:

1. **UX states** — Covers at minimum: default (invitation form), loading (sending invite), empty (no pending invites), error (invalid email / send failure), success (invite sent confirmation).

2. **A11y** — Mentions focus management on the invite form, label for the email input, keyboard-accessible send button.

3. **Risks + open questions** — Includes items such as:
   - What happens if the invited email is already a member?
   - Rate limiting on invite sends?
   - Does the 72-hour link need to be revocable?

4. **Platform type + exposure + data sensitivity** — States `saas-b2b`, `external-authenticated`, and at least `internal` data sensitivity (email addresses).

### Security content

Because "admin role" and "permissions" are security triggers, the response must also include a short **threat-model-lite** or note that security review is needed, per the Advisories rule §3A.

## Fail criteria

- Missing Advisories block → FAIL
- Route is IMPLEMENT instead of SPEC → FAIL
- Missing any of the 4 Spec Package sections → FAIL
- No mention of security concern despite auth/roles trigger → FAIL
