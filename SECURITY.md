# Security

## Supported Versions

| Version | Supported          |
|---------|--------------------|
| 1.3.x   | Yes (active)       |
| &lt; 1.3 | No (unsupported)   |

Only the current major.minor line receives security fixes. Upgrade to the [latest release](https://github.com/rwyatt2/AI-Productivity/releases) to stay supported.

## Reporting a Vulnerability

Please report security issues via **GitHub’s private vulnerability reporting**:

1. Open this repo on GitHub → **Settings** → **Security** → **Code security and analysis** → **Private vulnerability reporting** (enable if needed).
2. Use **Report a vulnerability** to submit a private advisory.

We aim to **acknowledge your report within 5 business days** and will work with you on next steps (e.g. fix, disclosure timing).

## What counts as a security issue for this kit

We consider the following in scope for this repository:

- **A rule that suppresses or bypasses security checks** — e.g. a Cursor rule that disables or weakens the security stop gate, hygiene rules, or threat-model requirements.
- **A threat-model-lite template with insecure defaults** — e.g. `kit/docs/ai/checklists/threat-model-lite.md` or security DoD that encourages skipping controls or omits critical steps.
- **A prompt that leaks sensitive context** — e.g. a kit prompt that instructs the AI to include secrets, PII, or credentials in responses or logs.
- **A sync script that writes to unintended paths** — e.g. `scripts/sync-starter-from-kit.mjs` or `scripts/sync-kit-snippets.mjs` writing outside the intended `starter/` or `site/docs/reference/` trees, or missing path checks that could allow path traversal.

## Out of scope

The following are **not** considered security issues for this repo; report them to the appropriate project:

- **Vulnerabilities in Cursor itself** — Report to [Anysphere](https://cursor.com) / Cursor security.
- **Vulnerabilities in the user’s project code** — The kit does not run user code; secure your own application and dependencies.
- **Theoretical prompt-injection with no realistic exploit path** — We consider only issues that could lead to concrete harm (e.g. bypassing the kit’s security rules in a way that affects users who follow the kit).
