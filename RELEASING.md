# How to create a release

This page explains how to publish a release so people can download the **kit-only zip** and the **starter zip** from GitHub.

---

## What is a release?

A release is a saved version of the project. When you create a release, you can attach zip files (assets). People then go to **Releases** on GitHub and download those zips. No need to clone the whole repo.

---

## What’s already in this repo

- **`kit/`** and **`starter/`** — source for the two zips (no content is missing).
- **`.github/workflows/release-assets.yml`** — when you push a version tag, it builds the zips and attaches them to a GitHub Release.
- **Docs** — the [Downloads](site/docs/getting-started/downloads.md) page points people to the Releases page and explains what to do if no release exists yet.

So the repo is ready. What’s missing is **doing the release once** (see below).

---

## Option A: Automatic release (recommended)

1. Decide the version, e.g. `v1.0.0`.
2. Create and push the tag from your machine:
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```
3. On GitHub, open **Actions** and confirm the “Release assets” workflow ran successfully.
4. Open **Releases** — you should see the new release with **ai-kit-only.zip** and **ai-kit-starter.zip** under Assets.

The workflow will: run sync, build the site, zip `kit/` and `starter/`, create the release for that tag, and upload both zips.

---

## Option B: Manual release

If you prefer not to use the workflow, follow these steps.

### Step 1: Decide the version

Pick a version tag, e.g. `v1.0.0`. You will use it as the release tag.

### Step 2: Create the two zips on your computer

**Kit-only zip**

1. Open the repo on your computer.
2. Go into the `kit/` folder. It should contain: `.cursor/`, `docs/ai/`, `.github/`, and `cursor-ai-kit.config.json`.
3. Select everything *inside* `kit/` (the folders and the config file). Zip them into one file.
4. Name the file: **ai-kit-only.zip**.  
   So when you unzip it, you get a folder with `.cursor`, `docs`, `.github`, and `cursor-ai-kit.config.json` at the top.

**Starter zip**

1. In the repo, go into the `starter/` folder.
2. Select everything *inside* `starter/` (same kind of layout: `.cursor/`, `docs/ai/`, `.github/`, `cursor-ai-kit.config.json`, and `README.md`).
3. Zip them into one file.
4. Name the file: **ai-kit-starter.zip**.  
   So when you unzip it, someone gets a ready-to-use project root.

### Step 3: Create the release on GitHub

1. Open the repo on GitHub: **https://github.com/rwyatt2/AI-Productivity**
2. Click **Releases** (right side).
3. Click **Draft a new release** (or **Create a new release**).
4. Under **Choose a tag**, type a new tag (e.g. `v1.0.0`) and choose **Create new tag**. Tag the current `main` (or the commit you want).
5. Set **Release title** (e.g. `v1.0.0` or `Release 1.0.0`).
6. In **Describe this release**, add a short note (e.g. "Kit and starter bundle for this version.").
7. Under **Assets**, click **Attach binaries by dropping them here or selecting them**. Upload **ai-kit-only.zip** and **ai-kit-starter.zip**.
8. Click **Publish release**.

Done. The two zips now appear under **Assets** for that release. The [Downloads](site/docs/getting-started/downloads.md) doc already points people to the Releases page; they open the latest release and click the zip they want.
