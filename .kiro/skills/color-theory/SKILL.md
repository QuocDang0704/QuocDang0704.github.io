---
name: color-theory
description: Build a balanced, accessible color palette with a primary, neutrals, and semantic colors, applying the 60/30/10 rule and sufficient contrast. Use when colors clash, the palette feels random, or contrast is too low.
---

## Color theory for UI

### Build a palette
- **Neutrals first.** A ramp of grays (background, surfaces, borders, text) carries ~90%
  of a UI. Get these right before adding color.
- **One primary/brand color** with tints and shades (hover, active, subtle backgrounds).
- **One accent** used sparingly for highlights.
- **Semantic colors**: success (green), warning (amber), error (red), info (blue).

### The 60/30/10 rule
- 60% dominant (neutral background/surfaces)
- 30% secondary (text, containers)
- 10% accent (primary actions, highlights)
Overusing the brand color kills emphasis — restraint makes the 10% pop.

### Contrast & accessibility
- Text must meet WCAG AA: **4.5:1** normal, **3:1** large text and UI components.
- Never rely on color alone to convey meaning (add icon/label/pattern).
- Test both light and dark themes; they need separate tuned values, not just inverted.

### Practical tips
- Use HSL/OKLCH to derive consistent tints/shades from one hue.
- Desaturate slightly for dark mode to avoid vibration on dark backgrounds.

### Review questions
- Does body text hit 4.5:1 contrast on its background?
- Is the brand color reserved for the few things that matter most?
- Is meaning ever conveyed by color only?
