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
        headline="Book your car in."
        headlineAccent="Pick a drop-off time."
        description="Choose a slot for a service, repair or diagnostic check. Tell us what you've noticed and we'll call with a quote before any work starts."
        altContact={{ label: `Rather call? ${business.phone}`, href: phoneHref }}
        host={{ name: `${business.name} Workshop`, initials: "AC", role: "Service desk", stamp: "Drop-off slots · car service · " }}
        meetingTitle="Car service drop-off"
        agenda="Bring your car in at this time. We'll check it over, call you with a quote and only start work once you've approved it."
        location={business.address}
        responseNote="We'll confirm your booking by email"
        bookingUrl={`${business.website}/book`}
        durations={[60, 120, 240]}
        defaultDuration={60}
        step={60}
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
          pick: "Choose a drop-off time",
          howLong: "Time needed",
          email: "Email",
          note: "What does your car need? Make, model and anything you've noticed",
          booked: "You're booked in.",
          invite: "Your confirmation is on its way to {email}.",
          empty: "The workshop is full this week.",
          busy: "Full",
        }}
      />
    </div>
  )
}
