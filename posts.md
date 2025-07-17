---
layout: page
title: All Posts
description: Complete archive of articles on technology, innovation, and society
permalink: /posts/
---

## All Articles

Explore all articles across urban intelligence, gaming evolution, and space exploration.

<div class="posts-archive">
  {% for post in site.posts %}
  <article class="post-preview">
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <div class="post-meta">
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %-d, %Y" }}</time>
      {% if post.categories.size > 0 %}
      <span>in 
        {% for category in post.categories %}
          {% assign category_name = category | replace: '-', ' ' | capitalize %}
          {% if forloop.last %}{{ category_name }}{% else %}{{ category_name }}, {% endif %}
        {% endfor %}
      </span>
      {% endif %}
      <span>{{ post.content | number_of_words | divided_by: 200 | ceil }} min read</span>
    </div>
    <p>{{ post.excerpt | strip_html | truncate: 150 }}</p>
    {% if post.tags %}
    <div class="post-tags">
      {% for tag in post.tags limit:5 %}
        <span class="tag">#{{ tag }}</span>
      {% endfor %}
    </div>
    {% endif %}
  </article>
  {% endfor %}
</div>

<style>
  .posts-archive {
    margin-top: var(--space-8);
  }
  
  .post-preview {
    border-bottom: 1px solid var(--color-border);
    padding-bottom: var(--space-6);
    margin-bottom: var(--space-8);
  }
  
  .post-preview:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
  
  .post-preview h3 {
    margin-bottom: var(--space-3);
  }
  
  .post-preview h3 a {
    color: var(--color-text-primary);
    text-decoration: none;
  }
  
  .post-preview h3 a:hover {
    color: var(--color-primary);
  }
  
  .post-preview .post-meta {
    display: flex;
    gap: var(--space-4);
    flex-wrap: wrap;
    color: var(--color-text-muted);
    font-size: var(--text-sm);
    margin-bottom: var(--space-4);
  }
  
  .post-preview p {
    color: var(--color-text-secondary);
    margin-bottom: var(--space-4);
  }
  
  .post-tags {
    display: flex;
    gap: var(--space-2);
    flex-wrap: wrap;
  }
</style>
