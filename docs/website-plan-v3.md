# 🌐 PLANO COMPLETO DO SITE — v3.0
## Grav CMS · Hospedagem Compartilhada PHP · Junho 2026

---

> **Stack:** Grav CMS (flat-file, sem banco de dados)
> **Idiomas:** EN (principal) · PT-BR · ES
> **Serviços:** AI Automation · Web Development · E-commerce
> **Posicionamento:** *"Revenue infrastructure for service businesses"*
> **Preços:** Ocultos — CTA único: "Diagnóstico Gratuito" (formulário → email)
> **Referências de design:** Stripe (gradientes premium), Ailum (editorial/luxury), Agência Automação (alta conversão)
> **Nichos:** Site genérico multi-indústria. Foco em dental estética via outbound (email + mensagens)

---

## 1. SITEMAP (PÁGINAS)

```
Homepage (/)
│
├── Services (/services)
│   ├── AI Automation (/services/ai-automation)
│   ├── Web Development (/services/web-development)
│   └── E-commerce (/services/ecommerce)
│
├── Industries (/industries)
│   ├── Dental Aesthetics (/industries/dental-aesthetics)
│   ├── Law Firms (/industries/law-firms)
│   ├── Medical Clinics (/industries/medical-clinics)
│   └── Architecture Firms (/industries/architecture)
│
├── Pricing (/pricing)
│
├── About (/about)
│
├── Contact (/contact) ← Formulário → email
│
├── Blog (/blog)
│   └── [post] (/blog/[slug])
│
├── Privacy (/privacy)
├── Terms (/terms)
│
└── [Language]
    ├── /pt/ (Português)
    └── /es/ (Español)
```

**Total: ~14 páginas + blog**

---

## 2. ESTRUTURA DE CADA PÁGINA

---

### 2.1 HOMEPAGE (/)

*Referências: Single Grain (métricas no hero), Xtract (pain-first), Agência Automação (urgência)*

**Foco: vender o SISTEMA INTEGRADO de receita (não componentes isolados)**

