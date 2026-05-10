---
layout: post
title: "Ce que les registres fonciers enseignent sur la confiance dans les logiciels"
date: 2026-04-01
categories: [writing]
tags: [essay]
season: "Spring 2026"
number: II
excerpt: "Le schéma de la base de données importe moins que les accords politiques qu'il encode. Construire un système cadastral dans des contextes où le foncier est contesté, c'est découvrir que les problèmes techniques les plus difficiles sont des problèmes sociaux déguisés."
lang: fr
---

Il existe une catégorie de logiciels dont la difficulté réelle ne réside ni dans l'architecture technique, ni dans la performance des requêtes, ni dans l'élégance du code — mais dans la nature même de ce que le système prétend représenter. Le registre foncier appartient à cette catégorie. Un cadastre n'est pas, contrairement à ce que son apparence technique pourrait suggérer, un simple système d'information géographique adossé à une base de données relationnelle. C'est une déclaration politique matérialisée en logiciel : une affirmation, sanctionnée par l'autorité publique, de qui possède quoi, où commencent et où finissent les limites d'un terrain, et selon quelle chaîne de transactions cette possession s'est constituée.

En Afrique centrale, cette déclaration est rarement consensuelle. Le foncier y est le lieu de convergence de systèmes juridiques incompatibles — le droit coutumier, qui reconnaît des droits d'usage collectifs transmis oralement à travers les générations ; le droit colonial, qui a superposé un régime d'immatriculation individuelle inspiré du système Torrens ; et le droit postcolonial, qui a tenté, avec un succès variable, de synthétiser ces héritages en un cadre unifié. Construire un logiciel cadastral dans ce contexte, c'est être confronté immédiatement à une vérité que les ingénieurs préfèrent généralement ignorer : le schéma de la base de données importe moins que les accords politiques qu'il encode.

---

Lorsqu'on conçoit un système cadastral multi-locataire déployé sur AWS — avec ses couches de GeoJSON pour la représentation spatiale, ses API REST pour l'interopérabilité, son architecture SaaS pour la mutualisation des coûts entre collectivités — on pourrait croire que les défis principaux sont d'ordre technique. Comment assurer la précision géométrique des parcelles ? Comment gérer les conflits de superposition spatiale ? Comment garantir la cohérence transactionnelle lorsque plusieurs opérateurs modifient simultanément le registre ? Ces questions sont réelles et non triviales. Mais elles sont, en dernière analyse, des problèmes résolus — ou du moins des problèmes pour lesquels la littérature et l'industrie offrent des solutions éprouvées.

Le véritable défi est ailleurs. Il est dans la question suivante : pourquoi une collectivité territoriale, un chef traditionnel, un préfet, un notaire, un citoyen, accepteraient-ils de faire confiance à ce système ? Pourquoi y inscriraient-ils des informations dont la sensibilité politique est extrême — des informations qui, une fois enregistrées, deviennent opposables, citables dans un tribunal, susceptibles de remettre en cause des arrangements fonciers qui perdurent depuis des décennies ?

La réponse n'est pas technique. Elle ne réside pas dans la robustesse du chiffrement, ni dans la disponibilité du service, ni dans la conformité aux normes ISO. Elle réside dans un ensemble de conditions institutionnelles que le logiciel ne peut pas créer mais sans lesquelles il reste une coquille vide : la légitimité de l'autorité qui déploie le système, la transparence des règles de gouvernance des données, la garantie que le registre ne sera pas instrumentalisé au profit d'une faction politique, et la certitude que les informations enregistrées ne disparaîtront pas lors du prochain changement d'administration.

---

Cette observation — que les problèmes techniques les plus difficiles sont des problèmes sociaux déguisés — n'est pas nouvelle. Elle a été formulée, sous diverses formes, par tous ceux qui ont tenté de déployer des systèmes d'information dans des contextes institutionnels fragiles. Mais elle mérite d'être reformulée avec précision, parce que l'industrie technologique continue de produire des solutions cadastrales qui traitent le foncier comme un problème essentiellement géométrique et transactionnel — comme si la difficulté principale était de dessiner correctement les parcelles plutôt que de construire les conditions de légitimité qui permettent aux citoyens d'accepter ce qui est dessiné.

