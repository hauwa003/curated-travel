"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { destinations } from "@/lib/data";

const regions = ["All", ...Array.from(new Set(destinations.map((d) => d.region)))];

export default function DestinationsGrid() {
  const [activeRegion, setActiveRegion] = useState("All");

  const filtered =
    activeRegion === "All"
      ? destinations
      : destinations.filter((d) => d.region === activeRegion);

  return (
    <div>
      {/* Region Filter */}
      <div className="flex flex-wrap justify-center gap-3">
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => setActiveRegion(region)}
            className={`px-5 py-2 font-sans text-xs uppercase tracking-[0.15em] transition-[color,background-color,border-color] duration-200 ${
              activeRegion === region
                ? "bg-text text-white"
                : "border border-text/20 text-text/60 hover:border-text hover:text-muted"
            }`}
          >
            {region}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((dest) => (
            <motion.div
              key={dest.slug}
              id={dest.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -6, boxShadow: "0 16px 50px rgba(12, 27, 42, 0.16)" }}
              className="group relative overflow-hidden"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-300 group-hover:-translate-y-2">
                  <span className="font-sans text-xs uppercase tracking-[0.2em] text-muted">
                    {dest.region}
                  </span>
                  <h3 className="mt-2 font-heading text-2xl font-medium text-white">
                    {dest.name}
                  </h3>
                  <p className="mt-1 font-sans text-sm text-white/60">
                    {dest.tagline}
                  </p>
                  <p className="mt-3 max-h-0 overflow-hidden font-sans text-sm leading-relaxed text-white/70 transition-[max-height] duration-500 group-hover:max-h-40">
                    {dest.description}
                  </p>
                  <span className="mt-2 inline-block font-sans text-xs uppercase tracking-[0.15em] text-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Explore &rarr;
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
