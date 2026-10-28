---
layout: default
title: Trang chủ
---

<section class="hero">
  <div class="container hero-inner">
    <div class="hero-text">
      <p class="hero-eyebrow">👋 Xin chào, mình là</p>
      <h1 class="hero-title">Quốc Đang</h1>
      <p class="hero-lead">
        Một người thích <strong>lập trình</strong>, viết lách và khám phá công nghệ.
        Đây là góc nhỏ nơi mình chia sẻ kiến thức và tạo ra những thứ vui vẻ.
      </p>
      <div class="hero-actions">
        <a href="{{ '/library/' | relative_url }}" class="btn btn-primary">Khám phá thư viện</a>
        <a href="{{ '/about/' | relative_url }}" class="btn btn-ghost">Về mình</a>
      </div>
      <div class="hero-socials">
        <a href="https://github.com/{{ site.github_username }}" target="_blank" rel="noopener">GitHub</a>
        <span>·</span>
        <a href="https://www.facebook.com/{{ site.facebook_username }}" target="_blank" rel="noopener">Facebook</a>
      </div>
    </div>
    <div class="hero-visual" aria-hidden="true">
      <div class="code-card">
        <div class="code-dots"><span></span><span></span><span></span></div>
        <pre><code><span class="c-key">const</span> <span class="c-var">me</span> = {
  <span class="c-prop">name</span>: <span class="c-str">"Quốc Đang"</span>,
  <span class="c-prop">role</span>: <span class="c-str">"Developer"</span>,
  <span class="c-prop">loves</span>: [<span class="c-str">"code"</span>, <span class="c-str">"học"</span>, <span class="c-str">"game"</span>],
  <span class="c-prop">coffee</span>: <span class="c-key">true</span>
};</code></pre>
      </div>
    </div>
  </div>
</section>

<section class="section container">
  <div class="section-head">
    <h2>Thư viện của mình</h2>
    <p>Mọi thứ được chia thành hai mục rõ ràng để bạn dễ tìm.</p>
  </div>
  <div class="cards cards-2">
    <a href="{{ '/learning/' | relative_url }}" class="card card-learning">
      <div class="card-icon">📚</div>
      <h3>Học hỏi</h3>
      <p>Bài viết về Java, SOLID, UML, công cụ lập trình và nhiều chủ đề kỹ thuật khác.</p>
      <span class="card-cta">Vào xem →</span>
    </a>
    <a href="{{ '/entertainment/' | relative_url }}" class="card card-fun">
      <div class="card-icon">🎮</div>
      <h3>Giải trí</h3>
      <p>Những trò vui mình tự làm. Bắt đầu với bài luyện gõ 10 ngón &amp; kiểm tra tốc độ đánh máy.</p>
      <span class="card-cta">Chơi ngay →</span>
    </a>
  </div>
</section>

<section class="section container">
  <div class="section-head">
    <h2>Bài viết gần đây</h2>
    <a href="{{ '/learning/' | relative_url }}" class="section-more">Tất cả bài viết →</a>
  </div>
  <div class="post-list">
    {% for post in site.posts limit:4 %}
    <a href="{{ post.url | relative_url }}" class="post-item">
      <h3>{{ post.title }}</h3>
      <p class="post-item-meta">{{ post.date | date: "%d/%m/%Y" }}</p>
    </a>
    {% endfor %}
  </div>
</section>
