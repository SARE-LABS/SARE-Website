import Image from "next/image";
import { CTRLLABS_LOGO } from "../../../../../public/images/pngs/png";

export const Nav = () => {
  return (
    <nav
      className={`bg-[#F3F4F6] flex w-full justify-between items-center h-[80px] md:px-16 md:py-12 px-4 py-4 sticky top-0 z-50`}
    >
      <div className="relative w-[92px] h-[48px] ">
        <Image
          src={CTRLLABS_LOGO}
          fill
          alt="CTRL-LABS"
          className="object-contain"
        />
      </div>
    </nav>
  );
};
