---
layout: default
title: Đọc thêm từ daily.dev
permalink: /library/daily-dev/
---

<section class="section container page-top">
  <div class="section-head">
    <nav class="breadcrumb"><a href="{{ '/library/' | relative_url }}">Thư viện</a> / <span>daily.dev</span></nav>
    <h1>📰 Đọc thêm từ daily.dev</h1>
    <p>Những bài viết lập trình mình đánh dấu (bookmark) trên <a href="https://daily.dev" target="_blank" rel="noopener">daily.dev</a>, cập nhật tự động.</p>
  </div>

  {% assign feed = site.data.dailydev %}
  {% if feed.items and feed.items.size > 0 %}
  <div class="post-grid">
    {% for item in feed.items %}
    <a href="{{ item.link }}" class="post-card" target="_blank" rel="noopener">
      {% if item.image and item.image != "" %}
      <div class="dd-thumb"><img src="{{ item.image }}" alt="" loading="lazy"></div>
      {% endif %}
      <div class="post-card-tags"><span class="tag">daily.dev</span></div>
      <h3>{{ item.title }}</h3>
      {% if item.summary and item.summary != "" %}
      <p class="post-card-excerpt">{{ item.summary | truncate: 120 }}</p>
      {% endif %}
      {% if item.date and item.date != "" %}
      <p class="post-card-meta">{{ item.date | date: "%d/%m/%Y" }}</p>
      {% endif %}
    </a>
    {% endfor %}
  </div>
  {% if feed.updatedAt and feed.updatedAt != "" %}
  <p class="dd-updated">Cập nhật lần cuối: {{ feed.updatedAt | date: "%d/%m/%Y %H:%M UTC" }}</p>
  {% endif %}
  {% else %}
  <div class="dd-empty">
    <p>😴 Chưa có bài viết nào để hiển thị.</p>
    <p class="dd-empty-hint">
      {% if feed.reason %}{{ feed.reason }}{% else %}Hãy thiết lập nguồn RSS của daily.dev.{% endif %}
    </p>
  </div>
  {% endif %}
</section>