```
┌────────────────────────────────────────────────────────────────┐
│ HEADER (sticky, bg branco com blur)                            │
│                                                                │
│ [Logo]  Services▾  Industries▾  Pricing  About   🇺🇸🇧🇷🇪🇸   │
│                                                 [Get Started]  │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│ HERO (gradient mesh BG: violet escuro → indigo)                │
│                                                                │
│   "Stop Losing Revenue to                                    │
│    Slow Response Times."                                      │
│                                                                │
│   "We install marketing systems that capture, qualify,        │
│    and convert every lead — 24/7, automatically.              │
│    While you focus on your craft."                            │
│                                                                │
│   [Get Your Free Diagnosis →]                                │
│   [See How It Works ↓]                                        │
│                                                                │
│   Métricas (inline bar):                                      │
│   XX+ Businesses │ XX% Leads Recovered │ <1min Response       │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│ TRUST BAR (white, sutil)                                      │
│   "Trusted by forward-thinking businesses"                    │
│   [Logo 1] [Logo 2] [Logo 3] [Logo 4]                        │
│   (Quando não houver logos: usar badges genéricos             │
│    "Powered by GoHighLevel" "ManyChat Partner" etc.)          │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│ PROBLEM SECTION (white BG) ← PATTERN: pain-first              │
│                                                                │
│   "The Revenue Leak Nobody Talks About"                       │
│                                                                │
│   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│   │ 📱 85%       │  │ ⏱️ 5 minutes │  │ 💰 $2K+     │       │
│   │              │  │              │  │              │       │
│   │ of leads go  │  │ That's all   │  │ Lost per     │       │
│   │ unanswered   │  │ you have to  │  │ unanswered   │       │
│   │ on WhatsApp  │  │ convert a    │  │ lead in high │       │
│   │ and Instagram│  │ visitor into │  │ -value       │       │
│   │              │  │ a customer   │  │ services     │       │
│   └──────────────┘  └──────────────┘  └──────────────┘       │
│                                                                │
│   "While you're busy delivering great service,                │
│    your next customer is moving on to a competitor            │
│    who answered first."                                       │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│ SOLUTION — THE REVENUE SYSTEM (dark section BG: #0F172A)      │
│                                                                │
│   "Your Complete Revenue System"                              │
│                                                                │
│   "One integrated system that captures, qualifies,            │
│    and converts leads across every channel — 24/7."           │
│                                                                │
│   ┌─────────────────────────────────────────────────┐         │
│   │                                                 │         │
│   │  ┌─────────┐  ┌─────────┐  ┌─────────┐        │         │
│   │  │ 💬      │  │ 📊      │  │ 🔄      │        │         │
│   │  │ Capture │→ │ Qualify │→ │ Convert │        │         │
│   │  │         │  │         │  │         │        │         │
│   │  │WhatsApp │  │CRM +    │  │Auto     │        │         │
│   │  │+ IG bot │  │Dashboard│  │Follow-up│        │         │
│   │  └─────────┘  └─────────┘  └─────────┘        │         │
│   │                                                 │         │
│   │  ┌─────────┐  ┌─────────┐                      │         │
│   │  │ 🌐      │  │ 📈      │                      │         │
│   │  │ Website │  │ Measure │                      │         │
│   │  │         │  │         │                      │         │
│   │  │Revenue- │  │Revenue  │                      │         │
│   │  │ready    │  │Metrics  │                      │         │
│   │  └─────────┘  └─────────┘                      │         │
│   │                                                 │         │
│   └─────────────────────────────────────────────────┘         │
│                                                                │
│   "Every component works together. No leads fall              │
│    through the cracks."                                       │
│                                                                │
│   [Get Your Free Diagnosis →]                                │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│ HOW IT WORKS (white BG) ← 3 passos simples                   │
│                                                                │
│   "3 Steps to a Revenue Machine"                              │
│                                                                │
│   ①                    ②                    ③                 │
│   ┌──┐                 ┌──┐                 ┌──┐              │
│   │  │  Diagnosis      │  │  We Build       │  │  You Grow    │
│   └──┘                 └──┘                 └──┘              │
│                                                                │
│   "We find where     "We install your      "Leads flow in.   │
│    you're losing       revenue system       Conversions go    │
│    revenue"            in 7 days"           up. You focus on   │
│                                             your business."   │
│                                                                │
│   ─────────────────────────────────────────────────           │
│   (timeline connecting the 3 steps)                           │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│ INDUSTRIES (gradient card section)                             │
│                                                                │
│   "Built for High-Value Service Businesses"                   │
│                                                                │
│   ┌────────────────┐  ┌────────────────┐                     │
│   │ 🦷 Dental      │  │ ⚖️ Law Firms   │                     │
│   │    Aesthetics  │  │                │                     │
│   │                │  │                │                     │
│   │ "Never lose a  │  │ "Qualify cases │                     │
│   │  patient to a  │  │  before the    │                     │
│   │  slow reply"   │  │  first call"   │                     │
│   │                │  │                │                     │
│   │ [Explore →]    │  │ [Explore →]    │                     │
│   └────────────────┘  └────────────────┘                     │
│                                                                │
│   ┌────────────────┐  ┌────────────────┐                     │
│   │ 🏥 Medical     │  │ 🏗️ Architecture│                     │
│   │    Clinics     │  │    Firms       │                     │
│   │                │  │                │                     │
│   │ "Your schedule │  │ "Filter high   │                     │
│   │  stays full"   │  │  -value leads" │                     │
│   │                │  │                │                     │
│   │ [Explore →]    │  │ [Explore →]    │                     │
│   └────────────────┘  └────────────────┘                     │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│ SOCIAL PROOF / METRICS (dark section #0F172A)                 │
│                                                                │
│   ┌────────────┐  ┌────────────┐  ┌────────────┐            │
│   │    XX+     │  │    <1min   │  │    XX%     │            │
│   │ Businesses │  │ Average    │  │ Leads      │            │
│   │ Served     │  │ Response   │  │ Recovered  │            │
│   └────────────┘  └────────────┘  └────────────┘            │
│                                                                │
│   (Quando houver testimonials:)                               │
│   ┌──────────────────────────────────────────┐               │
│   │ "Since installing the system, we haven't │               │
│   │  lost a single lead. Our bookings are up │               │
│   │  40% in the first month."                │               │
│   │                                          │               │
│   │  — Dr. [Name], [Clinic Name]             │               │
│   └──────────────────────────────────────────┘               │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│ FINAL CTA (gradient BG: violet→indigo)                        │
│                                                                │
│   "Ready to Stop Leaving Money on the Table?"                 │
│                                                                │
│   "15-minute call. We'll show you exactly where               │
│    your business is leaking revenue — and how to fix it."     │
│                                                                │
│   [Get Your Free Diagnosis →]                                │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│ FOOTER                                                         │
│                                                                │
│ [Logo + tagline]  │  Services    │  Industries   │  Company   │
│                   │  AI Automat. │  Dental       │  About     │
│ "Revenue          │  Web Dev     │  Law Firms    │  Blog      │
│  infrastructure   │  E-commerce  │  Medical      │  Contact   │
│  for modern       │              │  Architecture │            │
│  businesses"      │              │               │  Legal     │
│                   │              │               │  Privacy   │
│                   │              │               │  Terms     │
│                                                                │
│ 🇺🇸 EN │ 🇧🇷 PT │ 🇪🇸 ES                                      │
│                                                                │
│ © 2026 [Brand] │ WhatsApp icon │ Instagram icon │ LinkedIn    │
│                                                                │
│ WhatsApp button flutuante (canto inferior direito)             │
└────────────────────────────────────────────────────────────────┘
```

