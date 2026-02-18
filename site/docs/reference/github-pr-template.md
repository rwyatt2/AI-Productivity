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

## Switches

| Switch | Value |
|--------|--------|
| Platform type | [ ] data-platform \| [ ] developer-platform |
| Exposure level | [ ] internal \| [ ] external-authenticated \| [ ] public |
| Data sensitivity | [ ] public \| [ ] internal \| [ ] confidential \| [ ] restricted |

## UX states

- [ ] Default state covered
- [ ] Loading state (or N/A)
- [ ] Empty state (or N/A)
- [ ] Error state (or N/A)
- [ ] Success/confirmation where relevant

## Accessibility

- [ ] Focus order and keyboard usable
- [ ] Labels/aria where needed; color not sole indicator
- [ ] Sufficient contrast and target size (or deferred with reason)

## Security / Privacy

- [ ] No secrets in code or logs
- [ ] No sensitive data in logs
- [ ] Least privilege; no broadened permissions for convenience
- [ ] If triggers apply (auth, uploads, exports, external): threat-model-lite and security acceptance criteria done (or N/A)

## Tests / Verification

- [ ] How to verify (steps or command)
- [ ] Tests added/updated or rationale for skipping
```
