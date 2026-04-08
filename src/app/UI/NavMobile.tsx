"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ARIghtUp, ArrowDown } from "../../../public/images/images";
import { ExploreSubNav, Navigations } from "../../../public/data";
import { useState } from "react";

function NavMobile() {
  const pathname = usePathname();
  const [isExploreDropdownOpen, setIsExploreDropdownOpen] = useState(false);

  const isActive = (link: string) => pathname === link;
  const isExploreActive =
    pathname === "/explore" ||
    ExploreSubNav.some((item) => item.link === pathname);
  const showIcon = (id: number, link: string) =>
    isActive(link) && [1, 2, 3, 5].includes(id);

  return (
    <div
      className={`md:hidden w-full p-4 max-h-[50px] flex items-center bg-white overflow-x-scroll overflow-y-visible no-scrollbar flex-nowrap 
    ${pathname === "/application" ? "hidden" : ""}`}
    >
      {Navigations.map((nav) =>
        nav.id === 5 ? (
          <div key={nav.id} className="relative mx-1">
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsExploreDropdownOpen((v) => !v)}
                className={`flex items-center whitespace-nowrap justify-center text-[16px] rounded-[24px] px-[20px] py-[8px] pr-[44px] transition-all ease-in-out duration-200 
                     text-text-primary hover:text-primary-blue ${
                       isExploreActive ? "bg-highlight" : ""
                     }`}
              >
                {showIcon(nav.id, nav.link) && (
                  <Image src={nav.icon} alt={nav.name} className="mr-2" />
                )}
                <p className={isExploreActive ? "text-primary-blue" : ""}>
                  {nav.name}
                </p>
              </button>

              <button
                type="button"
                aria-label="Toggle Explore menu"
                className="absolute right-[14px] top-1/2 -translate-y-1/2"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsExploreDropdownOpen((v) => !v);
                }}
              >
                <Image src={ArrowDown} alt="Dropdown icon" />
              </button>
            </div>

            {isExploreDropdownOpen && (
              <div className="absolute left-0 top-full mt-2 w-[220px] rounded-[16px] bg-white border border-gray-200 p-2 z-[60]">
                {ExploreSubNav.map((item) => (
                  <Link
                    key={item.id}
                    href={item.link}
                    onClick={() => setIsExploreDropdownOpen(false)}
                    className={`block rounded-[12px] px-3 py-2 text-[14px] text-text-primary hover:bg-highlight transition-all ease-in-out duration-200 ${
                      pathname === item.link
                        ? "bg-highlight text-primary-blue"
                        : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : (
          <Link
            key={nav.id}
            href={nav.link}
            className={`flex items-center whitespace-nowrap justify-center mx-1 text-[16px] rounded-[24px] px-[20px] py-[8px] transition-all ease-in-out duration-200 
                 text-text-primary hover:text-primary-blue 
                 ${isActive(nav.link) ? "bg-highlight" : ""}`}
          >
            {showIcon(nav.id, nav.link) && (
              <Image src={nav.icon} alt={nav.name} className="mr-2" />
            )}

            <span className="flex items-center">
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
          </Link>
        ),
      )}
    </div>
  );
}

export default NavMobile;
