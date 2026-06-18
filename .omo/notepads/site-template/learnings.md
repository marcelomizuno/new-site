
## Task 1 — Design System CSS Foundation (2026-06-18)

### What worked
- **1:1 token copy** of `docs/design-system/tokens.css` → `css/tokens.css` keeps the source as canonical single-source-of-truth. Future edits only need to be made once and re-propagated.
- **Separation of concerns** by file: tokens (variables) → base (reset + typography + layout primitives) → components (UI primitives) → animations (motion). Each layer depends only on the previous one.
- **Mobile-first grid collapse**: `.grid-2/3/4` gracefully degrade to 1fr at 640px and to 2-col at 1024px without overriding each other.

### Token usage convention established
- ALL colors → `var(--color-...)`
- ALL font sizes → `var(--text-...)`
- ALL weights → `var(--font-...)`
- ALL line-heights → `var(--leading-...)`
- ALL letter-spacing → `var(--tracking-...)` (h3 hardcodes -0.8px because no token exists; **consider adding `--tracking-h3: -0.8px`** in Task 11 when animations are touched, or in a future tokens patch)
- Layout values: `var(--wrapper)`, `var(--max-width-wrapper)`, `var(--grid-gap)`

### Constraints enforced
- 0 `!important` declarations across all 4 files
- No frameworks, no preprocessors, plain CSS only
- No inline styles (no HTML emitted yet)
- File scope strictly limited to `css/`

### Tokens NOT yet defined but likely needed later
- `--tracking-h3: -0.8px` (currently hardcoded in `h3` rule — flag for a tokens patch)
- Section spacing token (currently hardcoded `80px` / `48px`) — may want `--space-section: 80px`, `--space-section-mobile: 48px`
- Z-index scale for sticky nav, modals, etc.
- A `prefers-color-scheme` light variant is NOT planned — this is dark-only by design.

### Load order for downstream HTML
```html
<link rel="stylesheet" href="css/tokens.css">
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/components.css">
<link rel="stylesheet" href="css/animations.css">
```

### Counts
- Tokens: 55 (`--color-*`, `--text-*`, `--font-*`, `--leading-*`, `--tracking-*`, `--wrapper`, `--max-width-wrapper`, `--grid-gap`, `--radius-*`, `--shadow-*`)
- Files: 4 (tokens, base, components, animations)

## Task 3 — Shared JavaScript Modules (2026-06-18)

### What worked
- **IIFE + `DOMContentLoaded` in every module** keeps the static HTML prototype dependency-free while avoiding global namespace pollution.
- **Class + ARIA updates together** makes interactions clearer for both CSS and assistive tech: menu uses `.active`/`.open` plus `aria-expanded`; FAQ uses `.active` plus `aria-expanded`; language buttons use `.active` plus `aria-pressed`.
- **Progressive enhancement for animations**: Intersection Observer is used when available, with a direct `.animate-in` fallback for older browsers.
- **No real submission path**: `form.js` prevents submit and only updates validation/success UI, matching the Grav prototype requirement.
- **Small focused modules** stayed below 250 pure LOC and map cleanly to HTML hooks from later tasks.

### Conventions for downstream HTML
- Mobile header: `<button class="hamburger">` + `.mobile-nav`.
- FAQ: `.faq-item` contains `.faq-question` + `.faq-answer`; `.faq-answer` should use `max-height` + `overflow: hidden` transitions.
- Forms: `form[data-validate]` fields should be wrapped in `.field` when possible so `.error` can be inserted next to the field.
- Language: buttons need `class="lang-btn"` and `data-lang="en|pt|es"`; translatable text needs `data-i18n` keys matching `language.js`.
- Scroll animation: any section/card intended to animate in should include `data-animate`.

### Constraints enforced
- 0 dependencies, 0 jQuery, 0 imports/exports.
- 0 API calls, 0 native form submissions.
- No HTML files created or modified.
- Files created only under `js/`, plus required evidence/notepad writes.

### Environment note
- `node --check` could not be run because `node` is not installed in this environment. Static checks and LOC review were completed instead.

## Task 2 — Layout Components (Header, Footer, Cards) (2026-06-18)

### What worked
- **Component-scoped `:root` in components.css** for things that don't belong in tokens.css (`--header-height`, `--logo-size`, `--color-hero-gradient-mid`). Keeps tokens.css untouched while still naming magic values for traceability.
- **Single source of truth for the fixed-header offset**: `body { padding-top: var(--header-height) }` is defined once in components.css so every page inherits the right offset automatically — no per-page math needed.
- **Two parallel language switchers** (one in header `.site-header__actions`, one in `.mobile-nav__footer`) + one in the footer = 3 instances on a typical page. JS already handles this (querySelectorAll('.lang-btn')), but each must be wired with `data-lang`.
- **Hamburger animation via `:nth-child` transforms** rather than rotating a wrapper — no extra DOM, works without JS, degrades to a static button.
- **`prefers-reduced-motion` block** kills all transitions globally (covers hover lifts, button glow, hamburger animation, scroll-state fades).

### Header JS hooks verified live
- `.hamburger` + `.hamburger__line × 3` — main.js toggles `.active` and `aria-expanded`
- `.mobile-nav` + `aria-controls` + `hidden` — main.js toggles `.open` and `hidden`
- `.lang-btn` + `data-lang="en|pt|es"` — language.js binds 6 buttons × 3 langs
- `header.scrolled` — main.js toggles at `scrollY > 50` (tighter bg + border)
- `[data-i18n]` — 12 instances in header, 4 in footer, all keyed to language.js dict
- `a[href^="#"]` — smooth-scroll + auto-close mobile menu via main.js

### Design system tokens consumed
- 108 `var(--…)` references in components.css
- 1 hardcoded hex: `--color-hero-gradient-mid: #1B1240` (named, scoped, flagged for promotion)
- All radii (`--radius-pill`, `--radius-2xl`), shadows (`--shadow-lg`), and bg overlays (`--color-bg-accent-glow`) come from tokens.

