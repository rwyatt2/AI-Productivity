# Cursor rules

Rules load in **numeric order**. Gaps are intentional — reserve them for custom rules in your own project.

## Rule numbering convention

| Range | Purpose |
|-------|---------|
| 00–09 | Core OS, dispatcher, early-load gates |
| 10–19 | SPEC-phase rules |
| 20–29 | IMPLEMENT-phase rules |
| 30–39 | Context discipline |
| 40–49 | Security rules and stop gates |
| 50–99 | Reserved for your custom rules |

### Why the gap 02 → 05?

Slots 02–04 are reserved for future kit gates (e.g. additional early-load checks). Adding your own rules in 02–04 is fine; the kit may use those numbers in a later version.

### Security stop gate (41 only)

The kit ships a single **security stop gate** rule: `41-security-stop-gate.mdc`. It asks exactly one security question and stops when work is high-risk (auth, permissions, exports, uploads, integrations, confidential data, etc.).

Previously the same content existed in both `02-security-stop-gate.mdc` and `41-security-stop-gate.mdc`; they were duplicates. The duplicate was removed and **41** was kept so the stop gate sits with the other security rules (40 = hygiene and triggers, 41 = hard stop). Use 41 as the single source for that behavior.
