"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/Button";
import { easeExpo } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=80"
        alt="Luxury coastal destination"
        fill
        className="object-cover"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/20 to-navy/60" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: easeExpo }}
        >
          <span className="font-body text-xs uppercase tracking-[0.3em] text-gold">
            Journeys, Crafted
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: easeExpo }}
          className="mt-6 max-w-4xl font-display text-5xl font-light leading-[1.1] text-white md:text-7xl lg:text-8xl"
        >
          Travel as It Was
          <br />
          <span className="italic">Meant to Be</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
