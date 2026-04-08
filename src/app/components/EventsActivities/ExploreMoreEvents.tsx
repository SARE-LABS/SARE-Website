import Image from "next/image";
import Link from "next/link";
import { exploreCards } from "./data";
import { ARIghtBlue, ArrowRight } from "../../../../public/images/images";
export default function ExploreMoreEvents() {
  return (
    <section className="px-4 md:px-[76px] mt-12 md:mt-14">
      <div className="max-w-[1140px] mx-auto">
        <span className="inline-flex items-center gap-4 rounded-full px-3 py-1 bg-[#E0F2FE] text-[#67B5DC] text-[12px] font-medium">
        <Image src={ARIghtBlue} alt='' />  Explore more 
        </span>

        <div className="mt-4 rounded-[20px] bg-[#EAF0F6] p-4 md:p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {exploreCards.map((card) => (
              <div key={card.id}>
                <h3 className="mb-2 text-[24px] md:text-[30px] tracking-[-0.02em] leading-[105%] text-[#1F2937] font-semibold">
                  {card.title}
                </h3>
                <Link
                  href={card.href}
                  className="group block rounded-[14px] overflow-hidden relative"
                >
                  <div className="relative h-[280px]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                    <div className="absolute top-2 right-2 h-8 w-8 rounded-full bg-[#67B5DC] text-white flex items-center justify-center text-[16px]">
                      ↗
                    </div>
                    <p className="absolute bottom-2 left-2 text-white text-[12px]">
                      See the innovations we&apos;re building.
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
