---
name: component-patterns
description: Design reusable, consistent UI components - buttons, cards, forms, navigation, modals - with clear variants and states. Use when building components or when similar elements look and behave inconsistently across the UI.
---

## Component patterns

Reusable components create consistency and speed. Define each once, with variants.

### General rules
- **Variants, not copies.** A button has variants (primary/secondary/ghost) and sizes,
  not ten hand-styled buttons.
- **Consistent padding/radius/shadow** pulled from tokens across all components.
- **All states defined** (see interaction skill): default/hover/focus/active/disabled.

### Common components
- **Buttons**: one primary per context; clear size and variant system; min 44px height.
- **Cards**: consistent padding, radius, border/shadow; clear title/body/action zones;
  make the whole card clickable if it links somewhere.
- **Forms**: label above field, helper text below, inline validation, clear error state,
  logical tab order, grouped related fields.
- **Navigation**: show current location (active state); keep it consistent across pages;
  accessible mobile menu.
- **Modals/dialogs**: focus trap, Esc to close, backdrop click to dismiss (if safe),
  return focus on close, don't stack modals.
- **Feedback**: toasts for transient info, inline for form errors, banners for persistent.

### Review questions
- Are visually-similar elements actually sharing one component/class?
- Does each component define all its states?
- Is there exactly one primary button per view?
