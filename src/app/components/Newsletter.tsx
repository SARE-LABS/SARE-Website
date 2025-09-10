"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import HighlightHead from "../UI/props/HighlightHead";

function Newsletter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" }); // triggers once when ~50px visible

  return (
    <div className="py-[24px] md:py-[48px] md:px-[96px] px-[2rem] w-full overflow-hidden">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1], // smooth easing
        }}
        className="w-full bg-sare-gradient rounded-[24px] p-[24px] md:py-[48px] md:px-[96px] flex flex-col gap-[24px] md:gap-[48px] items-center text-center"
      >
        <HighlightHead title="SARE Newsletter" />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-[36px] text-white leading-[120%] font-medium w-[334px] md:w-[80%]"
        >
          Be the First to know about updates from SARE
        </motion.h1>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="w-full md:w-[508px] flex flex-col md:flex-row items-center gap-[6px] justify-between"
        >
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            className="p-[12px] w-full outline-none rounded-full border border-border ring-0 bg-white"
          />
          <button className="md:w-[60%] w-full cursor-pointer border border-border text-[14px] bg-primary-blue hover:bg-primary-blue-hover transition-all ease-in-out duration-300 text-white py-[12px] px-[16px] rounded-full mr-[1px]">
            Get Involved
          </button>
        </motion.form>
      </motion.div>
    </div>
  );
}

export default Newsletter;
