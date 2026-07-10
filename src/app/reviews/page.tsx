import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import ReviewsGrid from "@/components/sections/ReviewsGrid";
import ScrollReveal from "@/components/ScrollReveal";
import Button from "@/components/Button";
import SubPageHero from "@/components/SubPageHero";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Hear from travellers who have experienced the Vela & Co. difference — in their own words.",
};

export default function ReviewsPage() {
  return (
    <>
      <Navbar transparent />
      <PageWrapper>
        <SubPageHero
          image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
          alt="Beautiful sunset"
          label="Testimonials"
          title="Guest Reviews"
          subtitle="The stories our clients share are the truest measure of what we do."
        />

        {/* Reviews Grid */}
        <ReviewsGrid />

        {/* CTA */}
        <section className="bg-dark py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <ScrollReveal>
              <h2 className="font-heading text-3xl font-medium text-white md:text-4xl">
                Ready to Write Your Own Story?
              </h2>
              <p className="mx-auto mt-4 max-w-lg font-sans text-base text-white/80">
                Let us craft a journey that you&apos;ll be sharing for years to come.
              </p>
              <div className="mt-8">
                <Button href="/contact">Start Planning</Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </PageWrapper>
      <Footer />
    </>
  );
}
