---
title: MCP (Model Context Protocol)
---

## What MCP is

**MCP (Model Context Protocol)** is an open standard that lets Cursor’s AI use external tools and data sources (e.g. your repo, GitHub, or web pages) through small “MCP servers” you configure. In Cursor you add these servers in a config file (`.cursor/mcp.json`); Cursor starts them and gives the AI access to their tools (e.g. read files, call APIs, fetch URLs). That way the AI can work with live data (issues, docs, your filesystem) instead of only what’s in the chat and open files.

## Why it matters for this kit

The kit’s rules tell the AI not to invent file paths or APIs. MCP gives the AI **real** access: it can read actual paths (filesystem server), current issues/PRs (GitHub server), or live API docs (fetch server). That supports the same “no guessing” goal: the AI uses real context instead of hallucinating. Use MCP when a task benefits from live or external data; keep using `docs/ai/` for stable, versioned project truth.

## Setup walkthrough

The kit ships an empty MCP config at `.cursor/mcp.json` so no servers run until you opt in. To enable a server:

1. Open `.cursor/mcp.json` in your project root (create it if you didn’t copy from the kit).
2. Add one or more entries under `mcpServers`. Each key is a name you choose; the value has `command`, `args`, and optionally `env`.
3. Restart Cursor (or reload the window) so it picks up the config.

**Template (copy only the blocks you need):**

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "."]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "<your-token>"
      }
    },
    "fetch": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-fetch"]
    }
  }
}
```

- **filesystem** — Lets the AI read files under the path you pass (e.g. `"."` for project root). Use a specific subpath if you want to limit access. No env vars required.
- **github** — Lets the AI read repo metadata, issues, and PRs. Requires `GITHUB_PERSONAL_ACCESS_TOKEN` in `env`. Do not commit the token; use a local env or `.gitignore` the file.
- **fetch** — Lets the AI fetch URLs (e.g. API docs, web pages). No env vars required; the AI can request any URL you allow.

Use `"."` for filesystem only if you’re okay with the AI reading the whole project; avoid pointing it at folders that contain secrets.

## MCP vs docs/ai/ source-of-truth

Use **docs/ai/** (ai-config, project-brief, current-state, partner-map, glossary, decisions, checklists) as the **stable, project-specific truth** you control: conventions, design system, who owns what, and “what we do / where it lives / what to avoid.” The AI should treat these as authoritative. Use **MCP** when the AI needs **live or external context** that doesn’t belong in markdown (e.g. current GitHub issues/PRs, up-to-date API docs from a URL, or reading a file the AI hasn’t been given in chat). So: **docs/ai = your curated, versioned truth; MCP = live tools and external data.** Prefer docs/ai for anything that should be consistent and reviewable; use MCP when the task explicitly benefits from “right now” data from GitHub, the web, or the filesystem.

## Privacy and what each server can access

- **Filesystem** — Can read any file under the path you configured. Those file contents are sent to the model. Don’t point it at directories that contain secrets or credentials.
- **GitHub** — Uses your token to call GitHub’s API (repo, issues, PRs). GitHub’s privacy and API policies apply. Don’t put the token in a committed file; use env vars or a local-only config.
- **Fetch** — Can request arbitrary URLs. The URL and response body are available to the model. Be aware which URLs the AI might fetch (e.g. internal docs vs public APIs).

**Warning:** If `.cursor/mcp.json` contains tokens or secrets, add it to `.gitignore` or use environment variables so it’s never committed.

## Common mistakes

* **Leaving servers on that you don’t need** — Each server adds surface area and data flow. Enable only the ones you use (e.g. filesystem for real paths; GitHub only when you work with issues/PRs).
* **Exposing filesystem paths with sensitive data** — Using `"."` or a broad path can let the AI read `.env`, keys, or other secrets. Prefer a subpath (e.g. `src/`) or ensure sensitive files are under `.cursorignore`.
* **Committing mcp.json with a token** — If you add GitHub (or any server) with a token in the file, do not commit it. Use `env` with a variable name and set the value in your environment, or keep `mcp.json` out of the repo.
