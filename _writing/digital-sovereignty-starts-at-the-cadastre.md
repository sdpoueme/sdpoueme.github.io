---
layout: post
title: "Digital sovereignty starts at the cadastre"
date: 2026-05-16
categories: [writing]
tags: [essay]
season: "Spring 2026"
number: V
excerpt: "The Africa Forward Summit in Nairobi declared that digital public infrastructure is as vital as electricity. But sovereignty over data centres and AI compute means little if ninety percent of rural land remains undocumented. The cadastral system — the registry that answers who owns what ground — is the first layer of digital sovereignty, because every other registry derives its authority from territory."
lang: en
---

On May 13, 2026, fifty-four African heads of state signed the Nairobi Declaration at the Africa Forward Summit. The language was forceful and precise: digital sovereignty, local value addition, sovereign data, AI infrastructure financed by African capital. President Ruto argued that Africa's $4 trillion in domestic savings should fund its own digital future. Mozambique's Minister of Communications said digital public infrastructure is now "as vital as electricity." Kenya's Special Envoy on Technology warned that relying on imported AI models "risks entrenching systems that do not capture African languages, contexts or economic needs."

The declaration is correct. Its ambitions are overdue. And it is incomplete.

## The missing layer

The sovereignty discourse as articulated in Nairobi focuses on what sits above ground: data centres, cloud infrastructure, compute capacity, platform governance, AI models trained on African datasets. These are necessary layers of a full-stack sovereignty. But they float above an unresolved foundation.

The World Bank estimates that ninety percent of rural land in Sub-Saharan Africa is undocumented. Fewer than five percent of agricultural parcels and at most twenty-five percent of urban plots have any formally recorded rights. This is not a failure of technology — spatial validation algorithms, geodesic calculations, and collision detection have existed for decades. It is a failure of institutional trust in the systems that would record those rights.

Sovereignty, in its most elemental form, is the answer to a question about territory: who has authority over this ground? A state that cannot answer this question for ninety percent of its rural surface exercises sovereignty only declaratively. Data centres built on land whose ownership is contested or undocumented inherit that contestation. Cloud infrastructure governed by a state that cannot authoritatively map its own territory is, in a structural sense, floating.

The cadastral system — the registry that records parcels, boundaries, ownership rights, and their mutations over time — is the ground truth from which all other registries derive authority. Tax systems need it. Infrastructure planning needs it. Agricultural finance needs it. Climate adaptation programmes that must know who farms which parcel need it. It is the first layer of digital public infrastructure, and it is the layer most African states have not yet built.

## A decade of building one

I have maintained a cadastral platform for over a decade. Its purpose is to create authoritative spatial registries for municipalities and governments — records of parcels, boundaries, and rights that can be trusted because the system that produces them is transparent in its operations.

The architecture is not remarkable in isolation: a Java API performing geodesic calculations and spatial validation, a PHP frontend that has migrated from Yii 1.x to Yii 2.x as requirements outgrew the original framework, Docker orchestrating services across multiple ports, multi-tenant data isolation so each municipality's records remain separate, and support for English, French, and Hindi because a registry that cannot be read in the language of its users commands no trust.

What is worth noting is the duration. The platform began before the Africa Forward Summit existed as a concept. Before "digital sovereignty" entered the continental policy lexicon. Before Gulf sovereign wealth funds deployed $66 billion into AI and digitalisation. Before the "new scramble" framing. It began because the problem was obvious to anyone who tried to register a parcel in Cameroon: the system did not work, and its failure was not technical.

The technical work — collision detection that identifies overlapping parcels, audit trails that track every mutation, spatial validation that refuses geometrically invalid boundaries — exists to serve a non-technical purpose: making the registry trustworthy enough that institutions and citizens accept its outputs as authoritative. Every architectural decision is downstream of that social objective.

## What sovereignty requires that summits cannot provide

The Nairobi Declaration was produced in two days. The cadastral platform I maintain has been migrating its frontend framework for months — six modules extracted and rebuilt, each with its own controllers, models, and views. A license server is being deprecated. A multi-tenant SaaS architecture is being restructured.

