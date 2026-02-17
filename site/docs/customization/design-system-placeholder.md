---
title: Design system (placeholder)
---

# What this is

The kit has a place where you tell it which design system you use (name, docs link, and how you import it). If you fill this in, the AI will use your real components and styles. If you leave it blank, the AI may guess and the UI can look inconsistent.

## When to use it

Fill it in right after you install the kit (or when you add a design system to the project). You only need to do it once per project unless you change design systems.

## Steps

**Do this:**

1. Open `docs/ai/ai-config.md` in the kit (or in your repo after you copied the kit).
2. Find the Design System section.
3. Fill in:
   * **Design system name** — e.g. “Tailwind” or “Our Design System”
   * **Design system docs** — A link to the docs or a short description of components and tokens
   * **Design system imports/package** — How you import it (e.g. package name or path)
4. Save. The AI will use this for UI suggestions.

## Common mistakes

* Leaving all three blank. The kit still runs, but the AI may mix up components or invent class names. At least add the name and where to look.
* Pointing to docs that don’t exist or are wrong. Use a link or path the AI (or you) can actually open.
