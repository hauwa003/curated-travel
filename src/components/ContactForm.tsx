"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import PremiumInput from "@/components/PremiumInput";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import Divider from "@/components/Divider";
import { destinations } from "@/lib/data";
import { easeSmooth, easeExpo } from "@/lib/animations";

const travelStyles = [
  "Adventure",
  "Relaxation",
  "Culture",
  "Romance",
  "Family",
  "Wellness",
];

const budgetRanges = [
  "Under $5,000 per person",
  "$5,000 - $10,000 per person",
  "$10,000 - $20,000 per person",
  "$20,000+ per person",
  "Flexible / Undecided",
];

const defaultImage = "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80";

export default function ContactForm() {
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);
  const [otherDestination, setOtherDestination] = useState("");
  const [travellers, setTravellers] = useState(2);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggleDestination = (name: string) => {
    setSelectedDestinations((prev) =>
      prev.includes(name) ? prev.filter((d) => d !== name) : [...prev, name]
    );
  };

  const toggleStyle = (style: string) => {
    setSelectedStyles((prev) =>
      prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]
    );
  };

  // Get the image for the side panel based on the last selected destination
  const lastSelected = selectedDestinations.filter((d) => d !== "Other").slice(-1)[0];
  const panelDestination = lastSelected
    ? destinations.find((d) => d.name === lastSelected)
    : null;
  const panelImage = panelDestination?.image || defaultImage;
  const panelCaption = panelDestination
    ? `${panelDestination.name} - ${panelDestination.tagline}`
    : null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="grid gap-16 lg:grid-cols-2">
      {/* Left - Dynamic Image Panel */}
      <div className="relative hidden lg:block">
        <div className="sticky top-32">
          <div className="relative aspect-[3/4] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={panelImage}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: easeExpo }}
                className="absolute inset-0"
              >
                <Image
                  src={panelImage}
                  alt={panelCaption || "Luxury travel destination"}
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                {/* Gradient for caption */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-dark/70 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Caption overlay */}
            <AnimatePresence mode="wait">
              {panelCaption && (
                <motion.div
                  key={panelCaption}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: easeSmooth }}
                  className="absolute bottom-0 left-0 right-0 p-8"
                >
                  <p className="font-sans text-xs uppercase tracking-[0.2em] text-white/70">
                    Selected Destination
                  </p>
                  <p className="mt-2 font-heading text-xl font-medium text-white">
                    {panelCaption}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Right - Form or Success */}
      <div>
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: easeSmooth }}
            >
              <SectionLabel>Begin Your Journey</SectionLabel>
              <h2 className="mt-4 font-heading text-3xl font-medium text-text md:text-4xl">
                Tell Us About Your
                <br />
                Dream Journey
              </h2>
              <p className="mt-4 font-sans text-base text-muted">
                Share your travel aspirations and we&apos;ll be in touch within 24 hours to begin crafting your bespoke experience.
              </p>

              <form onSubmit={handleSubmit} className="mt-10 space-y-12">
                {/* Name */}
                <div className="grid gap-8 sm:grid-cols-2">
                  <PremiumInput label="First Name" name="firstName" />
                  <PremiumInput label="Last Name" name="lastName" />
                </div>

                {/* Email */}
                <PremiumInput label="Email Address" type="email" name="email" />

                {/* Destinations - cards with thumbnails */}
                <div>
                  <label className="font-sans text-xs uppercase tracking-[0.15em] text-muted">
                    Where would you like to go?
                  </label>
                  <p className="mt-1 font-sans text-sm text-muted/60">
                    Select one or more destinations
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {destinations.map((dest) => (
                      <button
                        key={dest.name}
                        type="button"
                        onClick={() => toggleDestination(dest.name)}
                        className={`group relative overflow-hidden transition-all duration-200 ${
                          selectedDestinations.includes(dest.name)
                            ? "ring-2 ring-text"
                            : "ring-1 ring-text/10 hover:ring-text/30"
                        }`}
                      >
                        <div className="relative aspect-[3/2]">
                          <Image
                            src={dest.image}
                            alt={dest.name}
                            fill
                            className="object-cover"
                            sizes="200px"
                          />
                          <div className={`absolute inset-0 transition-colors duration-200 ${
                            selectedDestinations.includes(dest.name)
                              ? "bg-dark/40"
                              : "bg-dark/50 group-hover:bg-dark/35"
                          }`} />
                          {/* Checkmark */}
                          {selectedDestinations.includes(dest.name) && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center bg-white"
                            >
                              <svg className="h-3 w-3 text-text" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </motion.div>
                          )}
                          <div className="absolute inset-x-0 bottom-0 p-2">
                            <p className="font-sans text-xs uppercase tracking-[0.12em] text-white">
                              {dest.name}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                    {/* Other option */}
                    <button
                      type="button"
                      onClick={() => toggleDestination("Other")}
                      className={`flex aspect-[3/2] items-center justify-center transition-all duration-200 ${
                        selectedDestinations.includes("Other")
                          ? "bg-text text-white ring-2 ring-text"
                          : "bg-surface text-muted ring-1 ring-text/10 hover:ring-text/30"
                      }`}
                    >
                      <span className="font-sans text-xs uppercase tracking-[0.15em]">
                        Other
                      </span>
                    </button>
                  </div>
                  {selectedDestinations.includes("Other") && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-4 overflow-hidden"
                    >
                      <PremiumInput
                        label="Tell us where"
                        name="otherDestination"
                        placeholder="e.g., Bali, South Africa, Peru"
                      />
                    </motion.div>
                  )}
                </div>

                {/* Travel Dates + Travellers */}
                <div className="grid gap-8 sm:grid-cols-2">
                  <PremiumInput
                    label="Approximate Dates"
                    name="dates"
                    placeholder="e.g., September 2026"
                  />
                  <div>
                    <label className="font-sans text-xs uppercase tracking-[0.15em] text-muted">
                      Number of Travellers
                    </label>
                    <div className="mt-3 flex items-center gap-6">
                      <button
                        type="button"
                        onClick={() => setTravellers((v) => Math.max(1, v - 1))}
                        className="flex h-10 w-10 items-center justify-center border border-text/20 font-sans text-lg text-muted transition-colors duration-200 hover:border-text hover:text-text"
                      >
                        -
                      </button>
                      <span className="min-w-[2ch] text-center font-heading text-2xl font-medium text-text">
                        {travellers}
                      </span>
                      <button
                        type="button"
                        onClick={() => setTravellers((v) => Math.min(20, v + 1))}
                        className="flex h-10 w-10 items-center justify-center border border-text/20 font-sans text-lg text-muted transition-colors duration-200 hover:border-text hover:text-text"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Travel Style */}
                <div>
                  <label className="font-sans text-xs uppercase tracking-[0.15em] text-muted">
                    What kind of experience are you looking for?
                  </label>
                  <p className="mt-1 font-sans text-sm text-muted/60">
                    Select all that apply
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {travelStyles.map((style) => (
                      <button
                        key={style}
                        type="button"
                        onClick={() => toggleStyle(style)}
                        className={`px-5 py-2 font-sans text-xs uppercase tracking-[0.15em] transition-[color,background-color,border-color] duration-200 ${
                          selectedStyles.includes(style)
                            ? "bg-text text-white"
                            : "border border-text/20 text-muted hover:border-text hover:text-text"
                        }`}
                      >
                        {style}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="font-sans text-xs uppercase tracking-[0.15em] text-muted">
                    Budget Range
                  </label>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {budgetRanges.map((range) => (
                      <button
                        key={range}
                        type="button"
                        onClick={() => setBudget(budget === range ? "" : range)}
                        className={`px-5 py-2 font-sans text-xs uppercase tracking-[0.15em] transition-[color,background-color,border-color] duration-200 ${
                          budget === range
                            ? "bg-text text-white"
                            : "border border-text/20 text-muted hover:border-text hover:text-text"
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <PremiumInput
                  label="Anything else we should know?"
                  name="message"
                  textarea
                  rows={4}
                  placeholder="Special occasions, accessibility needs, must-have experiences..."
                />

                {/* Submit */}
                <Button type="submit">
                  Send Enquiry
                </Button>
              </form>
            </motion.div>
          ) : (
            /* Success State */
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeExpo }}
              className="flex min-h-[60vh] flex-col items-center justify-center text-center"
            >
              {/* Animated check circle */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: easeExpo }}
                className="flex h-20 w-20 items-center justify-center bg-text"
              >
                <motion.svg
                  className="h-10 w-10 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.6, ease: easeSmooth }}
                  />
                </motion.svg>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: easeSmooth }}
              >
                <Divider className="mx-auto mt-8" width="w-12" />
                <h2 className="mt-8 font-heading text-3xl font-medium text-text md:text-4xl">
                  Thank You
                </h2>
                <p className="mx-auto mt-4 max-w-md font-sans text-base leading-relaxed text-muted">
                  Your enquiry has been received. One of our advisors will be in touch within 24 hours to begin crafting your journey.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9, ease: easeSmooth }}
                className="mt-10"
              >
                <Button href="/destinations" variant="secondary">
                  Explore Destinations
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
