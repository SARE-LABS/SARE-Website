import Link from "next/link";
import { Apply } from "../../../public/images/images";
import HighlightHead from "../UI/props/HighlightHead";
import Image from "next/image";
function Join() {
  return (
    <div className="py-[24px] px-[2rem] ">
      <div className=" flex flex-col gap-[16px] items-center justify-center text-center">
        <HighlightHead title="Join SARE" />
        <h1 className="text-[48px] font-medium text-text-primary leading-[120%]">
          Join the innovators who are creating real change.
        </h1>
        <p className="text-[16px] text-text-primary leading-[120%]">
          SARE members are building skills, creating opportunities, and driving
          impact—join SARE today to shape the future you envision.
        </p>
        <Link
          href={"/"}
          className="w-[80%] flex items-center justify-center gap-2 bg-primary-blue font-bold text-[16px] text-white px-[10px] py-[14px] rounded-[35px]"
        >
          <Image src={Apply} width={15} height={15} alt="Logo" />
          <p>Start Application</p>
        </Link>
      </div>
    </div>
  );
}

export default Join;
