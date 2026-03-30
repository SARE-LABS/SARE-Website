import Link from "next/link";
import { ArrowDownToLine, Files, Share2 } from "lucide-react";
import Image from "next/image";
import CodeBlock from "@/app/utils/CodeBlock";
import { client } from "@/sanity/lib/client";
import { getBuildBySlugQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

type Props = {
  params: Promise<{ slug: string }>;
};

type Build = {
  name: string;
  subTitle: string;
  paragraphOne: string;
  paragraphTwo: string;
  categories: string[];
  mainImage: any;
  components: {
    componentName: string;
    code: string;
    subtitle: string;
    image: any;
  }[];
  appsPlatforms: {
    name: string;
    desc: string;
    icon: any;
  }[];
};

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const build: Build = await client.fetch(getBuildBySlugQuery, { slug });

  if (!build) {
    return <div className="p-10">Project not found</div>;
  }

  return (
    <div className="py-[24px] px-[2rem] overflow-hidden md:py-[48px] md:px-[96px] mt-[49.5px] md:mt-[99px] bg-background-page flex flex-col items-start">
      {/* Tag */}
      <span className="bg-highlight text-primary-blue py-[8px] px-[16px] text-[16px] rounded-full flex items-center justify-center gap-2 w-fit">
        Project Description
      </span>

      <div className="md:my-[48px] flex flex-col items-start w-full">
        {/* Header */}
        <div className="flex items-end justify-between w-full">
          <div>
            <h1 className="md:text-[64px] font-bold leading-[120%]">
              {build.name}
            </h1>
            <p className="md:text-[20px] text-primary-blue-hover">
              {build.subTitle}
            </p>
          </div>

          <Link
            href={`/`}
            className="flex items-center gap-3 px-[24px] py-[16px] border-2 border-primary-blue rounded-full text-primary-blue hover:text-white hover:bg-primary-blue transition-all duration-300"
          >
            <Share2 strokeWidth={1.75} />
            <p>Share</p>
          </Link>
        </div>

        {/* Paragraphs */}
        <div className="w-full text-text-primary md:text-[16px] leading-[148%] md:mt-[24px] flex flex-col gap-[16px]">
          <p>{build.paragraphOne}</p>
          <p>{build.paragraphTwo}</p>
        </div>

        {/* Categories */}
        <div className="md:mt-[24px] flex flex-wrap gap-3">
          {build.categories?.map((cat) => (
            <span
              key={cat}
              className="px-[16px] py-[8px] border border-primary-blue rounded-full text-black md:text-[14px]"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Main Image */}
        {build.mainImage && (
          <div className="w-full rounded-[24px] md:my-[48px] relative">
            <Image
              src={urlFor(build.mainImage).width(1200).url()}
              alt={build.name}
              width={1200}
              height={700}
              className="object-cover w-full rounded-[24px]"
            />
          </div>
        )}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-4 gap-[48px] w-full">
        <div className="col-span-3 flex flex-col gap-[48px]">
          {/* Components */}
          <div className="bg-white rounded-[24px] flex flex-col gap-[24px] p-[24px]">
            <h3 className="md:text-[36px] text-text-primary">Components</h3>

            <div className="grid md:grid-cols-3 gap-[24px]">
              {build.components?.map((component, i) => (
                <div
                  key={i}
                  className="border border-text-disabled md:p-[16px] rounded-[24px] flex flex-col gap-3"
                >
                  <Image
                    src={urlFor(component.image).width(300).url()}
                    alt={component.componentName}
                    width={300}
                    height={200}
                    className="rounded-[24px]"
                  />

                  <div className="text-text-primary flex flex-col gap-[8px]">
                    <h5 className="text-[14px] font-medium">
                      {component.componentName}
                    </h5>
                    <h4 className="text-[20px] font-medium">
                      {component.code}
                    </h4>
                    <p className="text-[13px]">{component.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Apps & Platforms */}
          <div className="bg-white rounded-[24px] flex flex-col gap-[24px] p-[24px]">
            <h3 className="md:text-[36px] text-text-primary">
              Apps & Platforms
            </h3>

            <div className="grid md:grid-cols-2 gap-[16px]">
              {build.appsPlatforms?.map((apps, i) => (
                <div
                  key={i}
                  className="border border-text-disabled md:p-[10px] shadow-sm rounded-[24px] flex gap-3"
                >
                  <div className="md:w-[100px]">
                    <Image
                      src={urlFor(apps.icon).width(80).url()}
                      alt={apps.name}
                      width={80}
                      height={80}
                    />
                  </div>

                  <div className="text-text-primary flex flex-col gap-[8px]">
                    <h5 className="text-[20px] font-medium">{apps.name}</h5>
                    <p className="text-[13px]">{apps.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Codes & Setup */}
          <div className="bg-white rounded-[24px] flex flex-col gap-[24px] p-[24px]">
            <h3 className="md:text-[36px] text-text-primary">
              Codes and Setup
            </h3>

            <div className="grid md:grid-cols-1 gap-[16px]">
              <div className="w-full rounded-[24px] shadow-md border border-text-disabled flex md:flex-col items-start gap-[16px] p-[24px]">
                <span className="flex flex-col items-start">
                  <h4 className="md:text-[24px] text-text-primary leading-[120%] font-medium">
                    Arduino Code
                  </h4>
                  <p className="md:text-[16px] text-text-primary leading-[148%]">
                    Run this code in your Arduino IDE
                  </p>
                </span>

                <div className="flex flex-col w-full">
                  <div className="w-full flex items-end justify-between gap-[30px]">
                    <div className="flex items-center justify-center gap-1">
                      <div className="flex items-center justify-center gap-1">
                        <span className="bg-[#67B5DC]/10 md:px-[16px] md:py-[8px] flex items-center justify-center rounded-tl-[16px] cursor-pointer">
                          <p className="text-primary-blue md:text-[14px]">
                            Neuro_home_main_code.ino
                          </p>
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <span className="bg-[#9CA3AF]/10 md:px-[16px] md:py-[8px] flex items-center justify-center rounded-tr-[16px] cursor-pointer">
                          <p className="text-text-disabled md:text-[14px]">
                            Neuro_home_main_code.ino
                          </p>
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-1">
                      <span className="bg-[#67B5DC]/10 md:p-[8px] flex items-center justify-center rounded-tl-[16px] cursor-pointer">
                        <ArrowDownToLine className="text-primary-blue" />
                      </span>
                      <span className="bg-[#67B5DC]/10 md:p-[8px] flex items-center justify-center rounded-tr-[16px] cursor-pointer">
                        <Files className="text-primary-blue" />
                      </span>
                    </div>
                  </div>

                  {/* <div className="w-full min-h-[100px] bg-background-disabled mt-1.5"></div> */}
                  <CodeBlock
  filename="neuro_home_main_code.ino"
  language="cpp"
  code={`void setup() {
  Serial.begin(115200);
}

void loop() {
  Serial.println("Hello Neuro Home");
  delay(1000);
}`}
/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
