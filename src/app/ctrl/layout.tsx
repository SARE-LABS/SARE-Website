import React from "react";
import Navbar from "@/components/ctrl-labs/Navbar";

export default function CtrlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <main className="flex-1 w-full">{children}</main>
    </div>
  );
}
