"use client";

import Image from "next/image";
import { EventsImg, HeroImg } from "../../../public/images/pngs/png";
import { MapPin, Clock, Calendar, Users, Eye } from "lucide-react";
import { spaceGrotesk } from "../../../public/fonts/fonts";
import HighlightHead from "@/app/UI/props/HighlightHead";

function Hero() {
  return (
    <section className="w-full relative px-4 md:py-[3rem] py-10 md:px-[6rem] flex flex-col items-start bg-background-page gap-[1.5rem]">
      <HighlightHead title="Upcoming Events" />

      {/* Heading */}
      <h1
        className={`${spaceGrotesk.className} text-[32px] md:text-[4rem] font-bold text-text-primary leading-[120%] `}
      >
        CTRL LABS Ice-Breaker Session 2.0
      </h1>

      {/* Banner & Overlapping Card Container */}
      <div className="w-full relative flex flex-col items-center">
        {/* Banner Image */}
        <div className="w-full h-[250px] md:h-[27.75rem] rounded-[24px] overflow-hidden relative">
          <Image
            src={HeroImg}
            alt="CTRL LABS Ice-Breaker Session"
            fill
            className="object-cover"
          />
        </div>

        {/* Info Card */}
        <div className="bg-white rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] w-[95%] md:w-[85%] max-w-[60rem] -mt-[60px] md:-mt-[100px] p-6 md:p-[3rem] relative z-10 flex flex-col gap-8">
          {/* Top Row: Starts in + Buttons */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <h2 className="text-[20px] font-bold text-text-primary">
              Starts in:
            </h2>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <button className="w-full sm:w-auto bg-[#67B5DC] hover:bg-primary-blue-hover text-white px-6 py-2.5 rounded-full flex items-center justify-center gap-2 text-[14px] font-medium transition-colors">
                <Users size={16} />
                Register
              </button>
              <button className="w-full sm:w-auto border border-[#67B5DC] text-[#67B5DC] hover:bg-highlight px-6 py-2.5 rounded-full flex items-center justify-center gap-2 text-[14px] font-medium transition-colors">
                <Eye size={16} />
                View Details
              </button>
            </div>
          </div>

          {/* // Countdown  */}
          <div className="flex items-center justify-center md:justify-between gap-2 sm:gap-4 md:gap-6">
            <CountdownBlock number="07" label="Days" />
            <span className="text-3xl md:text-5xl font-bold text-text-primary pb-6">
              :
            </span>
            <CountdownBlock number="59" label="Hours" />
            <span className="text-3xl md:text-5xl font-bold text-text-primary pb-6">
              :
            </span>
            <CountdownBlock number="12" label="Minutes" />
            <span className="text-3xl md:text-5xl font-bold text-text-primary pb-6">
              :
            </span>
            <CountdownBlock number="59" label="Seconds" />
          </div>

          {/* Event Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <InfoPill
              icon={<MapPin size={18} className="text-[#67B5DC]" />}
              text="Google meet"
            />
            <InfoPill
              icon={<Clock size={18} className="text-[#67B5DC]" />}
              text="8:00 PM"
            />
            <InfoPill
              icon={<Calendar size={18} className="text-[#67B5DC]" />}
              text="16th August"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CountdownBlock({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-[#f9fafb] rounded-[1rem] p-[1.5rem] flex flex-col items-center justify-center shadow-sm">
      <span
        className={`${spaceGrotesk.className} text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary`}
      >
        {number}
      </span>
      <span className="text-[10px] md:text-[12px] text-[#67B5DC] font-medium mt-1 md:mt-2">
        {label}
      </span>
    </div>
  );
}

function InfoPill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="border border-border rounded-[12px] py-3.5 px-4 flex items-center justify-center gap-2 text-text-secondary text-[14px] font-medium">
      {icon}
      <span>{text}</span>
    </div>
  );
}

export default Hero;
