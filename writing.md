---
layout: default
title: "Writing · Écriture"
description: "Essays on persistence, heritage, trust, and the systems we inhabit."
permalink: /writing/
---

<section class="section">
  <div class="section-label">Writing <span class="bilingual">· Écriture</span></div>
  {% assign sorted_writing = site.writing | sort: "date" | reverse %}
  {% include post-list.html posts=sorted_writing %}
</section>
