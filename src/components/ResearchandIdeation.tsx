"use client";

import Image from "next/image";
import { ProblemDiscovery } from "../../public/data";
import {
  ARIghtBlue,
  CTRLLed,
  DesignSession,
  XanthaErin,
} from "../../public/images/images";
import Card from "../app/UI/Card";
import CardLarge from "../app/UI/CardLarge";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView, Variants } from "framer-motion";

function ResearchandIdeation() {
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
      className="py-[24px] px-[2rem] md:py-[48px] md:px-[96px] bg-background-page"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="flex items-start justify-start md:justify-between gap-[24px] flex-col md:flex-row"
      >
        {/* Left Column */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-[16px] md:max-w-[35rem]"
        >
          <span className="w-fit flex-shrink-0 whitespace-nowrap  flex items-center text-primary-blue rounded-[24px] px-[16px] py-[8px] transition-all ease-in-out duration-200 bg-highlight gap-3">
            <Image src={ARIghtBlue} alt=""></Image>
            <p>Research & Ideation</p>
          </span>
          <h1 className="text-[36px] text-text-primary font-medium  leading-[120%]">
            Every groundbreaking solution begins as a bold idea
          </h1>
          <p className="text-[16px] text-text-primary leading-[148%]">
            Once we understand the problem, our team dives deep into
            research—studying existing solutions, leveraging robotics
            innovations, and brainstorming fresh ideas tailored for agriculture.
            Our goal: merge creativity with practicality to design smarter
            systems for the field.
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
          className="w-full md:max-w-[32.5rem] md:h-[30rem] grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4"
        >
          <motion.div
            variants={itemVariants}
            className="relative w-full h-full"
          >
            <Image
              fill
              src={XanthaErin}
              alt=""
              className="object-cover rounded-2xl"
            />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="w-full h-full flex flex-col gap-3"
          >
            <div className="relative flex-1 w-full">
              <Image
                fill
                src={DesignSession}
                alt=""
                className="object-cover rounded-xl"
              />
            </div>
            <div className="relative flex-1 w-full">
              <Image
                fill
                src={CTRLLed}
                alt=""
                className="object-cover rounded-xl"
              />
            </div>
          </motion.div>
          {/* Right column with two stacked cards */}
          {/* <div className="grid grid-rows-2 gap-3">
                   <motion.div variants={itemVariants} className="relative">
                     <NormalCard dimen="h-[100%]" />
                   </motion.div>
                   <motion.div variants={itemVariants} className="relative">
                     <NormalCard dimen="h-[50%]" />
                   </motion.div>
                 </div> */}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ResearchandIdeation;
