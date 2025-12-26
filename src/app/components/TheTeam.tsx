"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

import HighlightHead from "../UI/props/HighlightHead";
import { Executives, Founders, WebExperienceTeam } from "../../../public/data";
import { InstagramIcon, Linkdln, Mail } from "../../../public/images/images";

/* -----------------------------
   Animation Variants
------------------------------ */

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

/* -----------------------------
   Component
------------------------------ */

function TheTeam() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          <div className="flex items-start md:gap-6 mb-5 justify-between">
            <div className="shrink-0">
              <HighlightHead title="The Founders" />
            </div>
            <p className="md:text-[16px] text-[14px] text-text-primary leading-[148%] font-medium">
              “SARE started not as a at SARE, we&apos;ve built a proven process
              that transforms agricultural challenges into cutting-edge robotic
              solutions, ensuring innovation is not just an idea but a reality
              in the field. Through this framework, we tackle inefficiencies,
              reduce labor intensity, and pave the way for a smarter, more
              sustainable farming future.”{" "}
              <span className="text-accent-green">- JXM</span>
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            className="bg-background-disabled w-full md:rounded-[24px] md:p-[24px] flex md:flex-row justify-between gap-[24px] relative"
          >
            {Founders.map((founder) => (
              <motion.div
                key={founder.id}
                variants={itemVariants}
                whileHover="hover"
                className="relative flex flex-col items-start"
              >
                <motion.div variants={cardHover}>
                  <h3 className="md:text-[36px] mb-3">{founder.alias}</h3>

                  <div className="md:w-[338px] md:h-[400px] md:rounded-[16px] overflow-hidden">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  <div className="absolute bottom-4 left-0 p-5 text-white">
                    <p className="md:text-[18px]">{founder.name}</p>
                    <p className="md:text-[14px] text-accent-green">
                      {founder.role}
                    </p>
                    <p className="md:text-[16px]">{founder.title}</p>

                    <div className="flex gap-4 mt-3">
                      {[
                        {
                          href: founder.instagram,
                          icon: InstagramIcon,
                          alt: "Instagram",
                        },
                        { href: founder.email, icon: Mail, alt: "Email" },
                        {
                          href: founder.linkedin,
                          icon: Linkdln,
                          alt: "LinkedIn",
                        },
                      ].map((social, i) => (
                        <motion.div key={i} whileTap={{ scale: 0.9 }}>
                          <Link
                            href={social.href}
                            className="bg-white rounded-full p-[6px] flex items-center justify-center group hover:bg-accent-green transition-colors"
                          >
                            <Image
                              src={social.icon}
                              alt={social.alt}
                              className="w-[17px] group-hover:brightness-0 group-hover:invert"
                            />
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ---------------- Executives ---------------- */}
        <motion.div variants={itemVariants} className="w-full">
          <div className="flex items-start md:gap-6 mb-5 justify-between">
            <div className="shrink-0">
              <HighlightHead title="The Executives" />
            </div>
            <p className="md:text-[16px] text-[14px] text-text-primary leading-[148%] font-medium">
              “SARE started not as a at SARE, we&apos;ve built a proven process
              that transforms agricultural challenges into cutting-edge robotic
              solutions, ensuring innovation is not just an idea but a reality
              in the field. Through this framework, we tackle inefficiencies,
              reduce labor intensity, and pave the way for a smarter, more
              sustainable farming future.”{" "}
              <span className="text-accent-green">- JXM</span>
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            className="bg-background-disabled w-full md:rounded-[24px] md:p-[24px] flex md:flex-row gap-[24px]  justify-between relative"
          >
            {Executives.map((executive) => (
              <motion.div
                key={executive.id}
                variants={itemVariants}
                whileHover="hover"
                className="relative flex flex-col items-start"
              >
                <motion.div variants={cardHover}>
                  <h3 className="md:text-[36px] mb-3">{executive.alias}</h3>

                  <div className="md:w-[250px] md:h-[308px] md:rounded-[16px] overflow-hidden">
                    <Image
                      src={executive.image}
                      alt={executive.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  <div className="absolute bottom-4 left-0 p-5 text-white">
                    <p className="md:text-[18px]">{executive.name}</p>
                    <p className="md:text-[16px]">{executive.title}</p>

                    <div className="flex gap-4 mt-3">
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
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ---------------- Executives ---------------- */}
        <motion.div variants={itemVariants} className="w-full">
          <div className="flex items-start md:gap-6 mb-5 justify-between">
            <div className="shrink-0">
              <HighlightHead title="The Teams" />
            </div>
            <p className="md:text-[16px] text-[14px] text-text-primary leading-[148%] font-medium">
              “SARE started not as a at SARE, we&apos;ve built a proven process
              that transforms agricultural challenges into cutting-edge robotic
              solutions, ensuring innovation is not just an idea but a reality
              in the field. Through this framework, we tackle inefficiencies,
              reduce labor intensity, and pave the way for a smarter, more
              sustainable farming future.”{" "}
              <span className="text-accent-green">- JXM</span>
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            className=" w-full md:rounded-[24px]  flex md:flex-row gap-[24px]  justify-between md:grid grid-cols-2 relative"
          >
            <div className="bg-background-disabled md:gap-[24px] md:rounded-[24px] md:p-[24px]">
              <h4 className="text-text-primary md:text-[24px] font-medium">
                SARE Web Experience Team
              </h4>

              <div className="md:grid grid-cols-2 mt-5 gap-10">
                {
                  WebExperienceTeam.map((member) => (
                    <Link key={member.id} href={member.link}>
                      <Image src={member.image} alt={member.name} className="w-[264px] h-[232px] rounded-[16px]" />
                      <div className="mt-3">
                        <p className="md:text-[16px]">{member.name}</p>
                        <p className="md:text-[14px] font-medium">{member.title}</p>
                      </div>
                    </Link>
                  )
                  )
                }
              </div>
            </div>
            <div className="bg-background-disabled md:gap-[24px] md:rounded-[24px] md:p-[24px]">
              <h4 className="text-text-primary md:text-[24px] font-medium">
                Content Creation Team
              </h4>

              <div className="md:grid grid-cols-2 mt-5 gap-10">
                {
                  WebExperienceTeam.map((member) => (
                    <Link key={member.id} href={member.link}>
                      <Image src={member.image} alt={member.name} className="w-[264px] h-[232px] rounded-[16px]" />
                      <div className="mt-3">
                        <p className="md:text-[16px]">{member.name}</p>
                        <p className="md:text-[14px] font-medium">{member.title}</p>
                      </div>
                    </Link>
                  )
                  )
                }
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default TheTeam;
