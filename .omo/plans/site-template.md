# Site Template — HTML/CSS/JS Static Prototype

## TL;DR

> **Quick Summary**: Create a complete static HTML/CSS/JS template for a revenue infrastructure agency website with 14+ pages, following Pomelo's dark premium design system. Prototype will be converted to Grav CMS later.
>
> **Deliverables**:
> - Complete HTML structure with 14+ pages across folder hierarchy
> - CSS with Pomelo design system tokens (dark theme, pink accents)
> - Vanilla JavaScript for full interactivity (menu, FAQ, forms, animations)
> - Responsive design (mobile-first)
>
> **Estimated Effort**: Large
> **Parallel Execution**: YES - 5 waves
> **Critical Path**: Task 1 (Design System) → Task 2 (Layout Components) → Task 3-7 (Pages) → Task 8 (JavaScript) → F1-F4 (Verification)

---

## Context

### Original Request
Create HTML/CSS/JS template based on documentation in docs/ folder, following Pomelo design system.

### Interview Summary
**Key Discussions**:
- **Scope**: All ~14 pages organized in folders (/services/, /industries/, etc.)
- **Purpose**: Static HTML prototype → will be converted to Grav/Twig later
- **JavaScript**: Complete interactivity (mobile menu, FAQ accordion, smooth scroll, sticky header with blur, language switcher, form validation, scroll animations)
- **Design**: Fiel ao Pomelo (dark theme #080C21, pink accents #EC4899, Geist font)

**Research Findings**:
- Design system tokens available in `docs/design-system/tokens.css` and `tokens.json`
- Detailed page structures in `docs/website-plan-v3.md`
- Pomelo screenshots in `docs/screenshots/pomelo/` (desktop + mobile)
- Dark theme: #080C21 primary, #12162B secondary
- Accent colors: Pink (#EC4899), Purple (#C084FC)
- Typography: Geist font, 70px h1, 65px h2, tight letter spacing
- Layout: 95% wrapper, 1440px max-width, pill-shaped buttons

---

## Work Objectives

### Core Objective
Create a production-quality static HTML template that faithfully reproduces Pomelo's premium dark aesthetic for a revenue infrastructure agency, ready for later conversion to Grav CMS Twig templates.

### Concrete Deliverables
- `/index.html` — Homepage
- `/services/index.html` — Services overview
- `/services/ai-automation.html` — AI Automation page
- `/services/web-development.html` — Web Development page
- `/services/ecommerce.html` — E-commerce page
- `/industries/index.html` — Industries overview
- `/industries/dental-aesthetics.html` — Dental Aesthetics page
- `/industries/law-firms.html` — Law Firms page
- `/industries/medical-clinics.html` — Medical Clinics page
- `/industries/architecture.html` — Architecture Firms page
- `/pricing.html` — Pricing page
- `/about.html` — About page
- `/contact.html` — Contact page
- `/blog/index.html` — Blog listing page
- `/privacy.html` — Privacy policy
- `/terms.html` — Terms of service
- `/css/` — Stylesheets (tokens, base, components, pages)
- `/js/` — JavaScript modules (menu, FAQ, forms, animations)
- `/assets/` — Images, icons, fonts

### Definition of Done
- [ ] All 14+ HTML pages created with correct folder structure
- [ ] CSS uses Pomelo design tokens from `docs/design-system/tokens.css`
- [ ] Responsive design works on mobile (375px), tablet (768px), desktop (1440px)
- [ ] All JavaScript interactions functional (menu, FAQ, forms, scroll)
- [ ] Pages match Pomelo screenshots in `docs/screenshots/pomelo/`
- [ ] HTML validates without errors
- [ ] All internal links work correctly

### Must Have
- Dark theme (#080C21 background)
- Pink accent color (#EC4899) for CTAs and highlights
- Geist font family
- Sticky header with blur effect
- Mobile hamburger menu
- FAQ accordion on service pages
- Contact form with validation
- Language switcher UI (EN/PT/ES flags)
- Smooth scroll behavior
- WhatsApp floating button
- Footer with sitemap links
- Responsive grid layouts
- Card components with subtle borders
- Gradient backgrounds for hero sections

### Must NOT Have (Guardrails)
- No JavaScript frameworks (React, Vue, etc.)
- No CSS frameworks (Tailwind, Bootstrap, etc.)
- No backend functionality (actual form submission)
- No database connections
- No build tools (webpack, vite, etc.) — keep it simple
- No external CSS/JS CDNs except for Geist font
- No placeholder "lorem ipsum" text — use real copy from plan
- No Grav/Twig syntax in HTML files — pure HTML only

---

## Verification Strategy

> **ZERO HUMAN INTERVENTION** - ALL verification is agent-executed. No exceptions.

### Test Decision
- **Infrastructure exists**: NO (static HTML project)
- **Automated tests**: None (static prototype)
- **Framework**: N/A

### QA Policy
Every task MUST include agent-executed QA scenarios.
Evidence saved to `.omo/evidence/task-{N}-{scenario-slug}.{ext}`.

- **Frontend/UI**: Use Playwright - Navigate, interact, assert DOM, screenshot
- **Visual QA**: Compare against Pomelo screenshots in `docs/screenshots/pomelo/`
- **Responsive**: Test at 375px, 768px, 1440px viewports

---

## Execution Strategy

### Parallel Execution Waves

```
Wave 1 (Foundation — start immediately):
├── Task 1: Design System CSS + Base Styles [visual-engineering]
├── Task 2: Layout Components (Header, Footer, Cards) [visual-engineering]
└── Task 3: Shared JavaScript Modules [quick]

Wave 2 (Core Pages — after Wave 1):
├── Task 4: Homepage [visual-engineering]
├── Task 5: Services Pages (3 pages) [visual-engineering]
└── Task 6: Industries Pages (4 pages) [visual-engineering]

Wave 3 (Secondary Pages — after Wave 1):
├── Task 7: Pricing + About + Contact [visual-engineering]
├── Task 8: Blog + Legal Pages [visual-engineering]
└── Task 9: Language Switcher + i18n UI [quick]

Wave 4 (Polish — after Wave 2+3):
├── Task 10: Responsive Refinement [visual-engineering]
├── Task 11: Animations & Micro-interactions [visual-engineering]
└── Task 12: Accessibility & Performance [quick]

Wave FINAL (After ALL tasks — 4 parallel reviews):
├── Task F1: Plan compliance audit [oracle]
├── Task F2: Visual fidelity review [unspecified-high]
├── Task F3: Responsive QA across devices [unspecified-high]
└── Task F4: Scope fidelity check [deep]
-> Present results -> Get explicit user okay

Critical Path: Task 1 → Task 2 → Task 4/5/6 → Task 10 → F1-F4 → user okay
Parallel Speedup: ~60% faster than sequential
Max Concurrent: 3 (Waves 1-3)
```

### Dependency Matrix

| Task | Depends On | Blocks |
|------|------------|--------|
| 1 | — | 2, 4, 5, 6, 7, 8 |
| 2 | 1 | 4, 5, 6, 7, 8 |
| 3 | — | 4, 5, 6, 7, 8 |
| 4 | 1, 2, 3 | 10, 11 |
| 5 | 1, 2, 3 | 10, 11 |
| 6 | 1, 2, 3 | 10, 11 |
| 7 | 1, 2, 3 | 10, 11 |
| 8 | 1, 2, 3 | 10, 11 |
| 9 | — | 10 |
| 10 | 4-8 | 11 |
| 11 | 4-8, 10 | F1-F4 |
| 12 | 4-8 | F1-F4 |

### Agent Dispatch Summary

- **Wave 1**: 3 tasks — T1 → `visual-engineering`, T2 → `visual-engineering`, T3 → `quick`
- **Wave 2**: 3 tasks — T4 → `visual-engineering`, T5 → `visual-engineering`, T6 → `visual-engineering`
- **Wave 3**: 3 tasks — T7 → `visual-engineering`, T8 → `visual-engineering`, T9 → `quick`
- **Wave 4**: 3 tasks — T10 → `visual-engineering`, T11 → `visual-engineering`, T12 → `quick`
- **FINAL**: 4 tasks — F1 → `oracle`, F2 → `unspecified-high`, F3 → `unspecified-high`, F4 → `deep`

---

## TODOs

- [x] 1. Design System CSS + Base Styles

  **What to do**:
  - Create `/css/` folder structure: `tokens.css`, `base.css`, `components.css`, `animations.css`
  - Copy and adapt design tokens from `docs/design-system/tokens.css` into `css/tokens.css`
  - Create `css/base.css` with:
    - CSS reset (box-sizing, margin, padding)
    - Body styles: `background: #080C21`, `color: #FFFFFF`, `font-family: 'Geist'`
    - Typography scale using tokens (h1: 70px/600/-3px, h2: 65px/600/-1.625px, h3: 40px/600/-0.8px)
    - Link styles: pink accent on hover
    - Container class: `max-width: 1440px`, `margin: 0 auto`, `padding: 0 2.5%`
    - Section spacing: `padding: 80px 0` (desktop), `48px 0` (mobile)
    - Grid utilities: `.grid-2`, `.grid-3`, `.grid-4` with `gap: 28px`
  - Create `css/components.css` with placeholder (will be expanded in Task 2)
  - Create `css/animations.css` with placeholder (will be expanded in Task 11)
  - Add Google Fonts link for Geist in a shared `partials/head.html` snippet

  **Must NOT do**:
  - No CSS frameworks (Tailwind, Bootstrap)
  - No CSS preprocessors (Sass, Less) — plain CSS only
  - No !important declarations
  - No inline styles

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: CSS design system implementation requires visual precision
  - **Skills**: []
    - No specialized skills needed — CSS tokens are already defined

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 2, 3)
  - **Blocks**: Tasks 2, 4, 5, 6, 7, 8
  - **Blocked By**: None (can start immediately)

  **References**:

  **Pattern References**:
  - `docs/design-system/tokens.css` — All CSS custom properties to copy/adapt
  - `docs/design-system/tokens.json` — Structured reference for token values
  - `docs/.extract-design-system/normalized.json` — Typography scale, spacing values, border radius

  **External References**:
  - Geist font: https://vercel.com/font (or CDN link)

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: CSS tokens load correctly
    Tool: Bash (curl or file read)
    Preconditions: css/tokens.css created
    Steps:
      1. Read css/tokens.css
      2. Verify :root selector exists
      3. Verify --color-bg-primary: #080C21 is present
      4. Verify --color-accent-pink-500: #EC4899 is present
      5. Verify --font-sans includes 'Geist'
    Expected Result: All design tokens present with correct values
    Evidence: .omo/evidence/task-1-tokens-loaded.txt

  Scenario: Base styles apply correctly
    Tool: Playwright
    Preconditions: Create a test HTML file linking the CSS
    Steps:
      1. Create /test-styles.html with <body> and <h1>, <p>, <a> tags
      2. Link css/tokens.css and css/base.css
      3. Open in Playwright at 1440px
      4. Assert body background is #080C21
      5. Assert h1 font-size is 70px
      6. Assert body font-family includes 'Geist'
    Expected Result: Dark background, correct typography
    Evidence: .omo/evidence/task-1-base-styles.png

  Scenario: Responsive container works
    Tool: Playwright
    Preconditions: test-styles.html with .container class
    Steps:
      1. Open test-styles.html at 1440px width
      2. Assert .container max-width is 1440px
      3. Resize to 375px
      4. Assert .container padding adjusts
    Expected Result: Container responsive at all breakpoints
    Evidence: .omo/evidence/task-1-container-responsive.png
  ```

  **Commit**: YES
  - Message: `feat(design): add design system tokens and base styles`
  - Files: `css/tokens.css`, `css/base.css`, `css/components.css`, `css/animations.css`, `test-styles.html`
  - Pre-commit: None

- [x] 2. Layout Components (Header, Footer, Cards)

  **What to do**:
  - Create `/partials/` folder for reusable HTML snippets
  - Create `partials/header.html` with:
    - Sticky header: `position: fixed`, `backdrop-filter: blur(10px)`, `background: rgba(8,12,33,0.8)`
    - Logo (left) — placeholder `<a>` with brand name
    - Navigation: Services (dropdown), Industries (dropdown), Pricing, About, Blog
    - Language switcher: 🇺🇸 EN | 🇧🇷 PT | 🇪🇸 ES flags
    - CTA button: "Get Started" (pill-shaped, pink accent)
    - Mobile hamburger button (hidden on desktop)
  - Create `partials/footer.html` with:
    - 4-column layout: Logo+tagline, Services, Industries, Company
    - Social links: WhatsApp, Instagram, LinkedIn (icon placeholders)
    - Language switcher (same as header)
    - Copyright: "© 2026 [Brand]"
  - Create `css/components.css` with:
    - `.btn-primary`: Pink gradient background, pill border-radius, white text, hover glow
    - `.btn-secondary`: Transparent with white border, hover fills white
    - `.card`: Dark surface (#12162B), subtle border (rgba white 6%), 18px border-radius, padding 24px
    - `.card:hover`: Slight lift (translateY -2px), border brightens
    - `.badge`: Small pill for "Most Popular" etc.
    - `.section-dark`: Background #0F172A (for alternating sections)
    - `.section-light`: Background #FFFFFF with dark text
    - `.gradient-hero`: Linear gradient from #080C21 to violet/indigo
    - `.glow-effect`: Pink glow box-shadow for decorative elements
  - Add responsive styles: header collapses to hamburger at 768px

  **Must NOT do**:
  - No JavaScript in this task (menu toggle JS in Task 3)
  - No actual page content — components only
  - No external icon libraries — use Unicode/emoji or simple SVG

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Layout components require pixel-perfect CSS implementation
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Task 3)
  - **Parallel Group**: Wave 1 (with Tasks 1, 3)
  - **Blocks**: Tasks 4, 5, 6, 7, 8
  - **Blocked By**: Task 1 (needs tokens.css and base.css)

  **References**:

  **Pattern References**:
  - `docs/screenshots/pomelo/desktop/01-nav.png` — Header design reference
  - `docs/screenshots/pomelo/desktop/08-footer.png` — Footer design reference
  - `docs/screenshots/pomelo/mobile/01-nav.png` — Mobile menu reference
  - `docs/design-system/tokens.css` — Color and spacing values
  - `docs/.extract-design-system/normalized.json` — Border radius, shadows

  **WHY Each Reference Matters**:
  - Screenshots show exact visual target for header/footer
  - Tokens provide the CSS values to implement the design

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: Header renders correctly on desktop
    Tool: Playwright
    Preconditions: Create test page with header partial
    Steps:
      1. Create /test-components.html linking all CSS + header partial
      2. Open at 1440px width
      3. Assert header is fixed position
      4. Assert nav links visible (Services, Industries, Pricing, About)
      5. Assert "Get Started" button visible with pink background
      6. Assert language flags visible
    Expected Result: Header matches Pomelo screenshot
    Evidence: .omo/evidence/task-2-header-desktop.png

  Scenario: Header collapses on mobile
    Tool: Playwright
    Preconditions: test-components.html
    Steps:
      1. Open at 375px width
      2. Assert hamburger button visible
      3. Assert nav links hidden
      4. Assert logo visible
    Expected Result: Mobile header shows hamburger, hides nav
    Evidence: .omo/evidence/task-2-header-mobile.png

  Scenario: Footer has correct layout
    Tool: Playwright
    Preconditions: test-components.html with footer
    Steps:
      1. Open at 1440px
      2. Scroll to bottom
      3. Assert 4-column grid layout
      4. Assert social links present
      5. Assert copyright text present
    Expected Result: Footer matches Pomelo screenshot
    Evidence: .omo/evidence/task-2-footer-desktop.png

  Scenario: Cards render with correct styling
    Tool: Playwright
    Preconditions: test-components.html with sample cards
    Steps:
      1. Create 3 sample .card elements
      2. Assert background is #12162B
      3. Assert border-radius is 18px
      4. Assert border is subtle (rgba white)
      5. Hover over card, verify slight lift effect
    Expected Result: Cards match Pomelo style
    Evidence: .omo/evidence/task-2-cards.png
  ```

  **Commit**: YES
  - Message: `feat(layout): add header, footer, and card components`
  - Files: `partials/header.html`, `partials/footer.html`, `css/components.css`, `test-components.html`
  - Pre-commit: None

- [x] 3. Shared JavaScript Modules

  **What to do**:
  - Create `/js/` folder
  - Create `js/main.js` with:
    - Mobile menu toggle (hamburger → X, show/hide nav)
    - Smooth scroll for anchor links (`#section-id`)
    - Sticky header behavior (add `.scrolled` class on scroll)
    - Intersection Observer for scroll animations (add `.animate-in` class)
    - WhatsApp floating button behavior
  - Create `js/faq.js` with:
    - Accordion functionality for FAQ sections
    - Click to expand/collapse answers
    - Only one FAQ open at a time (optional toggle)
    - Smooth height transition animation
  - Create `js/form.js` with:
    - Contact form validation
    - Required field checks (name, email, phone)
    - Email format validation
    - Error message display
    - Success state (show confirmation message)
    - No actual form submission (just validation UI)
  - Create `js/language.js` with:
    - Language switcher click handler
    - Store selected language in localStorage
    - Update UI to show active language flag
    - Placeholder for future i18n integration
  - All modules: ES6 modules or IIFE pattern, no external dependencies

  **Must NOT do**:
  - No jQuery or other libraries
  - No actual API calls or form submission
  - No complex state management
  - No npm dependencies

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Vanilla JS utilities, well-defined scope
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Tasks 1, 2)
  - **Parallel Group**: Wave 1 (with Tasks 1, 2)
  - **Blocks**: Tasks 4, 5, 6, 7, 8
  - **Blocked By**: None (can start immediately)

  **References**:

  **Pattern References**:
  - `docs/website-plan-v3.md` sections 2.1-2.8 — Interactive elements described in each page

  **WHY Each Reference Matters**:
  - Plan describes exactly which interactive elements each page needs

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: Mobile menu toggles correctly
    Tool: Playwright
    Preconditions: test-components.html with header + js/main.js
    Steps:
      1. Open at 375px width
      2. Click hamburger button
      3. Assert mobile nav becomes visible
      4. Assert hamburger transforms to X
      5. Click X
      6. Assert mobile nav hidden
    Expected Result: Menu opens and closes smoothly
    Evidence: .omo/evidence/task-3-mobile-menu.png

  Scenario: FAQ accordion expands and collapses
    Tool: Playwright
    Preconditions: Create test page with FAQ items + js/faq.js
    Steps:
      1. Create 3 FAQ items
      2. Click first FAQ question
      3. Assert answer expands (height > 0)
      4. Click second FAQ question
      5. Assert first collapses, second expands
    Expected Result: Only one FAQ open at a time
    Evidence: .omo/evidence/task-3-faq-accordion.png

  Scenario: Form validation shows errors
    Tool: Playwright
    Preconditions: Create test page with form + js/form.js
    Steps:
      1. Create contact form with name, email, phone fields
      2. Click submit without filling fields
      3. Assert error messages appear for required fields
      4. Fill invalid email "test@"
      5. Click submit
      6. Assert email format error shows
    Expected Result: Validation errors display correctly
    Evidence: .omo/evidence/task-3-form-validation.png

  Scenario: Smooth scroll works
    Tool: Playwright
    Preconditions: test page with anchor links + js/main.js
    Steps:
      1. Create page with #section-1 at top, #section-2 at bottom
      2. Click link to #section-2
      3. Assert page scrolls smoothly to section-2
    Expected Result: Smooth scroll animation
    Evidence: .omo/evidence/task-3-smooth-scroll.png
  ```

  **Commit**: YES
  - Message: `feat(js): add shared JavaScript modules`
  - Files: `js/main.js`, `js/faq.js`, `js/form.js`, `js/language.js`
  - Pre-commit: None

- [x] 4. Homepage

  **What to do**:
  - Create `/index.html` with all sections from plan section 2.1:
    - **Hero**: Gradient mesh background (violet → indigo), headline "Stop Losing Revenue to Slow Response Times", subheadline, CTA button "Get Your Free Diagnosis →", secondary link "See How It Works ↓", metrics bar (XX+ Businesses | XX% Leads Recovered | <1min Response)
    - **Trust Bar**: "Trusted by forward-thinking businesses" with placeholder logos/badges
    - **Problem Section**: "The Revenue Leak Nobody Talks About" with 3 stat cards (85% unanswered, 5 minutes, $2K+ lost)
    - **Solution Section**: Dark background (#0F172A), "Your Complete Revenue System", flow diagram (Capture → Qualify → Convert + Website + Measure)
    - **How It Works**: 3 steps with timeline (Diagnosis → We Build → You Grow)
    - **Industries Section**: 4 gradient cards (Dental, Law, Medical, Architecture) with "Explore →" links
    - **Social Proof/Metrics**: Dark section with 3 metric cards + testimonial placeholder
    - **Final CTA**: Gradient background, "Ready to Stop Leaving Money on the Table?"
    - **Footer**: Include partials/footer.html
  - Include partials/header.html at top
  - Link all CSS files and JS files
  - Use real copy from `docs/website-plan-v3.md` section 2.1

  **Must NOT do**:
  - No placeholder text like "Lorem ipsum"
  - No actual images (use colored divs or CSS gradients as placeholders)
  - No Grav/Twig syntax

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Homepage is the most visually complex page, requires design precision
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Tasks 5, 6)
  - **Parallel Group**: Wave 2 (with Tasks 5, 6)
  - **Blocks**: Tasks 10, 11
  - **Blocked By**: Tasks 1, 2, 3

  **References**:

  **Pattern References**:
  - `docs/website-plan-v3.md` lines 57-241 — Complete homepage structure with all sections
  - `docs/screenshots/pomelo/desktop/00-full-page-p1.png` — Full page visual reference
  - `docs/screenshots/pomelo/desktop/02-smart-payments-infrastructure-zero-friction.png` — Hero section reference
  - `docs/screenshots/pomelo/desktop/03-one-technology-endless-applications.png` — Solution section reference
  - `docs/screenshots/pomelo/desktop/04-you-design-it-we-bring-it-to-life.png` — CTA section reference

  **WHY Each Reference Matters**:
  - Plan has exact copy text and section structure
  - Screenshots show visual target for each section

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: Homepage loads with all sections
    Tool: Playwright
    Preconditions: index.html created with all CSS/JS linked
    Steps:
      1. Open index.html at 1440px
      2. Assert page title contains relevant text
      3. Assert hero section visible with correct headline
      4. Scroll down, assert Problem section with 3 stat cards
      5. Assert Solution section with dark background
      6. Assert How It Works with 3 steps
      7. Assert Industries with 4 cards
      8. Assert Social Proof section
      9. Assert Final CTA section
      10. Assert Footer visible
    Expected Result: All 9 sections render correctly
    Evidence: .omo/evidence/task-4-homepage-full.png

  Scenario: Hero CTA button has correct styling
    Tool: Playwright
    Preconditions: index.html
    Steps:
      1. Locate "Get Your Free Diagnosis" button
      2. Assert background is pink (#EC4899 or gradient)
      3. Assert border-radius is pill-shaped (9999px)
      4. Hover over button, verify glow effect
    Expected Result: CTA matches Pomelo style
    Evidence: .omo/evidence/task-4-hero-cta.png

  Scenario: Metrics bar displays correctly
    Tool: Playwright
    Preconditions: index.html
    Steps:
      1. Locate metrics bar in hero
      2. Assert 3 metrics visible
      3. Assert text is readable against dark background
    Expected Result: Metrics bar visible and styled
    Evidence: .omo/evidence/task-4-metrics-bar.png
  ```

  **Commit**: YES
  - Message: `feat(pages): add homepage`
  - Files: `index.html`
  - Pre-commit: None

- [x] 5. Services Pages (3 pages)

  **What to do**:
  - Create `/services/` folder
  - Create `services/index.html` — Services overview page linking to 3 services
  - Create `services/ai-automation.html` with sections from plan 2.2:
    - Hero: "Your 24/7 Revenue Engine"
    - Problem → Solution split section
    - Features Grid (3×2 cards with icons)
    - What's Included (checklist with ✓)
    - How It Works (vertical timeline, 5 steps)
    - Tiers (3 cards: Starter, Core, Growth — NO prices)
    - Case Study teaser
    - FAQ accordion (5 questions)
    - Final CTA
  - Create `services/web-development.html` with sections from plan 2.3:
    - Hero: "Websites That Convert Clicks Into Revenue"
    - Portfolio Grid (placeholder)
    - What's Included (checklist)
    - Delivery Process (timeline)
    - CTA
  - Create `services/ecommerce.html` with sections from plan 2.4:
    - Hero: "Online Stores Built to Sell From Day One"
    - What's Included (checklist)
    - Platforms comparison (Brazil vs USA/Global)
    - CTA
  - All pages: Include header/footer partials, link CSS/JS
  - Use real copy from plan sections 2.2, 2.3, 2.4
  - FAQ sections use js/faq.js for accordion

  **Must NOT do**:
  - No prices shown (CTA is "Get Your Free Diagnosis")
  - No placeholder text
  - No actual images

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Service pages have complex layouts (feature grids, timelines, tier cards)
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Tasks 4, 6)
  - **Parallel Group**: Wave 2 (with Tasks 4, 6)
  - **Blocks**: Tasks 10, 11
  - **Blocked By**: Tasks 1, 2, 3

  **References**:

  **Pattern References**:
  - `docs/website-plan-v3.md` lines 246-323 — AI Automation page structure
  - `docs/website-plan-v3.md` lines 327-358 — Web Development page structure
  - `docs/website-plan-v3.md` lines 362-398 — E-commerce page structure
  - `docs/screenshots/pomelo/desktop/05-a-modular-apifirst-platform-to-build-operate-and-s.png` — Feature grid reference
  - `docs/screenshots/pomelo/desktop/06-technology-built-to-scale.png` — Card layout reference

  **WHY Each Reference Matters**:
  - Plan has exact section structure and copy text for each service page
  - Screenshots show how to lay out feature grids and card collections

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: AI Automation page has all sections
    Tool: Playwright
    Preconditions: services/ai-automation.html created
    Steps:
      1. Open at 1440px
      2. Assert hero with "24/7 Revenue Engine"
      3. Assert feature grid with 6 cards (3×2)
      4. Assert checklist with 8 items and ✓ marks
      5. Assert timeline with 5 steps
      6. Assert 3 tier cards (Starter, Core, Growth)
      7. Assert FAQ with 5 questions
      8. Click first FAQ, verify accordion opens
    Expected Result: All sections render, FAQ works
    Evidence: .omo/evidence/task-5-ai-automation.png

  Scenario: Tier cards show "Most Popular" badge
    Tool: Playwright
    Preconditions: services/ai-automation.html
    Steps:
      1. Locate tier cards section
      2. Assert Core tier has "Most Popular" badge
      3. Assert badge has distinct styling (pink bg or border)
    Expected Result: Badge visible on Core tier
    Evidence: .omo/evidence/task-5-tier-badge.png

  Scenario: Web Development page loads correctly
    Tool: Playwright
    Preconditions: services/web-development.html
    Steps:
      1. Open at 1440px
      2. Assert hero with correct headline
      3. Assert portfolio grid (3 placeholder items)
      4. Assert checklist with 6 items
      5. Assert delivery process timeline
    Expected Result: All sections present
    Evidence: .omo/evidence/task-5-web-dev.png

  Scenario: E-commerce page shows platform comparison
    Tool: Playwright
    Preconditions: services/ecommerce.html
    Steps:
      1. Open at 1440px
      2. Assert hero with correct headline
      3. Assert 2-column platform comparison (Brazil vs USA)
      4. Assert each column has CTA button
    Expected Result: Platform comparison visible
    Evidence: .omo/evidence/task-5-ecommerce.png
  ```

  **Commit**: YES
  - Message: `feat(pages): add service pages`
  - Files: `services/index.html`, `services/ai-automation.html`, `services/web-development.html`, `services/ecommerce.html`
  - Pre-commit: None

- [x] 6. Industries Pages (4 pages)

  **What to do**:
  - Create `/industries/` folder
  - Create `industries/index.html` — Industries overview linking to 4 verticals
  - Create `industries/dental-aesthetics.html` with template from plan 2.5:
    - Hero: "Never Lose a Patient to a Slow Reply" with dental background
    - Problem: "78% of dental leads choose the clinic that responds first"
    - Solution: Integrated revenue system diagram (Capture → Qualify → Convert)
    - How It Works: 5 steps customized for dental
    - Compliance: "CFO-compliant communication"
    - Metrics: Response time, booking rate
    - Testimonial placeholder
    - FAQ (dental-specific questions)
    - CTA: "Stop losing patients to slow response times"
  - Create `industries/law-firms.html`:
    - Hero: "Qualify Cases Before the First Call"
    - Problem: "High-value clients expect instant response"
    - Solution: Same integrated system, law-specific bot menu
    - Compliance: "OAB-compliant"
  - Create `industries/medical-clinics.html`:
    - Hero: "Your Schedule Stays Full — Automatically"
    - Problem: "Empty slots cost clinics thousands per month"
    - Solution: Same system, medical-specific (scheduling, reminders)
  - Create `industries/architecture.html`:
    - Hero: "Filter High-Value Leads, Automatically"
    - Problem: "Not every inquiry is worth a proposal"
    - Solution: Same system, architecture-specific (project type, budget)
  - All pages follow same template structure, adapted per industry
  - Include header/footer, link CSS/JS

  **Must NOT do**:
  - No prices
  - No placeholder text — use industry-specific copy from plan
  - No actual images

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Industry pages need visual differentiation while sharing template structure
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Tasks 4, 5)
  - **Parallel Group**: Wave 2 (with Tasks 4, 5)
  - **Blocks**: Tasks 10, 11
  - **Blocked By**: Tasks 1, 2, 3

  **References**:

  **Pattern References**:
  - `docs/website-plan-v3.md` lines 402-480 — Industry page template and all 4 verticals
  - `docs/screenshots/pomelo/desktop/07-build-the-solution-your-business-needs.png` — Card grid reference

  **WHY Each Reference Matters**:
  - Plan has exact template structure and industry-specific copy
  - Screenshots show how to style industry cards

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: Dental page has all required sections
    Tool: Playwright
    Preconditions: industries/dental-aesthetics.html created
    Steps:
      1. Open at 1440px
      2. Assert hero with "Never Lose a Patient"
      3. Assert problem section with "78% of dental leads"
      4. Assert solution diagram with 3 steps
      5. Assert compliance section mentioning "CFO"
      6. Assert FAQ accordion with dental questions
      7. Click FAQ item, verify it opens
    Expected Result: All sections present, FAQ functional
    Evidence: .omo/evidence/task-6-dental.png

  Scenario: All 4 industry pages load without errors
    Tool: Playwright
    Preconditions: All 4 industry HTML files created
    Steps:
      1. Open dental-aesthetics.html, check no console errors
      2. Open law-firms.html, check no console errors
      3. Open medical-clinics.html, check no console errors
      4. Open architecture.html, check no console errors
    Expected Result: All pages load cleanly
    Evidence: .omo/evidence/task-6-all-industries.png

  Scenario: Industry pages have correct internal links
    Tool: Playwright
    Preconditions: industries/index.html
    Steps:
      1. Open industries/index.html
      2. Click "Dental Aesthetics" link
      3. Assert navigates to dental-aesthetics.html
      4. Go back, click "Law Firms"
      5. Assert navigates to law-firms.html
    Expected Result: All links work correctly
    Evidence: .omo/evidence/task-6-industry-links.png
  ```

  **Commit**: YES
  - Message: `feat(pages): add industry pages`
  - Files: `industries/index.html`, `industries/dental-aesthetics.html`, `industries/law-firms.html`, `industries/medical-clinics.html`, `industries/architecture.html`
  - Pre-commit: None

- [x] 7. Pricing + About + Contact Pages

  **What to do**:
  - Create `pricing.html` with sections from plan 2.6:
    - Hero: "Simple, Transparent Pricing"
    - Service Cards (3 cards: AI Automation, Web Development, E-commerce — NO prices)
    - Comparison table (Feature | Starter | Core | Growth) with ✅/❌
    - CTA: "Get Your Free Diagnosis"
  - Create `about.html` with sections from plan 2.7:
    - Hero: "We Build Revenue Machines"
    - Our Story section (mission-focused)
    - Our Values: 3 cards (Revenue-First, Speed, Transparency)
    - Our Approach: 4 steps (Diagnose → Build → Launch → Optimize)
    - CTA: "Let's Talk About Your Business"
  - Create `contact.html` with sections from plan 2.8:
    - Contact form with fields: Name, Email, Phone/WhatsApp, Business type (dropdown), What are you looking for? (dropdown), Message
    - Form uses js/form.js for validation
    - Info section: Location, WhatsApp, Email, Instagram
    - CTA: "Get Your Free Diagnosis"
  - All pages: Include header/footer, link CSS/JS

  **Must NOT do**:
  - No prices in comparison table
  - No actual form submission
  - No placeholder text

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Pricing table and contact form need precise CSS layout
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Tasks 8, 9)
  - **Parallel Group**: Wave 3 (with Tasks 8, 9)
  - **Blocks**: Tasks 10, 11
  - **Blocked By**: Tasks 1, 2, 3

  **References**:

  **Pattern References**:
  - `docs/website-plan-v3.md` lines 484-518 — Pricing page structure
  - `docs/website-plan-v3.md` lines 522-541 — About page structure
  - `docs/website-plan-v3.md` lines 545-568 — Contact page structure
  - `docs/screenshots/pomelo/desktop/05-a-modular-apifirst-platform-to-build-operate-and-s.png` — Table/grid reference

  **WHY Each Reference Matters**:
  - Plan has exact form fields, table features, and value propositions
  - Screenshots show table styling patterns

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: Pricing page shows comparison table
    Tool: Playwright
    Preconditions: pricing.html created
    Steps:
      1. Open at 1440px
      2. Assert 3 service cards visible
      3. Assert comparison table with 8 feature rows
      4. Assert ✅ and ❌ icons in correct columns
      5. Assert NO prices visible anywhere
    Expected Result: Table renders with correct checkmarks
    Evidence: .omo/evidence/task-7-pricing-table.png

  Scenario: Contact form validates correctly
    Tool: Playwright
    Preconditions: contact.html with js/form.js
    Steps:
      1. Open contact.html
      2. Assert form with 6 fields visible
      3. Click submit empty — assert error messages
      4. Fill name "Test User"
      5. Fill invalid email "bad@"
      6. Click submit — assert email error
      7. Fill valid email "test@example.com"
      8. Fill phone "+55 11 99999-9999"
      9. Select business type from dropdown
      10. Select service from dropdown
      11. Fill message "Test message"
      12. Click submit — assert success state
    Expected Result: Validation works at each step
    Evidence: .omo/evidence/task-7-contact-form.png

  Scenario: About page shows values section
    Tool: Playwright
    Preconditions: about.html
    Steps:
      1. Open at 1440px
      2. Assert hero with "We Build Revenue Machines"
      3. Assert 3 value cards (Revenue-First, Speed, Transparency)
      4. Assert 4-step approach section
    Expected Result: All sections present
    Evidence: .omo/evidence/task-7-about.png
  ```

  **Commit**: YES
  - Message: `feat(pages): add pricing, about, contact`
  - Files: `pricing.html`, `about.html`, `contact.html`
  - Pre-commit: None

- [x] 8. Blog + Legal Pages

  **What to do**:
  - Create `/blog/` folder
  - Create `blog/index.html`:
    - Blog listing page with card grid layout
    - 5 placeholder blog post cards (title, excerpt, date, read more link)
    - Each card links to `blog/post-slug.html`
    - Sidebar or section for categories/tags (placeholder)
  - Create `blog/post-template.html`:
    - Sample blog post layout with: title, date, author, featured image placeholder, content sections, related posts
    - Can be duplicated for future posts
  - Create `privacy.html`:
    - Privacy policy page
    - Standard sections: Information We Collect, How We Use, Cookies, Third Parties, Contact
    - Use realistic placeholder legal text
  - Create `terms.html`:
    - Terms of service page
    - Standard sections: Acceptance, Services, Intellectual Property, Limitation, Contact
    - Use realistic placeholder legal text
  - All pages: Include header/footer, link CSS/JS

  **Must NOT do**:
  - No lorem ipsum — use realistic placeholder content
  - No actual blog functionality
  - No complex blog features (comments, tags filter)

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Blog card grid and legal page typography need design attention
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Tasks 7, 9)
  - **Parallel Group**: Wave 3 (with Tasks 7, 9)
  - **Blocks**: Tasks 10, 11
  - **Blocked By**: Tasks 1, 2, 3

  **References**:

  **Pattern References**:
  - `docs/website-plan-v3.md` — Blog mentioned in sitemap (section 1)
  - `docs/screenshots/pomelo/desktop/` — Card layout patterns to follow

  **WHY Each Reference Matters**:
  - Blog structure derived from sitemap; use card patterns from other pages

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: Blog listing shows 5 post cards
    Tool: Playwright
    Preconditions: blog/index.html created
    Steps:
      1. Open at 1440px
      2. Assert 5 blog post cards visible
      3. Each card has title, excerpt, date, "Read More" link
      4. Click first card link — navigates to post page
    Expected Result: Blog grid renders with functional links
    Evidence: .omo/evidence/task-8-blog-listing.png

  Scenario: Blog post template renders correctly
    Tool: Playwright
    Preconditions: blog/post-template.html
    Steps:
      1. Open at 1440px
      2. Assert title, date, author visible
      3. Assert featured image placeholder
      4. Assert content sections with headings
      5. Assert related posts section at bottom
    Expected Result: Blog post layout complete
    Evidence: .omo/evidence/task-8-blog-post.png

  Scenario: Privacy page loads with content
    Tool: Playwright
    Preconditions: privacy.html
    Steps:
      1. Open privacy.html
      2. Assert page title "Privacy Policy"
      3. Assert at least 5 sections with headings
      4. Assert content is realistic (not lorem ipsum)
    Expected Result: Privacy page has real content
    Evidence: .omo/evidence/task-8-privacy.png

  Scenario: Terms page loads with content
    Tool: Playwright
    Preconditions: terms.html
    Steps:
      1. Open terms.html
      2. Assert page title "Terms of Service"
      3. Assert at least 5 sections with headings
    Expected Result: Terms page has real content
    Evidence: .omo/evidence/task-8-terms.png
  ```

  **Commit**: YES
  - Message: `feat(pages): add blog and legal pages`
  - Files: `blog/index.html`, `blog/post-template.html`, `privacy.html`, `terms.html`
  - Pre-commit: None

