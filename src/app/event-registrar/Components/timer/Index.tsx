"use client";

import { useEffect, useState } from "react";
import ClockGif from "../../assets/gifs/Clock.gif";
import Image from "next/image";

export const Timer = () => {
  const targetDate = new Date("2026-01-31T20:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const timeStamp = [
    {
      time: timeLeft.days,
      text: "Days",
    },
    {
      time: timeLeft.hours,
      text: "Hours",
    },
    {
      time: timeLeft.minutes,
      text: "Mintues",
    },
    {
      time: timeLeft.seconds,
      text: "Seconds",
    },
  ];

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer(); // run once immediately
    const interval = setInterval(updateTimer, 1000); // update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center md:pl-4 gap-2 ">
      <Image alt="Clock" src={ClockGif} className="w-10 h-10 md:mr-2" />
      <div className="text-center text-[#1F2937] font-medium md:text-[48px] text-[48px] flex ">
        <div className="flex gap-1">
          {timeStamp.map((time, index) => (
            <div key={index} className="flex gap-2">
              <div className="flex flex-col">
                <span>{time.time}</span>
                <span className="text-[12px]">{time.text}</span>
              </div>
              {index < timeStamp.length - 1 && <span>:</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
