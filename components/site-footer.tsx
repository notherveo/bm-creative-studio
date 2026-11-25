import Link from "next/link";

import { Marquee } from "@/components/marquee";

const COLUMNS = [
  {
    title: "Studio",
    links: [
      { href: "/about", label: "About" },
      { href: "/works", label: "Works" },
      { href: "/services", label: "Services" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Social",
    links: [
      { href: "https://instagram.com", label: "Instagram" },
      { href: "https://behance.net", label: "Behance" },
      { href: "https://dribbble.com", label: "Dribbble" },
      { href: "https://linkedin.com", label: "LinkedIn" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="border-b border-border py-6">
        <Marquee slow>
          <span className="px-6 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Let&apos;s make something loud
          </span>
          <span className="px-6 text-sm text-primary">✳</span>
          <span className="px-6 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Brand · Digital · Motion
          </span>
          <span className="px-6 text-sm text-primary">✳</span>
        </Marquee>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="max-w-sm text-3xl font-semibold tracking-tight">
              Atelier Noir — an independent creative studio in San Francisco.
            </p>
            <a
              href="mailto:hello@ateliernoir.studio"
              className="mt-6 inline-block text-lg text-primary underline-offset-4 hover:underline"
            >
              hello@ateliernoir.studio
            </a>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="transition-colors hover:text-primary">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Atelier Noir. All rights reserved.</span>
          <span>Made with intent · Fictional studio</span>
        </div>
      </div>
    </footer>
  );
}
