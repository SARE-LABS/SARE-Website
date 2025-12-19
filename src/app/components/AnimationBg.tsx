"use client";

import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { HomeBg, GroupPictureWithLoveBin,CTRLLABS, CTRLLABS20, CTRLLABS31, CTRLLABS30} from "../../../public/images/images";

const FolderClipPath = () => (
  <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
    <defs>
      <clipPath id="folder-card-clip" clipPathUnits="objectBoundingBox">
        <path
          d="M125 -0.98C133.837 -0.98 141 6.05 141 14.72V22.6C141 31.32 148.163 38.4 157 38.4H181C189.837 38.4 197 45.48 197 54.1V144.8C197 153.52 189.837 160.6 181 160.6H16C7.163 160.6 0 153.52 0 144.8V14.72C0 6.05 7.163 -0.98 16 -0.98H125Z"
          transform="scale(0.0050761, 0.0062266)"
        />
      </clipPath>
    </defs>
  </svg>
);

const ParallaxColumn = ({ 
  images, 
  y, 
  line = true 
}: { 
  images: string[], 
  y: any, 
  line?: boolean 
}) => {
  return (
    <div className="relative h-full flex flex-col items-center w-full min-w-[140px] md:min-w-[200px] px-2">
      
      {line && (
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-gray-600 to-transparent h-full z-0" />
      )}

      <motion.div 
        style={{ y }} 
        className="relative flex flex-col gap-8 w-full z-10"
      >
        {images.map((src, i) => (
          <div 
            key={i} 
            className="relative w-full aspect-[4/5] bg-gray-100 border-3 border-[#D9D9D9] shadow-lg scale-x-120 hover:scale-x-120 transition-transform duration-500 ease-out"
            style={{ clipPath: "url(#folder-card-clip)" }}
          >
            <Image
              src={src}
              fill
              alt="Gallery image"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-300" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

function AnimationBg() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, { damping: 15, stiffness: 100 });

  const y1 = useTransform(smoothScroll, [0, 1], [0, 400]); 
  const y2 = useTransform(smoothScroll, [0, 1], [0, 300]); 
  const y3 = useTransform(smoothScroll, [0, 1], [0, 500]); 
  const y4 = useTransform(smoothScroll, [0, 1], [0, 250]); 
  
  const images = [GroupPictureWithLoveBin.src, CTRLLABS.src, CTRLLABS20.src, CTRLLABS31.src, CTRLLABS30.src];

  return (
    <>
      <FolderClipPath />
      
      <section 
        ref={containerRef} 
        className="relative w-full h-[56dvh] md:h-[85vh] overflow-hidden"
      >

        {/* --- DESKTOP LAYOUT --- */}
        <div className="hidden md:flex justify-between gap-4 lg:gap-8 px-[2rem] md:px-[96px] h-full">
          
          <div className="pt-0 h-full">
            <ParallaxColumn y={y2} images={[images[0]]} />
          </div>
          
          <div className="pt-24 h-full">
            <ParallaxColumn y={y4} images={[images[3]]} />
          </div>

          <div className="pt-36 h-full">
             <ParallaxColumn y={y2} images={[images[1]]} />
          </div>

          <div className="pt-32 h-full">
            <ParallaxColumn y={y4} images={[images[4]]} />
          </div>
          <div className="pt-16 h-full">
            <ParallaxColumn y={y2} images={[images[2]]} />
          </div>
        </div>

        {/* --- MOBILE LAYOUT --- */}
        <div className="flex md:hidden justify-center gap-4 px-[1rem] h-full overflow-hidden">
          <div className="pt-8 h-full">
            <ParallaxColumn y={y2} images={[images[0]]} />
          </div>          
          <div className="pt-12 h-full">
            <ParallaxColumn y={y4} images={[images[0]]} />
          </div>
          <div className="pt-20 h-full">
            <ParallaxColumn y={y2} images={[images[2]]} />
          </div>
          
          <div className="pt-16 h-full">
            <ParallaxColumn y={y4} images={[images[1]]} />
          </div>
        </div>

      </section>
    </>
  );
}

export default AnimationBg;