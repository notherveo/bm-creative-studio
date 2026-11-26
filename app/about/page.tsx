"use client";

import { motion } from "motion/react";

import { SplitText } from "@/components/split-text";

const CAPABILITIES = [
  "Brand strategy",
  "Identity systems",
  "Art direction",
  "Product design",
  "Design systems",
  "Web development",
  "Motion & film",
  "Type design",
];

const TEAM = [
  { name: "Mara Ilves", role: "Founder, Creative Director", image: "https://picsum.photos/seed/atelier-mara/800/800" },
  { name: "Devan Rao", role: "Design Lead", image: "https://picsum.photos/seed/atelier-devan/800/800" },
  { name: "Noor Haddad", role: "Motion Director", image: "https://picsum.photos/seed/atelier-noor/800/800" },
  { name: "Tomasz Wójcik", role: "Engineering Lead", image: "https://picsum.photos/seed/atelier-tomasz/800/800" },
];

const AWARDS = [
  { year: "2025", name: "Awwwards — Site of the Day" },
  { year: "2024", name: "D&AD — Wood Pencil, Branding" },
  { year: "2024", name: "CSS Design Awards — Best Innovation" },
  { year: "2023", name: "Type Directors Club — Certificate of Excellence" },
];

export default function AboutPage() {
  return (
    <div className="px-4 pt-36 pb-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 text-xs font-medium uppercase tracking-[0.4em] text-muted-foreground">
          About the studio
        </p>
        <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight md:text-8xl">
          <SplitText text="A small studio with a" />{" "}
          <span className="text-muted-foreground">
            <SplitText text="long memory." delay={0.15} />
          </span>
        </h1>

        <div className="mt-20 grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div />
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Atelier Noir was founded in 2016 on a simple belief: the best brands
              are built by a handful of people who care unreasonably about them. We
              keep the team deliberately small so the work stays personal.
            </p>
            <p>
              We work across identity, digital product and motion — often all three
              at once. That range is the point. A logo is not a brand, and a brand
              is not the thing people experience at 11pm on their phone.
            </p>
            <p>
              We take on a small number of engagements a year, and we&apos;d rather
              turn work down than dilute it.
            </p>
          </div>
        </div>

        {/* Capabilities */}
        <section className="mt-28 border-t border-border pt-12">
          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Capabilities
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {CAPABILITIES.map((c) => (
              <span
                key={c}
                className="rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-primary hover:text-primary"
              >
                {c}
              </span>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mt-24 border-t border-border pt-12">
          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            The team
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-border p-6"
              >
                <div className="mb-6 aspect-square overflow-hidden rounded-xl">
                  <img
                    src={m.image}
                    alt={`Portrait of ${m.name}`}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale transition-all duration-700 ease-out hover:grayscale-0"
                  />
                </div>
                <h3 className="text-lg font-medium tracking-tight">{m.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section className="mt-24 border-t border-border pt-12">
          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Recognition
          </h2>
          <ul className="mt-8 divide-y divide-border">
            {AWARDS.map((a) => (
              <li key={a.name} className="flex items-baseline justify-between gap-6 py-5">
                <span className="font-mono text-sm text-primary">{a.year}</span>
                <span className="flex-1 text-lg">{a.name}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
