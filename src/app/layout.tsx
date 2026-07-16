import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { spaceGrotesk } from "../../public/fonts/fonts";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://sarengineers.com"),
  title: {
    default: "SARE | Society of Agricultural Robotic Engineers",
    template: "%s | SARE",
  },
  description:
    "Bringing together innovators in Agricultural & Environmental Engineering to create real-world impact through robotics, AI, and sustainable technology.",
  keywords: [
    "SARE",
    "sarengineers",
    "Agricultural Robotics",
    "Environmental Engineering",
    "Robotics Innovation",
    "CTRL LABS",
    "Robotics Conference",
    "AgTech",
    "Sustainable Farming",
    "Engineering Society",
    "Engineering Students",
    "Young Engineers",
    "Innovation Hub",
    "Technology for Farmers",
    "Robotics Research",
    "Environmental Solutions",
    "IEEE SARE",
    "SARE Conference",
    "Robotics Community",
  ],
  openGraph: {
    title: "SARE | Society of Agricultural Robotic Engineers",
    description:
      "Bringing together innovators in Agricultural & Environmental Engineering to create real-world impact.",
    url: "https://sarengineers.com",
    siteName: "SARE",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "SARE Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SARE | Society of Agricultural Robotic Engineers",
    description: "Innovating at the intersection of agriculture and robotics.",
    images: ["/images/logo.png"],
  },
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
