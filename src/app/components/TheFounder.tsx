"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import HighlightHead from "../UI/props/HighlightHead";
import { Founders } from "../../../public/data";
import { InstagramIcon, Linkdln, Mail } from "../../../public/images/images";
import { spaceGrotesk } from "../../../public/fonts/fonts";

const containerVariants = {
  hidden: { opacity: 1 },
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

function TheFounder() {
  return (
    <div>
      <motion.div
        variants={containerVariants}
        className="bg-background-disabled w-full rounded-[24px] md:p-[24px] flex flex-col md:flex-row justify-between gap-[24px] relative px-[17px] py-[7px]"
      >
        {Founders.map((founder) => (
          <motion.div
            key={founder.id}
            variants={itemVariants}
            whileHover="hover"
            className="relative flex flex-col items-start group"
          >
            <motion.div>
              <h3 className={`${spaceGrotesk.className} mobileH3`}>
                {founder.alias}
              </h3>

              <div className="md:w-[338px] md:h-[400px] md:rounded-[20px] overflow-hidden">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:"
                />
              </div>

              <div
                className=" #
                absolute bottom-1 left-0 px-5 pt-5 pb-2.5 text-white
                opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
                transition-all duration-300 ease-out pointer-events-none group-hover:pointer-events-auto"
              >
                <p className={`${spaceGrotesk.className} desktopBody`}>
                  {founder.name}
                </p>
                <p className={`${spaceGrotesk.className} desktopLabel`}>
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
                    <motion.div key={i}>
                      <Link
                        href={social.href}
                        className={`bg-white rounded-full p-[6px] flex items-center justify-center group hover:bg-accent-green transition-colors `}
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
    </div>
  );
}

export default TheFounder;
