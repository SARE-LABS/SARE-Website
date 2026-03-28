import Image from "next/image";
import OurJourney from "../UI/OurJourney";
import { Divider } from "../../../public/images/images";

function OurJourneySoFar() {
  return (
    <div className="overflow-hidden md:pt-[48px] md:px-[96px] md:gap-[50px] bg-white hidden md:flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center justify-center">
        <h3 className="font-medium md:text-[36px] leading-[120%]">
          Our Journey so far
        </h3>
        <Image src={Divider} alt=""/>
      </div>
      <OurJourney />
    </div>
  );
}

export default OurJourneySoFar;
