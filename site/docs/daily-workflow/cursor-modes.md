---
title: Cursor modes (Chat, multi-file, small edits)
---

## What this is

Cursor has different **places** you can use the AI. Each place is good for different jobs. Picking the right one saves time and keeps things clear.

Think of it like: sometimes you need to talk things through (Chat), sometimes you need to change lots of stuff at once (multi-file), and sometimes you just need to fix one little thing (small edit).

## 1. Chat — thinking and planning

**What it’s for:** Asking questions, getting ideas, writing down what you want before you build it. No code yet — just “what are we doing?” and “what does done look like?”

**Do this:**

1. Open **Chat** in Cursor (the chat panel).
2. Paste Session Kickoff and your Context Pack so the AI knows the project.
3. Ask your question or describe what you’re trying to figure out.
4. Use **Switch: SPEC** if you want a plan and acceptance criteria. Use **Switch: IMPLEMENT** when you’re ready for code (then consider using the multi-file mode for the actual edits).

**Common mistakes:**

* Using Chat to change many files. Chat is great for planning; for big code changes, use the multi-file mode (Composer/Agent) instead.
* Skipping the Context Pack. Without it, the AI guesses and can give wrong or fuzzy advice.

---

## 2. Multi-file changes — feature work

**What it’s for:** When you need the AI to change several files at once: a new feature, a refactor, or a fix that touches more than one place. The AI can see your code and suggest edits across files.

**Do this:**

1. Open **Composer** (or Agent) in Cursor — the place that lets the AI edit multiple files.
2. Paste your Context Pack (and Session Kickoff + Router if you’re starting fresh).
3. Say what you want: e.g. “Add a login button to the header and wire it to the auth service.”
4. Review the changes it suggests before you accept them. If something is wrong, say so in a short message.

**Common mistakes:**

* Doing big multi-file work in Chat. Chat doesn’t apply edits to many files; use Composer for that.
* Not saying what “done” looks like. Give a short goal or acceptance so the AI doesn’t change too much or too little.

---

## 3. Small edits — tiny fixes

**What it’s for:** One line or one small change: fix a typo, rename a variable, tweak a string, or adjust one condition. You don’t need a long conversation or multi-file mode.

**Do this:**

1. Select the exact code (or place) you want to change, or put your cursor there.
2. Use Cursor’s **inline edit** or **quick edit** (e.g. right-click or shortcut) so the AI only sees that small spot.
3. Tell it what you want in one short sentence: e.g. “Fix the typo: ‘recieve’ → ‘receive’” or “Use the new constant here.”
4. Accept or reject the small change. No need to paste Session Kickoff for this.

**Common mistakes:**

* Opening a full Chat or Composer for a one-line fix. Use the small-edit flow instead so you don’t load the whole project into the conversation.
* Being vague. “Fix this” is okay if the selection is tiny; for a whole function, say exactly what should change.

---

## Quick picker

* **You want to think, plan, or get a spec** → Use **Chat**.
* **You want to change lots of files** (feature or refactor) → Use **multi-file (Composer/Agent)**.
* **You want to fix one small thing** in one place → Use **small edits (inline)**.
