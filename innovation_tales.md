---
layout: page
title: Innovation Tales
permalink: /innovation_tales/
menu: true
---

# Innovation Tales

Welcome to Innovation Tales, where I explore various aspects of technology and innovation across different domains.

## Categories

### [Urban Intelligence](/innovation_tales/urban-intelligence/)
Exploring smart cities, urban planning, and how technology is reshaping our urban environments.

### [Gaming](/innovation_tales/gaming/)
Insights into the world of gaming, interactive entertainment, and the future of play.

### [Space Exploration](/innovation_tales/space-exploration/)
Discoveries, technologies, and visions for humanity's journey beyond Earth.

## Recent Articles

{% assign innovation_posts = site.posts | where_exp: "post", "post.categories contains 'innovation'" %}
{% for post in innovation_posts limit:5 %}
  <div class="post-preview">
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <p class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</p>
    <p>{{ post.excerpt }}</p>
    <a href="{{ post.url | relative_url }}">Read more...</a>
  </div>
{% endfor %}
