# Router

Use this when you need the AI to choose between SPEC and IMPLEMENT behavior based on the Context Pack.

---

**Inputs (from Context Pack):**
* Platform type: the slug from `docs/ai/ai-config.md` (e.g. `consumer-app`, `data-platform`, `saas-b2b`)
* Exposure level: [ internal | external-authenticated | public ]
* Data sensitivity: [ public | internal | confidential | restricted ]
* Current task or question

**Rules:**
* If platform type is missing and cannot be inferred from context: ask **exactly one** question (e.g. "What platform type should I use? Check `docs/ai/ai-config.md` for the slug.") and stop.
* **SPEC behavior:** User said "Switch: SPEC" or the ask is clearly planning/scoping. Output: scope, acceptance criteria, open questions. No code. Apply PM / Discovery / Design / Security agents as relevant; use exposure and data-sensitivity overlays when security is in scope.
* **IMPLEMENT behavior:** User said "Switch: IMPLEMENT" or the ask is clearly code/build. Output: files to change, plan, diffs, verification. Proceed with minimal safe changes. Apply FE / QA / Validation / Security agents as relevant; use exposure and data-sensitivity overlays when security is in scope.

**Output:** Proceed in the chosen mode. Do not mix SPEC and IMPLEMENT in one response unless the user explicitly asks for both.
