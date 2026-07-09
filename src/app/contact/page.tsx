import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import ImageReveal from "@/components/ImageReveal";
import PremiumInput from "@/components/PremiumInput";
import Button from "@/components/Button";
import SubPageHero from "@/components/SubPageHero";

export const metadata: Metadata = {
  title: "Contact",
  description: "Begin your journey with Vela & Co. Tell us about your dream trip and we'll craft something extraordinary.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <SubPageHero
          image="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80"
          alt="Luxury hotel"
          label="Get in Touch"
          title="Contact Us"
          height="h-[50vh] min-h-[350px]"
        />

        {/* Contact Form Section */}
        <section className="py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid gap-16 lg:grid-cols-2">
              {/* Left - Image */}
              <ScrollReveal>
                <ImageReveal
                  src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80"
                  alt="Luxury travel destination"
                  aspectClass="aspect-[3/4]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </ScrollReveal>

              {/* Right - Form */}
              <ScrollReveal delay={0.2}>
                <div>
                  <SectionLabel>Begin Your Journey</SectionLabel>
                  <h2 className="mt-4 font-heading text-3xl font-medium text-text md:text-4xl">
                    Tell Us About Your
                    <br />
                    Dream Journey
                  </h2>
                  <p className="mt-4 font-sans text-base text-text/60">
                    Share your travel aspirations and we&apos;ll be in touch within 24 hours to begin crafting your bespoke experience.
                  </p>

                  <form className="mt-10 space-y-8">
                    <div className="grid gap-8 sm:grid-cols-2">
                      <PremiumInput label="First Name" name="firstName" />
                      <PremiumInput label="Last Name" name="lastName" />
                    </div>
                    <PremiumInput label="Email Address" type="email" name="email" />
                    <PremiumInput
                      label="Destination Interest"
                      name="destination"
                      placeholder="e.g., Italian Riviera, Japan, Maldives"
                    />
                    <div className="grid gap-8 sm:grid-cols-2">
                      <PremiumInput
                        label="Approximate Dates"
                        name="dates"
                        placeholder="e.g., September 2026"
                      />
                      <PremiumInput
                        label="Number of Travellers"
                        name="travellers"
                        placeholder="e.g., 2 adults"
                      />
                    </div>
                    <PremiumInput
                      label="Tell Us More"
                      name="message"
                      textarea
                      rows={4}
                      placeholder="What does your ideal journey look like?"
                    />
                    <Button type="submit">
                      Send Enquiry
                    </Button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="bg-dark py-16">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row lg:px-12">
            <div className="text-center md:text-left">
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-muted">Email</p>
              <p className="mt-1 font-sans text-base text-white/70">hello@velaandco.com</p>
            </div>
            <div className="text-center">
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-muted">Phone</p>
              <p className="mt-1 font-sans text-base text-white/70">+44 (0) 20 7946 0123</p>
            </div>
            <div className="text-center md:text-right">
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-muted">Address</p>
              <p className="mt-1 font-sans text-base text-white/70">14 Albemarle Street, Mayfair, London W1S 4HJ</p>
            </div>
          </div>
        </section>
      </PageWrapper>
      <Footer />
    </>
  );
}
