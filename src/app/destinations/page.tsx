import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import DestinationsGrid from "./DestinationsGrid";

export const metadata: Metadata = {
  title: "Destinations",
  description: "Explore our curated collection of the world's most extraordinary destinations — from the Amalfi Coast to Kyoto, Patagonia to the Maldives.",
};

export default function DestinationsPage() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80"
            alt="Aerial view of coastline"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-navy/40" />
          <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
            <SectionLabel>Explore</SectionLabel>
            <h1 className="mt-4 font-display text-5xl font-light text-white md:text-6xl lg:text-7xl">
              Our Destinations
            </h1>
            <p className="mt-4 max-w-lg font-body text-base text-white/70">
              Each destination has been personally vetted by our advisors — because we only recommend places we&apos;ve experienced ourselves.
            </p>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <ScrollReveal>
              <DestinationsGrid />
            </ScrollReveal>
          </div>
        </section>
      </PageWrapper>
      <Footer />
    </>
  );
}
