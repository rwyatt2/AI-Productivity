---
title: Downloads
---

# Downloads

You can get the AI Kit in three ways. Pick one.

---

## 1) Download kit-only (just the kit files)

**What you get:** A zip with only the kit: `.cursor/`, `docs/ai/`, `.github/`, and `cursor-ai-kit.config.json`. No sample code. You copy these into your own repo.

**Download:** [Releases page](https://github.com/rwyatt2/AI-Productivity/releases) → open the **latest release** → under **Assets**, click **ai-kit-only.zip**. (Direct link for a specific version: `https://github.com/rwyatt2/AI-Productivity/releases/download/v1.0.0/ai-kit-only.zip` — replace `v1.0.0` with the release tag.)

**Steps:**

1. Go to the repo’s **Releases** page: [Releases](https://github.com/rwyatt2/AI-Productivity/releases).
2. Open the latest release.
3. Under **Assets**, click **ai-kit-only.zip** to download.
4. Unzip the file on your computer.
5. Copy everything inside the unzipped folder into the **root** of your project (the same folder that has your code). If your project already has `.cursor/` or `docs/`, merge or replace as needed.
6. Fill in the placeholders (see [What to fill in](what-to-fill-in)).

**If you don’t see ai-kit-only.zip:** A release might not be published yet. You can instead copy the `kit/` folder from the repo (see “Download individual pieces” below).

---

## 2) Download starter project (kit already installed)

**What you get:** A zip of a ready-to-use starter repo. The kit is already in place. You unzip, open the folder in Cursor, and start.

**Download:** [Releases page](https://github.com/rwyatt2/AI-Productivity/releases) → open the **latest release** → under **Assets**, click **ai-kit-starter.zip**. (Direct link for a specific version: `https://github.com/rwyatt2/AI-Productivity/releases/download/v1.0.0/ai-kit-starter.zip` — replace `v1.0.0` with the release tag.)

**Steps:**

1. Go to [Releases](https://github.com/rwyatt2/AI-Productivity/releases).
2. Open the latest release.
3. Under **Assets**, click **ai-kit-starter.zip** to download.
4. Unzip the file. You get a folder that looks like a small project (e.g. with a `kit/` or already-unpacked `.cursor/`, `docs/ai/`, `.github/`).
5. Open that folder in Cursor. Paste Session Kickoff, Context Pack, and Router and start working.

**If you don’t see ai-kit-starter.zip:** The starter might not be published yet. Use “Download kit-only” or “Download individual pieces” instead.

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

## Where to click on GitHub to download zips

1. Open the repo: [rwyatt2/AI-Productivity](https://github.com/rwyatt2/AI-Productivity).
2. Click **Releases** (on the right side, or under the repo name).
3. Click the **latest release** (top of the list).
4. Scroll to **Assets**. You’ll see the zip files (e.g. **ai-kit-only.zip**, **ai-kit-starter.zip**). Click a name to download it.

---

## What are GitHub Releases?

Releases are packaged versions of the project. Maintainers create a release when they want to offer a fixed set of files (like the kit-only zip or the starter zip) for download. When a release exists, the zip files appear under **Assets** on that release page. If you don’t see any assets yet, no release has been published; you can still use the repo by copying the `kit/` folder or individual files from the main branch.
