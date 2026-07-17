"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { Executives } from "../../public/data";
import { InstagramIcon, Linkdln, Mail } from "../../public/images/images";

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

function TheExecutive() {
  return (
    <motion.div
      variants={containerVariants}
      className="bg-background-disabled w-full rounded-[24px] px-[8px] py-[24px] md:p-[24px] grid grid-cols-2 md:grid-cols-4 gap-[5px] justify-center items-center md:justify-between relative"
    >
      {Executives.map((executive) => (
        <motion.div
          key={executive.id}
          variants={itemVariants}
          className="relative flex flex-col items-start w-full"
        >
          <h4 className={`mobileH4`}>
            {executive.alias}
          </h4>

          <motion.div variants={cardHover} className="group/card relative w-full mt-[8px]">
            <div className="w-full h-[220px] md:h-[308px] rounded-[12px] md:rounded-[16px] overflow-hidden relative">
              <Image
                fill
                src={executive.image}
                alt={executive.name}
                className="object-cover transition-transform duration-500"
              />
            </div>

            <div className="absolute inset-x-0 bottom-0 p-4 text-white opacity-0 translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 ease-out pointer-events-none group-hover/card:pointer-events-auto bg-gradient-to-t from-black/80 to-transparent rounded-b-[12px] md:rounded-b-[16px]">
              <p className="text-[16px] md:text-[18px] font-medium shrink-0">
                {executive.name}
              </p>
              <p className="text-[14px] md:text-[16px] opacity-90">{executive.title}</p>

              <div className="flex gap-3 mt-3">
                {[
                  { href: executive.instagram, icon: InstagramIcon },
                  { href: executive.email, icon: Mail },
                  { href: executive.linkedin, icon: Linkdln },
                ].map((social, i) => (
                  <motion.div key={i} whileTap={{ scale: 0.9 }}>
                    <Link
                      href={social.href}
                      className="bg-white rounded-full p-[6px] flex items-center justify-center group/btn hover:bg-accent-green transition-colors"
                    >
                      <Image
                        src={social.icon}
                        alt="social"
                        className="w-[15px] md:w-[17px] group-hover/btn:brightness-0 group-hover/btn:invert"
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
  );
}

export default TheExecutive;
