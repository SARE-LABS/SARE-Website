"use client";

import Image from "next/image";
import { Why } from "../../../public/data";
import HighlightHead from "../UI/props/HighlightHead";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView, Variants } from "framer-motion";

/** * 1. DEFINE THE RESPONSIVE SHAPE 
 * Original Path Dimensions: 350px width x 280px height
 */
const WhyJoinClipPath = () => (
  <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
    <defs>
      <clipPath id="why-join-clip" clipPathUnits="objectBoundingBox">
        {/* Transformation: scale(1/350, 1/280) 
            => scale(0.0028571, 0.0035714)
        */}
        <path 
          d="M282 0C290.6 0 297 7.2 297 16V24C297 32.8 304.2 40 313 40H335C343.6 40 350 47.2 350 56V264C350 272.8 343.6 280 335 280H15C7.2 280 0 272.8 0 264V16C0 7.2 7.2 0 15 0H282Z" 
          transform="scale(0.0028571, 0.0035714)"
        />
      </clipPath>
    </defs>
  </svg>
);

function WhyJoin() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // const disabled = true; // Unused in current render

  return (
    <div ref={ref} className="py-[24px] px-[2rem] md:px-[96px] overflow-hidden">
      
      {/* 2. INJECT THE SVG DEFINITION */}
      <WhyJoinClipPath />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="flex flex-col items-center justify-center text-center gap-[16px] md:py-[48px]"
      >
        <motion.div variants={cardVariants}>
          <HighlightHead title="Why Join SARE?" />
        </motion.div>

        <motion.h1
          variants={cardVariants}
          className="text-[36px] text-text-primary font-bold leading-[120%] w-[382px] md:w-full"
        >
          For Visionaries, Innovators, and Problem Solvers
        </motion.h1>

        <motion.p
          variants={cardVariants}
          className="text-[16px] text-text-primary leading-[148%] w-[382px] md:w-full"
        >
          SARE is more than a community—it&apos;s a movement to transform
          agriculture through tech. If you&apos;re passionate about robotics,
          automation, and solving real challenges, this is where your ideas come
          to life.
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="w-full flex flex-col md:flex-row items-center justify-center gap-[16px]"
        >
          {Why.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative bg-highlight p-[16px] w-[382px] h-[364px] rounded-[16px] gap-[8px] flex flex-col items-center justify-center"
            >
              {/* Image Container with Responsive Clip Path */}
              <div 
                className="w-full h-[280px] overflow-hidden"
                // 3. APPLY THE CLIP PATH HERE
                style={{ clipPath: "url(#why-join-clip)" }}
              >
                <Image
                  src={item.img}
                  alt="Excos Frame"
                  className="object-cover w-full h-full"
                />
              </div>
              
              <p className="text-[18px] text-text-primary leading-[120%] text-left">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default WhyJoin;