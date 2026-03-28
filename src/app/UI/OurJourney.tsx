"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Journey } from "../../../public/data";

// ─── Single item — calculates its own blur based on distance from container center ───
function JourneyItem({
  journey,
  containerRef,
}: {
  journey: (typeof Journey)[number];
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const [blur, setBlur] = useState(6);
  const [opacity, setOpacity] = useState(0.4);

  const updateBlur = useCallback(() => {
    if (!itemRef.current || !containerRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const item = itemRef.current.getBoundingClientRect();

    const containerCenter = container.top + container.height / 2;
    const itemCenter = item.top + item.height / 2;

    // Distance from center as a ratio (0 = center, 1 = edge)
    const distance = Math.abs(containerCenter - itemCenter);
    const maxDistance = container.height / 2;
    const ratio = Math.min(distance / maxDistance, 1);

    // Blur: 0px at center → 7px at edges
    // Opacity: 1 at center → 0.35 at edges
    setBlur(ratio * 7);
    setOpacity(1 - ratio * 0.65);
  }, [containerRef]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Run on scroll and on mount
    container.addEventListener("scroll", updateBlur, { passive: true });
    updateBlur();

    return () => container.removeEventListener("scroll", updateBlur);
  }, [containerRef, updateBlur]);

  return (
    <motion.div
      ref={itemRef}
      animate={{
        filter: `blur(${blur}px)`,
        opacity,
      }}
      transition={{ duration: 0.08, ease: "linear" }}
      className="w-full grid grid-cols-3 gap-10 py-2"
    >
      {/* Left — date */}
      <div className="flex items-start flex-col gap-1">
        <p className="text-[16px] font-normal leading-[148%]">
          {journey.date}
        </p>
        <h3 className="text-text-primary text-[36px] font-medium leading-[120%]">
          {journey.month}
        </h3>
      </div>

      {/* Right — content */}
      <div className="col-span-2 w-full flex flex-col items-start">
        <h1 className="text-text-primary text-[48px] leading-[120%]">
          {journey.title}
        </h1>
        <p className="text-text-primary text-[16px] leading-[148%]">
          {journey.context}
        </p>
      </div>
    </motion.div>
  );
}

// ─── Main component ───────────────────────────────────────────────
function OurJourney() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative max-h-[690px]">
      {/* Top fade mask */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[var(--background,white)] to-transparent z-10 pointer-events-none" />
      {/* Bottom fade mask */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background,white)] to-transparent z-10 pointer-events-none" />

      {/* Scrollable container */}
      <div
        ref={containerRef}
        className="overflow-y-auto max-h-[690px] flex flex-col gap-7 px-1"
        style={{
          // Hide scrollbar visually but keep it functional
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {/* Top padding so first item can reach center */}
        <div className="min-h-[120px]" />

        {Journey.map((journey) => (
          <JourneyItem
            key={journey.id}
            journey={journey}
            containerRef={containerRef}
          />
        ))}

        {/* Bottom padding so last item can reach center */}
        <div className="min-h-[120px]" />
      </div>
    </div>
  );
}

export default OurJourney;