"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { eventCategories, events, type EventKind } from "./data";
import { BiCalendar, BiEnvelope, BiUser } from "react-icons/bi";
import { FaClock } from "react-icons/fa6";
import { BsEye } from "react-icons/bs";

function Badge({ icon, text }: { icon?: React.ReactNode; text: string }) {
  return (
    <span className="h-6 rounded-full bg-[#D7EBF8] px-3 text-[11px] font-medium text-[#4E94BA] inline-flex items-center">
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </span>
  );
}

function EventCard({
  id,
  title,
  excerpt,
  date,
  time,
  format,
  price,
  track,
  categories,
  selectedCategories,
  image,
  imageRight,
}: {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  time: string;
  format: string;
  price: string;
  track: string;
  categories: string[];
  selectedCategories: string[];
  image: any;
  imageRight?: boolean;
}) {
  return (
    <article className="rounded-[18px] bg-[#EEF3F8] p-3 md:p-4">
      <div
        className={`grid grid-cols-1 gap-4 ${
          imageRight
            ? "md:grid-cols-[1fr_208px] md:[&>*:first-child]:order-2"
            : "md:grid-cols-[208px_1fr]"
        }`}
      >
        <div className="relative h-[180px] md:h-[250px] w-full rounded-[14px] overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge icon={<BiUser />} text={format} />
            <Badge icon={<BiEnvelope />} text={price} />
            <Badge icon={<BiCalendar />} text={track} />
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-2">
            {categories.map((category) => {
              const isActive = selectedCategories.includes(category);

              return (
                <span
                  key={`${title}-${category}`}
                  className={`h-6 rounded-full px-3 text-[11px] font-medium inline-flex items-center border transition-all ${
                    isActive
                      ? "bg-[#67B5DC] border-[#67B5DC] text-white"
                      : "bg-[#E8F1F8] border-[#D6E4F0] text-[#6486A2]"
                  }`}
                >
                  {category}
                </span>
              );
            })}
          </div>

          <div className="mt-2 inline-flex flex-wrap items-center gap-2 text-[11px]  border-4 border-[#D6E4F0] rounded-full text-[#6B7280]">
            <span className="h-6 rounded-full  px-3 inline-flex items-center gap-4 justify-between">
              <BiCalendar className="text-[#67b5dc]" /> {date}
            </span>{" "}
            |
            <span className="h-6 rounded-full  px-3 inline-flex gap-4 items-center">
              <FaClock className="text-[#67b5dc]" /> {time}
            </span>
          </div>

          <h3 className="mt-3 text-[34px] md:text-[44px] leading-[100%] tracking-[-0.02em] font-semibold text-[#1F2937]">
            {title}
          </h3>

          <p className="mt-2 text-[14px] md:text-[15px] text-[#4B5563] leading-[145%] max-w-[760px]">
            {excerpt}
          </p>

          <Link
            href={`/eventsandactivities/${id}`}
            className="mt-4 h-[36px] rounded-full bg-[#67B5DC] px-4 text-white text-[13px] font-medium hover:bg-[#5BA7CE] transition-colors inline-flex items-center gap-2"
          >
            <BsEye className="text-xl" /> View Details
          </Link>
        </div>
      </div>
    </article>
  );
}

