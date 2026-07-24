# DESIGN.md — AgileVision Technologies

## 1. Objective

AgileVision Technologies should feel like a serious AI-powered technology company that delivers enterprise-grade solutions while developing industry-ready professionals. The design system must convey confidence, precision, and technical authority without descending into coaching-class aesthetics or generic SaaS marketing patterns. Every artifact should feel edited, not decorated, with typography doing the heavy lifting and color used sparingly for emphasis. The quality bar is "portfolio piece for the designer who made it" — enterprise clients should trust us with their most critical AI initiatives, and students should see us as the premium path to a technology career.

## 2. Product Context

- **What the product does:** AgileVision Technologies delivers AI software development, enterprise application solutions, and CBS modernization while running an AI Center of Excellence that develops industry-ready professionals through project-based career programs.
- **Who it's for:** Four distinct audiences — (1) Enterprise CTOs and IT leaders seeking AI development partners, (2) Career-focused students and professionals looking for industry-ready AI skills, (3) HR teams and recruiters seeking pre-assessed technical talent, (4) Universities seeking industry partnerships and AI lab collaborations.
- **Adjacent brands (feel like these):** Scaler (enterprise education hybrid), Accenture (enterprise technology authority), Microsoft (clean professional trust), Infosys (Indian enterprise credibility)
- **Distant brand (do not feel like this):** Traditional coaching institutes — avoids the "batch starting soon" urgency, cartoon illustrations, and discount-driven conversion tactics that signal training rather than technology.
- **Cultural register:** Professional, technical, aspirational. We speak with the authority of engineers who build enterprise AI solutions, not educators selling courses.

## 3. Visual Foundations

### 3a. Color

- **Neutral scale:**
  - `--n-50: #F8FAFC` (subtle backgrounds)
  - `--n-100: #F1F5F9` (hover states)
  - `--n-200: #E2E8F0` (borders)
  - `--n-300: #CBD5E1` (disabled states)
  - `--n-400: #94A3B8` (placeholder text)
  - `--n-500: #64748B` (secondary text)
  - `--n-600: #475569` (body text on light)
  - `--n-700: #334155` (headings on light)
  - `--n-800: #1E293B` (primary dark)
  - `--n-900: #0F172A` (darkest backgrounds)
  - `--n-950: #0A1628` (hero backgrounds)

- **Accent(s):**
  - `--accent-primary: #00D4FF` (AI Cyan — primary CTAs, active states, highlights)
  - `--accent-secondary: #667EEA` (Purple Blue — gradients, secondary accents)
  - `--accent-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%)` (used sparingly for premium feel)

- **Semantic:**
  - `--success: #10B981`
  - `--warning: #F59E0B`
  - `--error: #EF4444`
  - `--info: #3B82F6`

