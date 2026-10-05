"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { RegisterButton } from "../button/Register";
import { ShareButton } from "../button/Share";
import { Timer } from "../timer/Index";
import { Details } from "./Details";
import { Robot } from "../../../../../public/images/images";

export const Landing: React.FC = () => {
  return (
    <section
      aria-labelledby="hero-title"
      className="w-full relative flex flex-col pt-20 sm:pt-4 md:pt-6 pb-6 md:pb-12"
    >
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-gradient-to-b from-[#67B5DC]/15 via-[#67B5DC]/5 to-transparent blur-3xl -z-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full flex flex-col gap"
      >
        <div className="inline-flex items-center justify-center  px-3 py-1 rounded- bg-white/80  text-xs md:text-sm font-semibold text-[#1F2937] w-fit">
          <span className="tracking-wide">SARE Flagship Showcase • 2026</span>
        </div>

        <h1
          id="hero-title"
          className="text-[#1F2937] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]"
        >
          The Grand Finale
        </h1>

        <p className=" text-[#4B5563] text-sm sm:text-base md:text-[30px] font-normal">
          Bringing Everything Together
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="w-full mt-4 sm:mt-6 p-3 sm:p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-white/90 shadow-sm flex flex-col lg:flex-row justify-between items-center gap-4"
      >
        <div className="w-full lg:w-auto flex justify-center lg:justify-start">
          <Timer />
        </div>

        <div className="w-full lg:w-auto flex items-center justify-center lg:justify-end gap-3 sm:gap-4 flex-wrap">
          <RegisterButton />
          <ShareButton />
        </div>
      </motion.div>

      <div className="w-full flex flex-col items-center relative mt-12 sm:mt-16 md:mt-24">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[420px] md:w-[560px] h-[280px] sm:h-[380px] bg-gradient-to-t from-[#67B5DC]/25 via-[#67B5DC]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="hidden md:inline-flex items-center gap-2 mb-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#67B5DC]/40 shadow-sm text-xs font-semibold text-[#1F2937]"
        >
          <span>
            Live Build Showcase: Remote-Controlled Bomb Disposal Robot
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative z-10 w-[260px] sm:w-[360px] md:w-[480px] lg:w-[560px] -mb-14 sm:-mb-20 md:-mb-28 lg:-mb-32 pointer-events-none select-none"
        >
          <motion.div
            animate={{ y: [-4, 6, -4] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full h-auto flex flex-col items-center"
          >
            <Image
              src={Robot}
              alt="Remote Controlled Bomb-Disposal Robot Prototype - SARE Grand Finale"
              className="w-full h-auto object-contain drop-shadow-[0_22px_32px_rgba(31,41,55,0.22)]"
              priority
              sizes="(max-width: 640px) 260px, (max-width: 768px) 360px, (max-width: 1024px) 480px, 560px"
            />
            <div className="w-[78%] h-4 -mt-2 bg-[#1F2937]/15 rounded-full blur-md" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="w-full relative z-20"
        >
          <Details />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
