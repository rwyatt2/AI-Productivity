---
title: Daily workflow (SPEC-first)
---

# What this is

SPEC mode is the default. It helps you think and plan before writing code.

You get a clear description of the problem, what “done” looks like, and what could go wrong.

## When to use it

Use SPEC when:

* You are not sure yet what the best solution is.
* You need a list of what must be true when you are done (acceptance criteria).
* You need to think about loading, empty, error, and success screens.
* You want to check the problem before building.
* You want to think about security risks.

## Steps

**Do this:**

1. Paste the Session Kickoff.
2. Paste a filled Context Pack (platform type, exposure, data sensitivity).
3. Paste the Router prompt.
4. The AI gives you a “Spec Package” with:
   * What problem we are solving
   * What “done” looks like (acceptance criteria)
   * What we are not doing (non-goals)
   * Loading / empty / error / success states
   * Accessibility and risks
5. If the AI asks a question, it must ask only ONE. Answer it, then it continues.
6. When you want code, say **Switch: IMPLEMENT**.

## Common mistakes

* Skipping the Context Pack. The AI needs platform type and exposure to give a good spec.
* Letting it ask five questions. Reply: “Ask exactly one question and stop.”
* Going straight to code without a spec. You can, but for anything non-trivial, do SPEC first so the AI does not invent the wrong thing.
