"use client";

import Image from "next/image";
import { ProblemDiscovery } from "../../../public/data";
import { ARIghtBlue } from "../../../public/images/images";
import Card from "../UI/Card";
import CardLarge from "../UI/CardLarge";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView, Variants } from "framer-motion";

function FieldTesting() {
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
      className="py-[24px] px-[2rem] overflow-hidden md:py-[48px] md:px-[96px] bg-background-page"
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
          <span className="w-fit flex-shrink-0 whitespace-nowrap  flex items-center text-primary-blue rounded-[24px] px-[16px] py-[8px] transition-all ease-in-out duration-200 bg-highlight gap-3">
            <Image src={ARIghtBlue} alt=""></Image>
            <p>Field Testing</p>
          </span>
          <h1 className="text-[36px] text-text-primary font-medium  leading-[120%]">
            The farm is our ultimate proving ground
          </h1>
          <p className="text-[16px] text-text-primary leading-[148%]">
            We take our robots to real farms for testing. This allows us to
            gather performance data under real agricultural conditions—soil,
            weather, and crop variations—so we can fine-tune our systems for
            reliability and scalability.
          </p>
          <motion.div
            variants={containerVariants}
            className="flex flex-col gap-[8px] items-start"
          >
            {ProblemDiscovery.map((discovery) => (
              <motion.div
                key={discovery.id}
                variants={itemVariants}
                className="flex items-start justify-center gap-2"
              >
                <Image src={discovery.img} alt={discovery.description} />
                <p className="text-[18px] leading-[120%] text-text-primary">
                  {discovery.description}
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
          <motion.div variants={itemVariants} className="col-span-3 relative ">
            <CardLarge />
          </motion.div>
          <motion.div variants={itemVariants} className="col-span-3 relative">
            <CardLarge />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default FieldTesting;
