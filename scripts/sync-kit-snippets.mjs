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

async function ensureDir(dir) {
    await fs.mkdir(dir, { recursive: true });
}

function wrapAsReferencePage(title, relPath, content) {
    return `---
title: ${title}
---

Source: \`${relPath}\`

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
        const page = wrapAsReferencePage(f.title, f.src, content);
        await fs.writeFile(destAbs, page, "utf8");
        console.log(`Wrote ${path.relative(ROOT, destAbs)}`);
    }
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
