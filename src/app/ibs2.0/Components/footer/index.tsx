import Image from "next/image"
import { Social } from "./Socials"
import { SAREShortLogo } from "../../public/public"

export const Footer = () => {
  return (
    <div className="w-full h-max flex flex-col items-center justify-center gap-2 md:px-16 px-4 py-8 bg-[#F3F4F6]">
      <div>
        <Image src={SAREShortLogo} alt="" className="w-[10rem] md:w-[10rem]" />
      </div>
      <div>
        <h1 className="font-medium w-full md:w-max text-[24px] text-wrap text-center md:text-[28px] before:w-[75%] md:before:w-[110%] flex justify-center before:h-[4px] before:rounded-full before:bg-[#67B5DC] relative before:absolute before:top-[100%]">
          The Society of Agricultural Robotics Engineers
        </h1>
      </div>
      <div className="w-full h-max flex flex-col items-center justify-center text-justify md:text-center mt-2">
        <p className="text-[#1F2937] text-[14px] font-normal">
          SARE (Society of Agricultural Robotics Engineers) is a community of passionate problem-solvers driven by a shared interest in agriculture, environmental engineering, and robotics. The society exists to explore and develop innovative, tech-powered solutions to real agricultural challenges — with a focus on building efficient, locally-adapted machines and robotic systems that can transform farming practices across Nigeria and Africa.
        </p>
      </div>
      <div className="w-full h-max flex justify-center items-center mt-4">
        <Social />
      </div>
      <div className="w-full h-max flex justify-center items-center mt-4">
        <p className="text-[#1F2937] text-[12px] font-normal">
          Ⓒ Society of Agricultural Robotics Engineers 2025
        </p>
      </div>
    </div>
  )
}
