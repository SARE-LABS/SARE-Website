"use client";

import Image from "next/image";
import Time, { countdownDate } from "../UI/Time";
import {
  Apply,
  ArrowSlant,
  Excos,
  HomeBg,
  Kennedy,
} from "../../../public/images/images";
import Card from "../UI/Card";
import CardLarge from "../UI/CardLarge";
import { useState, useEffect } from "react";
import ApplicationInfo from "./ApplicationInfo";
import { motion, AnimatePresence } from "framer-motion";
import useCountdown from "../utils/useCountdown";
import { ApplicationKeyPoints, Imagess } from "../../../public/data";
import Link from "next/link";
import SmallApplicationCards from "../UI/SmallApplicationCards";

function ApplicationHeader() {
  const [showApplicationInfo, setShowApplicationInfo] = useState(false);
  const { days, hours, minutes, seconds, expired } =
    useCountdown(countdownDate);
  const zeroLeft = days === 0 && hours === 0 && minutes === 0 && seconds === 0;

  const handleCardClick = () => setShowApplicationInfo(true);
  const handleClose = () => setShowApplicationInfo(false);

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowApplicationInfo(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  /** Button (i am avoiding re-mounting heres) */
  const ApplicationButton = (
    <motion.button
      disabled={zeroLeft}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
      onClick={handleCardClick}
      className={`w-[80%] flex items-center justify-center gap-2 
        bg-primary-blue hover:bg-primary-blue-hover 
        transition-all ease-in-out duration-300 font-bold text-[16px] text-white cursor-pointer 
        px-[10px] py-[15px] rounded-[35px]
        ${
          zeroLeft ? "opacity-50 cursor-not-allowed hover:bg-primary-blue" : ""
        }`}
    >
      <Image src={Apply} width={15} height={15} alt="Logo" />
      <p>Start Application</p>
    </motion.button>
  );

  return (
    <>
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

      {/* Mobile layout */}
      <div id="apply-section" className="md:hidden relative p-[2rem] flex flex-col items-center justify-center text-center gap-4 overflow-hidden min-h-[100vh] mt-[100px]">
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
          <p
            className={`text-[16px] ${
              expired ? "text-status-error" : "text-text-primary"
            }  leading-[148%]`}
          >
            {`${
              expired
                ? "The membership application period has ended."
                : `Applications end in:`
            }`}
          </p>
          <Time />
        </motion.div>

        {ApplicationButton}

        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="w-full grid grid-cols-3 gap-3 overflow-hidden"
        >
          {ApplicationKeyPoints.map((point) => (
            <motion.div
              key={point.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative flex"
            >
              <div className="relative w-full h-[160px]">
                <div className="relative w-full h-[160px] rounded-md p-3   overflow-hidden  flex justify-items-end items-end ">
                  <Image
                    src={point.img}
                    alt={point.description}
                    fill
                    className="object-cover "
                  />

                  <div className="absolute inset-0 bg-black/40"></div>

                  <div className="relative inset-0 flex flex-col justify-between text-left ">
                    <div className="flex flex-col items-start justify-center">
                      <p className="text-white text-sm leading-3">
                        {point.description}
                      </p>
                      <h2 className="text-white text-3xl font-bold">
                        {point.figure}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {Imagess.map((i, index) => (
            <motion.div
              key={`large-${i}`}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex relative col-span-3"
            >
              <div
                className="relative w-full h-[160px] rounded-md"
                style={{
                  backgroundImage: `url(${i.img.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Desktop layout */}
      <div id="apply-section" className="scroll-smooth hidden md:flex p-[2rem] md:px-[96px] flex-col items-center justify-center text-center gap-4 overflow-hidden min-h-[100vh] mt-[100px]">
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
            className="flex relative rounded-md"
            style={{
              backgroundImage: `url(${HomeBg.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* <div className="absolute inset-0 bg-black/40"></div> */}
          </motion.div>

          {/* Center section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center justify-between w-full col-span-2 gap-2"
          >
            <div className="w-full flex flex-col items-center justify-center gap-4">
              <p
                className={`text-[18px]  ${
                  expired ? "text-status-error" : "text-text-primary"
                }  leading-[148%]`}
              >
                {`${
                  expired
                    ? "The membership application period has ended."
                    : `Applications end in:`
                }`}
              </p>

              <Time />
            </div>

            {ApplicationButton}

            <SmallApplicationCards styles="w-full grid grid-cols-3 gap-3 mt-6" />
          </motion.div>

          {/* Right big card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            className="flex relative rounded-md"
            style={{
              backgroundImage: `url(${Excos.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* <div className="absolute inset-0 bg-black/40"></div> */}
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default ApplicationHeader;
