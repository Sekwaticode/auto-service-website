"use client"

import dynamic from "next/dynamic"

import { business, phoneHref } from "@/lib/business"

// Browser-only: the calendar reads the current time while rendering, so a
// server render (or the build-time prerender) never matches the browser's and
// React throws a hydration error.
const OpenSlotBooking = dynamic(() => import("@/components/ui/open-slot-booking"), {
  ssr: false,
  loading: () => <div className="min-h-[640px]" aria-hidden="true" />,
})

// Times the workshop is already full (sample data). On a real site these come
// from your booking system or calendar (see the component's loadHostBusy prop).
const workshopBusy = [
  { weekday: 1, from: "08:00", to: "10:00" },
  { weekday: 1, from: "14:00", to: "15:00" },
  { weekday: 2, from: "11:00", to: "13:00" },
  { weekday: 3, from: "08:00", to: "09:00" },
  { weekday: 3, from: "13:00", to: "16:00" },
  { weekday: 4, from: "10:00", to: "11:00" },
  { weekday: 5, from: "14:00", to: "17:00" },
  { weekday: 6, from: "08:00", to: "10:00" },
]

// The site's orange (Tailwind orange-500 / orange-600) on a near-black window.
const orange = {
  slab: "#f97316",
  from: "#f97316",
  to: "#ea580c",
  fromDark: "#fb923c",
  toDark: "#f97316",
  action: "#f97316",
  window: "#0a0a0a",
}

export default function Demo() {
  return (
    <div className="w-full">
      <OpenSlotBooking
        headline="Get your car assessed."
        headlineAccent="Pick a time for a quote."
        description="Bring your car in and we'll inspect the damage, take photos and give you a written repair quote, ready for your insurer if you're claiming."
        altContact={{ label: `Rather call? ${business.phone}`, href: phoneHref }}
        host={{ name: `${business.name} Body Shop`, initials: "AC", role: "Quotes & assessments", stamp: "Damage assessment · repair quote · " }}
        meetingTitle="Damage assessment & quote"
        agenda="Bring your car in at this time. We'll inspect the damage with you, explain what needs repairing and send a written quote. Work only starts once you've approved it."
        location={business.address}
        responseNote="We'll confirm your booking by email"
        bookingUrl={`${business.website}/quote`}
        durations={[30, 60]}
        defaultDuration={30}
        step={30}
        hostTimeZone={business.timeZone}
        timeZones={[business.timeZone]}
        hours={business.hours}
        clock="24h"
        hostBusy={workshopBusy}
        visitorEvents={[]}
        defaultOverlay={false}
        colors={orange}
        theme="light"
        labels={{
          pick: "Choose an assessment time",
          howLong: "Time needed",
          email: "Email",
          note: "What happened? Make, model, where the damage is, and your insurer if you're claiming",
          booked: "You're booked in.",
          invite: "Your confirmation is on its way to {email}.",
          empty: "The workshop is full this week.",
          busy: "Full",
        }}
      />
    </div>
  )
}