---

### 2.2 AI AUTOMATION (/services/ai-automation)

**Foco: componente isolado — detalhar o que faz, não vender o pacote**

```
HERO (dark gradient):
"Your 24/7 Revenue Engine"
"AI-powered WhatsApp & Instagram automation that captures,
qualifies, and books every lead — while you sleep."
[Get Your Free Diagnosis →]

PROBLEM → SOLUTION (split section):
Left: "Every minute a lead goes unanswered, you lose revenue."
Right: "Our system responds in <1 minute, 24/7. Every channel."

FEATURES GRID (3×2, cards com ícones):
┌─────────────┬─────────────┬─────────────┐
│ 💬 WhatsApp │ 📸 Instagram│ 🔄 Auto     │
│    Bot      │    DM Bot   │   Follow-Up │
├─────────────┼─────────────┼─────────────┤
│ 📊 CRM      │ 📅 Smart    │ 📈 Revenue  │
│   Dashboard │   Booking   │   Metrics   │
└─────────────┴─────────────┴─────────────┘

WHAT'S INCLUDED (checklist com ícones ✓):
✓ WhatsApp Business API configured
✓ Instagram DM automation
✓ Qualification flow (asks the right questions)
✓ Auto-booking into your calendar
✓ Follow-up sequences (7-day, 14-day reactivation)
✓ CRM pipeline (Lead → Qualified → Booked → Converted)
✓ Real-time dashboard
✓ 15-minute team training

HOW IT WORKS (vertical timeline):
1. Diagnosis (Day 1) → We audit your lead flow
2. Build (Day 2-5) → We configure everything
3. Test (Day 6) → Simulate real leads
4. Train (Day 7) → Quick team walkthrough
5. Go Live → System running 24/7

TIERS (3 cards — SEM PREÇOS):
┌───────────────┬───────────────┬───────────────┐
│ ⬇️ STARTER    │ 🎯 CORE       │ ⬆️ GROWTH     │
│               │               │               │
│ WhatsApp + IG │ Everything in │ Core PLUS:    │
│ bot           │ Starter       │               │
│ Auto responses│ PLUS:         │ Social media  │
│ FAQ menu      │ CRM dashboard │ automation    │
│               │ Auto follow-up│ Content       │
│               │ Booking system│ templates     │
│               │ Website/LP    │ Multi-platform│
│               │ Metrics       │               │
│               │               │               │
│ [Get Your     │ [Get Your     │ [Get Your     │
│  Diagnosis]   │  Diagnosis]   │  Diagnosis]   │
│               │ (MAIS POPULAR)│               │
└───────────────┴───────────────┴───────────────┘

* Preços NÃO mostrados — "Get Your Free Diagnosis for a custom recommendation"

CASE STUDY TEASER:
"[Clinic Name] went from 0 automated responses to handling
100+ leads/month — with zero additional staff."
[Read the Full Story →]

FAQ (accordion):
- How fast does the bot respond? < 1 minute
- Does it work on WhatsApp and Instagram? Yes, both
- Can it book appointments? Yes, directly into your calendar
- What if a lead needs a human? Seamless handoff to your team
- How long until it's live? 7 business days

FINAL CTA:
"Your competitors are already automating. Every day you wait
is revenue lost."
[Get Your Free Diagnosis →]
```

