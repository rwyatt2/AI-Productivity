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

This file is the **source of truth** for the AI. Fill in what you need; the rest has defaults.

## Defaults

* **Default route:** SPEC (plan first; no code until you say "Switch: IMPLEMENT" or ask for code).
* **Confidence gate:** 85 (if the AI is less than 85% sure, it asks exactly one question and stops).
* **Default exposure:** internal (who can reach it: only inside your network/org).
* **Default data sensitivity:** internal (data is for internal use only).
* **Platform type mode:** infer from context if clear; if unsure, ask one question and stop (data-platform vs developer-platform).

## Design system (TODO)

Fill these so the AI uses your design system consistently:

* Design system name: TODO
* Design system docs: TODO
* Design system imports/package: TODO

## Project (optional)

* project-brief: what the platform is, who uses it, what success means
* current-state: repo conventions (routing, state, data)
* partner-map: who owns what
```
