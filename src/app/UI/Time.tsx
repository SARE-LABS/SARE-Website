"use client";
import useCountdown from "../utils/useCountdown";

export const countdownDate = "2025-09-31T15:04:59";

function Time() {
  const { days, hours, minutes, seconds, expired } =
    useCountdown(countdownDate);

  // if (expired) {
  //   return <p className="text-red-600 font-medium">SARE Application Closes!</p>;
  // }

  return (
    <div className="flex gap-2 text-lg font-bold text-primary-blue">
      <div className=" flex items-start justify-center gap-2">
        <p className="flex flex-col items-center">
          <span className="timebox">{days < 10 ? `0${days}` : days}</span>
          <span className="text-[12px] md:text-[15px] font-medium text-text-secondary">Days</span>
        </p>

        <h1 className="text-text-primary font-bold text-[40px] ">:</h1>
      </div>
      <div className=" flex items-start justify-center gap-2">
        <p className="flex flex-col items-center">
          <span className="timebox">{hours < 10 ? `0${hours}` : hours}</span>
          <span className="text-[12px] md:text-[15px] font-medium text-text-secondary">Hours</span>
        </p>

        <h1 className="text-text-primary font-bold text-[40px] ">:</h1>
      </div>
      <div className=" flex items-start justify-center gap-2">
        <p className="flex flex-col items-center">
          <span className="timebox">{minutes < 10 ? `0${minutes}` : minutes}</span>
          <span className="text-[12px] md:text-[15px] font-medium text-text-secondary">Minutes</span>
        </p>

        <h1 className="text-text-primary font-bold text-[40px] ">:</h1>
      </div>
      <div className=" flex items-start justify-center gap-2">
        <p className="flex flex-col items-center">
          <span className="timebox">{seconds < 10 ? `0${seconds}` : seconds}</span>
          <span className="text-[12px] md:text-[15px] font-medium text-text-secondary">Seconds</span>
        </p>
      </div>
    </div>
  );
}

export default Time;
