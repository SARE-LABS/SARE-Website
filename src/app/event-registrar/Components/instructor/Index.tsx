import Image from "next/image";
import InstructorImage from "../../assets/images/Instructor.jpg"; // Placeholder for instructor image
import { Social } from "./Social";
export const Instructor = () => {
  return (
    <div className={`mt-16 flex flex-col items-center justify-center w-full gap-2`}>
      <div className="flex items-center justify-between relative mb-4">
        <h1 className=" w-max font-medium text-[28px] before:w-[75%] before:h-[4px] before:rounded-full before:bg-[#67B5DC] relative before:absolute before:top-[100%]">
          The Instructor
        </h1>
      </div>
      <div className="w-full h-max flex flex-col md:flex-row gap-4 justify-center items-center">
        <div className="w-full md:w-[300px] h-[300px] flex justify-center items-center rounded-lg overflow-hidden">
          <Image src={InstructorImage} alt="Instructor" className="w-full h-auto object-contain" />
        </div>
        <div className="w-full md:w-[400px] h-max flex flex-col gap-4">
          <div className="flex flex-col">
            <h1 className="text-[28px] font-normal">Obikoya Adebayo</h1>
            <div className="flex gap-1 text-[14px]">
              <span className="font-medium">Backend Engineer</span>
              <span className="text-[#67B5DC] font-light">
                <a href="https://www.linkedin.com/company/postpaddy/">@Postpaddy</a>
              </span>
            </div>
          </div>
          <div className="">
            <Social />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[16px] text-[#4B5563] font-normal">
              “I see GitHub as a diary for your code — it tells the story of every change, every idea, every version. Once you connect it to your IDE, you stop fearing it and start flowing with it”
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
