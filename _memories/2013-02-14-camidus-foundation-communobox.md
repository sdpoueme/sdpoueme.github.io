---
layout: post
title: "Camidus Foundation — CommunoBox: Postal Codes & Cadastral Maps for Cameroon"
date: 2013-02-14
tags: [urbanization, cameroon, cadastre, innovation]
season: "Anno XIII"
lang: en
author: "Serge Poueme"
wayback_url: "https://camidusfoundation.wordpress.com/"
excerpt: "How do you deliver mail in a city with no addresses? The Camidus Foundation's CommunoBox project tackled postal coverage in Cameroon — and discovered that the real problem was land registration."
---

The Camidus Foundation was a non-profit organization devoted to innovation management in Central Africa. We believed in the critical role engineering plays during the industrialization process of nations by contributing to building disruptive innovations that transform our lives. The Foundation worked with developing nations to help foster social and technological innovation in education, healthcare, and urbanization.

CommunoBox was our flagship project — an attempt to build a postal addressing system for Cameroon. What follows is the story of that project, told through three articles published in 2013.

---

## The Issue

At global scale mail distribution is still a critical activity but 353 millions of people still don't have access to postal services. 200 millions of these people live in Africa.

In Africa, 50% of the population rely on a postal office to retrieve mail, 21.1% receive mail at home and 29.7% of the population still lack access to postal services.

In Cameroon, the population has reached 20,129,878 inhabitants in 2012 but there are only 80,000 registrations to the postal office box service.

One of the main problems Cameroon is facing is the difficulty to properly assign physical addresses to residents in urban areas. As a direct consequence postal delivery at home is not always possible.

### The Challenge

How can we tackle the issue of physical postal address? How can we make sure residents get postal delivery delivered at home?

### The Motivations

Resolving the problem of physical addressing opens the door to several other improvements:

1. It can help building faster census of the population
2. It helps organizing urban areas more efficiently
3. It creates jobs in the postal service industry
4. It puts Cameroon on the map when it comes to e-commerce

---

## Building a Postal Code for Citizens of Cameroon

When the Camidus Foundation initiated the CommunoBox project, its team was aware about the strategic importance of postal addresses for sovereign states, but throughout research it came across the Addressing the World Initiative, a major project undertaken by the Universal Postal Union to make sure every citizen around the globe gets access to a postal address in the near future.

Universal Postal Union is a UN agency that foresees cooperation between countries in the domain of postal services. By making sure postal products and services can interconnect worldwide, UPU is not only an advisory and mediating agency but also a technical body that maintains standards for mail exchanges and stimulates growth in the postal services industry.

The white paper states that: "Addresses facilitate the provision of public and private services, improving the response of aid and emergency services in tackling disease and natural disasters for example while fostering social and economic development. Benefits extend across borders, contributing to the global well-being. As such, address infrastructure can serve as a basic foundation for the attainment of the United Nations Millennium Development Goals and other global aims."

### What Did We Achieve

After several months of research and analysis, we were able to familiarize ourselves with the postal addressing methodology proposed by UPU. We also found several open source projects that aim to democratize maps and making them available to end users globally. OpenStreetMap.org emerged as one of the leading projects in the area, allowing end users to download maps in various formats and feeding them to a Geographical Information System (GIS).

We selected Quantum Lisboa as GIS for the project and started running it from a cloud server. Around geographical analysis, we started to build partial postal codes that uniquely identify most of the cities in Cameroon.

### The Postal Code Structure

Cameroon's administrative structure is divided in regions. Each region is composed of departments, which in turn are made of districts and districts are usually built around city councils. Villages can also be found inside a district and alike urban areas they are managed by traditional chiefs. Hence, there is a mix of modern and traditional subdivisions in Cameroon.

Since all the villages located around a district can be considered part of the district itself, one of the first decisions we made is to partially structure the postal code around identifiers for regions, departments and districts. To identify regions, the preferred legal taxonomy is definitely the one used for cars' registration plates where a region is represented by two letters; e.g: CE refers to CENTRE region. Using a similar approach, we decided to identify departments with digits (1,2,3,..) and districts with letters (A,B,C…).

---

## City Codes & Cadastral Map

Within a postal address, a district code will locate in which region, department and city council a specific postal item should be routed. But how do we reach individuals or entities inside a city? Well, the easiest answer would be to know where they reside and this is where all the challenge lies.

Over the past years, Cameroon has not promoted any major urbanization plans resulting in many anarchic areas appearing because of intense economic or human activity concentration. Cities in Cameroon can be seen as a mix of planned and unplanned areas; sometimes serving more than one purpose at the time (residential, commercial, industrial,…).

### The Cadastral Problem

One of the major differences between planned and unplanned areas is the delimitation of land parcels and the identification of their owners. While in planned areas, it is possible to know the boundaries of each land parcel and their legal owners, it is not possible in unplanned areas who instead feature a higher than usual level of structures on the same parcels.

We believe that to build a sustainable postal addressing system, we should first tackle cadastral issues. There are two solutions we envision; first, a tool to register land parcels more efficiently and second, encourage people to register their land parcels.

Even if those tasks are traditionally performed by the government, we can still contribute by:

1. Building an open platform for land registration.
2. Providing the technology infrastructure required to run the platform.
3. Building capacity in order for government officials to operate the platform.
4. Supporting the government in the evolution of the platform.

---

## What Came After

This project — the attempt to build postal codes for a country that lacked them — led directly to the realization that land registration was the deeper, harder problem. You cannot address a building if you do not know who owns the land it sits on. You cannot route a letter to a house if the house has no legal existence in any registry.

From CommunoBox emerged the cadastral platform that would occupy the next decade of work — a multi-tenant SaaS for land parcel management, built on GeoJSON, PostGIS, and the conviction that the hardest technical problems in urban infrastructure are, at their root, problems of institutional trust.

---

*Originally published on [Camidus Foundation](https://camidusfoundation.wordpress.com/)*