- [x] 9. Language Switcher + i18n UI

  **What to do**:
  - Update `js/language.js` with full functionality:
    - Language data object with UI strings for EN/PT/ES
    - CTA text: EN="Get Your Free Diagnosis", PT="Diagnóstico Gratuito", ES="Diagnóstico Gratis"
    - Navigation labels for each language
    - Footer text translations
    - Hero headline translations for key pages
  - Update language switcher UI in header/footer:
    - 3 flag buttons: 🇺🇸 EN | 🇧🇷 PT | 🇪🇸 ES
    - Active language has pink underline or highlight
    - Click switches UI text (using data attributes)
  - Add `data-i18n` attributes to translatable elements in all HTML files:
    - CTA buttons, nav links, hero headlines, section titles
    - Footer text, form labels
  - Store preference in localStorage
  - On page load, apply stored language preference

  **Must NOT do**:
  - No actual page routing (all pages stay same URL)
  - No full content translation (just UI elements and key headlines)
  - No external translation API

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: JS utility work, well-defined scope
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Tasks 7, 8)
  - **Parallel Group**: Wave 3 (with Tasks 7, 8)
  - **Blocks**: Tasks 10, 11
  - **Blocked By**: None (can start in parallel, but works best after pages exist)

  **References**:

  **Pattern References**:
  - `docs/website-plan-v3.md` lines 572-616 — i18n structure and differences per language
  - All HTML files created in Tasks 4-8 — Elements to add data-i18n attributes

  **WHY Each Reference Matters**:
  - Plan specifies exact translations for CTA, niches, social proof
  - HTML files need data-i18n attributes added

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: Language switcher toggles UI text
    Tool: Playwright
    Preconditions: index.html with updated js/language.js
    Steps:
      1. Open index.html at 1440px
      2. Assert CTA button shows "Get Your Free Diagnosis" (EN default)
      3. Click 🇧🇷 PT flag
      4. Assert CTA changes to "Diagnóstico Gratuito"
      5. Assert nav items change to Portuguese
      6. Click 🇪🇸 ES flag
      7. Assert CTA changes to "Diagnóstico Gratis"
    Expected Result: Language switch updates UI text
    Evidence: .omo/evidence/task-9-language-switch.png

  Scenario: Language preference persists
    Tool: Playwright
    Preconditions: index.html
    Steps:
      1. Open index.html
      2. Click 🇧🇷 PT flag
      3. Close page
      4. Reopen index.html
      5. Assert CTA still shows "Diagnóstico Gratuito"
    Expected Result: Language stored in localStorage
    Evidence: .omo/evidence/task-9-language-persist.png

  Scenario: Active language has visual indicator
    Tool: Playwright
    Preconditions: index.html
    Steps:
      1. Open at 1440px
      2. Assert EN flag has highlight/underline
      3. Click PT flag
      4. Assert PT flag now has highlight, EN loses it
    Expected Result: Active language visually distinct
    Evidence: .omo/evidence/task-9-language-active.png
  ```

  **Commit**: YES
  - Message: `feat(i18n): add language switcher UI`
  - Files: `js/language.js`, all HTML files (data-i18n attributes)
  - Pre-commit: None

- [x] 10. Responsive Refinement

  **What to do**:
  - Audit ALL pages at 3 breakpoints: 375px (mobile), 768px (tablet), 1440px (desktop)
  - Fix responsive issues across all pages:
    - **Mobile (375px)**:
      - Hero headline: Reduce to ~32px
      - Cards: Stack to single column
      - Navigation: Hamburger menu only
      - Footer: Stack to single column
      - Comparison table: Horizontal scroll or stacked layout
      - Forms: Full-width fields
    - **Tablet (768px)**:
      - Cards: 2-column grid
      - Navigation: May show abbreviated nav or hamburger
      - Hero: ~48px headline
    - **Desktop (1440px)**:
      - Full layout as designed
      - Max-width container centered
  - Add responsive CSS media queries to `css/base.css` and `css/components.css`
  - Test touch targets on mobile (min 44px)
  - Ensure no horizontal overflow at any breakpoint

  **Must NOT do**:
  - No separate mobile HTML files
  - No user-agent detection — pure CSS media queries
  - No separate mobile stylesheet

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Responsive design requires visual precision at each breakpoint
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Tasks 11, 12)
  - **Parallel Group**: Wave 4 (with Tasks 11, 12)
  - **Blocks**: F1-F4
  - **Blocked By**: Tasks 4-8 (needs pages to exist)

  **References**:

  **Pattern References**:
  - `docs/screenshots/pomelo/mobile/` — All mobile screenshots for reference
  - `docs/screenshots/pomelo/mobile/01-nav.png` — Mobile nav reference
  - `docs/screenshots/pomelo/mobile/00-full-page-p1.png` — Mobile full page
  - All HTML files in `/`, `/services/`, `/industries/`, `/blog/`

  **WHY Each Reference Matters**:
  - Mobile screenshots show exact responsive target
  - HTML files need responsive fixes applied

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: Homepage responsive at 375px
    Tool: Playwright
    Preconditions: index.html with responsive CSS
    Steps:
      1. Open index.html at 375px
      2. Assert no horizontal overflow (scrollWidth <= viewport)
      3. Assert hero headline is readable (~32px)
      4. Assert cards stack to single column
      5. Assert hamburger menu visible
      6. Assert footer stacks vertically
    Expected Result: Mobile layout is usable
    Evidence: .omo/evidence/task-10-homepage-mobile.png

  Scenario: Homepage responsive at 768px
    Tool: Playwright
    Preconditions: index.html
    Steps:
      1. Open at 768px
      2. Assert no horizontal overflow
      3. Assert cards show 2-column grid
      4. Assert hero headline ~48px
    Expected Result: Tablet layout is balanced
    Evidence: .omo/evidence/task-10-homepage-tablet.png

  Scenario: Contact form usable on mobile
    Tool: Playwright
    Preconditions: contact.html
    Steps:
      1. Open at 375px
      2. Assert form fields are full-width
      3. Assert submit button is full-width
      4. Assert all fields are tappable (min 44px height)
    Expected Result: Form is mobile-friendly
    Evidence: .omo/evidence/task-10-contact-mobile.png

  Scenario: Comparison table scrolls on mobile
    Tool: Playwright
    Preconditions: pricing.html
    Steps:
      1. Open at 375px
      2. Assert table is scrollable or stacked
      3. Assert all columns accessible
    Expected Result: Table content accessible on mobile
    Evidence: .omo/evidence/task-10-pricing-mobile.png
  ```

  **Commit**: YES
  - Message: `fix(responsive): refine mobile and tablet layouts`
  - Files: `css/base.css`, `css/components.css`
  - Pre-commit: None

