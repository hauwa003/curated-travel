import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import ImageReveal from "@/components/ImageReveal";
import SubPageHero from "@/components/SubPageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Begin your journey with Vela & Co. Tell us about your dream trip and we'll craft something extraordinary.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar transparent />
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
                  <p className="mt-4 font-sans text-base text-muted">
                    Share your travel aspirations and we&apos;ll be in touch within 24 hours to begin crafting your bespoke experience.
                  </p>

                  <ContactForm />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="bg-dark py-16">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row lg:px-12">
            <div className="text-center md:text-left">
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-white/70">Email</p>
              <p className="mt-1 font-sans text-base text-white/70">hello@velaandco.com</p>
            </div>
            <div className="text-center">
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-white/70">Phone</p>
              <p className="mt-1 font-sans text-base text-white/70">+44 (0) 20 7946 0123</p>
            </div>
            <div className="text-center md:text-right">
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-white/70">Address</p>
              <p className="mt-1 font-sans text-base text-white/70">14 Albemarle Street, Mayfair, London W1S 4HJ</p>
            </div>
          </div>
        </section>
      </PageWrapper>
      <Footer />
    </>
  );
}
