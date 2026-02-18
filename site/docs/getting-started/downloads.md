---
title: Downloads
---

# Downloads

You can get the AI Kit in three ways. Pick one.

**Preview first:** To see the folder structure and exact text of each file before downloading, see [Kit file preview](../reference/kit-preview).

**No release yet?** This repo may not have any releases published. If you open [Releases](https://github.com/rwyatt2/AI-Productivity/releases) and see no releases (or no zip assets), use the repo directly: **clone the repo** and copy the **`kit/`** folder into your project, or copy the **`starter/`** folder to start a new project. Option 3 below also works without releases.

---

## 1) Download kit-only (just the kit files)

**What you get:** A zip with only the kit: `.cursor/`, `docs/ai/`, `.github/`, and `cursor-ai-kit.config.json`. No sample code. You copy these into your own repo.

**Download:** [Releases page](https://github.com/rwyatt2/AI-Productivity/releases) → open the **latest release** → under **Assets**, click **ai-kit-only.zip**. (Direct link for a specific version: `https://github.com/rwyatt2/AI-Productivity/releases/download/vX.Y.Z/ai-kit-only.zip` — replace `vX.Y.Z` with your release tag.)

**Steps:**

1. Go to the repo’s **Releases** page: [Releases](https://github.com/rwyatt2/AI-Productivity/releases).
2. Open the latest release.
3. Under **Assets**, click **ai-kit-only.zip** to download.
4. Unzip the file on your computer.
5. Copy everything inside the unzipped folder into the **root** of your project (the same folder that has your code). If your project already has `.cursor/` or `docs/`, merge or replace as needed.
6. Fill in the placeholders (see [What to fill in](what-to-fill-in)).

**If you don’t see ai-kit-only.zip:** There may be no release yet. Clone the repo or download it, then copy everything inside the **`kit/`** folder into your project root. Or use “Download individual pieces” below.

---

## 2) Download starter project (new project, kit already installed)

**What you get:** A zip of a ready-to-use starter. The kit is already in place. You unzip it and use that folder as your **project root**.

**Important:** The **unzipped folder is your project root**. The kit files (`.cursor/`, `.github/`, `docs/`, `cursor-ai-kit.config.json`, `README.md`) must live at the **root** of your project—not inside a subfolder like `ai-kit-starter`. Open the unzipped folder in Cursor (or rename it to your project name, then open it). Do **not** leave the kit nested inside another folder.

**Download:** [Releases page](https://github.com/rwyatt2/AI-Productivity/releases) → open the **latest release** → under **Assets**, click **ai-kit-starter.zip**. (Direct link for a specific version: `https://github.com/rwyatt2/AI-Productivity/releases/download/vX.Y.Z/ai-kit-starter.zip` — replace `vX.Y.Z` with your release tag.)

**Steps:**

1. Go to [Releases](https://github.com/rwyatt2/AI-Productivity/releases).
2. Open the latest release.
3. Under **Assets**, click **ai-kit-starter.zip** to download.
4. Unzip the file. You get a folder whose **contents** are `.cursor/`, `.github/`, `docs/`, `cursor-ai-kit.config.json`, and `README.md`.
5. **If the zip created a wrapper folder** (e.g. named `ai-kit-starter`): move everything *inside* that folder to your real project root, then delete the empty wrapper folder. The kit files must sit at the root of your project, not inside `ai-kit-starter`.
6. Open your **project root** in Cursor (the folder that directly contains `.cursor/`, `docs/`, etc.). Paste Session Kickoff, Context Pack, and Router and start working.

**If you don’t see ai-kit-starter.zip:** There may be no release yet. Clone the repo and copy the **contents** of the **`starter/`** folder into your project root (or use the `starter/` folder as your project root). Or use option 1 for an existing repo.

---

## 3) Download individual pieces

**What you get:** You don’t download a zip. You open links to see the exact text of each file and, if you want, open or copy them from GitHub.

**Steps:**

1. **Read the exact text here on the docs site** (Reference pages):
   * [AI Config (Reference)](../reference/ai-config)
   * [Context Pack Template (Reference)](../reference/context-pack-template)
   * [GitHub Copilot Instructions (Reference)](../reference/copilot-instructions)
   * [Cursor Rules – Operating System (Reference)](../reference/cursor-rules-operating-system)
   * [Cursor Rules – Security (Reference)](../reference/cursor-rules-security)
   * [GitHub PR Template (Reference)](../reference/github-pr-template)

2. **Open or copy the same files on GitHub** (so you can download or copy-paste):
   * [kit/docs/ai/ai-config.md](https://github.com/rwyatt2/AI-Productivity/blob/main/kit/docs/ai/ai-config.md)
   * [kit/.cursor/prompts/10-context-pack.md](https://github.com/rwyatt2/AI-Productivity/blob/main/kit/.cursor/prompts/10-context-pack.md)
   * [.github/copilot-instructions.md](https://github.com/rwyatt2/AI-Productivity/blob/main/kit/.github/copilot-instructions.md)
   * [kit/.cursor/rules/00-operating-system.mdc](https://github.com/rwyatt2/AI-Productivity/blob/main/kit/.cursor/rules/00-operating-system.mdc)
   * [kit/.cursor/rules/40-security.mdc](https://github.com/rwyatt2/AI-Productivity/blob/main/kit/.cursor/rules/40-security.mdc)
   * [kit/.github/pull_request_template.md](https://github.com/rwyatt2/AI-Productivity/blob/main/kit/.github/pull_request_template.md)

   On each GitHub page you can click **Raw** to see plain text, or copy the file path and create the same file in your repo.

3. Create the same folder structure in your project (e.g. `.cursor/rules/`, `docs/ai/`, `.github/`) and put each file in the right place.

---

## Add to an existing project

If you already have a repo and want to add the kit:

1. **Get the kit:** Download **ai-kit-only.zip** from [Releases](https://github.com/rwyatt2/AI-Productivity/releases) (or clone the repo and use the contents of the **`starter/`** folder—same files).
2. **Copy into your repo root:** Copy `.cursor/`, `docs/` (or at least `docs/ai/`), `.github/`, and `cursor-ai-kit.config.json` into the **root** of your existing repo (the same folder that contains your app or code).
3. **Merge if needed:** If you already have `.cursor/` or `docs/`, merge or replace. The kit files should sit alongside your code at the root, not in a subfolder.
4. **Fill in placeholders:** See [What to fill in](what-to-fill-in).

**Avoid these mistakes:**

* **Don’t leave the kit inside a subfolder.** Cursor and the prompts expect `.cursor/`, `docs/ai/`, etc. at the **project root**. If you unzipped into a folder named `ai-kit-starter`, move everything *out* of that folder into your repo root and delete the empty folder.
* **Don’t nest the kit under a folder named `ai-kit-starter` (or similar).** The kit must be at the root so rules and prompts load correctly.

---

## Where to click on GitHub to download zips

1. Open the repo: [rwyatt2/AI-Productivity](https://github.com/rwyatt2/AI-Productivity).
2. Click **Releases** (on the right side, or under the repo name).
3. Click the **latest release** (top of the list).
4. Scroll to **Assets**. You’ll see the zip files (e.g. **ai-kit-only.zip**, **ai-kit-starter.zip**). Click a name to download it.

---

## What are GitHub Releases?

Releases are packaged versions of the project. Maintainers create a release when they want to offer a fixed set of files (like the kit-only zip or the starter zip) for download. When a release exists, the zip files appear under **Assets** on that release page. **Right now there may be no releases** — you can still use the kit by cloning the repo and copying the **`kit/`** or **`starter/`** folder, or by using the individual file links in option 3.
