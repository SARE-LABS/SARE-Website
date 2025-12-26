import Image from "next/image";
import { Map } from "../../../public/images/images";

function Social() {
  return (
    <div className=" w-full overflow-hidden mt-[30px]">
      <h1 className="md:text-[64px] font-bold text-center">Social Media </h1>

      <div className="bg-sare-gradient md:grid grid-cols-2 py-[24px] px-[2rem] overflow-hidden md:py-[48px]">
        <div>
          <h3 className="md:text-[24px] text-[#FAFAFA] mb-3.5 font-medium">
            Dept. of Agric. & ENvr. Engineering, University of Ibadan, Ibadan,
            Oyo State
          </h3>
          <Image src={Map} alt="Map" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Social;
