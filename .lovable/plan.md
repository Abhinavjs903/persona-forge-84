# Abhinav Dixit — Personal Portfolio

A single-page premium portfolio inspired by Apple, Linear, and Framer. Dark theme by default, glassmorphism, subtle gradients/glow, smooth scroll, and Framer Motion micro-interactions throughout.

Note on stack: The project runs on TanStack Start (React + TypeScript + Tailwind v4 + Vite), not Next.js — same React/TS/Tailwind/Framer Motion ergonomics, just a different router/SSR layer. All requested features will work identically.

## Design System
- Dark base background with deep neutrals (near-black), high-contrast foreground.
- Accent: violet → cyan gradient with soft glow halos.
- Typography: Geist/Inter for body, a display weight for hero (large tracking-tight).
- Tokens defined in `src/styles.css` (`@theme` + `:root`) using oklch.
- Glass surfaces: backdrop-blur + subtle white/5 borders.
- Reusable utilities: `.glass`, `.glow`, `.gradient-text`, `.noise` overlay.

## Page Structure (single route: `/`)
Sections rendered in order on `src/routes/index.tsx`, each as its own component under `src/components/portfolio/`:

1. **Nav** — sticky glass top bar with anchor links + Resume button.
2. **Hero** — large headline "Building Products, Brands & Digital Experiences.", subheading, 3 CTAs (View Projects, Download Resume, Contact). Animated background: floating gradient orbs, grid mask, subtle parallax.
3. **About** — two-column: profile image placeholder + narrative copy. Quick stat cards (Projects Completed, Websites Built, Startup Founded, Years of Experience) with animated counters on scroll.
4. **Skills** — 4 category cards (Development, Design, Marketing, Tools) with skill chips, staggered hover lift + glow.
5. **Featured Projects** — 4 project cards (Pixelark, Yojna Mitra, School Management & Education Initiatives, Personal Creative Projects). Each: description, tech stack chips, key outcomes, Live Demo + GitHub buttons. Interactive hover with image/gradient cover.
6. **Experience Timeline** — vertical timeline (Founder at Pixelark, Student Leadership, Marketing Campaigns, Freelance) with scroll-triggered reveal.
7. **Achievements** — grid of icon cards (Startup Founder, Digital Projects Delivered, Educational Initiatives, Marketing Campaigns, Community Impact).
8. **Testimonials** — carousel with placeholder quotes (clients, teachers, team).
9. **Contact** — form (Name, Email, Company, Message) with zod validation + toast feedback (no backend submit yet — opens mailto or shows success state). Social links: LinkedIn, GitHub, Email, Instagram.
10. **Footer** — minimal, copyright + socials.

## Extra Features
- Smooth scrolling via CSS `scroll-behavior` + anchor offsets.
- Page load animation (fade + slight scale on first paint).
- Custom cursor (desktop only) — soft glow follower, disabled on touch.
- Scroll-triggered reveals via Framer Motion `whileInView`.
- Animated counters (intersection-observer driven).
- Responsive across mobile/tablet/desktop.
- SEO: per-route `head()` with title, description, og tags, JSON-LD Person schema.
- Accessibility: semantic landmarks, aria-labels on icon buttons, focus-visible rings, reduced-motion respect.

## Technical Plan
- Install: `framer-motion`, `zod` (already present if shadcn), `react-hook-form`, `lucide-react`.
- Files to create:
  - `src/components/portfolio/Nav.tsx`
  - `src/components/portfolio/Hero.tsx`
  - `src/components/portfolio/About.tsx`
  - `src/components/portfolio/Skills.tsx`
  - `src/components/portfolio/Projects.tsx`
  - `src/components/portfolio/Timeline.tsx`
  - `src/components/portfolio/Achievements.tsx`
  - `src/components/portfolio/Testimonials.tsx`
  - `src/components/portfolio/Contact.tsx`
  - `src/components/portfolio/Footer.tsx`
  - `src/components/portfolio/CustomCursor.tsx`
  - `src/components/portfolio/Counter.tsx`
  - `src/components/portfolio/AnimatedBg.tsx`
- Update `src/styles.css` with dark-default tokens, gradient/glow/glass utilities, premium font stack.
- Update `src/routes/index.tsx` to compose sections with SEO `head()`.
- Update `src/routes/__root.tsx` to default `<html class="dark">` and add fonts via `<link>`.
- Generate 1 hero/profile image asset via imagegen (abstract gradient portrait placeholder).

## Out of Scope (confirm if needed)
- Real resume PDF — will wire the Download button to a placeholder `/resume.pdf` you can replace.
- Real project links — placeholders (`#`) until you provide URLs.
- Backend for contact form — using mailto fallback + client validation only.