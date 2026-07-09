import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import ScrollReveal from "@/components/ScrollReveal";
import Divider from "@/components/Divider";
import Button from "@/components/Button";
import SubPageHero from "@/components/SubPageHero";
import { testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Hear from travellers who have experienced the Vela & Co. difference — in their own words.",
};

export default function ReviewsPage() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <SubPageHero
          image="https://images.unsplash.com/photo-1502784444-fa2c2f4148ac?w=1920&q=80"
          alt="Beautiful sunset"
          label="Testimonials"
          title="Guest Reviews"
          subtitle="The stories our clients share are the truest measure of what we do."
        />

        {/* Reviews */}
        <section className="py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-5xl px-6 lg:px-12">
            {testimonials.map((testimonial, i) => (
              <ScrollReveal key={testimonial.id}>
                <div
                  className={`${i > 0 ? "mt-20" : ""} ${
                    i % 2 === 0 ? "" : "md:text-right"
                  }`}
                >
                  <div className={`${i % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                    <div className="font-sans text-5xl text-muted/30">
                      &ldquo;
                    </div>
                    <blockquote className="mt-2 font-sans text-xl font-medium leading-relaxed text-text md:text-2xl">
                      {testimonial.quote}
                    </blockquote>
                    <div className="mt-6">
                      <p className="font-sans text-sm uppercase tracking-[0.15em] text-muted">
                        {testimonial.author}
                      </p>
                      <p className="mt-1 font-sans text-sm text-text/50">
                        {testimonial.location}
                      </p>
                      <p className="mt-1 font-sans text-xs uppercase tracking-[0.1em] text-text/40">
                        {testimonial.trip}
                      </p>
                    </div>
                  </div>
                </div>
                {i < testimonials.length - 1 && (
                  <Divider
                    className={`mt-20 ${i % 2 === 0 ? "" : "ml-auto"}`}
                    width="w-24"
                  />
                )}
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-dark py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <ScrollReveal>
              <h2 className="font-sans text-3xl font-medium text-white md:text-4xl">
                Ready to Write Your Own Story?
              </h2>
              <p className="mx-auto mt-4 max-w-lg font-sans text-base text-white/60">
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
