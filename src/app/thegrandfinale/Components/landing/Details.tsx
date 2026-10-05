"use client";

import React from "react";
import { MapPin, Clock, Calendar } from "lucide-react";

export interface EventDetailItem {
  id: string;
  label: string;
  value: string;
  icon: React.ReactNode;
}

export interface DetailsProps {
  items?: EventDetailItem[];
  className?: string;
}

const DEFAULT_DETAILS: EventDetailItem[] = [
  {
    id: "location",
    label: "Venue & Hall",
    value: "NLNG, Faculty of Tech.",
    icon: <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#67B5DC]" />,
  },
  {
    id: "time",
    label: "Schedule",
    value: "9:00 AM - 12:30 PM",
    icon: <Clock className="w-5 h-5 md:w-6 md:h-6 text-[#67B5DC]" />,
  },
  {
    id: "date",
    label: "Event Date",
    value: "14th Nov., 2026",
    icon: <Calendar className="w-5 h-5 md:w-6 md:h-6 text-[#67B5DC]" />,
  },
];

export const Details: React.FC<DetailsProps> = ({
  items = DEFAULT_DETAILS,
  className = "",
}) => {
  return (
    <div
      className={`w-full p-2.5 sm:p-3.5 md:p-4 rounded-3xl bg-[#67B5DC] shadow-xl shadow-[#67B5DC]/25 border border-white/30 ${className}`}
      role="region"
      aria-label="Event Schedule and Location Details"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3 md:gap-4">
        {items.map((detail) => (
          <div
            key={detail.id}
            className="flex items-center gap-3.5 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 sm:py-3.5 min-h-[64px] sm:min-h-[70px] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#67B5DC]/15 flex items-center justify-center">
              {detail.icon}
            </div>
            <div className="flex flex-col justify-center min-w-0">
              <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#4B5563]/80">
                {detail.label}
              </span>
              <span className="text-[15px] sm:text-base md:text-lg font-bold text-[#1F2937] truncate">
                {detail.value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
