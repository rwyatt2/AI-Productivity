---
title: .cursorignore (reduce context bloat)
---

## What this is

`.cursorignore` tells Cursor which files and folders to **exclude when indexing your project**. Paths listed there are not sent as context, which keeps chats focused and avoids leaking secrets or wasting tokens on build output and dependencies.

The kit ships a recommended `.cursorignore` at the project root when you copy from `kit/` or `starter/`. Merge it with any existing `.cursorignore` you already have.

## Recommended template

Copy this into your project root as `.cursorignore`, or merge with your existing file:

```gitignore
# Cursor ignores these paths when indexing your project.
# Edit this file to add paths specific to your project.

# Dependencies — keep node_modules and package manager caches out of context
node_modules/
.pnp/
.pnp.js

# Build outputs — generated artifacts; the AI should not treat these as source
dist/
build/
.next/
out/
.turbo/

# Environment and secrets — never send these to the AI
.env
.env.*
*.pem
*.key

# Large lockfiles — optional: uncomment if context is too large; omit if you want the AI to see dependency versions
# package-lock.json
# yarn.lock
# pnpm-lock.yaml

# Binary and media — reduce noise and token use; narrow (e.g. static/**/*.png) if needed
*.png
*.jpg
*.jpeg
*.gif
*.webp
*.pdf
*.mp4
*.webm
```

## When to add more entries

- **Monorepos:** Add paths to other apps or packages you don’t want in context (e.g. `apps/legacy/`, `packages/internal-tool/`).
- **Large asset folders:** If you have big `static/`, `public/`, or `assets/` directories, add them or narrow with globs (e.g. `static/**/*.png`) so the AI isn’t flooded with binaries.
- **Docs or generated docs:** If you use a docs site (e.g. Docusaurus), add its build output (e.g. `.docusaurus/`, `build/`) so Cursor doesn’t index generated HTML.

Why this matters: when too much is in context, the AI gets overloaded or forgets things. See [Context windows (overload, rot, reset)](../daily-workflow/context-windows) for signs and how to reset.

## Common mistakes

* **Forgetting to exclude .env and secrets** — If `.env*` or `*.pem` / `*.key` are not in `.cursorignore`, Cursor can index them and they may be sent to the AI. Always exclude environment and secret files.
* **Not excluding build output** — Leaving `dist/`, `.next/`, or similar in context wastes tokens and can confuse the AI (it may suggest editing generated files). Add your framework’s output directory.
* **Over-ignoring** — If you ignore whole app directories, the AI won’t see your code. Only ignore dependencies, build artifacts, secrets, and large binary/media paths.
