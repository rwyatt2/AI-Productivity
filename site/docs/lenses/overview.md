---
title: Lenses (sub-agents)
---

# What this is

Lenses are like “thinking hats.” The AI uses different lenses so it doesn’t miss important things. You don’t run each lens yourself; the Router picks the right ones. SPEC mode usually uses PM and Design, and adds Discovery, Analytics, and Security when needed. IMPLEMENT mode usually uses FE and QA, and adds Security when needed.

## When to use it

You don’t choose lenses by hand. You use SPEC or IMPLEMENT; the kit uses the right lenses. Read this page to understand what each lens does.

## The main lenses

* **Discovery** — Are we solving the right problem?
* **PM** — What are we building? Who is it for? What does “done” look like?
* **Design** — What does the user see and do? What about loading, empty, and error states?
* **Analytics** — How do we measure success?
* **Security** — What could go wrong? Who could abuse it?
* **FE** — How do we implement the code?
* **QA** — How do we test it?

## Common mistakes

* Trying to run every lens yourself. Use the Router and the right mode (SPEC or IMPLEMENT) instead.
* Skipping Security. The kit turns Security on when you touch login, permissions, sensitive data, or exports. Don’t ignore those notes.
