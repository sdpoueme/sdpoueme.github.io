---
layout: default
title: "Home - Innovation Tales"
description: "Exploring the intersection of technology, innovation, and society through deep dives into urban intelligence, gaming evolution, and space exploration."
---

<section class="hero">
  <div class="hero-content">
    <h1>Innovation Tales</h1>
    <p>Exploring the intersection of technology, innovation, and society through deep dives into urban intelligence, gaming evolution, and space exploration.</p>
    <div class="hero-cta">
      <a href="{{ '/innovation_tales/' | relative_url }}" class="btn btn--primary">Explore Stories</a>
      <a href="{{ '/about/' | relative_url }}" class="btn btn--outline">About Me</a>
    </div>
  </div>
</section>

<section style="margin: var(--space-16) 0;">
  <div class="text-center" style="margin-bottom: var(--space-12);">
    <h2 style="font-size: var(--text-4xl); margin-bottom: var(--space-4);">Innovation Domains</h2>
    <p style="font-size: var(--text-lg); color: var(--color-text-secondary); max-width: 600px; margin: 0 auto;">Dive deep into the technologies and trends reshaping our world across three key domains of innovation.</p>
  </div>
  
  <div class="card-grid">
    <div class="card">
      <div style="width: 60px; height: 60px; margin: 0 auto var(--space-6) auto; background: linear-gradient(135deg, #10b981, #059669); border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center; color: white; font-size: var(--text-2xl);">
        🏙️
      </div>
      <h3 style="text-align: center; margin-bottom: var(--space-4);">Urban Intelligence</h3>
      <p style="text-align: center; margin-bottom: var(--space-6);">Exploring smart cities, urban planning, and how technology is reshaping our urban environments for a sustainable future.</p>
      <div style="text-align: center; margin-bottom: var(--space-6);">
        {% assign urban_posts = site.posts | where_exp: "post", "post.categories contains 'urban-intelligence'" %}
        <span style="color: var(--color-text-muted); font-size: var(--text-sm);">{{ urban_posts.size }} articles</span>
      </div>
      <div style="text-align: center;">
        <a href="{{ '/innovation_tales/urban-intelligence/' | relative_url }}" class="btn btn--ghost">
          Explore Urban Intelligence →
        </a>
      </div>
    </div>

    <div class="card">
      <div style="width: 60px; height: 60px; margin: 0 auto var(--space-6) auto; background: linear-gradient(135deg, #8b5cf6, #7c3aed); border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center; color: white; font-size: var(--text-2xl);">
        🎮
      </div>
      <h3 style="text-align: center; margin-bottom: var(--space-4);">Gaming Evolution</h3>
      <p style="text-align: center; margin-bottom: var(--space-6);">Insights into interactive entertainment, virtual worlds, and how gaming is pioneering the future of digital experiences.</p>
      <div style="text-align: center; margin-bottom: var(--space-6);">
        {% assign gaming_posts = site.posts | where_exp: "post", "post.categories contains 'gaming'" %}
        <span style="color: var(--color-text-muted); font-size: var(--text-sm);">{{ gaming_posts.size }} articles</span>
      </div>
      <div style="text-align: center;">
        <a href="{{ '/innovation_tales/gaming/' | relative_url }}" class="btn btn--ghost">
          Explore Gaming →
        </a>
      </div>
    </div>

    <div class="card">
      <div style="width: 60px; height: 60px; margin: 0 auto var(--space-6) auto; background: linear-gradient(135deg, #f59e0b, #d97706); border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center; color: white; font-size: var(--text-2xl);">
        🚀
      </div>
      <h3 style="text-align: center; margin-bottom: var(--space-4);">Space Exploration</h3>
      <p style="text-align: center; margin-bottom: var(--space-6);">Discovering new frontiers beyond Earth, from commercial space ventures to the technologies shaping humanity's cosmic future.</p>
      <div style="text-align: center; margin-bottom: var(--space-6);">
        {% assign space_posts = site.posts | where_exp: "post", "post.categories contains 'space-exploration'" %}
        <span style="color: var(--color-text-muted); font-size: var(--text-sm);">{{ space_posts.size }} articles</span>
      </div>
      <div style="text-align: center;">
        <a href="{{ '/innovation_tales/space-exploration/' | relative_url }}" class="btn btn--ghost">
          Explore Space →
        </a>
      </div>
    </div>
  </div>
</section>

<section style="margin: var(--space-20) 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-12);">
    <h2 style="font-size: var(--text-4xl); margin: 0;">Latest Insights</h2>
    <a href="{{ '/archive/' | relative_url }}" style="color: var(--color-primary); font-weight: 600; text-decoration: none;">View All Posts →</a>
  </div>
  
  <div class="card-grid">
    {% for post in site.posts limit:6 %}
    <div class="post-card">
      {% if post.image %}
      <div class="post-card__image">
        <img src="{{ post.image | relative_url }}" alt="{{ post.title | escape }}" loading="lazy">
      </div>
      {% else %}
      <div class="post-card__image" style="background: linear-gradient(135deg, var(--color-primary), var(--color-secondary)); display: flex; align-items: center; justify-content: center; color: white; font-size: var(--text-2xl);">
        {% if post.categories contains 'urban-intelligence' %}🏙️
        {% elsif post.categories contains 'gaming' %}🎮
        {% elsif post.categories contains 'space-exploration' %}🚀
        {% else %}💡
        {% endif %}
      </div>
      {% endif %}
      
      <div class="post-card__content">
        <div class="post-card__meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %-d, %Y" }}</time>
          <span>{{ post.content | number_of_words | divided_by: 200 | ceil }} min read</span>
        </div>
        
        <h3 class="post-card__title">
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h3>
        
        <p class="post-card__excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
        
        {% if post.tags %}
        <div class="post-card__tags">
          {% for tag in post.tags limit:3 %}
            <span class="tag">#{{ tag }}</span>
          {% endfor %}
        </div>
        {% endif %}
      </div>
    </div>
    {% endfor %}
  </div>
</section>

<section style="background: linear-gradient(135deg, var(--color-primary), var(--color-secondary)); color: var(--color-text-inverse); padding: var(--space-16) 0; margin: var(--space-20) calc(-1 * var(--space-6)); border-radius: var(--radius-2xl);">
  <div style="text-align: center; max-width: 600px; margin: 0 auto; padding: 0 var(--space-6);">
    <h2 style="font-size: var(--text-4xl); margin-bottom: var(--space-6); color: white;">Stay Updated</h2>
    <p style="font-size: var(--text-lg); margin-bottom: var(--space-8); color: rgba(255, 255, 255, 0.9);">Get notified when I publish new insights on innovation, technology, and the future. Join the community of forward-thinking readers.</p>
    <form style="display: flex; gap: var(--space-4); max-width: 400px; margin: 0 auto; flex-wrap: wrap;" action="#" method="post">
      <input type="email" name="email" placeholder="Enter your email address" required style="flex: 1; padding: var(--space-4); border: none; border