---

### 2.3 WEB DEVELOPMENT (/services/web-development)

**Foco: componente isolado**

```
HERO:
"Websites That Convert Clicks Into Revenue"
"Fast, beautiful, mobile-first websites designed to turn
visitors into customers."
[Get Your Free Diagnosis →]

PORTFOLIO GRID (placeholder):
"Results We've Delivered"
[Imagem 1] [Imagem 2] [Imagem 3]
(usar screenshots de sites reais quando disponíveis)

WHAT'S INCLUDED:
✅ Responsive design (mobile-first)
✅ Conversion-focused copywriting
✅ WhatsApp/contact integration
✅ SEO basics (titles, meta, speed)
✅ Google Analytics setup
✅ 1 revision round

DELIVERY PROCESS:
Briefing → Wireframe → Design & Dev → QA → Review → Launch
Timeline: Up to 7-14 days

* Preços NÃO mostrados — "Get Your Free Diagnosis for a custom recommendation"

CTA: "Get Your Revenue-Ready Website"
```

---

### 2.4 E-COMMERCE (/services/ecommerce)

**Foco: componente isolado**

```
HERO:
"Online Stores Built to Sell From Day One"
"Complete e-commerce — Shopify or WooCommerce. You focus on
the product, we focus on the sale."
[Get Your Free Diagnosis →]

WHAT'S INCLUDED:
✅ Custom theme setup
✅ Products listed
✅ Payment gateway configured
✅ Shipping setup
✅ Essential pages (About, Contact, FAQ, Policies)
✅ Basic SEO
✅ Mobile-responsive

PLATFORMS:
┌─────────────────────┬─────────────────────┐
│ 🇧🇷 BRAZIL          │ 🇺🇸 USA / GLOBAL    │
│                     │                     │
│ WooCommerce stores  │ Shopify stores      │
│ Custom theme        │ Custom theme        │
│ Full setup          │ Full setup          │
│ Payment & shipping  │ Payment & shipping  │
│                     │                     │
│ [Get Your Free      │ [Get Your Free      │
│  Diagnosis →]       │  Diagnosis →]       │
└─────────────────────┴─────────────────────┘

* Preços NÃO mostrados — "Get Your Free Diagnosis for a custom recommendation"

CTA: "Launch Your Online Store"
```

---

### 2.5 INDUSTRY PAGES (/industries/[slug])

**Foco: vender o SISTEMA INTEGRADO para cada vertical**
**Cada página apresenta o pacote completo (bot + CRM + website + follow-up) adaptado à indústria**

**Template repetido para cada vertical:**

