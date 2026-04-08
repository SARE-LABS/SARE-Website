"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { StaticImageData } from "next/image";
import {
  events,
  featuredEvent,
  type EventCard,
  type FeaturedIconKey,
} from "./data";
import {
  Calendar,
  Map,
  eyeIcon,
  Clock,
  googleMeet,
  registerIcon,
} from "../../../../public/images/images";

const featuredIconMap: Record<FeaturedIconKey, StaticImageData> = {
  googleMeet: Map,
  Clock,
  eyeIcon: Calendar,
};

type UpcomingEventTarget = {
  event: EventCard;
  startAt: Date;
  startTime: string;
};

type Countdown = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

const ZERO_COUNTDOWN: Countdown = {
  days: "00",
  hours: "00",
  minutes: "00",
  seconds: "00",
};

function extractStartTime(timeRange: string) {
  return timeRange.split("-")[0]?.trim() ?? "";
}

function parseDateTime(date: string, time: string) {
  const cleanedDate = date
    .replace(/(\d+)(st|nd|rd|th)/gi, "$1")
    .replace(/,/g, "")
    .trim();

  const parsed = new Date(`${cleanedDate} ${time}`);
  if (!Number.isNaN(parsed.getTime())) {
    return parsed;
  }

  const currentYear = new Date().getFullYear();
  const parsedWithYear = new Date(`${cleanedDate} ${currentYear} ${time}`);
  if (!Number.isNaN(parsedWithYear.getTime())) {
    return parsedWithYear;
  }

  return null;
}

function getNextUpcomingEvent(now: Date): UpcomingEventTarget | null {
  const nowTime = now.getTime();

  const upcoming = events
    .filter((event) => event.kind === "upcoming")
    .map((event) => {
      const startTime = extractStartTime(event.time);
      const startAt = parseDateTime(event.date, startTime);

      if (!startAt) {
        return null;
      }

      return {
        event,
        startAt,
        startTime,
      };
    })
    .filter((item): item is UpcomingEventTarget => item !== null)
    .filter((item) => item.startAt.getTime() > nowTime)
    .sort((a, b) => a.startAt.getTime() - b.startAt.getTime());

  return upcoming[0] ?? null;
}

function formatUnit(value: number) {
  return String(Math.max(0, value)).padStart(2, "0");
}

function getCountdown(targetDate: Date | null): Countdown {
  if (!targetDate) {
    return ZERO_COUNTDOWN;
  }

  const diffMs = targetDate.getTime() - Date.now();
  if (diffMs <= 0) {
    return ZERO_COUNTDOWN;
  }

  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days: formatUnit(days),
    hours: formatUnit(hours),
    minutes: formatUnit(minutes),
    seconds: formatUnit(seconds),
  };
}

function TimeBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="min-w-[56px] md:min-w-[86px] flex flex-col items-center justify-start">
      <div className="text-[#1F2937] text-[38px] md:text-[44px] leading-none font-semibold tabular-nums">
        {value}
      </div>
      <p className="mt-1 text-[10px] md:text-[12px] text-[#67B5DC] font-medium">
        {label}
      </p>
    </div>
  );
}

function InfoPill({ text, icon }: { text: string; icon: FeaturedIconKey }) {
  return (
    <span className="inline-flex items-center justify-center gap-2 h-[38px] rounded-[10px] border border-[#B7D6E9] px-4 text-[13px] md:text-[14px] text-[#4B5563] bg-[#F8FBFD]">
      <Image src={featuredIconMap[icon]} alt={text} width={16} height={16} />
      {text}
    </span>
  );
}

