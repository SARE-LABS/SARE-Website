import Image from "next/image";
import { FutureOrientedStat } from "../../../public/data";

function FutureOrientedStats() {
  return (
    <section className="py-[24px] px-[2rem] overflow-hidden md:py-[48px] md:px-[96px] md:gap-[50px] bg-background-page flex flex-col items-center justify-center ">
      <h1 className="text-[64px] font-bold">Future Oriented Stats</h1>
      <div className="flex ">
        {FutureOrientedStat.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-center flex-col text-center text-accent-green"
          >
            <Image
              src={item.icon}
              alt={item.description}
              width={40}
              height={40}
            />

            <h3 className="md:text-[36px]  font-semibold">{item.figure}</h3>
            <p className="md:text-[16px]">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FutureOrientedStats;
