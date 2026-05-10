---
layout: post
title: "Ce que les registres fonciers enseignent sur la confiance dans les logiciels"
date: 2026-04-01
categories: [writing]
tags: [essay]
season: "Spring 2026"
number: II
excerpt: "La Banque mondiale estime que 90 % des terres rurales en Afrique subsaharienne ne sont pas documentées. Construire un système cadastral dans ce contexte, c'est découvrir que le pipeline de validation spatiale — détection de collisions, calculs géodésiques, journalisation d'audit — importe moins que les accords institutionnels qu'il encode. Les problèmes techniques les plus difficiles sont des problèmes sociaux déguisés."
lang: fr
---

Il existe une catégorie de logiciels dont la valeur ne réside pas dans l'innovation technique mais dans la confiance institutionnelle qu'ils parviennent à établir. Les registres fonciers — ces systèmes qui documentent qui possède quelle parcelle, avec quelles limites, depuis quelle date — appartiennent à cette catégorie. Leur architecture peut être sophistiquée, leur pipeline de validation peut employer les algorithmes géospatiaux les plus avancés, mais leur utilité finale dépend d'une seule question : les institutions qui les consultent leur font-elles confiance ?

La Banque mondiale, dans son rapport de 2024 sur la gouvernance foncière en Afrique, documente une réalité saisissante : 90 % des terres rurales en Afrique subsaharienne ne sont pas documentées. Moins de 5 % des terres agricoles et au plus 25 % des terres urbaines dans les pays africains disposent de droits documentés. Ce n'est pas un problème technologique — les outils existent depuis des décennies. C'est un problème de confiance. Les registres fonciers africains, note la Banque mondiale, « command little trust due to poor performance and wealth bias in service delivery ». La technologie n'a pas échoué ; c'est l'institution qui a perdu sa crédibilité.

## L'architecture d'un système cadastral

J'ai construit et maintenu pendant plusieurs années une plateforme cadastrale dont l'objectif est de créer des registres spatiaux faisant autorité — des enregistrements de parcelles, de limites, de droits fonciers — pour des municipalités et des gouvernements. L'architecture technique est, dans ses grandes lignes, la suivante : un serveur Java 8 utilisant Jersey 2.x comme framework REST, déployé sur Grizzly HTTP Server pour sa légèreté. L'ORM est ActiveJDBC — un choix délibéré par rapport à Hibernate, car la légèreté du modèle actif convient mieux à un domaine où les entités spatiales ont des comportements complexes qui ne s'expriment pas naturellement dans les annotations JPA. Les opérations géospatiales s'appuient sur GeoTools et le JTS Topology Suite pour les calculs de géométrie, et sur Geographiclib pour les calculs géodésiques précis — des classes comme `Geodesic.java`, `PolygonArea.java` et `GeodesicLine.java` qui traitent la courbure terrestre plutôt que de se contenter de géométrie plane.

Le pipeline de validation spatiale suit un chemin formel : la requête client arrive, le schéma est validé, puis le système effectue une vérification spatiale en deux étapes — détection de collision (la nouvelle parcelle chevauche-t-elle une parcelle existante ?) et validation des limites (les coordonnées forment-elles un polygone valide ?). Si les deux vérifications réussissent, l'insertion en base de données est effectuée avec journalisation d'audit complète. Chaque mutation de chaque parcelle est tracée — qui a modifié quoi, quand, avec quelle justification.

Les données spatiales sont modélisées en GeoJSON MultiPoint, avec des types de parcelles formels — résidentielle, commerciale, industrielle, agricole — et un système de fragmentation et de fusion qui permet de diviser une parcelle en sous-parcelles ou de fusionner des parcelles adjacentes tout en maintenant la cohérence topologique.

## La migration comme acte de patience

Le système frontal a connu une migration significative : de Yii 1.x — le framework PHP avec lequel la première version avait été construite il y a plus d'une décennie — vers Yii 2.x. Cette migration n'était pas motivée par une préférence esthétique pour un framework plus récent. Elle était nécessaire parce que les exigences avaient évolué au-delà de ce que l'architecture originale pouvait accommoder proprement.

