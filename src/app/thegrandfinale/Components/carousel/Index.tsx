"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import { flyer } from "../../../../../public/images/images";

export interface CarouselItem {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  image: StaticImageData | string;
  alt: string;
}

export interface CarouselProps {
  items?: CarouselItem[];
  className?: string;
}

const DEFAULT_FLYERS: CarouselItem[] = [
  {
    id: "ctrl-labs-teaser",
    title: "Innovation Sessions",
    badge: "Workshop",
    subtitle: "Practical Robotics & Hands-On Engineering",
    image: flyer,
    alt: "CTRL LABS Session Teaser",
  },
  {
    id: "whats-next",
    title: "What's Next Series",
    badge: "Highlights",
    subtitle: "The Future of Agricultural Robotics",
    image: flyer,
    alt: "What's Next - Robotics Series Flyer",
  },
];

export const Carousel: React.FC<CarouselProps> = ({
  items = DEFAULT_FLYERS,
  className = "",
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState<CarouselItem | null>(null);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    const cardWidth = 320;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), items.length - 1));
  }, [items.length]);

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollDistance = el.clientWidth * 0.75;
    el.scrollBy({
      left: direction === "left" ? -scrollDistance : scrollDistance,
      behavior: "smooth",
    });
  };

  const scrollToItem = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;

    const targetChild = el.children[index] as HTMLElement;
    if (targetChild) {
      targetChild.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  return (
    <div
      className={`relative w-full flex flex-col gap-4 select-none ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label="Event Media and Flyers"
    >
      <div className="relative w-full group">
        <div
          className={`absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[#F3F4F6] via-[#F3F4F6]/80 to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
            canScrollLeft ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          className={`absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[#F3F4F6] via-[#F3F4F6]/80 to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
            canScrollRight ? "opacity-100" : "opacity-0"
          }`}
        />

        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            aria-label="Previous flyers"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md border border-gray-200/80 shadow-lg text-[#1F2937] hover:text-[#67B5DC] hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            aria-label="Next flyers"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md border border-gray-200/80 shadow-lg text-[#1F2937] hover:text-[#67B5DC] hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex items-center justify-center overflow-x-auto gap-5 py-4 px-2 sm:px-6 scroll-smooth no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedItem(item)}
              className="flex-shrink-0 w-[280px] sm:w-[320px] bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-md hover:shadow-xl transition-all duration-300 snap-center group/card cursor-pointer flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative w-full aspect-[4/5] bg-gray-100 overflow-hidden flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 280px, 320px"
                  className="object-cover group-hover/card:scale-100 transition-transform duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pagination  Indicators */}
      <div className="flex items-center justify-center gap-2 mt-1">
        {items.map((item, index) => (
          <button
            key={item.id}
            onClick={() => scrollToItem(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              index === activeIndex
                ? "w-8 bg-[#67B5DC]"
                : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
