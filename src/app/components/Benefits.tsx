"use client";

import Image from "next/image";
import { ApplicationKeyPoints, Benefit } from "../../../public/data";
import HighlightHead from "../UI/props/HighlightHead";
import Card from "../UI/Card";
import CardLarge from "../UI/CardLarge";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView, Variants } from "framer-motion";
import { Kennedy } from "../../../public/images/images";

function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Container for staggered children
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

  // Child animation
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div
      ref={ref}
      className="py-[24px] px-[2rem] overflow-hidden md:py-[48px] md:px-[96px] "
    >
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
          className="w-full md:w-[55%] grid md:grid-cols-2 grid-row-2 gap-3 "
        >
          <motion.div variants={itemVariants} className="row-span-2 md:row-span-1 relative">
            <div
              className="relative w-full h-[160px] md:h-full  rounded-md"
              style={{
                backgroundImage: `url(${Kennedy.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="relative w-[100%] h-[160px] md:h-full   overflow-hidden  flex justify-items-end items-end ">
                <div className="absolute inset-0 bg-black/40 rounded-md"></div>

                <div className="relative inset-0 flex flex-col justify-between -4">
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-white p-3  text-left text-sm">
                      Interviewing farmers at Egundungun lagos about a new type
                      of farm machinery and irrigation methods
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="relative grid grid-cols-2 md:grid-cols-1 gap-3">
            {ApplicationKeyPoints.slice(0, 2).map((points) => (
              <div
                key={points.id}
                className="relative w-full h-[160px] md:h-fit"
                style={{
                  backgroundImage: `url(${points.img.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="relative w-full h-[160px] rounded-md overflow-hidden flex justify-items-end items-end">
                  <div className="absolute inset-0 bg-black/40 rounded-md"></div>

                  <div className="relative inset-0 flex flex-col justify-between p-4">
                    <div className="flex flex-col items-start justify-center">
                      <p className="text-white text-sm leading-3">
                        {points.description}
                      </p>
                      <h2 className="text-white text-3xl font-bold">
                        {points.figure}
                      </h2>
                    </div>
                  </div>
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
