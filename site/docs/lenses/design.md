---
title: Design lens
---

# What this is

The Design lens helps answer: What does the user see and do? What happens when things are loading, empty, or broken? Is it accessible? It produces UX states, interaction details, accessibility needs, and content/copy needs.

## When to use it

The Router uses it in SPEC mode. You don’t run it by itself. You use SPEC mode and the AI uses Design (and other lenses) to describe screens and states.

## Steps

**Do this:**

1. Use SPEC mode (Session Kickoff + Context Pack + Router).
2. The AI will use the Design lens to give you:
   * UX states (e.g. loading, empty, error, success)
   * How the user interacts with the feature
   * Accessibility requirements
   * What text and labels are needed
3. If you need more detail on one screen, ask in a follow-up. The AI should ask only one question at a time if it needs something from you.

## Common mistakes

* Forgetting empty and error states. The Design lens should cover them; if the AI skips them, ask: “What does the user see when the list is empty? When the request fails?”
* Skipping accessibility. If your product is for real users, ask for accessibility requirements in the spec.
