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

{% assign all_memories = site.memories | sort: "date" | reverse %}

{% assign era_xvi = "" | split: "" %}
{% assign era_xiv = "" | split: "" %}
{% assign era_xiii = "" | split: "" %}
{% assign era_xi = "" | split: "" %}
{% assign era_viii = "" | split: "" %}
{% assign era_zero = "" | split: "" %}

{% for post in all_memories %}
  {% assign year = post.date | date: "%Y" | plus: 0 %}
  {% if year >= 2016 %}
    {% assign era_xvi = era_xvi | push: post %}
  {% elsif year >= 2014 %}
    {% assign era_xiv = era_xiv | push: post %}
  {% elsif year >= 2013 %}
    {% assign era_xiii = era_xiii | push: post %}
  {% elsif year >= 2011 %}
    {% assign era_xi = era_xi | push: post %}
  {% elsif year >= 2008 %}
    {% assign era_viii = era_viii | push: post %}
  {% else %}
    {% assign era_zero = era_zero | push: post %}
  {% endif %}
{% endfor %}

{% if era_xvi.size > 0 %}
<section class="section">
  <h3 class="post-title" style="margin-bottom: 4px;">Anno XVI — Smart Cities</h3>
  <p class="post-excerpt" style="margin-bottom: 24px; font-style: italic;">2016. Partnering with MEDx.care to build Smart City Governance platforms for public health in Africa.</p>
  <ul class="post-list">
    {% for post in era_xvi %}
    <li>
      <a href="{{ post.url | relative_url }}">
        <div class="post-number">{{ forloop.rindex | prepend: "" }}</div>
        <div class="post-title">{{ post.title }}</div>
        <div class="post-excerpt">{{ post.excerpt | strip_html | truncate: 200 }}</div>
        <div class="post-meta">
          <span class="tag">Fragment</span>
          <span>Anno XVI</span>
        </div>
      </a>
    </li>
    {% endfor %}
  </ul>
</section>
<div class="divider"><hr></div>
{% endif %}

{% if era_xiv.size > 0 %}
<section class="section">
  <h3 class="post-title" style="margin-bottom: 4px;">Anno XIV — Africa Development</h3>
  <p class="post-excerpt" style="margin-bottom: 24px; font-style: italic;">2014. Essays on economic development, Africapitalism, and the role of innovation in Central Africa.</p>
  <ul class="post-list">
    {% for post in era_xiv %}
    <li>
      <a href="{{ post.url | relative_url }}">
        <div class="post-number">{{ forloop.rindex | prepend: "" }}</div>
        <div class="post-title">{{ post.title }}</div>
        <div class="post-excerpt">{{ post.excerpt | strip_html | truncate: 200 }}</div>
        <div class="post-meta">
          <span class="tag">Fragment</span>
          <span>Anno XIV</span>
        </div>
      </a>
    </li>
    {% endfor %}
  </ul>
</section>
<div class="divider"><hr></div>
{% endif %}

{% if era_xiii.size > 0 %}
<section class="section">
  <h3 class="post-title" style="margin-bottom: 4px;">Anno XIII — Camidus Foundation</h3>
  <p class="post-excerpt" style="margin-bottom: 24px; font-style: italic;">2013. A non-profit fostering innovation in Central Africa. The CommunoBox project — building postal codes and a cadastral system for Cameroon.</p>
  <ul class="post-list">
    {% for post in era_xiii %}
    <li>
      <a href="{{ post.url | relative_url }}">
        <div class="post-number">{{ forloop.rindex | prepend: "" }}</div>
        <div class="post-title">{{ post.title }}</div>
        <div class="post-excerpt">{{ post.excerpt | strip_html | truncate: 200 }}</div>
        <div class="post-meta">
          <span class="tag">Fragment</span>
          <span>Anno XIII</span>
        </div>
      </a>
    </li>
    {% endfor %}
  </ul>
</section>
<div class="divider"><hr></div>
{% endif %}

{% if era_xi.size > 0 %}
<section class="section">
  <h3 class="post-title" style="margin-bottom: 4px;">Anno XI — Innovation Tales</h3>
  <p class="post-excerpt" style="margin-bottom: 24px; font-style: italic;">Montréal, 2011. A WordPress blog where each post began with a speculative fiction prelude — imagining how the technology might evolve — followed by analysis, then a "Parallel World" epilogue set in the future.</p>
  <ul class="post-list">
    {% for post in era_xi %}
    <li>
      <a href="{{ post.url | relative_url }}">
        <div class="post-number">{{ forloop.rindex | prepend: "" }}</div>
        <div class="post-title">{{ post.title }}</div>
        <div class="post-excerpt">{{ post.excerpt | strip_html | truncate: 200 }}</div>
        <div class="post-meta">
          <span class="tag">Fragment</span>
          <span>Anno XI</span>
        </div>
      </a>
    </li>
    {% endfor %}
  </ul>
</section>
<div class="divider"><hr></div>
{% endif %}

{% if era_viii.size > 0 %}
<section class="section">
  <h3 class="post-title" style="margin-bottom: 4px;">Anno VIII — AferkiwVidi</h3>
  <p class="post-excerpt" style="margin-bottom: 24px; font-style: italic;">Montréal, 2008. Un espace de réflexion pour le cinéma panafricain — co-written with Huguette Yere. Fragments recovered from the Wayback Machine.</p>
  <ul class="post-list">
    {% for post in era_viii %}
    <li>
      <a href="{{ post.url | relative_url }}">
        <div class="post-number">{{ forloop.rindex | prepend: "" }}</div>
        <div class="post-title">{{ post.title }}</div>
        {% if post.author and post.author != "Serge Poueme" %}<div class="post-author" style="font-size: 13px; color: var(--text-muted); margin-bottom: 4px;">par {{ post.author }}</div>{% endif %}
        <div class="post-excerpt">{{ post.excerpt | strip_html | truncate: 200 }}</div>
        <div class="post-meta">
          <span class="tag">Fragment</span>
          <span>Anno VIII</span>
        </div>
      </a>
    </li>
    {% endfor %}
  </ul>
</section>
<div class="divider"><hr></div>
{% endif %}

{% if era_zero.size > 0 %}
<section class="section">
  <h3 class="post-title" style="margin-bottom: 4px;">Anno Ø — Voyages</h3>
  <p class="post-excerpt" style="margin-bottom: 24px; font-style: italic;">Undated fragments. Travel journals and early observations — written between eras, preserved as found.</p>
  <ul class="post-list">
    {% for post in era_zero %}
    <li>
      <a href="{{ post.url | relative_url }}">
        <div class="post-number">{{ forloop.rindex | prepend: "" }}</div>
        <div class="post-title">{{ post.title }}</div>
        <div class="post-excerpt">{{ post.excerpt | strip_html | truncate: 200 }}</div>
        <div class="post-meta">
          <span class="tag">Fragment</span>
          <span>Anno Ø</span>
        </div>
      </a>
    </li>
    {% endfor %}
  </ul>
</section>
{% endif %}