```
HERO (com imagem de fundo da indústria):
"[Headline específica da indústria]"
"[Subheadline com dor específica]"
[Get Your Free Diagnosis →]

THE PROBLEM:
"X% of [industry] businesses lose leads because..."
[3-4 pain points específicos da indústria]

OUR SOLUTION — YOUR REVENUE SYSTEM:
"What We Build for [Industry]"
[Diagrama do sistema integrado adaptado à indústria]

┌───────────────┐    ┌───────────────┐    ┌───────────────┐
│ 💬 Capture    │ →  │ 📊 Qualify    │ →  │ 🔄 Convert    │
│               │    │               │    │               │
│ WhatsApp bot  │    │ CRM pipeline  │    │ Auto follow-up│
│ com menu de   │    │ customizado   │    │ + agendamento │
│ [procedimentos│    │ para [indúst.]│    │               │
│ da indústria] │    │               │    │               │
└───────────────┘    └───────────────┘    └───────────────┘

+ Revenue-Ready Website integrado
+ Revenue Metrics Dashboard

HOW IT WORKS:
[3-5 passos customizados para a indústria]

COMPLIANCE (se aplicável):
- Para dental: "CFO-compliant communication"
- Para advocacia: "OAB-compliant lead qualification"

METRICS:
[Indústria-specific metrics: response time, booking rate, etc.]

TESTIMONIALS:
[Placeholder para quotes reais]

FAQ:
[Perguntas específicas da indústria]

FINAL CTA:
"Stop losing [patients/clients] to slow response times"
[Get Your Free Diagnosis →]
```

**Páginas de indústria:**

#### 🦷 Dental Aesthetics (/industries/dental-aesthetics)
- Hero: "Never Lose a Patient to a Slow Reply"
- Dor: "78% of dental leads choose the clinic that responds first"
- Bot menu: procedimentos estéticos (clareamento, lentes, implantes)
- Compliance: CFO-compliant
- Outbound focus: Esta página recebe tráfego de campanhas outbound direcionadas a clínicas de odonto estética

#### ⚖️ Law Firms (/industries/law-firms)
- Hero: "Qualify Cases Before the First Call"
- Dor: "High-value clients expect instant response — or they call the next firm"
- Bot: triagem de tipo de caso, urgência, agendamento de consulta
- Compliance: OAB-compliant

#### 🏥 Medical Clinics (/industries/medical-clinics)
- Hero: "Your Schedule Stays Full — Automatically"
- Dor: "Empty slots cost clinics thousands per month"
- Bot: agendamento, lembrete, confirmação, pré-consulta

#### 🏗️ Architecture Firms (/industries/architecture)
- Hero: "Filter High-Value Leads, Automatically"
- Dor: "Not every inquiry is worth a proposal — qualify first"
- Bot: tipo de projeto, orçamento estimado, agendamento de visita

---

### 2.6 PRICING (/pricing)

```
HERO:
"Simple, Transparent Pricing"
"No hidden fees. No long-term contracts. Just results."

SERVICE CARDS (SEM VALORES):
┌──────────────┬──────────────┬──────────────┐
│ AI           │ WEB          │ E-COMMERCE   │
│ AUTOMATION   │ DEVELOPMENT  │              │
│              │              │              │
│ Starter      │ Landing      │ WooCommerce  │
│ Core         │ pages &      │ & Shopify    │
│ Growth       │ websites     │ stores       │
│              │              │              │
│ [Get Your    │ [Get Your    │ [Get Your    │
│  Diagnosis]  │  Diagnosis]  │  Diagnosis]  │
└──────────────┴──────────────┴──────────────┘

"Each business is unique. Book a free 15-minute diagnosis
 and we'll recommend the right solution — no obligations."

COMPARISON TABLE (simplificada, SEM VALORES):
Feature          │ Starter │ Core  │ Growth
WhatsApp bot     │   ✅    │  ✅   │  ✅
Instagram bot    │   ✅    │  ✅   │  ✅
Auto responses   │   ✅    │  ✅   │  ✅
CRM dashboard    │   ❌    │  ✅   │  ✅
Auto follow-up   │   ❌    │  ✅   │  ✅
Booking system   │   ❌    │  ✅   │  ✅
Website/LP       │   ❌    │  ✅   │  ✅
Social automation│   ❌    │  ❌   │  ✅

CTA: "Get Your Free Diagnosis"
```

