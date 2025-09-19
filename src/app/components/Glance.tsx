import Image from "next/image";
import { ARIghtBlue, User, Glances } from "../../../public/images/images";
import Link from "next/link";

function Glance() {
  return (
    <div className="">
      <div className="relative overflow-hidden py-[48px] px-[2rem] gap-[24px] flex flex-col md:flex-row items-center md:items-start justify-center md:py-[96px] md:px-[96px] bg-background-page">
        <div className="flex items-start gap-5  flex-col -[] m">
          <span className="w-fit flex-shrink-0 whitespace-nowrap  flex items-center text-primary-blue rounded-[24px] px-[16px] py-[8px] transition-all ease-in-out duration-200 bg-highlight gap-3">
            <Image src={ARIghtBlue} alt=""></Image>
            <p>Sare at a Glance</p>
          </span>
          <h2 className="md:w-[%] text-[36px] leading-[120%] text-text-primary font-medium ">
            From Problem to Progress. Our 5-Step Innovation Framework
          </h2>
          <p className="text-text-primary leading-[148%]">
            At SARE, we’ve built a proven process that transforms agricultural
            challenges into cutting-edge robotic solutions, ensuring innovation
            is not just an idea but a reality in the field. Through this
            framework, we tackle inefficiencies, reduce labor intensity, and
            pave the way for a smarter, more sustainable farming future.
          </p>

          <Link
            href={`/`}
            className="flex items-center justify-center gap-2 bg-primary-blue hover:bg-primary-blue-hover transition-all ease-in-out duration-300 border border-transparent font-bold text-[16px] text-white p-[10px] rounded-[35px] cursor-pointer md:w-fit"
          >
            <Image src={User} width={15} height={15} alt="Action icon" />
            <p>Get involved</p>
          </Link>
        </div>

        <div className="md:w-[100%] flex items-center justify-center rounded-[16px] bg-highlight select-none p-[16px]">
          <Image src={Glances} alt="" className="select-none" />
        </div>
      </div>
    </div>
  );
}

export default Glance;
