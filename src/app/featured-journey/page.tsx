import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import Divider from "@/components/Divider";
import { featuredJourney } from "@/lib/data";

export const metadata: Metadata = {
  title: "Featured Journey — The Italian Riviera",
  description: "A 14-day journey from the Amalfi Coast to Sicily — experience Southern Italy's soul with Vela & Co.",
};

export default function FeaturedJourneyPage() {
  const journey = featuredJourney;

  return (
    <>
      <Navbar />
      <PageWrapper>
        {/* Hero */}
        <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
          <Image
            src={journey.heroImage}
            alt={journey.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/30 to-navy/10" />
          <div className="relative flex h-full flex-col items-start justify-end px-6 pb-16 lg:px-12">
            <div className="mx-auto w-full max-w-7xl">
              <SectionLabel>Featured Journey</SectionLabel>
              <h1 className="mt-4 font-display text-5xl font-light text-white md:text-6xl lg:text-7xl">
                {journey.title}
              </h1>
              <p className="mt-3 max-w-2xl font-display text-xl font-light text-white/80 md:text-2xl">
                {journey.subtitle}
              </p>
              <div className="mt-6 flex flex-wrap gap-6">
                <span className="font-body text-sm uppercase tracking-[0.15em] text-gold">
                  {journey.duration}
                </span>
                <span className="font-body text-sm text-white/50">|</span>
                <span className="font-body text-sm uppercase tracking-[0.15em] text-gold">
                  {journey.startingPrice}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Description + Highlights */}
        <section className="py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid gap-16 lg:grid-cols-2">
              <ScrollReveal>
                <SectionLabel>The Journey</SectionLabel>
                <h2 className="mt-4 font-display text-3xl font-light text-charcoal md:text-4xl">
                  About This Experience
                </h2>
                <p className="mt-6 font-body text-base leading-[1.8] text-charcoal/70">
                  {journey.description}
                </p>
                <div className="mt-8">
                  <Button href="/contact">Enquire About This Journey</Button>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-ivory p-8 lg:p-12">
                  <h3 className="font-body text-xs uppercase tracking-[0.2em] text-gold">
                    Journey Highlights
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {journey.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 h-px w-4 shrink-0 bg-gold" />
                        <span className="font-body text-sm leading-relaxed text-charcoal/70">
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
        <section className="bg-ivory py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-4xl px-6 lg:px-12">
            <ScrollReveal>
              <SectionLabel align="center">Day by Day</SectionLabel>
              <h2 className="mt-4 text-center font-display text-4xl font-light text-charcoal md:text-5xl">
                The Itinerary
              </h2>
            </ScrollReveal>

            <div className="mt-16 space-y-0">
              {journey.itinerary.map((day, i) => (
                <ScrollReveal key={day.day} delay={i * 0.05}>
                  <div className="flex gap-6 border-l border-gold/20 py-8 pl-8 md:gap-10">
                    <div className="shrink-0">
                      <span className="font-display text-3xl font-light text-gold/40">
                        {String(day.day).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-light text-charcoal">
                        {day.title}
                      </h3>
                      <p className="mt-2 font-body text-sm leading-relaxed text-charcoal/60">
                        {day.description}
                      </p>
                    </div>
                    {day.image && (
                      <div className="relative hidden aspect-[4/3] w-40 shrink-0 overflow-hidden md:block">
                        <Image
                          src={day.image}
                          alt={day.title}
                          fill
                          className="object-cover"
                          sizes="160px"
                        />
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <ScrollReveal>
              <SectionLabel align="center">Gallery</SectionLabel>
              <h2 className="mt-4 text-center font-display text-4xl font-light text-charcoal md:text-5xl">
                Visual Inspirations
              </h2>
            </ScrollReveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {journey.gallery.map((img, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={img}
                      alt={`${journey.title} gallery ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <ScrollReveal>
              <h2 className="font-display text-3xl font-light text-white md:text-4xl">
                Make This Journey Yours
              </h2>
              <p className="mx-auto mt-4 max-w-lg font-body text-base text-white/60">
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
