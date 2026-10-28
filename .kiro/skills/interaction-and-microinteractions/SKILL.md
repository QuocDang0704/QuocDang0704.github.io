---
name: interaction-and-microinteractions
description: Design states, feedback, and tasteful motion - hover, focus, active, loading, empty, error, and transitions that feel responsive without being distracting. Use when UI feels static, unresponsive, or animations are janky or excessive.
---

## Interaction & microinteractions

Interactions tell users the system heard them. Every action needs feedback.

### Cover all states
For every interactive element, design: **default, hover, focus, active, disabled**,
and where relevant **loading, success, error, empty**. Missing states make a UI feel broken.

### Feedback principles
- Respond within ~100ms to feel instant; show a spinner/skeleton only if >400ms.
- Confirm destructive or important actions; show toasts for background results.
- Use **skeleton screens** over spinners for content-heavy loads (perceived speed).
- Empty states should guide the next action, not just say "no data".

### Motion guidelines
- Keep it quick: 120-250ms for most transitions; ease-out for entering, ease-in for leaving.
- Animate `transform` and `opacity` (GPU-friendly); avoid animating layout properties.
- Motion should have purpose: direct attention, show relationship, soften change.
- Respect `prefers-reduced-motion: reduce` — drop or minimize non-essential animation.

### Review questions
- Does every button have visible hover AND focus states?
- Is there feedback for loading, success, and error?
- Are transitions fast and purposeful, not decorative?
