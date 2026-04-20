# Design System Strategy: The Technical Architect

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Technical Architect."** 

This isn't just a portfolio; it’s a high-end digital dossier. We are moving away from the "template" look of standard engineer portfolios—which often rely on rigid grids and heavy borders—toward a sophisticated, editorial experience. The goal is to balance the raw, functional aesthetic of an IDE with the breathing room and prestige of a luxury architectural firm.

By utilizing intentional asymmetry, wide margins, and deep tonal layering, we signal seniority. We don't need to shout with loud animations; we command attention through precision, "ghost" elements, and a masterful use of negative space.

## 2. Colors & Tonal Depth
The palette is built on a foundation of deep, layered neutrals punctuated by a high-energy "Electric Cyan" primary.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. Layout boundaries must be established exclusively through background color shifts. For example, a project showcase section using `surface-container-low` should sit directly against the `background` (#111316) to create a soft, edge-less transition.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the surface tiers to create "nested" depth:
- **Level 0 (Base):** `background` (#111316) for the overall canvas.
- **Level 1 (Subtle Inset):** `surface-container-low` (#1a1c1f) for large content blocks or sections.
- **Level 2 (Lifted Element):** `surface-container` (#1e2023) for interactive cards.
- **Level 3 (Focal Point):** `surface-container-high` (#282a2d) for modals or floating technical drawers.

### The "Glass & Gradient" Rule
To escape the "flat" feel of standard UI, use **Glassmorphism** for navigation bars and floating action menus. Use semi-transparent versions of `surface` with a `20px` backdrop-blur. 
*   **Signature Texture:** For primary CTAs or Hero backgrounds, apply a subtle linear gradient from `primary` (#a5e7ff) to `primary-container` (#00d2ff) at a 135-degree angle. This provides a "glowing" tech-forward soul to the interface.

## 3. Typography: Editorial Engineering
We pair the humanistic authority of **Inter** with the technical precision of **Space Grotesk** (label-md/sm) to lean into the engineering vibe.

*   **Display & Headline (Inter):** Use `display-lg` for hero statements. Tighten the letter-spacing by `-0.02em` to create a "senior-level" authoritative feel.
*   **Body (Inter):** Keep `body-lg` at `1rem` for maximum readability. This is where the engineering complexity is explained; it must feel effortless to consume.
*   **Technical Labels (Space Grotesk):** Use these for technical metadata—programming languages, "Status: Available," or timestamps. These should be treated like annotations on a blueprint: small, precise, and often in `on-surface-variant` (#bbc9cf) to distinguish them from narrative text.

## 4. Elevation & Depth
We define hierarchy through **Tonal Layering** rather than traditional structural lines.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section. The contrast is barely there—it's a "whisper" of a change—which conveys a premium, high-end sensibility.
*   **Ambient Shadows:** For floating elements (like a "Copy Code" button or a Mobile Nav), use a shadow with a blur of `32px`, offset by `12px` on the Y-axis, at `6%` opacity. The shadow color should be a tinted version of `background` to avoid a muddy look.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline-variant` (#3c494e) at **20% opacity**. It should be felt, not seen.
*   **Backdrop Blur:** Any element utilizing `surface-variant` for an overlay should have a `12px` backdrop blur to maintain the "frosted glass" tech aesthetic.

## 5. Components

### Buttons
*   **Primary:** High-roundedness (`full`). Background is the `primary` gradient. Text is `on-primary` (#003543).
*   **Secondary:** No background. Use a `Ghost Border` (outline-variant @ 20%). On hover, fill with `surface-container-highest` (#333538).
*   **Tertiary:** Pure text using `primary` color. Used for "Read More" or "View Source" links within technical blocks.

### Cards (Project & Experience)
*   **Constraint:** No divider lines. Use `surface-container-low` as the card base. 
*   **Spacing:** Use `2rem` (32px) internal padding to ensure the content feels "expensive" and uncrowded.
*   **Interaction:** On hover, the card should transition its background to `surface-container` and apply a subtle `primary` glow (2px outer blur).

### Technical Chips
*   **Style:** Small, `md` (0.75rem) roundedness. 
*   **Colors:** Use `secondary-container` (#374c56) background with `on-secondary-container` (#a6bcc7) text. This keeps the technical tags "quiet" compared to the primary actions.

### Input Fields & Search
*   **Style:** Minimalist. `surface-container-lowest` background. 
*   **Focus State:** Instead of a thick border, use a `1px` `primary` bottom-border only, or a subtle `primary` outer glow to signal the "active code line."

### Engineering Timeline
*   A custom component for work history. Use a single vertical line in `outline-variant` @ 15% opacity. The "nodes" on the timeline should be small `0.5rem` circles in `primary`, creating a "circuit board" visual metaphor.

## 6. Do’s and Don’ts

### Do:
*   **Do** use extreme whitespace (e.g., 120px to 160px) between major sections to emphasize the "Senior" status through confidence.
*   **Do** use `Space Grotesk` for anything that feels like "Metadata" (dates, git hashes, file sizes).
*   **Do** use asymmetry. Shift your main content 1/3 to the right and use the left 1/3 for technical annotations.

### Don’t:
*   **Don't** use pure black (#000000). Always use the `background` (#111316) to maintain tonal depth.
*   **Don't** use 100% opaque borders. They clutter the UI and feel "junior."
*   **Don't** use bright red for errors unless it's a critical system failure. Use `error_container` (#93000a) for a more integrated, sophisticated warning state.
*   **Don't** crowd the "Code" font. Give monospaced labels generous letter-spacing (+0.05em) so they look intentional, not like a mistake.