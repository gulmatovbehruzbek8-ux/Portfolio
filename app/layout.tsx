import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-nine-beige-22.vercel.app"),
  title: "Behruzbek Gulmatov | Robotics & AI Engineer",
  description: "Portfolio of Behruzbek Gulmatov — Robotics Engineer, AI Builder, and 10th-grade scholar at the Presidential School in Khiva. 3× Regional Olympiad Gold Medalist, IELTS Band 8.0, and Edexcel Triple 9.",
  keywords: [
    "Behruzbek Gulmatov",
    "Robotics Engineer",
    "AI Builder",
    "Presidential School in Khiva",
    "Line Tracking Robot",
    "IELTS 8.0",
    "Edexcel IGCSE Triple 9",
    "KhanateMUN",
    "Uzbekistan STEM",
    "Khiva"
  ],
  authors: [{ name: "Behruzbek Gulmatov" }],
  creator: "Behruzbek Gulmatov",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-nine-beige-22.vercel.app",
    siteName: "Behruzbek Gulmatov Portfolio",
    title: "Behruzbek Gulmatov | Robotics & AI Engineer",
    description: "Robotics Engineer, AI Builder, 3× Regional Olympiad Gold Medalist, IELTS Band 8.0, Edexcel Triple 9 Scholar at Presidential School in Khiva.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Behruzbek Gulmatov | Robotics & AI Engineer",
    description: "Robotics Engineer, AI Builder, 3× Regional Olympiad Gold Medalist, IELTS Band 8.0, Edexcel Triple 9 Scholar at Presidential School in Khiva.",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-[#0B0B0F] text-[#F5F7FA] antialiased min-h-screen flex flex-col`}
      >
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
