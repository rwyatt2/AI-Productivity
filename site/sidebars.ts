import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
    tutorialSidebar: [
        "intro",
        "whats-new",
        {
            type: "category",
            label: "Get started",
            collapsed: false,
            items: [
                {
                    type: "category",
                    label: "Start here",
                    collapsed: false,
                    items: [
                        "getting-started/prerequisites",
                        "getting-started/what-is-this",
                        "getting-started/install-by-copying",
                        "getting-started/cursorignore",
                        "getting-started/mcp",
                        "getting-started/global-rules",
                        "getting-started/what-to-fill-in",
                        "getting-started/source-of-truth",
                        "getting-started/downloads"
                    ]
                },
                {
                    type: "category",
                    label: "Daily workflow",
                    collapsed: false,
                    items: [
                        "daily-workflow/spec-first",
                        "daily-workflow/implement",
                        "daily-workflow/switching",
                        "daily-workflow/cursor-modes",
                        "daily-workflow/context-windows",
                        "daily-workflow/context-references",
                        "daily-workflow/model-switching"
                    ]
                },
                {
                    type: "category",
                    label: "Context pack",
                    collapsed: true,
                    items: [
                        "context-pack/template",
                        "context-pack/agents"
                    ]
                }
            ]
        },
        {
            type: "category",
            label: "Configure & use",
            collapsed: true,
            items: [
                {
                    type: "category",
                    label: "Switches",
                    collapsed: true,
                    items: [
                        "switches/platform-type",
                        "switches/exposure-level",
                        "switches/data-sensitivity"
                    ]
                },
                {
                    type: "category",
                    label: "Lenses",
                    collapsed: true,
                    items: [
                        "lenses/overview",
                        "lenses/discovery",
                        "lenses/pm",
                        "lenses/design",
                        "lenses/analytics",
                        "lenses/security",
                        "lenses/fe",
                        "lenses/qa",
                        "lenses/validation"
                    ]
                },
                {
                    type: "category",
                    label: "Customization",
                    collapsed: true,
                    items: [
                        "customization/design-system-placeholder"
                    ]
                }
            ]
        },
        {
            type: "category",
            label: "Security & quality",
            collapsed: true,
            items: [
                {
                    type: "category",
                    label: "Security",
                    collapsed: true,
                    items: [
                        "security/triggers",
                        "security/threat-model-lite",
                        "security/definition-of-done"
                    ]
                }
            ]
        },
        {
            type: "category",
            label: "Editors & reference",
            collapsed: true,
            items: [
                {
                    type: "category",
                    label: "Editor support",
                    collapsed: true,
                    items: [
                        "editor-support/cursor",
                        "editor-support/copilot",
                        "editor-support/antigravity"
                    ]
                },
                {
                    type: "category",
                    label: "Troubleshooting",
                    collapsed: true,
                    items: [
                        "troubleshooting/common-failures"
                    ]
                },
                {
                    type: "category",
                    label: "Reference (Exact Text)",
                    collapsed: true,
                    items: [
                        "reference/kit-preview",
                        "reference/start-here",
                        "reference/ai-config",
                        "reference/session-kickoff",
                        "reference/context-pack-template",
                        "reference/router",
                        "reference/handoff-summary",
                        "reference/cursor-rules-operating-system",
                        "reference/cursor-rules-spec-package",
                        "reference/cursor-rules-implementation-package",
                        "reference/cursor-rules-testing",
                        "reference/cursor-rules-context-discipline",
                        "reference/cursor-rules-security",
                        "reference/threat-model-lite",
                        "reference/github-pr-template",
                        "reference/copilot-instructions",
                        "reference/antigravity-rules-operating-system",
                        "reference/antigravity-rules-dispatcher-advisories",
                        "reference/antigravity-rules-environment",
                        "reference/antigravity-rules-spec-package",
                        "reference/antigravity-rules-implementation-package",
                        "reference/antigravity-rules-testing",
                        "reference/antigravity-rules-context-discipline",
                        "reference/antigravity-rules-security",
                        "reference/antigravity-rules-security-stop-gate"
                    ]
                }
            ]
        }
    ]
};

export default sidebars;
