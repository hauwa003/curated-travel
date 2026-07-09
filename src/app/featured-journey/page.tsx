import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import ImageReveal from "@/components/ImageReveal";
import SubPageHero from "@/components/SubPageHero";
import TimelineProgress from "./TimelineProgress";
import { featuredJourney } from "@/lib/data";

export const metadata: Metadata = {
  title: "Featured Journey — The Italian Riviera",
  description: "A 14-day journey from the Amalfi Coast to Sicily — experience Southern Italy's soul with Vela & Co.",
};

export default function FeaturedJourneyPage() {
  const journey = featuredJourney;

  return (
    <>
      <Navbar transparent />
      <PageWrapper>
        {/* Hero */}
        <SubPageHero
          image={journey.heroImage}
          alt={journey.title}
          label="Featured Journey"
          title={journey.title}
          height="h-[70vh] min-h-[500px]"
        >
          <p className="mt-3 max-w-2xl font-sans text-xl font-medium text-white/80 md:text-2xl">
            {journey.subtitle}
          </p>
          <div className="mt-6 flex flex-wrap gap-6">
            <span className="font-sans text-sm uppercase tracking-[0.15em] text-white/70">
              {journey.duration}
            </span>
            <span className="font-sans text-sm text-white/70">|</span>
            <span className="font-sans text-sm uppercase tracking-[0.15em] text-white/70">
              {journey.startingPrice}
            </span>
          </div>
        </SubPageHero>

        {/* Description + Highlights */}
        <section className="py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid gap-16 lg:grid-cols-2">
              <ScrollReveal>
                <SectionLabel>The Journey</SectionLabel>
                <h2 className="mt-4 font-heading text-3xl font-medium text-text md:text-4xl">
                  About This Experience
                </h2>
                <p className="mt-6 font-sans text-base leading-[1.8] text-text/70">
                  {journey.description}
                </p>
                <div className="mt-8">
                  <Button href="/contact">Enquire About This Journey</Button>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-surface p-8 lg:p-12">
                  <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-muted">
                    Journey Highlights
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {journey.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 h-px w-4 shrink-0 bg-text" />
                        <span className="font-sans text-sm leading-relaxed text-text/70">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Itinerary */}
        <section className="bg-surface py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-4xl px-6 lg:px-12">
            <ScrollReveal>
              <SectionLabel align="center">Day by Day</SectionLabel>
              <h2 className="mt-4 text-center font-heading text-4xl font-medium text-text md:text-5xl">
                The Itinerary
              </h2>
            </ScrollReveal>

            <TimelineProgress itinerary={journey.itinerary} />
          </div>
        </section>

        {/* Gallery */}
        <section className="py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <ScrollReveal>
              <SectionLabel align="center">Gallery</SectionLabel>
              <h2 className="mt-4 text-center font-heading text-4xl font-medium text-text md:text-5xl">
                Visual Inspirations
              </h2>
            </ScrollReveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {journey.gallery.map((img, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <ImageReveal
                    src={img}
                    alt={`${journey.title} gallery ${i + 1}`}
                    aspectClass="aspect-[4/3]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-dark py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <ScrollReveal>
              <h2 className="font-heading text-3xl font-medium text-white md:text-4xl">
                Make This Journey Yours
              </h2>
              <p className="mx-auto mt-4 max-w-lg font-sans text-base text-white/80">
                Every Vela & Co. journey is tailored to you. Let us know what speaks to you, and we&apos;ll craft something extraordinary.
              </p>
              <div className="mt-8">
                <Button href="/contact">Begin Planning</Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </PageWrapper>
      <Footer />
    </>
  );
}