---

### 2.7 ABOUT (/about)

```
HERO:
"We Build Revenue Machines"
"Infrastructure that works while you focus on what you do best."

OUR STORY:
[Breve história — foco na missão de parar a "fuga de lucro"]

OUR VALUES:
🎯 Revenue-First — We sell results, never tools
⚡ Speed — 7-day delivery, <1min response systems
🔍 Transparency — Clear pricing, real metrics, no BS

OUR APPROACH:
Diagnose → Build → Launch → Optimize

CTA: "Let's Talk About Your Business"
```

---

### 2.8 CONTACT (/contact)

```
FORMULÁRIO (Grav Form Plugin → email):
- Name
- Email
- Phone/WhatsApp
- Business type (dropdown)
- What are you looking for? (dropdown: AI Automation / Website / E-commerce / Other)
- Message

→ Envia para email configurado no Grav
→ Auto-reply confirmando recebimento (template no Grav)

INFO:
📍 [City, Country]
📱 WhatsApp: [number]
📧 Email: [address]
📸 Instagram: @[handle]

NOTA: Agendamento online (Calendly ou similar) será integrado em fase futura.

CTA: "Get Your Free Diagnosis"
```

---

## 3. INTERNACIONALIZAÇÃO

### 3.1 Estrutura (Grav Native i18n)

| Idioma | Prefixo | Foco |
|--------|---------|------|
| English | `/` (root) | Global + EUA |
| Português | `/pt/` | Brasil (odonto estética, automação) |
| Español | `/es/` | LatAm (clínicas, serviços) |

### 3.2 Diferenças por Idioma

| Elemento | EN | PT-BR | ES |
|----------|-----|-------|-----|
| CTA WhatsApp | "Get Your Free Diagnosis" | "Diagnóstico Gratuito" | "Diagnóstico Gratis" |
| Nicho hero | General service businesses | Odonto estética / clínicas | Clínicas de estética |
| Social proof | "XX businesses" | "XX+ clínicas" | "XX+ clínicas" |
| Compliance | — | CFO (odontologia) | — |
| WhatsApp destaque | Secundário | Primário (botão flutuante) | Secundário |

### 3.3 Implementação Grav

**Plugins necessários:**
- `Grav Admin Plugin` — painel de administração
- `LangSwitch` — language switcher no header (bandeiras 🇺🇸🇧🇷🇪🇸)
- `Language Selector` — alternador integrado ao Grav

**Estrutura de pastas:**
```
user/
├── pages/
│   ├── 01.home/
│   │   ├── default.en.md
│   │   ├── default.pt.md
│   │   └── default.es.md
│   ├── 02.services/
│   │   ├── ai-automation/
│   │   │   ├── default.en.md
│   │   │   ├── default.pt.md
│   │   │   └── default.es.md
│   │   └── ...
│   └── ...
```

**hreflang:** Grav gera automaticamente com LangSwitch.

---

## 4. STACK TÉCNICA

### Grav CMS (Flat-File)

| Componente | Ferramenta | Custo |
|-----------|-----------|-------|
| CMS | Grav Core | Grátis |
| Admin Panel | Grav Admin Plugin | Grátis |
| i18n | Grav LangSwitch | Grátis |
| Forms | Grav Form Plugin | Grátis |
| SEO | Grav SEO Plugin | Grátis |
| Sitemap | Grav Sitemap Plugin | Grátis |
| Cache | Grav built-in (file cache) | Grátis |
| Templating | Twig (built-in) | Grátis |
| Hospedagem | Hostinger / Hostgator / compartilhado PHP | $3-10/mês |
| Domínio | Namecheap / Registro.br | $10-12/ano |
| Analytics | GA4 | Grátis |
| SSL | Let's Encrypt (via host) | Grátis |
| Form spam | Honeypot (built-in no Grav Form) | Grátis |

