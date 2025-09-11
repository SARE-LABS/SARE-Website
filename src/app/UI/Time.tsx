"use client";
import useCountdown from "../utils/useCountdown";

export const countdownDate = "2025-09-11T08:47:59";

function Time() {
  const { days, hours, minutes, seconds, expired } =
    useCountdown(countdownDate);

  // if (expired) {
  //   return <p className="text-red-600 font-medium">SARE Application Closes!</p>;
  // }

  return (
    <div className="flex gap-2 text-lg font-bold text-primary-blue">
      <div className=" flex items-start justify-center gap-2">
        <span className="flex flex-col items-center">
          <p className="timebox">{days < 10 ? `0${days}` : days}</p>
          <p className="text-[12px] font-medium text-text-secondary">Days</p>
        </span>

        <h1 className="text-text-primary font-bold text-[40px] ">:</h1>
      </div>
      <div className=" flex items-start justify-center gap-2">
        <span className="flex flex-col items-center">
          <p className="timebox">{hours < 10 ? `0${hours}` : hours}</p>
          <p className="text-[12px] font-medium text-text-secondary">Hours</p>
        </span>

        <h1 className="text-text-primary font-bold text-[40px] ">:</h1>
      </div>
      <div className=" flex items-start justify-center gap-2">
        <span className="flex flex-col items-center">
          <p className="timebox">{minutes < 10 ? `0${minutes}` : minutes}</p>
          <p className="text-[12px] font-medium text-text-secondary">Minutes</p>
        </span>

        <h1 className="text-text-primary font-bold text-[40px] ">:</h1>
      </div>
      <div className=" flex items-start justify-center gap-2">
        <span className="flex flex-col items-center">
          <p className="timebox">{seconds < 10 ? `0${seconds}` : seconds}</p>
          <p className="text-[12px] font-medium text-text-secondary">Seconds</p>
        </span>
      </div>
    </div>
  );
}

export default Time;
