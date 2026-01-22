import { RegisterButton } from "../button/Register"
import { Timer } from "../timer/Index"
import Fusion1Icon from "../../assets/images/Fusion360Logo.jpg"
import Fusion2Icon from "../../assets/images/Fusion2.webp"
import Fusion3Icon from "../../assets/images/Fusion3.png"
import { ShareButton } from "../button/Share"
import { Details } from "./Details"
import Image from "next/image"

export const Landing = () => {
  return (
    <div className="w-full h-max flex flex-col relative">
      {/* Dummy images */}
       <div className="w-24 absolute h-24 left-[50%] hidden md:block top-[35%] rotate-[-12deg]">
        <Image src={Fusion1Icon} alt="Placeholder" className="object-cover" />
      </div>
      <div className="w-24 absolute h-24 left-[50%] hidden md:block">
        <Image src={Fusion2Icon} alt="Placeholder" className="object-cover" />
      </div>
       <div className="w-24 absolute h-24 left-[58%] hidden md:block top-[20%] rotate-12">
        <Image src={Fusion3Icon} alt="Placeholder" className="object-cover" />
      </div>

      <div className="w-full flex flex-col">
        <h1 className="text-[#1F2937] text-[36px] md:text-[48px] font-medium">The Missing Link</h1>
        <small className="text-[#4B5563] text-[16px] md:text-[14px] font-normal">An Introduction to CAD Assemblies, Joints & Relations in Fusion 360</small>
      </div>
      <div className="w-full h-max min-h-[40px] flex justify-center items-center md:justify-between mt-4 flex-col gap-4 md:gap-0 md:flex-row ">
        <Timer/>
        <div className="w-max h-max flex gap-4">
          <RegisterButton/>
          <ShareButton/>
        </div>
      </div>
      <div className="w-full h-max flex justify-between mt-10">
        <Details/>
      </div>
    </div>
  )
}