**Custo total estimado:** ~$50-130/ano (domínio + hospedagem)

### Requisitos do Servidor

- PHP 8.1+
- extações: mbstring, curl, gd, json, zip
- ~64MB memory_limit (recomendado 128MB)

### Tema

Criar tema custom com Twig templates seguindo a identidade visual.
Base: starter theme do Grav (`user/themes/custom/`).

---

## 5. SEO

### 5.1 Technical Checklist

- [ ] SSL (HTTPS)
- [ ] XML Sitemap (Grav SEO plugin gera automaticamente)
- [ ] robots.txt
- [ ] hreflang tags (Grav LangSwitch gera automaticamente)
- [ ] Schema markup (Organization, LocalBusiness, Service)
- [ ] Core Web Vitals < green thresholds
- [ ] Image optimization (WebP manual ou via build script)
- [ ] Lazy loading (native `loading="lazy"`)
- [ ] Open Graph + Twitter Cards

### 5.2 Target Keywords

| Page | Primary Keyword | Search Intent |
|------|----------------|---------------|
| Homepage | ai automation agency | Commercial |
| AI Automation | whatsapp automation for business | Commercial |
| AI Automation PT | automação whatsapp clínica | Commercial |
| Web Dev | landing page design service | Commercial |
| E-commerce | shopify store setup service | Commercial |
| Dental | marketing automation dental clinic | Commercial |
| Dental PT | automação whatsapp odonto estética | Commercial |
| Law Firms | ai chatbot law firm | Commercial |

---

## 6. TRACKING & CONVERSÃO

### Eventos Principais

| Evento | Trigger | Page |
|--------|---------|------|
| Diagnosis form submit | Form submit | Todas (formulário → email) |
| WhatsApp click | Link click | Todas |
| Service interest | CTA click by service | Homepage |
| Language switch | Toggle click | Todas |
| Blog read | Page view | Blog |

### Pixels

- Meta Pixel (para remarketing futuro)
- Google Ads tag (para remarketing futuro)
- GA4 events

---

## 7. ROADMAP

### Fase 1 — Foundation (Semana 1-2)
- [ ] Definir nome da marca + domínio
- [ ] Setup hospedagem + PHP 8.1+
- [ ] Instalar Grav CMS + Admin Plugin
- [ ] Configurar i18n (LangSwitch)
- [ ] Criar tema custom (Twig templates com identidade visual)
- [ ] Header/Footer global
- [ ] **Homepage completa** (sistema integrado)

### Fase 2 — Services (Semana 3-4)
- [ ] **AI Automation page**
- [ ] **Web Development page**
- [ ] **E-commerce page**
- [ ] **Pricing page** (sem valores)
- [ ] **About page**
- [ ] **Contact page** (formulário → email)

### Fase 3 — Industries (Semana 5-6)
- [ ] **Dental Aesthetics page** (sistema integrado)
- [ ] **Law Firms page** (sistema integrado)
- [ ] **Medical Clinics page** (sistema integrado)
- [ ] **Architecture page** (sistema integrado)

### Fase 4 — Content & i18n (Semana 6-8)
- [ ] Blog setup + first 5 posts
- [ ] Portuguese translations (all pages)
- [ ] Spanish translations (key pages)
- [ ] SEO optimization pass

### Fase 5 — Polish & Launch (Semana 8)
- [ ] Performance optimization (Grav cache, images)
- [ ] Analytics setup (GA4)
- [ ] Cross-browser/device QA
- [ ] **LAUNCH 🚀**

### Fase 6 — Pós-Lançamento (futuro)
- [ ] Integração de agendamento (Calendly ou similar)
- [ ] Testimonials reais
- [ ] Shopify Landing Page (quando decidir rodar ads)
- [ ] Blog content calendar

---

## 8. BUDGET FINAL

