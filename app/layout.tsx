import type { Metadata } from "next";

import WhatsAppButton from "@/components/ui/whatsapp-button";
import { business } from "@/lib/business";
import "./globals.css";

export const metadata: Metadata = {
  title: `${business.name} | Panel Beating & Spray Painting in ${business.location}`,
  description:
    "Panel beaters for dents, scratches and accident damage: collision repair, spray painting, bumper repairs and insurance claims. Clear quotes and online booking.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
