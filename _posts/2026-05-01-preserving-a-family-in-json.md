---
layout: post
title: "Preserving a family across centuries, in JSON"
date: 2026-05-01
categories: [writing]
tags: [essay]
season: "Spring 2026"
number: IV
excerpt: "When a family's memory spans seven generations and four chefferies of the Bamiléké highlands, the question of how to preserve it becomes inseparable from the question of what medium can be trusted to endure. A repository does not forget."
lang: en
---

There is a particular silence that settles over a family when no one can recall the name of a great-great-grandfather. It is not grief exactly — it is something closer to a structural absence, a gap in the architecture of identity that no amount of oral tradition, however rich, can fully compensate for once the last elder who held the thread has departed. In the highlands of western Cameroon, among the Bamiléké peoples, lineage is not merely genealogical record — it is political legitimacy, spiritual continuity, and social contract rolled into a single unbroken chain of names.

The Poueme family traces its origins across four chefferies — Baleng, Balengou, Batchingou, and Bamena — through seven generations beginning with Prince Nandjo, who migrated from the chieftaincy of Baleng to Balengou sometime in the 1770s. That migration, like so many in the grassfields of what is now Cameroon's West Region, was not flight but foundation: a prince establishing a new branch, carrying with him the legitimacy of royal descent and the obligation to perpetuate it. The generations that followed — through the colonial period, through independence, through the long arc of postcolonial nation-building — maintained this thread orally, in ceremony, in the hierarchies of family gatherings where seating arrangements themselves encoded genealogical rank.

My father, Emmanuel Poueme, spent thirty-six years in Cameroon's public service at the Caisse de Stabilisation des Prix des Hydrocarbures — the CSPH — rising to the position of Conseiller Technique N°1. His career was one of those quiet acts of institutional construction that rarely make headlines but upon which nations depend: the stabilization of hydrocarbon prices in an economy buffeted by global commodity markets, the daily work of keeping a system functioning so that citizens could plan their lives with some measure of predictability. He understood, perhaps better than most, that systems endure only when someone commits to maintaining them across decades — not in bursts of heroic effort but in the steady accumulation of competence applied consistently over time.

It was this understanding, inherited more than taught, that eventually led to the project of encoding our family's genealogy into structured data.

---

The decision to represent a genealogy as a JSON file is, on its surface, a technical one — a matter of choosing a data format. But beneath that surface lies a philosophical commitment. JSON is not prose. It does not accommodate ambiguity gracefully. It demands that relationships be declared explicitly: parent, child, spouse, sibling. It requires dates, even approximate ones, to be rendered in a format that machines can parse. It forces the genealogist to confront every gap, every uncertainty, every point where oral tradition diverges from documentary evidence, and to make a decision — to commit a structure to file or to mark it explicitly as unknown.

This is, in its own way, an act of interpretation as rigorous as any historiography. When one writes `"birth_year_approximate": 1770` for Prince Nandjo, one is making a scholarly judgment — triangulating from the oral traditions of Baleng, from the known chronologies of chefferie successions, from the demographic patterns of the grassfields in the late eighteenth century. The JSON file does not hide this judgment behind narrative fluidity. It surfaces it, makes it auditable, makes it contestable by future generations who may discover new evidence.

The interactive HTML visualization that sits atop this data file transforms the abstract structure into something navigable — a tree that can be explored, expanded, collapsed. One can trace the line from Nandjo through his descendants, watch it branch across chefferies as marriages connected Balengou to Batchingou to Bamena, see the pattern of a family dispersing geographically while maintaining its coherence as a lineage. The visualization is not the scholarship; it is the interface to the scholarship. The JSON is the scholarship.

---

There is a broader argument here about what it means to host such a file on GitHub. A platform built for source code — for the collaborative construction of software — becomes, in this use, something closer to an archive. Version control, that mechanism designed to track every change to a codebase, becomes a genealogical audit trail. When a cousin in Douala sends a correction — "the marriage was in 1923, not 1925; here is the church record" — that correction is committed, timestamped, attributed. The previous version is not destroyed; it is preserved in the history. The repository accumulates knowledge the way a family accumulates generations: by accretion, by amendment, never by erasure.

A repository does not forget.

This is not a trivial property. The fragility of oral tradition is well documented — not because oral cultures are inferior to literate ones, but because human memory is biological and therefore mortal. Each elder who passes takes with them not only facts but contexts: the tone in which a name was spoken, the gesture that accompanied a story, the silence that indicated a branch of the family about which one did not speak freely. A JSON file cannot capture tone or gesture. But it can capture structure, and structure — the bare fact of who descended from whom, who married whom, who migrated where — is the scaffold upon which all richer narratives are built.

GitHub, in this framing, functions as something approaching an eternal library — not because Microsoft's servers are immortal, but because the distributed nature of Git means that every clone is a complete copy. The repository exists, in principle, on every machine that has ever pulled it. It is not centralized in a single archive that fire or flood or political upheaval could destroy. It is distributed in the way that oral tradition once was — across many minds, many locations — but with the added property of exact fidelity. The clone does not drift the way memory drifts.

---

One might object that there is something reductive about encoding a royal Bamiléké lineage — with all its spiritual weight, its connections to land and ancestor veneration, its political implications for chefferie succession — into a format designed for data interchange between web applications. The objection is not without force. JSON knows nothing of the sacred. It cannot represent the meaning of a lineage, only its structure.

But this objection, examined carefully, applies to all writing. The act of transcribing an oral genealogy into any written form — whether a colonial administrator's notebook in the 1920s, a doctoral thesis in the 1970s, or a JSON file in the 2020s — is always a translation, always a reduction along some dimensions and an augmentation along others. What JSON offers that prose does not is queryability: the ability to ask computational questions of the data. How many generations separate two living cousins? Which chefferie has the most descendants in the current generation? When did the family's geographic center of gravity shift from rural to urban? These are questions that a narrative genealogy makes difficult to answer but that a structured data file makes trivial.

The point is not that JSON replaces oral tradition or written narrative. It is that it adds a layer — a layer that is persistent, versionable, collaborative, and machine-readable. It is preservation in a register that complements rather than supplants the registers that came before.

---

Seven generations is not, by the standards of European aristocratic genealogies, an extraordinary depth. But it is extraordinary in a context where colonial disruption, forced labor, two world wars fought partly on African soil, and the upheavals of independence conspired to scatter families and sever threads of memory. To have maintained this chain — from Nandjo in the 1770s to the present — is itself an achievement of collective will. To encode it now, in a format that invites collaboration and resists decay, is to make a bet on the next seven generations.

Whether they will read JSON is, of course, uncertain. Formats change; platforms rise and fall. But the structure of the data — parent, child, date, place — is simple enough to survive any number of format migrations. And the commitment encoded in the act of building the file — the statement that this family's history matters enough to be rendered precisely, to be maintained carefully, to be shared openly — that commitment transcends any particular technology.

What remains, after all, when the last server shuts down and the last format becomes unreadable? Perhaps only the habit of preservation itself — the practice, passed from generation to generation, of refusing to let the names be lost.

Is that not what lineage has always meant?
