"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";

import HighlightHead from "../UI/props/HighlightHead";
import { Executives, Founders, WebExperienceTeam } from "../../../public/data";
import { InstagramIcon, Linkdln, Mail } from "../../../public/images/images";
import TheFounder from "./TheFounder";
import { spaceGrotesk } from "../../../public/fonts/fonts";
import { ChevronDown } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const cardHover = {
  hover: {
    y: -5,
    scale: 1.0,
    transition: { duration: 0.3 },
  },
};

function TheTeam() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [teamsExpanded, setTeamsExpanded] = useState(false);

  return (
    <section
      ref={ref}
      className="py-[24px] md:py-[48px] px-[2rem] md:px-[96px] w-full overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col gap-[48px] items-center"
      >
        {/* ---------------- Header ---------------- */}
        <motion.div
          variants={itemVariants}
          className="w-[382px] md:w-full flex flex-col gap-[16px] items-center text-center"
        >
          <HighlightHead title="The Team" />
          <h1 className="text-[32px] font-medium text-text-primary leading-[120%]">
            Meet the SARE Team
          </h1>
          <p className="text-text-primary text-[16px] leading-[148%]">
            Meet the individuals making the SARE dream possible
          </p>
        </motion.div>

        {/* ---------------- Founders ---------------- */}
        <motion.div variants={itemVariants} className="w-full">
          <div className="flex md:items-start flex-col md:flex-row  gap-3 md:gap-6 mb-5 justify-between">
            <div className="shrink-0">
              <HighlightHead title="The Founders" />
            </div>
            <p className="md:text-[16px] text-[14px] text-text-primary leading-[148%] md:text-left font-medium">
              "SARE started not as a at SARE, we&apos;ve built a proven process
              that transforms agricultural challenges into cutting-edge robotic
              solutions... <span className="text-accent-green">- JXM</span>
            </p>
          </div>

          <TheFounder />
        </motion.div>

        <div className="my-[px] w-full h-[1px]  bg-text-disabled rounded-full"></div>

        {/* ---------------- Executives ---------------- */}
        <motion.div variants={itemVariants} className="w-full">
          <div className="flex items-start flex-col md:flex-row gap-3 md:gap-6 mb-5 justify-between">
            <div className="shrink-0">
              <HighlightHead title="The Executives" />
            </div>
            <p className="md:text-[16px] text-[14px] text-text-primary leading-[148%] font-medium">
              "SARE started not as a at SARE, we&apos;ve built a proven process
              that transforms agricultural challenges into cutting-edge robotic
              solutions... <span className="text-accent-green">- JXM</span>
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            className="bg-background-disabled w-full rounded-[24px] px-[8px] py-[24px] md:p-[24px] grid grid-cols-2 md:grid-cols-4 gap-[5px] justify-center items-center md:justify-between relative"
          >
            {Executives.map((executive) => (
              <motion.div
                key={executive.id}
                variants={itemVariants}
                whileHover="hover"
                className="relative flex flex-col items-start"
              >
                <motion.div variants={cardHover}>
                  <h4 className={`${spaceGrotesk.className} mobileH4`}>
                    {executive.alias}
                  </h4>

                  <div className="w-ful md:w-[250px] md:h-[308px] rounded-[12px] md:rounded-[16px] overflow-hidden mt-[8px]">
                    <Image
                      src={executive.image}
                      alt={executive.name}
                      className="w-full h-full object-cover "
                    />
                  </div>

                  <div className="absolute bottom-1 left-0 md:p-3 text-white">
                    <p className="md:text-[18px] desktopBody shrink-0">
                      {executive.name}
                    </p>
                    <p className="md:text-[16px]">{executive.title}</p>

                    {/* <div className="flex gap-4 mt-3">
                      {[
                        { href: executive.instagram, icon: InstagramIcon },
                        { href: executive.email, icon: Mail },
                        { href: executive.linkedin, icon: Linkdln },
                      ].map((social, i) => (
                        <motion.div key={i} whileTap={{ scale: 0.9 }}>
                          <Link
                            href={social.href}
                            className="bg-white rounded-full p-[6px] flex items-center justify-center group hover:bg-accent-green transition-colors"
                          >
                            <Image
                              src={social.icon}
                              alt="social"
                              className="w-[17px] group-hover:brightness-0 group-hover:invert"
                            />
                          </Link>
                        </motion.div>
                      ))}
                    </div> */}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ---------------- Teams ---------------- */}
        <motion.div variants={itemVariants} className="w-full">
          {/* Header — always visible */}
          <div className="flex items-start md:gap-6 mb-5 justify-between">
            <div className="shrink-0">
              <HighlightHead title="The Teams" />
            </div>
            <p className="md:text-[16px] text-[14px] text-text-primary leading-[148%] font-medium">
              "SARE started not as a at SARE, we&apos;ve built a proven process
              that transforms agricultural challenges into cutting-edge robotic
              solutions... <span className="text-accent-green">- JXM</span>
            </p>
          </div>

          {/* Collapsible teams grid with blur overlay */}
          <div className="relative">
            <motion.div
              animate={{
                height: teamsExpanded ? "auto" : "50px",
              }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <motion.div
                variants={containerVariants}
                className="w-full md:rounded-[24px] flex md:flex-row gap-[24px] justify-between md:grid grid-cols-2 relative"
              >
                <div className="bg-background-disabled md:gap-[24px] md:rounded-[24px] md:p-[24px]">
                  <h4 className="text-text-primary md:text-[24px] font-medium">
                    SARE Web Experience Team
                  </h4>

                  <div className="md:grid grid-cols-2 mt-5 gap-10">
                    {WebExperienceTeam.map((member) => (
                      <Link key={member.id} href={member.link}>
                        <Image
                          src={member.image}
                          alt={member.name}
                          className="w-[264px] h-[232px] rounded-[16px]"
                        />
                        <div className="mt-3">
                          <p className="md:text-[16px]">{member.name}</p>
                          <p className="md:text-[14px] font-medium">
                            {member.title}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="bg-background-disabled md:gap-[24px] md:rounded-[24px] md:p-[24px]">
                  <h4 className="text-text-primary md:text-[24px] font-medium">
                    Content Creation Team
                  </h4>

                  <div className="md:grid grid-cols-2 mt-5 gap-10">
                    {WebExperienceTeam.map((member) => (
                      <Link key={member.id} href={member.link}>
                        <Image
                          src={member.image}
                          alt={member.name}
                          className="w-[264px] h-[232px] rounded-[16px]"
                        />
                        <div className="mt-3">
                          <p className="md:text-[16px]">{member.name}</p>
                          <p className="md:text-[14px] font-medium">
                            {member.title}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Blur fade overlay — only shown when collapsed */}
            <AnimatePresence>
              {!teamsExpanded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-[80px] pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent, var(--background, white))",
                    backdropFilter: "blur(0px)",
                  }}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Show More / Show Less button */}
          <div className="flex justify-center mt-4">
            <motion.button
              onClick={() => setTeamsExpanded((prev) => !prev)}
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-2 px-6 py-2 rounded-full cursor-pointer  text-text-secondary text-[14px] font-medium transition-colors bg-background-disabled "
            >
              {teamsExpanded ? "Show Less" : "Show More"}
              <motion.span
                animate={{ rotate: teamsExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="inline-block"
              >
                <ChevronDown />
              </motion.span>
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default TheTeam;
