---
title: GitHub PR Template (Reference)
---

## What this is

`.github/pull_request_template.md` is the **default description** for new pull requests. When someone opens a PR, GitHub pre-fills the body with this template (What, Why, Checklist).

## When to use it

- After copying the kit into your repo, the template is already in `.github/`. It reminds authors to describe the change, link to spec, and tick security/tests when relevant.

## Steps

1. Ensure `.github/pull_request_template.md` exists at your repo root (from the kit or starter).
2. Optionally customize the checklist (e.g. add “Design reviewed”) in your repo.
3. When opening a PR, fill in What, Why, and the checklist. Use the exact template below as reference.

## Exact text (from kit)


Source: `.github/pull_request_template.md`

```
## What

(Short description of the change.)

## Why

(Brief reason or link to spec.)

## Checklist

- [ ] Spec or acceptance criteria met (if applicable)
- [ ] Security considerations noted (if triggers apply)
- [ ] Tests added or updated (or reason why not)
```
