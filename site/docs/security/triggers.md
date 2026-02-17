---
title: Security triggers (when to be extra careful)
---

Even internal projects can be risky.

You must be extra careful if you touch:
* login / permissions / roles
* admin features
* data export or download
* secrets or tokens
* file uploads
* URLs or rich text
* integrations, webhooks, external calls
* anything with confidential or restricted data

When triggers apply, the kit expects:
* a short threat model
* security acceptance criteria
