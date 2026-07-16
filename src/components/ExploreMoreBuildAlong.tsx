"use client";

import { useRef } from "react";
import HighlightHead from "../app/UI/props/HighlightHead";
import { motion, useInView } from "framer-motion";

function ExploreMoreBuildAlong() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div className="md:my-[48px]">
      <div className="w-[382px] md:w-full flex flex-col gap-[16px] items-center text-center">
        <HighlightHead title="Explore more" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="text-[32px] font-medium text-text-primary leading-[120%]">
            Related Buildssssssssssssssss
          </h1>
          <p className="text-text-primary text-[16px] leading-[148%]">
            Get quick answers to what you need to know about SARE.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default ExploreMoreBuildAlong;
