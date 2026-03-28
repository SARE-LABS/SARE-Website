import Link from "next/link";
import { buildAlong } from "./data";
import { Share2, UserPlus } from "lucide-react";
import Image from "next/image";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const build = buildAlong.find((build) => build.slug === slug);
  return (
    <div className="py-[24px] px-[2rem] overflow-hidden md:py-[48px] md:px-[96px] mt-[49.5px] md:mt-[99px] bg-background-page flex flex-col items-start">
      <span className="bg-highlight text-primary-blue py-[8px] px-[16px] text-[16px] rounded-full font- flex items-center justify-center gap-2 w-fit">
        Project Description
      </span>
      <div className="md:my-[48px] flex flex-col items-start w-full">
        <div className="flex items-end justify-between w-full ">
          <div className="flex flex-col items-start gap-">
            <h1 className={`md:text-[64px] font-bold leading-[120%]`}>
              {build?.name}
            </h1>
            <p className="md:text-[20px] text-primary-blue-hover font-normal">
              {build?.subTitle}
            </p>
          </div>

          <div className="flex">
            <Link
              href={`/`}
              className="flex items-center justify-center gap-3 px-[24px] py-[16px] border-2 border-primary-blue rounded-full text-primary-blue hover:text-white hover:bg-primary-blue transition-all duration-300 ease-in-out group"
            >
              <Share2
                strokeWidth={1.75}
                className="text-primary-blue group-hover:text-white"
              />
              <p>Share</p>
            </Link>
          </div>
        </div>

        <div className="w-full text-text-primary md:text-[16px] leading-[148%] tracking-[0%] font-normal md:mt-[24px] flex-col flex items-start md:gap-[16px]">
          <p>{build?.paragraphOne}</p>
          <p>{build?.paragraphTwo}</p>
        </div>

        <div className="md:mt-[24px] flex items-center gap-5">
          {build?.category.map((index) => (
            <span className="flex items-center justify-center gap-3 px-[16px] py-[8px] border border-primary-blue rounded-full text-black md:text-[14px]">
              {index}
            </span>
          ))}
        </div>

        <div className="w-full rounded-[24px] md:my-[48px] relative">
          {build?.mainImage && (
            <Image
              src={build.mainImage}
              alt={build.name}
              className="object-cover w-full rounded-[24px]"
            />
          )}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-[48px] w-full">
        <div className="col-span-3 w-full bg-red-40 flex flex-col items-start gap-[48px]">
          <div className="bg-white rounded-[24px] flex flex-col w-full gap-[24px] p-[24px]">
            <h3 className="md:text-[36px] text-text-primary leading-[120%]">
              Components
            </h3>
            <div className="grid md:grid-cols-3 gap-[24px]">
              {build?.components.map((component) => (
                <div className="border border-text-disabled md:p-[16px] rounded-[24px] flex flex-col items-start gap-3">
                  <Image
                    src={component.image}
                    alt={component.componentName}
                    className="rounded-[24px] flex items-center justify-center"
                  />
                  <div className="text-text-primary gap-[8px] flex flex-col items-start">
                    <h5 className="md:text[14px] font-medium">
                      {component.componentName}
                    </h5>
                    <h4 className="md:text-[24px] font-medium">
                      {component.code}
                    </h4>
                    <p className="md:text-[13px]">{component.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[24px] flex flex-col w-full gap-[24px] p-[24px]">
            <h3 className="md:text-[36px] text-text-primary leading-[120%]">
              Apps & Platforms
            </h3>
            <div className="grid md:grid-cols-2 gap-[16px]">
              {build?.appsPlatforms.map((apps) => (
                <div className="border border-text-disabled md:p-[10px] shadow-sm  rounded-[24px] flex items-start gap-3">
                  <div
                    className="flex items-start justify-center bg-accent-geen md:w-[100px] relative"
                  >
                    <Image
                      src={apps.icon}
                      alt=""
                      className="rounded-[24px] flex items-center justify-center "
                    />
                  </div>
                  <div className="text-text-primary gap-[8px] flex flex-col items-start">
                    <h5 className="md:text-[24px] leading-[100%] font-medium">
                      {apps.name}
                    </h5>
                    <p className="md:text-[13px]">{apps.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-[24px] flex flex-col w-full gap-[24px] p-[24px]">
            <h3 className="md:text-[36px] text-text-primary leading-[120%]">
              Codes and Setup
            </h3>
            <div className="grid md:grid-cols-2 gap-[16px]">
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
