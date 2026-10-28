---
layout: default
title: Học hỏi
permalink: /learning/
---

<section class="section container page-top">
  <div class="section-head">
    <nav class="breadcrumb"><a href="{{ '/library/' | relative_url }}">Thư viện</a> / <span>Học hỏi</span></nav>
    <h1>📚 Học hỏi</h1>
    <p>Những ghi chép và bài viết về lập trình mình đã tổng hợp.</p>
  </div>

  <div class="post-grid">
    {% for post in site.posts %}
    <a href="{{ post.url | relative_url }}" class="post-card">
      {% if post.categories %}
      <div class="post-card-tags">
        {% for cat in post.categories limit:2 %}<span class="tag">{{ cat }}</span>{% endfor %}
      </div>
      {% endif %}
      <h3>{{ post.title }}</h3>
      <p class="post-card-excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
      <p class="post-card-meta">{{ post.date | date: "%d/%m/%Y" }}</p>
    </a>
    {% endfor %}
  </div>
</section>
