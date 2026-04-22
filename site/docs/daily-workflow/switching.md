---
title: Switching modes (no confusion)
---

# What this is

Sometimes the AI starts doing the wrong thing (e.g. writing code when you wanted a plan, or writing a long spec when you wanted code). Switching changes the mode so you and the AI are aligned.

## Advisories block

At the top of replies you may see an **Advisories** block. It tells you how the AI is working and when you should change something.

* **Route** — Is the AI in Plan mode or Agent mode for this reply?
* **Model class** — Fast (quick), Reasoning (hard stuff), or Best-coding (many files). The AI suggests which fits.
* **Context risk** — Low, Medium, or High. How likely the AI is to get mixed up with the files and chat you have open.
* **HIGHLY RECOMMENDED** — The AI is saying: you should do something (switch mode, use a stronger model, or start a new chat). Do what it says in the reply.

The AI may say HIGHLY RECOMMENDED when the work touches login, permissions, exports, restricted data, external exposure, integrations, uploads, or secrets. When you see that, follow the suggestion in the response.

## When to use it

Use it when the AI is doing the wrong thing:

* It is writing code but you wanted a plan first → switch to **Plan mode**
* It is writing a long spec but you want code now → switch to **Agent mode**

## Steps

```mermaid
flowchart LR
  wrong["Wrong mode\ndetected"] --> toggle["Shift+Tab\n(Cursor toggle)"]
  toggle --> handoff["Handoff Summary\nWhat · Decided · Limits · Next"]
  handoff --> newMode["New mode\ncontinues"]
```

**Do this:**

1. In Cursor, press **Shift+Tab** to toggle between Plan mode and Agent mode. The mode indicator in the chat input shows which mode is active.
2. If you want the AI to acknowledge the switch and carry context forward, type one of:
   * **Switch: SPEC** — goes to planning mode
   * **Switch: IMPLEMENT** — goes to code mode
3. The AI then writes a short "Handoff Summary":
   * What we are trying to do right now
   * What we already decided
   * Important limits or rules
   * What we still don't know
   * What happens next
4. After that, it continues in the new mode.

:::note Other editors
In editors without a native mode toggle (Copilot, Antigravity), type `Switch: SPEC` or `Switch: IMPLEMENT` as the primary way to switch. The AI will output a Handoff Summary and continue.
:::

## Common mistakes

* Typing a long message instead of just switching. Keep it clean — toggle the mode or type the Switch command, nothing else.
* Expecting it to redo everything. The handoff summary keeps context so you don't lose work and the AI does not mix planning with code.

## API usage

If your API usage is high, stay on Auto/Fast unless the AI says HIGHLY RECOMMENDED.
