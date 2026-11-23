import type { Metadata } from "next";

import { business } from "@/lib/business";
import "./globals.css";

export const metadata: Metadata = {
  title: `${business.name} | Car Servicing & Repairs in ${business.location}`,
  description:
    "Independent car service and repair workshop: diagnostics, brakes, servicing, batteries and air conditioning. Upfront prices and online booking.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
