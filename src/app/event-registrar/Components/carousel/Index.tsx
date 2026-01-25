"use client"
import { useRef, useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react"; // optional icons
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import SARE from "../../assets/images/How to GIT Started.jpg";
import SARE2 from "../../assets/images/flyerTwo.jpg";
import SARE3 from "../../assets/images/FlyerThree.jpg";
import Image from "next/image";


export const Carousel = () => {
  const images = [SARE, SARE2, SARE3]; // Added more images
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  // Check scroll positions to toggle buttons
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeft(scrollLeft > 0);
      setShowRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (container) container.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  // Scroll by fixed amount
  const scrollByAmount = (amount: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">
      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 scroll-smooth no-scrollbar justify-center"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[300px] h-[300px] flex justify-center items-center"
          >
            <Image
              src={image}
              alt={`Carousel ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* {left shadow} */}
      {showLeft && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#F3F4F6CC] to-transparent w-36 h-full" />
      )}
      {/* {right shadow} */}
      {showRight && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-[#F3F4F6CC] to-transparent w-36 h-full" />
      )}

      {/* Left button */}
      {showLeft && (
        <button
          onClick={() => scrollByAmount(-220)}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full ml-2 cursor-pointer"
        >
          <FaArrowLeft size={20} />
        </button>
      )}

      {/* Right button */}
      {showRight && images.length > 4 && (
        <button
          onClick={() => scrollByAmount(220)}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full mr-2 cursor-pointer"
        >
          <FaArrowRight size={20} />
        </button>
      )}
    </div>
  );
};
