---
title: Partner Map (Reference)
---

## What this is

`docs/ai/partner-map.md` is the **partner map** template: who owns what, when to involve them (triggers), constraints they care about, and escalation path.

## When to use it

- Fill when multiple teams or owners touch the repo; helps the AI know when to call out review or constraints.
- Keep the table short; add rows as needed.

## Exact text (from kit)


Source: `docs/ai/partner-map.md`

```
# Partner map

Who owns what, when to involve them, and how to escalate. Fill in or mark TODO.

---

| Team/Owner | Owns (systems, surfaces) | Review required when | Constraints they care about | Escalation path |
|------------|--------------------------|----------------------|------------------------------|-----------------|
| TODO       | TODO                     | TODO                 | TODO                         | TODO            |
| TODO       | TODO                     | TODO                 | TODO                         | TODO            |
| TODO       | TODO                     | TODO                 | TODO                         | TODO            |

---

**How to use**

* **Team/Owner:** Name or team (e.g. Platform, Security, Design).
* **Owns:** Systems, APIs, UI surfaces, or domains they own.
* **Review required when:** Triggers that mean you must involve them (e.g. "touching auth", "new external integration", "design system change").
* **Constraints they care about:** What they will push back on (e.g. "no new env vars without runbook", "a11y must pass").
* **Escalation path:** Who to ask or where to look when blocked (e.g. Slack channel, ticket queue, lead). <!-- TODO: fill per team -->
```
