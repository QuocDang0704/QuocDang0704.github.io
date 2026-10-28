---
name: responsive-design
description: Make layouts work across mobile, tablet, and desktop using fluid units, sensible breakpoints, and mobile-first CSS. Use when a site breaks on small screens, text overflows, or layout does not adapt.
---

## Responsive design

### Mobile-first approach
- Write base styles for small screens, then add complexity at larger breakpoints with
  `min-width` media queries. This keeps mobile CSS lean.
- Common breakpoints: ~640 / 768 / 1024 / 1280px. Add breakpoints where the design
  breaks, not at arbitrary device sizes.

### Fluid techniques
- Use relative units: `rem` for type/spacing, `%`/`fr`/`minmax()` for layout.
- `clamp(min, preferred, max)` for fluid type and spacing without many media queries.
- CSS Grid `repeat(auto-fit, minmax(240px, 1fr))` for card grids that reflow naturally.
- Images: `max-width: 100%; height: auto;` and `loading="lazy"`.

### Mobile essentials
- Tap targets at least ~44px; adequate spacing between them.
- Collapse multi-column layouts to single column.
- Provide a working mobile navigation (hamburger with keyboard support and focus trap).
- Test landscape and very small (320px) widths.

### Review questions
- Does anything overflow or require horizontal scroll at 320px?
- Do grids collapse gracefully to one column?
- Are tap targets big enough on touch devices?
