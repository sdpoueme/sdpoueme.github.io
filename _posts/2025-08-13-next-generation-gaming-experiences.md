---
layout: post
title: "What will next-generation gaming experiences look like?"
date: 2025-08-13
categories: [technology]
tags: [gaming]
season: "Summer 2025"
number: II
excerpt: "Roblox generated $4.9 billion in revenue in 2025 while paying its creators over $1 billion — demonstrating that the next generation of gaming is not a product but a platform, and that the infrastructure required to sustain persistent virtual worlds at this scale represents an engineering challenge as fundamental as the games themselves."
lang: en
---

The gaming industry stands at the threshold of a transformation driven by four decades of rapid semiconductor and software evolution. The trajectory is legible in retrospect: from text-based Multi-User Dungeons in the late 1970s, through the LAN-connected Doom sessions of the 1990s, to today's persistent virtual environments hosting millions of concurrent players in shared spaces that never shut down. Each generation expanded what "multiplayer" meant — from two players sharing a couch, to sixteen sharing a server, to millions sharing a world. The next generation expands what "world" means.

Roblox reported $4.9 billion in annual revenue for 2025 — a 36% increase year-over-year — while its creators earned over $1 billion through the Developer Exchange program in the twelve months ending March 2025, a 31% year-over-year increase. These are not gaming metrics. They are platform economics: the same dynamics that made iOS and Android dominant are now operating within virtual worlds, where the platform provider captures value by enabling others to create.

## From games to platforms

The progression from product to platform is the defining architectural shift of this generation. A traditional game is a finished artifact — authored, shipped, consumed. A platform is an environment in which others create. Roblox's creation hub and Epic's Unreal Editor for Fortnite (UEFN) represent this transition concretely: they provide physics engines, rendering pipelines, networking stacks, and monetization infrastructure, then invite millions of creators to build experiences atop them.

The technical implications are profound. A traditional game server manages a known quantity of game state — a fixed map, deterministic rules, predictable player counts. A platform server must manage arbitrary game state — user-generated environments with unknown geometries, custom scripts with unpredictable computational costs, and player populations that spike by orders of magnitude when a particular creation goes viral. Roblox's Q2 2025 results coincided with the runaway success of "Grow a Garden," which broke platform and industry engagement records — an unplanned surge that the infrastructure must absorb without degradation.

## The infrastructure challenge

At the infrastructure layer, next-generation gaming requires solving problems that are neither purely technical nor purely economic but both simultaneously. A cloud provider's game hosting service — offering managed fleets of dedicated servers, matchmaking, and session management — must handle several contradictions: low latency requires geographic proximity to players, but geographic distribution multiplies infrastructure cost. State persistence requires durable storage, but durable storage introduces write latency that competitive gameplay cannot tolerate. Cross-platform play requires protocol compatibility across devices with vastly different computational capabilities — from mobile phones to high-end PCs — while maintaining a consistent experience.

The matchmaking problem alone is nontrivial at scale. A system like Open Match — designed for exactly this purpose — must evaluate player attributes (skill rating, geographic region, preferred game mode, party composition) and produce optimal matches within latency budgets measured in seconds. At peak concurrency of 500,000 players simultaneously seeking matches, the combinatorial space is vast. The solution typically involves partitioning players into geographic pools, then running heuristic matching within each pool — trading theoretical optimality for practical speed.

State synchronization across distributed servers presents an additional challenge. When a player's action in one server must be visible to players on another — as required by any persistent world where the universe is larger than a single server's capacity — the system must propagate state changes with bounded latency and guaranteed consistency. This is, at its core, a distributed systems problem identical to those faced by financial exchanges and telecommunications networks, but with the additional constraint that human perception of latency is unforgiving: anything above 100 milliseconds breaks the illusion of shared presence.

## The economic transformation

The economics of next-generation gaming have shifted from unit sales to engagement monetization. The traditional model — $60 per title, revenue recognized at purchase — has been replaced by free-to-play models where revenue correlates with sustained engagement. Roblox's full-year 2025 revenue guidance of $4.33 billion comes entirely from in-experience purchases and subscriptions, not from selling the platform itself. Fortnite generates revenue through cosmetic items and a creator marketplace.

