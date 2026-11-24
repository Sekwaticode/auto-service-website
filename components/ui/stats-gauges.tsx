"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

import { Gauge } from "@/components/ui/gauge-1";
import { display, mono } from "@/lib/fonts";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------------ */
/* Placeholder figures: replace with your shop's real numbers.              */
/* ------------------------------------------------------------------------ */
const stats = [
  {
    value: 98,
    label: "Satisfied",
    title: "Customer satisfaction",
    description: "Drivers who rate their repair 4 stars or higher.",
  },
  {
    value: 99,
    label: "Colour match",
    title: "Paint matched first time",
    description: "Resprays that blend with the rest of the car without a second attempt.",
  },
  {
    value: 94,
    label: "On time",
    title: "Ready when promised",
    description: "Repairs handed back on or before the date we quoted.",
  },
];

const ORANGE = "#f97316"; // Tailwind orange-500, the site's accent colour
const TRACK = "rgba(23, 23, 23, 0.08)"; // light grey ring behind the orange on a light background

/** Light-mode section: dark text on a light background, unlike the dark hero above it. */
export default function StatsGauges() {
  const ref = useRef<HTMLDivElement>(null);
  // Gauges stay at 0 until the section scrolls into view, then count up.
  const inView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <section
      id="results"
      className={cn(
        display.variable,
        mono.variable,
        "bg-neutral-50 px-4 py-20 text-neutral-900 sm:px-6 md:py-28 [font-family:var(--font-display)]"
      )}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-6 md:mb-16 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="mb-4 text-xs font-medium tracking-[0.18em] text-orange-600 uppercase [font-family:var(--font-mono-eyebrow)]">
              By the numbers
            </p>
            <h2 className="text-4xl leading-[1.05] font-semibold tracking-[-0.03em] text-balance md:text-5xl">
              Work you can measure, not just trust.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-neutral-600 md:col-span-5">
            We track every repair, so you know what to expect before you hand over your keys.
          </p>
        </div>

        <div ref={ref} className="grid gap-4 md:grid-cols-3">
          {stats.map((stat, i) => (
            <article
              key={stat.title}
              className="flex flex-col items-center rounded-2xl border border-neutral-200 bg-white p-8 text-center shadow-sm"
            >
              <Gauge
                value={inView ? stat.value : 0}
                size={180}
                strokeWidth={9}
                gradient
                glowEffect
                tickMarks
                showPercentage
                primary={ORANGE}
                secondary={TRACK}
                label={stat.label}
                transition={{ delay: i * 200 }}
                className={{ textClassName: "fill-neutral-900", labelClassName: "fill-neutral-500" }}
              />
              <h3 className="mt-6 text-xl font-semibold tracking-tight">{stat.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-neutral-600">{stat.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
