---
title: Install (by copying the kit)
---

# What this is

You install the kit by copying files. No npm install needed.

You copy everything from the `kit/` folder (or the contents of `starter/`) into the **root** of your project—the same folder that has your app or code. For a preview of the folder structure and links to each file’s full text, see [Kit file preview](../reference/kit-preview).

## When to use it

* **New project:** Use the **starter zip** (see [Downloads](downloads)): unzip it and open that folder as your project root. The unzipped folder is your project; don’t leave the kit nested inside a subfolder like `ai-kit-starter`.
* **Existing project:** Use the **kit-only zip** or copy the contents of `kit/` or `starter/` into your repo root (see below).

## Add to an existing project

1. **Get the kit:** Download **ai-kit-only.zip** from [Releases](https://github.com/rwyatt2/AI-Productivity/releases), or clone the repo and use the contents of **`kit/`** or **`starter/`** (same files).
2. **Copy into your repo root:** Copy `.cursor/`, `docs/` (or `docs/ai/`), `.github/`, and `cursor-ai-kit.config.json` into the **root** of your existing repo. If you already have `.cursor/` or `docs/`, merge or replace.
3. **Fill in placeholders:** See [What to fill in](what-to-fill-in).

**Avoid:** Don’t put the kit inside a subfolder (e.g. `ai-kit-starter`). The kit must be at the **project root** so Cursor loads rules and prompts correctly.

## Steps (after copying)

1. Check that your repo root now has:
   * `.cursor/` (rules and prompts)
   * `docs/ai/` (config and source of truth)
   * `.github/` (PR template and Copilot instructions)
2. Open `docs/ai/ai-config.md`. Fill in the Design System part:
   * Design system name
   * Design system docs (a link)
   * Design system imports or package name
3. Open Cursor in the repo. In a new chat, paste:
   * Session Kickoff (see Daily workflow)
   * Context Pack template
   * Router prompt
4. If something is missing, the AI should ask exactly ONE question and wait. Answer it, then it continues.

## Next: fill in the Source of Truth files

After copying, fill the files in `docs/ai/` so the AI stops guessing. See [Source-of-truth docs](source-of-truth) for what they are and why they matter, and [What to fill in](what-to-fill-in) for a short checklist.

## Optional: set Global Rules for a better experience

If you sometimes work in repos that don’t have this kit, you can set **Global Rules** in Cursor so the AI still follows the same behavior (one question at a time, switches, no inventing). See [Global Rules](global-rules) for what they are and how to paste them into Cursor settings.

## Common mistakes

* **Putting the kit in a subfolder.** Keep `.cursor/`, `docs/`, etc. at the **project root**. If you unzipped into `ai-kit-starter`, move everything out to the root and delete the empty folder.
* Not filling the Design System placeholders. The kit still works, but the AI may guess UI patterns and look inconsistent.
* Pasting too much at once. Keep the Context Pack short. Use 3–7 relevant files and bullet points.
* If the AI feels wrong, say **Switch: SPEC** or **Switch: IMPLEMENT** instead of starting over without a plan.
