---
layout: post
title: "Preserving a family across centuries, in JSON"
date: 2026-05-01
categories: [writing]
tags: [essay]
season: "Spring 2026"
number: IV
excerpt: "When ninety percent of rural land in Sub-Saharan Africa remains undocumented and oral traditions fracture with each generation that migrates, the question of how to preserve a family's memory becomes inseparable from the question of what medium can be trusted to endure. A flat JSON file and an interactive HTML page, hosted on infrastructure designed for permanence, is one answer."
lang: en
---

There is a particular silence that settles over a family when no one can recall the name of a great-great-grandfather with certainty. In the Bamiléké highlands of western Cameroon, where my family originates, lineage is not merely genealogical — it is political, spiritual, and territorial. A family's connection to a chefferie determines access to land, participation in customary governance, and position within a social architecture that predates colonial boundaries by centuries. When that lineage becomes uncertain — when the oral chain frays — what is lost is not merely a name but an entire system of belonging.

The World Bank estimates that ninety percent of rural land in Sub-Saharan Africa is undocumented, making it vulnerable to expropriation and erasure of customary rights. This statistic, staggering in its implications for over a billion people, is not merely about property. It is about identity. Land tenure in much of Central and West Africa is inseparable from kinship — the parcel your grandfather cultivated is yours not because a title deed says so but because collective memory confirms it. When that memory degrades, the right degrades with it.

My father, Emmanuel Poueme, spent thirty-six years in Cameroon's public service — most of them at the Caisse de Stabilisation des Prix des Hydrocarbures, where he rose to Conseiller Technique N°1 and was decorated as Commandeur de l'Ordre de la Valeur. His career was measured in decades, not quarters. His parents — Tinang Joseph of Batchingou and Ngongang Rebecca of Bamena — connected our family to chefferies whose histories stretch to the eighteenth century. When I set out to document this lineage, I discovered that what had been preserved in conversation for two hundred and fifty years needed to become something more durable than conversation.

## The structure of memory

The genealogy traces four royal lineages across the Bamiléké highlands: Baleng, where Prince Nandjo departed circa 1770; Balengou, where Wetio Kouamou earned the title "Ta'a fieu"; Batchingou, where Tchié Ngantchié served as Minister of Defence to the chief; and Bamena, through the lineage of Ta'a Nanwou. Seven generations connect Prince Nandjo's migration from Baleng to Balengou to the present.

The technical question was deceptively simple: how does one encode this? A relational database would be natural for a software engineer — normalized tables for persons, relationships, locations, events. But a database requires hosting, maintenance, credentials, and a runtime. It introduces dependencies that decay. WordPress taught me this: a hosting plan lapses, a PHP version upgrades, a MySQL instance corrupts, and years of content evaporate. The Pew Research Center's 2024 study on link rot found that thirty-eight percent of webpages that existed in 2013 are no longer accessible a decade later. A quarter of all pages created between 2013 and 2023 have already vanished.

I chose instead a flat JSON file — `family-data-dynamic.json` — served as a static asset alongside an interactive HTML page. The data structure is hierarchical: each person node contains birth information, death information where applicable, relationships to parents and spouses, connections to specific chefferies, and notes about their role in customary governance. Generations are calculated automatically from parent-child relationships rather than stored as metadata, ensuring the tree remains internally consistent as new information is added.

## Rendering lineage as interface

The `genealogy.html` page provides six views of the same data: an overview with statistics, a dedicated panel for royal lineages showing the family's connections to each chefferie, an interactive tree visualization, a people directory, a localities map linking persons to villages, and a timeline of key dates. Each view is a different lens on the same underlying JSON — a design decision that mirrors how oral tradition works. A griot does not tell one story; she tells the same story from different angles depending on who is listening and what they need to know.

The technical choice to render everything client-side from a single JSON source means the entire site is a set of static files — HTML, CSS, JavaScript, and one data file. It requires no server, no database, no API. It can be served from any static host indefinitely. On GitHub Pages, it benefits from the infrastructure of a company whose economic model depends on preserving repositories. This is not incidental. The arxiv paper "On the Preservation of Africa's Cultural Heritage in the Age of Artificial Intelligence" (2024) traces the evolution of knowledge transmission from oral traditions through print to digital, noting that each transition risks losing what the previous medium preserved naturally — context, tone, the relationship between teller and listener. A flat file cannot restore those qualities, but it can at least ensure the facts survive the transition.

## Why JSON and not a genealogy standard

GEDCOM — the standard format for genealogical data since 1984 — would have been the conventional choice. It is supported by every major genealogy platform and facilitates interchange between software systems. But GEDCOM was designed for Western genealogical patterns: nuclear families, linear descent, church records as primary sources. It handles poorly the polyvalent kinship structures of Bamiléké society, where a person's identity is simultaneously defined by paternal lineage, maternal lineage, chefferie membership, and geographic origin. A person can be a prince of Balengou through one ancestor and connected to the Bamena chieftaincy through another — these are not competing claims but complementary dimensions of identity.

JSON, being schema-free, accommodates this multiplicity without forcing it into a structure designed for a different cultural logic. The `family-data-dynamic.json` file can express that Tinang Joseph is simultaneously of Batchingou and father to children whose maternal connection runs through Bamena — without privileging one relationship over the other. This is a small technical decision with large cultural implications: the data model encodes assumptions about what kinship means, and those assumptions should match the society being documented, not the software's country of origin.

## The professional parallel

Professionally, I have spent years building systems that manage land parcels, property records, and spatial relationships — a cadastral platform whose entire purpose is to create authoritative records of who belongs to what territory. The architecture involves spatial validation pipelines, collision detection for overlapping boundaries, and audit trails that track every change to every parcel. The technical challenges — representing complex spatial relationships in structured data, ensuring consistency across multi-tenant deployments, maintaining trust in the system's outputs — are remarkably similar to what a genealogy demands.

A land registry answers: who has rights to this parcel? A genealogy answers: who has connections to this lineage? Both require structured data to replace or supplement oral agreement. Both must handle disputes — competing claims to the same territory or the same ancestor. Both depend on institutional trust for their authority. The difference is that a public land registry is maintained by a state with legal power to enforce its records. A family genealogy is maintained by whoever cares enough to maintain it.

## Permanence as commitment

My father spoke at the CSPH's annual ceremony in 2015, the year of his retirement, about discipline: *"Sans la discipline, sans le respect de la déontologie et de l'éthique, rien de bon ne peut se construire."* Without discipline, without ethics, nothing good can be built. He was speaking about institutional governance, but the principle applies equally to the quiet work of preservation. Encoding seven generations into a data file is not glamorous work. It requires interviewing elders, cross-referencing contradictory oral accounts, making editorial decisions about what to include and what remains uncertain. It requires the discipline to return to the file months later and add what new conversation has revealed.

Those of us who migrated — from Yaoundé to Montréal — carry fragments of the story but rarely the whole.

A repository does not forget. It does not lose pages when a hosting plan expires. It does not depend on a single elder's memory. The `emmanuelpoueme` repository on GitHub contains my father's biography in the format of a Wikipedia article — with infobox, career chronology, and references — alongside the genealogy tree that connects him to ancestors who walked from Baleng to Balengou before the French colonial administration existed. These are two forms of the same commitment: that what a family was should not disappear because no one thought to write it down in a format that endures.

What does it mean to inherit a lineage? Perhaps it means accepting the obligation to transmit it — in whatever medium the era provides — to those who come after.