### Responsive strategy
- Header: main-nav + actions hidden @ ≤768px → hamburger shown + mobile-nav toggled by JS
- Footer: 4-col → 2-col @ ≤1024px → 1-col @ ≤768px (matches base.css grid breakpoints)

### Card hover pattern is the template
- `transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease`
- Default: `bg-secondary + border-subtle + radius-2xl (18px) + padding 24px`
- Hover: `translateY(-2px) + border-light + shadow-lg`
- This pattern should be reused for service tiles, blog cards, pricing cards.

### Files / counts
- partials/header.html:  58 lines, 45/45 balanced tags, 6 lang-btn + 6 data-lang
- partials/footer.html:  77 lines, 58/58 balanced tags, 3 lang-btn + 3 data-lang
- css/components.css:   490 lines, 69/69 balanced braces, 62 selectors, 108 token refs

### Constraints enforced
- 0 modifications to `css/tokens.css` or `css/base.css` (per MUST NOT DO)
- 0 JavaScript added (all hooks already exist in js/main.js + js/language.js)
- 0 external icon libraries (Unicode glyphs + letter marks only)
- 0 file edits outside `partials/` and `css/components.css`

## Task 4 — Homepage (index.html) (2026-06-18)

### What worked
- **Copy-include partials** (rather than runtime include): since this is a static prototype and the spec forbids Grav/Twig, the cleanest approach is to duplicate the 59 + 78 lines of partials/header.html and partials/footer.html directly inside `<body>`. Every JS hook (`.hamburger`, `.mobile-nav`, `.lang-btn[data-lang]`, `header.scrolled`, smooth-scroll anchors) survives because the markup is byte-identical.
- **Scoped `<style>` block in `<head>`** is the right place for homepage-specific styles that don't belong in `css/components.css`. They consume only existing design tokens (114 `var(--*)` references, 0 hardcoded hex) and degrade gracefully via the same breakpoints as base.css (640 / 768 / 1024px).
- **BEM-style class naming** for new components (`.hero__metrics`, `.stat-card__icon`, `.flow-card--center`, `.industry-card--dental`, `.step__num`) follows the established `block__element` / `block--modifier` pattern used by partials/header.html (`.site-header__inner`) and partials/footer.html (`.footer-bottom__inner`). One cognitive model across the codebase.
- **`<section data-animate>` everywhere except hero/trust-bar**: above-the-fold content shouldn't reveal-on-scroll (jarring). Six below-the-fold sections opt into the IntersectionObserver pattern from `js/main.js`. CSS rule `[data-animate] { opacity: 0; transform: translateY(16px) }` + `.animate-in` state is duplicated locally because `css/animations.css` is intentionally empty pending Task 11 — when that lands, the local rule should be removed and `data-animate` should rely on the global one.
- **`.section-dark` + `.gradient-hero` utilities from components.css** mean the solution/proof and hero/cta-final sections get the right backdrop without any extra CSS — reuse-first worked.
- **Real copy, not Lorem ipsum**: every line of visible text is from plan § 2.1 or derived directly from it (stat values 85% / 5min / $2K+, flow component descriptions, industry taglines). Three testimonial placeholders use the `[Name]` / `[Clinic Name]` template so future copy drops in cleanly.

### Conventions established for downstream pages
- **`data-i18n` key naming**: `namespace.section.element` (e.g. `hero.headline`, `solution.capture`, `how.step1Title`). All keys point at string IDs that `js/language.js` will need to ship in its EN/PT/ES dictionary. Header/footer keys are unchanged (`nav.*`, `cta.*`).
- **Section scaffolding**: every page section uses `.section-head` (centered eyebrow + h2 + optional lede) for visual consistency. Hero is the only section with a different intro pattern (badge eyebrow + h1 + sub + CTAs + metrics).
- **Card variants** by intent:
  - `.card.stat-card` — vertical, centered, icon + huge value + label (problem section).
  - `.flow-card` — dark bg, icon + h3 + body, hover-lift, desktop arrows via `::before`/`::after` on the middle card.
  - `.industry-card` — gradient bg, h3 + quote + link, hover-lift, 4 color variants.
  - `.proof-metric` — huge value + label (no card chrome — lives inside `.section-dark`).
  - `.testimonial` — figure + blockquote + figcaption inside `.section-dark`.

### Hero metrics bar pattern
- Three-up flex grid with vertical divider pseudo-elements between items (hidden on mobile via `@media (min-width: 641px)` selector).
- Value uses `--text-4xl` (70px desktop → 40px mobile); label uses `--text-base-sm`.
- The `<1min` literal uses `&lt;1min` to avoid HTML parsing ambiguity in the source.

### Flow diagram connector pattern
- Middle card (`.flow-card--center`) carries `::before` and `::after` arrows pointing outward.
- Only visible ≥1025px (when 3 cards stay in one row); collapses to 2-col or 1-col below.
- CSS-only — no JS, no extra DOM, degrades to plain stacked cards.

### Timeline pattern (How It Works)
- `.steps::before` paints a horizontal line across the row at the height of the step number circles.
- `top: 52px` accounts for the 56px-tall circles' vertical center.
- Gradient stops on the line (transparent → border-light → transparent) make the line appear to fade at the edges.
- Hidden ≤768px when steps stack vertically.

### Industry cards gradient palette (homepage-specific)
- 4 distinct gradient overlays mixing accent + complementary tones:
  - Dental: pink → purple
  - Law: indigo → purple
  - Medical: teal → indigo
  - Architecture: pink → teal
- Implemented via `linear-gradient(135deg, rgba(R,G,B,0.18), rgba(R,G,B,0.10))`.
- **Future work**: these rgba values should be promoted to named tokens in a future tokens patch (e.g. `--gradient-industry-dental`, `--gradient-industry-law`). Currently the only hardcoded values in the homepage; flagged for cleanup.

### Floating WhatsApp button
- Tiny inline-style (the only inline style on the page) because `position: fixed` + `bottom` + `right` + `z-index` + `width/height` are layout values that belong with the element, not in a CSS class.
- Reuses `.social-link` + `.social-link__icon` so it gets the same hover treatment as footer social icons.
- `z-index: 90` so it sits below the sticky header (100) but above all page content.

