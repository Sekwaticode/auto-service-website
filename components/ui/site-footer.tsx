import Link from "next/link";
import { ArrowUp, Clock, Mail, MapPin, Phone } from "lucide-react";

import { PillLink } from "@/components/ui/auto-hero";
import { GoogleLogo } from "@/components/ui/marquee-01";
import { services } from "@/components/ui/service-cards";
import { business, phoneHref } from "@/lib/business";
import { display, mono } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const DAY_NAMES = ["", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

/** Turns the opening days into rows like "Mon – Sat · 08:00 – 17:00" and "Sun · Closed". */
function openingRows() {
  const { days, from, to } = business.hours;
  const open = [...days].sort((a, b) => a - b);
  const rows: { label: string; value: string }[] = [];
  // group consecutive open days
  let start = open[0];
  for (let i = 1; i <= open.length; i++) {
    if (open[i] !== open[i - 1] + 1) {
      const end = open[i - 1];
      rows.push({
        label: start === end ? DAY_NAMES[start] : `${DAY_NAMES[start]} – ${DAY_NAMES[end]}`,
        value: `${from} – ${to}`,
      });
      start = open[i];
    }
  }
  const closed = [1, 2, 3, 4, 5, 6, 7].filter((d) => !open.includes(d));
  if (closed.length) rows.push({ label: closed.map((d) => DAY_NAMES[d]).join(", "), value: "Closed" });
  return rows;
}

const pageLinks = [
  { label: "Services", href: "#services" },
  { label: "Our results", href: "#results" },
  { label: "Google reviews", href: "#reviews" },
  { label: "Book a service", href: "#booking" },
  { label: "Pricing", href: "#pricing" },
];

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-xs font-medium tracking-[0.18em] text-orange-500 uppercase [font-family:var(--font-mono-eyebrow)]">
      {children}
    </p>
  );
}

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className={cn(
        display.variable,
        mono.variable,
        "relative isolate scroll-mt-4 overflow-hidden bg-neutral-950 text-white [font-family:var(--font-display)]"
      )}
    >
      {/* soft orange glow behind the call to action */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-80 w-[min(56rem,100%)] -translate-x-1/2 rounded-full bg-orange-500/15 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Call to action */}
        <div className="flex flex-col gap-8 border-b border-white/10 py-16 md:flex-row md:items-end md:justify-between md:py-20">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-medium tracking-[0.18em] text-orange-500 uppercase [font-family:var(--font-mono-eyebrow)]">
              Ready when your car is
            </p>
            <h2 className="text-4xl leading-[1.02] font-semibold tracking-[-0.04em] text-balance md:text-6xl">
              Let&apos;s get you <span className="text-orange-500">back on the road.</span>
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <PillLink href="#booking">Book a service</PillLink>
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3.5 text-sm font-medium transition-colors hover:border-white/40 hover:bg-white/5"
            >
              <Phone className="size-4 text-orange-500" />
              {business.phone}
            </a>
          </div>
        </div>

        {/* Columns */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2 text-2xl font-semibold tracking-tight">
              <span className="font-black tracking-[-0.2em] text-orange-500 italic">//</span>
              {business.name}
            </Link>
            <p className="mt-4 max-w-xs leading-relaxed text-white/60">
              Independent car servicing and repairs in {business.location}. Upfront quotes, certified
              mechanics and no dealership wait.
            </p>
            <a
              href="#reviews"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/80 transition-colors hover:bg-white/10"
            >
              <GoogleLogo className="size-4" />
              Read our Google reviews
            </a>
          </div>

          <nav aria-label="Services" className="lg:col-span-2">
            <ColumnTitle>Services</ColumnTitle>
            <ul className="space-y-3 text-white/70">
              {services.map((s) => (
                <li key={s.title}>
                  <Link href="#services" className="transition-colors hover:text-orange-400">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="On this page" className="lg:col-span-2">
            <ColumnTitle>Explore</ColumnTitle>
            <ul className="space-y-3 text-white/70">
              {pageLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-orange-400">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="sm:col-span-2 lg:col-span-4">
            <ColumnTitle>Visit the workshop</ColumnTitle>
            <ul className="space-y-4 text-white/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-orange-500" />
                <span>{business.address}</span>
              </li>
              <li>
                <a href={phoneHref} className="flex gap-3 transition-colors hover:text-orange-400">
                  <Phone className="mt-0.5 size-5 shrink-0 text-orange-500" />
                  {business.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="flex gap-3 break-all transition-colors hover:text-orange-400">
                  <Mail className="mt-0.5 size-5 shrink-0 text-orange-500" />
                  {business.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-orange-500" />
                <dl className="grid flex-1 grid-cols-[auto_1fr] gap-x-6 gap-y-1">
                  {openingRows().map((row) => (
                    <div key={row.label} className="contents">
                      <dt>{row.label}</dt>
                      <dd className={cn("text-right sm:text-left", row.value === "Closed" && "text-white/40")}>
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Oversized wordmark */}
      <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden">
        <p className="-mb-[0.18em] text-center text-[clamp(4.5rem,21vw,19rem)] leading-none font-black tracking-[-0.06em] text-transparent bg-gradient-to-b from-white/[0.09] to-white/0 bg-clip-text">
          {business.name}
        </p>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10 bg-neutral-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <p className="[font-family:var(--font-mono-eyebrow)] text-xs tracking-[0.14em] uppercase">
            Independent auto service · {business.location}
          </p>
          <a href="#" className="group inline-flex items-center gap-2 transition-colors hover:text-white">
            Back to top
            <span className="grid size-8 place-items-center rounded-full border border-white/15 transition-transform group-hover:-translate-y-0.5">
              <ArrowUp className="size-4" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
