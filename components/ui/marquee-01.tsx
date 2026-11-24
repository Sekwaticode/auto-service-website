import { ArrowUpRight, Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee-01-utils/marquee";
import { display, mono } from "@/lib/fonts";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------------ */
/* PLACEHOLDER REVIEWS: replace every entry with real reviews copied from   */
/* your Google Business Profile before the site goes live. Showing made-up  */
/* reviews as "Google reviews" misleads customers and breaks consumer       */
/* protection rules in many countries.                                      */
/* ------------------------------------------------------------------------ */
const reviews = [
  {
    name: "Sam P.",
    date: "2 weeks ago",
    rating: 5,
    body: "Someone reversed into my door in a parking lot. You honestly can't tell where the dent was, and the paint matches perfectly.",
  },
  {
    name: "Thandi M.",
    date: "1 month ago",
    rating: 5,
    body: "They handled the whole insurance claim for me after my accident. Clear quote, regular updates, and the car came back looking brand new.",
  },
  {
    name: "Daniel K.",
    date: "1 month ago",
    rating: 5,
    body: "Hail left my bonnet and roof covered in dents. They removed them without a respray and the original finish looks perfect.",
  },
  {
    name: "Aisha R.",
    date: "2 months ago",
    rating: 5,
    body: "Cracked bumper and a scraped wing from a low wall. Repaired and resprayed in two days for less than I expected.",
  },
  {
    name: "Pieter V.",
    date: "3 months ago",
    rating: 5,
    body: "Front-end collision that I thought was a write-off. They straightened the chassis and rebuilt the front, and it drives perfectly.",
  },
  {
    name: "Lerato N.",
    date: "3 months ago",
    rating: 4,
    body: "Friendly team who sent photos at every stage of the repair. Took a day longer than planned, but the finish is flawless.",
  },
];

/** Link to your Google reviews (Google Business Profile → "Read reviews"). */
const GOOGLE_REVIEWS_URL = "https://www.google.com/maps";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

/** The multicolour Google "G", used to mark the reviews as coming from Google. */
export function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="Google">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={cn("size-4", i < rating ? "fill-orange-500 text-orange-500" : "fill-neutral-200 text-neutral-200")}
        />
      ))}
    </div>
  );
}

const ReviewCard = ({
  name,
  date,
  rating,
  body,
}: {
  name: string;
  date: string;
  rating: number;
  body: string;
}) => {
  const initials = name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Card className="relative h-full w-72 overflow-hidden border-neutral-200 bg-white p-5 text-neutral-900 shadow-sm">
      <CardContent className="flex h-full flex-col gap-3 p-0">
        <div className="flex flex-row items-center gap-3">
          <div
            aria-hidden="true"
            className="grid size-9 shrink-0 place-items-center rounded-full bg-orange-500 text-sm font-semibold text-white"
          >
            {initials}
          </div>
          <div className="flex min-w-0 flex-1 flex-col">
            <p className="truncate text-sm font-semibold">{name}</p>
            <p className="text-xs text-neutral-500">{date}</p>
          </div>
          <GoogleLogo className="size-5 shrink-0" />
        </div>
        <Stars rating={rating} />
        <p className="line-clamp-4 text-sm leading-relaxed text-neutral-700">{body}</p>
        <p className="mt-auto flex items-center gap-1.5 text-xs text-neutral-500">
          Posted on <span className="font-medium text-neutral-700">Google</span>
        </p>
      </CardContent>
    </Card>
  );
};

export default function TestimonialMarqueeDemo() {
  return (
    <section
      id="reviews"
      className={cn(
        display.variable,
        mono.variable,
        "scroll-mt-4 bg-neutral-50 py-20 text-neutral-900 md:py-28 [font-family:var(--font-display)]"
      )}
    >
      <div className="mx-auto mb-12 grid max-w-6xl gap-6 px-4 sm:px-6 md:mb-16 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <p className="mb-4 flex items-center gap-2 text-xs font-medium tracking-[0.18em] text-orange-600 uppercase [font-family:var(--font-mono-eyebrow)]">
            <GoogleLogo className="size-4" />
            Google reviews
          </p>
          <h2 className="text-4xl leading-[1.05] font-semibold tracking-[-0.03em] text-balance md:text-5xl">
            What drivers say about us on Google.
          </h2>
        </div>
        <div className="flex flex-col items-start gap-4 md:col-span-5">
          <p className="text-lg leading-relaxed text-neutral-600">
            Real feedback from customers whose cars we have repaired and resprayed.
          </p>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-neutral-300 bg-white py-1.5 pr-1.5 pl-4 text-sm font-medium shadow-sm transition-colors hover:border-neutral-400"
          >
            <GoogleLogo className="size-5" />
            Read all reviews on Google
            <span className="grid size-8 place-items-center rounded-full bg-neutral-950 text-white transition-transform group-hover:rotate-45">
              <ArrowUpRight className="size-4" />
            </span>
          </a>
        </div>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:40s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:40s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-neutral-50"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-neutral-50"></div>
      </div>
    </section>
  );
}
