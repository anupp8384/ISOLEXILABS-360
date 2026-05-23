DESIGN BRIEF: IsolexisLabs Agency Website
Reference site: https://www.spazorlabs.com/
Tools: Unicorn Studio (WebGL backgrounds) + MotionSite (loader & transition animations)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BRAND IDENTITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Brand name: IsolexisLabs
Tagline: "web development solutions"
Brand personality: Precision-first, intellectually sharp, minimal brutalism with depth
Aesthetic direction: Dark-mode tech agency — think Linear meets Stripe meets a 
research lab. Not playful. Not corporate. Surgical.

Color palette:
  - Background base: #0A0A0F (near black, slight blue tint)
  - Primary accent: #6EE7FF (cold cyan — electric, not neon)
  - Secondary accent: #A78BFA (muted violet, used sparingly)
  - Surface cards: #111118
  - Text primary: #F0F0F5
  - Text muted: #5A5A72
  - Border/divider: #1E1E2E

Typography:
  - Display font: "Syne" (bold, geometric, sharp) — headings only
  - Body font: "DM Mono" or "IBM Plex Mono" — conveys precision and code culture
  - UI labels/nav: "Inter" at 11-12px, letter-spacing: 0.08em, uppercase

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION-BY-SECTION DESIGN SPEC
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[LOADER — MotionSite Animation- Build a fullscreen loading screen component in React (Next.js 14, TypeScript). Uses Framer Motion for animations. Here is the exact specification:

Theme

css

--bg: #0a0a0a;
--text: #f5f5f5;
--muted: #888888;
--stroke: #1f1f1f;

Fonts: font-display → Instrument Serif (Google Fonts, italic, weight 400).

Component: LoadingScreen

Receives one prop: onComplete: () => void.

Container: <motion.div> — fixed inset-0 z-[9999] bg-bg. Exit animation: exit={{ opacity: 0 }}, duration 0.6s, ease [0.4, 0, 0.2, 1]. Wrap in <AnimatePresence mode="wait"> from the parent.

Element 1: "Portfolio" Label (Top-Left)

<motion.div> — absolute top-8 left-8 md:top-12 md:left-12.
Text: "Portfolio"
Class: text-xs md:text-sm text-muted uppercase tracking-[0.3em]
Entrance animation: initial={{ opacity: 0, y: -20 }}, animate={{ opacity: 1, y: 0 }}, duration 0.6s, delay 0.1s

Element 2: Rotating Words (Center)

absolute inset-0 flex items-center justify-center.
Three words cycle in sequence: "Design" → "Create" → "Inspire". A new word appears every 900ms. The word index increments via setInterval and stops at the last word (doesn't loop).

Each word is a <motion.span> inside <AnimatePresence mode="wait">, keyed by wordIndex:
Class: text-4xl md:text-6xl lg:text-7xl font-display italic text-text/80
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: -20 }}
transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}

Element 3: Counter (Bottom-Right)

<motion.div> — absolute bottom-8 right-8 md:bottom-12 md:right-12.
A number that counts from 000 → 100 over exactly 2.7 seconds using requestAnimationFrame. Each frame calculates elapsed / 2700 * 100. The number is displayed zero-padded to 3 digits (e.g. 007, 042, 100):

{Math.round(progress).toString().padStart(3, '0')}

Class: text-6xl md:text-8xl lg:text-9xl font-display text-text tabular-nums
Entrance animation: initial={{ opacity: 0, y: 20 }}, animate={{ opacity: 1, y: 0 }}, duration 0.6s, delay 0.1s

When progress reaches 100: Wait 400ms, then call onComplete(). Use a ref for onComplete to avoid stale closures.

Element 4: Progress Bar (Bottom Edge)

absolute bottom-0 left-0 right-0. A 3px tall track:
Track: h-[3px] bg-stroke/50 (full width)
Fill: <motion.div> inside the track:
h-full origin-left
Background: linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)
Glow: boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)"
initial={{ scaleX: 0 }}
animate={{ scaleX: progress / 100 }}
transition={{ duration: 0.1, ease: "linear" }}