| Item | Custo |
|------|-------|
| Domínio (.com) | ~$12/ano |
| Hospedagem compartilhada PHP | ~$3-10/mês |
| Grav CMS + plugins | $0 |
| Imagens (Unsplash/Pexels) | $0 |
| **Total Ano 1** | **~$50-130/ano** |

---

## 9. ANÁLISE DE CONCORRENTES

*(mantida do v2 — referência válida)*

### 9.1 Brasileiros

| # | Concorrente | Site | Tipo | Nicho | Destaque |
|---|-----------|------|------|-------|----------|
| 1 | **Intelecta** | [intelecta.digital](https://intelecta.digital) | Agência multi-setor | Clínica, jurídico, educação, imobiliário | CTA "Solicitar Diagnóstico" repetido 6x, dark theme + azul elétrico |
| 2 | **Cloudia** | [cloudia.com.br](https://cloudia.com.br) | SaaS produto | Clínicas (dental, medical, estética) | 1000+ clínicas, 15+ integrações |
| 3 | **Ailum** | [ailum.io](https://ailum.io) | SaaS premium | Clínicas médicas/dentais | Design ultra-premium estilo Apple |
| 4 | **Nuzz Labs** | [nuzzlabs.com.br](https://nuzzlabs.com.br) | Agência geral | Todos | Mostra stack, 4-step methodology |
| 5 | **Agência Automação** | [agenciaautomacao.com.br](https://agenciaautomacao.com.br) | Agência alta conversão | Todos | Urgência, chatbot, garantia 30 dias |

### 9.2 Globais

| # | Concorrente | Site | Tipo | Destaque |
|---|-----------|------|------|----------|
| 6 | **Xtract AI** | [xtract.ai](https://xtract.ai) | Agência IA (EUA) | Pain-first storytelling |
| 7 | **Single Grain** | [singlegrain.com](https://singlegrain.com) | Agência marketing IA | Métricas no hero |
| 8 | **Botpress** | [botpress.com](https://botpress.com) | Plataforma IA enterprise | Calculadora de economia |
| 9 | **Synthesia** | [synthesia.io](https://synthesia.io) | Plataforma IA vídeo | 90% Fortune 100 |
| 10 | **Helix Automations** | [helixautomations.co.uk](https://helixautomations.co.uk) | Agência IA (UK) | Template moderno |
| 11 | **TechAhead** | [techaheadcorp.com](https://www.techaheadcorp.com/services/ai-automation) | Agência IA enterprise | SOC2/ISO certified |

---

## 10. MUDANÇAS DO V2 → V3

| v2 | v3 | Motivo |
|----|-----|--------|
| WordPress + Elementor ($59/ano) | **Grav CMS (grátis)** | Sem conteúdo dinâmico, mais controle, codebase menor |
| WPML ou Polylang | **Grav native i18n** | Flat-file, sem plugins adicionais |
| Shopify LP no MVP | **Cortada** | Reduzir escopo, sem tráfego pago inicial |
| Preços visíveis em Web Dev/E-commerce | **Todos escondidos** | CTA único: Diagnóstico Gratuito |
| Calendly como CTA | **Formulário → email** | Agendamento integrado depois |
| WhatsApp como CTA principal | **Botão flutuante WhatsApp** | Formulário como CTA primário |
| Homepage: 4 serviços como cards iguais | **Homepage: sistema integrado** | Alinhamento com posicionamento "revenue infrastructure" |
| Industry pages: features avulsas | **Industry pages: sistema integrado** | Vender o pacote, não componentes |
| Seção Identidade Visual | **Removida** | Será definida separadamente |
| ~$200-350/ano | **~$50-130/ano** | Grav + hospedagem mais barata |
| 15-18 páginas | **~14 páginas** | Sem Shopify LP |

---

*Plano do Site v3.0 — Junho 2026*
*Grav CMS · Hospedagem compartilhada PHP · EN/PT/ES*
*Decisões travadas via grill session em 14/06/2026*
