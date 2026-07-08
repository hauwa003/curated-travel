"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ParallaxImage from "@/components/ParallaxImage";
import ScrollReveal from "@/components/ScrollReveal";
import Button from "@/components/Button";
import { easeSmooth } from "@/lib/animations";

export default function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Gradient shifts from cool navy to warm navy-gold
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.5, 0.4]);
  const warmOverlay = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.08, 0.15]);

  return (
    <section ref={sectionRef} className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
      <ParallaxImage
        src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1920&q=80"
        alt="Luxury travel destination"
        className="absolute inset-0 h-full w-full"
        speed={0.1}
      />

      {/* Cool overlay */}
      <motion.div
        className="absolute inset-0 bg-navy"
        style={{ opacity: overlayOpacity }}
      />

      {/* Warm gold tint */}
      <motion.div
        className="absolute inset-0 bg-gold"
        style={{ opacity: warmOverlay }}
      />

      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        <ScrollReveal>
          <motion.h2
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: easeSmooth }}
            className="max-w-3xl font-display text-4xl font-light text-white md:text-5xl lg:text-6xl"
          >
            Your Next Chapter
            <br />
            <span className="italic">Begins Here</span>
          </motion.h2>
          <p className="mx-auto mt-6 max-w-lg font-body text-base text-white/70">
            Tell us where your imagination wanders, and we&apos;ll craft a
            journey that exceeds it.
          </p>
          <div className="mt-10">
            <Button href="/contact">
              Start the Conversation
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