Parent Wrapper Behavior

The parent component (AppWrapper) controls visibility:
State: isLoading starts true
Renders <LoadingScreen onComplete={() => setIsLoading(false)} /> inside <AnimatePresence mode="wait"> only when isLoading is true
Main page content sits below with: style={{ opacity: isLoading ? 0 : 1, transition: "opacity 0.5s ease-out" }}
When the loader calls onComplete, it triggers: loader fades out (0.6s) → page fades in (0.5s)

Timing Summary

0.0s — Loader appears, "Portfolio" slides in, counter starts at 000
0.0s — "Design" appears
0.9s — "Create" replaces "Design"
1.8s — "Inspire" replaces "Create"
2.7s — Counter hits 100, progress bar full
3.1s — onComplete fires (400ms delay)
3.1s — Loader fades out (0.6s exit animation)
3.7s — Page content fades in (0.5s opacity transition)]
- Style: Text morphing loader. Start with "ISO" → morphs to "LEXIS" → morphs 
  to "LABS" → dissolves into the hero.
- Duration: 1.8 seconds total
- Font: Syne Bold, 72px, centered
- Color: #6EE7FF on #0A0A0F
- After text dissolve: horizontal wipe line (1px cyan) sweeps left to right,
  then full page fades in
- Easing: cubic-bezier(0.16, 1, 0.3, 1) — snappy spring feel
- MotionSite component: use "text morph + line wipe" transition preset

---

[SECTION 1 — HERO]
// npm install unicornstudio-react
// or
// yarn add unicornstudio-react
// or
// pnpm add unicornstudio-react

// then import the component
import UnicornScene from "unicornstudio-react";

// documentation: https://www.npmjs.com/package/unicornstudio-react
export default function MyComponent() {
  return (
    <UnicornScene
      projectId="GeQdDi82RFNTIKID2VX5"
      width="1440px"
      height="900px"
      scale={1}
      dpi={1.5}
      sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.12/dist/unicornStudio.umd.js"
    />
  );
}
Unicorn Studio Background:
  - Effect: Fluid noise gradient shader — slow-moving, breathing
  - Colors: Deep #0A0A0F base with subtle #6EE7FF and #A78BFA blobs drifting
  - Speed: Very slow drift — 0.3x (ambient, not distracting)
  - Interactivity: Mild mouse parallax — blobs shift 5-8% on cursor move
  - Layer: Full bleed background, z-index behind all text

Layout (reference SpazorLabs hero structure):
  - Top-left: IsolexisLabs logo wordmark (no icon, just type)
  - Nav: Right-aligned — Work / Services / About / Contact
  - Nav style: DM Mono, 12px, uppercase, #5A5A72 default, #F0F0F5 on hover
  - Center headline (2-line): 
      Line 1: "Precision-built" — Syne Bold 72px
      Line 2: "digital systems." — Syne Bold 72px, color #6EE7FF
  - Subtext below: "We engineer language-aware products — from 
    architecture to interface." — DM Mono 16px, #5A5A72, max-width 520px
  - CTA row: Two buttons —
      Primary: "Start a Project" — filled #6EE7FF, text #0A0A0F, 
               sharp corners (border-radius: 4px)
      Secondary: "View Work →" — no fill, cyan border 1px, cyan text
  - Stats row at bottom (like SpazorLabs): 3 columns
      "24+" Projects Shipped  |  "8+" Long-term Clients  |  "2+" Years Deep

---

[SECTION 2 — SERVICES]

Layout: 3-column card grid (or 2x3 on mobile)
Card style:
  - Background: #111118
  - Border: 1px solid #1E1E2E
  - Border-radius: 8px
  - On hover: border shifts to 1px solid #6EE7FF, 
    subtle cyan glow box-shadow (0 0 24px rgba(110,231,255,0.08))
  - Icon top-left: thin-line SVG icons (no filled icons)

