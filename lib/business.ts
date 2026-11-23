/* ------------------------------------------------------------------------ */
/* Business details used across the site (hero, booking, pricing).          */
/* Replace these placeholders with your own.                                */
/* ------------------------------------------------------------------------ */
export const business = {
  name: "AutoCare",
  phone: "(000) 000-0000",
  email: "bookings@yourgarage.co.za",
  website: "www.yourgarage.co.za",
  location: "Your City",
  address: "Your workshop address",
  timeZone: "Africa/Johannesburg",
  /** Opening hours: used by the booking calendar and the footer. Days: 1 = Monday … 7 = Sunday. */
  hours: { days: [1, 2, 3, 4, 5, 6], from: "08:00", to: "17:00" },
  /** Placeholder rating shown in the hero; use your real Google rating. */
  rating: "4.9",
  reviewCount: "500+",
};

/** tel: link for the phone number above. */
export const phoneHref = `tel:${business.phone.replace(/[^\d+]/g, "")}`;
