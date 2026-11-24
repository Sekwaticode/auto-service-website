import AutoHero from "@/components/ui/auto-hero";
import AboutSection from "@/components/ui/about-section";
import StatsGauges from "@/components/ui/stats-gauges";
import ServiceCards from "@/components/ui/service-cards";
import GoogleReviews from "@/components/ui/marquee-01";
import OpenSlotBookingDemo from "@/components/ui/open-slot-booking-demo";
import PricingSection from "@/components/ui/boxly-pricing-1";
import SectionHeading from "@/components/ui/section-heading";
import SiteFooter from "@/components/ui/site-footer";
import RepairCta from "@/components/ui/repair-cta";

export default function Home() {
  return (
    <main>
      <AutoHero />
      <AboutSection />
     <RepairCta />
      <ServiceCards />
      <GoogleReviews />
      {/* ids are the targets of the hero's navigation links */}
      <section id="booking" className="scroll-mt-4">
        <SectionHeading title="Book a service" tagline="Pick a time" />
        <OpenSlotBookingDemo />
      </section>
      <section id="pricing" className="scroll-mt-4">
        <PricingSection />
      </section>
            <StatsGauges />

      <SiteFooter />
    </main>
  );
}
