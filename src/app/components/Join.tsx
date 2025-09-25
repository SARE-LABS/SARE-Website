"use client";
import { countdownDate } from "../UI/Time";
import Link from "next/link";
import { Apply } from "../../../public/images/images";
import HighlightHead from "../UI/props/HighlightHead";
import Image from "next/image";
import { motion, useInView, Variants, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ApplicationInfo from "./ApplicationInfo";
import useCountdown from "../utils/useCountdown";

function Join() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [showApplicationInfo, setShowApplicationInfo] = useState(false);
  const handleCardClick = () => setShowApplicationInfo(true);
  const handleClose = () => setShowApplicationInfo(false);

  const { days, hours, minutes, seconds, expired } =
    useCountdown(countdownDate);
  const zeroLeft = days === 0 && hours === 0 && minutes === 0 && seconds === 0;

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowApplicationInfo(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

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

  /** Button (i am avoiding re-mounting heres) */
  const ApplicationButton = (
    <motion.button
      disabled={zeroLeft}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
      onClick={handleCardClick}
      className={`w-[80%] md:w-[50%]  flex items-center justify-center gap-2 
          bg-primary-blue hover:bg-primary-blue-hover 
          transition-all ease-in-out duration-300 font-bold text-[16px] text-white cursor-pointer 
          px-[10px] py-[15px] rounded-[35px]
          ${
            zeroLeft
              ? "opacity-50 cursor-not-allowed hover:bg-primary-blue"
              : ""
          }`}
    >
      <Image src={Apply} width={15} height={15} alt="Logo" />
      <p>Start Application</p>
    </motion.button>
  );

  return (
    <div ref={ref} className="py-[24px] px-[2rem] md:py-[48px] md:px-[96px]">
      {/* this form stays at root, not tied to layout */}
      <AnimatePresence>
        {showApplicationInfo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className=" fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            onClick={handleClose}
          >
            <motion.div
              // initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-ft mx-4 flex justify-center"
            >
              <ApplicationInfo onClose={handleClose} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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

        <motion.div
          variants={itemVariants}
          className="w-full flex justify-center"
        >
          {/* <Link
            href={"/"}
            className="w-[80%] md:w-[50%] flex items-center justify-center gap-2 bg-primary-blue hover:bg-primary-blue-hover transition-all ease-in-out duration-300 font-bold text-[16px] text-white px-[10px] py-[14px] rounded-[35px]"
          >
            <Image src={Apply} width={15} height={15} alt="Logo" />
            <p>Start Application</p>
          </Link> */}
          {ApplicationButton}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Join;
