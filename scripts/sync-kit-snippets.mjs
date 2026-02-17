import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const KIT = path.join(ROOT, "kit");
const OUT = path.join(ROOT, "site", "docs", "reference");

const FILES = [
    { src: "docs/ai/ai-config.md", dest: "ai-config.md", title: "AI Config (Reference)" },
    { src: ".cursor/rules/00-operating-system.mdc", dest: "cursor-rules-operating-system.md", title: "Cursor Rules - Operating System (Reference)" },
    { src: ".cursor/rules/40-security.mdc", dest: "cursor-rules-security.md", title: "Cursor Rules - Security (Reference)" },
    { src: ".cursor/prompts/10-context-pack.md", dest: "context-pack-template.md", title: "Context Pack Template (Reference)" },
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
