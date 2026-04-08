"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { BiCalendar, BiShareAlt, BiTimeFive } from "react-icons/bi";
import { BsLinkedin, BsTwitterX, BsWhatsapp } from "react-icons/bs";
import { FaArrowLeftLong } from "react-icons/fa6";
import {
  Calendar,
  Clock,
  CTRLLABS2,
  Excos,
  GroupPictureWithLoveBin,
  Map,
  Member,
  eyeIcon,
  logoOne,
  logoThree,
  logoTwo,
  registerIcon,
  sareIsCooking,
  xantha,
  Linkdln,
  agrinova,
  tpi,
  agrictech,
  precisionfield,
} from "../../../../public/images/images";
import EventsFaq from "../../components/EventsActivities/EventsFaq";
import { events, type EventCard } from "../../components/EventsActivities/data";
import Newsletter from "../../components/Newsletter";

type Countdown = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

type Speaker = {
  name: string;
  role: string;
  place: string;
  bio: string;
  quote?: string;
};

type ScheduleItem = {
  time: string;
  activity: string;
  host: string;
};

const speakers: Speaker[] = [
  {
    name: "Obikoya Adebayo",
    role: "Software Engineer",
    place: "@Postaddy",
    quote:
      "“I see GitHub as a diary for your code — it tells the story of every change, every idea, every version. Once you connect it to your IDE, you stop fearing it and start flowing with it.”",
    bio: "Daniel Makinde is a seasoned software developer with over a decade of experience building digital solutions across various industries. With a strong passion for innovation and problem-solving, he has dedicated his career to using technology as a tool for growth and transformation.A proud alumnus of Agricultural and Environmental Engineering, Daniel served as the President of the department from 2005–2006, where he demonstrated early leadership and a commitment to advancing his academic community.He strongly believes in continuous development — both personal and technological — and is passionate about empowering the next generation of innovators to build solutions that create real impact. Through his work and mentorship, Daniel continues to inspire young engineers and developers to think boldly, learn continuously, and build for the future.",
  },
  {
    name: "Raj Patel",
    role: "AI/ML Engineer @Biomech Labs",
    place: "@Biomech Labs",
    quote:
      "“AI is not just about the technology; it's about the human stories behind the data.”",
    bio: "A product thinker who translates ideas into practical systems. Raj leads workshop sessions on model-first prototyping for engineering students. He is passionate about democratizing AI and making it accessible to everyone, regardless of their technical background. With a background in both engineering and design, Raj brings a unique perspective to the world of AI, emphasizing the importance of user experience and ethical considerations in AI development. He is dedicated to helping students and professionals alike understand the potential of AI and how to harness it for positive impact.",
  },
  {
    name: "Chloe Zhang",
    role: "Frontend Engineer @Eventflow",
    quote:
      "“Designing event experiences is like crafting a story — every interaction should feel intentional and delightful.”",
    place: "@Eventflow",
    bio: "Chloe designs high-conversion event experiences and shares practical techniques for building delightful interfaces fast. She is passionate about creating user-centric designs that not only look great but also drive engagement and conversions. With a background in both design and engineering, Chloe has a unique ability to bridge the gap between aesthetics and functionality, ensuring that every event experience she creates is both beautiful and effective. She is dedicated to helping students and professionals alike understand the principles of good design and how to apply them to create memorable event experiences.",
  },
];

const schedule: ScheduleItem[] = [
  {
    time: "10:00 AM - 10:30 AM",
    activity: "Arrival and Registration",
    host: "SARE Team",
  },
  {
    time: "10:30 AM - 12:00 PM",
    activity: "Opening Keynote",
    host: "Guest Speaker",
  },
  {
    time: "12:00 PM - 1:00 PM",
    activity: "Networking Lunch",
    host: "Event Team",
  },
  {
    time: "1:00 PM - 2:30 PM",
    activity: "Panel Discussion: Industry Trends",
    host: "Moderator",
  },
  { time: "2:30 PM - 3:00 PM", activity: "Coffee Break", host: "SARE Team" },
  {
    time: "3:00 PM - 4:00 PM",
    activity: "Hands-on Workshop",
    host: "Engineering Leads",
  },
  {
    time: "4:00 PM - 4:45 PM",
    activity: "Q&A and Live Demo",
    host: "Core Team",
  },
  {
    time: "4:45 PM - 5:00 PM",
    activity: "Closing Remarks",
    host: "Organizers",
  },
];

const galleryImages = [
  sareIsCooking,
  sareIsCooking,
  sareIsCooking,
  sareIsCooking,
];
const partnerLogos = [agrinova, tpi, agrictech, precisionfield];

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

function formatUnit(value: number) {
  return String(Math.max(0, value)).padStart(2, "0");
}