Services to show (6 cards):
  1. Web Engineering — "Next.js, React, full-stack systems built to scale."
  2. Brand Identity — "Visual systems that mean something."
  3. AI Integration — "LLM workflows, agents, and intelligent tooling."
  4. Motion & Interaction — "Interfaces that feel as good as they look."
  5. Design Systems — "Consistent, documented, developer-ready."
  6. Strategy & Consulting — "Clarity before execution."

Section heading:
  "What we build" — Syne Bold 48px
  Subtext: "Every engagement starts with understanding. 
  Then we build the right thing." — DM Mono 14px, muted

---

[SECTION 3 — WORK / PROJECTS]

Style: Horizontal scrolling project cards (like a ticker on desktop)
OR stacked full-width cards (reference SpazorLabs grid layout)

Each card:
  - Full-width image/mockup top
  - Project name + type tag bottom-left
  - "View →" link bottom-right in cyan
  - Hover: image zooms 1.03x with smooth ease

Projects to reference:
  - WebzerLabs — Agency Website
  - Bookavibe — Booking Platform
  - IsolexisLabs — Branding System
  - [Add more as needed]

---

[SECTION 4 — ABOUT / PHILOSOPHY]

Two-column layout:
  Left: Large quote in Syne — 
    "We don't chase trends. We understand systems, then design them precisely."
  Right: 3-4 short paragraphs in DM Mono — values, approach, origin

Unicorn Studio Background (optional):
  - Subtle distortion shader on the left column image or quote area
  - Effect: Low opacity turbulence on a gradient rectangle
  - Interactivity: Scroll-driven — effect intensity increases as user scrolls in

---

[SECTION 5 — PROCESS (Optional)]

Numbered steps, horizontal on desktop, vertical on mobile:
  01 → Discover  |  02 → Architect  |  03 → Build  |  04 → Ship

Each step: number in large Syne (faint, #1E1E2E), label above, 
description in DM Mono below

---

[SECTION 6 — CTA BANNER]

Full-width dark strip:
  Background: Unicorn Studio — static gradient mesh, #6EE7FF + #A78BFA 
  at 8% opacity maximum, soft and ambient

  Text: "Ready to build something precise?"
  Syne Bold 52px, centered

  Subtext: "Let's start a conversation." — DM Mono 14px, muted

  Button: "Get in touch" — same primary button style as hero

---

[SECTION 7 — FOOTER]

3 columns:
  Left: Logo + 1-line tagline
  Middle: Nav links (same as header) + social icons
  Right: Email (linked) + "Based in Pune, India" in DM Mono

Bottom bar: "© 2025 IsolexisLabs. All rights reserved." 
— DM Mono 11px, #5A5A72

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MOTION PRINCIPLES (MotionSite / Motion.dev)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- All section entries: fade-up 24px, opacity 0→1, 
  duration 0.6s, stagger 0.1s between children
- Buttons: spring scale on hover (scale 1.03, stiffness 400, damping 20)
- Nav: blur + opacity transition on scroll (backdrop-filter: blur(12px))
- Cards: staggered grid reveal on viewport enter
- Page transitions: opacity crossfade, 300ms
- NO bounce animations. NO slide-from-left. Keep it surgical.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
UNICORN STUDIO USAGE MAP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Section          | Effect                        | Intensity
Hero             | Fluid noise gradient shader   | Medium (ambient)
About column     | Scroll-driven distortion      | Low (subtle)
CTA banner       | Static gradient mesh          | Very low (8% opacity)
Services         | None (let cards breathe)      | —
Footer           | None                          | —

Max 2 Unicorn embeds active simultaneously for performance.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OVERALL FEEL REFERENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Visual references to pull from:
- SpazorLabs (spazorlabs.com) — layout structure, stats section, CTA style
- Linear.app — dark precision, typography hierarchy, motion restraint
- Vercel.com — clean grid, minimal color, confident whitespace
- Stripe.com — professional trust, copy tone

DO NOT reference: 
- Generic purple-gradient AI startup aesthetics
- Rounded bubbly cards
- Gradient text on every heading
- Lottie-style cartoon animations