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
* **Platform type mode:** use the value set in the Platform type section below; if missing, ask exactly one question and stop.

## Platform type

<!-- Fill this in. The AI reads this file and cites only what is here. -->
<!-- ============================================================
  HOW TO SET YOUR PLATFORM TYPE
  ============================================================
  1. Replace the TODO slug below with a short, lowercase, hyphenated
     name that describes what you are building.

     Common examples (use one or invent your own):
       consumer-app        — product for end users (web or mobile)
       internal-tool       — tool used only inside your org or team
       data-platform       — data, analytics, dashboards, reports
       developer-platform  — APIs, SDKs, CLIs, tools for other devs
       ecommerce           — shopping, checkout, product catalog
       saas-b2b            — multi-tenant SaaS sold to businesses
       mobile-app          — native iOS / Android product
       ai-product          — an AI-powered end-user product

  2. Replace the Description TODO with 1–2 sentences about your product.
     The AI uses this to make better decisions about architecture,
     UX focus, and security priorities.

  3. Replace the Emphasis TODO with what the AI should prioritise.
     Examples: "data integrity and audit trails", "API ergonomics and
     backwards compatibility", "fast iteration and visual polish".

  4. When you start a task, paste the slug into your Context Pack:
       Platform type: consumer-app

  5. If your product has more than one distinct surface (e.g. an admin
     console + a consumer app), add both slugs below and pick one per
     task in your Context Pack.
  ============================================================ -->

* **Platform type slug:** TODO  <!-- e.g. consumer-app -->
* **Description:** TODO  <!-- e.g. "A B2B SaaS dashboard for finance teams focused on data accuracy and role-based access." -->
* **What the AI should emphasise:** TODO  <!-- e.g. "structured outputs, access control, audit trails over visual polish" -->

## Design system — fill in yours (optional if no UI)

<!-- Fill this in. The AI reads this file and cites only what is here. -->
**Skip or leave TODO** if this project has no UI (e.g. API, CLI, data pipeline). Otherwise fill these so the AI uses your design system consistently:

* Design system name: TODO
* Design system docs: TODO
* Design system imports/package: TODO

<!-- Example (Acme SaaS — replace with yours):
* Design system name: Acme UI (shadcn/ui + Tailwind)
* Design system docs: https://ui.acme.dev
* Design system imports/package: @/components/ui/* for primitives; Tailwind for layout and tokens
Token conventions: Spacing — Tailwind spacing scale only (e.g. p-4, gap-2). Colors — use semantic tokens (primary, muted, destructive); avoid raw hex in components.
-->

Design system rules:
* Prefer design-system components before custom UI.
* Prefer design tokens (spacing/type/color) over one-off values.
* If a component is missing:
    * First: compose existing components.
    * Then: propose a new component (requires explicit approval).

## Security / data handling (optional but recommended)

<!-- Fill this in. The AI reads this file and cites only what is here. -->
If your org has specific rules, write them here:

* What counts as **restricted** data in this org: TODO
* Logging rules (redaction, forbidden fields): TODO
* Secrets handling (vault/env/etc.): TODO
* Any compliance constraints: TODO

## Project (optional)

<!-- Fill this in. The AI reads this file and cites only what is here. -->
* project-brief: what the platform is, who uses it, what success means
* current-state: repo conventions (routing, state, data, forms, styling, testing, telemetry)
* partner-map: who owns what
```
