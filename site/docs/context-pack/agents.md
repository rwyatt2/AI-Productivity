---
title: Agents
---

# Agents explainer

## What is an agent?

An **agent** is a role-specific instruction set that lives in `.cursor/agents/`. You invoke it by name (e.g. `@Security` or “use the PM agent”) so the AI adopts that role and outputs in a consistent, structured format. Agents only run when you explicitly call them—unlike rules, which apply on every request.

## Agents vs rules vs prompts

| Type | Lives in | When it activates | Who invokes it |
|------|----------|-------------------|----------------|
| Rule | .cursor/rules/ | Automatically on every request | Cursor (automatic) |
| Agent | .cursor/agents/ | When you @mention it or invoke by name | You (manual) |
| Prompt | .cursor/prompts/ | When you paste it into chat | You (manual) |

## Included agents

| Agent | Description |
|-------|-------------|
| **Security** | Produces a threat-model-lite: exposure and data sensitivity, assets, entry points, threats, mitigations, and testable security acceptance criteria. |
| **PM** | Scopes work in SPEC mode: summary, scope bullets, acceptance criteria, open questions, and next step. |
| **Design** | Ensures UX states (default, loading, empty, error, success), interaction, and a11y; short actionable recommendations. |
| **Discovery** | Validates the problem before solution: problem statement, evidence, hypotheses, and one smallest validation step. |
| **FE** | Delivers front-end changes with files to change, plan, diffs, verification, and test rationale; minimal safe diffs, no invented paths. |
| **QA** | Produces a compact test plan: happy path, edge cases, a11y, and regressions. |
| **Validation** | Validates solutions: what to validate, method, success criteria and guardrails, rollback plan. |
| **Analytics** | Defines success metrics, guardrails, and events needed; does not invent event names without confirmation. |

## When to activate an agent

- **Before writing any API endpoint or sensitive feature** — Invoke the **Security** agent to get a threat-model-lite (exposure, data sensitivity, entry points, mitigations) so the AI doesn’t guess.
- **When scoping a new feature or epic** — Invoke the **PM** agent to get scope, acceptance criteria, and open questions before implementation.
- **When something is broken and the cause is unclear** — Invoke the **Discovery** agent to frame the problem, list hypotheses, and pick one smallest validation step.
- **When designing a flow or screen** — Invoke the **Design** agent for UX states, interaction, and a11y checks before coding.
- **When planning tests or release validation** — Invoke **QA** for a test plan, or **Validation** for what to validate, success criteria, and rollback.

## Platform overlays

Several agents have **overlay** files that refine the base behavior for a given context. You don’t invoke overlays by name—the AI applies them when your Context Pack (or conversation) indicates the context.

- **Platform overlays** — For PM, Design, Discovery, QA, and Validation: `data-platform.md` and `developer-platform.md` extend the base agent. For example, Security + data-platform focuses on datasets, pipelines, ETL, and BI; Security + developer-platform focuses on APIs, tokens, CLIs, and dev tooling.
- **Security-only overlays** — Security also has **exposure** overlays (`exposure-internal`, `exposure-external-authenticated`, `exposure-public`) and **data-sensitivity** overlays (`data-public`, `data-internal`, `data-confidential`, `data-restricted`). When you invoke Security and your Context Pack says “external-authenticated” and “confidential,” the AI applies those overlays to emphasize auth strength, no raw data in logs, and need-to-know access.

Overlays add focus and guardrails; the base agent still defines the required output shape (e.g. assets, entry points, threats, mitigations for Security).
