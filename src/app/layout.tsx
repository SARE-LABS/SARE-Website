import type { Metadata } from "next";
import "./globals.css";
import { spaceGrotesk } from "../../public/fonts/fonts";


export const metadata: Metadata = {
  title: "SARE - Society of Agricultural and Robotic Engineers",
  description: "Bringing together innovators in Agricultural & Environmental Engineering to create real-world impact",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
