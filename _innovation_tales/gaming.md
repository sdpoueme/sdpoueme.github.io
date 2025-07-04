---
layout: page
title: Gaming
permalink: /innovation_tales/gaming/
---

# Gaming Innovation

Exploring the evolving landscape of gaming, interactive entertainment, and virtual experiences.

## Topics Covered

- Game Design Trends
- Virtual and Augmented Reality
- Esports and Competitive Gaming
- Game Development Technologies
- Gaming Communities and Culture

## Articles

{% assign gaming_posts = site.posts | where_exp: "post", "post.categories contains 'gaming'" %}
{% for post in gaming_posts %}
  <div class="post-preview">
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <p class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</p>
    <p>{{ post.excerpt }}</p>
    <a href="{{ post.url | relative_url }}">Read more...</a>
  </div>
{% endfor %}