export default function FeaturedEvent() {
  const [targetEvent, setTargetEvent] = useState<UpcomingEventTarget | null>(
    () => getNextUpcomingEvent(new Date()),
  );

  const [countdown, setCountdown] = useState<Countdown>(() =>
    getCountdown(targetEvent?.startAt ?? null),
  );

  useEffect(() => {
    const tick = () => {
      const nextEvent = getNextUpcomingEvent(new Date());

      setTargetEvent((prev) => {
        if (
          prev &&
          nextEvent &&
          prev.event.id === nextEvent.event.id &&
          prev.startAt.getTime() === nextEvent.startAt.getTime()
        ) {
          return prev;
        }

        return nextEvent;
      });

      setCountdown(getCountdown(nextEvent?.startAt ?? null));
    };

    tick();
    const interval = window.setInterval(tick, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const resolvedEvent = useMemo(() => {
    const fallbackEvent =
      events.find((event) => event.kind === "upcoming") ?? events[0];

    if (!targetEvent) {
      return {
        title: featuredEvent.title,
        image: featuredEvent.image,
        infoItems: featuredEvent.infoItems,
        href: fallbackEvent
          ? `/eventsandactivities/${fallbackEvent.id}`
          : "/eventsandactivities",
      };
    }

    return {
      title: targetEvent.event.title,
      image: targetEvent.event.image,
      href: `/eventsandactivities/${targetEvent.event.id}`,
      infoItems: [
        {
          label: targetEvent.event.format,
          icon: "googleMeet" as const,
        },
        {
          label: targetEvent.startTime,
          icon: "Clock" as const,
        },
        {
          label: targetEvent.event.date,
          icon: "eyeIcon" as const,
        },
      ],
    };
  }, [targetEvent]);

  return (
    <section className="px-4 md:px-[76px] mt-8 md:mt-10">
      <div className="max-w-[1140px] mx-auto">
        <span className="inline-flex items-center rounded-full px-3 py-1 bg-[#E0F2FE] text-[#67B5DC] text-[12px] font-medium">
          Upcoming Event
        </span>

        <Link href={resolvedEvent.href} className="inline-block">
          <h2 className="mt-3 text-[38px] md:text-[56px] leading-[100%] tracking-[-0.02em] text-[#1F2937] font-semibold">
            {resolvedEvent.title}
          </h2>
        </Link>

        <Link
          href={resolvedEvent.href}
          className="mt-5 rounded-[18px] overflow-hidden h-[220px] md:h-[360px] relative block"
        >
          <Image
            src={resolvedEvent.image}
            alt={resolvedEvent.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1140px"
          />
          <div className="absolute inset-0 bg-gradient-to-r" />
        </Link>

        <div className="mx-auto w-[92%] -mt-6 md:-mt-8 relative z-10 rounded-[16px] md:rounded-[18px] border border-[#E5EAF0] bg-white p-3.5 md:p-6 shadow-[0_12px_30px_rgba(31,41,55,0.08)]">
          <div className="flex items-center justify-between">
            <p className="text-[16px] font-medium text-[#4B5563]">Starts in:</p>
            <div className="hidden md:flex gap-4">
              <Link
                href="/application"
                className="inline-flex items-center justify-center gap-2 bg-[#67B5DC] text-white hover:bg-[#5A9BCD] focus:outline-none focus:ring-2 focus:ring-[#67B5DC] focus:ring-offset-2 py-2 px-4 rounded-full text-[14px] font-medium"
              >
                <Image
                  src={registerIcon}
                  alt="Register"
                  width={20}
                  height={20}
                />
                Register
              </Link>
              <Link
                href={resolvedEvent.href}
                className="inline-flex border items-center justify-center gap-2 bg-white text-[#67B5DC] hover:bg-[#5A9BCD] focus:outline-none focus:ring-2 focus:ring-[#67B5DC] focus:ring-offset-2 py-2 px-4 rounded-full text-[14px] font-medium"
              >
                <Image src={eyeIcon} alt="Register" width={20} height={20} />
                View Details
              </Link>
            </div>
          </div>

          <div className="mt-2.5 flex items-start justify-between gap-1 md:gap-4 overflow-x-auto no-scrollbar pb-1">
            <TimeBox value={countdown.days} label="Days" />
            <span className="text-[#374151] text-[32px] md:text-[40px] leading-none pt-[2px]">
              :
            </span>
            <TimeBox value={countdown.hours} label="Hours" />
            <span className="text-[#374151] text-[32px] md:text-[40px] leading-none pt-[2px]">
              :
            </span>
            <TimeBox value={countdown.minutes} label="Minutes" />
            <span className="text-[#374151] text-[32px] md:text-[40px] leading-none pt-[2px]">
              :
            </span>
            <TimeBox value={countdown.seconds} label="Seconds" />
          </div>

          <div className="mt-3 grid grid-cols-1 gap-2 md:hidden">
            <Link
              href="/application"
              className="h-[42px] inline-flex items-center justify-center gap-2 bg-[#67B5DC] text-white hover:bg-[#5A9BCD] focus:outline-none focus:ring-2 focus:ring-[#67B5DC] focus:ring-offset-2 rounded-full text-[14px] font-medium"
            >
              <Image src={registerIcon} alt="Register" width={16} height={16} />
              Register
            </Link>
            <Link
              href={resolvedEvent.href}
              className="h-[42px] inline-flex border items-center justify-center gap-2 bg-white text-[#67B5DC] rounded-full text-[14px] font-medium border-[#67B5DC]"
            >
              <Image src={eyeIcon} alt="View Details" width={16} height={16} />
              View Details
            </Link>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
            {resolvedEvent.infoItems.map((item) => (
              <InfoPill key={item.label} text={item.label} icon={item.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
