"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";

import { Magnetic } from "@/components/magnetic";
import { SplitText } from "@/components/split-text";

const DETAILS = [
  { icon: Mail, label: "hello@ateliernoir.studio", href: "mailto:hello@ateliernoir.studio" },
  { icon: Phone, label: "+1 (415) 555-0134", href: "tel:+14155550134" },
  { icon: MapPin, label: "48 Bluxome St, San Francisco", href: "#" },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="px-4 pt-36 pb-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 text-xs font-medium uppercase tracking-[0.4em] text-muted-foreground">
          Contact
        </p>
        <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight md:text-8xl">
          <SplitText text="Let's make" />{" "}
          <span className="text-muted-foreground">
            <SplitText text="something loud." delay={0.12} />
          </span>
        </h1>

        <div className="mt-20 grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            {DETAILS.map((d) => (
              <a
                key={d.label}
                href={d.href}
                className="flex items-center gap-4 text-lg transition-colors hover:text-primary"
              >
                <span className="flex size-11 items-center justify-center rounded-full border border-border">
                  <d.icon className="size-5" />
                </span>
                {d.label}
              </a>
            ))}
            <p className="pt-6 text-sm text-muted-foreground">
              We reply to every serious enquiry within two working days. Tell us
              about the problem, the timeline and the budget range — that&apos;s all
              we need to start.
            </p>
          </div>

          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Name" id="name" placeholder="Your name" />
              <Field label="Email" id="email" type="email" placeholder="you@company.com" />
            </div>
            <div>
              <label htmlFor="budget" className="mb-2 block text-sm font-medium">
                Budget range
              </label>
              <select
                id="budget"
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                defaultValue="25-50k"
              >
                <option value="10-25k">$10k – $25k</option>
                <option value="25-50k">$25k – $50k</option>
                <option value="50-100k">$50k – $100k</option>
                <option value="100k+">$100k+</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Project
              </label>
              <textarea
                id="message"
                rows={5}
                required
                placeholder="What are you building?"
                className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </div>
            <Magnetic className="inline-block">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground"
              >
                {sent ? "Thanks — we'll be in touch ✳" : "Send enquiry"}
              </button>
            </Magnetic>
            {sent && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-primary"
              >
                Your message is on its way. (Demo form — nothing was sent.)
              </motion.p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
      />
    </div>
  );
}
