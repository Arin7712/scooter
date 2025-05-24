import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const font = Poppins({ weight: ["400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Scooter - Sales hiring, solved",
  description: "Scooter is a sales hiring engine that uses AI and behavioral science to help you find the right driver for your GTM race.",
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
      </body>
    </html>
  );
}
