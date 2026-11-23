import Link from "next/link";
import {
  BatteryCharging,
  CalendarCheck,
  Disc3,
  Droplet,
  ScanSearch,
  Snowflake,
  type LucideIcon,
} from "lucide-react";

import { display, mono } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "./service-cards.css";

/* ------------------------------------------------------------------------ */
/* Services shown as cards: edit to match what your shop offers.            */
/* ------------------------------------------------------------------------ */
export const services: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: ScanSearch,
    title: "Diagnostics",
    description: "Dealer-level scan tools find the cause of warning lights and odd noises, explained in plain language.",
  },
  {
    icon: Disc3,
    title: "Brakes",
    description: "Pads, discs, calipers and fluid checked and replaced, so you stop straight and quietly every time.",
  },
  {
    icon: Droplet,
    title: "Oil & fluids",
    description: "Oil and filter changes plus coolant, brake and transmission fluid to the manufacturer's schedule.",
  },
  {
    icon: CalendarCheck,
    title: "Scheduled servicing",
    description: "Minor and major services that keep your warranty valid and your car running the way it should.",
  },
  {
    icon: BatteryCharging,
    title: "Battery & electrical",
    description: "Battery testing and replacement, alternators, starters and wiring faults traced and fixed.",
  },
  {
    icon: Snowflake,
    title: "Air conditioning",
    description: "Re-gassing, leak tests and repairs to get your cabin cool again before the heat arrives.",
  },
];

export default function ServiceCards() {
  return (
    <section
      id="services"
      className={cn(
        display.variable,
        mono.variable,
        "scroll-mt-4 bg-neutral-950 px-4 py-20 text-white sm:px-6 md:py-28 [font-family:var(--font-display)]"
      )}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-6 md:mb-16 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="mb-4 text-xs font-medium tracking-[0.18em] text-orange-500 uppercase [font-family:var(--font-mono-eyebrow)]">
              What we do
            </p>
            <h2 className="text-4xl leading-[1.05] font-semibold tracking-[-0.03em] text-balance md:text-5xl">
              Every job, from oil change to overhaul.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-white/60 md:col-span-5">
            One workshop for routine servicing and the repairs you didn&apos;t plan for, on every make and model.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <article key={title} className="service-card">
              <div className="service-card__head">
                <Icon className="service-card__icon" strokeWidth={1.25} aria-hidden="true" />
                <div className="service-card__ring" aria-hidden="true">
                  <span className="service-card__dot" />
                </div>
              </div>

              <div className="service-card__body">
                <h3>{title}</h3>
                <p>{description}</p>
                <Link href="#booking" className="service-card__btn">
                  Book this service <span aria-hidden="true">→</span>
                  <span className="sr-only">: {title}</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
