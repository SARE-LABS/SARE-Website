"use client";

import { useState } from "react";

const FAQ_DATA = {
  General: [
    {
      question: "How can I stay updated on SARE events?",
      answer:
        "SARE is a community-driven initiative focused on empowering individuals through sustainable projects, events, and collaborations. We work on community development, education, sustainability, and tech-driven projects.",
    },
    {
      question: "How can I stay updated on SARE events?",
      answer:
        "Follow our social media channels and join our community newsletter.",
    },
    {
      question: "How can I stay updated on SARE events?",
      answer:
        "You can find all event updates in our community Discord or on the website.",
    },
  ],
  About: [],
  Projects: [],
};

export const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState<
    "General" | "About" | "Projects"
  >("General");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = ["General", "About", "Projects"] as const;

  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-[48px] py-[96px]">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#E0F2FE] text-[#67B5DC] rounded-full text-sm font-medium mb-4">
          <span className="text-[12px]">→</span> FAQs
        </span>
        <h2 className="text-[48px] md:text-[64px] font-bold text-[#1E293B] mb-4">
          Your Questions, Answered
        </h2>
        <p className="text-black text-lg max-w-[600px]">
          Get quick answers to what you need to know about SARE.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sidebar: Categories */}
        <div className="lg:col-span-2 flex md:flex-col gap-2  w-full min-w-0 max-w-xs sm:max-w-sm md:max-w-full overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-[18px] font-medium transition-all text-left ${
                activeCategory === cat
                  ? "bg-[#E0F2FE]/30 text-[#67B5DC]"
                  : "text-[#1E293B] hover:bg-gray-50"
              }`}
            >
              {activeCategory === cat && <span>→</span>}
              {cat}
            </button>
          ))}
        </div>

        {/* Middle: Accordion List */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {FAQ_DATA[activeCategory].map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="relative transition-all duration-300">
                {isOpen ? (
                  // Expanded Item with the provided SVG background
                  <div className="relative min-h-[160px] flex flex-col justify-center p-8 z-10">
                    <div className="absolute inset-0 -z-10 pointer-events-none">
                      <div className="hidden md:block h-full">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 680 159"
                          preserveAspectRatio="none"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M616 0C624.837 0 632 7.16344 632 16V32C632 40.8366 639.163 48 648 48H664C672.837 48 680 55.1634 680 64V143C680 151.837 672.837 159 664 159H16C7.16344 159 0 151.837 0 143V16C0 7.16344 7.16344 0 16 0H616Z"
                            fill="#E0F2FE"
                          />
                        </svg>
                      </div>
                      <div className="md:hidden h-full">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 382 232"
                          preserveAspectRatio="none"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M318 0C326.837 0 334 7.16344 334 16V32C334 40.8366 341.163 48 350 48H366C374.837 48 382 55.1634 382 64V257C382 265.837 374.837 273 366 273H16C7.16345 273 0 265.837 0 257V16C0 7.16344 7.16344 0 16 0H318Z"
                            fill="#E0F2FE"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="flex justify-between items-start  mb-4">
                      <h3 className="text-[24px] font-bold text-[#1E293B] max-w-[90%]">
                        {faq.question}
                      </h3>
                      <button
                        onClick={() => setOpenIndex(null)}
                        className="w-10 h-10 relative left-8 bottom-8  bg-[#CBD5E1] rounded-full flex items-center justify-center text-[#1E293B] transition-transform"
                      >
                        <span className="text-2xl font-bold leading-none mb-1">
                          −
                        </span>
                      </button>
                    </div>
                    <p className="text-[#475569] text-[16px] leading-relaxed max-w-[90%]">
                      {faq.answer}
                    </p>
                  </div>
                ) : (
                  // Closed Item
                  <button
                    onClick={() => setOpenIndex(index)}
                    className="w-full flex justify-between items-center p-8 bg-[#F1F5F9] rounded-[24px] hover:bg-[#E2E8F0] transition-all"
                  >
                    <h3 className="text-[24px] font-bold text-[#1E293B] text-left">
                      {faq.question}
                    </h3>
                    <div className="w-15 h-10 bg-[#67B5DC] rounded-full flex items-center justify-center text-white">
                      <span className="text-2xl font-medium">+</span>
                    </div>
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Right: CTA Card */}
        <div className="lg:col-span-3 bg-[#F1F5F9] rounded-[32px] p-8 flex flex-col h-full md:min-h-[400px]">
          <h3 className="text-[28px] font-bold text-[#1E293B] mb-4">
            Have a Question for SARE?
          </h3>
          <p className="text-black text-[16px] leading-relaxed mb-12">
            We'd love to hear from you! Ask us anything and we'll get back to
            you ASAP.
          </p>

          <div className="mt-auto">
            <div className="bg-white rounded-full p-2 pl-6 flex items-center shadow-sm border border-gray-100">
              <input
                type="text"
                placeholder="Ask us anything..."
                className="flex-1 bg-transparent outline-none text-[16px] text-[#1E293B]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};