- **Usage rules:** Accent cyan is used once per screen on the primary CTA or the single most important interactive element — never as a section background. Deep blue (#0A1628) is reserved for hero sections and primary navigation. Light backgrounds use --n-50 or white, never pure gray. The purple gradient appears only in decorative elements (borders, subtle overlays) — never as a solid fill.

### 3b. Typography

- **Display face:** Inter, weights 700 (bold) and 800 (extra-bold), tracking -0.02em for headlines
- **Body face:** Inter, weights 400 (regular), 500 (medium), 600 (semibold)
- **Monospace:** JetBrains Mono, weight 400 (for code snippets, technical specifications)
- **Fallback stack:** 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
- **Type scale:** 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 48 / 60 / 72 (minor third ratio ~1.2)
- **Weight discipline:** Headings use 700-800 only. Body text uses 400-500. UI elements (buttons, labels) use 500-600. Never use bold for body paragraphs.

### 3c. Spacing & rhythm

- **Base unit:** 4px
- **Spacing scale:** 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128
- **What "generous" whitespace means:** Section padding is 96px on desktop (64px mobile). Component spacing uses 24-48px gaps. Never let content touch container edges — minimum 16px internal padding.

### 3d. Component seeds

- **Button:** Three variants — Primary (filled #00D4FF, dark text), Secondary (ghost with border, hover fill), Outline (border only, no fill). Height: 44px minimum for accessibility. Border radius: 8px. Never rounded-full unless icon-only.
- **Card / container:** Cards use 1px border with --n-200, 8px border radius, no drop shadow. Background is white or --n-50. Internal padding: 24-32px. Cards are informational containers, not decorative elements.
- **Iconography:** Lucide React, stroke width 1.5px. Icons are 20px for inline use, 24px for standalone, 32px for feature highlights. Never use filled icons.

## 4. Accessibility

- **Text contrast:** Body text against white background must meet 4.5:1 minimum. Large text (24px+) and UI elements must meet 3:1 minimum.
- **Motion:** Respect `prefers-reduced-motion` — all animations disabled when user has reduced motion enabled. Framer Motion animations use `whileInView` with reduced duration (200ms max for subtle effects).
- **Focus indicators:** 2px solid ring in accent cyan (#00D4FF) with 2px offset. Visible on all interactive elements. Never remove focus outlines.
- **Alt text policy:** Informational images describe the content and function. Decorative images use empty alt attributes. Icons used alongside text have aria-hidden="true".

## 5. Voice & Tone

- **Register:** Professional, technical, consultative. We speak as engineers and technologists, not marketers.
- **Sentence rhythm:** Mixed — short declarative sentences for impact ("We build AI that works."), longer explanatory sentences for detail. Average sentence length: 15-20 words.
- **Words this brand uses:** AI-powered, enterprise-grade, industry-ready, career acceleration, production-ready, scalable, secure
- **Words this brand refuses:** seamless, elevate, journey, unlock, delight, coaching, tuition, training institute, batch, enroll, guaranteed placement
- **Address:** "you" (direct, confident, respectful of the reader's expertise)

## 6. Implementation Practices

- **Token format:** CSS custom properties defined in globals.css, referenced via Tailwind theme extension
- **Component library convention:** shadcn/ui base components with custom styling. All components follow the design tokens above.
- **Image treatment rules:** Real photography preferred — professional headshots, office environments, technology abstracts. No stock photos of people pointing at screens. No cartoon illustrations. No isometric 3D graphics.
- **Grid system:** 12-column grid with 24px gutters on desktop, 8-column with 16px gutters on tablet, single column on mobile.
- **Motion rules:** Easing: cubic-bezier(0.4, 0, 0.2, 1). Duration: 150-300ms for micro-interactions, 400-600ms for page transitions. Never bounce. Animations serve function (indicate state change, guide attention) — never purely decorative.

## 7. Anti-Patterns

- **No gradient hero backgrounds.** The purple-blue-cyan gradient has been the default since 2019 and now signals "we did not know what else to put there." Use solid deep blue or real content.
- **No rounded-16px-shadow-sm card grids.** The Bootstrap→shadcn pipeline standardized this. Our cards use 8px radius, 1px borders, no shadows.
- **No emoji as decoration.** Section headers, feature lists, and callouts never use emoji. Visual anchors come from typography (eyebrow labels, numbers, rules).
- **No isometric 3D people illustrations.** Corporate illustration circa 2018-2022. We use real photography or no illustration.
- **No "unlock your team's potential" copy.** Generic SaaS copy that means nothing. Every sentence must be true, specific, and could only be said about AgileVision.
- **No testimonial carousels.** Auto-scrolling quotes with round headshots are noise. We use 2-3 static testimonials with real names and companies.
- **No trust logos strip immediately under the fold.** Everyone does it; it stops meaning anything. We integrate partner names into real copy.
- **No coaching-class language.** We never say "batch," "enroll," "guaranteed placement," or "training institute." We say "AI Career Programs," "industry-ready engineers," "career acceleration."

## 8. Decision-Making

1. **Accessibility floor is not negotiable.** If a distinctive color choice fails contrast, we change the color, not the contrast requirement.
2. **Clarity over cleverness.** If a distinctive layout obscures the message, revise the layout. Enterprise clients need to understand what we do in 5 seconds.
3. **Restraint over completeness.** When in doubt, cut. This brand is more likely to under-decorate than over-decorate. One accent per screen, not three.
4. **Distinctive over safe.** Given a choice between the default move and a considered non-default move, default to the non-default. But see rule 2.
5. **Enterprise trust over startup energy.** When design choices risk looking experimental, default to proven professional patterns. We're building trust, not attention.

## 9. Workflow

1. Read Objective + Product Context + Voice & Tone to understand the brand position.
2. Write the content outline in plain text — one line per section, no visuals.
3. For each section, decide: does the message need a visual, or does typographic treatment carry it?
4. Apply Visual Foundations (color, type scale, spacing) to the outline.
5. Anti-Patterns pass: flag any element that matches a slop pattern; revise.
6. Accessibility pass: contrast ratios, focus states, alt text.
7. Voice & Tone pass: remove refused words, verify register consistency.
8. Ship.
