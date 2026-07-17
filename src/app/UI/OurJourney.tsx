"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Journey } from "../../../public/data";

function JourneyItem({ journey }: { journey: (typeof Journey)[number] }) {
  const itemRef = useRef<HTMLDivElement>(null);
  const [blur, setBlur] = useState(6);
  const [opacity, setOpacity] = useState(0.4);

  const updateBlur = useCallback(() => {
    if (!itemRef.current) return;

    const item = itemRef.current.getBoundingClientRect();

    // Use the window's inner height to find the center of the screen
    const windowCenter = window.innerHeight / 2;
    const itemCenter = item.top + item.height / 2;

    // Distance from center as a ratio (0 = center, 1 = edge of screen)
    const distance = Math.abs(windowCenter - itemCenter);
    const maxDistance = window.innerHeight / 2;
    const ratio = Math.min(distance / maxDistance, 1);

    // Blur
    setBlur(ratio * 2.5);
    // Opacity
    setOpacity(1 - ratio * 0.5);
  }, []);

  useEffect(() => {
    // Listen to window scroll instead of a container
    window.addEventListener("scroll", updateBlur, { passive: true });
    // Also update on resize in case window size changes
    window.addEventListener("resize", updateBlur, { passive: true });

    updateBlur();

    return () => {
      window.removeEventListener("scroll", updateBlur);
      window.removeEventListener("resize", updateBlur);
    };
  }, [updateBlur]);

  return (
    <motion.div
      ref={itemRef}
      animate={{
        filter: `blur(${blur}px)`,
        opacity,
      }}
      transition={{ duration: 0.08, ease: "linear" }}
      className="w-full relative flex"
    >
      {/* Seamless vertical line */}
      <div className="absolute left-[125px] md:left-[201px] top-0 bottom-0 w-[2px] bg-[#E5E7EB] z-0" />

      <div className="w-full grid grid-cols-[100px_20px_1fr] md:grid-cols-[150px_40px_1fr] gap-4 md:gap-8 py-[40px] z-10">
        {/* Left — date */}
        <div className="flex items-start flex-col gap-1 w-full text-left pt-1">
          <p className="text-[12px] md:text-[14px] font-medium leading-[148%] text-[#9CA3AF]">
            {journey.date}
          </p>
          <h3 className="text-text-primary text-[20px] md:text-[28px] font-medium leading-[120%]">
            {journey.month}
          </h3>
        </div>

        {/* Middle — Dot */}
        <div className="flex flex-col items-center pt-[6px] md:pt-[10px]">
          <div
            className="w-[14px] h-[14px] md:w-[18px] md:h-[18px] rounded-full border-[2px] border-white transition-colors duration-300 shadow-sm"
            style={{ backgroundColor: blur < 2 ? "#4CC9F0" : "#D1D5DB" }}
          />
        </div>

        {/* Right — content */}
        <div className="w-full flex flex-col items-start pr-4 md:pr-8">
          <h1 className="text-text-primary text-[24px] md:text-[36px] font-medium leading-[120%] mb-3">
            {journey.title}
          </h1>
          <p className="text-[#4B5563] text-[14px] md:text-[16px] leading-[148%] mb-6">
            {journey.context}
          </p>
          {/* <button className="ml-auto bg-[#67B5DC] text-white px-[20px] py-[8px] rounded-full text-[14px] flex items-center gap-2 hover:bg-[#5AA1C5] transition-colors">
            Read Blog <span>↗</span>
          </button> */}
        </div>
      </div>
    </motion.div>
  );
}

//  Main component
function OurJourney() {
  return (
    <div className="relative w-full">
      <div className="flex flex-col px-1 w-full">
        {Journey.map((journey) => (
          <JourneyItem key={journey.id} journey={journey} />
        ))}
      </div>
    </div>
  );
}

export default OurJourney;
