---
layout: default
title: "Serge Poueme — A collection of thoughts"
description: "Essays on technology, cities, and the systems that connect them."
permalink: /
---

<section class="hero">
  <h1>Writing on technology, cities, and the systems that connect them.</h1>
  <p class="intro">I am a software engineer exploring how intelligent infrastructure, artificial intelligence, and urban systems are reshaping the way we live. This is where I think in public—preserving ideas that I believe will outlive any single platform or era.</p>
</section>

<div class="divider"><hr></div>

<section class="section">
  <div class="section-label">Writing <span class="bilingual">· Écriture</span></div>
  {% include post-list.html posts=site.writing %}
</section>

<div class="divider"><hr></div>

<section class="section">
  <div class="section-label">Technology <span class="bilingual">· Technologie</span></div>
  {% include post-list.html posts=site.technology %}
</section>

<div class="divider"><hr></div>

<section class="section">
  <div class="section-label">Archives <span class="bilingual">· Archives</span></div>
  <p class="section-intro">Earlier writing from 2011 — when this blog first existed on WordPress. Each post features a speculative fiction prelude imagining how the technology might evolve.</p>
  <p class="section-intro" style="margin-top: 12px; font-size: 14px; color: var(--text-muted);">Earlier still, <a href="https://web.archive.org/web/20090331220212/http://aferkiwvidi.ca/">AferkiwVidi</a> (~2008) was a Pan-African cinema blog — co-written with <strong>Huguette Yere</strong>.</p>
  <img src="{{ '/assets/images/aferkiwvidi-logo.jpg' | relative_url }}" alt="AferkiwVidi logo" style="max-width: 120px; margin: 12px 0; opacity: 0.8;">
  <ul class="post-list">
    {% assign archive_posts = site.posts | where: "archive", true | sort: "date" | reverse %}
    {% for post in archive_posts %}
    <li>
      <a href="{{ post.url | relative_url }}">
        <div class="post-number">{{ post.number }}</div>
        <div class="post-title">{{ post.title }}</div>
        {% if post.author and post.author != "Serge Poueme" %}<div class="post-author">par {{ post.author }}</div>{% endif %}
        <div class="post-excerpt">{{ post.excerpt | strip_html | truncate: 200 }}</div>
        <div class="post-meta">
          <span class="tag">{{ post.tags | first | capitalize }}</span>
          <span>{{ post.season }}</span>
        </div>
      </a>
    </li>
    {% endfor %}
  </ul>
</section>
