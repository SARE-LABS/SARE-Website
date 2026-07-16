"use client";

import { useState, useRef, useEffect } from "react";
import {
  ArrowDownToLine,
  Files,
  CopyCheck,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

type CodeFile = {
  filename: string;
  code: string;
  name: string;
  subtitle: string;
  highlighted: string;
};

export default function CodeBlock({ files }: { files: CodeFile[] }) {
  if (!files.length) return null;

  const [activeIndex, setActiveIndex] = useState(0);
  const activeFile = files[activeIndex];

  const [copied, setCopied] = useState(false);

  const tabsRef = useRef<HTMLDivElement>(null);

  // Move forward
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % files.length);
  };

  // Move backward
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? files.length - 1 : prev - 1));
  };

  // Auto scroll active tab into view
  useEffect(() => {
    const tab = tabsRef.current?.children[activeIndex] as HTMLElement;
    tab?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeIndex]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(activeFile.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([activeFile.code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = activeFile.filename;
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Title */}
      <span className="flex flex-col items-start md:mb-[16px]">
        <h4 className="text-[20px] md:text-[24px] text-text-primary leading-[120%] font-medium">
          {activeFile.name}
        </h4>
        <p className="text-[14px] md:text-[16px] text-text-primary leading-[148%]">
          {activeFile.subtitle || ""}
        </p>
      </span>

      {/* HEADER */}
      <div className="w-full flex items-end justify-between gap-[50px] overflow-hidden">
        {/* Tabs */}
        <div
          ref={tabsRef}
          className="flex items-center gap-[2px] max-w-[100%] md:max-w-[85%] mt-[16px] overflow-hidden scroll-smooth no-scrollbar"
        >
          {files.map((file, i) => (
            <span
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`px-[8px] md:px-[16px] h-[25px] md:h-[35px] flex items-center cursor-pointer whitespace-nowrap
                ${
                  i === activeIndex
                    ? "bg-[#67B5DC]/10 text-primary-blue"
                    : "bg-[#9CA3AF]/10 text-text-disabled"
                }`}
            >
              <p className="md:text-[14px] shrink-0">{file.filename}</p>
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-1 md:w-[15%]">
          <span
            onClick={handlePrev}
            className="bg-[#67B5DC]/10 w-[28px] h-[28px] md:w-[36px] md:h-[36px] flex items-center justify-center cursor-pointer transition-colors hover:bg-[#67B5DC]/20"
          >
            <ChevronLeft className="text-primary-blue w-[16px] h-[16px] md:w-[20px] md:h-[20px]" />
          </span>

          <span
            onClick={handleNext}
            className="bg-[#67B5DC]/10 w-[28px] h-[28px] md:w-[36px] md:h-[36px] flex items-center justify-center cursor-pointer transition-colors hover:bg-[#67B5DC]/20"
          >
            <ChevronRight className="text-primary-blue w-[16px] h-[16px] md:w-[20px] md:h-[20px]" />
          </span>

          {/* DOWNLOAD */}
          <span
            onClick={handleDownload}
            className="bg-[#67B5DC]/10 w-[28px] h-[28px] md:w-[36px] md:h-[36px] flex items-center justify-center cursor-pointer transition-colors hover:bg-[#67B5DC]/20"
          >
            <ArrowDownToLine className="text-primary-blue w-[14px] h-[14px] md:w-[18px] md:h-[18px]" />
          </span>

          {/* COPY */}
          <span
            onClick={handleCopy}
            className="bg-[#67B5DC]/10 w-[28px] h-[28px] md:w-[36px] md:h-[36px] flex items-center justify-center cursor-pointer transition-colors hover:bg-[#67B5DC]/20"
          >
            {copied ? (
              <CopyCheck className="text-primary-blue w-[14px] h-[14px] md:w-[18px] md:h-[18px]" />
            ) : (
              <Files className="text-primary-blue w-[14px] h-[14px] md:w-[18px] md:h-[18px]" />
            )}
          </span>
        </div>
      </div>

      {/* CODE BLOCK */}
      <div className="flex w-full bg-background-disabled mt-[2px] text-sm font-mono p-[16px] md:p-[24px]">
        {/* Line Numbers */}
        <div className="min-w-[40px] text-primary-blue-hover text-right pr-4 pl-2 select-none">
          {activeFile.code.split("\n").map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>

        <div className="w-[1px] bg-primary-blue self-stretch mx-[16px] md:mx-[24px]" />

        {/* CODE */}
        <div
          className="overflow-x-auto w-full
            [&_pre]:!text-black
            [&_pre]:m-0
            [&_pre]:bg-transparent
            [&_pre]:p-0
            [&_code]:whitespace-pre"
          dangerouslySetInnerHTML={{ __html: activeFile.highlighted }}
        />
      </div>
    </div>
  );
}
