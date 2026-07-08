import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vela & Co. — Journeys, Crafted.",
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
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal font-body">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
