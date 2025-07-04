---
layout: page
title: Urban Intelligence
permalink: /innovation_tales/urban-intelligence/
---

# Urban Intelligence

Exploring the intersection of technology, data, and urban environments to create smarter, more sustainable cities.

## Topics Covered

- Smart City Initiatives
- Urban Data Analytics
- Sustainable Urban Planning
- Transportation Innovation
- Digital Infrastructure

## Articles

{% assign urban_posts = site.posts | where_exp: "post", "post.categories contains 'urban-intelligence'" %}
{% for post in urban_posts %}
  <div class="post-preview">
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <p class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</p>
    <p>{{ post.excerpt }}</p>
    <a href="{{ post.url | relative_url }}">Read more...</a>
  </div>
{% endfor %}
