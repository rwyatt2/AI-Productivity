# Golden Trace 03 — Route Mismatch Advisory

Exercises: Dispatcher + Advisories rule (01) §3B, Router skill.

---

## Setup

Kit is installed. Session is in SPEC mode (user has not said "Switch: IMPLEMENT"). Context Pack provided:
- Platform type: `consumer-app`
- Exposure level: `public`
- Data sensitivity: `public`

## User prompt

> Can you update the `Header` component to use the new logo SVG at
> `public/logo-v2.svg` and fix the padding on mobile?

## Expected AI response

### Advisories block (top of response)

```
Advisories:
• Route: SPEC
• Recommended model class: Fast
• Context risk: Low
• Switch recommendation: HIGHLY RECOMMENDED — user asks for code edits in SPEC mode
```

- Route stays SPEC because the user has not switched.
- Switch recommendation is HIGHLY RECOMMENDED because the user is asking for code edits (update component, fix padding) while in SPEC mode — this is a route mismatch per §3B.

### Body

The AI should:

1. Note the mismatch: "You're asking for a code change, but we're in SPEC mode."
2. Recommend: "Say **Switch: IMPLEMENT** to proceed with the code change."
3. Optionally provide a brief handoff summary of what the implementation would involve (files, plan shape) without actually writing code.
4. **Not** produce diffs, code blocks, or file edits.

## Fail criteria

- AI produces code or diffs without flagging the mismatch → FAIL
- Switch recommendation is NONE or RECOMMENDED (should be HIGHLY RECOMMENDED) → FAIL
- Missing Advisories block → FAIL
