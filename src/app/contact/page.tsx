import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Contact",
  description: "Begin your journey with Vela & Co. Tell us about your dream trip and we'll craft something extraordinary.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[350px] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80"
            alt="Luxury hotel"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-navy/40" />
          <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
            <SectionLabel>Get in Touch</SectionLabel>
            <h1 className="mt-4 font-display text-5xl font-light text-white md:text-6xl lg:text-7xl">
              Contact Us
            </h1>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid gap-16 lg:grid-cols-2">
              {/* Left - Image */}
              <ScrollReveal>
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80"
                    alt="Luxury travel destination"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </ScrollReveal>

              {/* Right - Form */}
              <ScrollReveal delay={0.2}>
                <div>
                  <SectionLabel>Begin Your Journey</SectionLabel>
                  <h2 className="mt-4 font-display text-3xl font-light text-charcoal md:text-4xl">
                    Tell Us About Your
                    <br />
                    <span className="italic">Dream Journey</span>
                  </h2>
                  <p className="mt-4 font-body text-base text-charcoal/60">
                    Share your travel aspirations and we&apos;ll be in touch within 24 hours to begin crafting your bespoke experience.
                  </p>

                  <form className="mt-10 space-y-8">
                    <div className="grid gap-8 sm:grid-cols-2">
                      <div>
                        <label className="font-body text-xs uppercase tracking-[0.15em] text-charcoal/50">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="mt-2 w-full border-0 border-b border-charcoal/20 bg-transparent pb-2 font-body text-base text-charcoal transition-colors focus:border-gold"
                        />
                      </div>
                      <div>
                        <label className="font-body text-xs uppercase tracking-[0.15em] text-charcoal/50">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="mt-2 w-full border-0 border-b border-charcoal/20 bg-transparent pb-2 font-body text-base text-charcoal transition-colors focus:border-gold"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-body text-xs uppercase tracking-[0.15em] text-charcoal/50">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="mt-2 w-full border-0 border-b border-charcoal/20 bg-transparent pb-2 font-body text-base text-charcoal transition-colors focus:border-gold"
                      />
                    </div>

                    <div>
                      <label className="font-body text-xs uppercase tracking-[0.15em] text-charcoal/50">
                        Destination Interest
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., Italian Riviera, Japan, Maldives"
                        className="mt-2 w-full border-0 border-b border-charcoal/20 bg-transparent pb-2 font-body text-base text-charcoal placeholder:text-charcoal/30 transition-colors focus:border-gold"
                      />
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2">
                      <div>
                        <label className="font-body text-xs uppercase tracking-[0.15em] text-charcoal/50">
                          Approximate Dates
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., September 2026"
                          className="mt-2 w-full border-0 border-b border-charcoal/20 bg-transparent pb-2 font-body text-base text-charcoal placeholder:text-charcoal/30 transition-colors focus:border-gold"
                        />
                      </div>
                      <div>
                        <label className="font-body text-xs uppercase tracking-[0.15em] text-charcoal/50">
                          Number of Travellers
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., 2 adults"
                          className="mt-2 w-full border-0 border-b border-charcoal/20 bg-transparent pb-2 font-body text-base text-charcoal placeholder:text-charcoal/30 transition-colors focus:border-gold"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-body text-xs uppercase tracking-[0.15em] text-charcoal/50">
                        Tell Us More
                      </label>
                      <textarea
                        rows={4}
                        placeholder="What does your ideal journey look like?"
                        className="mt-2 w-full resize-none border-0 border-b border-charcoal/20 bg-transparent pb-2 font-body text-base text-charcoal placeholder:text-charcoal/30 transition-colors focus:border-gold"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center bg-gold px-10 py-4 font-body text-sm uppercase tracking-[0.15em] text-navy transition-all duration-300 hover:bg-champagne"
                    >
                      Send Enquiry
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="bg-navy py-16">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row lg:px-12">
            <div className="text-center md:text-left">
              <p className="font-body text-xs uppercase tracking-[0.2em] text-gold">Email</p>
              <p className="mt-1 font-body text-base text-white/70">hello@velaandco.com</p>
            </div>
            <div className="text-center">
              <p className="font-body text-xs uppercase tracking-[0.2em] text-gold">Phone</p>
              <p className="mt-1 font-body text-base text-white/70">+44 (0) 20 7946 0123</p>
            </div>
            <div className="text-center md:text-right">
              <p className="font-body text-xs uppercase tracking-[0.2em] text-gold">Address</p>
              <p className="mt-1 font-body text-base text-white/70">14 Albemarle Street, Mayfair, London W1S 4HJ</p>
            </div>
          </div>
        </section>
      </PageWrapper>
      <Footer />
    </>
  );
}
