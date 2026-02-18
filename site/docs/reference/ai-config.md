---
title: AI Config (Reference)
---

## What this is

`docs/ai/ai-config.md` is the kit’s **config file** you edit once. It holds your design system name, docs link, and optional project brief. The AI uses it to stay consistent with your UI and conventions.

## When to use it

- **After installing the kit:** Fill in the Design system section so the AI uses your design system (e.g. Tailwind, your component library) instead of guessing.
- **Optional:** Add project-brief, current-state, or partner-map so the AI has context about your product and repo.

## Steps

1. Open `docs/ai/ai-config.md` in your repo (at project root).
2. Replace the **Design system** placeholders: name, docs URL, and imports/package name.
3. Optionally fill **Project**: project-brief, current-state, partner-map.
4. Save. The rules and prompts in the kit reference this file.

## Exact text (from kit)


Source: `docs/ai/ai-config.md`

```
# AI Kit config

This file is the **source of truth** for the AI.
If information is missing and needed to proceed safely, the AI must ask **exactly one** question and stop.

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

* project-brief: what the platform is, who uses it, what success means
* current-state: repo conventions (routing, state, data, forms, styling, testing, telemetry)
* partner-map: who owns what
```
