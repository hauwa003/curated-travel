"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import { easeExpo, easeSmooth } from "@/lib/animations";

const taglineChars = "Journeys, Crafted".split("");

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video — Ken Burns slow zoom */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 20, ease: "linear" }}
        className="absolute inset-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-poster.jpg"
          className="h-full w-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Gradient Overlay — fade in */}
      <motion.div
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: easeSmooth }}
        className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/50 to-dark/70"
      />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        {/* Tagline — character-level reveal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-white/70">
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
          className="mt-6 max-w-4xl font-heading text-4xl font-medium text-white md:text-5xl lg:text-6xl"
        >
          Experience Travel
          <br />
          as It Was Meant to Be
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.8, ease: easeExpo }}
          className="mt-6 max-w-lg font-sans text-base leading-relaxed text-white/80 md:text-lg"
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
          <Button href="/contact" variant="secondary" className="border-white/60 text-white hover:border-white hover:bg-white hover:text-text">
            Begin Your Journey
          </Button>
        </motion.div>
      </div>

    </section>
  );
}
