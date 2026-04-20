---
title: Lenses (kit "agents")
---

# Lenses explainer

> **Naming note (kit 1.5.0+).** This page used to be called the "agents explainer" and the kit's lens markdown lived under `.cursor/agents/`. Cursor 2.4 (Jan 2026) reserved `.cursor/agents/` for its first-class **Subagents** primitive (single Markdown files with YAML `name`, `description`, optional `model`). To avoid collision, the kit's lens content moved to **`.cursor/lenses/`** and the kit standardized on the term **lens** for what it used to call an "agent." The page filename stayed `agents.md` so existing links keep working; a slug rename is tracked for the next docs refresh.

## What is a lens?

A **lens** is a role-specific instruction set that lives in `.cursor/lenses/`. The AI uses lenses so it doesn't miss important things from a particular angle (PM scope, Design UX states, Security threats, etc.). You don't run each lens by hand — the **Router** picks the right ones based on your Context Pack and the route (SPEC vs IMPLEMENT). Unlike rules (which Cursor loads on every request), lenses only inform a response when the work calls for that perspective.

## Lenses vs rules vs prompts vs Cursor Subagents

| Type | Lives in | When it activates | Who invokes it |
|------|----------|-------------------|----------------|
| Rule | `.cursor/rules/` | Automatically per the rule's `alwaysApply` / `globs` / description | Cursor (automatic) |
| Lens | `.cursor/lenses/` | When the Router or your prompt calls for that perspective (e.g. SPEC + Security trigger) | The kit's Router (or you, by naming the lens) |
| Prompt | `.cursor/prompts/` | When you paste it into chat | You (manual) |
| **Cursor Subagent** *(not part of the kit)* | `.cursor/agents/` | When you `@mention` it in Cursor 2.4+ | You (manual) — requires YAML `name` and `description` |

The last row is **Cursor's** primitive, not the kit's. The kit ships nothing under `.cursor/agents/`. You're free to drop your own Cursor Subagents there alongside the kit.

## Included lenses

| Lens | Description |
|------|-------------|
| **Security** | Produces a threat-model-lite: exposure and data sensitivity, assets, entry points, threats, mitigations, and testable security acceptance criteria. |
| **PM** | Scopes work in SPEC mode: summary, scope bullets, acceptance criteria, open questions, and next step. |
| **Design** | Ensures UX states (default, loading, empty, error, success), interaction, and a11y; short actionable recommendations. |
| **Discovery** | Validates the problem before solution: problem statement, evidence, hypotheses, and one smallest validation step. |
| **FE** | Delivers front-end changes with files to change, plan, diffs, verification, and test rationale; minimal safe diffs, no invented paths. |
| **QA** | Produces a compact test plan: happy path, edge cases, a11y, and regressions. |
| **Validation** | Validates solutions: what to validate, method, success criteria and guardrails, rollback plan. |
| **Analytics** | Defines success metrics, guardrails, and events needed; does not invent event names without confirmation. |

## When to activate a lens

- **Before writing any API endpoint or sensitive feature** — Engage the **Security** lens to get a threat-model-lite (exposure, data sensitivity, entry points, mitigations) so the AI doesn't guess.
- **When scoping a new feature or epic** — Engage the **PM** lens to get scope, acceptance criteria, and open questions before implementation.
- **When something is broken and the cause is unclear** — Engage the **Discovery** lens to frame the problem, list hypotheses, and pick one smallest validation step.
- **When designing a flow or screen** — Engage the **Design** lens for UX states, interaction, and a11y checks before coding.
- **When planning tests or release validation** — Engage **QA** for a test plan, or **Validation** for what to validate, success criteria, and rollback.

## Platform overlays

Several lenses have **overlay** files that refine the base behavior for a given context. You don't invoke overlays by name — the AI applies them when your Context Pack (or conversation) indicates the context.

- **Platform overlays** — For PM, Design, Discovery, QA, and Validation: `data-platform.md` and `developer-platform.md` extend the base lens. For example, Security + data-platform focuses on datasets, pipelines, ETL, and BI; Security + developer-platform focuses on APIs, tokens, CLIs, and dev tooling.
- **Security-only overlays** — Security also has **exposure** overlays (`exposure-internal`, `exposure-external-authenticated`, `exposure-public`) and **data-sensitivity** overlays (`data-public`, `data-internal`, `data-confidential`, `data-restricted`). When you engage Security and your Context Pack says "external-authenticated" and "confidential," the AI applies those overlays to emphasize auth strength, no raw data in logs, and need-to-know access.
- **No overlays for FE and Analytics** — these lenses are intentionally overlay-free. See each lens's `base.md` for the rationale.

Overlays add focus and guardrails; the base lens still defines the required output shape (e.g. assets, entry points, threats, mitigations for Security).
