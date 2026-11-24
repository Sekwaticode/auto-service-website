import Link from "next/link";
import {
  CarFront,
  FileCheck,
  Hammer,
  Ruler,
  Sparkles,
  SprayCan,
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
    icon: CarFront,
    title: "Collision repair",
    description: "Front, rear and side impact damage repaired properly, from crumpled panels to broken lights and grilles.",
  },
  {
    icon: Hammer,
    title: "Panel beating",
    description: "Dented and creased panels straightened and reshaped by hand, or replaced when repair isn't the right call.",
  },
  {
    icon: SprayCan,
    title: "Spray painting",
    description: "Full and partial resprays in a dust-free booth, colour matched to your car's factory paint code.",
  },
  {
    icon: Sparkles,
    title: "Dent & scratch removal",
    description: "Hail dents, door dings and scratches removed, often without repainting, so your original finish stays.",
  },
  {
    icon: Ruler,
    title: "Chassis straightening",
    description: "Frames measured and pulled back to factory specification after a serious accident, so the car drives true.",
  },
  {
    icon: FileCheck,
    title: "Insurance claims",
    description: "We assess the damage, prepare the quote your insurer needs and keep you updated until the car is ready.",
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
              Every repair, from door dings to write-off scares.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-white/60 md:col-span-5">
            One body shop for minor scrapes and major accident damage, on every make and model.
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
                  Get a quote <span aria-hidden="true">→</span>
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
