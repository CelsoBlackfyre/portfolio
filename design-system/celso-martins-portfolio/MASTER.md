# Portfolio design system (master)

Source of truth for this project. Page-specific deviations belong in `pages/<page>.md` and override this file.

## Provenance

Generated with the `ui-ux-pro-max` dataset (`--design-system` for "developer portfolio case study showcase", retried narrower as "dark monochrome editorial developer portfolio") plus targeted domain searches: `typography`, `landing`, `ux`, `gsap`. Reviewed against the `design-taste-frontend` anti-slop rules before adoption.

Dataset queries that produced this system:

```bash
python3 .agents/skills/ui-ux-pro-max/scripts/search.py "developer portfolio case study showcase" --design-system -p "Celso Martins Portfolio" --variance 8 --motion 6 --density 4
python3 .agents/skills/ui-ux-pro-max/scripts/search.py "geometric sans display technical developer" --domain typography
python3 .agents/skills/ui-ux-pro-max/scripts/search.py "portfolio case study proof" --domain landing
python3 .agents/skills/ui-ux-pro-max/scripts/search.py "keyboard focus trap menu" --domain ux
```

## Design read

A developer portfolio for hiring managers and technical leads, in a dark editorial-grotesk language, leaning toward Tailwind v4 utilities with a single-family-plus-mono type system and CSS-driven motion.

## Dials

| Dial | Value | Reason |
| --- | --- | --- |
| Variance | 8 | Asymmetric grids, featured-plus-grid composition, offset gutters |
| Motion | 6 | Fluid CSS: entrance stagger, scroll reveal, hover physics. No pinning or scroll hijack |
| Density | 4 | Standard web rhythm, hairline separators instead of boxes |

## Adopted from the dataset

- **Pattern: Portfolio Grid.** Section order Hero (name/role) > Project Grid > About > Contact. Matches the existing IA, so page slugs and nav labels are unchanged.
- **Color strategy: "Neutral background, let work shine. Accent: minimal."** Confirms a near-monochrome canvas with the accent reserved for actions and one or two emphasis moments.
- **Structure: visible hairlines, asymmetric grid, high contrast, large blocks.** Adopted from the Brutalism profile as structural DNA, not as decoration.
- **Motion: Stagger List, 300-450ms, decelerating ease**, reduced-motion renders the final state immediately.
- **UX: visible focus ring on every interactive control**, and WCAG 2.2 focus-not-obscured, which is implemented as `scroll-padding-top` for the sticky header.
- **UX: pointer cursor on every clickable control**, including `<button>` elements (Tailwind v4 preflight leaves them as the default cursor).

## Deliberate deviations

| Dataset suggestion | What we ship instead | Why |
| --- | --- | --- |
| Trust purple `#7C3AED` primary | Ember crimson `#E0446A`, taken from the BlackFrame brand token `hsl(345 61% 45%)` | Anti-slop rule rejects the AI-purple default. A brand-derived accent is defensible; an arbitrary one is not. |
| Green `#22C55E` CTA accent | Same single ember accent | One accent for the whole page (color consistency lock). Green carries a success meaning we do not need. |
| JetBrains Mono headings | Space Grotesk display, Geist body, Geist Mono labels | "Dark terminal mono" for a developer portfolio is the industry category reflex the anti-slop rules call out. Mono stays, but for labels and metadata only. |
| Sharp 0px corners, "no smooth transitions (instant)" | 12px containers, full-pill interactive, 300-450ms decelerating transitions | The design read is editorial, not brutalist. Instant transitions and mixed radii would fail the shape and motion locks. |
| "Hero + Testimonials + CTA" | Hero > proof (real numbers) > work > about > contact | There are no testimonials, and inventing social proof would be fake evidence. |

## Tokens

### Color (one accent)

| Role | Value | Token |
| --- | --- | --- |
| Canvas | `#07070a` | `--void` |
| Surface | `#0b0b10` | `--ink` |
| Hairline | `rgba(255,255,255,0.08)` | `--line` |
| Hairline strong | `rgba(255,255,255,0.17)` | `--line-strong` |
| Text | `#f6f3f1` | `--fg` |
| Text muted | `#a6a2ae` | `--muted` |
| Text faint | `#6d6979` | `--faint` |
| Accent | `#e0446a` | `--ember` |
| Accent bright | `#ff6f8e` | `--ember-bright` |

The accent is used for: primary CTA hover, active nav underline, the single availability indicator, links inside prose, and one emphasis phrase per page. Nowhere else. No second hue, no gradients between hues.

### Type

| Role | Family | Notes |
| --- | --- | --- |
| Display | Space Grotesk | `-0.03em` tracking, weight 500, line-height 0.98 |
| Body | Geist | 16-17px, line-height 1.7, measure 60-76ch |
| Label / metadata | Geist Mono | 11px, `0.16em` tracking, uppercase |

### Shape

One documented rule: **containers 12px (`--radius-card`), interactive elements full-pill (`--radius-pill`)**. Nothing else. Inputs would take 8px if any are added.

### Motion

- Entrance: 300-450ms, `cubic-bezier(0.16, 1, 0.3, 1)`, translate 16-20px plus opacity.
- Hover: 200-300ms on transform, opacity, and border color only.
- Scroll reveal: `IntersectionObserver` sets `data-visible`; CSS owns the transition.
- `prefers-reduced-motion: reduce` disables entrance, reveal, and indicator animation and renders final states.

## Anti-patterns for this project

- No second accent hue, no violet, no gradient text on display type.
- No decorative status dots. The only dot is the availability indicator.
- No index numbers or section-number eyebrows. The reader can count.
- No cards where a hairline and spacing communicate the same grouping.
- No three equal cards side by side.
- No pills or labels overlaid on images.
- No testimonial, logo wall, or metric that is not verifiable from the repositories.
- No em-dash or en-dash in any visible string, in either language.