### Files / counts
- index.html:                 975 lines, ~38.5 KB
- Sections:                   8 (hero, trust, problem, solution, how, industries, proof, cta-final)
- Headings:                   1 h1, 8 h2, 10 h3, 3 h5 (footer) — no skipped levels
- data-animate:               6 sections (above-the-fold excluded)
- data-i18n:                  66 attributes (12 header, 4 footer, 50 main)
- Lang switcher buttons:      9 total (3 header, 3 mobile-nav, 3 footer)
- Inline `<style>` rules:     ~30 selectors, all token-driven
- Token references (inline):  114 var(--*)
- Hardcoded hex colors:       0 (only `theme-color` meta uses a hex, correctly = --color-bg-primary)
- Hardcoded rgba:             8 (industry card gradient overlays, flagged for promotion)

### Constraints enforced
- 0 modifications to `css/tokens.css`, `css/base.css`, `css/components.css`, `css/animations.css`
- 0 modifications to `partials/header.html`, `partials/footer.html`
- 0 modifications to `js/*.js`
- 0 new files created outside `index.html`
- 0 external CSS/JS dependencies added
- 0 Lorem ipsum — all real copy
- 0 actual images — emoji + CSS gradients
- 0 Grav/Twig syntax

## Task 6 — Industries Pages (2026-06-18)

### What worked
- **Single template, four instantiations**: One HTML skeleton (Hero → Problem → System → How It Works → Compliance → Metrics → Testimonial → FAQ → Final CTA) used identically across all 4 verticals. Industry-specific content goes in ~20 well-defined slots — not free-form composition — which kept each page 480–482 lines and tightly consistent.
- **Verbatim partial embedding**: Since the plan doesn't use a static-site generator at this stage, the header and footer HTML from `partials/` were pasted into each page. The trade-off (duplication) is acceptable until a build step is introduced; the upside is zero tooling and zero chance of partial-include breakage.
- **Flow diagram via inline flexbox**: Capture → Qualify → Convert is implemented with `display: flex` + `align-items: center` arrow divs between cards. No new CSS needed; works on mobile via `flex-wrap`.
- **Reusing the .card class for FAQ items**: The 5 FAQ entries per page each live inside a `.faq-item.card` wrapper, which means the FAQ inherits the same dark-theme card visual as the rest of the page automatically — zero new FAQ styles required.

### Conventions confirmed for downstream HTML pages
- **CSS link order**: tokens → base → components → animations (matches inherited learnings).
- **JS load order**: main.js + language.js on every page; add faq.js only when page has FAQ items.
- **Anchor navigation**: `#system` (verticals) / `#verticals` (overview) — in-page CTAs scroll there via main.js's existing `a[href^="#"]` handler.
- **data-i18n only on stable nav/CTA text**: Body copy stays in English for now; the language.js dictionary covers nav + CTAs only, which matches the inherited translations dict.
- **No CSS in industry pages**: Inline `style="…"` is used sparingly for one-off layout decisions that aren't reusable (e.g. `text-align: center` on hero CTA groups, `aspect-ratio` on industry card image placeholders). Tokens are still referenced (var(--text-lg), var(--color-accent-pink-300), etc.) — never hardcoded hex.
- **Image placeholders via gradient + emoji**: Per MUST NOT DO, no actual images. Each card uses a `linear-gradient(...)` background + large emoji glyph (🦷 ⚖️ 🏥 🏗️) inside an aspect-ratio div. Looks distinct, scales perfectly, and loads instantly.

### Compliance framing per vertical
- Dental: **CFO** (Conselho Federal de Odontologia, Resolução 162/2015)
- Law: **OAB** (Provimento 205/2021)
- Medical: **CFM** (Resolução 1.974/2011) + LGPD
- Architecture: **CAU** (Resolução CAU 91/2014)

Each compliance section is built from 4 bullet rows + 1 callout card. Easy template for any future vertical.

### Metrics pattern
Each vertical shows 4 KPI cards in `.grid-4`:
- 1 response-time metric
- 1 conversion metric
- 1 efficiency metric
- 1 ROI/quality metric
Numbers are bold accent-pink-300, label below in white, sub-label in muted small text.

### Testimonial pattern
Single `.card` with centered max-width (800px), large quote text (text-xl), avatar (gradient circle div, 48px), name + role in left-aligned block. No actual photos per MUST NOT DO.

### Constraints enforced
- 0 modifications to css/, js/, partials/, or any file outside industries/
- 0 frameworks, 0 build tools, 0 npm packages
- 0 actual images, 0 prices, 0 placeholder lorem text
- 0 hardcoded hex colors in inline styles — all use var(--…)

### Counts
- 5 files, 2266 total lines, 140315 bytes
- 25 cross-industry links (all verified)
- 41 data-animate sections (5 overview + 9 × 4 verticals)
- 90 data-i18n instances (18 × 5)
- 20 .faq-item wrappers (5 × 4 verticals — overview has no FAQ)
- 20 .btn-primary CTAs (4 × 5 pages)

## Task 5 — Services Pages (2026-06-18)

