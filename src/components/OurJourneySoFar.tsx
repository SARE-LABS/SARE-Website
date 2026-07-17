import Image from "next/image";
import OurJourney from "../app/UI/OurJourney";
import { Divider } from "../../public/images/images";

function OurJourneySoFar() {
  return (
    <div className="overflow-hidden pt-[32px] px-[24px] md:pt-[48px] md:px-[96px] gap-[32px] md:gap-[50px] bg-white flex flex-col items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-medium  leading-[120%] text-center">
          Our Journey so far
        </h2>
        <Image src={Divider} alt="" className="mt-2" />
      </div>
      <OurJourney />
    </div>
  );
}

export default OurJourneySoFar;
