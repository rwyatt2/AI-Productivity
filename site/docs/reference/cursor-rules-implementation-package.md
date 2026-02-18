---
title: Cursor Rules - Implementation Package (Reference)
---

## What this is

`.cursor/rules/20-implementation-package.mdc` is a **Cursor rule** that defines the **Implementation Package** output contract: every IMPLEMENT-mode response must include files, plan, diffs, verification, tests/rationale, and security notes when triggers apply.

## When to use it

- You **don’t edit this file** for normal use. It’s part of the kit.
- Use it as reference when you want the AI’s implementation output to follow the contract (e.g. when reviewing PRs or handoffs).

## Steps

1. Ensure the kit is at your **project root** so Cursor sees `.cursor/rules/`.
2. In IMPLEMENT mode, the AI will follow this contract. Use the block below to see or copy the exact rule.

## Exact text (from kit)


Source: `.cursor/rules/20-implementation-package.mdc`

```
---
description: Implementation Package — output contract for IMPLEMENT mode
---

# Implementation Package (output contract)

When in **IMPLEMENT** mode, every implementation response must include an **Implementation Package** with these sections. If blocked or &lt; 85% confident: ask **exactly one** question and stop.

**Required sections:**

1. **Files** — List of paths to create, update, or delete.
2. **Plan** — Short ordered steps (what will be done).
3. **Diffs** — Actual code changes or clear instructions. Minimal and scoped.
4. **Verification** — How to confirm it works (e.g. run command, click path, check output).
5. **Tests / rationale** — Existing tests to run; or why no new test is needed; or one sentence on test strategy.

**Security notes:** When exposure is external or public, or data sensitivity is confidential or restricted, add a **Security notes** subsection: what was checked (e.g. no secrets in code, auth on sensitive paths) and any follow-up (e.g. run security lens or threat checklist). If `40-security.mdc` triggers apply, reference them briefly.

Keep each section brief. No speculative changes. Both the 85% gate and one-question protocol from `00-operating-system.mdc` apply.
```