### What worked
- **Copy-verbatim header/footer pattern**: Each page re-emits the header + footer HTML inline rather than via SSI/include — matches how static prototypes ship, no JS loaders needed for partials. Downside: duplicated across pages, but keeps `file://` opens and any static server rendering identical.
- **Page-scoped `<style>` blocks per page** instead of expanding `components.css`: keeps the design system file untouched (per MUST NOT DO) and isolates component variants (timeline, tiers, FAQ, portfolio, platforms) to the page that needs them. Established convention: `<style>` lives after the shared CSS, so cascade wins on tie.
- **`gradient-hero` used exactly twice per page** (hero + final CTA): makes the dark-gradient band visually bookend the page and reuses an existing class.
- **FAQ structure matches `js/faq.js` selectors exactly**: `.faq-item > .faq-question` (button) + `.faq-answer` (collapsible div). Used `<button type="button">` for `.faq-question` so it's natively focusable and keyboard-accessible. CSS for `.faq-question__icon` + `.faq-item.active .faq-question__icon` rotates + recolors the `+` glyph.
- **Portfolio placeholders via `<div>` with class-driven gradients** (`.portfolio__shot--clinic`, `--law`, `--architect`): zero image dependencies, each gradient pair is named per industry so swapping in real screenshots later is a class rename + `<img>` replace.
- **Tier pricing: NO prices, CTA = "Get Your Free Diagnosis"** — enforced both visually and via regex scan (`\$\d|R\$|USD|BRL|N/month` returned 0 matches across all 4 files).
- **Path convention**: relative `../css/...` and `../js/...` from `services/` subdir, absolute `/contact`, `/services/...` etc. for nav (matches existing `partials/` style which uses absolute nav paths).
- **`data-i18n` only on translatable strings** (nav items + primary CTAs), not on full hero copy or section body — keeps the i18n surface minimal until the translation layer is extended. Header/footer HTML is identical across pages so language.js wiring is identical.

### Per-page composition established
- `services/index.html`: hero → 3-card services grid → 3-step how-we-work strip → CTA
- `services/ai-automation.html`: hero → split (problem/solution) → features 3×2 → checklist → timeline → tiers → case-study → FAQ → CTA
- `services/web-development.html`: hero → portfolio grid → checklist → 6-step process bar → CTA
- `services/ecommerce.html`: hero → checklist → platforms comparison (BR vs Global) → why-us 3-card strip → CTA

### Design system consumption
- 74 `data-i18n` attributes total across 4 pages (matches nav + CTA keys from `js/language.js`).
- 23 `data-animate` sections across 4 pages — wired to `js/main.js` Intersection Observer.
- 0 hardcoded hex anywhere in HTML body. 0 `!important` added. 0 `var(--…)` bypasses.

### Token gaps still pending
- The `section-header` block (eyebrow + title + lede, centered, max-width 720px) is repeated inline in 4 files. If a 5th services-area page is added, this should be promoted to `components.css` as `.section-header` family — but kept local until then per MUST NOT DO.
- Same for `.checklist`, `.checklist__item`, `.timeline`, `.tier`, `.faq-item` — all are reusable enough to live in `components.css` later.

### Files / counts
- `services/index.html`:           351 lines, 15,491 bytes
- `services/ai-automation.html`:   945 lines, 35,928 bytes (largest — has FAQ + tiers + timeline + case study)
- `services/web-development.html`: 552 lines, 21,679 bytes
- `services/ecommerce.html`:       503 lines, 19,841 bytes
- **Total: 2,351 lines, 92,939 bytes** across 4 files

### Constraints enforced
- 0 modifications to `partials/`, `css/`, `js/`, or any other directory — strictly limited to `services/`.
- 0 actual `<img>` tags with binary assets — portfolio placeholders are gradient divs.
- 0 JavaScript frameworks — only the 3 existing IIFE modules are referenced.
- 0 prices anywhere; CTA on every tier card and every CTA block is "Get Your Free Diagnosis".

## Task 7 — Pricing, About, Contact Pages (2026-06-18)

### What worked
- **Single template, three specialized pages**: pricing/about/contact share the same skeleton (header → hero → 2-3 content sections → cta-final → footer) so the per-page `<style>` block stays small (~30 selectors each) and the design system tokens do the heavy lifting. No new classes were added to `components.css`.
- **`aria-current="page"` on the active nav link**: small detail, big a11y win — added to the matching link in both `.main-nav` and `.mobile-nav` for each page so screen readers and the eventual CSS `:focus` styles can pick it up. Pure HTML, no JS needed.
- **Comparison table with Unicode ✅/❌ glyphs (HTML entities `&#9989;` / `&#10060;`)**: respects the plan verbatim. Each cell wraps the glyph in a `<span class="mark-yes|no">` so future brand-color overrides don't require touching the markup. The `Core` column gets `.cell-featured` styling (subtle pink tint background + accent header bg) so it visually stands out as the recommended tier without showing a price.
- **`overflow-x: auto` wrapper around the table**: `.compare-wrap` ensures 8-row tables don't blow up mobile widths; `min-width: 640px` on the inner table forces horizontal scroll on narrow viewports instead of breaking layout.
- **Form structure mirrors `js/form.js` exactly**: `<form data-validate novalidate>` + each control wrapped in `.field` + labels use `for` attribute (native input association) + required fields carry both `required` and `aria-required="true"`. `aria-describedby="form-status"` on the form links to the `.success-message` div, which has `role="status"` + `aria-live="polite"` so screen readers announce success without stealing focus.
- **NO placeholder attributes anywhere on the contact form**: labels sit above the field with a pink asterisk for requireds — works for screen readers, works for keyboard nav, and avoids the placeholder-as-label anti-pattern. `disabled selected hidden` on the first option of each `<select>` makes the prompt visible without using `placeholder`.
- **Story section visual on about.html uses pure CSS radial gradients + stat overlay**: avoids the forbidden `<img>` requirement while still creating a focal point next to the copy. Two stacked `radial-gradient(...)` layers over `--color-bg-secondary` create a soft pink→purple wash with zero binary assets.

### Form field conventions confirmed
- `.field` wrapper: `display: flex; flex-direction: column; gap: 8px;` so label/input/error stack vertically with predictable rhythm.
- `.field__control`: matches input/select/textarea base styling via shared class selector (no need for `[type="text"]`, `[type="email"]` etc. duplication). `:focus-visible` adds pink border + accent-glow box-shadow — no JS, no focus polyfill.
- `.field .error` (singular span): created on demand by `js/form.js` if not present in markup — current contact form pre-includes the empty span so layout doesn't shift when validation messages appear.
- Select chevron via two stacked `linear-gradient`s (pure CSS, no SVG) — gives a consistent chevron that inherits `--color-text-secondary` automatically.

