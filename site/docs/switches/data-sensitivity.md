---
title: Data sensitivity
---

# What this is

Data sensitivity means: how bad is it if this data gets out? Some data is fine to share. Some is secret or regulated. The kit uses this to decide how careful to be with storage, access, and leaks.

## When to use it

You set it in the Context Pack. Even “internal” tools can be high risk if they touch restricted data.

## Steps

**Do this:**

1. In the Context Pack, pick one:
   * **public** — Safe to share on the internet.
   * **internal** — Company-internal only.
   * **confidential** — Sensitive business or private project info.
   * **restricted** — Secrets, passwords, credentials, or data with strict rules (e.g. health, finance).
2. If your feature touches more than one kind, use the most sensitive one for that feature.

## Common mistakes

* Saying “internal” when the data is actually secrets or credentials. Use restricted.
* Treating exposure and sensitivity as the same. They are different: something can be internal (low exposure) but restricted (high sensitivity). Set both in the Context Pack.