Un polygone GeoJSON représentant une parcelle n'a aucune autorité intrinsèque. Il acquiert son autorité — sa capacité à être invoqué comme preuve, à trancher un litige, à sécuriser un investissement — uniquement par l'intermédiaire d'un cadre institutionnel qui le reconnaît comme valide. Le logiciel est un véhicule, non une source de légitimité. Et pourtant, la manière dont le logiciel est conçu influence profondément la possibilité même de cette légitimité. Un système opaque, dont les règles de modification sont incompréhensibles pour les utilisateurs non techniques, dont les données sont stockées dans une juridiction étrangère sans accord de souveraineté, dont le code source est propriétaire et non auditable — un tel système rend la confiance institutionnelle plus difficile à construire, indépendamment de sa qualité technique.

---

C'est ici que l'architecture technique redevient pertinente — non pas comme fin en soi, mais comme condition nécessaire de la confiance. Le choix d'une architecture multi-locataire, par exemple, n'est pas seulement une décision d'efficacité économique. C'est une décision de gouvernance : chaque collectivité dispose de son espace de données isolé, avec ses propres règles d'accès, ses propres administrateurs, sa propre politique de rétention. Le multi-tenant bien conçu est une métaphore technique de l'autonomie administrative — il dit, en langage d'infrastructure : « vos données vous appartiennent, même si elles cohabitent physiquement avec celles de vos voisins sur les mêmes serveurs. »

De même, le choix de GeoJSON comme format de représentation spatiale n'est pas neutre. C'est un format ouvert, lisible par un humain compétent, interopérable avec l'ensemble de l'écosystème géospatial mondial. Il dit : « vos données ne sont pas captives de ce système. Elles peuvent être exportées, vérifiées indépendamment, migrées vers un autre système si celui-ci cesse de mériter votre confiance. » Cette portabilité — cette absence de verrouillage — est elle-même un mécanisme de construction de la confiance. On fait plus facilement confiance à un système dont on sait qu'on peut partir.

---

L'expérience de la construction d'un tel système enseigne une humilité que la formation d'ingénieur ne transmet pas toujours. Elle enseigne que la compétence technique, aussi poussée soit-elle, est une condition nécessaire mais radicalement insuffisante. Que le déploiement réussi d'un cadastre numérique dépend autant — sinon davantage — de la qualité des processus de consultation communautaire, de la formation des agents territoriaux, de la négociation avec les autorités coutumières, que de la qualité du code ou de la résilience de l'infrastructure cloud.

Elle enseigne également que le temps est un facteur irréductible. La confiance institutionnelle ne se décrète pas ; elle se construit par l'accumulation d'interactions positives sur une durée longue. Un système cadastral qui fonctionne correctement pendant un an inspire une confiance modeste. Le même système, fonctionnant correctement pendant dix ans — survivant aux changements d'administration, aux crises budgétaires, aux évolutions technologiques — inspire une confiance structurelle. Le logiciel, dans ce domaine, ne se déploie pas : il s'enracine.

Et c'est peut-être là la leçon la plus générale que les registres fonciers enseignent à quiconque construit des logiciels pour des institutions publiques : la valeur d'un système se mesure moins à sa sophistication technique qu'à sa capacité à devenir, avec le temps, une infrastructure de confiance — un objet dont la fiabilité est tenue pour acquise, dont la disparition serait inconcevable, et dont l'autorité découle non pas de la technologie qu'il emploie mais de la constance avec laquelle il a servi ceux qui dépendent de lui.

Le code, en définitive, n'est que le commencement. La question qui persiste est celle-ci : que faut-il construire autour du code pour que les institutions acceptent d'y déposer leur confiance ?
