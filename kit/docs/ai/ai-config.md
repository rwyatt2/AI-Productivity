# AI Kit config

This file is the **source of truth** for the AI.
If information is missing and needed to proceed safely, the AI must ask **exactly one** question and stop.

## Where to put truth

Keep high-signal, AI-safe truth in these docs (same folder as this file unless noted):

* [project-brief.md](project-brief.md) — one-liner, who uses it, jobs-to-be-done, success, non-goals, constraints, links
* [current-state.md](current-state.md) — routing, data fetching, state, forms, styling, testing, telemetry, pitfalls (what we do / where it lives / what to avoid)
* [partner-map.md](partner-map.md) — who owns what, when to involve them, escalation
* [glossary.md](glossary.md) — terms and definitions (~10–20 terms; definition, confusion/pitfall, example)
* [decisions.md](decisions.md) — decision log (date, decision, why, tradeoffs, follow-ups)
* **Checklists:** [checklists/spec-dod.md](checklists/spec-dod.md), [checklists/impl-dod.md](checklists/impl-dod.md), [checklists/security-dod.md](checklists/security-dod.md), [checklists/threat-model-lite.md](checklists/threat-model-lite.md)

## Defaults

* **Default route:** SPEC (plan first; no code until you say "Switch: IMPLEMENT" or ask for code).
* **Confidence gate:** 85 (if the AI is less than 85% sure, it asks exactly one question and stops).
* **Default exposure:** internal
* **Default data sensitivity:** internal
* **Platform type mode:** infer if clear; if unsure, ask one question and stop (data-platform vs developer-platform).

## Design system (TODO)

Fill these so the AI uses your design system consistently:

* Design system name: TODO
* Design system docs: TODO
* Design system imports/package: TODO

Design system rules:
* Prefer design-system components before custom UI.
* Prefer design tokens (spacing/type/color) over one-off values.
* If a component is missing:
    * First: compose existing components.
    * Then: propose a new component (requires explicit approval).

## Security / data handling (optional but recommended)

If your org has specific rules, write them here:

* What counts as **restricted** data in this org: TODO
* Logging rules (redaction, forbidden fields): TODO
* Secrets handling (vault/env/etc.): TODO
* Any compliance constraints: TODO

## Project (optional)

See **Where to put truth** above. Fill [project-brief.md](project-brief.md), [current-state.md](current-state.md), and [partner-map.md](partner-map.md) as needed.
