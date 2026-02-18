---
title: Platform type
---

# What this is

Platform type tells the AI what kind of product you are building. It shapes the advice the AI gives: what to focus on, what risks to flag, and what "done" looks like. You define your own slug — it is not limited to two built-in values.

## How to set your platform type

Platform type is defined in `docs/ai/ai-config.md` in your repo. Open that file and fill in the **Platform type** section:

```
Platform type slug: consumer-app
Description:        A mobile-first product for end users. Fast iteration, visual polish.
What the AI should emphasise: UX states, accessibility, error handling, loading states.
```

Then paste the same slug into your Context Pack at the start of each task:

```
Platform type: consumer-app
```

## Built-in examples (or invent your own)

| Slug | Best for |
|------|----------|
| `consumer-app` | Product for end users (web or mobile) |
| `internal-tool` | Tool used only inside your org or team |
| `data-platform` | Data, analytics, dashboards, reports |
| `developer-platform` | APIs, SDKs, CLIs, tools for other developers |
| `ecommerce` | Shopping, checkout, product catalog, orders |
| `saas-b2b` | Multi-tenant SaaS sold to businesses |
| `mobile-app` | Native iOS / Android product |
| `ai-product` | An AI-powered end-user product |

These are starting points. Use any lowercase hyphenated slug that fits your product — as long as it matches what is in `docs/ai/ai-config.md`.

## What the AI does with it

The AI reads your platform type and description from `docs/ai/ai-config.md` and uses it to:

* Focus spec mode on the right concerns (e.g. UX states for consumer apps, API ergonomics for developer platforms).
* Calibrate security advice (e.g. higher caution for ecommerce and data platforms).
* Avoid generic advice that does not fit your product.

## Common mistakes

* Setting a slug in the Context Pack that does not match `docs/ai/ai-config.md`. Keep them in sync.
* Leaving `docs/ai/ai-config.md` at `TODO`. Fill it in once; the AI will use it for every task.
* Mixing two platforms in one task. If your product has an admin console and a consumer app, add both slugs to `ai-config.md` and pick one per task in the Context Pack.
