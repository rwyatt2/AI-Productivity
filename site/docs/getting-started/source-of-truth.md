---
title: Source-of-truth docs
---

# What these files are

The kit has a folder called **`docs/ai/`**. The files in that folder (and in `docs/ai/checklists/`) are the **source of truth**. That means: the AI is supposed to believe what you put there and not make things up.

When you fill them in, you’re telling the AI: “This is how our project works. Use this. Don’t guess.”

---

# Why they prevent the AI from guessing

If you don’t tell the AI how your repo is set up, it will **guess**. It might invent file paths, API names, or UI patterns that don’t exist. That causes wrong code and wasted time.

When you put the real info in these files, the AI **reads them** and follows what you wrote. So it stops guessing and starts using your actual conventions, your real design system, and your real “who owns what.” Fewer mistakes, less rework.

---

# Minimum set (start here)

You don’t have to fill everything at once. Start with this:

**1. Design system in `ai-config.md`**

- [ ] Design system **name** (e.g. Tailwind, or your UI library name)
- [ ] Design system **docs** (link to your design docs, or leave TODO)
- [ ] Design system **imports/package** (how you import it in code)

Full template: [AI Config (reference)](../reference/ai-config).

**2. Basics in `current-state.md`**

- [ ] **Routing** — How do you define routes? Where do route files live?
- [ ] **Data fetching** — How do you load data (e.g. REST, GraphQL, React Query)? Where does that code live?
- [ ] **State** — How do you manage state (e.g. React state, Zustand, Redux)? Where does it live?

Each section has “What we do,” “Where it lives,” and “What to avoid.” Fill what you know; leave TODO for the rest. Full template: [Current State (reference)](../reference/current-state).

---

# All the source-of-truth files

| File | What it’s for | Reference |
|------|----------------|-----------|
| [ai-config.md](../reference/ai-config) | Defaults (SPEC-first, 85% gate, exposure, data sensitivity) and design system. The main config. | [AI Config](../reference/ai-config) |
| [project-brief.md](../reference/project-brief) | One-liner, who uses the product, jobs-to-be-done, success, non-goals, constraints. | [Project Brief](../reference/project-brief) |
| [current-state.md](../reference/current-state) | Repo conventions: routing, data, state, forms, styling, testing, telemetry, pitfalls. | [Current State](../reference/current-state) |
| [partner-map.md](../reference/partner-map) | Who owns what, when to involve them, escalation. | [Partner Map](../reference/partner-map) |
| [glossary.md](../reference/glossary) | Terms everyone (and the AI) should use the same way. ~10–20 terms. | [Glossary](../reference/glossary) |
| [decisions.md](../reference/decisions) | Log of big decisions: what, why, tradeoffs, follow-ups. | [Decisions](../reference/decisions) |
| [spec-dod.md](../reference/spec-dod) | Checklist for when a spec is “done” (switches, scope, UX states, a11y, risks, security). | [Spec DoD](../reference/spec-dod) |
| [impl-dod.md](../reference/impl-dod) | Checklist for when implementation is “done” (files, plan, diffs, verification, tests, security). | [Impl DoD](../reference/impl-dod) |
| [security-dod.md](../reference/security-dod) | Checklist when the work touches auth, uploads, sensitive data, or external systems. | [Security DoD](../reference/security-dod) |
| [threat-model-lite.md](../reference/threat-model-lite) | Short threat model: assets, entry points, threats, mitigations, acceptance criteria. | [Threat Model Lite](../reference/threat-model-lite) |

Keep them small. Only update them when something changes. For more detail on what to fill in, see [What to fill in](what-to-fill-in).
