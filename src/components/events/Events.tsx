"use client";

import { useState, useMemo, useEffect } from "react";
import { FilterSection } from "./FilterSection";
import { EventCard } from "./EventCard";
import { EVENTS } from "../../../constants/events";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

function Events() {
  const [statusFilter, setStatusFilter] = useState("Upcoming Events");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "Webinars",
    "CTRL LABS",
    "Conferences",
    "Outreaches",
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Newest to Oldest");
  const [eventsExpanded, setEventsExpanded] = useState(false);

  // Collapse list back to default 3 cards when any search/filter criteria changes
  useEffect(() => {
    setEventsExpanded(false);
  }, [statusFilter, selectedCategories, searchQuery, sortBy]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const clearAll = () => {
    setStatusFilter("Upcoming Events");
    setSelectedCategories([]);
    setSearchQuery("");
    setSortBy("Newest to Oldest");
  };

  const filteredEvents = useMemo(() => {
    const parseEventDate = (dateStr: string) => {
      const match = dateStr.match(/^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s*-\s*(\d{4})$/);
      if (!match) return 0;
      const [, day, month, year] = match;
      const monthMap: Record<string, number> = {
        jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
        jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11
      };
      const monthIndex = monthMap[month.toLowerCase().substring(0, 3)] ?? 0;
      return new Date(parseInt(year, 10), monthIndex, parseInt(day, 10)).getTime();
    };

    return EVENTS.filter((event) => {
      const matchesStatus =
        statusFilter === "Upcoming Events"
          ? event.status === "upcoming"
          : event.status === "past";

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(event.category);

      const matchesSearch =
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.tags.some(tag => tag.label.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesStatus && matchesCategory && matchesSearch;
    }).sort((a, b) => {
      const timeA = parseEventDate(a.date);
      const timeB = parseEventDate(b.date);
      if (sortBy === "Newest to Oldest") {
        return timeB - timeA;
      } else {
        return timeA - timeB;
      }
    });
  }, [statusFilter, selectedCategories, searchQuery, sortBy]);

  const displayedEvents = eventsExpanded
    ? filteredEvents
    : filteredEvents.slice(0, 3);

  return (
    <section className="w-full px-4 md:px-[6rem] py-8 md:py-[3rem] bg-background-page">
      <div className="max-w-[1200px] mx-auto w-full">
        <FilterSection
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          selectedCategories={selectedCategories}
          toggleCategory={toggleCategory}
          clearAll={clearAll}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {/* Event cards */}
        <div className="flex flex-col gap-8 mt-10">
          {displayedEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}

          {filteredEvents.length === 0 && (
            <div className="text-center py-20 text-text-secondary">
              No events found for the selected filters.
            </div>
          )}
        </div>

        {/* Show More / Show Less button */}
        {filteredEvents.length > 3 && (
          <div className="flex justify-center mt-10">
            <motion.button
              onClick={() => setEventsExpanded((prev) => !prev)}
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-2 px-6 py-2 rounded-full cursor-pointer text-text-secondary text-[14px] font-medium transition-colors bg-background-disabled"
            >
              {eventsExpanded ? "Show Less" : "Show More"}
              <motion.span
                animate={{ rotate: eventsExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="inline-block"
              >
                <ChevronDown size={16} />
              </motion.span>
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Events;
