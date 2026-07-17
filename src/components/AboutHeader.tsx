"use client";

import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";
import { HomeBg } from "../../public/images/images";
import { motion, MotionValue } from "framer-motion";

interface header {
  title: string;
  description: string;
  img: any;
}
function AboutHeader({ img, title, description }: header) {
  return (
    <div
      className=" w-full h-[80vh] md:h-[450px]  bg-white text-white py-[48px] px-[2rem] m md:py-[96px]"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0)), url(${img?.src || img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        className="flex flex-col items-start md:items-center justify-center mt-[15rem] md:mt-[100px]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-[48px] md:text-[64px] font-bold leading-[120%]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-[18px] md:text-[20px] leading-[120%] md:text-center text-left md:w-[700px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          {description}
        </motion.p>
      </motion.div>
    </div>
  );
}

export default AboutHeader;
