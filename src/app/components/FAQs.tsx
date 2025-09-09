"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FAQDataCTRL,
  FAQDataGeneral,
  FAQDataProjects,
} from "../../../public/data";
import HighlightHead from "../UI/props/HighlightHead";
import { Plus } from "../../../public/images/images";

const categories = [
  { key: "general", label: "General", data: FAQDataGeneral },
  { key: "projects", label: "Projects", data: FAQDataProjects },
  { key: "ctrl", label: "CTRL LAB", data: FAQDataCTRL },
];

function FAQs() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const activeData =
    categories.find((cat) => cat.key === activeCategory)?.data || [];

  // Always open the first FAQ by default when switching category
  useEffect(() => {
    if (activeData.length > 0) {
      setOpenFAQ(activeData[0].id);
    }
  }, [activeCategory]);

  const toggleFAQ = (id: number) => {
    setOpenFAQ((prev) => (prev === id ? null : id));
  };

  return (
    <div className="py-[24px] px-[2rem]">
      <div className="flex flex-col gap-[48px] items-center justify-center">
        <div className="w-[382px] flex flex-col gap-[16px] items-center text-center">
          <HighlightHead title="FAQs" />
          <div>
            <h1 className="text-[32px] font-medium text-text-primary leading-[120%]">
              Your Questions, Answered
            </h1>
            <p className="text-text-primary text-[16px] leading-[148%]">
              Get quick answers to what you need to know about SARE.
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex w-full items-start justify-ceter gap-[8px] -mb-10">
          {categories.map((cat) => (
            <span
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`cursor-pointer border border-border py-[8px] px-[16px] text-[16px] rounded-full font-medium transition ${
                activeCategory === cat.key
                  ? "bg-primary-blue text-white"
                  : "bg-highlight text-primary-blue"
              }`}
            >
              {cat.label}
            </span>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-[16px] w-full ">
          <AnimatePresence mode="wait">
            {activeData.map((faq) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={`${
                  openFAQ === faq.id
                    ? "bg-highlight "
                    : "bg-background-disabled"
                }  text-text-primary w-full rounded-[16px] gap-[8px] p-[16px] flex items-start flex-col justify-between`}
              >
                <div
                  className="w-full flex items-center justify-between cursor-pointer "
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <h3 className="font-medium text-[18px] leading-[120%]">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFAQ === faq.id ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-[40px] h-[40px] rounded-full bg-primary-blue flex items-center justify-center"
                  >
                    <Image src={Plus} alt="plus" width={13} height={13} />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openFAQ === faq.id && (
                    <motion.p
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[16px] leading-[148%] font-normal overflow-hidden"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="text-black text-left p-[24px] rounded-[24px] bg-background-disabled flex flex-col items-start justify-center gap-[16px]">
          <h1 className="text-[24px] font-medium  leading-[120%]">
            Have a Question for SARE?
          </h1>
          <p className="text-[16px] leading-[148%] font-normal">
            We’d love to hear from you! Ask us anything and we’ll get back to
            you ASAP.
          </p>

          <form
            action=""
            className="w-full flex  gap-[16px] rounded-full border border-border ring-0 bg-white justify-between"
          >
            <input
              type="text"
              placeholder="Ask us anything…"
              className="p-[12px] outline-none rounded-full flex-1"
            />
            <button className="self-end bg-primary-blue text-white py-[12px] px-[16px] rounded-full">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
