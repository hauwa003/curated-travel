import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import Divider from "@/components/Divider";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: "From bespoke itineraries to private experiences — discover how Vela & Co. crafts extraordinary luxury travel.",
};

const processSteps = [
  {
    number: "01",
    title: "The Conversation",
    description: "Every journey begins with listening. We learn about your travel style, passions, and dreams — the details that transform a trip into an experience.",
  },
  {
    number: "02",
    title: "The Design",
    description: "Your advisor crafts a detailed, day-by-day itinerary — a narrative of experiences, accommodations, and moments designed specifically for you.",
  },
  {
    number: "03",
    title: "The Refinement",
    description: "We present, you respond. Through collaboration, we refine every detail until the journey feels unmistakably yours.",
  },
  {
    number: "04",
    title: "The Journey",
    description: "With everything arranged and confirmed, you travel with complete peace of mind — and our 24/7 support just a message away.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
            alt="Travel planning"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-navy/40" />
          <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
            <SectionLabel>What We Do</SectionLabel>
            <h1 className="mt-4 font-display text-5xl font-light text-white md:text-6xl lg:text-7xl">
              Our Services
            </h1>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            {services.map((service, i) => (
              <ScrollReveal key={service.title}>
                <div
                  className={`flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20 ${
                    i > 0 ? "mt-24 md:mt-32" : ""
                  } ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden lg:w-1/2">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="lg:w-1/2">
                    <SectionLabel>{`Service 0${i + 1}`}</SectionLabel>
                    <h2 className="mt-4 font-display text-3xl font-light text-charcoal md:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 font-body text-base leading-relaxed text-charcoal/70">
                      {service.description}
                    </p>
                    <ul className="mt-6 space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 font-body text-sm text-charcoal/60"
                        >
                          <span className="h-px w-4 bg-gold" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {i < services.length - 1 && (
                  <Divider className="mx-auto mt-24 md:mt-32" width="w-24" />
                )}
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-ivory py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <ScrollReveal>
              <SectionLabel align="center">The Process</SectionLabel>
              <h2 className="mt-4 text-center font-display text-4xl font-light text-charcoal md:text-5xl">
                How It Works
              </h2>
            </ScrollReveal>

            <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, i) => (
                <ScrollReveal key={step.number} delay={i * 0.1}>
                  <div>
                    <span className="font-display text-4xl font-light text-gold/40">
                      {step.number}
                    </span>
                    <h3 className="mt-4 font-display text-xl font-light text-charcoal">
                      {step.title}
                    </h3>
                    <p className="mt-3 font-body text-sm leading-relaxed text-charcoal/60">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.4}>
              <div className="mt-16 text-center">
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