Six modules ont été extraits et reconstruits : cadastre (gestion des parcelles), landtenure (droits fonciers), landassets (actifs fonciers), wayleave (servitudes de passage), documents (gestion documentaire), et audit (traçabilité). Chaque module possède ses propres contrôleurs, modèles et vues. Le déploiement est multi-tenant — une table d'organisations isole les données de chaque municipalité cliente — avec Docker orchestrant les services : l'API Java sur le port 8401, l'interface Yii 2.x sur le port 80, un serveur de licences MongoDB sur le port 9000, deux instances MySQL (une pour l'API, une pour le frontend), et Redis pour le cache de sessions.

Le support multilingue — anglais, français, hindi — n'est pas un détail technique mineur. Pour un registre foncier qui doit servir des populations dont les langues administratives diffèrent, l'interface multilingue est une condition de confiance. Un agriculteur qui ne peut pas lire l'acte de propriété que le système génère ne fait pas confiance au système, quelle que soit la sophistication de son pipeline spatial.

## Ce que la technique ne peut pas résoudre

La détection de collision — le moment où le système refuse d'enregistrer une parcelle parce qu'elle chevauche une parcelle existante — est techniquement élégante. JTS calcule l'intersection géométrique, GeoTools transforme les coordonnées entre systèmes de référence, et la réponse API retourne le pourcentage exact de chevauchement et les parcelles affectées. Mais dans la pratique, un chevauchement détecté par le logiciel n'est pas un problème résolu — c'est un conflit révélé. Et la résolution de ce conflit ne dépend pas du logiciel mais de l'institution qui l'opère.

En Afrique centrale, où le droit coutumier et le droit positif coexistent avec des définitions différentes de la propriété foncière, un chevauchement spatial peut signifier : deux systèmes juridiques revendiquent la même terre selon des logiques incompatibles. Le chef coutumier a attribué la parcelle selon la tradition ; l'administration coloniale puis postcoloniale a émis un titre foncier différent. Le logiciel peut détecter cette contradiction. Il ne peut pas la résoudre. La résolution exige une négociation politique que le schéma de base de données — aussi bien normalisé soit-il — ne peut qu'encoder a posteriori.

C'est la leçon fondamentale : le logiciel cadastral le plus techniquement parfait est inutile si l'institution qui l'opère n'a pas la légitimité nécessaire pour que ses enregistrements soient respectés. La confiance dans le registre précède la confiance dans le logiciel. Pas l'inverse.

## Construire pour la confiance institutionnelle

La conférence sur la recherche foncière de la Banque mondiale (avril 2026, Washington DC) pose la question en termes explicites : comment les politiques foncières peuvent-elles favoriser « resilient and equitable growth in Africa » ? La réponse technique est connue — des systèmes spatiaux robustes, des pipelines de validation, des journaux d'audit immuables. Mais la réponse institutionnelle reste largement ouverte : comment un logiciel gagne-t-il la confiance d'une population qui a été trahie par les registres précédents ?

Les choix architecturaux que j'ai faits — la journalisation d'audit exhaustive, le support multilingue, la détection de collision transparente qui explique pourquoi un enregistrement est refusé plutôt que de simplement le rejeter — sont des tentatives de réponse technique à une question sociale. Si le système est transparent dans ses décisions, cohérent dans son application, et accessible dans la langue de l'utilisateur, il crée les conditions minimales de la confiance. Il ne la garantit pas.

Le schéma de la base de données importe moins que les accords politiques qu'il encode. Un champ `ownership_type` qui distingue « coutumier » et « titré » ne résout pas le conflit entre ces deux régimes — mais il reconnaît leur coexistence, ce qui est déjà un acte politique. Un système qui ne modélise que le droit positif nie implicitement le droit coutumier. Un système qui les modélise tous deux crée l'espace conceptuel pour leur réconciliation.

Construire un système cadastral dans des contextes où le foncier est contesté, c'est découvrir — inéluctablement — que les problèmes techniques les plus difficiles sont des problèmes sociaux déguisés en schémas de bases de données. Et que le logiciel conçu pour établir la confiance doit d'abord la mériter auprès des institutions qu'il sert.
