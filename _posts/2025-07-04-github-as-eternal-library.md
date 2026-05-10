---
layout: post
title: "Why I chose GitHub as an eternal library"
date: 2025-07-04
categories: [technology]
tags: [general]
season: "Summer 2025"
number: I
excerpt: "The Pew Research Center found that 38% of webpages from 2013 are no longer accessible a decade later. A quarter of everything published online between 2013 and 2023 has vanished. Against this backdrop of digital decay, a Git repository offers something rare: content that persists not because a hosting plan is paid but because the version control system itself is designed around permanence."
lang: en
---

I maintained a WordPress site for years. It served its purpose adequately — the interface was familiar, the ecosystem of themes and plugins reduced friction, and the hosting costs were negligible. Then the hosting provider migrated servers. The PHP version changed. A plugin incompatibility rendered the admin panel inaccessible. The backup I had was two months old. The content between those months — several articles, edits, ideas in draft form — existed nowhere.

This experience is unremarkable. It is, in fact, the default. The Pew Research Center's 2024 study "When Online Content Disappears" found that thirty-eight percent of webpages that existed in 2013 are no longer accessible a decade later. A quarter of all pages that existed at any point between 2013 and 2023 have already vanished — sixteen percent from otherwise functional domains, nine percent from domains that ceased to exist entirely. The web, as Pew documented, decays at an accelerating rate. Government pages, news articles, academic references — all subject to the same entropy.

A Git repository operates on different principles. Its fundamental data structure — a directed acyclic graph of content-addressed objects — means that every version of every file is preserved indefinitely by design, not by policy. The repository does not have a hosting plan that lapses. It does not depend on a PHP version remaining compatible. It does not require a database service to remain operational. It is, in its architecture, an append-only log of everything that was ever committed — which is precisely what an archive should be.

## The library analogy

A library preserves not because it is technologically sophisticated but because its institutional purpose is preservation. The British Library does not discard volumes when shelf space grows expensive. The Internet Archive does not delete crawls when storage costs increase. Their mandate is retention. GitHub's economic model, while not identical, aligns with this mandate: repositories are stored indefinitely, even for free accounts, because the platform's value increases with the volume of code and knowledge it contains. A repository abandoned by its author remains accessible — to collaborators, to the public, to search engines — without ongoing cost or attention.

This is not a guarantee. GitHub could change its policies. Microsoft could alter the economics. But the bet is asymmetric: the probability of a Git repository remaining accessible for twenty years is higher than the probability of a WordPress site, a Medium blog, or a Substack surviving the same period. The content itself — plain text, Markdown, static assets — has no runtime dependency. If GitHub disappears, the local clone remains. If the local machine fails, the remote persists. The distributed nature of Git means that preservation is the default state, not an achievement.

## What I preserve here

This site will contain writing on urban intelligence — the application of sensing and computation to the governance of cities. On gaming and real-time systems — the infrastructure that enables millions to inhabit shared digital spaces. On artificial intelligence at domestic and urban scale. On the African diaspora and the technologies that might help preserve what migration and time erode.

My father's biography exists in a repository alongside this one — `emmanuelpoueme` — structured as a Wikipedia-style article with his career chronology, alongside an interactive genealogy tree rendered from a JSON data file. Seven generations of the Poueme family, four connections to Bamiléké royal chefferies, all encoded in a format that requires no server to render and no subscription to maintain. The biography and the genealogy sit next to each other in the repository: narrative and structured data, preserved together, accessible to anyone with a web browser for as long as GitHub serves static pages.

I see GitHub playing the role of that eternal library — not just for code but for the ideas, histories, and genealogies that deserve a medium more durable than a feed. A repository does not forget. It does not lose pages when an algorithm changes. It does not deprioritize content that stops generating engagement. It simply persists, which is all I ask of it.
