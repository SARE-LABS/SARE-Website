"use client";

import useCountdown from "../utils/useCountdown";

function NavMarques() {
  const { days } = useCountdown("2025-09-10T23:59:59");
  return (
    <div className="w-full p-4 max-h-[50px] bg-primary-blue overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex items-center gap-4">
          <p className="text-white">
            The Fate of the world's Agro-tech future is in your hands.
          </p>
          <span className="bg-white p-[5px] rounded-full"></span>
          <p className="text-white">
            SARE membership applications are now open - and closes in {days} day
            {days > 1 ? "s" : ""}
          </p>
          <span className="bg-white p-[5px] rounded-full"></span>
          <p className="text-white">
            Take the chance to be a real change maker and apply now!
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
            SARE membership applications are now open - and closes in 2 days
          </p>
          <span className="bg-white p-[5px] rounded-full"></span>
          <p className="text-white">
            Take the chance to be a real change maker and apply now!
          </p>
          <span className="bg-white p-[5px] rounded-full"></span>
        </div>
      </div>
    </div>
  );
}

export default NavMarques;
