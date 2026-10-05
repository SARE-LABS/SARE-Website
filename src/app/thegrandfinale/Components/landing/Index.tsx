import { RegisterButton } from "../button/Register";
import { Timer } from "../timer/Index";
import { Robot } from "../../../../../public/images/images";
import { ShareButton } from "../button/Share";
import { Details } from "./Details";
import Image from "next/image";

export const Landing = () => {
  return (
    <div className="w-full h-max flex flex-col relative">
      <div className="w-full flex flex-col">
        <h1 className="text-[#1F2937] text-[36px] md:text-[48px] font-medium">
          The Grand Finale
        </h1>
        <small className="text-[#4B5563] text-[16px] md:text-[14px] font-normal">
          Bringing Everything Together
        </small>
      </div>
      <div className="w-full h-max min-h-[40px] flex justify-center items-center md:justify-between mt-4 flex-col gap-4 md:gap-0 md:flex-row ">
        <Timer />
        <div className="w-max h-max flex gap-4">
          <RegisterButton />
          <ShareButton />
        </div>
      </div>

      <div className="w-full h-max flex justify-between relative mt-24 md:mt-32">
        {/* Robot Icon sitting on top of the belts */}
        <div className="absolute -top-[192px] md:-top-[412px] left-1/2 -translate-x-1/2 w-[280px] md:w-[600px] h-auto z-10 pointer-events-none">
          <Image
            src={Robot}
            alt="Robot Icon"
            className="object-contain"
            priority
          />
        </div>
        <Details />
      </div>
    </div>
  );
};
