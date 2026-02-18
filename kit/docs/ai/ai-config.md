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
