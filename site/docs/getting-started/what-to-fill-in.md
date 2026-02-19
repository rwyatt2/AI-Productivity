---
title: What to fill in
---

These are the only parts of the kit that need your input. Keep them small. Only update them when something changes.

```mermaid
flowchart LR
  startNode([Start here]) --> minFile["Minimum — do first\nai-config.md\nDesign system name + docs + imports"]
  minFile --> roiFiles["High-ROI — fill when you can\nproject-brief · current-state\npartner-map · glossary · decisions"]
  roiFiles --> ruleNode(["Only update\nwhen something changes"])
```

---

## The minimum (you should do this)

**File:** `docs/ai/ai-config.md`

Fill these three things so the AI uses your design system instead of guessing:

1. **Design system name** — e.g. "Tailwind" or "Our UI library".
2. **Design system docs** — a link to your design docs (or leave TODO).
3. **Design system imports/package** — how you import it in code (e.g. package name or path).

If you skip these, the kit still works but the AI may invent UI patterns. See the full template: [AI Config (reference)](../reference/ai-config).

---

## High‑ROI files (fill when you can)

These files give the AI clear truth so it doesn’t guess or hallucinate. Fill them a bit at a time.

| File | What it does | Reference |
|------|----------------|-----------|
| `docs/ai/project-brief.md` | One sentence about the product, who uses it, what “done” looks like, and what you’re *not* doing. | [Project Brief](../reference/project-brief) |
| `docs/ai/current-state.md` | How your repo works: routing, data, state, forms, styling, testing, telemetry. “What we do / where it lives / what to avoid” so the AI doesn’t invent paths. | [Current State](../reference/current-state) |
| `docs/ai/partner-map.md` | Who owns what, when to involve them, and who to ask when stuck. | [Partner Map](../reference/partner-map) |
| `docs/ai/glossary.md` | A short list of terms you want everyone (and the AI) to use the same way. Cap at ~10–20 terms. | [Glossary](../reference/glossary) |
| `docs/ai/decisions.md` | A log of big decisions: what you decided, why, and what you gave up. Append new ones at the top. | [Decisions](../reference/decisions) |
| `docs/ai/checklists/*` | Spec DoD, Impl DoD, Security DoD, and Threat Model Lite. Use them so “done” means the same thing every time. | [Spec DoD](../reference/spec-dod), [Impl DoD](../reference/impl-dod), [Security DoD](../reference/security-dod), [Threat Model Lite](../reference/threat-model-lite) |

---

## Simple rule

**Only update these when something changes. Keep them small.**

You don’t have to fill everything on day one. Start with the minimum (design system in `ai-config.md`), then add a few bullets to project-brief and current-state when you have time. The more you fill, the less the AI will guess—and the fewer mistakes you’ll get.
