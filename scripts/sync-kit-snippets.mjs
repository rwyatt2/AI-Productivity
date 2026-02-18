import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const KIT = path.join(ROOT, "kit");
const OUT = path.join(ROOT, "site", "docs", "reference");

const FILES = [
    { src: "docs/ai/ai-config.md", dest: "ai-config.md", title: "AI Config (Reference)" },
    { src: "docs/ai/START-HERE.md", dest: "start-here.md", title: "Start Here (Reference)" },
    { src: "docs/ai/project-brief.md", dest: "project-brief.md", title: "Project Brief (Reference)" },
    { src: "docs/ai/current-state.md", dest: "current-state.md", title: "Current State (Reference)" },
    { src: "docs/ai/partner-map.md", dest: "partner-map.md", title: "Partner Map (Reference)" },
    { src: "docs/ai/glossary.md", dest: "glossary.md", title: "Glossary (Reference)" },
    { src: "docs/ai/decisions.md", dest: "decisions.md", title: "Decisions (Reference)" },
    { src: "docs/ai/checklists/spec-dod.md", dest: "spec-dod.md", title: "Spec DoD (Reference)" },
    { src: "docs/ai/checklists/impl-dod.md", dest: "impl-dod.md", title: "Impl DoD (Reference)" },
    { src: "docs/ai/checklists/security-dod.md", dest: "security-dod.md", title: "Security DoD (Reference)" },
    { src: "docs/ai/checklists/threat-model-lite.md", dest: "threat-model-lite.md", title: "Threat Model Lite (Reference)" },
    { src: ".cursor/rules/00-operating-system.mdc", dest: "cursor-rules-operating-system.md", title: "Cursor Rules - Operating System (Reference)" },
    { src: ".cursor/rules/05-environment.mdc", dest: "cursor-rules-environment.md", title: "Cursor Rules - Environment (Reference)" },
    { src: ".cursor/rules/10-spec-package.mdc", dest: "cursor-rules-spec-package.md", title: "Cursor Rules - Spec Package (Reference)" },
    { src: ".cursor/rules/20-implementation-package.mdc", dest: "cursor-rules-implementation-package.md", title: "Cursor Rules - Implementation Package (Reference)" },
    { src: ".cursor/rules/30-context-discipline.mdc", dest: "cursor-rules-context-discipline.md", title: "Cursor Rules - Context Discipline (Reference)" },
    { src: ".cursor/rules/40-security.mdc", dest: "cursor-rules-security.md", title: "Cursor Rules - Security (Reference)" },
    { src: ".cursor/prompts/00-session-kickoff.md", dest: "session-kickoff.md", title: "Session Kickoff (Reference)" },
    { src: ".cursor/prompts/10-context-pack.md", dest: "context-pack-template.md", title: "Context Pack Template (Reference)" },
    { src: ".cursor/prompts/20-router.md", dest: "router.md", title: "Router (Reference)" },
    { src: ".cursor/prompts/90-handoff-summary.md", dest: "handoff-summary.md", title: "Handoff Summary (Reference)" },
    { src: ".github/pull_request_template.md", dest: "github-pr-template.md", title: "GitHub PR Template (Reference)" },
    { src: ".github/copilot-instructions.md", dest: "copilot-instructions.md", title: "GitHub Copilot Instructions (Reference)" }
];

