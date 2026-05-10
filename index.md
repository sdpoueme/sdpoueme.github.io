---
layout: default
title: Home
---

<section class="hero">
  <h1>Writing on technology, cities, and the systems that connect them.</h1>
  <p class="intro">I am a software engineer exploring how intelligent infrastructure, artificial intelligence, and urban systems are reshaping the way we live. This is where I think in public—preserving ideas that I believe will outlive any single platform or era.</p>
</section>

<div class="divider"><hr></div>

<section class="section">
  <div class="section-label">Writing <span class="bilingual">· Écriture</span></div>
  {% include post-list.html posts=site.writing %}
</section>

<div class="divider"><hr></div>

<section class="section">
  <div class="section-label">Technology <span class="bilingual">· Technologie</span></div>
  {% include post-list.html posts=site.technology %}
</section>

<div class="divider"><hr></div>

<section class="section">
  <div class="section-label">Topics <span class="bilingual">· Domaines</span></div>
  <div class="topics-grid">
    <a href="{{ '/topics/urban-intelligence' | relative_url }}" class="topic-item">
      <i class="ph-buildings topic-icon"></i>
      <div>
        <h3>Urban Intelligence</h3>
        <p>Smart cities, IoT platforms, cadastral systems, and the infrastructure of livable places.</p>
      </div>
    </a>
    <a href="{{ '/topics/ai' | relative_url }}" class="topic-item">
      <i class="ph-brain topic-icon"></i>
      <div>
        <h3>AI & Intelligent Systems</h3>
        <p>Predictive maintenance, personal assistants, orchestration frameworks, and production AI.</p>
      </div>
    </a>
    <a href="{{ '/topics/gaming' | relative_url }}" class="topic-item">
      <i class="ph-game-controller topic-icon"></i>
      <div>
        <h3>Gaming & Real-Time</h3>
        <p>Server infrastructure, interactive entertainment, and the economics of virtual worlds.</p>
      </div>
    </a>
    <a href="{{ '/topics/writing' | relative_url }}" class="topic-item">
      <i class="ph-pen-nib topic-icon"></i>
      <div>
        <h3>Essais</h3>
        <p>Reflections on building technology, persistence, heritage, and the systems we inhabit.</p>
      </div>
    </a>
  </div>
</section>

<div class="divider"><hr></div>

<section class="section">
  <div class="section-label">About <span class="bilingual">· À propos</span></div>
  <p class="about-blurb">I am Serge Poueme—a software engineer drawn to the places where technology meets the structure of cities, the logic of intelligent systems, and the long arc of societal change. Born in Foumbot, raised between Yaoundé and Montréal, I have spent years thinking about how infrastructure becomes invisible when it works well, and what it takes to build things that endure. I write here because some ideas deserve a slower medium than a feed. If something resonates, I welcome the conversation: <a href="mailto:sergepoueme@gmail.com">sergepoueme@gmail.com</a>.</p>
</section>
