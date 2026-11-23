import { Check, MoveHorizontal, Phone } from "lucide-react";

import { PillLink } from "@/components/ui/auto-hero";
import ImageCompare from "@/components/ui/image-compare";
import { business, phoneHref } from "@/lib/business";
import { display, mono } from "@/lib/fonts";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------------ */
/* Before/after photos. These are PLACEHOLDER drawings: replace them with   */
/* two photos of the same car from the same angle, one before and one after */
/* a real repair you did (e.g. put before.jpg and after.jpg in              */
/* /public/before-after and change the paths below).                        */
/* ------------------------------------------------------------------------ */
const BEFORE_SRC = "/before-after/before.svg";
const AFTER_SRC = "/before-after/after.svg";

const points = [
  "Panel beating and dent removal",
  "Paint matched to your car's factory colour",
  "Help with your insurance claim paperwork",
];

/** Light-mode call to action for accident and body repair, with a draggable before/after comparison. */
export default function RepairCta() {
  return (
    <section
      id="body-repair"
      aria-labelledby="body-repair-heading"
      className={cn(
        display.variable,
        mono.variable,
        "relative isolate overflow-hidden bg-white px-4 py-20 text-neutral-900 sm:px-6 md:py-28 [font-family:var(--font-display)]"
      )}
    >
      {/* soft orange wash behind the photo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[-10%] -z-10 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-orange-200/50 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="mb-4 text-xs font-medium tracking-[0.18em] text-orange-600 uppercase [font-family:var(--font-mono-eyebrow)]">
            Accident &amp; body repair
          </p>
          <h2
            id="body-repair-heading"
            className="text-4xl leading-[1.02] font-semibold tracking-[-0.04em] text-balance md:text-5xl"
          >
            From crumpled to <span className="text-orange-600">showroom ready.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600">
            Had a bump, a scrape or something worse? We repair the damage, refinish the paint and hand
            your car back looking the way it did before.
          </p>

          <ul className="mt-8 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-orange-100 text-orange-600">
                  <Check className="size-4" strokeWidth={2.5} />
                </span>
                <span className="text-neutral-700">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <PillLink href="#booking">Book a damage assessment</PillLink>
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-3.5 text-sm font-medium shadow-sm transition-colors hover:border-neutral-400"
            >
              <Phone className="size-4 text-orange-600" />
              {business.phone}
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-[calc(var(--radius-panel)+0.5rem)] border border-neutral-200 bg-white p-2 shadow-xl shadow-neutral-900/10">
            <ImageCompare
              before={<img src={BEFORE_SRC} alt="A car with a crushed front corner, dented panels and a cracked window before repair" />}
              after={<img src={AFTER_SRC} alt="The same car after repair, with straight panels and fresh paint" />}
              labels={["Before", "After"]}
              label="Car before and after body repair"
              aspectRatio="4 / 3"
              defaultPosition={50}
            />
          </div>
          <p className="mt-4 flex items-center justify-center gap-2 text-sm text-neutral-500">
            <MoveHorizontal className="size-4" aria-hidden="true" />
            Drag the slider to compare
          </p>
        </div>
      </div>
    </section>
  );
}
