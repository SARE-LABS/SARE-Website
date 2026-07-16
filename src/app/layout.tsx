import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { spaceGrotesk } from "../../public/fonts/fonts";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "SARE - Society of Agricultural Robotic Engineers",
  description:
    "Bringing together innovators in Agricultural & Environmental Engineering to create real-world impact",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const host = headersList.get("host") || "";
  const isCtrlSubdomain = host.startsWith("ctrl.");

  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className}  antialiased overflow-x-clip`}
      >
        {!isCtrlSubdomain && <Navbar />}
        <div className="h-max w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