function SeeMorePreviewCard({
  id,
  title,
  excerpt,
  date,
  time,
  format,
  price,
  track,
  categories,
  selectedCategories,
  image,
  imageRight,
  onSeeMore,
}: {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  time: string;
  format: string;
  price: string;
  track: string;
  categories: string[];
  selectedCategories: string[];
  image: any;
  imageRight?: boolean;
  onSeeMore: () => void;
}) {
  return (
    <div className="relative overflow-hidden rounded-[18px]">
      <div className="pointer-events-none opacity-45 blur-[1.5px]">
        <EventCard
          id={id}
          title={title}
          excerpt={excerpt}
          date={date}
          time={time}
          format={format}
          price={price}
          track={track}
          categories={categories}
          selectedCategories={selectedCategories}
          image={image}
          imageRight={imageRight}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#EEF3F8] via-[#EEF3F8]/75 to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={onSeeMore}
          className="h-[38px] rounded-full bg-white/95 px-5 text-[#475569] text-[13px] font-medium border border-[#D6DEE8] hover:bg-white transition-colors inline-flex items-center gap-2"
        >
          See more
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function EventsFeed() {
  const INITIAL_VISIBLE_COUNT = 3;
  const [activeKind, setActiveKind] = useState<EventKind>("upcoming");
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category],
    );
  };

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  }, [INITIAL_VISIBLE_COUNT, activeKind, search, selectedCategories]);

  const filteredEvents = useMemo(() => {
    return events.filter((item) => {
      const kindMatch = item.kind === activeKind;
      const categoryMatch =
        selectedCategories.length === 0 ||
        selectedCategories.some((category) =>
          item.categories.includes(category),
        );
      const searchMatch = item.title
        .toLowerCase()
        .includes(search.trim().toLowerCase());

      return kindMatch && categoryMatch && searchMatch;
    });
  }, [activeKind, search, selectedCategories]);

  const visibleEvents = filteredEvents.slice(0, visibleCount);
  const hasMoreEvents = filteredEvents.length > visibleCount;
  const previewEvent = hasMoreEvents ? filteredEvents[visibleCount] : null;

  return (
    <section className="px-4 md:px-[76px] mt-10">
      <div className="max-w-[1140px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="inline-flex rounded-full bg-[#E9EEF4] p-1">
            <button
              onClick={() => setActiveKind("upcoming")}
              className={`h-[34px] px-4 rounded-full text-[13px] transition-colors ${
                activeKind === "upcoming"
                  ? "bg-[#67B5DC] text-white"
                  : "text-[#64748B]"
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveKind("past")}
              className={`h-[34px] px-4 rounded-full text-[13px] transition-colors ${
                activeKind === "past"
                  ? "bg-[#67B5DC] text-white"
                  : "text-[#64748B]"
              }`}
            >
              Past Events
            </button>
          </div>

          <div className="flex gap-2 md:gap-3">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Events"
              className="w-full md:w-[260px] h-[38px] rounded-full border border-[#D8E2EC] bg-white px-4 text-[13px] text-[#475569] outline-none"
            />
            <button className="h-[38px] rounded-full border border-[#D8E2EC] bg-white px-4 text-[13px] text-[#64748B]">
              Newest to Oldest
            </button>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          <button
            onClick={() => setSelectedCategories([])}
            className="h-[30px] rounded-full px-3 text-[12px] border border-[#D6DEE8] bg-white text-[#64748B] hover:text-red-500 transition-colors"
          >
            Clear All
          </button>

          {eventCategories.map((category) => {
            const isActive = selectedCategories.includes(category);

            return (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className={`h-[30px] rounded-full px-3 text-[12px] border whitespace-nowrap transition-all inline-flex items-center gap-1 ${
                  isActive
                    ? "bg-[#67B5DC] border-[#67B5DC] text-white -ml-5"
                    : "bg-white border-[#D6DEE8] text-[#64748B]"
                }`}
              >
                {isActive && (
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10 3L4.5 8.5L2 6" />
                  </svg>
                )}
                {category}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col mt-4 space-y-4">
          {visibleEvents.map((item, index) => (
            <EventCard
              id={item.id}
              key={item.id}
              title={item.title}
              excerpt={item.excerpt}
              date={item.date}
              time={item.time}
              format={item.format}
              price={item.price}
              track={item.track}
              categories={item.categories}
              selectedCategories={selectedCategories}
              image={item.image}
              imageRight={index % 2 === 1}
            />
          ))}

          {previewEvent && (
            <SeeMorePreviewCard
              id={previewEvent.id}
              title={previewEvent.title}
              excerpt={previewEvent.excerpt}
              date={previewEvent.date}
              time={previewEvent.time}
              format={previewEvent.format}
              price={previewEvent.price}
              track={previewEvent.track}
              categories={previewEvent.categories}
              selectedCategories={selectedCategories}
              image={previewEvent.image}
              imageRight={visibleCount % 2 === 1}
              onSeeMore={() => setVisibleCount((prev) => prev + 3)}
            />
          )}

          {visibleEvents.length === 0 && (
            <div className="rounded-[18px] border border-[#D8E2EC] bg-white p-8 text-center text-[#64748B]">
              No events found for your current filter.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
