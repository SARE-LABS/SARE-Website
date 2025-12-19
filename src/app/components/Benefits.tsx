"use client";

import Image from "next/image";
import {
  // ApplicationKeyPoints, // Unused
  Benefit,
  BenefitsKeyPoints,
} from "../../../public/data";
import HighlightHead from "../UI/props/HighlightHead";
// import Card from "../UI/Card"; // Unused
// import CardLarge from "../UI/CardLarge"; // Unused
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView, Variants } from "framer-motion";
import { CAD, Kennedy } from "../../../public/images/images"; // Note: Kennedy is imported but unused in logic below, kept it just in case.

/** * 1. DEFINE THE RESPONSIVE SHAPES 
 * We have two distinct shapes here.
 */
const BenefitsClipPaths = () => (
  <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
    <defs>
      {/* LARGE CARD: 260x400 => scale(0.0038461, 0.0025) */}
      <clipPath id="benefits-large-clip" clipPathUnits="objectBoundingBox">
        <path 
          d="M260 353C260 360.3 254.3 366 247 366H222.7C215.4 366 209.7 371.7 209.7 379V387C209.7 394.3 204 400 196.7 400H17.5C10.2 400 4.5 394.3 4.5 387V13.5C4.5 6.2 10.2 0.5 17.5 0.5H247C254.3 0.5 260 6.2 260 13.5V353Z" 
          transform="scale(0.0038461, 0.0025)"
        />
      </clipPath>

      {/* SMALL CARDS: 260x188 => scale(0.0038461, 0.0053191) */}
      <clipPath id="benefits-small-clip" clipPathUnits="objectBoundingBox">
        <path 
          d="M260 139.67C260 146.59 252.59 153 244.67 153H219.67C211.01 153 204 159.98 204 168.67V174.67C204 181.59 196.59 188 188.67 188H16C7.163 188 0 181.59 0 174.67V12.67C0 5.163 7.163 0 16 0H244.67C252.59 0 260 5.163 260 12.67V139.67Z" 
          transform="scale(0.0038461, 0.0053191)"
        />
      </clipPath>
    </defs>
  </svg>
);

function Benefits() {
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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div
      ref={ref}
      className="py-[24px] px-[2rem] overflow-hidden md:py-[48px] md:px-[96px] "
    >
      {/* 2. INJECT THE SVG DEFINITIONS */}
      <BenefitsClipPaths />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="flex items-start justify-start gap-[24px] flex-col md:flex-row"
      >
        {/* Left Column */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-[16px]"
        >
          <div className="mb-[16px]">
            <HighlightHead title="Benefits of Joining" />
          </div>
          <h1 className="text-[36px] text-text-primary font-medium  leading-[120%]">
            Unlock Opportunities That Shape the Future of AgriTech
          </h1>
          <p className="text-[16px] text-text-primary leading-[148%]">
            From hands-on projects to industry connections, see why being part
            of SARE is a game-changer.
          </p>
          <motion.div
            variants={containerVariants}
            className="flex flex-col gap-[8px] items-start"
          >
            {Benefit.map((benefit) => (
              <motion.div
                key={benefit.id}
                variants={itemVariants}
                className="flex items-start justify-center gap-2"
              >
                <Image src={benefit.img} alt={benefit.description} />
                <p className="text-[18px] leading-[120%] text-text-primary">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column (Cards) */}
        <motion.div
          variants={containerVariants}
          className="w-full md:w-[55%] flex flex-row-reverse md:flex-row h-[400px] justify-between gap-2" 
          // Added 'gap-2' here to prevent cards from touching if they flex
        >
          <motion.div
            variants={itemVariants}
            className="flex-1 h-full relative"
          >
            <div
              className="relative w-full h-full md:h-full overflow-hidden"
              style={{
                backgroundImage: `url(${CAD.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                // 3. APPLY LARGE CARD ID
                clipPath: "url(#benefits-large-clip)", 
              }}
            >
              <div className="relative w-[100%] h-[160px] md:h-full overflow-hidden  flex justify-items-end items-end ">
                <div className="absolute inset-0 bg-black/40 rounded-md"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative h-full flex flex-col justify-between gap-2 flex-1"
          >
            {BenefitsKeyPoints.slice(0, 2).map((points) => (
              <div
                key={points.id}
                className="relative w-full h-1/2 overflow-hidden"
                style={{
                  backgroundImage: `url(${points.img.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  // 4. APPLY SMALL CARD ID
                  clipPath: "url(#benefits-small-clip)",
                }}
              >
                <div className="relative w-full h-full overflow-hidden flex justify-items-end items-end">
                  <div className="absolute inset-0 bg-black/40 rounded-md"></div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Benefits;