function getCountdown(targetDate: Date | null): Countdown {
  if (!targetDate) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  }

  const diffMs = targetDate.getTime() - Date.now();
  if (diffMs <= 0) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
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

function getEventStartAt(event: EventCard) {
  return parseDateTime(event.date, extractStartTime(event.time));
}

function TimeCell({ value, label }: { value: string; label: string }) {
  return (
    <div className="w-[68px] md:w-[90px] h-[68px] md:h-[82px] rounded-[12px] bg-[#EEF3F8] flex flex-col items-center justify-center">
      <p className="text-[#1F2937] text-[34px] md:text-[42px] leading-none font-semibold tabular-nums">
        {value}
      </p>
      <p className="text-[10px] md:text-[12px] text-[#67B5DC] font-medium">
        {label}
      </p>
    </div>
  );
}

export default function EventDetailsPage() {
  const params = useParams<{ eventId: string }>();
  const eventId = Number(params?.eventId);

  const selectedEvent = useMemo(() => {
    if (Number.isNaN(eventId)) {
      return null;
    }

    return events.find((event) => event.id === eventId) ?? null;
  }, [eventId]);

  const event = selectedEvent ?? events[0];
  const eventStartAt = useMemo(() => getEventStartAt(event), [event]);

  const [countdown, setCountdown] = useState<Countdown>(() =>
    getCountdown(eventStartAt),
  );
  const [showAllSchedule, setShowAllSchedule] = useState(false);
  const [shareFeedback, setShareFeedback] = useState("Share");

  useEffect(() => {
    setCountdown(getCountdown(eventStartAt));

    const interval = window.setInterval(() => {
      setCountdown(getCountdown(eventStartAt));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [eventStartAt]);

  const visibleSchedule = showAllSchedule ? schedule : schedule.slice(0, 5);

  const handleShare = async () => {
    const url = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: event.title,
          text: `Join us at ${event.title}`,
          url,
        });
        return;
      }

      await navigator.clipboard.writeText(url);
      setShareFeedback("Copied");
      window.setTimeout(() => setShareFeedback("Share"), 1800);
    } catch {
      setShareFeedback("Share");
    }
  };

  return (
    <main className="w-full min-h-[100vh] bg-[#F3F6FA] pt-[90px] md:pt-[108px] pb-10">
      <section className="px-4 md:px-[76px]">
        <div className="max-w-[1140px] mx-auto">
          <Link
            href="/eventsandactivities"
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-[#E0F2FE] text-[#67B5DC] text-[12px] font-medium"
          >
            <FaArrowLeftLong className="text-[11px]" />
            Back to Events
          </Link>

          {!selectedEvent && (
            <p className="mt-3 text-[13px] text-[#64748B]">
              Event not found. Showing the latest event details.
            </p>
          )}

          <h1 className="mt-3 text-[38px] md:text-[52px] leading-[100%] tracking-[-0.02em] text-[#1F2937] font-semibold max-w-[900px]">
            {event.title}
          </h1>

          <div className="mt-4 rounded-[18px] overflow-hidden h-[220px] md:h-[360px] relative">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1140px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B21344D] to-transparent" />
          </div>

          <div className="mx-auto w-[92%] -mt-6 md:-mt-8 relative z-10 rounded-[16px] md:rounded-[18px] border border-[#E5EAF0] bg-white p-4 md:p-6 shadow-[0_12px_30px_rgba(31,41,55,0.08)]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-[18px] font-medium text-[#374151]">
                Starts in:
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="h-[34px] px-3 rounded-full text-[12px] font-medium border border-[#A7CCE2] text-[#67B5DC] inline-flex items-center gap-1.5"
                >
                  <BiShareAlt className="text-[15px]" />
                  {shareFeedback}
                </button>
                <Link
                  href="/application"
                  className="h-[34px] px-3 rounded-full text-[12px] font-medium bg-[#67B5DC] text-white inline-flex items-center gap-1.5"
                >
                  <Image
                    src={registerIcon}
                    alt="Register"
                    width={14}
                    height={14}
                  />
                  Register
                </Link>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar pb-1">
              <TimeCell value={countdown.days} label="Days" />
              <span className="text-[#374151] text-[36px] md:text-[42px] leading-none">
                :
              </span>
              <TimeCell value={countdown.hours} label="Hours" />
              <span className="text-[#374151] text-[36px] md:text-[42px] leading-none">
                :
              </span>
              <TimeCell value={countdown.minutes} label="Minutes" />
              <span className="text-[#374151] text-[36px] md:text-[42px] leading-none">
                :
              </span>
              <TimeCell value={countdown.seconds} label="Seconds" />
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-2">
              <span className="inline-flex items-center justify-center gap-2 h-[38px] rounded-[10px] border border-[#B7D6E9] px-4 text-[13px] text-[#4B5563] bg-[#F8FBFD]">
                <Image src={Map} alt="Location" width={16} height={16} />
                Google meet
              </span>
              <span className="inline-flex items-center justify-center gap-2 h-[38px] rounded-[10px] border border-[#B7D6E9] px-4 text-[13px] text-[#4B5563] bg-[#F8FBFD]">
                <Image src={Clock} alt="Time" width={16} height={16} />
                {extractStartTime(event.time)}
              </span>
              <span className="inline-flex items-center justify-center gap-2 h-[38px] rounded-[10px] border border-[#B7D6E9] px-4 text-[13px] text-[#4B5563] bg-[#F8FBFD]">
                <Image src={Calendar} alt="Date" width={16} height={16} />
                {event.date}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-[76px] mt-14">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full px-3 py-1 bg-[#E0F2FE] text-[#67B5DC] text-[12px] font-medium">
              About
            </span>
            <h2 className="mt-3 text-[34px] md:text-[46px] leading-[100%] tracking-[-0.02em] text-[#1F2937] font-semibold">
              About the Event
            </h2>
            <p className="mt-3 text-[#4B5563] text-[14px] md:text-[16px] leading-[155%] max-w-[980px] mx-auto">
              {event.excerpt} This event is focused on practical exposure. You
              will collaborate with a cross-functional team, hear from
              experienced mentors, and leave with clear next steps you can apply
              immediately to your projects.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
              <Link
                href="/application"
                className="h-[36px] rounded-full bg-[#67B5DC] px-4 text-white text-[13px] font-medium inline-flex items-center gap-2"
              >
                <Image
                  src={registerIcon}
                  alt="Register"
                  width={14}
                  height={14}
                />
                Get up and drive with us
              </Link>
              <Link
                href="/application"
                className="h-[36px] rounded-full border border-[#BBD9EA] bg-white px-4 text-[#4B5563] text-[13px] font-medium inline-flex items-center gap-2"
              >
                <Image src={eyeIcon} alt="Join team" width={14} height={14} />
                Join our team
              </Link>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-3">
            {galleryImages.map((image, index) => (
              <div
                key={`${index}-gallery`}
                className="relative h-[300px] rounded-[14px] overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`Event gallery ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00000055] to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-[76px] mt-14">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full px-3 py-1 bg-[#E0F2FE] text-[#67B5DC] text-[12px] font-medium">
              About
            </span>
            <h2 className="mt-3 text-[34px] md:text-[46px] leading-[100%] tracking-[-0.02em] text-[#1F2937] font-semibold">
              About the Speakers
            </h2>
          </div>

          <div className="mt-8 space-y-4">
            {speakers.slice(0, 2).map((speaker, index) => (
              <article
                key={speaker.name}
                className={`rounded-[18px] bg-[#EEF3F8] p-4 md:p-5 grid grid-cols-1 gap-4 ${
                  index % 2 === 0
                    ? "md:grid-cols-[220px_1fr]"
                    : "md:grid-cols-[1fr_220px]"
                }`}
              >
                <div
                  className={`relative h-full rounded-[14px] overflow-hidden ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <div className="flex flex-col">
                    <Image
                      src={xantha}
                      alt={speaker.name}
                      width={200}
                      height={200}
                      className="object-cover rounded-2xl"
                    />
                    <h3 className="text-[30px] md:text-[40px] mt-4 leading-[100%] tracking-[-0.02em] font-semibold  ">
                      {speaker.name}
                    </h3>
                    <p className="mt-1 text-[14px]  font-medium">
                      {speaker.role}
                      <span className="text-[#67b5dc]">{speaker.place}</span>
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-[#67B5DC]">
                      <BsTwitterX />
                      <BsWhatsapp />
                      <BsLinkedin />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="mt-3 text-[14px] md:text-[15px] leading-[150%] text-[#4B5563]">
                    <span className="font-bold text-[#67B5DC] ">
                      {speaker.quote}
                    </span>{" "}
                    <br /> <br />
                    {speaker.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[22px] bg-gradient-to-r from-[#58B4DD] to-[#14C8A1] p-5 md:p-8">
            <h3 className="text-center text-[36px] md:text-[44px] leading-[100%] tracking-[-0.02em] text-[#0F172A] font-semibold">
              About the Speakers
            </h3>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, index) => {
                const speaker = speakers[index % speakers.length];
                return (
                  <div key={`${speaker.name}-${index}`} className="text-center">
                    <div className="mx-auto relative  md:h-[250px] md:w-[250px]">
                      <div className="relative h-full w-full rounded-full overflow-hidden  border-[#DFF5FF]">
                        <Image
                          src={xantha}
                          alt={speaker.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute bottom-1 right-1 md:bottom-2 md:right-7 bg-[#0077B5] rounded-full w-6 h-6 md:w-8 md:h-8 inline-flex items-center justify-center text-white">
                        <BsLinkedin className="text-[10px] md:text-[14px]" />
                      </div>
                    </div>
                    <p className="mt-2 text-[14px] font-semibold text-[#0F172A]">
                      {speaker.name}
                    </p>
                    <p className="text-[11px] text-[#E7F8FF]">{speaker.role}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-[76px] mt-14">
        <div className="max-w-[1140px] mx-auto text-center">
          <span className="inline-flex items-center rounded-full px-3 py-1 bg-[#E0F2FE] text-[#67B5DC] text-[12px] font-medium">
            Our Partners
          </span>
          <h2 className="mt-3 text-[34px] md:text-[46px] leading-[100%] tracking-[-0.02em] text-[#1F2937] font-semibold">
            Organizations that Supported this event
          </h2>
          <p className="mt-2 text-[14px] text-[#64748B]">
            Meet our trusted industry and education partners
          </p>

          <div className="mt-6 overflow-hidden">
            <div className="animate-marquee gap-3">
              {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                <div
                  key={`${index}-partner-marquee`}
                  className="h-[74px] w-[210px] shrink-0 rounded-[10px] bg-[#EAF0F7] border border-[#D8E2EC] flex items-center justify-center"
                >
                  <Image
                    src={logo}
                    alt={`Partner logo ${index + 1}`}
                    width={150}
                    height={46}
                    className="h-auto w-auto max-h-[46px]"
                  />
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            className="mt-5 h-[36px] rounded-full bg-[#67B5DC] px-5 text-white text-[13px] font-medium inline-flex items-center"
          >
            Partner with SARE
          </Link>
        </div>
      </section>

      <section className="px-4 md:px-[76px] mt-14">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full px-3 py-1 bg-[#E0F2FE] text-[#67B5DC] text-[12px] font-medium">
              Event
            </span>
            <h2 className="mt-3 text-[34px] md:text-[46px] leading-[100%] tracking-[-0.02em] text-[#1F2937] font-semibold">
              Event Schedule
            </h2>
          </div>

          <div className="mt-5 rounded-[16px] overflow-hidden border border-[#D8E2EC] bg-[#EEF3F8]">
            <div className="grid grid-cols-[170px_1fr] px-4 py-3 text-[12px] text-[#64748B] bg-[#E7EEF5] border-b border-[#D8E2EC]">
              <p className="inline-flex items-center gap-1.5">
                <BiTimeFive className="text-[#67B5DC]" /> Time
              </p>
              <p className="pl-4 border-l border-[#D6DEE8]">Activity</p>
            </div>

            <div className="relative">
              <div className="divide-y divide-[#D8E2EC] pb-14">
                {visibleSchedule.map((item, index) => {
                  const isFaded = !showAllSchedule && index >= 3;

                  return (
                    <div
                      key={item.time + item.activity}
                      className={`grid grid-cols-[170px_1fr] px-4 py-3 text-[13px] md:text-[14px] text-[#334155] transition-opacity ${
                        isFaded ? "opacity-45" : "opacity-100"
                      }`}
                    >
                      <p>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#9DD0EA] bg-[#EAF4FB] h-[28px] px-3 text-[11px] text-[#4E94BA]">
                          <BiCalendar className="text-[11px]" />
                          {item.time}
                        </span>
                      </p>

                      <div className="pl-4 border-l border-[#D6DEE8] text-left">
                        <p className="font-medium text-[#334155]">{item.activity}</p>
                        <p className="text-[12px] text-[#67B5DC]">{item.host}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {!showAllSchedule && (
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#EEF3F8] to-transparent" />
              )}

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                <button
                  onClick={() => setShowAllSchedule((prev) => !prev)}
                  className="h-[30px] rounded-full bg-[#E7EEF5] px-4 text-[12px] text-[#475569] inline-flex items-center gap-2 border border-[#D6DEE8]"
                >
                  {showAllSchedule ? "Show less" : "See more"}
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={showAllSchedule ? "rotate-180" : ""}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EventsFaq />

      <section className="px-4 md:px-[76px] mt-8">
        <div className="max-w-[1140px] mx-auto text-center">
          <Link
            href="/eventsandactivities"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-[#E0F2FE] text-[#4E94BA] text-[13px] font-medium"
          >
            <FaArrowLeftLong className="text-[11px]" />
            Back to Events
          </Link>
        </div>
      </section>

      <Newsletter />
    </main>
  );
}
