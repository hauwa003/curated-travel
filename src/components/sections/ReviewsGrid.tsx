"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import Divider from "@/components/Divider";
import { testimonials } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/animations";

export default function ReviewsGrid() {
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
          className="columns-1 gap-8 md:columns-2 lg:columns-3"
        >
          {testimonials.map((testimonial, i) => (
            <ScrollReveal
              key={testimonial.id}
              delay={i * 0.08}
              className="mb-8 break-inside-avoid"
            >
              <div className="group rounded-sm bg-surface p-8 transition-shadow duration-300 hover:shadow-[var(--shadow-elevation-1)] md:p-10">
                {/* Decorative quote mark */}
                <div className="font-heading text-6xl leading-none text-muted/20 select-none">
                  &ldquo;
                </div>

                {/* Quote */}
                <blockquote className="-mt-4 font-heading text-lg font-medium leading-relaxed text-text md:text-xl">
                  {testimonial.quote}
                </blockquote>

                {/* Divider */}
                <Divider className="mt-6" width="w-12" />

                {/* Author row */}
                <div className="mt-6 flex items-center gap-4">
                  {testimonial.image && (
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-sans text-sm uppercase tracking-[0.15em] text-text">
                      {testimonial.author}
                    </p>
                    <p className="mt-0.5 font-sans text-sm text-text/60">
                      {testimonial.location}
                    </p>
                    <p className="mt-0.5 font-sans text-xs uppercase tracking-[0.1em] text-muted">
                      {testimonial.trip}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
