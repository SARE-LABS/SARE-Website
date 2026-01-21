import { RegisterButton } from "../button/Register"
import { Timer } from "../timer/Index"
import { GitHubIcon, VScodeIcon, DocumentIcon } from "../../assets/icons/icons"
import { ShareButton } from "../button/Share"
import { Details } from "./Details"
import Image from "next/image"

export const Landing = () => {
  return (
    <div className="w-full h-max flex flex-col relative">
      {/* Dummy images */}
      <div className="w-max absolute h-max left-[50%] hidden md:block top-[25%] scale-[0.7]">
        <Image src={GitHubIcon} alt="Placeholder" className="object-cover" />
      </div>
      <div className="w-max absolute h-max left-[50%] hidden md:block scale-[0.7]">
        <Image src={VScodeIcon} alt="Placeholder" className="object-cover" />
      </div>
      <div className="w-max absolute h-max left-[58%] hidden md:block top-[20%]">
        <Image src={DocumentIcon} alt="Placeholder" className="object-cover" />
      </div>

      <div className="w-full flex flex-col">
        <h1 className="text-[#1F2937] text-[36px] md:text-[48px] font-medium">How to GIT Started</h1>
        <small className="text-[#4B5563] text-[16px] md:text-[14px] font-normal">A beginners guide on the Easiest Way to Connect Your IDE to GitHub</small>
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
