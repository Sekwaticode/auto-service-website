import ScrollVelocity from "@/components/ui/scroll-velocity";
import { display } from "@/lib/fonts";
import { cn } from "@/lib/utils";

/**
 * Big scrolling heading shown at the top of each homepage section.
 * Row 1: the section title in white. Row 2: a tagline outlined in orange,
 * moving the other way. Both speed up and lean as the page is scrolled.
 *
 * The moving text is decorative (it repeats many times), so it is hidden from
 * screen readers; a visually hidden <h2> carries the real section heading.
 */
export default function SectionHeading({
  title,
  tagline,
  className,
}: {
  title: string;
  tagline: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        display.variable,
        "bg-neutral-950 py-10 text-white md:py-14 [font-family:var(--font-display)]",
        className
      )}
    >
      <h2 className="sr-only">{title}</h2>
      <div aria-hidden="true">
        <ScrollVelocity
          texts={[title, <span key="tagline" className="text-orange-500">{tagline}</span>]}
          velocity={40}
          skewWithVelocity={12}
          scaleWithVelocity={0.12}
          fontSize="clamp(2.75rem, 8vw, 6.5rem)"
          fontWeight={600}
          numCopies={6}
          damping={90}
          stiffness={150}
          separator={<span className="text-orange-500">✦</span>}
          gap={28}
          outlineAlternate
          fadeEdges
          pauseOnHover
          scrollerStyle={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em", paddingBlock: "0.08em" }}
        />
      </div>
    </div>
  );
}
