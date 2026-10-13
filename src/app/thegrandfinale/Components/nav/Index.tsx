import Image from "next/image";
import Link from "next/link";
import { CTRLLABS_LOGO } from "../../../../../public/images/pngs/png";
import { SAREShortLogo } from "../../public/public";
import { grandFianle } from "../../../../../public/images/images";

export const Nav = () => {
  return (
    <nav className="bg-[#F3F4F6] flex w-full justify-between items-center h-[80px] md:px-24 px-4 sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-3 sm:gap-4 md:gap-5">
        <Image
          src={SAREShortLogo}
          alt="SARE Logo"
          className="h-10 md:h-12 w-auto object-contain"
          priority
        />
        <Image
          src={CTRLLABS_LOGO}
          alt="CTRL-LABS Logo"
          className="h-8 sm:h-9 md:h-10 w-auto object-contain"
          priority
        />
        <Image
          src={grandFianle}
          alt="The Grand Finale Logo"
          className="h-9 sm:h-10 md:h-11 w-auto object-contain"
          priority
        />
      </Link>
    </nav>
  );
};
