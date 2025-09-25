"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Apply, ARIghtUp, ArrowDown } from "../../../public/images/images";
import { Navigations } from "../../../public/data";

Navigations;
function NavMobile() {
  const pathname = usePathname();

  const isActive = (link: string) => pathname === link;
  const showIcon = (id: number, link: string) =>
    isActive(link) && [1, 2, 3, 5].includes(id);

  return (
    <div
      className={`md:hidden w-full p-4 max-h-[50px] flex items-center bg-white overflow-x-scroll no-scrollbar flex-nowrap 
    ${pathname === "/application" ? "hidden" : ""}`}
    >
      {Navigations.map((nav) => (
        <Link
          key={nav.id}
          href={nav.link}
          className={`flex items-center whitespace-nowrap justify-center mx-1  text-[16px] rounded-[24px] px-[20px] py-[8px] transition-all ease-in-out duration-200 
                 text-text-primary hover:text-primary-blue 
                 ${isActive(nav.link) ? "bg-highlight" : ""}`}
        >
          {/* Navigation Icon (only on specific IDs when active) */}
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

          {nav.id === 5 && (
            <Image src={ArrowDown} alt="Dropdown icon" className="ml-2" />
          )}
        </Link>
      ))}
    </div>
  );
}

export default NavMobile;
