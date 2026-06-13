---
layout: post
title: "The cognitive city has no ground truth"
date: 2026-06-08
categories: [writing]
tags: [essay]
season: "Spring 2026"
number: VI
excerpt: "A PRISMA review synthesizes seventy studies on agentic AI for climate-resilient cities. It proposes a unified digital twin framework. But the framework has no ground truth — it assumes mapped parcels, documented ownership, and continuous sensing that do not exist where cities are actually growing fastest. I have spent a decade building the precondition these papers take as given."
lang: en
---

In April 2026, a team of researchers published a PRISMA-guided review titled "Agentic AI for Climate-Resilient Cities." They screened 920 records, synthesized seventy peer-reviewed studies, and proposed a unified framework: Agentic AI orchestrating digital twins for urban sustainability. The taxonomy is honest. The research gaps are named. The framework diagram has all the right boxes — multi-agent coordination, real-time sensing, Pareto optimization across SDG goals.

And it describes a city that does not exist.

## The framework's silent assumption

The proposed architecture assumes a legible urban substrate: mapped parcels with clean geometry, documented ownership chains, continuous sensor streams feeding a digital twin that models the city in real time. Every layer of the framework — from the IoT sensing layer to the multi-agent coordination protocol to the adaptive decision intelligence — depends on this substrate being present, authoritative, and maintained.

In the cities where I work, ninety percent of rural land is undocumented. Urban plots have at most twenty-five percent formal registration. The sensor infrastructure is intermittent. The registry that answers "who owns this ground" — the cadastre — is either absent, incomplete, or contested between customary and statutory legal systems.

The cognitive city, as the literature describes it, has no ground truth. It has a diagram where ground truth should be.

## What "multi-agent" means in practice

The review requires that a system exhibit at least two of four attributes to count as "agentic": autonomous decision-making, multi-step planning, tool use, and multi-agent coordination. This is a clean operationalization. But it reveals what the literature means by "agent" — a computational function with a role: planner, monitor, optimizer, coordinator.

In the system I have built — Nexurba, a platform integrating cadastral registration, IoT property management, and AI-driven urban analytics — the agents do not merely divide labour across computational roles. They mediate between stakeholders whose interests conflict.

Consider the architecture. Calar, the cadastral engine, is a Java API performing geodesic calculations — spatial collision detection, boundary validation, coordinate conversion — backed by GeoTools and JTS Topology Suite. It maintains a data model that distinguishes between customary tenure and titled ownership. This is not a neutral technical choice. It is an architectural decision that creates conceptual space for legal pluralism — the coexistence of traditional allocation and state-issued title over the same territory.

When the AI agent layer (a Python service with its own state machine, capability declarations, and provider abstraction) analyzes sensor data from a property, it does not simply optimize a utility function. It must reconcile information from sensors that may be offline, ownership records that may be disputed, and infrastructure assessments that span both formal and informal systems. The "multi-agent coordination" protocol is not AutoGen or LangGraph. It is negotiation under conditions of incomplete information and conflicting authority.

The literature models agents talking to agents. The reality is agents mediating between institutions — the chief who allocates land under customary law, the municipal registry that issues statutory titles, the IoT sensor array that reports occupancy patterns the registry does not capture, and the citizen portal through which residents file service requests against infrastructure that may not be formally mapped.

## The sensing layer that degrades gracefully

The cognitive city literature presupposes ubiquitous connectivity. The IoT layer in these frameworks models continuous data streams — temperature, humidity, pressure, energy consumption — flowing from deployed sensors through MQTT brokers into a data hub for real-time analytics.

The Nexurba IoT platform is designed for this. Its sensor analyzer agent declares capabilities in anomaly detection, pattern recognition, trend analysis, and data validation. Its predictive analytics service forecasts infrastructure maintenance, energy consumption, and risk assessment. These are real system components — not paper architectures.

But the design constraint that the literature never articulates is *graceful degradation*. In the deployment contexts where this platform operates:

- Power drops. Sensors go dark for hours or days.
- Connectivity is MQTT over unreliable links, not fibre to a cloud endpoint.
- The edge device may be the only reliable compute for a given property cluster.
- The AI engine must produce useful predictions from incomplete time series, not pristine data lakes.

The sensor analyzer's analysis templates define normal ranges and critical thresholds — temperature from minus forty to eighty-five degrees Celsius, energy consumption up to ten thousand watts. But the harder design problem is not threshold detection. It is maintaining analytical coherence when fifty percent of the expected data points never arrive. The literature models what happens when everything works. Production systems must model what happens when it doesn't.

## The cadastre as precondition, not output

The Syed et al. framework positions the digital twin as the integration layer — the living model of the city that enables closed-loop decision-making. This is architecturally sound. But it inverts the dependency chain as it exists in most African cities.

