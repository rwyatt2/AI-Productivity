---
title: Context references (@Codebase, @file, docs/ai/)
---

## Three ways to give Cursor context

| Method | Syntax | Best for | Caution |
|--------|--------|----------|---------|
| Codebase index | @Codebase | Broad architecture Qs, refactoring planning | Can overload context window |
| File reference | @filename | Targeted edits to specific files | Use for focused tasks |
| Source-of-truth docs | docs/ai/*.md (via Context Pack) | Project config, decisions, terminology | Keep these small and current |

## When to use @Codebase

Use **@Codebase** when you need the AI to search across the whole repo and reason about structure or patterns.

**Good examples:**

* **"Where is authentication handled?"** — You don’t know the file; @Codebase lets the AI find auth-related code and summarize where it lives.
* **"How do we typically fetch data in this app?"** — Broad question about conventions; @Codebase can surface the patterns (e.g. React Query, REST helpers) and point to examples.
* **"Plan a refactor of the checkout flow — what files are involved?"** — You want a map of the flow before touching code; @Codebase is right for discovery and planning.
* **"What’s the entry point for the API server?"** — Architecture question; @Codebase can locate and explain it.

## When NOT to use @Codebase

Avoid **@Codebase** when you already know which file(s) matter or when the task is narrow.

**Examples:**

* **Editing a single component** — You’re in `Header.tsx` and want to change the login button. Use **@Header.tsx** (or the exact path) so the AI only sees that file. @Codebase would pull in far more than needed and slow responses.
* **Fixing one function or one API route** — You have the file open. Reference that file explicitly. @Codebase adds noise and can trigger the kit’s 85% confidence gate: with too much ambiguous context, the AI may ask unnecessary questions or give vaguer answers.
* **Implementing a small, well-scoped change** — You’ve already decided the files (e.g. "add this to `utils/format.ts`"). Use **@file** references in your Context Pack. @Codebase is for when you’re still discovering.

**Why it matters:** @Codebase can overload the context window, make replies slower, and increase the chance the AI gets confused or asks for clarification it wouldn’t need with a focused file set.

## How Cursor decides what to index

Cursor indexes your project so it can answer questions and suggest edits. It uses the files and folders in your repo to build a searchable view of the codebase. When you use @Codebase, Cursor draws on that index to find relevant code and include it in the context it sends to the model. What gets indexed affects how much is available for @Codebase and how big the context can get.

You control what is **excluded** from indexing with **`.cursorignore`**. Any path listed in `.cursorignore` is not indexed and is not sent as context. That keeps secrets (e.g. `.env`), dependencies (`node_modules/`), and build output (`dist/`, `build/`) out of the picture—reducing bloat and avoiding the AI "seeing" files it shouldn’t. See the [.cursorignore guide](../getting-started/cursorignore) for the recommended template and how to tailor it.

## How docs/ai/ fits in

The files in **`docs/ai/`** (e.g. `ai-config.md`, `current-state.md`, `glossary.md`) are your always-include context: project config, conventions, decisions, and terminology. Put them in the **Context Pack** prompt—list the relevant `docs/ai/` files or paste short excerpts—rather than relying on @Codebase to "find" them. They’re small and targeted; the AI should use them as the source of truth for how your project works. See [Source-of-truth docs](../getting-started/source-of-truth) for the full list and what to fill in.

## Recognizing context rot

When answers get vaguer, the AI refers to earlier context it shouldn’t, or it starts contradicting itself, the conversation has likely rotted. Start a fresh Composer window and use the reset recipe (Session Kickoff + a small Context Pack). For the full treatment—signs of overload and rot, the reset recipe, and carryover summary—see [Context windows (overload, rot, reset)](context-windows).
