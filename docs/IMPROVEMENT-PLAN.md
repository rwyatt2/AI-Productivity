# Kit improvement plan

Based on user feedback and left-navigation goals.

---

## 1. Feedback-driven improvements

### 1.1 Clarify purpose (ambiguity: “what is this for?”)

**Problem:** Users weren’t sure if the kit was for building a website, a Python app, or “whatever you want to build.”

**Changes:**

| Where | What to do |
|-------|------------|
| **README.md** (root) | In the opening line or “What it does,” add one sentence: e.g. “Use it for **any** project—web apps, APIs, mobile, data tools, CLIs—not just websites.” |
| **site/docs/intro.md** | Same clarification near the top (after “A small AI Kit…”). Optionally add a short **“Any stack, any project”** callout: front-end, back-end, Python, Node, mobile, APIs, internal tools, etc. |
| **site/docs/getting-started/what-is-this.md** | Add a **“What kind of projects?”** subsection: “Use it for any kind of software project—websites, APIs, mobile apps, Python scripts, data pipelines, internal tools. The workflow (plan → spec → code → security) is the same; only the tech stack and optional design system change.” |

**Outcome:** New visitors immediately see “any project,” not “website kit.”

---

### 1.2 Correct “website-only” impression (design system)

**Problem:** Seeing “design system” first made users think the kit is only for website building.

**Changes:**

| Where | What to do |
|-------|------------|
| **Intro / Quick start** | Lead with **project type** (platform type) and **repo/project folder**, then say “If you have a **UI** or **design system**, fill that in too.” Frame design system as optional and UI-specific. |
| **site/docs/getting-started/what-to-fill-in.md** | Open with: “The only **required** setup is your project root and (for UI work) a design system. Back-end-only or CLI projects can leave design system as TODO.” |
| **kit/docs/ai/ai-config.md** | In the Design system section, add a line: “**Skip or leave TODO** if this project has no UI (e.g. API, CLI, data pipeline).” |

**Outcome:** Design system = optional, for UI projects; non-web users don’t feel excluded.

---

### 1.3 “Get your stuff together” (prerequisites step)

**Problem:** Users want a clear **prerequisites / prep** step before “Get the kit” so they know what to have ready.

**Changes:**

| Where | What to do |
|-------|------------|
| **New doc** | Add **site/docs/getting-started/prerequisites.md** (and link from kit if you mirror): **“Before you start — get your stuff together.”** Sections: |
| | • **Project folder** — New project (empty or starter) vs existing repo; kit must live at **project root**. |
| | • **Design system (if you have UI)** — Name, docs URL, import pattern; optional for non-UI projects. |
| | • **Other useful bits** — Project brief, stack, conventions (optional; can fill later). |
| **Steps flow** | In **what-is-this.md** and **intro.md**, renumber steps to: **Step 0 — Get your stuff together** (link to prerequisites) → then Step 1 Get the kit, Step 2 Fill config, etc. |
| **Sidebar** | Add `getting-started/prerequisites` as the **first** item under “Start here” (or “Get started”) so it’s the natural first read. |

**Outcome:** One clear “prep” step and doc; fewer people start install without the right context.

---

## 2. Left navigation: meaningful groups and titles

**Goal:** Group sidebar items in more meaningful ways and use titles to separate sections.

**Current structure:** One long list of categories: Intro, What’s new, Start here, Daily workflow, Context pack, Switches, Lenses, Security, Editor support, Customization, Troubleshooting, Reference.

**Proposed structure:** Keep intro and What’s new at the top; group the rest under a few **section titles** (parent categories) so the sidebar has clear “chunks.”

### Option A — Nested categories (recommended)

Use Docusaurus **nested categories**: parent categories whose `items` are the existing categories. Each parent gets a clear label so it acts as a section title.

Example `sidebars.ts` shape:

