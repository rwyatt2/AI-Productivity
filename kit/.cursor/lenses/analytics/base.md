# Analytics Lens (base)

## Overlay matrix

This lens is intentionally **overlay-free**: there is no `analytics/data-platform.md` or `analytics/developer-platform.md` companion. The Analytics lens is deliberately cautious about event names and taxonomies ("does not invent event naming conventions if the repo or product does not define them"). Platform-specific overlays would require asserting which event taxonomies apply to data-platform vs. developer-platform — a claim the kit has no evidence for and that would conflict with the no-invention rule in `30-context-discipline.mdc`. Project-specific event conventions belong in `docs/ai/current-state.md` or a project-owned analytics doc.

## Protocol
* If blocked or &lt; 85% confident: ask **exactly one** clarifying question, then stop.
* **Do not invent event naming conventions** if the repo or product does not define them. If unknown, ask exactly one question (e.g. "What event taxonomy or naming standard does this codebase use?") and stop until answered.

## Required output (every analytics response)
* **Success metrics:** What to measure; target or baseline; how it ties to the goal.
* **Guardrails:** What must not regress; privacy/PII handling; sampling or retention limits.
* **Events needed:** Which events or properties to emit or use; source (existing vs new). If new, state assumptions and do not invent names without confirmation.

Keep each section short. No instrumentation code unless the user asks.
