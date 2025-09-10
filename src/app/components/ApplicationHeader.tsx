"use client";

import Image from "next/image";
import Time from "../UI/Time";
import { Apply } from "../../../public/images/images";
import Card from "../UI/Card";
import CardLarge from "../UI/CardLarge";
import { useState } from "react";
import ApplicationInfo from "./ApplicationInfo";

function ApplicationHeader() {
  const [showApplicationInfo, setShowApplicationInfo] = useState(false);

  const handleCardClick = () => {
    setShowApplicationInfo(true);
  };

  return (
    <>
      {/* Mobile layout */}
      <div className="md:hidden relative p-[2rem] flex flex-col items-center justify-center text-center gap-4 overflow-hidden">
        <h1 className="text-text-primary font-bold text-[48px] leading-[120%]">
          Ready to Make an Impact?
        </h1>
        <p className="text-text-primary text-[18px] leading-[120%]">
          Join a network of innovators, collaborators, and changemakers driving
          real-world solutions.
        </p>

        <div className="w-full flex flex-col items-center justify-center gap-4 mt-8">
          <p className="text-[16px] text-text-primary leading-[148%]">
            Applications end in:
          </p>
          <Time />
        </div>

        {/* Application Info shows when button clicked */}
        {showApplicationInfo && (
          <div className="mt-6 w-full">
            <ApplicationInfo />
          </div>
        )}

        <button
          onClick={handleCardClick}
          className="w-[80%] cursor-pointer flex items-center justify-center gap-2 bg-primary-blue hover:bg-primary-blue-hover transition-all ease-in-out duration-300 font-bold text-[16px] text-white px-[10px] py-[15px] rounded-[35px]"
        >
          <Image src={Apply} width={15} height={15} alt="Logo" />
          <p>Start Application</p>
        </button>

        <div className="w-full grid grid-cols-3 gap-5 overflow-hidden">
          <div className="relative flex">
            <Card />
          </div>
          <div className="relative flex">
            <Card />
          </div>
          <div className="relative flex">
            <Card />
          </div>

          <div className="flex relative col-span-3">
            <CardLarge />
          </div>
          <div className="flex relative col-span-3">
            <CardLarge />
          </div>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex p-[2rem] md:px-[96px] flex-col items-center justify-center text-center gap-4 overflow-hidden">
        <h1 className="text-text-primary font-bold text-[48px] leading-[120%]">
          Ready to Make an Impact?
        </h1>
        <p className="text-text-primary text-[18px] leading-[120%]">
          Join a network of innovators, collaborators, and changemakers driving
          real-world solutions.
        </p>

        <div className="grid grid-cols-4 gap-5 w-full overflow-hidden mt-[24px]">
          {/* Left big card */}
          <div className="flex relative w-[280px] h-[405px] rounded-[16px]">
            <CardLarge />
          </div>

          {/* Center section */}
          <div className="flex flex-col items-center justify-between w-full col-span-2">
            <div className="w-full flex flex-col items-center justify-center gap-4">
              <p className="text-[16px] text-text-primary leading-[148%]">
                Applications end in:
              </p>
              <Time />
            </div>

            {/* Application Info shows when button clicked */}
            {showApplicationInfo && (
              <div className="mt-6 w-full flex justify-center">
                <ApplicationInfo />
              </div>
            )}

            <button
              onClick={handleCardClick}
              className="w-[80%] flex items-center justify-center gap-2 bg-primary-blue hover:bg-primary-blue-hover transition-all ease-in-out duration-300 font-bold text-[16px] text-white px-[10px] py-[15px] rounded-[35px]"
            >
              <Image src={Apply} width={15} height={15} alt="Logo" />
              <p>Start Application</p>
            </button>

            <div className="w-full grid grid-cols-3 gap-5 mt-6">
              <div className="relative flex">
                <Card />
              </div>
              <div className="relative flex">
                <Card />
              </div>
              <div className="relative flex">
                <Card />
              </div>
            </div>
          </div>

          {/* Right big card */}
          <div className="flex relative w-[280px] h-[405px] rounded-[16px]">
            <CardLarge />
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplicationHeader;
