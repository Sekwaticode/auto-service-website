import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { display, mono } from "@/lib/fonts";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------------ */
/* Repair prices: placeholders, replace with your own.                      */
/* ------------------------------------------------------------------------ */
const pricingTiers = [
  {
    name: "DENT & SCRATCH",
    description: "Small dents, door dings and surface scratches on a single panel",
    price: "R950",
    priceNote: "from, per panel",
    featured: false,
    features: [
      "Free assessment and written quote",
      "Paintless dent removal where possible",
      "Scratches filled, flattened and polished",
      "Paint touched up to your colour code",
      "Most jobs done the same day",
      "Workmanship guarantee",
    ],
    cta: "GET A QUOTE",
  },
  {
    name: "PANEL RESPRAY",
    description: "Our most requested repair: one panel repaired and resprayed",
    price: "R2 800",
    priceNote: "from, per panel",
    featured: true,
    features: [
      "Everything in dent & scratch",
      "Panel straightened or filled and shaped",
      "Computer colour match to factory paint",
      "Booth-sprayed base coat and clear coat",
      "Blended into neighbouring panels",
      "Machine polish and full valet",
    ],
    cta: "GET A QUOTE",
  },
  {
    name: "ACCIDENT REPAIR",
    description: "Collision damage across several panels, insured or private",
    price: "Get a quote",
    priceNote: "priced after we see the damage",
    featured: false,
    features: [
      "Detailed quote for your insurer",
      "Panels repaired or replaced",
      "Chassis measured and straightened",
      "Full or partial respray",
      "Progress photos throughout the repair",
      "Courtesy car on request",
    ],
    cta: "BOOK AN ASSESSMENT",
  },
];

export default function PricingSection() {
  return (
    <div
      className={cn(
        display.variable,
        mono.variable,
        "min-h-screen bg-black px-4 text-white [font-family:var(--font-display)]"
      )}
    >
      <div className="mx-auto max-w-5xl border-neutral-700 border-x py-20">
        <div className="mb-10 grid grid-cols-1 items-center gap-6 px-4 md:grid-cols-12 md:px-10">
          <div className="md:col-span-8">
            <p className="mb-4 w-fit rounded-full border border-neutral-700 px-2 py-0.5 text-orange-400 text-xs tracking-wide [font-family:var(--font-mono-eyebrow)]">
              CLEAR, UPFRONT PRICING
            </p>
            <h2 className="font-normal text-3xl tracking-tight md:text-5xl">
              Repair prices for{" "}
              <span className="text-gray-500">every kind of damage</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:mt-auto">
            <p className="text-gray-500">
              <span className="text-white">Guide prices</span> for small repairs, and a written quote
              you approve before any work starts
            </p>
          </div>
        </div>

        <div className="mb-8 grid md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div className="relative flex h-full flex-col" key={tier.name}>
              <div
                className={`relative flex h-full flex-col ${
                  tier.featured
                    ? "border-2 border-orange-500 bg-neutral-900"
                    : "border border-neutral-700 bg-black md:border-x-0 md:border-y"
                }`}
              >
                <div className="relative mb-6 border-neutral-700 border-b p-6">
                  <h3
                    className={`mb-2 font-medium text-xl ${
                      tier.featured ? "text-orange-500" : "text-white"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{tier.description}</p>
                  {!tier.featured && (
                    <div className="absolute inset-0 z-10 flex flex-col justify-between">
                      <div className="absolute -top-0.5 -left-0.5">
                        <div className="size-1.5 border-neutral-400 border-t-2 border-l-2" />
                      </div>
                      <div className="absolute -top-0.5 -right-0.5">
                        <div className="size-1.5 border-neutral-400 border-t-2 border-r-2" />
                      </div>
                      <div className="absolute -right-0.5 -bottom-0.5">
                        <div className="size-1.5 border-neutral-400 border-r-2 border-b-2" />
                      </div>
                      <div className="absolute -bottom-0.5 -left-0.5">
                        <div className="size-1.5 border-neutral-400 border-b-2 border-l-2" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="mb-6 px-6">
                  <div className="flex flex-col gap-1">
                    <span className="font-medium text-4xl text-white">{tier.price}</span>
                    <span className="text-gray-400 text-sm">{tier.priceNote}</span>
                  </div>
                </div>

                <div className="mb-8 flex flex-1 flex-col px-6">
                  <p className="mb-4 font-bold text-gray-300 text-xs tracking-wide">
                    WHAT&apos;S INCLUDED:
                  </p>
                  <ul className="mb-6 flex-1 space-y-3">
                    {tier.features.map((feature) => (
                      <li className="flex items-start gap-3" key={feature}>
                        <Check
                          className={`mt-0.5 h-5 w-5 shrink-0 ${
                            tier.featured ? "text-orange-500" : "text-gray-500"
                          }`}
                        />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full gap-2 rounded-sm py-2 ${
                      tier.featured
                        ? "bg-orange-500 text-white hover:bg-orange-600"
                        : "bg-white text-black hover:bg-gray-100"
                    }`}
                  >
                    <Link href="#booking">
                      {tier.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                {!tier.featured && (
                  <div className="absolute inset-0 z-10 flex flex-col justify-between pointer-events-none">
                    <div className="absolute -right-0.5 -bottom-0.5">
                      <div className="size-1.5 border-neutral-400 border-r-2 border-b-2" />
                    </div>
                    <div className="absolute -bottom-0.5 -left-0.5">
                      <div className="size-1.5 border-neutral-400 border-b-2 border-l-2" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="px-4 text-center text-gray-500 text-sm md:px-10">
          Guide prices include labour and paint for most cars. Every repair is confirmed with a
          written quote after we&apos;ve seen the damage.
        </p>
      </div>
    </div>
  );
}
