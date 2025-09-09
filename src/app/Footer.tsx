import Image from "next/image";
import { Linkdln, logoTwo, Mail } from "../../public/images/images";

function Footer() {
  return (
    <div className="py-[24px] px-[2rem] ">
      <div className="flex items-end justify-between border-b border-border pb-[24px]">
        <div className="">
          <Image src={logoTwo} alt="SARE Logo" width={200} height={100} />
          <p className="text-[14px] text-[#6B7280] max-w-[300px] ">
            Bringing together innovators in Agricultural & Environmental
            Engineering to create real-world impact
          </p>
        </div>

        <div className="flex items-center gap-[8px]">
          <div className="bg-primary-blue p-2 rounded-full cursor-pointer">
            <Image src={Linkdln} alt="LinkedIn Logo" width={20} height={20} />
          </div>
          <div className="bg-primary-blue p-2 rounded-full cursor-pointer">
            <Image src={Mail} alt="Mail Logo" width={20} height={20} />
          </div>
        </div>
      </div>
      <p className="text-center text-[14px] text-[#6B7280] pt-[16px]">
        @ 2025 SARE Web Experience Team
      </p>
    </div>
  );
}

export default Footer;
