"use client";

import { useState } from "react";
import { ArrowDownToLine, Files, CopyCheck } from "lucide-react";

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
    <div className="flex flex-col w-full ">
      <span className="flex flex-col items-start md:mb-[16px]">
        <h4 className="md:text-[24px] text-text-primary leading-[120%] font-medium">
          {activeFile.name}
        </h4>
        <p className="md:text-[16px] text-text-primary leading-[148%]">
          {activeFile.subtitle || ""}
        </p>
      </span>

      {/* HEADER */}
      <div className="w-full flex items-end justify-between gap-[20px] overflow-hidden" >
        {/* Tabs */}
        <div className="flex items-center gap-[2px] md:w-[85%] overflow-hidden">
          {files.map((file, i) => (
            <span
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`md:px-[16px] md:h-[35px] flex items-center cursor-pointer
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
        <div className="flex items-center justify-end gap-1 md:w-[15%] ">
          <span
            onClick={handleDownload}
            className="bg-[#67B5DC]/10 md:px-[10px] md:h-[35px] flex items-center cursor-pointer"
          >
            <ArrowDownToLine className="text-primary-blue" size={14} />
          </span>

          <span
            onClick={handleCopy}
            className="bg-[#67B5DC]/10 md:px-[10px] md:h-[35px] flex items-center  cursor-pointer"
          >
            {copied ? (
              <CopyCheck className="text-primary-blue" size={14} />
            ) : (
              <Files className="text-primary-blue w-[14px] h-[14px]" size={14} />
            )}
          </span>
        </div>
      </div>

      {/* <div>{activeFile.name}</div> */}

      <div className="flex w-full bg-background-disabled mt-[2px] text-sm font-mono md:p-[24px]">
        {/* Line Numbers */}
        <div className="min-w-[40px] text-primary-blue-hover text-right pr-4 pl-2 py- select-none ">
          {activeFile.code.split("\n").map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>

        <div className="h-full w-[1px] bg-primary-blue md:mx-[24px]"></div>

        {/* CODE */}
        <div
          className="overflow-x-auto w-full py- 
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
