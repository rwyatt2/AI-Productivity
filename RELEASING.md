# How to create a release

This page explains how to publish a release so people can download the **kit-only zip** and the **starter zip** from GitHub.

---

## What is a release?

A release is a saved version of the project. When you create a release, you can attach zip files (assets). People then go to **Releases** on GitHub and download those zips. No need to clone the whole repo.

---

## How to create a release (manual)

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

---

## Optional: automatic releases with a workflow

If you use **tags** (e.g. `v1.0.0`) and want the zips to be built and uploaded for you, you can use the workflow in `.github/workflows/release-assets.yml`. It runs only when you push a tag that looks like a version (e.g. `v1.0.0`). It will:

1. Run the sync script (so reference docs are up to date).
2. Build the site (so the docs build is valid).
3. Create **ai-kit-only.zip** from `kit/` and **ai-kit-starter.zip** from `starter/`.
4. Create or update a GitHub Release for that tag and upload the two zips as assets.

To use it: push a tag (e.g. `git tag v1.0.0 && git push origin v1.0.0`). Then check **Actions** and **Releases** on GitHub. If you prefer to release by hand, ignore this workflow and follow the manual steps above.
