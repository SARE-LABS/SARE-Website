import Image from "next/image";
import Link from "next/link";

const EXPLORE_ITEMS = [
  {
    title: "Our Projects",
    image: "/images/projectexcos.png", // Replace with your image paths
    link: "/projects",
    description: "See the innovations we're building.",
  },
  {
    title: "SARE Blog",
    image: "/images/projectexcos.png",
    link: "/blog",
    description: "See the innovations we're building.",

  },
  {
    title: "Partnerships",
    image: "/images/projectexcos.png",
    link: "/partnerships",
    description: "See the innovations we're building.",

  },
  {
    title: "SARE Closet",
    image: "/images/projectexcos.png",
    link: "/closet",
    description: "See the innovations we're building.",

  },
];

export const ExploreSection = () => {
  return (
    <section className="px-6 md:px-[48px] py-[64px] bg-white">
      {/* Top Tag */}
      <div className="mb-10">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#E0F2FE] text-[#67B5DC] rounded-full text-sm font-medium">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14m-7-7 7 7-7 7" />
          </svg>
          Explore more
        </span>
      </div>

      {/* Main Rounded Container */}
      <div className="bg-[#F1F5F9]/60 rounded-[40px] md:rounded-[56px] p-6 md:p-[48px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {EXPLORE_ITEMS.map((item, index) => (
            <div key={index} className="flex flex-col">
              {/* Title above image */}
              <h3 className="text-[28px] md:text-[36px] font-bold text-[#1E293B] mb-6 tracking-tight">
                {item.title}
              </h3>
              
              {/* Image Card */}
              <Link href={item.link} className="relative group block overflow-hidden rounded-[24px]">
                <div className="relative aspect-[3/5] w-full transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Action Button (Top Right) */}
                  <div className="absolute top-0 right-0 z-10 w-12 h-10 bg-[#67B5DC] rounded-full flex items-center justify-center text-white shadow-lg transition-all group-hover:scale-110">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  {/* Optional Bottom Description Overlay (First Card) */}
                  {item.description && (
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                      <p className="text-white hidden group-hover:block text-[16px] md:text-[18px] font-medium leading-snug">
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};