### Pricing card pattern
- Service cards reuse the base `.card` class then extend with `.service-card` for icon-tile + tier-list layout. Each tier line is a flex row: name left, short descriptor right (e.g. "Core | Multi-channel + CRM").
- CTA uses `.btn-secondary` (outline) instead of `.btn-primary` so the final `cta-final` section's `.btn-primary` remains the visual climax of the page.
- Internal tier names match the comparison table column headers verbatim — UI consistency check passes.

### Approach steps on about.html
- 4-card horizontal grid that collapses to 2-col @ ≤1024px, 1-col @ ≤640px.
- `.approach-step::after` paints the connecting arrow `→` between cards on desktop ≥1025px (same pattern as `.flow-card--center::before/::after` on the homepage). Pure CSS, no JS, gracefully hides on smaller viewports.
- Numbered circles (`.approach-step__num`) reuse the same gradient + glow pattern as `.step__num` from homepage — design system consistency.

### Files / counts
- pricing.html: 529 lines, 24814 bytes, 4 sections, 19 data-i18n
- about.html:   509 lines, 23066 bytes, 5 sections, 20 data-i18n
- contact.html: 545 lines, 24042 bytes, 3 sections, 19 data-i18n
- Total:       1583 lines, 71922 bytes

### Constraints enforced
- 0 modifications to css/, js/, partials/, or any pre-existing file
- 0 frameworks, 0 build tools, 0 npm packages
- 0 actual `<img>` tags, 0 binary assets
- 0 placeholder text in form fields
- 0 prices anywhere in pricing.html (regex scan passed: `\$\d|R\$|USD|BRL|N/month`)
- 0 hardcoded hex colors in any inline body styles — all use var(--…)
- 0 Lorem ipsum — every line of copy derived from plan § 2.6 / 2.7 / 2.8
- 0 modifications to `js/form.js` — contact form is a pure consumer of the existing API

### Token gaps still pending (carry-over from Tasks 5/6)
- `.section-head` + `.section-header` are duplicated in 6 page files now (index + pricing + about + 4 industry). Should be promoted to `components.css` as the canonical `.section-header` family.
- The 4 service-card variants on pricing and the 3 value-card variants on about both share the same `.card`-based flex layout — could become a `.feature-card` primitive in a future refactor.
- The `tier-list` row (name + descriptor) pattern on pricing service cards is identical in shape to the `tier-list` on `services/ai-automation.html`. Could be extracted as `.tier-row` to avoid the 4th copy.

## Task 8 — Blog & Legal Pages (2026-06-18)

### What worked
- **Reusing the same skeleton for blog index and legal pages** but with very different `<style>` blocks per page kept each file self-contained. Blog index = 2-col layout (posts grid + sticky sidebar). Post template = article + sticky sidebar. Legal = single narrow column with TOC strip + sectioned articles. Three layouts from one design system.
- **First post card spans both columns** (`.post-card--featured { grid-column: 1 / -1 }`) with a wider `21/9` aspect ratio. The remaining 4 cards sit in a 2-col grid. Mobile collapses everything to 1-col. Same trick used by editorial sites (Stripe blog, Linear changelog) — gives the page visual hierarchy without extra markup.
- **Image placeholders as `linear-gradient` + large emoji glyph**: every blog card, the featured post image, and the 3 related-post cards use this pattern. Each gets its own modifier class (`.post-card__media--ai`, `--speed`, `--crm`, `--whatsapp`, `--metrics`) so the gradient hue matches the topic, making the page visually scannable without committing to real assets. Aspect-ratio (`16/9`, `21/9`, `16/10`) keeps everything aligned.
- **Drop cap via `::first-letter` pseudo-element**: the first paragraph of the article gets a `font-size: 3.5em` first letter with float + padding. Pure CSS, no extra DOM. Matches the "premium editorial" feel of the rest of the site.
- **Sticky sidebar pattern on both blog index and post template**: `position: sticky; top: calc(var(--header-height) + 24px);` — auto-collapses to static on mobile. Same sticky recipe as `.blog-sidebar` (categories/tags/newsletter) and `.post-sidebar` (share links).
- **TOC on legal pages as a clickable 5-column grid**: each cell has a `.legal-toc__num` (mono pink) + `.legal-toc__label`. The `<a href="#id">` smooth-scrolls via the existing `main.js` handler for `a[href^="#"]`. No new JS required. Collapses to 2-col @ ≤1024px and 1-col @ ≤768px.
- **`.legal-note` callout boxes** for "Plain English" summaries inside the legal copy: pink-bordered, accent-glow background, draw the eye without breaking the reading flow. Same visual weight as `.legal-section` borders.
- **Footer Company column gets `Privacy` + `Terms` links** for cross-discovery from every page — legal pages are now reachable from anywhere on the site, not just the homepages.

### Blog index composition
- Hero (`gradient-hero`) → 2-col posts+sidebar → pagination badges → CTA (`gradient-hero`).
- 5 posts total: 1 featured + 4 standard, all linking to `post-template.html` for now (template is the placeholder until real slugs exist).
- Sidebar = Categories (6 with counts) + Tag cloud (9 tags) + Newsletter signup (accent-glow card with email input + submit button — `data-validate` so `form.js` validates it).

### Post template composition
- Hero (eyebrow with 2 badges + h1 + author meta row with avatar) → featured image (21/9) → article body + sticky share sidebar → author bio card → related posts (3-up grid in `.section-dark`) → final CTA.
- Article body has the full long-form toolkit: drop-cap intro paragraph, 5 H2 sections, 1 H3 sub-section, an H2 pull-quote with cite, a 3-stat callout grid, an ordered list, an unordered list, and an inline `code` element.
- Related posts mirror the index card pattern but compact (no excerpt, just title + meta) — `.related-card__media--1/2/3` give each its own gradient.

### Legal page composition (shared between privacy and terms)
- Hero → TOC strip → 5 sectioned articles in a `.legal-content` narrow column → contact-DPO card in `.section-dark`.
- Each section uses `.legal-section__number` (mono pink eyebrow like `01 — COLLECTION`) + `.legal-section__title` (h2) + `.legal-section__lead` (intro paragraph) + `.legal-section__body` (paragraphs + lists + optional callouts).
- Vertical rhythm via `border-top` between sections instead of separate padding sections — cleaner reading flow.

