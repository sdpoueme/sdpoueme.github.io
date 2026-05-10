---
layout: default
title: "Memories · Souvenirs"
description: "Earlier writing preserved from Innovation Tales (2011) and AferkiwVidi (2008)."
permalink: /memories/
---

<section class="section">
  <div class="section-label">Memories <span class="bilingual">· Souvenirs</span></div>
  <p class="section-intro">Ideas that preceded this site — preserved here because a thought does not lose its value with age.</p>
</section>

<div class="divider"><hr></div>

<section class="section">
  <h3 class="post-title" style="margin-bottom: 8px;">Innovation Tales · 2011</h3>
  <p class="post-excerpt" style="margin-bottom: 24px;">A WordPress blog where each post began with a speculative fiction prelude — imagining how the technology might evolve — followed by analysis, then a "Parallel World" epilogue set in the future.</p>
  <ul class="post-list">
    {% for post in site.memories %}
    {% assign year = post.date | date: "%Y" | plus: 0 %}
    {% if year >= 2011 %}
    <li>
      <a href="{{ post.url | relative_url }}">
        <div class="post-title">{{ post.title }}</div>
        <div class="post-excerpt">{{ post.excerpt | strip_html | truncate: 200 }}</div>
        <div class="post-meta">
          <span class="tag">{{ post.tags | first | capitalize }}</span>
          <span>{{ post.season }}</span>
        </div>
      </a>
    </li>
    {% endif %}
    {% endfor %}
  </ul>
</section>

<div class="divider"><hr></div>

<section class="section">
  <h3 class="post-title" style="margin-bottom: 8px;">AferkiwVidi · 2008</h3>
  <p class="post-excerpt" style="margin-bottom: 24px;">A Pan-African cinema blog, co-written with Huguette Yere. We documented festivals, profiled filmmakers, and reviewed films from a diaspora perspective in Montréal.</p>
  <ul class="post-list">
    {% for post in site.memories %}
    {% assign year = post.date | date: "%Y" | plus: 0 %}
    {% if year < 2011 %}
    <li>
      <a href="{{ post.url | relative_url }}">
        <div class="post-title">{{ post.title }}</div>
        {% if post.author and post.author != "Serge Poueme" %}<div class="post-author" style="font-size: 13px; color: var(--text-muted); margin-bottom: 4px;">par {{ post.author }}</div>{% endif %}
        <div class="post-excerpt">{{ post.excerpt | strip_html | truncate: 200 }}</div>
        <div class="post-meta">
          <span class="tag">{{ post.tags | first | capitalize }}</span>
          <span>{{ post.season }}</span>
        </div>
      </a>
    </li>
    {% endif %}
    {% endfor %}
  </ul>
</section>
