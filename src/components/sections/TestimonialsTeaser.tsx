"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { testimonials } from "@/lib/data";

export default function TestimonialsTeaser() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section className="bg-navy py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <ScrollReveal>
          <div className="font-display text-6xl text-gold/30">&ldquo;</div>
        </ScrollReveal>

        <div className="relative min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <blockquote className="font-display text-xl font-light leading-relaxed text-white/90 md:text-2xl lg:text-3xl">
                {t.quote}
              </blockquote>
              <div className="mt-8">
                <p className="font-body text-sm uppercase tracking-[0.15em] text-gold">
                  {t.author}
                </p>
                <p className="mt-1 font-body text-sm text-white/50">
                  {t.trip}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="mt-10 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-gold" : "w-1.5 bg-white/20"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
