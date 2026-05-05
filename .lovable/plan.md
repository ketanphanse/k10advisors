## Goal
Transform the K10 Advisors landing page into a dark, premium, single-page site with cinematic video backgrounds, liquid glass effects, Instrument Serif + Barlow typography, and Framer Motion animations — while preserving the existing **Services** and **Founder** content.

## Dependencies to add
- `motion` (^12.35.0)
- `hls.js` (^1.6.15)
- (already present: `lucide-react`, `react-router-dom`, `tailwindcss`, `shadcn/ui`)

## Files to change

### 1. `index.html`
Replace the Montserrat link with:
```
https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Barlow:wght@300;400;500;600&display=swap
```

### 2. `src/index.css`
- Replace `:root` HSL tokens with the new dark/glass palette specified.
- Add `--glass-bg`, `--glass-border`, `--glass-shadow`, `--glass-blur`.
- Set `body` background to black (`bg-black text-white font-body`).
- Add `@layer components` with `.liquid-glass` and `.liquid-glass-strong` (with ::before mask-composite gradient borders) exactly as specified.

### 3. `tailwind.config.ts`
- Replace `montserrat` with:
  - `heading: ["'Instrument Serif'", "serif"]`
  - `body: ["'Barlow'", "sans-serif"]`
- Keep existing color tokens wired to CSS vars.

### 4. New components in `src/components/landing/`
- `Navbar.tsx` — fixed floating nav with liquid-glass pill, logo (reuse `src/assets/k10-logo.png`), links: Home, Services, Founder, Process, Contact, plus white "Get Started" button.
- `Hero.tsx` — 1000px section with CloudFront MP4 background, dark overlay, bottom gradient fade, "New" badge pill, animated heading, subtext, two CTAs, partners bar (Stripe, Vercel, Linear, Notion, Figma).
- `BlurText.tsx` — word/letter stagger using `motion/react` + IntersectionObserver, blur(10px)→blur(0), opacity 0→1, y 50→0.
- `HlsVideo.tsx` — reusable `<video>` wrapper that uses `hls.js` (with native Safari fallback) and accepts a `src` prop.
- `StartSection.tsx` — "How It Works" with HLS bg, badge, heading "You dream it. We ship it.", subtext, CTA.
- `FeaturesChess.tsx` — repurposed as **Services** section. Header badge "Services" + heading "Loyalty, reimagined." Then alternating rows mapping the 4 existing services into 2 chess rows (combine 2 services per row OR show 4 alternating rows). Plan: render all 4 existing services (Loyalty Program Strategy, Engagement with Loyalty, Technology Advisory, AI Loyalty) as 4 alternating chess rows, each with title, points list (kept as bullet list in liquid-glass card), CTA "Learn more", and a placeholder GIF/visual on the opposite side. Use the two motionsites GIFs (downloaded into `src/assets/feature-1.gif`, `feature-2.gif`) for two rows; for the other two, use a styled liquid-glass card with the service icon (Target, Zap, Wrench, Cpu) as a large decorative element.
- `FeaturesGrid.tsx` — "Why Us" 4-card grid (Zap/Palette/BarChart3/Shield).
- `StatsSection.tsx` — desaturated HLS bg + stats card. Reword stats to loyalty context: "100M+ users reached", "15+ Tata brands integrated", "Months → Days GTM", "20+ years experience".
- `Founder.tsx` — replaces existing Founder section. Liquid-glass card containing the founder photo (`src/assets/founder-photo.jpg`, rounded), name "Ketan Phanse" in `font-heading italic`, the existing 3 bio paragraphs styled with `text-white/70 font-body font-light`. Section badge "The Founder", heading "Built on two decades of loyalty."
- `Testimonials.tsx` — 3 testimonial cards as specified.
- `CtaFooter.tsx` — HLS bg, heading "Your next loyalty win starts here.", subtext, two buttons: "Book a Call" (mailto `ketan.phanse@k10advisors.in`) and "View Services" (anchor scroll). Footer bar: "© 2026 K10 Advisors. All rights reserved." + Privacy/Terms/Contact links.

### 5. `src/pages/Index.tsx`
Replace entire content with composition:
```
<div className="min-h-screen bg-black text-white font-body">
  <Navbar />
  <Hero />
  <StartSection />
  <FeaturesChess />   {/* Services */}
  <FeaturesGrid />    {/* Why Us */}
  <StatsSection />
  <Founder />
  <Testimonials />
  <CtaFooter />
</div>
```

### 6. Assets
- Download `hero-finlytic-preview-CV9g0FHP.gif` and `hero-wealth-preview-B70idl_u.gif` from motionsites.ai into `src/assets/feature-1.gif` and `src/assets/feature-2.gif`.
- Save hero poster to `public/images/hero_bg.jpeg` (use a frame from existing `hero-loyalty.jpg` as fallback if download fails — copy `src/assets/hero-loyalty.jpg` to `public/images/hero_bg.jpeg`).
- Reuse existing `src/assets/k10-logo.png` as the logo icon.
- Keep `src/assets/founder-photo.jpg`.

## Content adaptations (preserved from current site)
- **Services section**: keep all 4 services with their full bullet points from current `Index.tsx`.
- **Founder section**: keep Ketan Phanse bio verbatim (3 paragraphs, including CLMP / 30 under 40 line).
- **CTA**: mailto stays `ketan.phanse@k10advisors.in`.
- **Brand name**: K10 Advisors throughout (replacing "Studio" in footer).
- Stats and testimonials are new (loyalty-themed) since current site has none.

## Technical notes
- All HLS videos use `hls.js` with `canPlayType('application/vnd.apple.mpegurl')` fallback for Safari.
- All videos: `autoPlay loop muted playsInline`, with top/bottom black gradient fade overlays (`pointer-events-none`).
- Animations via `motion/react` (the v12 import path).
- `BlurText` uses `IntersectionObserver` once, then unobserves.
- Buttons use `liquid-glass-strong rounded-full` for primary and `bg-white text-black rounded-full` for secondary.

## Out of scope
- No backend/auth changes (Cloud already enabled, untouched).
- No routing changes; single page only.
- No removal of unused shadcn/ui components.