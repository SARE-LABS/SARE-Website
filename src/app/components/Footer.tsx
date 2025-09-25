import Image from "next/image";
import Link from "next/link";
import { Linkdln, logoTwo, Mail } from "../../../public/images/images";

function Footer() {
  return (
    <div className="py-[24px] md:py-[48px] px-[2rem] md:px-[96px] bg-white">
      <div className="flex items-end justify-between border-b border-border pb-[24px]">
        <div className="">
          <Image src={logoTwo} alt="SARE Logo" width={200} height={100} />
          <p className="text-[12px] text-[#6B7280] md:w-full w-[280px] ">
            Bringing together innovators in Agricultural & Environmental
            Engineering to create real-world impact
          </p>
        </div>

        <div className="flex items-center gap-[5px]">
          <Link
            href="https://www.linkedin.com/company/society-of-agricultural-robotics-engineers/"
            target="_blank"
            className="group bg-primary-blue p-2 rounded-full cursor-pointer"
          >
            <Image
              src={Linkdln}
              alt="LinkedIn Logo"
              width={15}
              height={15}
              className="group-hover:invert-50 transition-all ease-in-out duration-300"
            />
          </Link>
          <Link href={`mailto:sagriculturalroboticsengineers@gmail.com`} className="group bg-primary-blue p-2 rounded-full cursor-pointer">
            <Image src={Mail} alt="Mail Logo" width={15} height={15} className="group-hover:invert-50 transition-all ease-in-out duration-300"  />
          </Link>
        </div>
      </div>
      <p className="text-center text-[14px] text-[#6B7280] pt-[16px]">
        @ 2025 SARE Web Experience Team
      </p>
    </div>
  );
}

export default Footer;
