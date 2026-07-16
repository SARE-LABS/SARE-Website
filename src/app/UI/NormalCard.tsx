import Image from "next/image";
import { ArrowSlant, Kennedy } from "../../../public/images/images";
import Link from "next/link";

interface Dimension {
  dimen?: string;
}

function NormalCard({ dimen }: Dimension) {
  return (
    <div className={`relative w-full  ${dimen ?? ""}`}>
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
