"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const DISCIPLINES = [
  {
    id: "01",
    name: "Brand",
    lead: "Identity that survives contact with the real world.",
    items: [
      "Naming & verbal identity",
      "Logo & identity systems",
      "Art direction & photography",
      "Brand guidelines",
      "Packaging & print",
    ],
  },
  {
    id: "02",
    name: "Digital",
    lead: "Products and sites that feel inevitable to use.",
    items: [
      "Product & UX design",
      "Design systems",
      "Marketing sites",
      "Prototyping",
      "Front-end development",
    ],
  },
  {
    id: "03",
    name: "Motion",
    lead: "Movement that carries the brand further than a still frame.",
    items: [
      "Title sequences",
      "Brand animation",
      "Interaction design",
      "3D & illustration",
      "Film & social",
    ],
  },
];

const PROCESS = [
  { step: "01", name: "Listen", detail: "We start by understanding the problem, not pitching a look." },
  { step: "02", name: "Frame", detail: "A sharp creative territory — one idea, argued well." },
  { step: "03", name: "Craft", detail: "We design in the open and sweat the details with you." },
  { step: "04", name: "Ship", detail: "Files, systems and support so the work lives on." },
];

export default function ServicesPage() {
  return (
    <div className="px-4 pt-36 pb-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 text-xs font-medium uppercase tracking-[0.4em] text-muted-foreground">
          Services
        </p>
        <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
          Three disciplines, one obsession with detail.
        </h1>

        <div className="mt-20 space-y-20">
          {DISCIPLINES.map((d, i) => (
            <motion.section
              key={d.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="grid gap-8 border-t border-border pt-10 lg:grid-cols-[120px_1fr_1fr]"
            >
              <span className="font-mono text-2xl text-primary">{d.id}</span>
              <div>
                <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">{d.name}</h2>
                <p className="mt-4 max-w-md text-lg text-muted-foreground">{d.lead}</p>
              </div>
              <ul className="space-y-3 self-end text-lg">
                {d.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="size-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.section>
          ))}
        </div>

        {/* Craft image */}
        <section className="mt-24 overflow-hidden rounded-2xl">
          <img
            src="https://picsum.photos/seed/atelier-craft/2000/1000"
            alt="A studio desk covered in type specimens, print proofs and colour swatches"
            loading="lazy"
            className="h-[42vh] w-full object-cover grayscale"
          />
        </section>

        {/* Process */}
        <section className="mt-28 border-t border-border pt-12">
          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            How we work
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <div key={p.step}>
                <span className="font-mono text-sm text-primary">{p.step}</span>
                <h3 className="mt-3 text-2xl font-medium tracking-tight">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-24 flex flex-col items-start justify-between gap-6 border-t border-border pt-12 md:flex-row md:items-center">
          <p className="text-2xl font-medium tracking-tight">
            Not sure which you need? Tell us the problem.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Talk to us <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
