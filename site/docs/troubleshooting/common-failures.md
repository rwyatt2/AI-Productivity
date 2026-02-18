---
title: Common failures (and fixes)
---

# What this is

This page lists problems people often hit and the simplest way to fix them. Each fix is short: one reply or one command.

## When to use it

Use it when the AI is asking too many questions, making things up, getting confused, or doing the wrong kind of work (spec vs code).

## Steps (fixes)

**Do this:**

* **“It asked me 5 questions at once.”**  
  Reply: “Ask exactly one question and stop.”

* **“It is making up file paths or APIs.”**  
  Reply: “Do not invent. Ask for the exact file you need.”  
  Also add more real info to `docs/ai/ai-config.md` (e.g. the **Project** / current-state section: routing, state, data, file layout) so the AI has truth to use.

* **“The conversation got confused.”**  
  Start a new chat. Paste Session Kickoff and a fresh Context Pack. Then paste the Router. Don’t paste a huge old thread.

* **“I need code but it is writing specs.”**  
  Type: **Switch: IMPLEMENT**

* **“It is writing code but I need the spec first.”**  
  Type: **Switch: SPEC**

## Common mistakes

* Replying with a long message instead of the exact phrase. “Ask exactly one question and stop” and “Switch: IMPLEMENT” work because they are clear and short.
* Not updating `docs/ai/ai-config.md` (Project / current-state) when the AI invents structure. The more real context you give, the less it will invent.
