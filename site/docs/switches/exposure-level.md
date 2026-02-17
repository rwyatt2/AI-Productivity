---
title: Exposure level
---

Exposure level means: "Who can reach this thing?"

## Values
* internal
* external-authenticated
* public

## Examples
internal:
* only on company network / VPN / SSO

external-authenticated:
* on the internet, but you must sign in

public:
* on the internet, no sign-in needed

## Why it matters
More exposure usually means more risk:
* abuse (spam, brute force)
* attack surface
* privacy concerns

The kit uses exposure level to decide how deep to go on security.
