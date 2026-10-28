---
name: performance-and-perceived-speed
description: Improve real and perceived front-end performance - asset loading, fonts, images, layout stability, and loading feedback. Use when a page feels slow, janky, shifts on load, or Lighthouse scores are low.
---

## Performance & perceived speed

Perceived speed often matters as much as raw speed. Both are design concerns.

### Real performance
- **Images**: right format (AVIF/WebP), correct size, `loading="lazy"`, explicit
  `width`/`height` or `aspect-ratio` to reserve space.
- **Fonts**: `font-display: swap`, preconnect to font host, limit families/weights,
  self-host or subset when possible.
- **CSS/JS**: ship only what's used; defer non-critical scripts; avoid large blocking bundles.
- **Avoid layout thrash**: animate `transform`/`opacity`, not `width`/`top`/`height`.

### Layout stability (CLS)
- Reserve space for images, ads, embeds, and async content so nothing jumps.
- Avoid injecting content above existing content after load.

### Perceived speed
- Show **skeleton screens** instead of blank space or spinners for content loads.
- Give instant feedback on interaction (<100ms); optimistic UI where safe.
- Load above-the-fold content first; lazy-load the rest.
- Prefetch likely next navigations.

### Review questions
- Does the page reserve space so nothing shifts as it loads?
- Are images sized, lazy-loaded, and in a modern format?
- Is there immediate feedback for every user action?
