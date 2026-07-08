"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { easeSmooth } from "@/lib/animations";
import type { ItineraryDay } from "@/lib/types";

function DayNumber({ day }: { day: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const display = String(day).padStart(2, "0");

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: easeSmooth }}
      className="font-display text-3xl font-light text-gold/40"
    >
      {display}
    </motion.span>
  );
}

interface TimelineProgressProps {
  itinerary: ItineraryDay[];
}

export default function TimelineProgress({ itinerary }: TimelineProgressProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative mt-16">
      {/* Static background line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gold/20" />

      {/* Animated gold progress line */}
      <motion.div
        className="absolute left-0 top-0 w-px bg-gold"
        style={{ height: lineHeight }}
      />

      <div className="space-y-0">
        {itinerary.map((day, i) => (
          <ScrollReveal key={day.day} delay={i * 0.05}>
            <div className="flex gap-6 py-8 pl-8 md:gap-10">
              <div className="shrink-0">
                <DayNumber day={day.day} />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-light text-charcoal">
                  {day.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-charcoal/60">
                  {day.description}
                </p>
              </div>
              {day.image && (
                <div className="relative hidden aspect-[4/3] w-40 shrink-0 overflow-hidden md:block">
                  <Image
                    src={day.image}
                    alt={day.title}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
