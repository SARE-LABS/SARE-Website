"use client";

import Link from "next/link";
import Image from "next/image";
import Time from "../UI/Time";
import { Apply, ArrowSlant, Kennedy } from "../../../public/images/images";
import Card from "../UI/Card";
import CardLarge from "../UI/CardLarge";
import { useState } from "react";

function ApplicationHeaderTwo() {
    const [showApplicationInfo, setShowApplicationInfo] = useState(false);
  
    const handleCardClick = () => {
      setShowApplicationInfo(true);
    };
  return (
    <div className="hidden md:flex p-[2rem] md:px-[96px]  flex-col items-center justify-center text-center gap-4 overflow-hidden">
      <h1 className="text-text-primary font-bold text-[48px] leading-[120%] ">
        Ready to Make an Impact?
      </h1>
      <p className="text-text-primary text-[18px] leading-[120%] ">
        Join a network of innovators, collaborators, and changemakers driving
        real-world solutions.
      </p>

      <div className="grid grid-cols-4 gap-5 w-full overflow-hidden mt-[24px]">
        <div className="flex flex-row-reerse relative  w-[280px] h-[405px] rounded-[16px] bg-red-400">
          <CardLarge />
        </div>

        <div className="flex flex-col items-center justify-between w-full col-span-2">
          <div className="w-full flex flex-col items-center justify-center gap-4 mt- md:flexrow">
            <p className="text-[16px] text-text-primary leading-[148%]">
              Applications end in:
            </p>
            <Time />
          </div>
          <Link
            href={"/"}
            className="w-[80%] flex items-center justify-center gap-2 bg-primary-blue hover:bg-primary-blue-hover transition-all ease-in-out duration-300 font-bold text-[16px] text-white px-[10px] py-[15px] rounded-[35px]"
          >
            <Image src={Apply} width={15} height={15} alt="Logo" />
            <p>Start Application</p>
          </Link>
          <div className="w-full grid grid-cols-3 gap-5 ">
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

        <div className="flex flex-row-reerse relative w-[280px] h-[405px] rounded-[16px] bg-red-400">
          <CardLarge />
        </div>
      </div>
    </div>
  );
}

export default ApplicationHeaderTwo;
