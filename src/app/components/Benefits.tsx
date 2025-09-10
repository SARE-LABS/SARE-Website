"use client";

import Image from "next/image";
import { Benefit } from "../../../public/data";
import HighlightHead from "../UI/props/HighlightHead";
import Card from "../UI/Card";
import CardLarge from "../UI/CardLarge";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView, Variants } from "framer-motion";

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
      className="py-[24px] px-[2rem] overflow-hidden md:py-[48px] md:px-[96px]"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="flex items-start justify-start gap-[24px] flex-col md:flex-row"
      >
        {/* Left Column */}
        <motion.div variants={itemVariants} className="flex flex-col gap-[16px]">
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
          className="w-full grid grid-cols-3 gap-3"
        >
          <motion.div variants={itemVariants} className="col-span-3 relative">
            <CardLarge />
          </motion.div>
          <motion.div variants={itemVariants} className="relative">
            <Card />
          </motion.div>
          <motion.div variants={itemVariants} className="relative">
            <Card />
          </motion.div>
          <motion.div variants={itemVariants} className="relative">
            <Card />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Benefits;
