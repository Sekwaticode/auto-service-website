import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

/*
 * Magic UI's Marquee (not included in the pasted component, which imports it).
 * Repeats its children and scrolls them continuously with the `animate-marquee`
 * keyframes defined in app/globals.css. Speed: [--duration:40s]; spacing: [--gap:1rem].
 */
interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  /** Scroll in the opposite direction. */
  reverse?: boolean;
  /** Pause while the pointer is over the marquee. */
  pauseOnHover?: boolean;
  children: React.ReactNode;
  /** Scroll vertically instead of horizontally. */
  vertical?: boolean;
  /** How many copies of the children to render so the loop has no gaps. */
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        vertical ? "flex-col" : "flex-row",
        className
      )}
    >
      {Array.from({ length: repeat }, (_, i) => (
        <div
          key={i}
          aria-hidden={i > 0 ? true : undefined}
          className={cn(
            "flex shrink-0 justify-around [gap:var(--gap)] motion-reduce:[animation-play-state:paused]",
            vertical ? "animate-marquee-vertical flex-col" : "animate-marquee flex-row",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
            reverse && "[animation-direction:reverse]"
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
