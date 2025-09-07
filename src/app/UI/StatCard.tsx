import Image from "next/image";
import { ArrowUpRight, Kennedy } from "../../../public/images/images";

function StatCard() {
  return (
    <div
      className="relative w-[125px] h-[160px] rounded-b-2xl rounded-tl-2xl  overflow-hidden shadow-lg
    "
    >
      {/* Background Image */}
      <Image
        src={Kennedy}
        alt="Training session"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative inset-0 flex flex-col justify-between pb-4">
        {/* Top right arrow button */}
        <div className="flex justify-end absolute top-0 right-0">
          <div className="w-[35px] h-[35px]  rounded-l-[15px] bg-white flex items-center justify-center shadow-md">
            {/* <Image src={ArrowUpRight} width={15} height={15} alt="Arrow" /> */}
          </div>
        </div>

        {/* Bottom text */}
        <div>
          <p className="text-white text-sm">Successful Training sessions</p>
          <h2 className="text-white text-3xl font-bold">10+</h2>
        </div>
      </div>
    </div>
  );
}

export default StatCard;
