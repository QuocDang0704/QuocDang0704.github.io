---
layout: default
title: Thư viện
permalink: /library/
---

<section class="section container page-top">
  <div class="section-head center">
    <h1>Thư viện</h1>
    <p>Chọn một mục để bắt đầu khám phá.</p>
  </div>
  <div class="cards cards-3">
    <a href="{{ '/learning/' | relative_url }}" class="card card-learning">
      <div class="card-icon">📚</div>
      <h3>Học hỏi</h3>
      <p>Tổng hợp các bài viết kỹ thuật: Java, Lambda, SOLID, UML Diagram, công cụ lập trình...</p>
      <span class="card-cta">{{ site.posts | size }} bài viết →</span>
    </a>
    <a href="{{ '/entertainment/' | relative_url }}" class="card card-fun">
      <div class="card-icon">🎮</div>
      <h3>Giải trí</h3>
      <p>Những ứng dụng vui mình tự xây. Hiện có: luyện gõ 10 ngón &amp; kiểm tra tốc độ đánh máy.</p>
      <span class="card-cta">Vào chơi →</span>
    </a>
    <a href="{{ '/library/daily-dev/' | relative_url }}" class="card card-daily">
      <div class="card-icon">📰</div>
      <h3>Đọc thêm</h3>
      <p>Các bài viết lập trình hay mình bookmark trên daily.dev, cập nhật tự động mỗi ngày.</p>
      <span class="card-cta">Xem feed →</span>
    </a>
  </div>
</section>
