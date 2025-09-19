import Image from "next/image";
import { ArrowSlant, Kennedy } from "../../../public/images/images";
import Link from "next/link";

interface Dimension {
  dimen?: string; 
}

function NormalCard({ dimen }: Dimension) {
  return (
    <div className={`relative w-full h-[100%] ${dimen ?? ""}`}>
      <Link
        href={`/`}
        className="group overflow-hidden flex justify-center items-center absolute p-[10px] rounded-full hover:bg-primary-blue transition-all ease-in-out duration-300 bg-background-disabled right-1 top-1 z-40"
      >
        <Image
          src={ArrowSlant}
          width={15}
          height={15}
          alt="Logo"
          className="group-hover:grayscale transition-all ease-in-out duration-300"
        />
      </Link>

      <div className="relative w-full h-[160px] md:h-full rounded-2xl overflow-hidden flex items-end">
        <Image
          src={Kennedy}
          alt="Training session"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
    </div>
  );
}

export default NormalCard;
