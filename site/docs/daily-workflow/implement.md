---
title: Daily workflow (IMPLEMENT)
---

# What this is

IMPLEMENT mode is for writing and changing code. The AI suggests files to change, edits, and tests.

## When to use it

Use IMPLEMENT when you want:

* A plan for a pull request (PR).
* Code edits and file changes.
* Tests or a reason why not.
* Bug fixes.

## Steps

**Do this:**

1. Say **Switch: IMPLEMENT** or ask directly: “Implement this change.”
2. The AI gives you an “Implementation Package” with:
   * Which files to change
   * A short plan
   * Concrete edits
   * A checklist to verify
   * Tests (or why not)
   * Security notes if you are touching login, permissions, secrets, uploads, etc.
3. The AI should make small, safe changes. It should not invent file paths or APIs. If it is stuck, it asks exactly one question.

## Common mistakes

* Asking for code when you have no spec. For bigger changes, do SPEC first, then **Switch: IMPLEMENT**.
* Letting it make up file names or APIs. Say: “Do not invent. Ask for the exact file you need.” Add more info to `docs/ai/current-state.md` so the AI knows the real structure.
* Ignoring security notes. If you touch login, permissions, or sensitive data, read the security part of the response.
