---
title: Switching modes (no confusion)
---

# What this is

Sometimes the AI starts doing the wrong thing (e.g. writing code when you wanted a plan, or writing a long spec when you wanted code). Switching changes the mode so you and the AI are aligned.

## When to use it

Use it when the AI is in the wrong “mode”:

* It is writing code but you wanted a plan first → **Switch: SPEC**
* It is writing a long spec but you want code now → **Switch: IMPLEMENT**

## Steps

**Do this:**

1. Type exactly one of these:
   * **Switch: SPEC**
   * **Switch: IMPLEMENT**
2. The AI must then write a short “Handoff Summary”:
   * What we are trying to do right now
   * What we already decided
   * Important limits or rules
   * What we still don’t know
   * What happens next
3. After that, it continues in the new mode.

## Common mistakes

* Typing a long message instead of just “Switch: SPEC” or “Switch: IMPLEMENT.” Keep the switch command clear.
* Expecting it to redo everything. The handoff summary keeps context so you don’t lose work and the AI does not mix spec text with code.
