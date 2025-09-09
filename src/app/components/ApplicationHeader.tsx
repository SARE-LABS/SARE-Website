import Link from "next/link";
import Image from "next/image";
import Time from "../UI/Time";
import { Apply, ArrowSlant, Kennedy } from "../../../public/images/images";
import StatCard from "../UI/StatCard";
import Card from "../UI/Card";
import CardLarge from "../UI/CardLarge";

function ApplicationHeader() {
  return (
    <div className="p-[2rem] flex flex-col items-center justify-center text-center gap-4 overflow-hidden">
      <h1 className="text-text-primary font-bold text-[48px] leading-[120%] ">
        Ready to Make an Impact?
      </h1>
      <p className="text-text-primary text-[18px] leading-[120%] ">
        Join a network of innovators, collaborators, and changemakers driving
        real-world solutions.
      </p>

      <div className="w-full flex flex-col items-center justify-center gap-4 mt-8 md:flex-row">
        <p className="text-[16px] text-text-primary leading-[148%]">
          Applications end in:
        </p>
        <Time />
      </div>

      <Link
        href={"/"}
        className="w-[80%] flex items-center justify-center gap-2 bg-primary-blue font-bold text-[16px] text-white p-[10px] rounded-[35px]"
      >
        <Image src={Apply} width={15} height={15} alt="Logo" />
        <p>Start Application</p>
      </Link>

      <div className="w-full grid grid-cols-3 gap-5 overflow-hidden">
       
        <div className="relative flex">
          <Card />
        </div>
        <div className="relative flex">
          <Card />
        </div>
        <div className="relative flex">
          <Card />
        </div>

        <div className="flex flex-row-reerse relative col-span-3 ">
          <CardLarge />
        </div>
        <div className="flex flex-row-reerse relative col-span-3 ">
          <CardLarge />
        </div>
      </div>
    </div>
  );
}

export default ApplicationHeader;
