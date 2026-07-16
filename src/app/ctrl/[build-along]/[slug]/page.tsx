// "use client"

import Link from "next/link";
import { Share2, ArrowRight } from "lucide-react";
import Image from "next/image";
import CodeBlock from "@/app/utils/CodeBlock";
import { highlightCode } from "@/app/utils/shiki";
import { client } from "@/sanity/lib/client";
import { getBuildBySlugQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import HighlightHead from "@/app/UI/props/HighlightHead";
import { motion, useInView } from "framer-motion";
import ExploreMoreBuildAlong from "@/components/ExploreMoreBuildAlong";

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
  codesSetup: {
    name: string;
    subtitle: string;
    filename: string;
    extension: string;
    code: string;
  }[];
};

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const build: Build = await client.fetch(getBuildBySlugQuery, { slug });

  if (!build) {
    return <div className="p-10">Project not found</div>;
  }

  const files =
    build.codesSetup?.map(async (file) => ({
      filename: `${file.filename}.${file.extension}`,
      code: file.code,
      name: file.name,
      subtitle: file.subtitle,
      highlighted: await highlightCode(file.code, file.extension || "cpp"),
    })) || [];

  const resolvedFiles = await Promise.all(files);

  return (
    <div className="w-full bg-background-page ">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-6 md:py-12 flex flex-col gap-8">
        {/* Tag */}
        <span className="bg-highlight text-primary-blue px-4 py-2 text-sm md:text-base rounded-full w-fit">
          Project Description
        </span>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h1 className="text-[48px] md:text-5xl font-bold leading-tight">
              {build.name}
            </h1>
            <p className="text-[18px] leading-[120%] md:text-lg text-primary-blue-hover">
              {build.subTitle}
            </p>
          </div>

          <Link
            href={`/`}
            className="flex items-center gap-2 px-5 py-2 md:py-3 border-2 border-primary-blue rounded-full text-primary-blue hover:bg-primary-blue hover:text-white transition w-fit"
          >
            <Share2 size={18} />
            <p>Share</p>
          </Link>
        </div>

        {/* Paragraphs */}
        <div className="text-sm md:text-base text-text-primary leading-relaxed flex flex-col gap-4">
          <p>{build.paragraphOne}</p>
          <p>{build.paragraphTwo}</p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {build.categories?.map((cat) => (
            <span
              key={cat}
              className="px-4 py-1.5 border border-primary-blue rounded-full text-sm"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Main Image */}
        {build.mainImage && (
          <div className="w-full rounded-2xl overflow-hidden">
            <Image
              src={urlFor(build.mainImage).width(1200).url()}
              alt={build.name}
              width={1200}
              height={700}
              className="w-full h-auto object-cover"
            />
          </div>
        )}
      </div>

      {/* GRID LAYOUT */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* MAIN CONTENT */}
          <div className="md:col-span-3 flex flex-col gap-8">
            {/* Components */}
            <div className="bg-white rounded-2xl p-4 md:p-6 flex flex-col gap-6">
              <h3 className="text-[28px] md:text-3xl font-medium text-text-primary">
                Components
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {build.components?.map((component, i) => (
                  <div
                    key={i}
                    className="border border-text-disabled rounded-2xl p-3 flex flex-col gap-3 w-full"
                  >
                    <Image
                      src={urlFor(component.image).width(300).url()}
                      alt={component.componentName}
                      width={300}
                      height={200}
                      className="rounded-xl w-full h-auto object-cover"
                    />

                    <div className="flex flex-col gap-1">
                      <h5 className="text-sm font-medium">
                        {component.componentName}
                      </h5>
                      <h4 className="text-lg font-medium">{component.code}</h4>
                      <p className="text-xs md:text-sm text-text-secondary">
                        {component.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Apps & Platforms */}
            <div className="bg-white rounded-2xl p-4 md:p-6 flex flex-col gap-6">
              <h3 className="text-[28px] md:text-3xl font-medium text-text-primary">
                Apps & Platforms
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {build.appsPlatforms?.map((apps, i) => (
                  <div
                    key={i}
                    className="border border-text-disabled rounded-2xl p-4 flex gap-4 items-start"
                  >
                    <Image
                      src={urlFor(apps.icon).width(80).url()}
                      alt={apps.name}
                      width={60}
                      height={60}
                    />

                    <div>
                      <h5 className="text-lg font-medium">{apps.name}</h5>
                      <p className="text-sm text-text-secondary">{apps.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Codes & Setup */}
            <div className="bg-white rounded-2xl p-4 md:p-6 flex flex-col gap-6">
              <h3 className="text-[28px] md:text-3xl font-medium text-text-primary">
                Codes and Setup
              </h3>

              <div className="w-full border border-text-disabled rounded-2xl p-4">
                <CodeBlock files={resolvedFiles} />
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          {/* <div className="w-full">
            <div className="bg-background-card rounded-3xl p-3 shadow-sm md:sticky md:top-[120px] flex flex-col gap-[0.25rem]">
              <div className="bg-primary-blue text-white px-6 py-5 rounded-t-2xl text-[20px] md:text-[22px] font-medium">
                Table Of Content
              </div>
              <div className="bg-highlight text-primary-blue px-[1rem] py-[0.5rem] flex items-center gap-2 font-medium text-[1rem]">
                <ArrowRight size={20} strokeWidth={2} />
                <p>Components Used</p>
              </div>
              <div className="bg-background-page text-text-disabled px-6 py-4 font-medium text-[16px]">
                Design Systems
              </div>
              <div className="bg-background-page text-text-disabled px-6 py-4 rounded-b-2xl font-medium text-[16px]">
                UI Elements
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <ExploreMoreBuildAlong />
    </div>
  );
}
