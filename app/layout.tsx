import type { Metadata } from "next";
import {  Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const font = Poppins({ weight: ["100", "200", "300" ,"400", "500", "600", "700", "800", "900"], subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Scooter - Sales hiring, solved",
  description: "Scooter is a sales hiring engine that uses AI and behavioral science to help you find the right driver for your GTM race.",
  openGraph: {
    title: "Scooter - Sales hiring, solved",
    description: "Scooter is a sales hiring engine that uses AI and behavioral science to help you find the right driver for your GTM race.",
    url: "https://thescooter.ai", // replace with your domain
    siteName: "Scooter",
    images: [
      {
        url: "https://yoursite.com/scooter-logo.jpg", // ✅ replace with your hosted image URL
        width: 500,
        height: 500,
        alt: "Scooter preview",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
