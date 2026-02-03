import Image from "next/image";
import Link from "next/link";
import { Linkdln, logoTwo } from "../../../public/images/images";

function Footer() {
  const footerLinks = [
    {
      title: "About",
      links: ["About Us", "About", "About", "About", "About"],
    },
    {
      title: "Projects & Learning",
      links: ["About", "About", "About", "About", "About"],
    },
    {
      title: "Projects & Learning",
      links: ["About", "About", "About", "About", "About"],
    },
    {
      title: "Projects & Learning",
      links: ["About", "About", "About", "About", "About"],
    },
  ];

  return (
    <footer className="bg-white">
      {/* 2. Main Links Section */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-[48px] pb-12">
        {/* 
    Parent Grid: 
    - 1 column on mobile (items stack)
    - 5 columns on desktop (Logo takes 1, Nav takes 4)
  */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Logo Column: Centered on mobile, Left-aligned on large screens */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            <Image
              src={logoTwo}
              alt="SARE Logo"
              width={180}
              height={80}
              className="mb-6"
            />
            <p className="text-[16px] text-[#1F2937] leading-relaxed max-w-[320px] lg:max-w-none">
              Bringing together innovators in Agricultural & Environmental
              Engineering to create real-world impact
            </p>
          </div>

          {/* 
      Nav Columns Container:
      - Takes up the remaining 4 columns on large screens
      - grid-cols-2: 2 columns on mobile (fits links perfectly)
      - sm:grid-cols-4: 4 columns from tablet upwards
    */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-10 md:gap-8">
            {footerLinks.map((column, idx) => (
              <div key={idx} className="flex flex-col gap-4 md:gap-6">
                <h4 className="flex items-center gap-2 font-bold text-[#1E293B] text-[16px] md:text-[18px]">
                  <span className="text-[12px] font-normal">→</span>{" "}
                  {column.title}
                </h4>
                <ul className="flex flex-col gap-3 md:gap-4">
                  {column.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link
                        href="#"
                        className="text-[#64748B] text-[14px] md:text-[16px] hover:text-[#67B5DC] transition-colors whitespace-nowrap"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#64748B] text-[14px] md:text-[16px] text-center md:text-left">
            @ 2025 SARE Web Experience Team
          </p>

          {/* flex-wrap ensures icons don't break on very small screens */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {/* Social Icons */}
            {[1, 2, 3].map((_, i) => (
              <Link
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-[#F1F5F9] flex items-center justify-center text-gray-500 hover:bg-[#67B5DC] hover:text-white transition-all"
              >
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.6667 0H2.66667C1.19391 0 0 1.19391 0 2.66667V8.66667C0 10.1394 1.19391 11.3333 2.66667 11.3333H10.6667C12.1394 11.3333 13.3333 10.1394 13.3333 8.66667V2.66667C13.3333 1.19391 12.1394 0 10.6667 0ZM2.66667 1.06H10.6667C11.3772 1.06136 12.0017 1.53109 12.2 2.21333L7.17333 5.94C7.03557 6.07469 6.84879 6.1473 6.65622 6.14101C6.46365 6.13471 6.28201 6.05007 6.15333 5.90667L1.14667 2.22C1.34117 1.53982 1.95927 1.06811 2.66667 1.06ZM1.06 8.66667C1.06 9.554 1.77933 10.2733 2.66667 10.2733H10.6667C11.5514 10.2697 12.2667 9.55141 12.2667 8.66667V3.31333L7.73333 6.64667C7.44361 6.9164 7.06251 7.06645 6.66667 7.06667C6.25516 7.06011 5.86076 6.90093 5.56 6.62L1.06 3.28667V8.66667Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            ))}

            <Link
              href="https://www.instagram.com/sare_eng0/"
              className="w-12 h-12 rounded-full bg-[#67B5DC] flex items-center justify-center text-white hover:opacity-80 transition-all"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Link>

            <Link
              href="https://www.linkedin.com/company/society-of-agricultural-robotics-engineers/"
              className="w-10 h-10 rounded-full bg-[#F1F5F9] flex items-center justify-center text-gray-500 hover:bg-[#67B5DC] hover:text-white transition-all"
            >
              <Image
                src={Linkdln}
                alt="LinkedIn"
                width={16}
                height={16}
                className="opacity-60"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