This economic model creates an infrastructure requirement that traditional games never imposed: the game must always be running. There is no "off" state. Server costs accumulate continuously, not episodically. A traditional multiplayer game — even a popular one — experiences peaks and troughs. A persistent platform is always at some baseline of activity because its global user base spans all time zones. The infrastructure must be provisioned for the peak while the economics must sustain the baseline.

Cloud gaming infrastructure costs — the compute, storage, and network egress required to maintain a persistent virtual world — scale linearly with concurrency and super-linearly with world complexity. Each additional concurrent user requires incremental compute for physics simulation, AI behavior, and state synchronization. Each additional square kilometer of persistent world requires storage that must be accessible at memory-like latencies. The platforms that succeed will be those that reduce the marginal cost of each additional user and each additional unit of world complexity through architectural innovation — better compression, smarter state partitioning, more efficient serialization.

## Persistent identity and interoperability

I envision the next generation of gaming as an interconnected ecosystem where players maintain identity, progress, and social connections across experiences — not merely within a single platform but across platforms. The technical requirement is a standardized identity layer that is portable, self-sovereign, and interoperable: a player's avatar, achievements, and economic assets should follow them regardless of which creation they inhabit.

This is not merely a technical standard to be defined — it is an economic negotiation. Each platform benefits from lock-in: assets that cannot leave the platform retain their value within it. Interoperability threatens this lock-in, which is why no dominant platform has voluntarily implemented it. The resolution will likely come not from altruism but from competitive pressure: smaller platforms offering interoperability as a differentiation strategy, eventually forcing larger platforms to follow.

The physical-digital integration dimension is advancing in parallel. Haptic feedback systems, spatial audio, and augmented reality overlays are beginning to make digital experiences tangibly present in physical space. A Fortnite concert attended through a VR headset with spatial audio is experientially different from the same concert on a flat screen — different enough that the audience is willing to pay for the distinction. This creates a premium tier of gaming experience that justifies higher infrastructure costs.

## Community-driven development

Perhaps the most significant shift is from consumption to creation. When Roblox's creators earn over $1 billion annually, the platform has become an economy — complete with labor markets, investment decisions, and entrepreneurial risk. A creator who builds a popular experience on Roblox faces the same challenges as any small business: managing a team, iterating based on user feedback, competing for attention in a crowded marketplace. The platform provides infrastructure; the creator provides intellectual property and labor.

This model democratizes game development in a way that traditional studio structures never could. A teenager in Lagos and a studio in Montréal have access to the same physics engine, the same distribution, and the same payment infrastructure. The barrier to entry has collapsed from millions of dollars (a traditional AAA title) to zero (a Roblox creation built with free tools). The barrier to success remains high — attention is scarce — but the barrier to participation has been eliminated.

## Looking forward

The next generation of gaming experiences will blur the lines between entertainment, social infrastructure, education, and commerce. A persistent virtual world where people gather, create, transact, and form communities is not a game in any traditional sense — it is a social institution that happens to use a game engine as its substrate. The infrastructure that supports it — the server fleets, the matchmaking systems, the state synchronization protocols, the identity layers, the economic rails — is not gaming technology. It is general-purpose distributed systems technology applied to the problem of shared virtual presence.

Success will belong to the platforms that solve the infrastructure challenge at costs that their economic model can sustain while enabling creators to build experiences that players find meaningful enough to return to indefinitely. This is simultaneously a technical problem, an economic problem, and a cultural problem. It requires engineers who understand distributed systems, economists who understand platform dynamics, and designers who understand human motivation.

The gaming industry has always been a proving ground for the next generation of computing infrastructure — real-time rendering drove GPU development, multiplayer drove network protocol innovation, and now persistent worlds are driving distributed state management. What emerges from this generation will shape not only entertainment but the fundamental architecture of shared digital spaces for decades to come.
