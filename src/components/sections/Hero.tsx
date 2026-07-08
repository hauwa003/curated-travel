"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/Button";
import { easeExpo, easeSmooth } from "@/lib/animations";

const taglineChars = "Journeys, Crafted".split("");

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image — Ken Burns slow zoom */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 20, ease: "linear" }}
        className="absolute inset-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=80"
          alt="Luxury coastal destination"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Gradient Overlay — fade in */}
      <motion.div
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: easeSmooth }}
        className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/20 to-navy/60"
      />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        {/* Tagline — character-level reveal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="font-body text-xs uppercase tracking-[0.3em] text-gold">
            {taglineChars.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.03, ease: easeSmooth }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
        </motion.div>

        {/* Headline — blur-to-focus */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.5, ease: easeExpo }}
          className="mt-6 max-w-4xl font-display text-5xl font-light leading-[1.1] text-white md:text-7xl lg:text-8xl"
        >
          Travel as It Was
          <br />
          <span className="italic">Meant to Be</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.8, ease: easeExpo }}
          className="mt-6 max-w-lg font-body text-base leading-relaxed text-white/80 md:text-lg"
        >
          Bespoke journeys to the world&apos;s most extraordinary destinations,
          crafted by advisors who have been there before you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: easeExpo }}
          className="mt-10 flex gap-4"
        >
          <Button href="/destinations" variant="primary">
            Explore Destinations
          </Button>
          <Button href="/contact" variant="secondary" className="border-white/40 text-white hover:bg-white hover:text-navy">
            Begin Your Journey
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="h-10 w-6 rounded-full border border-white/30 p-1"
        >
          <div className="mx-auto h-2 w-0.5 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
