"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { Magnetic } from "@/components/magnetic";
import { Marquee } from "@/components/marquee";
import { SplitText } from "@/components/split-text";

const CLIENTS = ["Northwind", "Kōbo", "Palette", "Orbit", "Monolith", "Fieldnote", "Verso"];

const WORK = [
  {
    title: "Kōbo Rebrand",
    year: "2025",
    discipline: "Identity",
    blurb: "A quiet identity for a loud ceramics label, built around a single mark.",
    tint: "from-lime-300/40 to-emerald-500/10",
    image: "https://picsum.photos/seed/atelier-kobo/1200/900",
    alt: "Kōbo Ceramics rebrand — hand-thrown vessels beside printed identity cards",
  },
  {
    title: "Orbit OS",
    year: "2024",
    discipline: "Product",
    blurb: "Design system and marketing site for a scheduling platform.",
    tint: "from-sky-400/40 to-indigo-500/10",
    image: "https://picsum.photos/seed/atelier-orbit/1200/900",
    alt: "Orbit OS — product interface screens arranged across a workspace",
  },
  {
    title: "Fieldnote",
    year: "2024",
    discipline: "Digital",
    blurb: "An editorial site for a field-research collective.",
    tint: "from-amber-300/40 to-orange-500/10",
    image: "https://picsum.photos/seed/atelier-fieldnote/1200/900",
    alt: "Fieldnote — an editorial publication spread out on a table",
  },
  {
    title: "Monolith",
    year: "2023",
    discipline: "Motion",
    blurb: "Title sequence and motion language for a documentary series.",
    tint: "from-fuchsia-400/40 to-purple-600/10",
    image: "https://picsum.photos/seed/atelier-monolith/1200/900",
    alt: "Monolith — a still frame from a title sequence, lit in deep shadow",
  },
];

const SERVICES = [
  { name: "Brand", detail: "Naming, identity systems, art direction, guidelines." },
  { name: "Digital", detail: "Product design, design systems, sites and prototypes." },
  { name: "Motion", detail: "Titles, brand animation, interaction and film." },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div>
      {/* Hero */}
      <section ref={heroRef} className="relative px-4 pt-36 pb-20 sm:px-6 lg:px-8">
        <motion.div
          style={reduce ? undefined : { y, opacity }}
          className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-primary/20 blur-[120px]"
          aria-hidden
        />
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 text-xs font-medium uppercase tracking-[0.4em] text-muted-foreground">
            Creative studio · Est. 2016
          </p>
          <h1 className="max-w-5xl text-[12vw] font-semibold leading-[0.9] tracking-tighter md:text-[8rem]">
            <SplitText text="We design the" />
            <br />
            <span className="text-muted-foreground">
              <SplitText text="unmistakable." delay={0.15} />
            </span>
          </h1>

          <div className="mt-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <p className="max-w-md text-lg text-muted-foreground">
              Brand, digital and motion for teams who refuse to look like everyone
              else. Small on purpose, obsessive by default.
            </p>
            <Magnetic>
              <Link
                href="/works"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
              >
                See the work <ArrowUpRight className="size-4" />
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>

      {/* Clients marquee */}
      <section className="border-y border-border py-8">
        <Marquee>
          {CLIENTS.map((c) => (
            <span
              key={c}
              className="px-8 text-2xl font-medium tracking-tight text-muted-foreground"
            >
              {c}
            </span>
          ))}
        </Marquee>
      </section>

      {/* Selected work — horizontal scroll */}
      <section className="py-24">
        <div className="mx-auto mb-10 flex max-w-7xl items-end justify-between px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">Selected work</h2>
          <span className="hidden text-sm text-muted-foreground md:block">Drag / scroll →</span>
        </div>
        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-6 sm:px-6 lg:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {WORK.map((w, i) => (
            <Link
              key={w.title}
              href="/works"
              className="group min-w-[82vw] snap-start sm:min-w-[420px]"
            >
              <div className="relative flex aspect-[4/3] items-end overflow-hidden rounded-2xl border border-border p-6 transition-transform duration-500 group-hover:scale-[0.99]">
                <img
                  src={w.image}
                  alt={w.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${w.tint} transition-opacity duration-700 group-hover:opacity-0`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <span className="absolute top-6 right-6 z-10 font-mono text-sm text-white/70">
                  0{i + 1}
                </span>
                <div className="relative z-10">
                  <span className="text-xs uppercase tracking-[0.25em] text-white/80">
                    {w.discipline}
                  </span>
                  <h3 className="mt-2 text-3xl font-semibold tracking-tight">{w.title}</h3>
                </div>
                <ArrowDownRight className="absolute right-6 bottom-6 z-10 size-6 -translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" />
              </div>
              <p className="mt-4 max-w-sm text-sm text-muted-foreground">{w.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Services teaser */}
      <section className="border-t border-border py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            What we do,
            <br />
            end to end.
          </h2>
          <div className="divide-y divide-border">
            {SERVICES.map((s, i) => (
              <div key={s.name} className="flex items-baseline gap-6 py-6">
                <span className="font-mono text-sm text-primary">0{i + 1}</span>
                <div>
                  <h3 className="text-2xl font-medium tracking-tight">{s.name}</h3>
                  <p className="mt-1 text-muted-foreground">{s.detail}</p>
                </div>
              </div>
            ))}
            <div className="pt-8">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                All services <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-[#0a0a0a] py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mx-auto max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
            Have a project that deserves to be remembered?
          </h2>
          <Magnetic className="mt-10 inline-block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground"
            >
              Start a project <ArrowUpRight className="size-5" />
            </Link>
          </Magnetic>
        </div>
      </section>
    </div>
  );
}
