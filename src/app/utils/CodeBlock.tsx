// components/CodeBlock.tsx

"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Files } from "lucide-react";
import { useState } from "react";

type Props = {
  code: string;
  language?: string;
  filename?: string;
};

export default function CodeBlock({
  code,
  language = "javascript",
  filename = "code.ts",
}: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-[16px] border border-text-disabled overflow-hidden">
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#0f172a] text-white">
        <span className="text-sm opacity-80">{filename}</span>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-xs hover:opacity-80"
        >
          <Files size={16} />
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      {/* Code */}
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{
          margin: 0,
          padding: "16px",
          fontSize: "13px",
          background: "#020617",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}