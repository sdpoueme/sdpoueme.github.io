---
layout: page
title: Space Exploration
permalink: /innovation_tales/space-exploration/
---

# Space Exploration

Venturing beyond Earth to understand the cosmos, develop new technologies, and expand human presence in space.

## Topics Covered

- Space Technology Advancements
- Missions and Discoveries
- Commercial Space Industry
- Space Settlement Concepts
- Astronomy and Astrophysics

## Articles

{% assign space_posts = site.posts | where_exp: "post", "post.categories contains 'space-exploration'" %}
{% for post in space_posts %}
  <div class="post-preview">
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <p class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</p>
    <p>{{ post.excerpt }}</p>
    <a href="{{ post.url | relative_url }}">Read more...</a>
  </div>
{% endfor %}
