"use client";

import ImageCompare from "@/components/ui/image-compare";

const src =
  "https://uiarc.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fliving-room.87b656c0.jpg&w=1920&q=75";

export default function ImageCompareDemo() {
  return (
    <div className="w-full max-w-xl mx-auto p-8">
      <ImageCompare
        before={
          <img
            src={src}
            alt="Raw capture of a bright living room with timber beams and arched windows, flat and muted"
            style={{
              filter: "saturate(.45) contrast(.78) brightness(1.1) sepia(.12)",
            }}
          />
        }
        after={
          <img
            src={src}
            alt="Final grade of the same room, with warmer light and richer wood tones"
          />
        }
        label="Living room, raw and graded"
        aspectRatio="4 / 3"
      />
    </div>
  );
}