A digital twin requires a spatial reference frame: parcels, boundaries, ownership, infrastructure connections. In the Nexurba platform, this reference frame is Calar — a system I have maintained for over a decade, migrating from Yii 1.x to Yii 2.x, extracting module by module, maintaining multi-tenant data isolation across municipalities, supporting English, French, and Hindi because a registry that cannot be read in the language of its users commands no trust.

The integration architecture makes the dependency explicit. Urban planning queries Calar for parcel data. Permit management validates applications against zoning and ownership. Tax assessment derives from registered parcels. Infrastructure management maps utility connections to documented plots. The AI engine — with its predictive maintenance, traffic flow, and energy forecasting — consumes spatial context from the cadastre.

The cognitive city framework treats this foundation as given. In practice, building it *is* the work. The seventy studies synthesized in the PRISMA review are studying what happens after the hard problem is solved — after someone has spent a decade making a spatial registry trustworthy enough that other systems can build upon it.

## What the papers cannot model: duration

There is a temporal dimension that systematic reviews cannot capture. The inclusion criteria for the PRISMA study — publication date, journal indexing, minimum agentic attributes — select for novelty. They cannot select for duration.

The cadastral platform was not built in a research cycle. It was not funded by a grant with deliverables due in eighteen months. It began before "digital sovereignty" was a continental policy term, before "agentic AI" had a PRISMA-eligible literature, before Gulf sovereign wealth funds deployed billions into African AI infrastructure.

It persists because someone maintained it. Updated the frameworks when they became unsupported. Restructured the multi-tenant architecture when requirements outgrew the original design. Paid the domain registration. Kept the Docker orchestration running across seven services.

The cognitive city literature assumes that once an architecture is designed, deployment follows. What it cannot model is the decade between design and trust — the period during which a system must operate, catch errors, log audits, and refuse invalid geometries, long enough that institutions accept its outputs as authoritative.

A PRISMA review can synthesize what exists in the literature. It cannot synthesize what exists in production — running quietly, underfunded, unfunded, maintained by the people who built it because the problem has not become less real while the academy discovered it.

## The constructive gap

This is not a dismissal of the cognitive city literature. The taxonomy is useful. The identification of fragmentation across domains is correct. The call for unified frameworks is sound.

But between the framework diagram and the running city, there are at least three layers the literature does not account for:

**1. Legal pluralism as a data model problem.** The `ownership_type` field that distinguishes customary from titled tenure is not a technical curiosity. It determines whether a digital twin can represent the actual ground truth of an African city — or only the formally documented twenty-five percent.

**2. Multi-stakeholder negotiation as the true coordination protocol.** Agent-to-agent communication in LangGraph is message passing between functions. Agent coordination in a real urban system is mediation between conflicting institutional authorities operating under different legal regimes over the same territory.

**3. Maintenance as sovereignty.** The Cape Town digital twin project earns praise from Finland. The Nairobi Declaration envisions continental AI infrastructure. But the question of who maintains the ground layer — who keeps the cadastre running when the domain expires, who updates the framework when it becomes unsupported — is the question of whether the cognitive city is sovereign or dependent.

The academic framing gets the architecture right. What it misses is that architecture without maintenance is a diagram. Architecture with a decade of maintenance is infrastructure.

## What I know that the review cannot cite

On May 15, 2026 — two days after the Nairobi Declaration was signed — the domain name for the first cadastral platform I built for Cameroon expired. The hosting lapsed. A decade of running production infrastructure lost its public-facing address because no institution considered it worth the cost of a renewal fee.

This is what the gap between the academic framework and the running city looks like: not a research question, but a payment that was not made. Not a scalability challenge, but a Docker compose file that someone must update when the base image is deprecated. Not a multi-agent coordination protocol, but a man in Montréal who wakes at 5 AM to migrate a PHP module from Yii 1.x before the security patches stop, because if he doesn't, the municipalities that depend on the system will lose their spatial registry.

The PRISMA review synthesized seventy studies. None of them describe this. None of them can. The inclusion criteria select for novelty, indexing, and methodological rigour. They cannot select for the thing that makes a system real: that someone has refused to let it die.

I do not write this to diminish the research. The taxonomy matters. The framework diagrams are useful maps. But a map of a city that does not yet exist is not urban planning — it is speculation. And the distance between speculation and infrastructure is not measured in citations or funding rounds. It is measured in years of maintenance performed without recognition, without institutional backing, without the certainty that the work will outlast the person doing it.

The cognitive city will not be built by a framework. It will be built by the people who maintain the ground truth long enough for frameworks to become meaningful — and who do so knowing that the literature will arrive, eventually, to describe what they have already done.

The difference between a paper and a city is not architecture. It is duration. It is stubbornness. It is the decision, made every year for a decade, that the problem still matters more than the recognition.

---

*This is the sixth essay in a series. The previous: [Digital sovereignty starts at the cadastre](/writing/digital-sovereignty-starts-at-the-cadastre/).*
