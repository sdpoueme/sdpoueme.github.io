---
layout: default
title: "Memories · Souvenirs"
description: "Fragments from earlier eras — preserved because a thought does not lose its value with age."
permalink: /memories/
---

<section class="section">
  <div class="section-label">Memories <span class="bilingual">· Souvenirs</span></div>
  <p class="section-intro">Fragments from earlier eras of writing — numbered in the order they were found, dated by the year of their creation. A thought does not lose its value with age.</p>
</section>

<div class="divider"><hr></div>

<section class="section">
  <h3 class="post-title" style="margin-bottom: 4px;">Anno XI — Innovation Tales</h3>
  <p class="post-excerpt" style="margin-bottom: 24px; font-style: italic;">Montréal, 2011. A WordPress blog where each post began with a speculative fiction prelude — imagining how the technology might evolve — followed by analysis, then a "Parallel World" epilogue set in the future.</p>
  <ul class="post-list">
    {% assign roman = "VI,V,IV,III,II,I" | split: "," %}
    {% assign idx = 0 %}
    {% for post in site.memories reversed %}
    {% assign year = post.date | date: "%Y" | plus: 0 %}
    {% if year >= 2011 %}
    <li>
      <a href="{{ post.url | relative_url }}">
        <div class="post-number">{{ roman[idx] }}</div>
        <div class="post-title">{{ post.title }}</div>
        <div class="post-excerpt">{{ post.excerpt | strip_html | truncate: 200 }}</div>
        <div class="post-meta">
          <span class="tag">Fragment</span>
          <span>Anno XI</span>
        </div>
      </a>
    </li>
    {% assign idx = idx | plus: 1 %}
    {% endif %}
    {% endfor %}
  </ul>
</section>

<div class="divider"><hr></div>

<section class="section">
  <h3 class="post-title" style="margin-bottom: 4px;">Anno VIII — AferkiwVidi</h3>
  <p class="post-excerpt" style="margin-bottom: 24px; font-style: italic;">Montréal, 2008. Un espace de réflexion pour le cinéma panafricain — co-written with Huguette Yere. Fragments recovered from the Wayback Machine.</p>
  <ul class="post-list">
    {% assign roman2 = "IV,III,II,I" | split: "," %}
    {% assign idx2 = 0 %}
    {% for post in site.memories reversed %}
    {% assign year = post.date | date: "%Y" | plus: 0 %}
    {% if year >= 2008 and year < 2011 %}
    <li>
      <a href="{{ post.url | relative_url }}">
        <div class="post-number">{{ roman2[idx2] }}</div>
        <div class="post-title">{{ post.title }}</div>
        {% if post.author and post.author != "Serge Poueme" %}<div class="post-author" style="font-size: 13px; color: var(--text-muted); margin-bottom: 4px;">par {{ post.author }}</div>{% endif %}
        <div class="post-excerpt">{{ post.excerpt | strip_html | truncate: 200 }}</div>
        <div class="post-meta">
          <span class="tag">Fragment</span>
          <span>Anno VIII</span>
        </div>
      </a>
    </li>
    {% assign idx2 = idx2 | plus: 1 %}
    {% endif %}
    {% endfor %}
  </ul>
</section>

<div class="divider"><hr></div>

<section class="section">
  <h3 class="post-title" style="margin-bottom: 4px;">Anno Ø — Voyages</h3>
  <p class="post-excerpt" style="margin-bottom: 24px; font-style: italic;">Undated fragments. Travel journals and early observations — written between eras, preserved as found.</p>
  <ul class="post-list">
    {% for post in site.memories %}
    {% assign year = post.date | date: "%Y" | plus: 0 %}
    {% if year < 2008 %}
    <li>
      <a href="{{ post.url | relative_url }}">
        <div class="post-number">I</div>
        <div class="post-title">{{ post.title }}</div>
        <div class="post-excerpt">{{ post.excerpt | strip_html | truncate: 200 }}</div>
        <div class="post-meta">
          <span class="tag">Fragment</span>
          <span>Anno Ø</span>
        </div>
      </a>
    </li>
    {% endif %}
    {% endfor %}
  </ul>
</section>
