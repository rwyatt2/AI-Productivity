# Decisions

Notable product/tech decisions and rationale. Append new entries at the top. Keep each entry short.

---

## Template (copy to add a new decision)

**Date:** YYYY-MM-DD  
**Decision:** One line: what we decided.  
**Why:** Why we did it (context, problem, goal).  
**Tradeoffs:** What we gave up or accepted.  
**Follow-ups:** Open items or next steps (optional).

---

## Log

### 2024-01-15 — Use SPEC-first as default route

**Date:** 2024-01-15  
**Decision:** AI defaults to planning (SPEC) mode; no code until user says "Switch: IMPLEMENT" or explicitly asks for code.  
**Why:** Reduces hallucinations and scope creep; forces alignment before implementation.  
**Tradeoffs:** Slightly more back-and-forth for small fixes; users must learn the switch.  
**Follow-ups:** Document in onboarding; consider "quick fix" shortcut later.

---

<!-- Add new entries above this line. -->
