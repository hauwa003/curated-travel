"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import { destinations } from "@/lib/data";

export default function FeaturedDestinations() {
  const featured = destinations.filter((d) => d.featured);

  return (
    <section className="bg-ivory py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <ScrollReveal>
          <SectionLabel align="center">Destinations</SectionLabel>
          <h2 className="mt-4 text-center font-display text-4xl font-light text-charcoal md:text-5xl">
            Where We&apos;ll Take You
          </h2>
        </ScrollReveal>

        {/* Asymmetric Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((dest, i) => (
            <ScrollReveal
              key={dest.slug}
              delay={i * 0.1}
              className={i === 0 ? "md:col-span-2 lg:col-span-2 lg:row-span-2" : ""}
            >
              <Link href={`/destinations#${dest.slug}`} className="group relative block">
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 16px 50px rgba(12, 27, 42, 0.16)" }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden"
                >
                  <div className={`relative ${i === 0 ? "aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px]" : "aspect-[3/4]"}`}>
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes={i === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-500 group-hover:-translate-y-2 md:p-8">
                      <span className="font-body text-xs uppercase tracking-[0.2em] text-gold">
                        {dest.region}
                      </span>
                      <h3 className={`mt-2 font-display font-light text-white ${i === 0 ? "text-3xl md:text-4xl" : "text-2xl"}`}>
                        {dest.name}
                      </h3>
                      <p className="mt-2 max-w-md font-body text-sm text-white/70">
                        {dest.tagline}
                      </p>
                      <span className="mt-3 inline-block font-body text-xs uppercase tracking-[0.15em] text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Explore &rarr;
                      </span>
                    </div>
                  </div>
                </motion.div>
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
  );
}
