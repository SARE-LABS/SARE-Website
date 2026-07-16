"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export const ProjectsHero = () => {
  const router = useRouter();

  return (
    <section className="  px-[24px] py-[48px] md:px-[48px] md:py-[96px]">
      <div className="relative min-h-[px] md:min-h-[px] my-[48px] rounded-xl overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/images/projectHero-mobile.png"
            alt="Projects Hero Mobile Image"
            fill
            priority
            className="object-full"
            sizes="100vw"
          />
          {/* <div className="absolute inset-0 bg-black/20" aria-hidden /> */}
        </div>
        <div className="absolute inset-0 hidden md:block">
          <Image
            src="/images/projectHero.png"
            alt="Projects Hero Image"
            fill
            priority
            className="object-full"
            sizes="100vw"
          />
        </div>
        {/* Overlay Content */}
        <div className="relative z-10 px-6 py-10 md:px-[48px] md:py-[64px] flex flex-col gap-6 bg-transparent text-white min-h-[520px] md:min-h-0">
          <button
            type="button"
            className="rounded-full px-4 py-2 bg-gradient-to-r from-[#67B5DC]/10 to-[#E0F2FE]/10 text-[#67b5dc] font-medium text-[18px] flex items-center w-max hover:from-[#67B5DC]/20 hover:to-[#E0F2FE]/20 transition"
          >
            <svg
              width="7"
              height="6"
              viewBox="0 0 7 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.86667 2.47921L3.53333 0.14588C3.4065 0.0196462 3.22196 -0.0293361 3.04923 0.0173844C2.87649 0.0641048 2.7418 0.19943 2.69589 0.372384C2.64999 0.545339 2.69984 0.729646 2.82667 0.85588L4.30333 2.32921H0.5C0.223858 2.32921 0 2.55307 0 2.82921C0 3.10536 0.223858 3.32921 0.5 3.32921H4.30333L2.82667 4.80255C2.68385 4.94554 2.64116 5.16044 2.71848 5.34716C2.79579 5.53388 2.97791 5.6557 3.18 5.65588C3.31418 5.65389 3.44177 5.59732 3.53333 5.49921L5.86667 3.16588C6.06164 2.97067 6.06164 2.65443 5.86667 2.45921V2.47921Z"
                fill="#67B5DC"
              />
            </svg>

            <span className="ml-2">Our Projects</span>
          </button>

          <h1 className="text-[32px] md:text-[64px] max-w-[700px] font-bold leading-tight">
            We Build Robots That Shape the Future
          </h1>

          <p className="text-base md:text-[20px] max-w-[700px]">
            Our community-driven build sessions unite innovators to brainstorm,
            prototype, and create real-world robotic solutions.
          </p>

          <button
            onClick={() => router.push("/projects")}
            className="font-medium text-base md:text-[18px] flex items-center w-max mt-4 border border-white p-4 md:p-[16px] rounded-full hover:bg-white/20 transition cursor-pointer"
          >
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.75 6.55V2.7C16.7227 1.20078 15.4995 -0.000247751 14 3.83352e-08H6C4.50053 -0.000247751 3.27726 1.20078 3.25 2.7V3.15C1.34434 3.62617 0.00551041 5.33576 0 7.3V16.3C0.00549833 18.667 1.92298 20.5845 4.29 20.59H15.73C18.0892 20.5735 19.9946 18.6593 20 16.3V10.7C19.9945 8.73576 18.6557 7.02617 16.75 6.55ZM6 1.45H14C14.6904 1.45 15.25 2.00964 15.25 2.7V6.41H11.7C11.4736 6.41 11.29 6.22644 11.29 6C11.29 4.34315 9.94685 3 8.29 3H4.75V2.7C4.75 2.00964 5.30964 1.45 6 1.45ZM15.73 19.3C17.3869 19.3 18.73 17.9569 18.73 16.3L18.7 10.7C18.7 9.04315 17.3569 7.7 15.7 7.7H11.7C10.7611 7.7 10 6.93888 10 6C10.0001 5.54389 9.81685 5.10687 9.49152 4.78719C9.16619 4.4675 8.72604 4.29195 8.27 4.3H4.27C2.61315 4.3 1.27 5.64315 1.27 7.3V16.3C1.27 17.9569 2.61315 19.3 4.27 19.3H15.73Z"
                fill="white"
              />
            </svg>

            <span className="ml-2">Explore Projects</span>
          </button>
        </div>
        {/* <button
          className="w-[50px] h-[38px] md:w-[54px] md:h-[44px] bg-[#67B5DC] absolute bottom-0 flex items-center justify-center rounded-full right-0 md:right-0 text-black z-20 cursor-pointer transition-all "
          onClick={() => router.push("/projects")}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.0758 8.11164C7.79966 8.11164 7.5758 7.88778 7.5758 7.61164V1.52497H1.4958C1.21966 1.52497 0.995798 1.30111 0.995798 1.02497C0.995798 0.748829 1.21966 0.524971 1.4958 0.524971H8.08247C8.21421 0.522577 8.34144 0.572989 8.4358 0.664971C8.53124 0.760277 8.58413 0.890101 8.58247 1.02497V7.61164C8.58433 7.74597 8.53133 7.87526 8.4357 7.96963C8.34007 8.064 8.2101 8.11528 8.0758 8.11164Z"
              fill="#FAFBFC"
            />
            <path
              d="M1.00247 8.60497C0.870717 8.60737 0.743486 8.55695 0.649132 8.46497C0.553444 8.37096 0.499544 8.24245 0.499544 8.1083C0.499544 7.97416 0.553444 7.84565 0.649132 7.75164L7.72913 0.671638C7.85378 0.537869 8.0415 0.482805 8.21866 0.528048C8.39581 0.57329 8.53415 0.711623 8.57939 0.888779C8.62463 1.06593 8.56957 1.25366 8.4358 1.3783L1.3558 8.46497C1.26027 8.55512 1.13382 8.60523 1.00247 8.60497Z"
              fill="#FAFBFC"
            />
            <path
              d="M8.0758 8.61164C7.52351 8.61164 7.0758 8.16392 7.0758 7.61164V2.02497H1.4958C0.943514 2.02497 0.495798 1.57726 0.495798 1.02497C0.495798 0.472687 0.943514 0.0249713 1.4958 0.0249713H8.08913C8.356 0.0194671 8.61356 0.123056 8.8023 0.311798C8.99105 0.500541 9.09464 0.758106 9.08913 1.02497V7.61164C9.08916 7.87918 8.98197 8.13558 8.79154 8.3235C8.60111 8.51143 8.34332 8.61521 8.0758 8.61164Z"
              fill="#FAFBFC"
            />
            <path
              d="M1.00247 9.10497C0.738009 9.10799 0.483414 9.00471 0.295798 8.8183C0.106486 8.63054 0 8.37494 0 8.1083C0 7.84167 0.106486 7.58607 0.295798 7.3983L7.3758 0.318305C7.62509 0.050767 8.00054 -0.059361 8.35485 0.0311239C8.70916 0.121609 8.98583 0.398275 9.07631 0.752586C9.1668 1.1069 9.05667 1.48234 8.78913 1.73164L1.70913 8.8183C1.51989 9.00223 1.26636 9.10508 1.00247 9.10497Z"
              fill="#FAFBFC"
            />
          </svg>
        </button> */}
      </div>
    </section>
  );
};
