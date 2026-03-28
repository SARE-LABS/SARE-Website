import Image from "next/image";
import { social } from "../../../public/data";
import HighlightHead from "../UI/props/HighlightHead";
import Link from "next/link";
import { Plus } from "lucide-react";

function Social() {
  return (
    <section className="py-[24px] md:py-[48px] px-[2rem] md:px-[96px] w-full overflow-hidden">
      <div className="flex flex-col gap-[48px] items-center">
        <div className="w-[382px] md:w-full flex flex-col gap-[16px] items-center text-center">
          <HighlightHead title="Our Socials" />
          <h1 className="text-[32px] font-medium text-text-primary leading-[120%]">
            Follow Our Official Pages
          </h1>
          <p className="text-text-primary text-[16px] leading-[148%]">
            Weekly updates from conferences, events and interviews.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[12px] md:gap-[20px] w-full">
          {social.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-start gap-1 w-full"
            >
              <h4 className="mobileH4 md:text-[24px]">{item.name}</h4>

              <div
                className={`flex items-center justify-center bg-[#3B82F6]/10 rounded-[16px] py-[10.5px] px-[6px] w-full aspect-square lg:aspect-[276/256]`}
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  className="w-[60%] h-[60%] object-contain"
                />
              </div>

              <Link
                href={item.url}
                className="border-2 group bg-transparent hover:bg-primary-blue transition-colors duration-300 ease-in-out border-primary-blue flex items-center justify-center gap-1 rounded-full w-full mt-3 py-[6px] px-[12px]"
              >
                <p className="text-[12px] md:text-[14px] text-primary-blue group-hover:text-white transition-all duration-300 ease-in-out py-1.5">
                  {item.action}
                </p>
                <Plus
                  size={16}
                  className="text-primary-blue group-hover:text-white transition-colors duration-300 ease-in-out"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Social;
