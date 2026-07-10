"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PremiumInput from "@/components/PremiumInput";
import Button from "@/components/Button";
import { destinations } from "@/lib/data";

const destinationNames = destinations.map((d) => d.name);

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

export default function ContactForm() {
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);
  const [otherDestination, setOtherDestination] = useState("");
  const [travellers, setTravellers] = useState(2);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [budget, setBudget] = useState("");

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

  return (
    <form className="mt-10 space-y-12">
      {/* Name */}
      <div className="grid gap-8 sm:grid-cols-2">
        <PremiumInput label="First Name" name="firstName" />
        <PremiumInput label="Last Name" name="lastName" />
      </div>

      {/* Email */}
      <PremiumInput label="Email Address" type="email" name="email" />

      {/* Destinations */}
      <div>
        <label className="font-sans text-xs uppercase tracking-[0.15em] text-muted">
          Where would you like to go?
        </label>
        <p className="mt-1 font-sans text-sm text-muted/60">
          Select one or more destinations
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {destinationNames.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => toggleDestination(name)}
              className={`px-5 py-2 font-sans text-xs uppercase tracking-[0.15em] transition-[color,background-color,border-color] duration-200 ${
                selectedDestinations.includes(name)
                  ? "bg-text text-white"
                  : "border border-text/20 text-muted hover:border-text hover:text-text"
              }`}
            >
              {name}
            </button>
          ))}
          <button
            type="button"
            onClick={() => toggleDestination("Other")}
            className={`px-5 py-2 font-sans text-xs uppercase tracking-[0.15em] transition-[color,background-color,border-color] duration-200 ${
              selectedDestinations.includes("Other")
                ? "bg-text text-white"
                : "border border-text/20 text-muted hover:border-text hover:text-text"
            }`}
          >
            Other
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

      {/* Travel Dates + Travellers row */}
      <div className="grid gap-8 sm:grid-cols-2">
        <PremiumInput
          label="Approximate Dates"
          name="dates"
          placeholder="e.g., September 2026"
        />

        {/* Traveller stepper */}
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
  );
}
