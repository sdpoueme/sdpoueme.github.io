---
layout: default
title: Home - Serge Poueme
menu: true
---

# Welcome to My Personal Website

This is a space where I share my thoughts on innovation, technology, and more. Feel free to explore the different sections of the site.

## Recent Posts

{% for post in site.posts limit:5 %}
  <div class="post-preview">
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</p>
    <p>{{ post.excerpt }}</p>
    <a href="{{ post.url | relative_url }}">Read more...</a>
  </div>
{% endfor %}
