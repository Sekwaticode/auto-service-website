"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ImageIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { business } from "@/lib/business";
import { display, mono } from "@/lib/fonts";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------------ */
/* About image: null shows a placeholder. To use a photo, put it in /public */
/* (e.g. /public/about-workshop.jpg) and set ABOUT_IMAGE to its path.       */
/* ------------------------------------------------------------------------ */
const ABOUT_IMAGE: string | null = "/about-workshop.png";

/** Lights up word by word as the visitor scrolls. */
const text = `After an accident you're left with insurance forms, vague quotes and paint that never quite matches. Getting your car back to how it was shouldn't be another headache.`;
const words = text.split(" ");

export default function AboutSection() {
  const scrollTarget = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);
  const [currentWord, setCurrentWord] = useState(0);
  // Unsubscribes itself on unmount (the original .on("change") listener was never removed).
  useMotionValueEvent(wordIndex, "change", (latest) => setCurrentWord(latest));

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className={cn(
        display.variable,
        mono.variable,
        "scroll-mt-4 bg-neutral-950 px-4 py-28 text-white sm:px-6 lg:py-40 [font-family:var(--font-display)]"
      )}
    >
      <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image: above the text on small screens, pinned beside it on large ones */}
        <div className="lg:sticky lg:top-28 lg:order-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 lg:aspect-[4/5]">
            {ABOUT_IMAGE ? (
              <Image
                src={ABOUT_IMAGE}
                alt="Gloved hands cutting sheet metal on a workbench as sparks fly"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-[62%_55%]"
              />
            ) : (
              <div className="absolute inset-0 grid place-items-center">
                {/* subtle grid texture */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgb(255_255_255/0.06)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.06)_1px,transparent_1px)] [background-size:40px_40px]"
                />
                <div
                  aria-hidden="true"
                  className="absolute -bottom-24 -left-24 size-72 rounded-full bg-orange-500/20 blur-3xl"
                />
                <div className="relative flex flex-col items-center gap-3 px-6 text-center">
                  <span className="grid size-14 place-items-center rounded-2xl border border-dashed border-white/25 text-white/60">
                    <ImageIcon className="size-6" />
                  </span>
                  <p className="font-medium text-white/80">Image placeholder</p>
                  <p className="max-w-[16rem] text-sm text-white/50">
                    Add a photo of your workshop or team here
                  </p>
                </div>
              </div>
            )}
            <span className="absolute bottom-4 left-4 rounded-full bg-neutral-950/70 px-3 py-1.5 text-xs font-medium tracking-[0.14em] text-white/80 uppercase backdrop-blur [font-family:var(--font-mono-eyebrow)]">
              Independent · {business.location}
            </span>
          </div>
        </div>

        {/* Text: pinned while the spacer below it scrolls past, lighting up word by word */}
        <div className="lg:order-1">
          <div className="sticky top-20 md:top-28">
            <span className="inline-flex rounded-full border border-orange-500/40 px-3 py-1 text-xs font-medium tracking-[0.18em] text-orange-500 uppercase [font-family:var(--font-mono-eyebrow)]">
              About us
            </span>

            <h2
              id="about-heading"
              className="mt-8 text-3xl leading-[1.12] font-medium tracking-[-0.03em] md:text-5xl"
            >
              <span>Your car deserves better.</span>{" "}
              <span>
                {words.map((word, i) => (
                  <span
                    key={i}
                    className={twMerge(
                      "text-white/15 transition-colors duration-500",
                      (reduced || i < currentWord) && "text-white"
                    )}
                  >{`${word} `}</span>
                ))}
              </span>{" "}
              <span className="mt-2 block text-orange-500">That&apos;s why we started {business.name}.</span>
            </h2>
          </div>

          <div className="h-[150vh]" ref={scrollTarget} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
