import Image from "next/image";
import { ArrowSlant, Kennedy } from "../../../public/images/images";
import Link from "next/link";

function Card() {
  return (
    <div className="relative w-full h-[160px]">
      <Link
        href={`/`}
        className="group overflow-hidden flex justify-center items-center absolute p-[10px] rounded-full hover:bg-primary-blue transition-all ease-in-out duration-300 bg-background-disabled right-1 top-1 z-[100]"
      >
        <Image
          src={ArrowSlant}
          width={15}
          height={15}
          alt="Logo"
          className="group-hover:grayscale-100 transition-all ease-in-out duration-300"
        />
      </Link>
      <div className="relative w-full h-[160px] rounded-2xl   overflow-hidden  flex justify-items-end items-end ">
        <Image
          src={Kennedy}
          alt="Training session"
          fill
          className="object-cover "
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative inset-0 flex flex-col justify-between -4">
          <div className="flex flex-col items-center justify-center">
            <p className="text-white text-sm leading-3">
              Successful Training sessions
            </p>
            <h2 className="text-white text-3xl font-bold">10+</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
