import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { display, mono } from "@/lib/fonts";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------------ */
/* Service packages and prices: placeholders, replace with your own.        */
/* ------------------------------------------------------------------------ */
const pricingTiers = [
  {
    name: "MINOR SERVICE",
    description: "Routine care between major services, for cars in good shape",
    price: "R1 499",
    priceNote: "from, per service",
    featured: false,
    features: [
      "Engine oil and oil filter replaced",
      "Fluid levels checked and topped up",
      "Tyre pressure and tread check",
      "Brake pad and disc inspection",
      "Lights, wipers and battery check",
      "Diagnostic scan for fault codes",
    ],
    cta: "BOOK A MINOR SERVICE",
  },
  {
    name: "FULL SERVICE",
    description: "Our most popular package, recommended once a year",
    price: "R2 899",
    priceNote: "from, per service",
    featured: true,
    features: [
      "Everything in the minor service",
      "Air and cabin filters replaced",
      "Spark plugs checked or replaced",
      "Brake fluid test",
      "Suspension and steering check",
      "Service book stamped to keep your warranty",
    ],
    cta: "BOOK A FULL SERVICE",
  },
  {
    name: "MAJOR SERVICE",
    description: "Manufacturer-schedule service for higher mileage cars",
    price: "Get a quote",
    priceNote: "priced for your make and model",
    featured: false,
    features: [
      "Everything in the full service",
      "Timing belt or chain inspection",
      "Coolant and transmission fluid change",
      "Fuel filter replaced",
      "Full road test and report",
      "Courtesy car on request",
    ],
    cta: "REQUEST A QUOTE",
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
              Service packages for{" "}
              <span className="text-gray-500">every car</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:mt-auto">
            <p className="text-gray-500">
              <span className="text-white">Fixed prices</span> on routine servicing, and a quote you
              approve before any repair work starts
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
          Prices include labour and standard parts for most cars. Repairs found during a service
          are always quoted first.
        </p>
      </div>
    </div>
  );
}