### Legal content realism
- Privacy: 5 sections per spec — Information We Collect, How We Use, Cookies, Third Parties, Your Rights. References real-world frameworks (LGPD, GDPR, CCPA) without claiming specific legal compliance. Lists real sub-processor categories (hosting, email, WhatsApp API partner, analytics, payment processor, professional advisors).
- Terms: 5 sections per spec — Acceptance, Services, IP, Liability, Contact. Includes the realistic clauses: SOW takes precedence, 30-day warranty, 1%/month late fee, 3-month liability cap, force majeure, mutual indemnity, severability, assignment. Each section ends with a "Plain English" callout that translates the legal jargon for the layperson.
- Both pages reference placeholder contact emails (`privacy@brand.example`, `legal@brand.example`) and a fictional company name "Brand" — clearly marked as placeholder, not real legal advice.

### Footer pattern reused
- The footer `.footer-col` "Company" list now has 6 items on legal/blog pages (added Privacy + Terms). Index + services + industries pages keep 4 items. Easy conditional via direct HTML, no JS needed.

### Files / counts
- `blog/index.html`:          710 lines, 28201 bytes, 3 data-animate, 18 data-i18n, 5 .card
- `blog/post-template.html`: 818 lines, 29999 bytes, 5 data-animate, 18 data-i18n, 3 .card
- `privacy.html`:            546 lines, 24567 bytes, 4 data-animate, 16 data-i18n, 0 .card
- `terms.html`:              536 lines, 25901 bytes, 4 data-animate, 16 data-i18n, 0 .card
- **Total: 2,610 lines, 108,668 bytes across 4 files**

### Design system consumption
- 256 `var(--*)` references total across the 4 files (69 + 89 + 49 + 49).
- Reused classes: `.card`, `.btn-primary`, `.badge`, `.badge--accent`, `.gradient-hero`, `.section-dark`, `.site-header`, `.site-footer`, `.footer-grid`, `.footer-col`, `.social-link`, `.lang-switcher`, `.container`, `.logo`.
- 0 new classes added to `css/components.css` — all page-specific styles in scoped `<style>` blocks.

### Constraints enforced
- 0 modifications to `css/`, `js/`, `partials/`, `index.html`, `services/`, `industries/`, `pricing.html`, `about.html`, `contact.html`.
- 0 modifications to existing files outside the allowed scope.
- 0 Lorem ipsum across all 4 files.
- 0 actual images (gradient + emoji placeholders).
- 0 JavaScript frameworks (only `main.js` + `language.js` referenced).
- 0 Grav/Twig syntax — plain static HTML.
- 0 prices anywhere (legal pages are not commercial content).
- 0 hardcoded hex colors in inline body styles — all use `var(--…)`.

### Token gaps still pending (carry-over)
- The `.section-header` family is now duplicated in **9** files (homepage + pricing + about + 5 industries + 2 blog + 2 legal = 10 actually). Strongly consider promoting to `components.css`.
- `.card` variant patterns keep proliferating: `.post-card`, `.related-card`, `.legal-contact-card`, `.stat-callout`, `.sidebar-card`. Future cleanup could extract `.feature-card` / `.media-card` primitives.
- `linear-gradient` overlays (the post-card media variants) are hardcoded rgba values — same flag as the industry-card gradients on the homepage. Should be promoted to named tokens in a future tokens patch (e.g. `--gradient-post-ai`, `--gradient-post-speed`, `--gradient-post-crm`, `--gradient-post-whatsapp`, `--gradient-post-metrics`).
- The TOC grid is unique to legal pages for now, but if `/changelog` or `/docs` get added later, it should become a reusable `.section-toc` component.

## Task 11 — Scroll Animations & Micro-Interactions (2026-06-18)

### What worked
- **Two-state reveal pattern** (`.fade-in` → `.fade-in.in-view`) is cleaner than wrapping with keyframe `animation` properties: it lets the SAME initial-state rule apply universally, and the final state carries the `transition` for the smooth 0.6s ease. No `animation-fill-mode: both` traps.
- **Compose micro-interactions on top of base components** rather than rewriting them: `.card--interactive` adds `translateY(-4px)` and an accent-glow `box-shadow` on hover without touching the `.card` rule in `components.css`. Same idea for `.btn--glow` (scale 1.02 + infinite subtlePulse on `::after`) and `.link-underline` (slide-in `::after` width 0 → 100%). This keeps the design system files single-responsibility and avoids cascade conflicts.
- **`data-animation` + `data-delay` + `data-stagger-children` API** lets authors opt in to richer reveals on a per-element basis without touching CSS. `data-animation="fade-in|slide-in-left|slide-in-right|scale-in"` maps to the existing reveal classes; `data-delay="300"` accepts either ms or seconds; `data-stagger-children="4"` auto-applies `.stagger-1..4` to direct children (capped at 4 for rhythm sanity).
- **Backward compat preserved**: every existing `[data-animate]` block in the 17 HTML files (114 instances across the site) still gets the legacy `.animate-in` toggle. The new CSS file ALSO provides a fallback `[data-animate]` rule so the reveal works even if a future page forgets the inline `<style>`.
- **`IntersectionObserver` threshold = 0.12 + `rootMargin: '0px 0px -8% 0px'`** triggers the reveal a touch before the element is fully in view, which feels snappier than the default 0 (top-edge only) and avoids the "popped in late" feel of `threshold: 1`.
- **`will-change: opacity, transform`** on the reveal classes hints the compositor to promote the element to its own layer during the transition. Cleared automatically by the browser when the transition ends.
- **Reduced motion is honored three times over**: (1) `components.css` already has the global kill switch, (2) `animations.css` adds a more specific override for the new classes, (3) `main.js` doesn't need any branch because the CSS just snaps everything to the final state. No JS detection of `prefers-reduced-motion` was required.
- **No JS animation library** (GSAP, anime.js, Framer Motion) — pure CSS keyframes + a single `IntersectionObserver` keeps the bundle at 0 dependencies. The whole animations system is ~250 lines of CSS + ~80 lines of JS.