- [x] 11. Animations & Micro-interactions

  **What to do**:
  - Update `css/animations.css` with:
    - `.fade-in`: Opacity 0 → 1, translateY 20px → 0, 0.6s ease
    - `.slide-in-left`: TranslateX -50px → 0
    - `.slide-in-right`: TranslateX 50px → 0
    - `.scale-in`: Scale 0.9 → 1
    - `.stagger-1` through `.stagger-4`: Animation delays for sequential reveals
  - Update `js/main.js` Intersection Observer:
    - Add `.animate-in` class when elements enter viewport
    - Support `data-animation` attribute for animation type
    - Support `data-delay` attribute for custom delays
  - Add animations to key elements across all pages:
    - Hero section: Fade-in on load
    - Stat cards: Stagger fade-in on scroll
    - Feature cards: Scale-in on scroll
    - Section headings: Slide-in on scroll
    - CTA buttons: Subtle pulse on hover
  - Add hover micro-interactions:
    - Cards: translateY(-4px) + shadow increase
    - Buttons: Scale(1.02) + glow
    - Links: Underline slide-in from left
  - Ensure animations are performant (use transform/opacity only)
  - Add `prefers-reduced-motion` media query to disable animations

  **Must NOT do**:
  - No heavy JavaScript animation libraries (GSAP, anime.js)
  - No animations that cause layout shifts
  - No animations longer than 0.8s
  - No infinite loop animations (except subtle pulse on CTA)

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Animations require visual finesse and performance awareness
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Tasks 10, 12)
  - **Parallel Group**: Wave 4 (with Tasks 10, 12)
  - **Blocks**: F1-F4
  - **Blocked By**: Tasks 4-8 (needs pages to animate)

  **References**:

  **Pattern References**:
  - `docs/.extract-design-system/normalized.json` — Effects: "pink/magenta glow effects on decorative elements"
  - `docs/screenshots/pomelo/desktop/` — Visual reference for how Pomelo uses effects

  **WHY Each Reference Matters**:
  - Design system notes glow effects as key visual element
  - Screenshots show subtle animation targets

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: Scroll animations trigger on viewport entry
    Tool: Playwright
    Preconditions: index.html with animations
    Steps:
      1. Open index.html at 1440px
      2. Scroll down slowly
      3. Assert elements with .animate-in get animated
      4. Assert stat cards fade in with stagger
      5. Assert no janky layout shifts during animation
    Expected Result: Smooth scroll animations
    Evidence: .omo/evidence/task-11-scroll-animations.png

  Scenario: Card hover effects work
    Tool: Playwright
    Preconditions: index.html
    Steps:
      1. Hover over industry card
      2. Assert card lifts (translateY)
      3. Assert shadow increases
      4. Move mouse away, card returns to normal
    Expected Result: Hover micro-interaction smooth
    Evidence: .omo/evidence/task-11-card-hover.png

  Scenario: Reduced motion disables animations
    Tool: Playwright
    Preconditions: index.html
    Steps:
      1. Emulate prefers-reduced-motion: reduce
      2. Open index.html
      3. Scroll down
      4. Assert elements appear without animation
    Expected Result: Animations respect reduced motion preference
    Evidence: .omo/evidence/task-11-reduced-motion.png
  ```

  **Commit**: YES
  - Message: `feat(animations): add scroll animations and micro-interactions`
  - Files: `css/animations.css`, `js/main.js`
  - Pre-commit: None

- [x] 12. Accessibility & Performance

  **What to do**:
  - **Accessibility audit and fixes** across all pages:
    - Add proper heading hierarchy (h1 → h2 → h3, no skipping)
    - Add alt text to all images/placeholders
    - Ensure color contrast ratio ≥ 4.5:1 for text (check pink on dark)
    - Add aria-labels to icon-only buttons (WhatsApp, social links)
    - Add aria-expanded to FAQ toggles
    - Add skip-to-content link
    - Ensure focus styles are visible (outline on keyboard focus)
    - Add role="navigation" to nav, role="main" to main content
    - Form fields have associated labels
  - **Performance optimization**:
    - Add `loading="lazy"` to images below the fold
    - Minimize CSS (remove unused styles)
    - Ensure Geist font uses `font-display: swap`
    - Add `<meta name="viewport">` tag to all pages
    - Add `<meta name="description">` to all pages
    - Add Open Graph meta tags to homepage
  - **HTML validation**:
    - Run html-validate on all pages
    - Fix any validation errors

  **Must NOT do**:
  - No visual changes (just a11y/perf fixes)
  - No JavaScript performance optimization (keep simple)
  - No build tools for minification

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Systematic audit and fix pattern, well-defined checklist
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Tasks 10, 11)
  - **Parallel Group**: Wave 4 (with Tasks 10, 11)
  - **Blocks**: F1-F4
  - **Blocked By**: Tasks 4-8 (needs pages to audit)

  **References**:

  **Pattern References**:
  - All HTML files in the project
  - `css/tokens.css` — Color values for contrast checking

  **WHY Each Reference Matters**:
  - All pages need a11y audit
  - Color tokens needed to verify contrast ratios

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: Heading hierarchy is correct
    Tool: Bash (grep)
    Preconditions: All HTML files created
    Steps:
      1. Grep all HTML files for <h[1-6] tags
      2. Verify each page has exactly one h1
      3. Verify no heading levels are skipped (h1 → h3 without h2)
    Expected Result: Valid heading hierarchy
    Evidence: .omo/evidence/task-12-heading-hierarchy.txt

  Scenario: Color contrast meets WCAG AA
    Tool: Playwright
    Preconditions: index.html
    Steps:
      1. Check pink (#EC4899) text on dark (#080C21) background
      2. Calculate contrast ratio
      3. Assert ratio ≥ 4.5:1
    Expected Result: Text is readable
    Evidence: .omo/evidence/task-12-contrast.png

  Scenario: Keyboard navigation works
    Tool: Playwright
    Preconditions: index.html
    Steps:
      1. Tab through page
      2. Assert focus is visible on all interactive elements
      3. Assert can reach all links and buttons via keyboard
      4. Assert skip-to-content link works
    Expected Result: Full keyboard accessibility
    Evidence: .omo/evidence/task-12-keyboard-nav.png

  Scenario: All pages have viewport meta tag
    Tool: Bash (grep)
    Preconditions: All HTML files
    Steps:
      1. Grep all HTML files for viewport meta tag
      2. Assert every page has <meta name="viewport" content="width=device-width, initial-scale=1.0">
    Expected Result: Viewport tag present in all pages
    Evidence: .omo/evidence/task-12-viewport-meta.txt
  ```

  **Commit**: YES
  - Message: `fix(a11y): improve accessibility and performance`
  - Files: All HTML files
  - Pre-commit: None

