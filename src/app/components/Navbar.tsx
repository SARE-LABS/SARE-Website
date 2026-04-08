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
import { ExploreSubNav, Navigations } from "../../../public/data";
import NavMobile from "../UI/NavMobile";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ApplicationInfo from "./ApplicationInfo";
import useCountdown from "../utils/useCountdown";
import { countdownDate } from "../UI/Time";

function Navbar() {
  const pathname = usePathname();
  const [isExploreDropdownOpen, setIsExploreDropdownOpen] = useState(false);
  const [showApplicationInfo, setShowApplicationInfo] = useState(false);
  const handleCardClick = () => setShowApplicationInfo(true);
  const handleClose = () => setShowApplicationInfo(false);
  const isActive = (link: string) => pathname === link;
  const isExploreActive =
    pathname === "/explore" ||
    ExploreSubNav.some((item) => item.link === pathname);
  const showIcon = (id: number, link: string) =>
    isActive(link) && [1, 2, 3, 5].includes(id);

  const { days, hours, minutes, seconds, expired } =
    useCountdown(countdownDate);
  const zeroLeft = days === 0 && hours === 0 && minutes === 0 && seconds === 0;

  const ApplyNowBtn = (
    <motion.button
      disabled={zeroLeft}
      onClick={handleCardClick}
      className={`flex items-center justify-center flex-shrink-0 whitespace-nowrap  gap-2  bg-primary-blue hover:bg-primary-blue-hover 
        transition-all ease-in-out duration-300 font-bold text-[16px] text-white p-[10px] rounded-[35px] cursor-pointer md:w-fit
        ${
          zeroLeft ? "opacity-50 cursor-not-allowed hover:bg-primary-blue" : ""
        }`}
    >
      <Image src={Apply} width={15} height={15} alt="Logo" />
      <p>Apply now</p>
    </motion.button>
  );

  return (
    <>
      {/* this form stays at root, not tied to layout */}
      <AnimatePresence>
        {showApplicationInfo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 bg-red-500 flex items-center justify-center z-100 `}
            onClick={handleClose}
          >
            <motion.div
              // initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-ft mx-4 flex justify-center"
            >
              <ApplicationInfo onClose={handleClose} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <nav
        className={`fixed top-0 left-0 right-0 z-[40] ${pathname === "/ibs2.0" ? "hidden" : ""}`}
      >
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
            {Navigations.map((nav) =>
              nav.id === 5 ? (
                <div
                  key={nav.id}
                  className="relative"
                  onMouseEnter={() => setIsExploreDropdownOpen(true)}
                  onMouseLeave={() => setIsExploreDropdownOpen(false)}
                >
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsExploreDropdownOpen((v) => !v)}
                      className={`flex items-center justify-center mx-4 text-[16px] rounded-[24px] px-[16px] py-[8px] pr-[44px] transition-all ease-in-out duration-200 
                      text-text-primary hover:text-primary-blue bg-blue-200 ${
                        pathname === "/ibs2.0" ? "hidden" : ""
                      }
                      ${isExploreActive ? "bg-highlight" : ""}`}
                    >
                      {showIcon(nav.id, nav.link) && (
                        <Image src={nav.icon} alt={nav.name} className="mr-2" />
                      )}
                      <span className="flex items-center flex-shrink-0 whitespace-nowrap">
                        <p
                          className={isExploreActive ? "text-primary-blue" : ""}
                        >
                          {nav.name}
                        </p>
                      </span>
                    </button>

                    <button
                      type="button"
                      aria-label="Toggle Explore menu"
                      className="absolute right-[22px] top-1/2 -translate-y-1/2"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsExploreDropdownOpen((v) => !v);
                      }}
                    >
                      <Image src={ArrowDown} alt="Dropdown icon" />
                    </button>
                  </div>

                  <AnimatePresence>
                    {isExploreDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full mt-2 w-[220px] rounded-[16px] bg-white border border-gray-200 p-2 z-[60]"
                      >
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
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={nav.id}
                  href={nav.link}
                  className={`flex items-center justify-center mx-4 text-[16px] rounded-[24px] px-[16px] py-[8px] transition-all ease-in-out duration-200 
                  text-text-primary hover:text-primary-blue pr-4 ${
                    pathname === "/ibs2.0" ? "hidden" : ""
                  }
                  ${isActive(nav.link) ? "bg-highlight" : ""}`}
                >
                  {showIcon(nav.id, nav.link) && (
                    <Image src={nav.icon} alt={nav.name} className="mr-2" />
                  )}
                  <span className="flex items-center flex-shrink-0 whitespace-nowrap ">
                    <p
                      className={isActive(nav.link) ? "text-primary-blue" : ""}
                    >
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

          <Link
            href="#"
            onClick={handleCardClick}
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
          {/* <div>{ApplyNowBtn}</div> */}
        </div>

        {/* <NavMarques /> */}
        <NavMobile />
      </nav>
    </>
  );
}

export default Navbar;
