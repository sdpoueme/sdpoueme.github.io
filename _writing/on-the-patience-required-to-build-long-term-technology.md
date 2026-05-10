---
layout: post
title: "On the patience required to build long-term technology"
date: 2026-04-15
categories: [writing]
tags: [essay]
season: "Spring 2026"
number: III
excerpt: "When Sidewalk Labs abandoned its Toronto waterfront project in 2020, it demonstrated what the General Purpose Technology literature has long argued: that platforms which reshape urban life require decades of institutional patience that venture-backed timelines cannot provide. The semiconductor took forty years to become infrastructure. Urban technology demands the same arc."
lang: en
---

The integrated circuit was demonstrated in 1958. The internet became commercially available in 1991. The smartphone reached mass adoption around 2007. Between these milestones — spanning nearly fifty years — an entire industrial civilization reorganized itself around silicon, but the reorganization was invisible to anyone measuring progress in quarterly intervals. Rosenberg and Trajtenberg (2004) formalized this observation as the theory of General Purpose Technologies: that certain foundational innovations require prolonged gestation periods before their transformative effects become measurable, and that premature abandonment during these gestation periods is the primary cause of failed technological transitions.

This framework illuminates why urban technology — the application of sensing, computation, and intelligent systems to the governance of cities — has proven so resistant to the velocity that Silicon Valley prefers.

## The lesson of Sidewalk Labs

In October 2017, Alphabet announced Sidewalk Labs' plan to build a twelve-acre smart neighborhood on Toronto's eastern waterfront. The vision was comprehensive: adaptable buildings with modular construction, heated sidewalks that melt snow, autonomous transit, and a dense mesh of environmental sensors feeding real-time data to urban management systems. Canadian Prime Minister Justin Trudeau attended the launch. Eric Schmidt championed the project publicly. Two and a half years and fifty million dollars later, Sidewalk Labs withdrew.

The stated reason was economic uncertainty caused by the pandemic. The actual reasons, as subsequent reporting by the Architectural Record (2022) and the Guardian documented, were structural: when a technology company attempts to reshape a city on a venture-capital timeline, the city's democratic institutions — community boards, privacy commissioners, municipal councils — move at a fundamentally different speed. Sidewalk Labs needed approvals that required years of negotiation compressed into quarters of runway. The residents of Toronto had questions about data governance that could not be answered with a product demo. The project failed not because the technology was inadequate but because the institutional patience required to deploy it exceeded what the economic model could sustain.

This is not an isolated case. Smart city initiatives worldwide have followed similar arcs — ambitious announcements, pilot deployments, quiet discontinuation. The pattern suggests not that urban technology is impossible but that it demands a relationship to time that most technology companies are not structured to maintain.

## What patience looks like in practice

I have spent years building an urban infrastructure platform — a system of interconnected services that manages property intelligence, sensor networks, and predictive analytics for residential and commercial buildings. The architecture today comprises a Node.js core running Express for API orchestration, a Python FastAPI service for AI inference, PostgreSQL with PostGIS for spatial data, Redis for session management, MongoDB for unstructured sensor logs, and RabbitMQ for asynchronous event processing. Monitoring runs on Prometheus with fifteen-second scrape intervals feeding Grafana dashboards. The AI layer orchestrates multiple language model providers — defaulting to a locally-hosted model via Ollama for cost efficiency, with commercial APIs as fallback — through a directed acyclic graph of specialized agents: one for sensor analysis, another for predictive maintenance, a third for anomaly detection.

None of this existed three years ago. The path from concept to this topology was not linear. It involved months where the only progress was understanding why a particular database extension failed under concurrent geospatial queries. Months where the AI agent framework had to be redesigned because the orchestration pattern — sequential execution with conditional branching — could not handle the parallelism required when twelve sensors report anomalies simultaneously. The current architecture uses a networkx-based directed graph with a ten-worker thread pool to execute agent workflows in parallel, sequential, conditional, or dynamic modes. This is the fourth orchestration design. The previous three taught me what was needed but could not themselves provide it.

## The arc of a cadastral system

In parallel, I maintain a cadastral platform — a land parcel registry whose purpose is to create authoritative spatial records of property boundaries, ownership, and land tenure. The original system was built in PHP on the Yii 1.x framework more than a decade ago. It worked. It served municipalities. But as the requirements evolved — multi-tenant deployment, spatial validation of overlapping boundaries, audit trails for every mutation — the framework could not accommodate them without accumulating the kind of technical debt that eventually makes a system unmaintainable.

The migration to Yii 2.x was not a rewrite — it was a patient decomposition. Six modules were extracted: cadastre, land tenure, land assets, wayleave management, documents, and audit. Each was rebuilt with proper separation of concerns. The Java backend — using Jersey 2.x for REST, ActiveJDBC for lightweight ORM, GeoTools and JTS Topology Suite for spatial operations — was designed from the beginning to handle the geometric complexity that the PHP layer had handled with approximations. The collision detection pipeline — validating that a new parcel does not overlap an existing one — now follows a formal path: client request, schema validation, spatial intersection check using JTS, database insert with audit logging, and asynchronous notification.

This pipeline took eighteen months to stabilize. Eighteen months during which the system was functional but incomplete, serving users but not yet trustworthy for contested boundary disputes. Patience, in this context, meant continuing to invest in correctness when "good enough" was already deployed.

## Why the long arc matters

The World Economic Forum noted in 2020, after Sidewalk Labs' departure, that the failure raised questions about whether private technology companies could ever serve as stewards of urban infrastructure. The answer is not that they cannot — it is that they must operate on timescales that their investors rarely tolerate. A city is not a product. It is not subject to pivot. Its residents cannot be migrated to a new platform when the first one underperforms its metrics.

The urban technology that will endure — the cadastral systems that communities trust, the IoT platforms that building managers rely on, the AI agents that detect infrastructure failures before they cascade — will be built by people and organizations willing to accept that the compounding effects of sustained investment are invisible for years before they become undeniable. The semiconductor industry understood this: Intel invested in fabrication capacity for decades before Moore's Law produced returns visible to consumers. Amazon operated at a loss for seven years before profitability emerged.

General Purpose Technologies do not announce themselves with immediate returns. They compound silently, rewarding only those who refused to abandon the work when the world offered no validation. Urban infrastructure technology is, I believe, at an early point in this arc — perhaps analogous to where the internet was in 1994. The protocols exist. The hardware exists. The computational capacity exists. What does not yet exist is the institutional patience to deploy them at the pace cities actually change.

## Building without applause

There is a particular discipline required to build technology that nobody will notice for years. It requires what my father described in his retirement speech as *"la condition sine qua non du succès"* — discipline as the precondition for any achievement worth having. In the context of urban systems, this discipline manifests as willingness to spend months on correct geospatial validation when approximate validation ships faster. It manifests as maintaining a monitoring stack — Prometheus, Grafana, structured logging — for a system that serves dozens of users rather than millions, because the monitoring is infrastructure for the future, not justification for the present.

The Sidewalk Labs project failed because it attempted to build a city at the speed of a startup. The technology that actually transforms urban life will be built at the speed of the city itself — slowly, with consultation, through trust earned over years of reliable operation. This is not a romantic notion. It is an engineering requirement. A building code does not change in a sprint cycle. A property boundary established in 1960 must remain valid in 2060. Systems that manage these realities must be built by people who think in those timeframes.

Is it possible to build transformative technology without external validation for years? The semiconductor engineers of the 1960s proved it was. The question for urban technologists is whether we possess the same patience — or whether we will abandon the work, as so many have, the moment the quarterly metrics disappoint.
