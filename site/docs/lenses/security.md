---
title: Security lens
---

# What this is

The Security lens asks: What could go wrong? Who could abuse this? How do we avoid data leaks and permission mistakes? The kit turns it on by default so you don’t forget. It gets more serious when you touch login, permissions, sensitive data, uploads, or exports.

## When to use it

The Router uses it in both SPEC and IMPLEMENT when it’s relevant. It kicks in more when you touch:
* Login, roles, or permissions
* Sensitive data
* File uploads, URLs, or rich text
* Things that are exposed to the internet or admins
* Exports or downloads

## Steps

**Do this:**

1. Don’t turn Security off. Let the kit include security notes when triggers apply.
2. When the AI gives you security notes, read them. It will list:
   * Top threats
   * Mitigations (how to reduce risk)
   * Security acceptance criteria (things you can test)
3. If you are building login, permissions, or anything that touches secrets, do a short threat model (see Security → Threat model).

## Common mistakes

* Ignoring security notes because “it’s internal.” Internal tools can still leak data or be abused.
* Skipping the threat model when you touch auth or sensitive data. Use the template in Reference → Cursor Rules - Security or in the kit’s `docs/ai/checklists/threat-model-lite.md`.
