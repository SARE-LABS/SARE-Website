import Image from "next/image";
import { FutureOrientedStat } from "../../../public/data";
import {
  ARIghtBlue,
  FutureOrientatetedStatsBg,
} from "../../../public/images/images";

function FutureOrientedStats() {
  return (
    <section
      className="min-h-[435.91px]"
      style={{
        backgroundImage: `linear-gradient(
      to right,
      rgba(103, 181, 220, 0.8),
      rgba(15, 202, 159, 0.8)
    ), url(${FutureOrientatetedStatsBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="py-[24px] px-[2rem] overflow-hidden md:py-[48px] md:px-[96px] md:gap-[50px]  flex flex-col items-center justify-center ">
        <span className="w-fit flex-shrink-0 whitespace-nowrap  flex items-center text-primary-blue rounded-[24px] px-[16px] py-[8px] transition-all ease-in-out duration-200 bg-highlight gap-3">
          <Image src={ARIghtBlue} alt=""></Image>
          <p>Future Oriented Stats</p>
        </span>

        <div className="md:grid grid-cols-3 gap-[24px]">
          {FutureOrientedStat.map((stat) => (
            <div key={stat.id}>
              <h1 className="font-bold text-white md:text-[58px] leading-[120%]">
                {stat.figure}
              </h1>
              <div className="w-full h-[2px] bg-background-page mt-3.5"></div>
              <div className="flex flex-col items-start mt-6">
                <h4 className="text-[24px] text-white font-medium leading-[120%]">
                  {stat.title}
                </h4>
                <p className="text-[16px] leading-[148%] text-white mt-2">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FutureOrientedStats;
