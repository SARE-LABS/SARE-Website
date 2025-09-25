"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Apply,
  ARIghtUp,
  ArrowDown,
  logoOne,
  logoTwo,
  User,
} from "../../../public/images/images";
import { Navigations } from "../../../public/data";
import NavMarques from "../UI/NavMarques";
import NavMobile from "../UI/NavMobile";

function Navbar() {
  const pathname = usePathname();

  const isActive = (link: string) => pathname === link;
  const showIcon = (id: number, link: string) =>
    isActive(link) && [1, 2, 3, 5].includes(id);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[50]">
      <div className="flex items-center justify-between py-[.2rem] px-[.5rem] md:px-[76px] bg-white md:min-w-[81px]">
        <Link href="/">
          <Image
            src={logoOne}
            width={54}
            height={48}
            alt="Logo"
            className="md:hidden"
          />
          <Image
            src={logoTwo}
            width={200}
            height={48}
            alt="Logo"
            className="hidden md:block"
          />
        </Link>

        <div className="hidden md:flex items-center justify-center">
          {Navigations.map((nav) => (
            <Link
              key={nav.id}
              href={nav.link}
              className={`flex items-center justify-center mx-4 text-[16px] rounded-[24px] px-[16px] py-[8px] transition-all ease-in-out duration-200 
                text-text-primary hover:text-primary-blue  ${
                  pathname === "/application" ? "hidden" : ""
                }
                ${isActive(nav.link) ? "bg-highlight" : ""}`}
            >
              {/* Navigation Icon (only on specific IDs when active) */}
              {showIcon(nav.id, nav.link) && (
                <Image src={nav.icon} alt={nav.name} className="mr-2" />
              )}

              <span className="flex items-center flex-shrink-0 whitespace-nowrap ">
                <p className={isActive(nav.link) ? "text-primary-blue" : ""}>
                  {nav.name}
                </p>

                {nav.id === 4 && (
                  <Image
                    src={ARIghtUp}
                    height={16}
                    width={16}
                    alt="External link icon"
                    className="ml-2"
                  />
                )}
              </span>

              {nav.id === 5 && (
                <Image src={ArrowDown} alt="Dropdown icon" className="ml-2" />
              )}
            </Link>
          ))}
        </div>

        <Link
          href="#apply-section"
          className="flex items-center justify-center flex-shrink-0 whitespace-nowrap  gap-2  bg-primary-blue hover:bg-primary-blue-hover 
        transition-all ease-in-out duration-300 font-bold text-[16px] text-white p-[10px] rounded-[35px] cursor-pointer md:w-fit"
        >
          <Image
            src={pathname !== "/application" ? User : Apply}
            width={15}
            height={15}
            alt="Action icon"
          />
          <p>{pathname !== "/application" ? "Get involved" : "Apply now"}</p>
        </Link>
      </div>

      <NavMarques />
      <NavMobile />
    </nav>
  );
}

export default Navbar;
