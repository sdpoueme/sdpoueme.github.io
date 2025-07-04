---
layout: default
title: "Serge Poueme - Innovation Tales"
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
    <h2 style="font-size: var(--text-4xl); margin-bottom: var(--space-6); color: white;">Stay Updated</h2>
    <p style="font-size: var(--text-lg); margin-bottom: var(--space-8); color: rgba(255, 255, 255, 0.9);">Get notified when I publish new insights on innovation, technology, and the future. Join the community of forward-thinking readers.</p>
    <form style="display: flex; gap: var(--space-4); max-width: 400px; margin: 0 auto; flex-wrap: wrap;" action="#" method="post">
      <input type="email" name="email" placeholder="Enter your email address" required style="flex: 1; padding: var(--space-4); border: none; border-radius: var(--radius-lg); font-size: var(--text-base); min-width: 250px;">
      <button type="submit" class="btn" style="background: white; color: var(--color-primary); border: none; font-weight: 600; padding: var(--space-4) var(--space-6);">Subscribe</button>
    </form>
    <p style="font-size: var(--text-sm); color: rgba(255, 255, 255, 0.8); margin-top: var(--space-4);">No spam, just quality content. Unsubscribe anytime.</p>
  </div>
</section>

<section style="margin: var(--space-20) 0;">
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-16); align-items: center;">
    <div>
      <h2 style="font-size: var(--text-4xl); margin-bottom: var(--space-6);">About Innovation Tales</h2>
      <p style="font-size: var(--text-lg); margin-bottom: var(--space-6); color: var(--color-text-secondary);">Innovation Tales is where I explore the fascinating intersection of technology and society. As a software engineer with a passion for understanding how emerging technologies reshape our world, I dive deep into the stories behind the innovations that matter.</p>
      <p style="font-size: var(--text-lg); margin-bottom: var(--space-8); color: var(--color-text-secondary);">From the data-driven cities of tomorrow to the virtual worlds we're building today, and the space ventures that will define our future—each story reveals how human creativity and technological capability combine to solve complex challenges.</p>
      <a href="{{ '/about/' | relative_url }}" class="btn btn--outline">Learn More About Me</a>
    </div>
    <div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-6);">
        <div class="card" style="text-align: center; padding: var(--space-6);">
          <div style="font-size: var(--text-3xl); font-weight: 700; color: var(--color-primary); margin-bottom: var(--space-2);">{{ site.posts.size }}</div>
          <div style="color: var(--color-text-secondary); font-size: var(--text-sm);">Articles Published</div>
        </div>
        <div class="card" style="text-align: center; padding: var(--space-6);">
          <div style="font-size: var(--text-3xl); font-weight: 700; color: var(--color-primary); margin-bottom: var(--space-2);">3</div>
          <div style="color: var(--color-text-secondary); font-size: var(--text-sm);">Innovation Domains</div>
        </div>
        <div class="card" style="text-align: center; padding: var(--space-6);">
          <div style="font-size: var(--text-3xl); font-weight: 700; color: var(--color-primary); margin-bottom: var(--space-2);">{{ site.posts | map: 'content' | join: ' ' | number_of_words | divided_by: 200 | ceil }}</div>
          <div style="color: var(--color-text-secondary); font-size: var(--text-sm);">Minutes of Reading</div>
        </div>
        <div class="card" style="text-align: center; padding: var(--space-6);">
          <div style="font-size: var(--text-3xl); font-weight: 700; color: var(--color-primary); margin-bottom: var(--space-2);">{{ site.posts | map: 'tags' | join: ',' | split: ',' | uniq | size }}</div>
          <div style="color: var(--color-text-secondary); font-size: var(--text-sm);">Topics Covered</div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  /* Newsletter form responsive styling */
  @media (max-width: 768px) {
    section[style*="background: linear-gradient"] form {
      flex-direction: column !important;
      align-items: center;
    }
    
    section[style*="background: linear-gradient"] input {
      min-width: auto !important;
      width: 100%;
    }
    
    /* About section responsive */
    section[style*="display: grid; grid-template-columns: 1fr 1fr"] {
      grid-template-columns: 1fr !important;
      gap: var(--space-12) !important;
    }
    
    /* Stats grid responsive */
    div[style*="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-6)"] {
      grid-template-columns: 1fr !important;
      gap: var(--space-4) !important;
    }
    
    /* Hero section adjustments */
    .hero h1 {
      font-size: var(--text-4xl) !important;
    }
    
    .hero p {
      font-size: var(--text-lg) !important;
    }
    
    .hero-cta {
      flex-direction: column;
      align-items: center;
    }
    
    /* Section headers responsive */
    div[style*="display: flex; justify-content: space-between"] {
      flex-direction: column !important;
      text-align: center !important;
      gap: var(--space-4) !important;
    }
  }
  
  /* Enhanced card hover effects */
  .card:hover {
    transform: translateY(-8px) !important;
  }
  
  .post-card:hover {
    transform: translateY(-6px) !important;
  }
  
  /* Smooth animations for stats */
  .card[style*="text-align: center"]:hover {
    transform: translateY(-4px) scale(1.02);
  }
  
  /* Newsletter form enhancements */
  form input:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
  
  form button:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
</style>--space-4);">Innovation Domains</h2>
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
    <h2 style="font-size: var(--text-4xl); margin-bottom: var(
