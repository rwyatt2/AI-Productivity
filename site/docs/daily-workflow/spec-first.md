---
title: Daily workflow (Plan mode)
---

# What this is

Plan mode is the default. It helps you think and plan before writing code.

You get a clear description of the problem, what "done" looks like, and what could go wrong.

## Advisories block

At the top of replies you may see an **Advisories** block. It tells you how the AI is working and when you should change something.

* **Route** — Is the AI in Plan mode or Agent mode for this reply?
* **Model class** — Fast (quick), Reasoning (hard stuff), or Best-coding (many files). The AI suggests which fits.
* **Context risk** — Low, Medium, or High. How likely the AI is to get mixed up with the files and chat you have open.
* **HIGHLY RECOMMENDED** — The AI is saying: you should do something (switch mode, use a stronger model, or start a new chat). Do what it says in the reply.

### When the AI says HIGHLY RECOMMENDED (security)

The AI will say HIGHLY RECOMMENDED when the work touches things that need extra care, for example:

* Login, auth, or sessions
* Permissions or who can do what
* Exports, downloads, bulk actions, or reporting
* Restricted or confidential data
* External or public exposure
* Integrations or webhooks
* File uploads
* Secrets, tokens, or credentials

When you see that, follow the suggestion in the response (e.g. get a threat-model-lite in Plan mode or security notes in Agent mode).

## When to use it

Use Plan mode when:

* You are not sure yet what the best solution is.
* You need a list of what must be true when you are done (acceptance criteria).
* You need to think about loading, empty, error, and success screens.
* You want to check the problem before building.
* You want to think about security risks.

## Steps

```mermaid
flowchart LR
  kickoff["1 · Session Kickoff\nSets protocol + rules"] --> pack["2 · Context Pack\n3-7 files + switches"]
  pack --> router["3 · Router\nPlan mode"]
  router --> specPkg["4 · Spec Package\nCriteria · States · Security"]
  specPkg --> ready{Ready?}
  ready -->|yes| switchImpl["Switch to Agent mode"]
  ready -->|"not yet"| specPkg
```

**Do this:**

1. In Cursor, open a new chat and switch to **Plan mode** (Shift+Tab until the mode indicator shows Plan).
2. Paste the Session Kickoff.
3. Paste a filled Context Pack (platform type, exposure, data sensitivity).
4. Paste the Router prompt.
5. The AI gives you a "Spec Package" with:
   * What problem we are solving
   * What "done" looks like (acceptance criteria)
   * What we are not doing (non-goals)
   * Loading / empty / error / success states
   * Accessibility and risks
6. If the AI asks a question, it must ask only ONE. Answer it, then it continues.
7. When you want code, switch to **Agent mode** in Cursor.

:::note Other editors
In editors without native Plan/Agent modes (Copilot, Antigravity), type `Switch: SPEC` to enter planning mode and `Switch: IMPLEMENT` when you're ready for code.
:::

## Common mistakes

* Skipping the Context Pack. The AI needs platform type and exposure to give a good plan.
* Letting it ask five questions. Reply: "Ask exactly one question and stop."
* Going straight to code without a plan. You can, but for anything non-trivial, use Plan mode first so the AI does not invent the wrong thing.

## API usage

If your API usage is high, stay on Auto/Fast unless the AI says HIGHLY RECOMMENDED.
