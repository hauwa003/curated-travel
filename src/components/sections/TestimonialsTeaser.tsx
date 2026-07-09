"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { testimonials } from "@/lib/data";

const INTERVAL = 6000;

export default function TestimonialsTeaser() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    const timer = setInterval(advance, INTERVAL);
    return () => clearInterval(timer);
  }, [advance]);

  // Progress animation — updates every 50ms
  useEffect(() => {
    setProgress(0);
    const step = 50;
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step / INTERVAL;
        return next >= 1 ? 1 : next;
      });
    }, step);
    return () => clearInterval(interval);
  }, [current]);

  const t = testimonials[current];

  return (
    <section className="bg-dark py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <ScrollReveal>
          <motion.div
            key={`quote-${current}`}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="font-heading text-6xl text-muted/30"
          >
            &ldquo;
          </motion.div>
        </ScrollReveal>

        <div className="relative min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(8px)" }}
              transition={{ duration: 0.6 }}
            >
              <blockquote className="font-heading text-xl font-medium leading-relaxed text-white/90 md:text-2xl lg:text-3xl">
                {t.quote}
              </blockquote>
              <div className="mt-8">
                <p className="font-sans text-sm uppercase tracking-[0.15em] text-muted">
                  {t.author}
                </p>
                <p className="mt-1 font-sans text-sm text-white/50">
                  {t.trip}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Dots */}
        <div className="mt-10 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); setProgress(0); }}
              className="relative h-1.5 overflow-hidden rounded-full transition-all duration-300"
              style={{ width: i === current ? 32 : 6, backgroundColor: i === current ? "transparent" : "rgba(255,255,255,0.2)" }}
              aria-label={`Go to testimonial ${i + 1}`}
            >
              {i === current && (
                <>
                  <div className="absolute inset-0 rounded-full bg-muted/30" />
                  <motion.div
                    className="absolute inset-0 origin-left rounded-full bg-text"
                    style={{ scaleX: progress }}
                  />
                </>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
