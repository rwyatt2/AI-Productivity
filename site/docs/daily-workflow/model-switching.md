---
title: Model switching (when to use which model)
---

## What this is

Many AI tools let you pick which “model” does the work: some are fast and cheap, some are better at tricky thinking, and some are best for code. Picking the right one saves time and reduces mistakes. This page is tool-agnostic — the same ideas work no matter which editor or provider you use.

---

## Three buckets

Think of models in three buckets (your tool may use different names):

* **Fast model** — Cheap and quick. Good for simple, repetitive tasks. Use when speed and cost matter more than deep thinking.
* **Strong reasoning model** — Better at multi-step logic, planning, and “figuring it out.” Use when the task is fuzzy or the answer isn’t obvious.
* **Best coding model** — Best at code: structure, correctness, and staying true to your repo. Use when the code has to be right and maintainable.

---

## Which tasks map to which bucket

**Use the fast model for:**

* Quick questions (“What does this function do?”).
* Mechanical edits (rename a variable, fix a typo, add a single import).
* Copy or text rewrites (button label, error message, comment).
* Simple, repeatable changes where the right answer is obvious.

**Use the strong reasoning model for:**

* “Why is this bug happening?” or “What’s the best way to do X?”.
* Planning or breaking down a feature into steps.
* Choosing between design or architecture options.
* Tasks where you need the AI to reason, not just pattern-match.

**Use the best coding model for:**

* Writing or changing real code that will ship (new feature, refactor, bug fix).
* Anything that touches security, auth, or sensitive data.
* When the AI must follow your repo’s patterns and not invent paths or APIs.
* Review or cleanup of existing code.

---

## Rule of thumb (two lines)

**If it must be correct, not just plausible — switch up.**  
Use a stronger or best-coding model when wrong answers are costly (e.g. wrong code, wrong architecture, invented APIs).

**If it’s simple and repetitive — switch down.**  
Use the fast model for mechanical edits and copy changes so you save time and cost.

---

## “Switch up” warning signs

You’re on too weak a model when you see:

* **Plausible-but-wrong outputs** — The answer sounds good but is wrong (wrong API, wrong assumption, wrong file). Switch to a stronger or best-coding model.
* **Invented paths or APIs** — The AI suggests files, endpoints, or names that don’t exist in your repo. Switch up and give a clear Context Pack; consider the best coding model for code work.
* **Repeated misunderstanding** — You correct the AI and it keeps making the same kind of mistake. Try a stronger model (or a context reset) before adding more messages.

When you see these, switch to a stronger reasoning model for planning, or to the best coding model for code.

---

## “Switch down” cases

You can use the fast model when:

* **Mechanical edits** — Rename, reorder, add a missing import, fix a typo, change a constant.
* **Copy rewrites** — Update button text, error messages, comments, or docs in one place.
* **Simple, obvious tasks** — The change is clear and low-risk; the fast model is enough.

Switching down saves time and cost. If the fast model starts making mistakes or inventing things, switch back up.

---

## Common mistakes

* Using the **fast model for important code** (e.g. auth or refactors). Wrong code is expensive; use the best coding model.
* Using the **best coding model for every tiny edit**. Use the fast model for mechanical or copy-only changes.
* Ignoring **plausible-but-wrong** or **invented paths**. Those are signs to switch up (or reset context), not to keep explaining in the same chat.
