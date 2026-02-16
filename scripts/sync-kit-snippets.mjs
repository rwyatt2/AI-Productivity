import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const KIT = path.join(ROOT, "kit");
const OUT = path.join(ROOT, "site", "docs", "reference");

const FILES = [
    {
        src: "docs/ai/ai-config.md",
        dest: "ai-config.md"
    },
    {
        src: ".cursor/rules/00-operating-system.mdc",
        dest: "cursor-rules-operating-system.mdx"
    },
    {
        src: ".cursor/rules/40-security.mdc",
        dest: "cursor-rules-security.mdx"
    },
    {
        src: ".cursor/prompts/10-context-pack.md",
        dest: "context-pack-template.mdx"
    },
    {
        src: ".github/pull_request_template.md",
        dest: "github-pr-template.mdx"
    },
    {
        src: ".github/copilot-instructions.md",
        dest: "copilot-instructions.mdx"
    }
];

async function ensureDir(dir) {
    await fs.mkdir(dir, { recursive: true });
}

function wrapAsMdx(title, relPath, content) {
    return `---
title: ${title}
---

Source: \`${relPath}\`

\`\`\`
${content.replace(/\n$/, "")}
\`\`\`
`;
}

function titleFromPath(p) {
    return p
        .replaceAll("-", " ")
        .replaceAll("_", " ")
        .replace(/\.(md|mdx|mdc)$/i, "")
        .replace(/\b\w/g, (c) => c.toUpperCase());
}

async function main() {
    await ensureDir(OUT);

    for (const f of FILES) {
        const rel = f.src;
        const abs = path.join(KIT, rel);
        const content = await fs.readFile(abs, "utf8");
        const destAbs = path.join(OUT, f.dest);

        const mdx = wrapAsMdx(titleFromPath(f.dest), rel, content);
        await fs.writeFile(destAbs, mdx, "utf8");
        console.log(`Wrote ${path.relative(ROOT, destAbs)}`);
    }
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
