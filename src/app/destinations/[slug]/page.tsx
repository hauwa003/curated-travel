import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import Divider from "@/components/Divider";
import Button from "@/components/Button";
import ContactButton from "@/components/ContactButton";
import SubPageHero from "@/components/SubPageHero";
import { destinations } from "@/lib/data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return destinations.map((dest) => ({ slug: dest.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const dest = destinations.find((d) => d.slug === slug);
  if (!dest) return {};
  return {
    title: `${dest.name}  - ${dest.tagline}`,
    description: dest.description,
  };
}

export default async function DestinationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const dest = destinations.find((d) => d.slug === slug);
  if (!dest) notFound();

  // Find other destinations to suggest (exclude current, pick up to 3)
  const otherDestinations = destinations
    .filter((d) => d.slug !== dest.slug)
    .slice(0, 3);

  return (
    <>
      <Navbar transparent />
      <PageWrapper>
        {/* Hero */}
        <SubPageHero
          image={dest.image}
          alt={dest.name}
          label={dest.region}
          title={dest.name}
        />

        {/* Tagline */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <ScrollReveal>
              <blockquote className="border-l-0">
                <p className="font-heading text-2xl font-medium leading-relaxed text-text md:text-3xl lg:text-4xl">
                  &ldquo;{dest.tagline}&rdquo;
                </p>
              </blockquote>
            </ScrollReveal>

            <ScrollReveal>
              <Divider className="mx-auto mt-12" width="w-24" />
            </ScrollReveal>
          </div>
        </section>

        {/* Description */}
        <section className="pb-16 md:pb-24">
          <div className="mx-auto max-w-3xl px-6">
            <ScrollReveal>
              <SectionLabel>About This Destination</SectionLabel>
              <p className="mt-6 font-sans text-base leading-[1.8] text-text/80 md:text-lg md:leading-[1.9]">
                {dest.description}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Trip Overview */}
        <section className="bg-surface py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="grid gap-12 md:grid-cols-2 md:items-start">
              {/* Left: Duration & Price */}
              <ScrollReveal>
                <div>
                  <SectionLabel>Trip Details</SectionLabel>
                  <div className="mt-8 space-y-6">
                    <div>
                      <span className="font-sans text-sm uppercase tracking-[0.15em] text-muted">Duration</span>
                      <p className="mt-1 font-heading text-2xl font-medium text-text">{dest.duration}</p>
                    </div>
                    <div>
                      <span className="font-sans text-sm uppercase tracking-[0.15em] text-muted">Starting Price</span>
                      <p className="mt-1 font-heading text-2xl font-medium text-text">{dest.startingPrice}</p>
                    </div>
                  </div>
                  <div className="mt-10">
                    <ContactButton>Book Your Trip</ContactButton>
                  </div>
                </div>
              </ScrollReveal>

              {/* Right: What's Included */}
              <ScrollReveal delay={0.1}>
                <div>
                  <SectionLabel>What&apos;s Included</SectionLabel>
                  <ul className="mt-8 space-y-4">
                    {dest.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-text/30" />
                        <span className="font-sans text-base leading-relaxed text-text/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Destination Image  - full bleed */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <ScrollReveal>
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 80vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Other Destinations */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <ScrollReveal>
              <SectionLabel align="center">Continue Exploring</SectionLabel>
              <h2 className="mt-4 text-center font-heading text-3xl font-medium text-text md:text-4xl">
                More Destinations
              </h2>
            </ScrollReveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherDestinations.map((other, i) => (
                <ScrollReveal key={other.slug} delay={i * 0.1}>
                  <Link
                    href={`/destinations/${other.slug}`}
                    className="group relative block"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={other.image}
                        alt={other.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-300 group-hover:-translate-y-2 md:p-8">
                        <span className="font-sans text-xs uppercase tracking-[0.2em] text-white/70">
                          {other.region}
                        </span>
                        <h3 className="mt-2 font-heading text-2xl font-medium text-white">
                          {other.name}
                        </h3>
                        <p className="mt-2 max-w-md font-sans text-sm text-white/70">
                          {other.tagline}
                        </p>
                        <span className="mt-3 inline-block font-sans text-xs uppercase tracking-[0.15em] text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          Explore &rarr;
                        </span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.3}>
              <div className="mt-12 text-center">
                <Button href="/destinations" variant="secondary">
                  View All Destinations
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Divider */}
        <ScrollReveal>
          <Divider className="mx-auto" width="w-24" />
        </ScrollReveal>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <ScrollReveal>
              <SectionLabel align="center">Begin Your Journey</SectionLabel>
              <h2 className="mt-4 font-heading text-3xl font-medium text-text md:text-4xl">
                Ready to Experience {dest.name}?
              </h2>
              <p className="mt-6 font-sans text-base leading-[1.8] text-text/70">
                Every journey begins with a conversation. Tell us how you
                envision your time in {dest.name}, and we&apos;ll craft an
                itinerary that exceeds your expectations.
              </p>
              <div className="mt-10">
                <ContactButton>Book Your Trip</ContactButton>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </PageWrapper>
      <Footer />
    </>
  );
}
