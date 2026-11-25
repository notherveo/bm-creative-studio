"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

const FILTERS = ["All", "Identity", "Product", "Digital", "Motion"] as const;
type Filter = (typeof FILTERS)[number];

const PROJECTS = [
  { title: "Kōbo Rebrand", client: "Kōbo Ceramics", year: "2025", discipline: "Identity", result: "+38% direct sales in one quarter", tint: "from-lime-300/25 to-emerald-500/5" },
  { title: "Orbit OS", client: "Orbit", year: "2024", discipline: "Product", result: "Design system adopted by 6 squads", tint: "from-sky-400/25 to-indigo-500/5" },
  { title: "Fieldnote", client: "Fieldnote Collective", year: "2024", discipline: "Digital", result: "12k subscribers in 4 months", tint: "from-amber-300/25 to-orange-500/5" },
  { title: "Monolith", client: "Channel Nine", year: "2023", discipline: "Motion", result: "Title sequence, 3M views", tint: "from-fuchsia-400/25 to-purple-600/5" },
  { title: "Verso Type", client: "Verso", year: "2023", discipline: "Identity", result: "A bespoke editorial typeface", tint: "from-teal-300/25 to-cyan-500/5" },
  { title: "Northwind", client: "Northwind", year: "2022", discipline: "Product", result: "Onboarding completion +21%", tint: "from-rose-300/25 to-red-500/5" },
] as const;

export default function WorksPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = PROJECTS.filter((p) => filter === "All" || p.discipline === filter);

  return (
    <div className="px-4 pt-36 pb-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 text-xs font-medium uppercase tracking-[0.4em] text-muted-foreground">
          Works
        </p>
        <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
          Selected projects, 2022 — 2025.
        </h1>

        <div className="mt-12 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                filter === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.article
                layout
                key={p.title}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="group overflow-hidden rounded-2xl border border-border"
              >
                <div
                  className={cn(
                    "relative flex aspect-[16/10] items-end bg-gradient-to-br p-6",
                    p.tint,
                  )}
                >
                  <span className="absolute top-6 right-6 font-mono text-sm text-foreground/60">
                    {p.year}
                  </span>
                  <span className="text-xs uppercase tracking-[0.25em] text-foreground/70">
                    {p.discipline}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4 p-6">
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight">{p.title}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">{p.client}</p>
                    <p className="mt-4 text-sm text-primary">{p.result}</p>
                  </div>
                  <ArrowUpRight className="mt-1 size-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:text-primary" />
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
