"use client";

import Image from "next/image";
import { ArrowSlant } from "../../../public/images/images";
import Link from "next/link";
import { Why } from "../../../public/data";
import HighlightHead from "../UI/props/HighlightHead";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView, Variants } from "framer-motion";

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

  const disabled = true;
  return (
    <div ref={ref} className="py-[24px] px-[2rem] md:px-[96px] overflow-hidden">
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
              {/* <Link
                href={item.link}
                onClick={(e) => disabled && e.preventDefault()}
                className="group overflow-hidden flex justify-center items-center absolute p-[10px] rounded-full hover:bg-primary-ble transition-all ease-in-out duration-300 bg-text-disabled right-5 top-6 z-[10]"
              >
                <Image
                  src={ArrowSlant}
                  width={15}
                  height={15}
                  alt="Logo"
                  className="group-hover:grayscale-100 transition-all ease-in-out duration-300"
                />
              </Link> */}
              <div className="w-full h-[280px] rounded-[16px] overflow-hidden">
                <Image
                  src={item.img}
                  alt="Excos Frame"
                  className="object-cover rounded-[16px] w-full h-full"
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
