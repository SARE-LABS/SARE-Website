import Image from "next/image";
import { Benefit } from "../../../public/data";
import HighlightHead from "../UI/props/HighlightHead";
import Card from "../UI/Card";
import CardLarge from "../UI/CardLarge";

function Benefits() {
  return (
    <div className="py-[24px] px-[2rem] ">
      <div className="flex items-start justify-start gap-[24px] flex-col">
        <div className="flex flex-col gap-[16px] w-[382px]">
          <div className="mb-[16px]">
            <HighlightHead title="Benefits of Joining" />
          </div>
          <h1 className="text-[36px] text-text-primary font-medium  leading-[120%]">
            Unlock Opportunities That Shape the Future of AgriTech
          </h1>
          <p className="text-[16px] text-text-primary leading-[148%]">
            From hands-on projects to industry connections, see why being part
            of SARE is a game-changer.
          </p>
          <div className="flex flex-col gap-[8px] items-start">
            {Benefit.map((benefit) => (
              <div
                key={benefit.id}
                className="flex items-start justify-center gap-2 "
              >
                <Image src={benefit.img} alt={benefit.description} />
                <p className="text-[18px] leading-[120%] text-text-primary">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full grid grid-cols-3 gap-5 overflow-hidden">
          <div className="col-span-3 relative">
            <CardLarge />
          </div>
          <div className="relative">
            <Card />
          </div>
          <div className="relative">
            <Card />
          </div>
          <div className="relative">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
