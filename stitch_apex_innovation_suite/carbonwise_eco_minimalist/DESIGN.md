---
name: CarbonWise Eco-Minimalist
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#3d4a42'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#6d7a72'
  outline-variant: '#bccac0'
  surface-tint: '#006c4a'
  primary: '#006948'
  on-primary: '#ffffff'
  primary-container: '#00855d'
  on-primary-container: '#f5fff7'
  inverse-primary: '#68dba9'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#3f6700'
  on-tertiary: '#ffffff'
  tertiary-container: '#518200'
  on-tertiary-container: '#f9ffea'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#85f8c4'
  primary-fixed-dim: '#68dba9'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#005137'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#acf847'
  tertiary-fixed-dim: '#91db2a'
  on-tertiary-fixed: '#102000'
  on-tertiary-fixed-variant: '#304f00'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
  surface-white: '#FFFFFF'
  border-slate: '#E2E8F0'
  text-main: '#0F172A'
  text-muted: '#64748B'
  eco-impact: '#84CC16'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system embodies an **Eco-Minimalist** aesthetic, merging environmental consciousness with high-tech precision. It is designed to feel institutional yet inspiring, moving away from "crunchy" environmental tropes toward a sleek, data-driven future.

The target audience ranges from students to professionals, requiring a UI that is both gamified and utility-focused. The style leverages **Minimalism** with a **Tactile** edge—using significant whitespace, high-quality typography, and soft, organic layering to make complex emission data feel breathable and actionable. The goal is to evoke feelings of clarity, innovation, and proactive responsibility.

## Colors

The palette is rooted in the "Deep Forest" spectrum.
- **Primary & Secondary:** Emerald tones (#059669, #10B981) represent growth and corporate reliability. Use these for main actions and brand signifiers.
- **Accent (Lime):** The Lime (#84CC16) is reserved exclusively for the "Eco Score" and positive reinforcement. It acts as a "success" state color, highlighting carbon reduction and high-impact achievements.
- **Neutrals:** The background uses a cool Slate 50 (#F8FAFC) to maintain a tech-forward feel, while surfaces remain pure white to maximize contrast and perceived cleanliness. 
- **Borders:** Use subtle Slate 200/300 (#E2E8F0) for hairline borders to define card boundaries without adding visual weight.

## Typography

This design system utilizes **Inter** exclusively to achieve a clean, systematic look that thrives in data-heavy environments. 

- **Hierarchy:** Use tight letter-spacing on larger headlines to create a "contained" and modern look. 
- **Readability:** Body text uses a generous line height (1.5x+) to ensure that scientific or technical descriptions remain accessible to all user tiers.
- **Labels:** Small labels use semi-bold or bold weights with a slight tracking increase to ensure legibility on metadata and category tags.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop (centered 1280px container) and a **Fluid** approach for mobile. 

- **Grid:** Use a 12-column grid for desktop dashboards, allowing for 4-column widgets (side-by-side) or 8-column primary content blocks.
- **Rhythm:** A 4px base unit governs all spacing. Use "Breathable Padding" (typically 24px or 32px) inside cards to prevent data from feeling cramped.
- **Mobile:** Transition to a single-column stack with 16px horizontal margins. Charts should maintain a 1:1 or 4:3 aspect ratio to remain legible on small screens.

## Elevation & Depth

To maintain the "Eco-Minimalist" feel, depth is created through **Tonal Layers** and **Ambient Shadows** rather than heavy borders.

- **Surface Tiers:** The background is Slate 50. Primary content cards sit on White (#FFFFFF) surfaces.
- **Shadows:** Use a "Natural Light" shadow: `0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)`. Shadows should be almost imperceptible, serving only to separate the card from the background.
- **Interactive States:** On hover, cards should slightly lift (increase shadow spread) or transition to a 1px Primary color border to indicate focus.

## Shapes

The design system uses a **Rounded** language (specifically `2xl` or 1rem/16px for primary containers) to mirror organic forms found in nature.

- **Primary Cards/Containers:** Use 1rem (16px) corner radius.
- **Buttons/Inputs:** Use 0.5rem (8px) for a more structured, functional feel.
- **Eco Score Radial:** Should always be perfectly circular to represent the "loop" of sustainability.

## Components

- **Buttons:** Primary buttons use the Emerald 600 background with white text. They should have a subtle 0.5s transition on hover. "Eco-Actions" (completing a challenge) use the Lime 500 accent.
- **Cards:** White background, 1px Slate 200 border, and `rounded-2xl` corners. Padding should be a minimum of 24px.
- **Eco Score Display:** A radial progress bar using Lime 500 for the progress and Slate 100 for the track. Center the numerical score in `display-lg` typography.
- **Input Fields:** Use Slate 50 background with a 1px Slate 200 border. Focus state moves the border to Emerald 500 with a soft Emerald glow (box-shadow).
- **AI Recommendation Cards:** Feature a subtle Lime 50 top-border or icon to signify their "AI-powered" status.
- **Emission Chips:** Compact tags with light tinted backgrounds (e.g., Transport = Light Blue, Food = Light Orange) to categorize logs without overwhelming the UI with saturated colors.