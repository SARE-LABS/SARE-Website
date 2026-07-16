import Image from "next/image";
import Link from "next/link";
import { CTRLLABS_LOGO } from "../../../public/images/pngs/png";

const links = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "About", href: "/" },
  { id: 3, name: "Sessions", href: "" },
  { id: 4, name: "Partners", href: "" },
  { id: 5, name: "Build along", href: "/build-along" },
];

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-[1.5rem] md:px-[3rem] py-[0.5rem] md:py-[0.7rem] bg-white">
      <Link href={"/"} className="relative w-[92px] h-[48px] ">
        <Image
          src={CTRLLABS_LOGO}
          fill
          alt="CTRL-LABS"
          className="object-contain"
        />
      </Link>

      <div className="hidden md:flex md:items-center justify-center md:gap-[16px]">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className={`md:px-[16px] md:py-[18px] text-text-primary`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <button className="bg-primary-blue text-white px-[1rem] py-[0.5rem] md:px-[1.75rem] md:py-[0.625rem] rounded-full flex items-center justify-center cursor-pointer">
        Join
      </button>
    </nav>
  );
}

export default Navbar;
