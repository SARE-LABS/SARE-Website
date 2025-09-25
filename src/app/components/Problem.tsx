import Image from "next/image";
import { ARIghtBlue, Tractor } from "../../../public/images/images";
import Glance from "./Glance";

function Problem() {
  return (
    <div className="">
      <div className="relative overflow-hidden py-[24px] px-[2rem] md:py-[48px] md:px-[96px] bg-white">
        <div className="flex items-start gap-5  flex-col md:flex-row">
          <span className="w-fit flex-shrink-0 whitespace-nowrap  flex items-center text-primary-blue rounded-[24px] px-[16px] py-[8px] transition-all ease-in-out duration-200 bg-highlight gap-3">
            <Image src={ARIghtBlue} alt=""></Image>
            <p>The Problem</p>
          </span>
          <h2 className="md:w-[%] text-[36px] leading-[120%] text-text-disabled font-medium md:text-right">
            Admist the advancement in agricultural technology, the prevalence of
            traditional farming methods, with thier inherent labour-intensive
            characteristics that hinder sustainable growth.
          </h2>
        </div>

        {/* <Image
          src={Tractor}
          alt=""
          className="absolute left-[60%] bottom-[-1%]"
        /> */}
      </div>

      {/* <Glance /> */}
    </div>
  );
}

export default Problem;
