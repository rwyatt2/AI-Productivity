import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
    tutorialSidebar: [
        "intro",
        {
            type: "category",
            label: "Start here",
            collapsed: false,
            items: [
                "getting-started/what-is-this",
                "getting-started/install-by-copying",
                "getting-started/global-rules",
                "getting-started/what-to-fill-in",
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
                "daily-workflow/switching"
            ]
        },

        {
            type: "category",
            label: "Context pack",
            collapsed: true,
            items: [
                "context-pack/template"
            ]
        },

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
            label: "Security",
            collapsed: true,
            items: [
                "security/triggers",
                "security/threat-model-lite",
                "security/definition-of-done"
            ]
        },

        {
            type: "category",
            label: "Editor support",
            collapsed: true,
            items: [
                "editor-support/cursor",
                "editor-support/copilot"
            ]
        },

        {
            type: "category",
            label: "Customization",
            collapsed: true,
            items: [
                "customization/design-system-placeholder"
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
                "reference/ai-config",
                "reference/context-pack-template",
                "reference/copilot-instructions",
                "reference/cursor-rules-operating-system",
                "reference/cursor-rules-security",
                "reference/github-pr-template"
            ]
        }
    ]
};

export default sidebars;
