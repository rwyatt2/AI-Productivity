---
title: Kit file preview
sidebar_position: 0
---

# Kit file preview

This page helps you **see what’s in the kit** before or after you install it. You get the folder structure, a short guide to each file, and links to the **exact text** of every file (with steps and when to use it) in this Reference section.

## When to use this preview

- **Before downloading:** You want to know what files and folders you’ll get and where they live.
- **After installing:** You want to confirm the layout at your project root or look up the exact content of a file.
- **When something’s wrong:** You’re not sure if the kit is in the right place; the structure below is the single source of truth.

## Steps: using this reference

1. **Check the folder structure** below. After you unzip or copy the kit, your project root should look like this. If you see a wrapper folder (e.g. `ai-kit-starter`), move everything inside it to the root and delete the wrapper.
2. **Open the file you need** from the table: each row links to a Reference page that has **What this is**, **When to use it**, **Steps**, and the **exact text** from the kit.
3. **Fill in placeholders** where the docs say to (e.g. [AI Config](./ai-config) and [Context Pack](./context-pack-template)). Use [What to fill in](../getting-started/what-to-fill-in) for the rest.

## Folder structure

When you unzip **ai-kit-only.zip** or **ai-kit-starter.zip**, or copy from **kit/** or **starter/**, you get this layout at your **project root**:

```
.cursor/
  prompts/
    10-context-pack.md      ← Context Pack template (paste into chat)
  rules/
    00-operating-system.mdc ← How the AI should behave (Cursor)
    40-security.mdc          ← Security rules (Cursor)
.github/
  copilot-instructions.md   ← Instructions for GitHub Copilot
  pull_request_template.md  ← PR template
docs/
  ai/
    ai-config.md            ← Design system & project config (fill in)
cursor-ai-kit.config.json   ← Kit config (optional)
README.md                   ← (starter only) Short “how to use” note
```

**Important:** These files and folders must sit at the **root** of your project (the same folder as your app or code), not inside a subfolder like `ai-kit-starter`.

## File reference (with steps and exact text)

Each link goes to a page that includes: **What this is**, **When to use it**, **Steps**, and the **exact content** from the kit.

| File | What it is | Reference (context + steps + exact text) |
|------|------------|------------------------------------------|
| `docs/ai/ai-config.md` | Design system and project config. Fill this in after install. | [AI Config (Reference)](./ai-config) |
| `.cursor/prompts/10-context-pack.md` | Template you paste into chat with platform type, exposure, and 3–7 context items. | [Context Pack Template (Reference)](./context-pack-template) |
| `.cursor/rules/00-operating-system.mdc` | Cursor rules: one question at a time, switches, cross-platform behavior. | [Cursor Rules – Operating System (Reference)](./cursor-rules-operating-system) |
| `.cursor/rules/40-security.mdc` | Cursor rules for security (secrets, credentials, sensitivity). | [Cursor Rules – Security (Reference)](./cursor-rules-security) |
| `.github/copilot-instructions.md` | Instructions for GitHub Copilot (optional; aligns with Cursor). | [GitHub Copilot Instructions (Reference)](./copilot-instructions) |
| `.github/pull_request_template.md` | Default PR description (What, Why, Checklist). | [GitHub PR Template (Reference)](./github-pr-template) |

## Other files

- **cursor-ai-kit.config.json** — Optional kit configuration. See [kit/cursor-ai-kit.config.json](https://github.com/rwyatt2/AI-Productivity/blob/main/kit/cursor-ai-kit.config.json) in the repo.
- **README.md** — In the starter zip only; short “how to use” note. See [starter/README.md](https://github.com/rwyatt2/AI-Productivity/blob/main/starter/README.md).