```ts
tutorialSidebar: [
  "intro",
  "whats-new",
  {
    type: "category",
    label: "Get started",
    collapsed: false,
    items: [
      { type: "category", label: "Start here", collapsed: false, items: ["getting-started/prerequisites", "getting-started/what-is-this", ...] },
      { type: "category", label: "Daily workflow", collapsed: false, items: ["daily-workflow/..."] },
      { type: "category", label: "Context pack", collapsed: true, items: ["context-pack/..."] }
    ]
  },
  {
    type: "category",
    label: "Configure & use",
    collapsed: true,
    items: [
      { type: "category", label: "Switches", ... },
      { type: "category", label: "Lenses", ... },
      { type: "category", label: "Customization", ... }
    ]
  },
  {
    type: "category",
    label: "Security & quality",
    collapsed: true,
    items: [
      { type: "category", label: "Security", ... }
    ]
  },
  {
    type: "category",
    label: "Editors & reference",
    collapsed: true,
    items: [
      { type: "category", label: "Editor support", ... },
      { type: "category", label: "Troubleshooting", ... },
      { type: "category", label: "Reference (Exact Text)", ... }
    ]
  }
]
```

**Section titles (labels):**

- **Get started** — Start here, Daily workflow, Context pack  
- **Configure & use** — Switches, Lenses, Customization  
- **Security & quality** — Security  
- **Editors & reference** — Editor support, Troubleshooting, Reference  

You can rename or merge (e.g. “Security & quality” could be “Guardrails” or “Security” only) to match your voice.

### Option B — Flatter sections with clearer labels

If you prefer **no nesting**, keep a single level of categories but give them more descriptive labels so they read as “sections”:

- **Start here** → keep or rename to **“Setup & first steps”**
- **Daily workflow** → keep
- **Context pack** → keep
- **Switches** → **“Context switches”** or **“Switches (platform, exposure, data)”**
- **Lenses** → keep or **“Lenses (PM, design, security, …)”**
- **Security** → keep or **“Security & compliance”**
- **Editor support** → **“Editors (Cursor, Copilot, Antigravity)”**
- **Customization** → keep
- **Troubleshooting** → keep
- **Reference (Exact Text)** → keep or **“Reference — exact text”**

Then order them in a logical flow (setup → workflow → config → security → editors → help/reference).

### Recommendation

- **Option A** if you want clear visual separation and “sections” (Get started vs Configure vs Security vs Reference).
- **Option B** if you want to avoid nested collapsing and keep a single-level sidebar with clearer names.

---

## 3. Implementation checklist

- [ ] **Purpose:** Add “any project / any stack” to README, intro, and what-is-this.
- [ ] **Design system:** Frame as optional (UI-only) in intro, what-to-fill-in, and ai-config.
- [ ] **Prerequisites:** Add `getting-started/prerequisites.md`; link from what-is-this and intro; add to sidebar as first item under Start here.
- [ ] **Steps:** Insert “Step 0 — Get your stuff together” and renumber existing steps in what-is-this and intro.
- [ ] **Sidebar:** Implement Option A (nested) or Option B (relabel); add `prerequisites` to “Start here” (or “Get started”).
- [ ] **Sync:** After editing kit docs, run `npm run sync` (and `npm run sync:starter` if kit is source) so reference and starter stay in sync.

---

## 4. Files to touch (summary)

| Area | Files |
|------|--------|
| Purpose & design system | `README.md`, `site/docs/intro.md`, `site/docs/getting-started/what-is-this.md`, `site/docs/getting-started/what-to-fill-in.md`, `kit/docs/ai/ai-config.md` |
| Prerequisites | **New:** `site/docs/getting-started/prerequisites.md`; update `what-is-this.md`, `intro.md` |
| Navigation | `site/sidebars.ts` |
| Kit source of truth | If “what to fill in” or “prerequisites” live in kit, add or update under `kit/docs/` and ensure sync pulls them into site. |

If you want, next step can be concrete copy for “any project” and “get your stuff together,” or a full `sidebars.ts` patch for Option A.
