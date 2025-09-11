"use client";

import useCountdown from "../utils/useCountdown";
import { countdownDate } from "./Time";

function NavMarques() {
  const { days, hours, minutes, seconds } = useCountdown(countdownDate);

  const zeroLeft = days === 0 && hours === 0 && minutes === 0 && seconds === 0;
  return (
    <div className="w-full p-4 max-h-[50px] bg-primary-blue overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex items-center gap-4 ml-4">
          <p className="text-white">
            The Fate of the world's Agro-tech future is in your hands.
          </p>
          <span className="bg-white p-[5px] rounded-full"></span>
          <p className="text-white">
            {`${
              zeroLeft
                ? "The membership application period has ended."
                : `SARE membership applications are now open - and closes in{" "}
                ${days > 0 ? days : "less than a"} day
                ${days > 1 ? "s" : ""}`
            } `}
          </p>
          <span className="bg-white p-[5px] rounded-full"></span>
          <p className="text-white">
            {`${
              zeroLeft
                ? "Applications are now closed. Stay tuned for next announcement!"
                : "Take the chance to be a real change maker and apply now!"
            } `}
          </p>
          <span className="bg-white p-[5px] rounded-full"></span>
        </div>

        {/* Duplicate for seamless loop  */}
        <div className="flex items-center gap-4 ml-4">
          <p className="text-white">
            The Fate of the world's Agro-tech future is in your hands.
          </p>
          <span className="bg-white p-[5px] rounded-full"></span>
          <p className="text-white">
            {`${
              zeroLeft
                ? "The membership application period has ended."
                : `SARE membership applications are now open - and closes in{" "}
                ${days > 0 ? days : "less than a"} day
                ${days > 1 ? "s" : ""}`
            } `}
          </p>
          <span className="bg-white p-[5px] rounded-full"></span>
          <p className="text-white">
            {`${
              zeroLeft
                ? "Applications are now closed. Stay tuned for next announcement!"
                : "Take the chance to be a real change maker and apply now!"
            } `}
          </p>
          <span className="bg-white p-[5px] rounded-full"></span>
        </div>
      </div>
    </div>
  );
}

export default NavMarques;