// Contextual docs and steps for each reference page (keyed by dest filename).
// Sync appends "Exact text (from kit)" below this so the page stays in sync with kit/.
const CONTEXT = {
    "ai-config.md": `## What this is

\`docs/ai/ai-config.md\` is the kit’s **config file** you edit once. It holds your design system name, docs link, and optional project brief. The AI uses it to stay consistent with your UI and conventions.

## When to use it

- **After installing the kit:** Fill in the Design system section so the AI uses your design system (e.g. Tailwind, your component library) instead of guessing.
- **Optional:** Add project-brief, current-state, or partner-map so the AI has context about your product and repo.

## Steps

1. Open \`docs/ai/ai-config.md\` in your repo (at project root).
2. Replace the **Design system** placeholders: name, docs URL, and imports/package name.
3. Optionally fill **Project**: project-brief, current-state, partner-map.
4. Save. The rules and prompts in the kit reference this file.

## Exact text (from kit)
`,

    "context-pack-template.md": `## What this is

The **Context Pack** is a short message you paste into chat at the start of a session (or when you switch tasks). It tells the AI: platform type, exposure level, data sensitivity, and 3–7 relevant files or bullets. It keeps the AI focused and avoids wrong assumptions.

## When to use it

- At the **start of a new chat** (with Session Kickoff and Router).
- When you **switch to a new task or area** (paste an updated Context Pack).
- So the AI knows **one question at a time** and doesn’t guess platform/risk.

## Steps

1. Copy the template below (or from \`.cursor/prompts/10-context-pack.md\` in your repo).
2. Fill in: **Platform type** (data-platform | developer-platform), **Exposure level** (internal | external-authenticated | public), **Data sensitivity** (public | internal | confidential | restricted).
3. Add 3–7 relevant file paths or short bullet points for the current task.
4. Paste the filled Context Pack into the chat before or right after Session Kickoff and Router.

## Exact text (from kit)
`,

    "cursor-rules-operating-system.md": `## What this is

\`.cursor/rules/00-operating-system.mdc\` is a **Cursor rule** that tells the AI how to behave: cross-platform paths, one question at a time, and how to use **Switch: SPEC** / **Switch: IMPLEMENT**. Cursor loads it automatically when you open the repo.

## When to use it

- You **don’t edit this file** for normal use. It’s part of the kit you copied.
- If you need to tweak behavior (e.g. default OS or path style), edit the file in your repo; the docs show the canonical version.

## Steps

1. Ensure the kit is at your **project root** so Cursor sees \`.cursor/rules/\`.
2. Open the repo in Cursor; rules load automatically.
3. To see or copy the exact text (e.g. for another editor), use the block below.

## Exact text (from kit)
`,

    "cursor-rules-security.md": `## What this is

\`.cursor/rules/40-security.mdc\` is a **Cursor rule** that adds security constraints: what to do when handling secrets, credentials, or sensitive data. Cursor loads it with the rest of the rules.

## When to use it

- You **don’t edit this file** unless you want to add project-specific security rules.
- Use the Context Pack to set **data sensitivity** (e.g. restricted) so the AI follows these rules.

## Steps

1. Ensure the kit is at your **project root** so Cursor sees \`.cursor/rules/\`.
2. Set **Data sensitivity** in your Context Pack when the task touches secrets or restricted data.
3. To see or copy the exact text, use the block below.

## Exact text (from kit)
`,

    "github-pr-template.md": `## What this is

\`.github/pull_request_template.md\` is the **default description** for new pull requests. When someone opens a PR, GitHub pre-fills the body with this template (What, Why, Checklist).

## When to use it

- After copying the kit into your repo, the template is already in \`.github/\`. It reminds authors to describe the change, link to spec, and tick security/tests when relevant.

## Steps

1. Ensure \`.github/pull_request_template.md\` exists at your repo root (from the kit or starter).
2. Optionally customize the checklist (e.g. add “Design reviewed”) in your repo.
3. When opening a PR, fill in What, Why, and the checklist. Use the exact template below as reference.

## Exact text (from kit)
`,

    "copilot-instructions.md": `## What this is

\`.github/copilot-instructions.md\` gives **GitHub Copilot** high-level instructions so it follows the same one-question-at-a-time and spec-first behavior as the Cursor rules. GitHub uses this file when Copilot is enabled in the repo.

## When to use it

- Use if your team uses **GitHub Copilot** (in IDE or in GitHub). Copy the kit’s \`.github/copilot-instructions.md\` into your repo so Copilot and Cursor stay aligned.
- If you only use Cursor, this file is optional but harmless.

## Steps

1. Copy \`.github/copilot-instructions.md\` from the kit into your repo’s \`.github/\` folder.
2. Optionally tweak the instructions for your org (e.g. add project-specific rules).
3. The exact text is below for reference.

## Exact text (from kit)
`,

    "start-here.md": `## What this is

\`docs/ai/START-HERE.md\` is the **entry point** for the kit’s \`docs/ai/\` folder. It points you to ai-config, profiles, and checklists so the AI (and you) know how to behave and what “done” means.

## When to use it

- **After installing the kit:** Read it once to see where defaults, profiles, and checklists live.
- **Onboarding others:** Point them to \`docs/ai/START-HERE.md\` so they find ai-config, spec-dod, impl-dod, security-dod, and threat-model-lite.

## Steps

1. Open \`docs/ai/START-HERE.md\` in your repo (at project root).
2. Follow the links to ai-config.md, profiles/, and checklists/.
3. Use the exact text below if you need to restore or copy the file.

## Exact text (from kit)
`,

    "threat-model-lite.md": `## What this is

\`docs/ai/checklists/threat-model-lite.md\` is a **short threat-model template** for when security is triggered (auth, uploads, sensitive data, external exposure). It asks for: assets, entry points, threats, mitigations, and acceptance criteria.

## When to use it

- When the work touches **auth, uploads, exports, external APIs, or sensitive data** (see \`.cursor/rules/40-security.mdc\` triggers).
- Before marking a PR or release “done” if security-dod applies.

## Steps

1. When a security trigger applies, open \`docs/ai/checklists/threat-model-lite.md\` (or the sync’d reference below).
2. Fill each section with what’s real for the change; don’t invent.
3. Use the exact text below to copy or restore the template.

## Exact text (from kit)
`,

    "cursor-rules-spec-package.md": `## What this is

\`.cursor/rules/10-spec-package.mdc\` is a **Cursor rule** that defines the **Spec Package** output contract: every SPEC-mode response must include UX states, a11y, risks + open questions, and platform type + exposure + data sensitivity.

## When to use it

- You **don’t edit this file** for normal use. It’s part of the kit.
- Use it as reference when you want the AI’s spec output to follow the contract (e.g. when writing or reviewing specs).

## Steps

1. Ensure the kit is at your **project root** so Cursor sees \`.cursor/rules/\`.
2. In SPEC mode, the AI will follow this contract. Use the block below to see or copy the exact rule.

## Exact text (from kit)
`,

    "cursor-rules-implementation-package.md": `## What this is

\`.cursor/rules/20-implementation-package.mdc\` is a **Cursor rule** that defines the **Implementation Package** output contract: every IMPLEMENT-mode response must include files, plan, diffs, verification, tests/rationale, and security notes when triggers apply.

## When to use it

- You **don’t edit this file** for normal use. It’s part of the kit.
- Use it as reference when you want the AI’s implementation output to follow the contract (e.g. when reviewing PRs or handoffs).

## Steps

1. Ensure the kit is at your **project root** so Cursor sees \`.cursor/rules/\`.
2. In IMPLEMENT mode, the AI will follow this contract. Use the block below to see or copy the exact rule.

## Exact text (from kit)
`,

    "cursor-rules-context-discipline.md": `## What this is

\`.cursor/rules/30-context-discipline.mdc\` is a **Cursor rule** that encourages small context packs and file citations, forbids inventing paths/APIs/events/deps, and defines allowed values for platform type, exposure level, and data sensitivity.

## When to use it

- You **don’t edit this file** for normal use. It’s part of the kit.
- Use it as reference when the AI invents paths or uses invalid switch values; the rule tells it to ask one question and stop.

## Steps

1. Ensure the kit is at your **project root** so Cursor sees \`.cursor/rules/\`.
2. Use the block below to see or copy the exact rule.

## Exact text (from kit)
`,

    "session-kickoff.md": `## What this is

\`.cursor/prompts/00-session-kickoff.md\` is the **Session Kickoff** prompt you paste at the start of a new chat. It sets SPEC-first, 85% gate, one-question protocol, and switch commands so the AI follows the kit.

## When to use it

- At the **start of a new chat** (before or with the Context Pack and Router).
- When the AI is not following the protocol (paste it again to re-anchor behavior).

## Steps

1. Open \`.cursor/prompts/00-session-kickoff.md\` in your repo (or use the exact text below).
2. Paste it into the chat, then paste your Context Pack (from \`10-context-pack.md\`), then the Router (\`20-router.md\`) if needed.

## Exact text (from kit)
`,

    "router.md": `## What this is

\`.cursor/prompts/20-router.md\` is the **Router** prompt. It tells the AI how to choose between SPEC and IMPLEMENT behavior using the Context Pack (platform type, exposure, data sensitivity) and to ask one question if platform type is missing.

## When to use it

- When you need the AI to **switch or stick to SPEC vs IMPLEMENT** based on the Context Pack.
- When the AI is mixing planning and code in one response; paste the Router to enforce the split.

## Steps

1. Ensure your Context Pack is in the chat (platform type, exposure, data sensitivity).
2. Paste \`.cursor/prompts/20-router.md\` (or the exact text below) when you want SPEC/IMPLEMENT routing applied.

## Exact text (from kit)
`,

    "handoff-summary.md": `## What this is

\`.cursor/prompts/90-handoff-summary.md\` is the **Handoff Summary** template: max 8 bullets for switching context (e.g. SPEC → IMPLEMENT) or handing off to another person or session.

## When to use it

- When you **switch mode** (e.g. say "Switch: IMPLEMENT") so the next response starts with a short handoff.
- When **handing off** to a teammate or a new chat; paste the template and fill the bullets that apply.

## Steps

1. When switching or handing off, the AI should output a Handoff Summary (max 8 bullets) then continue.
2. Use \`.cursor/prompts/90-handoff-summary.md\` or the exact text below as the template.

## Exact text (from kit)
`,

    "project-brief.md": `## What this is

\`docs/ai/project-brief.md\` is the **project brief** template: one-liner, who uses it, jobs-to-be-done, success, non-goals, constraints, and links. The AI uses it to stay aligned with your product.

## When to use it

- After installing the kit: fill it so the AI knows what the platform is and what success means.
- Keep it short; link to longer docs if needed.

## Exact text (from kit)
`,

    "current-state.md": `## What this is

\`docs/ai/current-state.md\` holds **repo conventions**: routing, data fetching, state, forms, styling, testing, telemetry, and common pitfalls. Each section has "what we do / where it lives / what to avoid" so the AI does not invent paths.

## When to use it

- After installing the kit: fill each section (or mark TODO) so the AI follows your stack and file layout.
- Prevents hallucinations about routes, APIs, and file paths.

## Exact text (from kit)
`,

    "partner-map.md": `## What this is

\`docs/ai/partner-map.md\` is the **partner map** template: who owns what, when to involve them (triggers), constraints they care about, and escalation path.

## When to use it

- Fill when multiple teams or owners touch the repo; helps the AI know when to call out review or constraints.
- Keep the table short; add rows as needed.

## Exact text (from kit)
`,

    "glossary.md": `## What this is

\`docs/ai/glossary.md\` is the **glossary** template: terms and definitions the AI (and humans) should use consistently. Cap at ~10–20 terms; each entry has definition, common confusion/pitfall, and optional example.

## When to use it

- Add terms that cause real confusion or misuse so the AI does not invent or mix terminology.
- Keep the list scannable.

## Exact text (from kit)
`,

    "decisions.md": `## What this is

\`docs/ai/decisions.md\` is the **decision log** template: date, decision, why, tradeoffs, follow-ups. Append new entries at the top.

## When to use it

- Log notable product/tech decisions so the AI (and team) can reference rationale and constraints.
- Copy the template block when adding a new decision.

## Exact text (from kit)
`,

    "spec-dod.md": `## What this is

\`docs/ai/checklists/spec-dod.md\` is the **Spec definition of done**: a checklist (switches, scope, acceptance criteria, UX states, a11y, risks, security) so a spec is ready for implementation.

## When to use it

- Before implementation: ensure every box is checked (or explicitly deferred).
- Run it when the AI produces a spec; use the exact text below to copy or restore.

## Exact text (from kit)
`,

    "impl-dod.md": `## What this is

\`docs/ai/checklists/impl-dod.md\` is the **Implementation definition of done**: switches, files, plan, diffs, verification, tests/rationale, security when triggered.

## When to use it

- Before marking implementation "done": ensure every box is checked.
- Use the exact text below to copy or restore the checklist.

## Exact text (from kit)
`,

    "security-dod.md": `## What this is

\`docs/ai/checklists/security-dod.md\` is the **Security definition of done**: switches, no secrets in code/logs, least privilege, threat-model-lite, security acceptance criteria.

## When to use it

- When the work touches auth, uploads, sensitive data, or external systems (see \`.cursor/rules/40-security.mdc\` triggers).
- When in doubt, run it. Use the exact text below to copy or restore.

## Exact text (from kit)
`,

    "cursor-rules-environment.md": `## What this is

\`.cursor/rules/05-environment.mdc\` is a **Cursor rule** with cross-platform path and OS guidance (e.g. path separators, OS notes). Cursor loads it with the rest of the rules.

## When to use it

- You **don't edit this file** for normal use. It's part of the kit.
- Use the block below to see or copy the exact rule.

## Exact text (from kit)
`
};

async function ensureDir(dir) {
    await fs.mkdir(dir, { recursive: true });
}

function wrapAsReferencePage(title, relPath, content, contextMarkdown) {
    const intro = contextMarkdown ? contextMarkdown + "\n\n" : "";
    return `---
title: ${title}
---

${intro}Source: \`${relPath}\`

\`\`\`
${content.replace(/\n$/, "")}
\`\`\`
`;
}

async function main() {
    await ensureDir(OUT);

    for (const f of FILES) {
        const abs = path.join(KIT, f.src);
        let content;
        try {
            content = await fs.readFile(abs, "utf8");
        } catch (err) {
            if (err.code === "ENOENT") {
                console.warn(`Skip (missing): ${f.src}`);
                continue;
            }
            throw err;
        }

        const destAbs = path.join(OUT, f.dest);
        const page = wrapAsReferencePage(f.title, f.src, content, CONTEXT[f.dest] ?? null);
        await fs.writeFile(destAbs, page, "utf8");
        console.log(`Wrote ${path.relative(ROOT, destAbs)}`);
    }
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