This is not a complaint. It is an observation about timescale. The declaration uses language like "industrialization," "local value addition," and "sovereign infrastructure." These are correct categories. But each one, when reduced to implementation, demands a patience that summits cannot legislate.

A spatial validation pipeline does not become trustworthy because a declaration says it should. It becomes trustworthy because it has been running, catching errors, logging audits, and refusing invalid geometries for years — long enough that the institutions consulting it have verified, through repeated use, that its outputs correspond to reality. Trust accumulates. It does not arrive by proclamation.

The East African's editorial on the summit noted that "sovereignty in the digital age is a full-stack problem: it is built or lost across data governance, compute access, energy infrastructure, talent pipelines, model development, and the legal systems that determine whose law governs what." This is accurate. But the stack has a bottom, and the bottom is land.

## The cost of maintaining sovereignty without state backing

On May 15, 2026 — two days after the Nairobi Declaration was signed — the domain name for Camidus, the organization through which I first built cadastral tools for Cameroon, expired. The hosting lapsed. The infrastructure I had maintained for over a decade to serve African municipalities lost its public-facing address.

This is what sovereignty looks like when it is built by individuals rather than states: it persists as long as someone pays the renewal fee. The summit speaks of "$4 trillion in domestic savings" that should be redirected toward infrastructure investment. The cadastral platform I maintain was never part of that $4 trillion. It was funded from the budget of a single engineer who believed the problem mattered.

The declaration's language about "public-private partnerships" and "sovereign investment structures" gestures toward the right mechanism. But between the summit's financing vision and the reality of existing African infrastructure systems, there is a gap that no declaration acknowledges: the systems that already exist, built by Africans who could not wait for continental consensus, running on personal commitment rather than institutional mandate.

These systems are not pilots. They are not proof-of-concepts presented at conferences. They are running production infrastructure serving real municipalities. And they are fragile — not technically, but economically — because the institutional support that the declaration envisions does not yet reach them.

## Customary and titled: what the data model teaches about sovereignty

The most revealing technical decision in the cadastral platform is a field in the database: `ownership_type`. It distinguishes between customary tenure and titled ownership — between the chief's allocation according to tradition and the state's issuance of a formal title. Both are recorded. Neither is privileged over the other.

This is a small architectural choice with large political implications. A system that models only titled ownership implicitly denies the legitimacy of customary rights. A system that models both creates the conceptual space for their coexistence — which is itself an act of sovereignty, because it refuses to erase one legal tradition in favour of another.

The Nairobi Declaration speaks of "African values" and "systems that reflect African realities." In cadastral terms, African reality is legal pluralism: two or more systems of law claiming authority over the same territory, with different definitions of what ownership means. The colonial cadastral systems recognized only titled land. They did not model the ninety percent that operated under customary tenure — which is precisely why that ninety percent remains undocumented today.

A sovereign digital infrastructure that repeats this erasure — that models only what Western technical standards accommodate — is sovereignty in name only. Real sovereignty requires data models capacious enough to represent the full complexity of African legal reality. This is not a policy question. It is a schema design question. And it was answered, in production code, years before the summit convened.

## What the declaration could mean

If the Nairobi Declaration's language about digital public infrastructure is taken seriously — not as aspiration but as commitment — then the cadastral layer demands attention commensurate with data centres and AI compute. The summit's own logic requires it:

- **Sovereign data** begins with knowing what territory you govern and who has rights to it.
- **Local value addition** in agriculture, mining, and real estate depends on registries that can authoritatively answer questions about land.
- **Reducing dependence on external systems** means building African cadastral platforms rather than licensing Western GIS solutions that model Western land tenure assumptions.
- **Digital public infrastructure as vital as electricity** — electricity requires rights-of-way. Rights-of-way require a cadastre.

The Africa Forward Summit has declared the destination. The cadastre is the first step of the road.

---

The platform continues to run. The domain expired, but the code, the data, and the spatial logic persist on infrastructure that does not depend on a single renewal fee. What I have learned, in a decade of building systems that the continent's policy class is now declaring necessary, is that sovereignty is not a summit outcome. It is a maintenance practice. It is the decision, made repeatedly over years, to keep the system running when no institution requires you to — because the problem does not wait for consensus, and the land does not stop being contested while the declaration is being drafted.
