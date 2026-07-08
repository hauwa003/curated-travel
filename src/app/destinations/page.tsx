import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import ScrollReveal from "@/components/ScrollReveal";
import SubPageHero from "@/components/SubPageHero";
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
        <SubPageHero
          image="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80"
          alt="Aerial view of coastline"
          label="Explore"
          title="Our Destinations"
          subtitle="Each destination has been personally vetted by our advisors — because we only recommend places we've experienced ourselves."
        />

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
