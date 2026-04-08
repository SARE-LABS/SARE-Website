import Image from "next/image";
import { heroGallery } from "./data";

export default function EventsHero() {
  return (
    <section className="px-4 md:px-[76px] pt-6 md:pt-10">
      <div className="relative h-[250px] md:h-[340px] overflow-hidden rounded-[22px]">
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4">
          {heroGallery.map((image, index) => (
            <div key={index} className="relative">
              <Image
                src={image}
                alt="SARE event"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
                priority={index < 2}
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-[34px] md:text-[58px] font-bold leading-[100%] tracking-[-0.02em]">
            EVENTS & ACTIVITIES
          </h1>
          <p className="mt-3 max-w-[760px] text-white/95 text-[14px] md:text-[20px] leading-[145%]">
            Bringing together students, innovators, and leaders in Agricultural
            & Environmental Engineering to create real-world impact.
          </p>
        </div>
      </div>
    </section>
  );
}
