---
name: design-system-foundations
description: Establish and apply design tokens - a single source of truth for color, typography scale, spacing, radius, shadow, and z-index. Use when starting a new UI, auditing visual inconsistency, or refactoring ad-hoc CSS values into reusable variables.
---

## Design system foundations

A design system starts with **tokens**: named, reusable values. Hard-coded one-off
values (`#3b3b3b`, `17px`, `margin: 13px`) are the root cause of inconsistent UIs.

### Token categories to define first
- **Color**: surface/background, text (primary/secondary/muted), border, brand/primary,
  accent, semantic (success/warning/error/info). Define both light and dark values.
- **Typography**: font families (sans, mono), a modular type scale, weights, line-heights.
- **Spacing**: a single scale (e.g. 4 8 12 16 24 32 48 64). Use it for margin, padding, gap.
- **Radius**: sm / md / lg / full. Pick 2-3, not ten.
- **Shadow (elevation)**: a small set (sm / md / lg) mapped to perceived height.
- **Motion**: duration (fast 120ms, base 200ms, slow 320ms) and easing curves.
- **Z-index**: named layers (header, dropdown, modal, toast) — never random 9999.

### How to apply
1. Declare tokens as CSS custom properties on `:root` (and a `[data-theme="dark"]` block).
2. Reference tokens everywhere; forbid raw hex/px for themeable values.
3. When auditing, grep for raw hex colors and magic numbers, then map them to tokens.

### Checklist
- [ ] No raw hex colors outside the token block
- [ ] Spacing comes from the scale, not arbitrary numbers
- [ ] Light and dark themes both defined from the same token names
- [ ] Each token has a clear semantic name (what it's for, not what it looks like)
