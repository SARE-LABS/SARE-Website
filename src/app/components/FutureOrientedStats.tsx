import Image from "next/image";
import { FutureOrientedStat } from "../../../public/data";

function FutureOrientedStats() {
  return (
    <section className="py-[24px] px-[2rem] overflow-hidden md:py-[48px] md:px-[96px] md:gap-[50px] bg-background-page flex flex-col items-center justify-center ">
      <h1 className="text-[40px] mb-[2rem] shrink-0 md:text-[64px] font-bold">
        Future Oriented Stats
      </h1>
      {/* <div className="flex flex-col md:flex-row"> */}
      <div className="grid grid-cols-4">
        {FutureOrientedStat.map((item) => (
          <div
            key={item.id}
            className={`flex items-start justify-center flex-col text- text-accent-green p-6 py-3 ${
              item.id == 1
                ? "md:col-span-2 md:bg-accent-green md:rounded-[16px]"
                : ""
            }`}
          >
            {/* <div className="flex item-center justify-center p-2 bg-red-300 rounded-full">
              <Image
                src={item.icon}
                alt={item.description}
                width={40}
                height={40}
                className=" w-[20px]"
              />
            </div> */}

            <h3 className="md:text-[66px] text-white font-semibold bg-red-400">
              {item.figure}
            </h3>
            <p className="md:text-[16px] text-white bg-amber-100">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FutureOrientedStats;