---

## Final Verification Wave

> 4 review agents run in PARALLEL. ALL must APPROVE. Present consolidated results to user and get explicit "okay" before completing.

- [x] F1. **Plan Compliance Audit** — `oracle`
  Read the plan end-to-end. For each "Must Have": verify implementation exists (read file, check element). For each "Must NOT Have": search codebase for forbidden patterns — reject with file:line if found. Check evidence files exist in .omo/evidence/. Compare deliverables against plan.
  Output: `Must Have [N/N] | Must NOT Have [N/N] | Tasks [N/N] | VERDICT: APPROVE/REJECT`

- [x] F2. **Visual Fidelity Review** — `unspecified-high`
  Compare each page against Pomelo screenshots in `docs/screenshots/pomelo/desktop/` and `docs/screenshots/pomelo/mobile/`. Check: color accuracy (#080C21, #EC4899), typography (Geist font, sizes), spacing, card styles, gradient effects. Flag any visual deviations >10%.
  Output: `Desktop [N/N match] | Mobile [N/N match] | Colors [PASS/FAIL] | Typography [PASS/FAIL] | VERDICT`

- [x] F3. **Responsive QA** — `unspecified-high`
  Test ALL pages at 375px (mobile), 768px (tablet), 1440px (desktop). Check: hamburger menu works, text readable, cards stack properly, images scale, no horizontal overflow. Capture screenshots at each breakpoint.
  Output: `Mobile [N/N] | Tablet [N/N] | Desktop [N/N] | VERDICT`

- [x] F4. **Scope Fidelity Check** — `deep`
  For each task: read "What to do", check actual files created. Verify 1:1 — everything in plan was built (no missing), nothing beyond plan was built (no creep). Check "Must NOT do" compliance. Flag unaccounted files.
  Output: `Tasks [N/N compliant] | Unaccounted [CLEAN/N files] | VERDICT`

---

## Commit Strategy

| Wave | Message | Files | Pre-commit |
|------|---------|-------|------------|
| 1 | `feat(design): add design system tokens and base styles` | css/* | — |
| 1 | `feat(layout): add header, footer, and card components` | css/components/*, partials/* | — |
| 1 | `feat(js): add shared JavaScript modules` | js/* | — |
| 2 | `feat(pages): add homepage` | index.html | — |
| 2 | `feat(pages): add service pages` | services/*.html | — |
| 2 | `feat(pages): add industry pages` | industries/*.html | — |
| 3 | `feat(pages): add pricing, about, contact` | pricing.html, about.html, contact.html | — |
| 3 | `feat(pages): add blog and legal pages` | blog/*.html, privacy.html, terms.html | — |
| 3 | `feat(i18n): add language switcher UI` | js/language.js, css/components/* | — |
| 4 | `fix(responsive): refine mobile and tablet layouts` | css/* | — |
| 4 | `feat(animations): add scroll animations and micro-interactions` | js/animations.js, css/animations.css | — |
| 4 | `fix(a11y): improve accessibility and performance` | *.html, css/* | — |

---

## Success Criteria

### Verification Commands
```bash
# Open in browser and verify
open index.html  # Expected: Homepage loads with dark theme

# Validate HTML
npx html-validate **/*.html  # Expected: 0 errors

# Check responsive
# Use Playwright at 375px, 768px, 1440px widths
```

### Final Checklist
- [ ] All 14+ pages created
- [ ] Dark theme (#080C21) applied consistently
- [ ] Pink accents (#EC4899) on CTAs
- [ ] Geist font loaded and used
- [ ] Mobile menu functional
- [ ] FAQ accordion works
- [ ] Form validation works
- [ ] Smooth scroll works
- [ ] Sticky header with blur
- [ ] WhatsApp floating button visible
- [ ] Language switcher UI present
- [ ] All internal links work
- [ ] Responsive at all breakpoints
- [ ] Matches Pomelo screenshots
