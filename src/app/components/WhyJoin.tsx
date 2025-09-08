import Image from "next/image";
import { ArrowSlant, ExcosFrame } from "../../../public/images/images";
import Link from "next/link";
import { Why } from "../../../public/data";
import HighlightHead from "../UI/props/HighlightHead";

function WhyJoin() {
  return (
    <div className="py-[24px] px-[2rem] ">
      <div className="flex flex-col items-center justify-center text-center gap-[16px]">
        <HighlightHead title="Why Join SARE?" />

        <h1 className="text-[36px] text-text-primary font-bold leading-[120%] w-[382px]">
          For Visionaries, Innovators, and Problem Solvers
        </h1>

        <p className="text-[16px] text-text-primary leading-[148%] w-[382px]">
          SARE is more than a community—it&apos;s a movement to transform
          agriculture through tech. If you&apos;re passionate about robotics,
          automation, and solving real challenges, this is where your ideas come
          to life.
        </p>

        <div className="w-full flex flex-col items-center justify-center gap-[16px]">
          {Why.map((item) => (
            <div className="relative bg-highlight p-[16px] w-[382px] h-[364px] rounded-[16px] gap-[8px] flex flex-col items-center justify-center ">
              <Link
                href={item.link}
                className="group overflow-hidden flex justify-center items-center absolute p-[10px] rounded-full hover:bg-primary-blue transition-all ease-in-out duration-300 bg-highlight right-5 top-6 z-[100]"
              >
                <Image
                  src={ArrowSlant}
                  width={15}
                  height={15}
                  alt="Logo"
                  className="group-hover:grayscale-100 transition-all ease-in-out duration-300"
                />
              </Link>
              <div className="w-full h-[280px] bg-red-300 rounded-[16px]">
                <Image
                  src={item.img}
                  alt="Excos Frame"
                  className="object-cover rounded-[16px] contain w-full h-full"
                />
              </div>
              <p className="text-[18px] text-text-primary leading-[120%] text-left">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyJoin;
