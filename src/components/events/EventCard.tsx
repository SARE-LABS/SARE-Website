import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Eye } from "lucide-react";
import type { EventData } from "../../../constants/events";

interface EventCardProps {
  event: EventData;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-[1rem]  rounded-[20px] overflow-hidden  group">
      <div className="relative w-full md:w-[20.125rem]  shrink-0 overflow-hidden aspect-square md:rounded-[1.25rem]">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center gap-4 py-4 md:p-[1.5rem] md:rounded-[1.25rem] w-full bg-[#F1F5F9]">
        {/* Tags */}
        <div className="flex flex-wrap items-center">
          {event.tags.map((tag, i) => (
            <span
              key={i}
              className={`flex items-center justify-center gap-1.5 px-3 py-1.5 md:py-[0.5rem] md:px-[1rem] md:min-w-[6rem] rounded-full text-[12px] font-medium bg-[#67B5DC] border border-[#FAFBFC] text-white relative ${
                i > 0 ? "-ml-[0.75rem] md:-ml-[1rem]" : ""
              }`}
              style={{ zIndex: i }}
            >
              {tag.label}
            </span>
          ))}
        </div>

        {/* Date & Time */}
        <div className="border border-[#67B5DC]/40 rounded-full px-4 py-2 flex items-center gap-4 text-[13px] text-text-secondary w-fit bg-white/50">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} className="text-[#67B5DC]" />
            {event.date}
          </span>
          <span className="text-gray-300">|</span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} className="text-[#67B5DC]" />
            {event.time}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-[22px] md:text-[2rem] font-bold text-text-primary leading-[120%]">
          {event.title}
        </h3>

        {/* Description */}
        <p className="text-[14px] text-text-secondary leading-[160%] line-clamp-2">
          {event.description}
        </p>

        {/* CTA */}
        <Link
          href={`/events/${event.id}`}
          className="inline-flex items-center gap-2 bg-[#67B5DC] hover:bg-[#5aa3c8] text-white text-[14px] font-medium px-6 py-2.5 rounded-full w-fit transition-colors"
        >
          <Eye size={16} />
          View Details
        </Link>
      </div>
    </div>
  );
}
