---
name: accessibility-wcag
description: Audit and fix UI for WCAG accessibility - color contrast, keyboard navigation, focus states, semantic HTML, ARIA, alt text, and reduced motion. Use when reviewing components, pages, or markup for accessibility compliance.
---

## Accessibility (WCAG) review

Full WCAG validation needs manual testing with assistive tech and expert review.
This covers the high-impact checks you can apply directly in code.

### Must-fix checklist
1. **Contrast** — text 4.5:1 (3:1 for large/UI). Check placeholder and disabled states too.
2. **Keyboard** — every interactive element reachable by Tab, operable by Enter/Space,
   with a **visible focus ring** (never `outline: none` without a replacement).
3. **Semantic HTML** — real `<button>`, `<a>`, `<nav>`, `<main>`, headings in order.
   ARIA only where native semantics fall short.
4. **Labels** — every form field has an associated `<label>`; icon-only buttons have
   `aria-label`.
5. **Images** — meaningful `alt`; decorative images use `alt=""`.
6. **Focus management** — focus moves into modals on open and returns on close; no traps.
7. **Motion** — honor `prefers-reduced-motion`; avoid large auto-playing animation.
8. **Target size** — tap targets at least ~44x44px.
9. **Landmarks & structure** — one `<h1>`, logical heading hierarchy, skip-to-content link.

### Common issues to flag
- Clickable `<div>`/`<span>` instead of `<button>`/`<a>`
- Removed focus outline with no visible alternative
- Low-contrast placeholder used as the only label
- Missing `lang` on `<html>`

### Review questions
- Can the whole page be used with keyboard only?
- Is every control's purpose clear to a screen reader?
- Does anything rely on color alone?
