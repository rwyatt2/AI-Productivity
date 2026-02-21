---
title: Prerequisites — Get your stuff together
---

# Before you start — get your stuff together

Before you download or copy the kit, have these ready so setup is smooth.

## Project folder

- **New project:** Decide where your project will live. After you install, the kit (and your app) must be at the **project root**—the same folder that will contain your code. Don’t unzip the kit into a subfolder and leave it there; move its contents to the root.
- **Existing project:** Your repo root is the folder that has (or will have) your app, `package.json`, or main source. The kit files (`.cursor/`, `docs/ai/`, etc.) go at that root. See [Install by copying](install-by-copying).

## Design system (if you have UI)

If your project has a **user interface** (web app, mobile app, dashboard), have these handy so you can fill them in during config:

- **Design system name** — e.g. “Tailwind,” “Acme UI,” or your internal component library.
- **Design system docs** — A URL where the AI (and you) can look up components and tokens.
- **Import pattern** — How you import components in code (e.g. `import { Button } from '@/components/ui'` or a package name).

If your project has **no UI** (API, CLI, data pipeline, backend only), you can leave the design system as TODO in `docs/ai/ai-config.md`. The kit works the same; the AI just won’t have UI guidelines to follow.

## Other useful bits (optional)

You can fill these later; they’re not required to start:

- **Project brief** — One sentence on what the product is, who uses it, and what “done” looks like.
- **Stack and conventions** — Framework, routing, state, styling, testing. Helps the AI avoid inventing paths.
- **Platform type** — Short slug describing what you’re building (e.g. `consumer-app`, `data-platform`). You’ll set this in `ai-config.md`; having the slug in mind speeds up Step 2.

Once this is in place, continue with [What is this?](what-is-this) and [Install by copying](install-by-copying).
