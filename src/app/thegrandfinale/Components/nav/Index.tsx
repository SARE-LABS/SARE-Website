import Image from "next/image";
import Link from "next/link";
import { CTRLLABS_LOGO } from "../../../../../public/images/pngs/png";

export const Nav = () => {
  return (
    <nav className="bg-[#F3F4F6] flex w-full justify-between items-center h-[80px] md:px-16 px-4 sticky top-0 z-50">
      <Link
        href="/"
        className="relative w-[110px] h-[52px] md:w-[125px] md:h-[56px] flex items-center"
      >
        <Image
          src={CTRLLABS_LOGO}
          fill
          priority
          alt="CTRL-LABS"
          className="object-contain object-left"
        />
      </Link>
    </nav>
  );
};
