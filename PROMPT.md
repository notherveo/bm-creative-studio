Build a complete, production-quality multi-page Next.js (App Router) website — a bold,
artistic, premium **creative studio / agency**. The feeling: an experimental editorial
magazine crossed with an art gallery. Confident, a little strange, very high-craft.

## Routes (all must be fully implemented and linked from the nav)
`/`, `/about`, `/services`, `/works`, `/contact`

## Engineering contract (follow exactly)
**Stack is already configured — NEVER emit config files** (no package.json / tsconfig / next.config / postcss).
- Next.js App Router + TypeScript, Tailwind CSS v4, shadcn/ui primitives.
- Icons: `lucide-react`.
- Animation: motion v12 — `import { motion, AnimatePresence, useScroll, useTransform, useInView, useMotionValue, useSpring, useReducedMotion } from "motion/react";`
- Class helper: `import { cn } from "@/lib/utils";`

**Components you may import (ONLY these exist in the project):**
- `@/components/ui/button` → `{ Button }`
- `@/components/ui/card` → `{ Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }`
- `@/components/ui/badge` → `{ Badge }`
- `@/components/ui/input` → `{ Input }`
- `@/components/ui/label` → `{ Label }`
Everything else (marquee, cursor, preloader, split text, accordion, etc.) you MUST write yourself as a new file under `components/` and import your own file. NEVER import from `@/components/magicui/*`, `@/components/reactbits/*`, `@/components/blocks/*`, or any path you did not create in this response.

**Hard rules — the build runs `tsc --noEmit` + `next build` and MUST pass:**
1. Any file using hooks, `motion`, or browser APIs starts with `"use client"` on line 1.
2. Icons are components: `<ArrowUpRight className="size-4" />`. NEVER write `{icon.size}`. NEVER wrap an icon in `<p>`.
3. Shared chrome (header/nav, footer, custom cursor, preloader) is defined in `app/layout.tsx` and rendered EXACTLY ONCE. Pages must NOT render the header or footer themselves.
4. Import every symbol you use. No unused imports. No `any`. Type props explicitly.
5. Photos: plain `<img>` (NEVER `next/image`) with `loading="lazy"`, a real `alt`, and `className="… object-cover"`. Use `https://picsum.photos/seed/<unique-slug>/<w>/<h>` for photography, and CSS gradients / inline SVG for graphics. No empty src.
6. Respect reduced motion: read `useReducedMotion()` and skip/shorten animations when true.
7. Realistic, specific, non-repetitive copy. No "Lorem ipsum", no "TODO", no "sample text".
8. Responsive mobile-first; never overflow horizontally.

## Design language
- Oversized display typography — `clamp()` sizes up to ~12rem on desktop, tight leading; mix a bold grotesk with occasional italic serif accents.
- Asymmetric, off-grid layouts: a 12-column grid where elements intentionally break the baseline; overlapping layers; small rotated labels.
- Monochrome base — near-black on warm off-white, plus one full-bleed dark section — with a SINGLE electric accent (pick one: acid lime or electric blue).
- Generous negative space, hairline rules, large index numbers (01, 02…), wide-tracked small-caps eyebrows.

## Motion language (this site's signature — bold and distinctive)
- **Preloader**: a 0→100 counting percentage that reveals the site with a clip/curtain wipe.
- **Custom magnetic cursor**: a small dot that grows and blends over interactive elements (desktop only; hidden on touch/no-hover).
- **Split-text staggered reveals** for headlines (write your own split component that animates words/chars).
- **Scroll-triggered clip-path image reveals** + layered parallax on the hero.
- A **horizontal-scrolling** "selected work" strip.
- An **infinite marquee** band.
- **Magnetic buttons** that translate toward the cursor.

Write these components: `components/preloader.tsx`, `components/custom-cursor.tsx`, `components/split-text.tsx`, `components/magnetic.tsx`, `components/marquee.tsx`, `components/site-header.tsx`, `components/site-footer.tsx`.

## Content
Fictional studio **"ATELIER NOIR"** (brand + digital + motion).
- `/` — hero statement, a selected-work horizontal strip, a marquee of clients, a services teaser, a closing CTA.
- `/services` — three disciplines (Brand, Digital, Motion), each with a detailed offering list and process.
- `/works` — a filterable index of 6 projects (client, year, discipline, one-line result); hover reveals imagery.
- `/about` — manifesto, capabilities, team (4–6 people), awards/recognition.
- `/contact` — big statement headline, enquiry form (name / email / budget / message), studio address and socials.

## Output
Start with a short `thinking` plan (a few lines). Then emit ONLY `<file path="…">…</file>` blocks — no markdown fences, no prose. Emit `app/layout.tsx`, every route above, and every component you reference.
