---
title: Current State (Reference)
---

## What this is

`docs/ai/current-state.md` holds **repo conventions**: routing, data fetching, state, forms, styling, testing, telemetry, and common pitfalls. Each section has "what we do / where it lives / what to avoid" so the AI does not invent paths.

## When to use it

- After installing the kit: fill each section (or mark TODO) so the AI follows your stack and file layout.
- Prevents hallucinations about routes, APIs, and file paths.

## Exact text (from kit)


Source: `docs/ai/current-state.md`

```
# Current state

Repo conventions so the AI does not invent paths or patterns. Fill in or mark TODO; if unknown, guess where truth likely lives and label it TODO.

---

## Routing

**What we do:**  
<!-- TODO: e.g. file-based, React Router, Next.js App Router, etc. -->

**Where it lives (file paths):**  
<!-- TODO: e.g. src/routes/, app/, pages/ -->

**What to avoid:**  
<!-- TODO: e.g. don't add routes without updating X; don't use hash routing -->

---

## Data fetching

**What we do:**  
<!-- TODO: e.g. REST, GraphQL, React Query, SWR, server components, etc. -->

**Where it lives (file paths):**  
<!-- TODO: e.g. src/api/, hooks/use*.ts, services/ -->

**What to avoid:**  
<!-- TODO: e.g. no fetch in components; no ad-hoc URLs; use shared client -->

---

## State management

**What we do:**  
<!-- TODO: e.g. React state + Context, Zustand, Redux, URL state, etc. -->

**Where it lives (file paths):**  
<!-- TODO: e.g. src/store/, contexts/, hooks/ -->

**What to avoid:**  
<!-- TODO: e.g. no global state for local UI; no duplicate sources of truth -->

---

## Forms

**What we do:**  
<!-- TODO: e.g. React Hook Form, Formik, native, controlled components, etc. -->

**Where it lives (file paths):**  
<!-- TODO: e.g. components/forms/, hooks/useForm*, validation in X -->

**What to avoid:**  
<!-- TODO: e.g. don't bypass validation; don't invent field names; use shared schema -->

---

## Styling

**What we do:**  
<!-- TODO: e.g. Tailwind, CSS modules, styled-components, design tokens, etc. -->

**Where it lives (file paths):**  
<!-- TODO: e.g. tailwind.config, src/styles/, design system package -->

**What to avoid:**  
<!-- TODO: e.g. no inline styles for layout; no one-off colors; use tokens -->

---

## Testing

**What we do:**  
<!-- TODO: e.g. Jest, Vitest, React Testing Library, Playwright, Cypress, etc. -->

**Where it lives (file paths):**  
<!-- TODO: e.g. __tests__/, *.test.tsx, e2e/, vitest.config -->

**What to avoid:**  
<!-- TODO: e.g. don't skip tests for new features; don't mock what we own; naming convention X -->

---

## Telemetry conventions

**What we do:**  
<!-- TODO: e.g. events, logs, errors to X; naming format; what we never send -->

**Where it lives (file paths):**  
<!-- TODO: e.g. lib/analytics, utils/logger, instrumentation -->

**What to avoid:**  
<!-- TODO: e.g. no PII in events; no invented event names; check glossary/spec -->

---

## Common pitfalls

**What we do:**  
<!-- TODO: brief list of how we stay consistent (e.g. "run lint before commit", "spec before impl") -->

**Where it lives (file paths):**  
<!-- TODO: e.g. CONTRIBUTING.md, .eslintrc, docs/ai/ (this folder) -->

**What to avoid:**  
<!-- TODO: e.g. don't add deps without Y; don't change APIs without updating Z; don't guess paths—ask -->
```
