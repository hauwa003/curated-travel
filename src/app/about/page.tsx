import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import TextReveal from "@/components/TextReveal";
import Divider from "@/components/Divider";
import { teamMembers } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind Vela & Co. — a boutique luxury travel advisory founded on the belief that travel is a transformative art.",
};

const pillars = [
  {
    title: "Bespoke by Nature",
    description: "No two journeys are alike because no two travellers are alike. Every itinerary is crafted from scratch, shaped by your passions, pace, and preferences.",
  },
  {
    title: "Access & Relationships",
    description: "Two decades of relationships with the world's finest hotels, guides, and experience providers open doors that remain closed to most.",
  },
  {
    title: "Uncompromising Quality",
    description: "We personally vet every property, every guide, every experience. If it doesn't meet our standards, it doesn't make the itinerary.",
  },
  {
    title: "Present, Not Intrusive",
    description: "Our support is seamless and anticipatory. We're there when you need us, invisible when you don't — ensuring your journey unfolds effortlessly.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80"
            alt="Scenic mountain landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-navy/40" />
          <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
            <SectionLabel>Our Story</SectionLabel>
            <h1 className="mt-4 font-display text-5xl font-light text-white md:text-6xl lg:text-7xl">
              About Vela & Co.
            </h1>
          </div>
        </section>

        {/* Brand Story */}
        <section className="py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <ScrollReveal>
              <Divider className="mx-auto" />
            </ScrollReveal>
            <div className="mt-10">
              <TextReveal
                text="Vela & Co. was born from a simple conviction: that the most meaningful journeys are those crafted with care, knowledge, and an unwavering commitment to excellence."
                className="font-display text-2xl font-light leading-relaxed text-charcoal md:text-3xl"
              />
            </div>
            <ScrollReveal delay={0.3}>
              <p className="mt-8 font-body text-base leading-relaxed text-charcoal/70">
                Founded by Isabella Montague after two decades as a travel editor and Virtuoso advisor,
                Vela & Co. represents the culmination of a lifetime spent discovering the world&apos;s most
                extraordinary places and the people who bring them to life. We are a boutique advisory —
                deliberately small, intentionally personal — because we believe that exceptional travel
                demands exceptional attention.
              </p>
              <p className="mt-6 font-body text-base leading-relaxed text-charcoal/70">
                Our name, Vela, comes from the Latin for &ldquo;sail&rdquo; — a nod to the age of exploration
                and the spirit of discovery that drives everything we do. Like the great navigators before us,
                we chart courses to places that stir the soul.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Philosophy Pillars */}
        <section className="bg-ivory py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <ScrollReveal>
              <SectionLabel align="center">Our Philosophy</SectionLabel>
              <h2 className="mt-4 text-center font-display text-4xl font-light text-charcoal md:text-5xl">
                What Guides Us
              </h2>
            </ScrollReveal>

            <div className="mt-16 grid gap-12 md:grid-cols-2">
              {pillars.map((pillar, i) => (
                <ScrollReveal key={pillar.title} delay={i * 0.1}>
                  <div className="border-l border-gold/30 pl-6">
                    <h3 className="font-display text-2xl font-light text-charcoal">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 font-body text-sm leading-relaxed text-charcoal/60">
                      {pillar.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="bg-navy py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <ScrollReveal>
              <SectionLabel align="center">Credentials</SectionLabel>
              <h2 className="mt-4 font-display text-4xl font-light text-white md:text-5xl">
                Trusted Worldwide
              </h2>
              <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-white/60">
                As proud members of the Virtuoso network — the world&apos;s leading luxury travel advisory
                group — our clients benefit from exclusive rates, upgrades, and amenities at over 2,200
                preferred properties worldwide.
              </p>
            </ScrollReveal>

            <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
              {["Virtuoso Member", "Condé Nast Top Advisor", "Travel + Leisure A-List", "20+ Years Experience"].map(
                (credential, i) => (
                  <ScrollReveal key={credential} delay={i * 0.1}>
                    <div className="border-t border-gold/30 pt-4">
                      <p className="font-body text-sm text-white/80">{credential}</p>
                    </div>
                  </ScrollReveal>
                )
              )}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <ScrollReveal>
              <SectionLabel align="center">The Team</SectionLabel>
              <h2 className="mt-4 text-center font-display text-4xl font-light text-charcoal md:text-5xl">
                Your Advisors
              </h2>
            </ScrollReveal>

            <div className="mt-16 grid gap-12 md:grid-cols-3">
              {teamMembers.map((member, i) => (
                <ScrollReveal key={member.name} delay={i * 0.15}>
                  <div className="text-center">
                    <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-light text-charcoal">
                      {member.name}
                    </h3>
                    <p className="mt-1 font-body text-xs uppercase tracking-[0.15em] text-gold">
                      {member.role}
                    </p>
                    <p className="mt-3 font-body text-sm leading-relaxed text-charcoal/60">
                      {member.bio}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </PageWrapper>
      <Footer />
    </>
  );
}
