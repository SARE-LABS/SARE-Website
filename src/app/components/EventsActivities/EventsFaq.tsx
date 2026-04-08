"use client";

import { useState } from "react";
import { faqCategories, faqData } from "./data";

export default function EventsFaq() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof faqCategories)[number]>("General");
  const [openIndex, setOpenIndex] = useState(0);

  const activeFaqs = faqData[activeCategory];

  return (
    <section className="px-4 md:px-[76px] mt-14 md:mt-16">
      <div className="max-w-[1140px] mx-auto">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full px-3 py-1 bg-[#E0F2FE] text-[#67B5DC] text-[12px] font-medium">
            FAQs
          </span>
          <h2 className="mt-3 text-[38px] md:text-[56px] leading-[100%] tracking-[-0.02em] text-[#1F2937] font-semibold">
            Your Questions, Answered
          </h2>
          <p className="mt-2 text-[#64748B] text-[14px] md:text-[18px]">
            Get quick answers to what you need to know about SARE.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[160px_1fr_290px] gap-4 md:gap-5 items-start">
          <div className="rounded-[16px] bg-white/60 p-2 flex lg:flex-col gap-2 overflow-x-auto no-scrollbar">
            {faqCategories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setOpenIndex(0);
                }}
                className={`h-[36px] px-3 rounded-full whitespace-nowrap text-[13px] text-left transition-colors ${
                  activeCategory === category
                    ? "bg-[#E0F2FE] text-[#4E94BA]"
                    : "text-[#64748B] hover:bg-[#F1F5F9]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {activeFaqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={`${faq.question}-${index}`}
                  className={`rounded-[20px] transition-colors ${
                    isOpen ? "bg-[#E0F2FE]" : "bg-[#EEF3F8]"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left"
                  >
                    <p className="text-[18px] md:text-[24px] leading-[115%] tracking-[-0.01em] font-semibold text-[#1F2937]">
                      {faq.question}
                    </p>
                    <span
                      className={`h-8 w-8 rounded-full flex items-center justify-center text-white text-[20px] ${
                        isOpen ? "bg-[#9CA3AF]" : "bg-[#67B5DC]"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <p className="px-5 pb-5 text-[14px] md:text-[15px] leading-[145%] text-[#475569]">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <aside className="rounded-[22px] bg-[#EEF3F8] p-5 min-h-[240px] flex flex-col">
            <h3 className="text-[28px] leading-[100%] tracking-[-0.02em] text-[#1F2937] font-semibold">
              Have a Question for SARE?
            </h3>
            <p className="mt-3 text-[14px] text-[#4B5563] leading-[145%]">
              We&apos;d love to hear from you! Ask us anything and we&apos;ll
              get back to you ASAP.
            </p>

            <div className="mt-auto pt-4">
              <input
                type="text"
                placeholder="Ask us anything..."
                className="w-full h-[40px] rounded-full border border-[#D6DEE8] bg-white px-4 text-[13px] text-[#475569] outline-none"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
