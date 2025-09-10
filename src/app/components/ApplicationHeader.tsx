"use client";

import Image from "next/image";
import Time from "../UI/Time";
import { Apply } from "../../../public/images/images";
import Card from "../UI/Card";
import CardLarge from "../UI/CardLarge";
import { useState, useEffect } from "react";
import ApplicationInfo from "./ApplicationInfo";
import { motion, AnimatePresence } from "framer-motion";

function ApplicationHeader() {
  const [showApplicationInfo, setShowApplicationInfo] = useState(false);

  const handleCardClick = () => {
    setShowApplicationInfo(true);
  };

  const handleClose = () => {
    setShowApplicationInfo(false);
  };

  // ✅ Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowApplicationInfo(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {/* Mobile layout */}
      <div className="md:hidden relative p-[2rem] flex flex-col items-center justify-center text-center gap-4 overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-text-primary font-bold text-[48px] leading-[120%]"
        >
          Ready to Make an Impact?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="text-text-primary text-[18px] leading-[120%]"
        >
          Join a network of innovators, collaborators, and changemakers driving
          real-world solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          className="w-full flex flex-col items-center justify-center gap-4 mt-8"
        >
          <p className="text-[16px] text-text-primary leading-[148%]">
            Applications end in:
          </p>
          <Time />
        </motion.div>

        {/* Application Info with backdrop */}
        <AnimatePresence>
          {showApplicationInfo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
              onClick={handleClose}
            >
              <motion.div
                initial={{ y: 100, opacity: 0 }} // Start below
                animate={{ y: 0, opacity: 1 }} // Slide up
                exit={{ y: 100, opacity: 0 }} // Slide down on close
                transition={{ duration: 0.5, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()} // Prevent backdrop click
                className="w-full max-w-[700px] mx-4"
              >
                <ApplicationInfo onClose={handleClose} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          onClick={handleCardClick}
          className="w-[80%] outline-none cursor-pointer flex items-center justify-center gap-2 bg-primary-blue hover:bg-primary-blue-hover transition-all ease-in-out duration-300 font-bold text-[16px] text-white px-[10px] py-[15px] rounded-[35px]"
        >
          <Image src={Apply} width={15} height={15} alt="Logo" />
          <p>Start Application</p>
        </motion.button>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="w-full grid grid-cols-3 gap-5 overflow-hidden"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative flex"
            >
              <Card />
            </motion.div>
          ))}

          {[...Array(2)].map((_, i) => (
            <motion.div
              key={`large-${i}`}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex relative col-span-3"
            >
              <CardLarge />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex p-[2rem] md:px-[96px] flex-col items-center justify-center text-center gap-4 overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-text-primary font-bold text-[48px] leading-[120%]"
        >
          Ready to Make an Impact?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="text-text-primary text-[18px] leading-[120%]"
        >
          Join a network of innovators, collaborators, and changemakers driving
          real-world solutions.
        </motion.p>

        <div className="grid grid-cols-4 gap-5 w-full overflow-hidden mt-[24px]">
          {/* Left big card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            className="flex relative w-[280px] h-[405px] rounded-[16px]"
          >
            <CardLarge />
          </motion.div>

          {/* Center section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center justify-between w-full col-span-2"
          >
            <div className="w-full flex flex-col items-center justify-center gap-4">
              <p className="text-[16px] text-text-primary leading-[148%]">
                Applications end in:
              </p>
              <Time />
            </div>

            {/* Application Info with backdrop */}
            <AnimatePresence>
              {showApplicationInfo && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
                  onClick={handleClose}
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={(e) => e.stopPropagation()}
                    className="w-full flex justify-center"
                  >
                    <ApplicationInfo onClose={handleClose} />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
              onClick={handleCardClick}
              className="w-[80%] flex items-center justify-center gap-2 bg-primary-blue hover:bg-primary-blue-hover transition-all ease-in-out duration-300 font-bold text-[16px] text-white px-[10px] py-[15px] rounded-[35px]"
            >
              <Image src={Apply} width={15} height={15} alt="Logo" />
              <p>Start Application</p>
            </motion.button>

            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.15 } },
              }}
              className="w-full grid grid-cols-3 gap-5 mt-6"
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative flex"
                >
                  <Card />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right big card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            className="flex relative w-[280px] h-[405px] rounded-[16px]"
          >
            <CardLarge />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default ApplicationHeader;
