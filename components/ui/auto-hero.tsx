"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, Phone, Star, X } from "lucide-react";

import TextType from "@/components/ui/text-type";
import { business, phoneHref } from "@/lib/business";
import { display, mono } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import heroImage from "@/public/hero-mechanic.jpg";

/**
 * Phrases typed after "Expert hands for" in the headline. Keep each one no
 * longer than "the car you rely on." so it fits on one line on desktop; a
 * longer phrase wraps and leaves an empty line under the shorter ones.
 */
const typedPhrases = [
  "every dent.",
  "every scratch.",
  "accident damage.",
  "a flawless finish.",
];
const longestPhrase = typedPhrases.reduce((a, b) => (b.length > a.length ? b : a));

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Booking", href: "#booking" },
  { label: "Contact", href: "#contact" },
];

/** Pill button with a round arrow badge, used for every call to action. */
export function PillLink({
  href,
  children,
  variant = "accent",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "accent" | "dark" | "ghost";
  className?: string;
}) {
  const styles = {
    accent: { pill: "bg-orange-500 text-white hover:bg-orange-600", badge: "bg-neutral-950 text-white" },
    dark: { pill: "bg-neutral-950 text-white hover:bg-neutral-800", badge: "bg-orange-500 text-white" },
    ghost: {
      pill: "border border-white/25 bg-white/5 text-white backdrop-blur-md hover:bg-white/15",
      badge: "bg-white text-neutral-950",
    },
  }[variant];

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 rounded-full py-1.5 pr-1.5 pl-5 text-sm font-medium transition-colors",
        styles.pill,
        className
      )}
    >
      {children}
      <span
        className={cn(
          "grid size-8 place-items-center rounded-full transition-transform group-hover:rotate-45",
          styles.badge
        )}
      >
        <ArrowUpRight className="size-4" />
      </span>
    </Link>
  );
}

export default function AutoHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation: fixed to the top of the screen on every section. It sits outside the hero
          section, because inside it later sections would paint over it while scrolling. */}
      <header
        className={cn(
          display.variable,
          "pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 [font-family:var(--font-display)]"
        )}
      >
        <nav className="pointer-events-auto mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border border-white/40 bg-white/85 py-2 pr-2 pl-5 text-neutral-900 shadow-lg backdrop-blur-xl">
          <Link href="/" className="flex items-center gap-2 text-xl font-semibold tracking-tight">
            <span className="font-black tracking-[-0.2em] text-orange-500 italic">//</span>
            {business.name}
          </Link>

          <ul className="hidden items-center gap-8 text-sm font-medium lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-orange-600">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href={phoneHref}
              className="hidden items-center gap-2 text-sm font-medium transition-colors hover:text-orange-600 md:flex"
            >
              <Phone className="size-4" />
              {business.phone}
            </a>
            <PillLink href="#booking" variant="dark" className="hidden sm:inline-flex">
              Get a quote
            </PillLink>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="grid size-11 place-items-center rounded-xl bg-neutral-950 text-white lg:hidden"
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="pointer-events-auto mx-auto mt-2 max-w-6xl rounded-2xl border border-white/40 bg-white/95 p-3 text-neutral-900 shadow-lg backdrop-blur-xl lg:hidden">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-lg px-3 py-3 font-medium hover:bg-neutral-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-2 flex flex-wrap items-center gap-3 border-t border-neutral-200 px-3 pt-4 pb-1">
              <PillLink href="#booking" variant="dark">
                Get a quote
              </PillLink>
              <a href={phoneHref} className="flex items-center gap-2 text-sm font-medium">
                <Phone className="size-4" />
                {business.phone}
              </a>
            </div>
          </div>
        )}
      </header>

    <section
      className={cn(
        display.variable,
        mono.variable,
        "relative isolate flex min-h-svh flex-col overflow-hidden bg-neutral-950 text-white [font-family:var(--font-display)]"
      )}
    >
      {/* Background photo with overlays that keep the text readable */}
      <Image
        src={heroImage}
        alt="Mechanic inspecting a car engine with a flashlight"
        fill
        preload
        placeholder="blur"
        sizes="100vw"
        className="-z-20 object-cover object-[40%_center] lg:object-[70%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-neutral-950/75 via-neutral-950/30 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-neutral-950/95 via-neutral-950/10 to-neutral-950/35" />

      {/* Hero content (top padding clears the fixed navigation) */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-end gap-10 px-4 pt-32 pb-12 sm:px-6 md:pb-16 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-medium tracking-[0.18em] text-white/75 uppercase [font-family:var(--font-mono-eyebrow)]">
            Panel beating &amp; spray painting · {business.location}
          </p>
          <h1 className="text-5xl leading-[0.95] font-semibold tracking-[-0.04em] text-balance sm:text-6xl lg:text-7xl xl:text-8xl">
            Expert hands for{" "}
            {/* The invisible longest phrase reserves the space, so the text
                below doesn't jump as phrases are typed and deleted. */}
            <span className="grid">
              <span aria-hidden="true" className="invisible col-start-1 row-start-1">
                {longestPhrase}
              </span>
              <TextType
                as="span"
                text={typedPhrases}
                className="col-start-1 row-start-1"
                textColors={["#f97316"]}
                typingSpeed={70}
                deletingSpeed={35}
                pauseDuration={2200}
                deleteMode="backspace"
                typeEffect="fade"
                mistakes={0.15}
                cursorStyle="bar"
                cursorColor="#ffffff"
                cursorGlide
                showCursor
              />
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-white/80">
            From small dents to major collision damage, we straighten, repair and respray your car so it
            looks like nothing ever happened. Clear quotes, and help with your insurance claim.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PillLink href="#booking">Get a quote</PillLink>
            <PillLink href="#services" variant="ghost">
              Explore services
            </PillLink>
          </div>
        </div>

        {/* Rating card */}
        <div className="w-full max-w-xs shrink-0 rounded-2xl border border-white/15 bg-neutral-900/60 p-5 backdrop-blur-xl">
          <div className="flex gap-1 text-orange-500" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-current" />
            ))}
          </div>
          <p className="mt-3 flex items-baseline gap-1.5">
            <span className="text-3xl font-semibold tracking-tight">{business.rating}</span>
            <span className="text-sm text-white/60">/ 5 average</span>
          </p>
          <p className="mt-2 text-sm leading-snug text-white/75">
            From {business.reviewCount} verified reviews by local drivers.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
