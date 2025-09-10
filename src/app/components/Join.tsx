"use client";

import Link from "next/link";
import { Apply } from "../../../public/images/images";
import HighlightHead from "../UI/props/HighlightHead";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

function Join() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
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
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div
      ref={ref}
      className="py-[24px] px-[2rem] md:py-[48px] md:px-[96px]"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="flex flex-col gap-[16px] md:gap-[24px] items-center justify-center text-center"
      >
        <motion.div variants={itemVariants}>
          <HighlightHead title="Join SARE" />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-[48px] font-medium text-text-primary md:w-[90%] leading-[120%]"
        >
          Join the innovators who are creating real change.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-[16px] text-text-primary leading-[120%]"
        >
          SARE members are building skills, creating opportunities, and driving
          impact—join SARE today to shape the future you envision.
        </motion.p>

        <motion.div variants={itemVariants} className="w-full flex justify-center">
          <Link
            href={"/"}
            className="w-[80%] md:w-[50%] flex items-center justify-center gap-2 bg-primary-blue hover:bg-primary-blue-hover transition-all ease-in-out duration-300 font-bold text-[16px] text-white px-[10px] py-[14px] rounded-[35px]"
          >
            <Image src={Apply} width={15} height={15} alt="Logo" />
            <p>Start Application</p>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Join;