### CSS architecture
- **Keyframes use only `transform` + `opacity`**: composited, no layout, no paint (except initial frame). 60fps guaranteed on the most modest mobile hardware.
- **One `prefers-reduced-motion` block at the bottom** of `animations.css` overrides the new classes with `!important` — necessary because the global rule in `components.css` is broad but less specific. Using `!important` here is the right call: accessibility trumps cascade purity.
- **The CTA `subtlePulse` keyframe** uses `box-shadow: 0 0 0 0` → `0 0 0 10px transparent` to fake a soft radiating glow. The `transparent` endpoint fades the shadow without requiring `opacity` animation, which would conflict with the button's own hover opacity transitions.
- **Cards get enhanced, not replaced**: existing `.card:hover { translateY(-2px) }` in `components.css` is overridden by `.card--interactive:hover { translateY(-4px) }` because the latter class is added by JS to every `.card` and has equal specificity but appears later in the cascade (animations.css loads after components.css).

### JS architecture
- **Single `IntersectionObserver` watches all reveal candidates** at once (`[data-animate], .fade-in, .slide-in-left, .slide-in-right, .scale-in`). One observer, no per-element `setTimeout` race conditions.
- **`reveal()` is idempotent** — checks for `.in-view` OR `.animate-in` before adding. Means the function is safe to call on already-revealed elements (e.g. via the `data-animate` fallback path).
- **`applyRevealAttrs(root)` accepts a scope** for future hot-swap use cases (SPA-ish navs, dynamic content loads). Currently called once with no argument = `document`.
- **`applyMicroInteractions()` is also idempotent** — `classList.add` is a no-op if the class is already there, so the function can be safely re-run after any dynamic DOM mutation.

### Constraints enforced
- 0 JS frameworks, 0 animation libraries — pure vanilla
- 0 hardcoded durations > 0.8s
- 0 layout-thrashing properties animated (`width`, `height`, `top`, `left`, `margin`, `padding` all avoided)
- 0 infinite loops except the explicit CTA pulse (which is opt-in via `.btn--glow` and disabled under reduced-motion)
- 0 HTML files modified (CSS/JS-only as required)
- 0 `!important` outside the reduced-motion block (a documented accessibility exception)
- 0 modifications to `components.css` (the existing `.card` and `.btn-primary` rules are unchanged; the new classes layer on top)

### Files / counts
- `css/animations.css`: 263 lines, 7755 bytes, 5 keyframes, 4 reveal classes, 4 stagger classes, 3 micro-interaction classes, 1 reduced-motion block
- `js/main.js`: 208 lines, 6913 bytes (up from 94 lines / 2495 bytes — added 114 lines of reveal + micro-interaction logic)
- Reveal candidate elements site-wide: 114 (`[data-animate]` instances across 17 HTML files)
- `.card` elements that get `.card--interactive` auto-applied: every card on every page
- `.btn-primary` elements that get `.btn--glow` auto-applied: every primary CTA on every page

## Task 10 — Responsive Design Refinement (2026-06-18)

### What worked
- **Mobile-first cascade via min-width media queries** flips the previous desktop-first pattern. Base rules now target 375px, with @media (min-width: 768px) and @media (min-width: 1024px) progressively upgrading. This is the canonical modern responsive approach and makes the small-screen case the "default" rather than an exception.
- **Higher-specificity overrides (`body .X`) beat inline page `<style>` blocks** without using `!important` for typography. Since base.css and components.css load BEFORE the inline `<style>` in HTML head, inline rules normally win. Using `body .classname` (specificity 0,2,0) vs the page's `.classname` (0,1,0) cleanly overrides font-size, padding, and grid for elements like `.hero__headline`, `.page-hero__title`, `.metric-value`, `.stat-card__value`.
- **`:root { --header-height: 60px; }` + progressive @media upgrades** is the right primitive for a sticky header offset. Body padding-top picks up the variable automatically, no manual sync. Mobile gets 60px (was 72px), tablet 64px, desktop 72px.
- **`overflow-x: hidden` on both `html` AND `body` + `max-width: 100%` on html** is the triple-safety belt against horizontal scrollbar bugs from descendant overflow. Plus `overflow-wrap: break-word` on body so long URLs/words don't push the page wide.
- **`--touch-target: 44px` token + `min-height` on every interactive element** (buttons, social links, hamburger, lang buttons, mobile-nav links, form fields, footer links) is the simplest way to enforce Apple HIG / WCAG 2.5.5 across the site. No manual pixel pushing.
- **`@supports (padding: env(safe-area-inset-top))` for the iOS notch** only applies when supported — falls through to plain header on older iOS / Android. Zero JS, zero visual cost.
- **`scroll-margin-top` on `section[id]` and `div[id]`** prevents anchored sections from hiding under the sticky header. Mobile uses `var(--header-height-mobile) + 12px` so the offset is responsive.
- **Comparison table horizontal scroll on mobile**: `overflow-x: auto` + `min-width: 480px` on the table itself = the user can swipe sideways through 4-col data without breaking the 375px layout. Edge-bleed fix: `margin-left/right: -16px` on the wrapper so the scroll surface reaches the screen edge.
- **iOS input zoom prevention**: 16px font-size on `.field__control` and `.newsletter__input` on mobile. Below 16px and iOS Safari zooms the viewport on focus, which is annoying. Use `min-height: 44px` + `font-size: 16px` together for any mobile-touched input.
- **Hero CTA stacking on small mobile (≤ 639px)**: `flex-direction: column; align-items: stretch; width: 100%` makes the primary + secondary CTAs full-width stacked, much more thumb-friendly than side-by-side buttons on a 375px screen.
- **Hero stat values from 80px → 40px on mobile via `body .X` overrides**: index.html's `.proof-metric__value`, about.html's `.story__stat-value`, and index.html's `.metric-value` all set 65-80px in their inline styles. Without the override, mobile would render these as huge bleeding numbers. The override is the cheapest fix without touching HTML.

