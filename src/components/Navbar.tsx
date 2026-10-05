"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { logoOne, logoTwo } from "../../public/images/images";
import NavLinks from "./NavLinks";
import ApplyButton from "./ApplyButton";
import ApplicationModal from "./ApplicationModal";
import NavMobile from "../app/UI/NavMobile";

function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [showApplicationInfo, setShowApplicationInfo] = useState(false);

  if (pathname.startsWith("/ctrl")) return null;

  return (
    <>
      <ApplicationModal
        isOpen={showApplicationInfo}
        onClose={() => setShowApplicationInfo(false)}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-[100] ${
          pathname === "/ibs2.0" ? "hidden" : ""
        }`}
      >
        <div className="flex items-center justify-between py-[.2rem] px-2 md:px-[76px] bg-white">
          {/* Logo */}
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

          {/* Desktop Nav */}
          <NavLinks pathname={pathname} open={open} setOpen={setOpen} />

          {/* CTA */}
          {/* <ApplyButton
            pathname={pathname}
            onClick={() => setShowApplicationInfo(true)}
          /> */}
        </div>

        <NavMobile />
      </nav>
    </>
  );
}

export default Navbar;
