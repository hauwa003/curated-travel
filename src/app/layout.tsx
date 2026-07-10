import type { Metadata } from "next";
import { DM_Sans, Bricolage_Grotesque } from "next/font/google";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vela & Co.  - Journeys, Crafted.",
    template: "%s | Vela & Co.",
  },
  description:
    "Bespoke luxury travel experiences crafted by seasoned advisors. Discover curated journeys to the world's most extraordinary destinations.",
  keywords: [
    "luxury travel",
    "bespoke travel",
    "travel advisory",
    "curated journeys",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${bricolage.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text font-sans">
        <SmoothScroll />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