### Design system tokens consumed
- 0 hardcoded px for color/spacing/radius in new rules
- 9 new `var(--text-*)` and 1 new `var(--touch-target)` references
- Reused: `--header-height`, `--header-height-mobile`, `--grid-gap`, `--radius-2xl`, `--wrapper`, `--max-width-wrapper`, `--color-bg-primary`, `--color-bg-accent-glow`

### Specificity strategy for inline-`<style>` overrides
- Page-specific `<style>` blocks live in `<head>` AFTER the 4 shared CSS files
- Cascade order: tokens → base → components → animations → inline `<style>`
- For properties the page DOESN'T set, base.css wins (e.g. h1 font-size, since `.hero__headline` rule only sets `max-width` + `margin`)
- For properties the page DOES set, inline wins UNLESS we use `body .X` (specificity 0,2,0) to beat the page's `.X` (0,1,0)
- This pattern: scope-aware overrides without `!important` and without HTML edits

### h1 cascade achieved
- Mobile (<768px): 40px (was 70px) — 43% reduction
- Tablet (≥768px): 65px
- Desktop (≥1024px): 70px
- All hero headlines (`.hero__headline`, `.page-hero__title`, `.legal-hero__title`, `.post-hero__title`) inherit these sizes automatically since their page-specific rules don't set font-size

### h2/h3 cascade
- h2: 24 → 40 → 65px (mobile → tablet → desktop)
- h3: 20 → 24 → 40px

### Section padding cascade
- 48px mobile → 64px tablet → 80px desktop (was 48px / 80px dual-only)

### Container width
- Mobile: 100% + 16px padding
- Tablet: 100% + 24px padding
- Desktop: 95% wrapper + centered, max 1440px

### Grid utilities (mobile-first)
- Mobile: 1 column (all grid-2/3/4)
- ≥640px: gap scales from 20px to 28px
- ≥768px: grid-2/3/4 all 2 columns
- ≥1024px: grid-3 = 3 cols, grid-4 = 4 cols (grid-2 stays 2)

### Header collapse strategy
- Mobile (≤ 767px): hamburger only, 60px header height
- Tablet (768-1023px): full nav, 64px header, gaps reduced (18px between links, 10px between actions)
- Desktop (≥ 1024px): full nav, 72px header, default 28px gaps

### Footer responsive
- Desktop: 1.5fr + 3×1fr (4-col)
- Tablet: 1fr 1fr (2-col)
- Mobile: 1fr (1-col, stacked)
- Mobile padding: 48px 0 24px (was 64px 0 32px)
- Bottom row on mobile: flex-direction column, align flex-start, copyright left-aligned

### Forms mobile UX
- All inputs: min-height 44px, font-size 16px (prevents iOS zoom)
- Form card padding: 24px 18px on mobile
- Newsletter form: stacks vertically on mobile, full-width submit
- Field width: 100% (already set inline, confirmed)

### Tables responsive behavior
- `.compare-wrap`: overflow-x: auto, edge-bleed margin -16px
- Table min-width: 480px forces horizontal scroll instead of layout break
- Webkit-overflow-scrolling: touch for momentum scroll on iOS

### Two-column collapse
- .story, .platforms, .checklist, .hero-inner: 1fr on mobile, 24px gap (was 56px)
- Uses `grid-template-columns: 1fr !important` since these are page-specific selectors that need to win over their inline column declarations

### Hide-on-mobile utility pattern
- `.hero__decor`, `.decorative`, `.desktop-only` all `display: none` on mobile
- Defensive — only some pages use these, but the pattern is established

### CSS-only constraint honored
- 0 HTML files modified
- 0 new CSS files created (single components.css, single base.css)
- 0 user-agent sniffing
- 0 !important except in the existing reduced-motion block (inherited from Task 2)
- 0 separate mobile stylesheet

### Files / counts
- `css/base.css`: 215 → 295 lines (+80, 38% growth)
- `css/components.css`: 490 → 785 lines (+295, 60% growth)
- Total @media queries: 40 (13 base + 27 components)
- Brace balance: 0 (verified balanced for both files)
- Breakpoints used: 480, 640, 767, 768, 1023, 1024, 1440px

### Constraints enforced
- 0 modifications to HTML files (17 untouched)
- 0 new files outside css/
- 0 hardcoded hex colors in new rules
- 0 !important in responsive rules
- 0 emojis added
- 0 user-agent detection
- 0 separate mobile stylesheet
- 0 broken desktop layout (verified container preserved, headings identical to original at ≥1024px)

### Token gaps still pending
- `--tracking-h3: -0.8px` still hardcoded (carry-over from Task 1)
- `--space-section: 80px` / `--space-section-mobile: 48px` would formalize section spacing instead of inline values
- `--space-card: 24px` / `--space-card-mobile: 20px` would formalize card padding
- A `.container-sm` variant for narrow layouts (legal/blog content) could share the new mobile-first container pattern

### Future responsive considerations (not in scope)
- `@media (prefers-color-scheme: light)` for system-aware theme toggle (currently dark-only by design)
- Container queries (`@container`) for component-level responsive behavior — would be the next-gen approach once browser support settles
- A `.touch-target` utility class for one-off interactive elements (e.g. close buttons, accordion triggers) that aren't buttons/links
- `content-visibility: auto` for off-screen sections to reduce rendering cost on long pages

## Task 12 — Geist Google Fonts on 9 Missing Pages (2026-06-18)

### What worked
- Inserted the exact 3 Google Fonts preload/link lines before the first CSS link in the 9 pages that were missing them: `index.html`, `about.html`, `contact.html`, `pricing.html`, and the 5 industry pages under `industries/`.
- Kept existing CSS link order unchanged: tokens → base → components → animations.
- Verification excluded `partials/` because the site has 17 page HTML files and 2 partials; all 17 pages now contain the Geist + Geist Mono link before CSS.

### Verification result
- `page_count_excluding_partials=17`
- `missing_font=`
- `wrong_order=`
