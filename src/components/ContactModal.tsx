"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import PremiumInput from "@/components/PremiumInput";
import Divider from "@/components/Divider";
import { destinations } from "@/lib/data";
import { easeSmooth, easeExpo } from "@/lib/animations";

/* ─── Context ─── */
const ContactModalContext = createContext<{
  open: () => void;
  close: () => void;
  isOpen: boolean;
}>({ open: () => {}, close: () => {}, isOpen: false });

export const useContactModal = () => useContext(ContactModalContext);

/* ─── Provider ─── */
export function ContactModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      globalThis.lenis?.stop();
    } else {
      document.body.style.overflow = "";
      globalThis.lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      globalThis.lenis?.start();
    };
  }, [isOpen]);

  return (
    <ContactModalContext.Provider value={{ open, close, isOpen }}>
      {children}
      <AnimatePresence>
        {isOpen && <ContactModalContent onClose={close} />}
      </AnimatePresence>
    </ContactModalContext.Provider>
  );
}

/* ─── Trigger button (drop-in replacement for contact links) ─── */
export function ContactTrigger({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { open } = useContactModal();
  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}

/* ─── Constants ─── */
const travelStyles = [
  "Adventure",
  "Relaxation",
  "Culture",
  "Romance",
  "Family",
  "Wellness",
];

const budgetRanges = [
  "Under $5,000 pp",
  "$5,000 - $10,000 pp",
  "$10,000 - $20,000 pp",
  "$20,000+ pp",
  "Flexible",
];

const heroImage =
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80";

/* ─── Modal Content ─── */
function ContactModalContent({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  // Form state
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>(
    []
  );
  const [travellers, setTravellers] = useState(2);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [budget, setBudget] = useState("");

  const toggleDestination = (name: string) =>
    setSelectedDestinations((prev) =>
      prev.includes(name) ? prev.filter((d) => d !== name) : [...prev, name]
    );

  const toggleStyle = (style: string) =>
    setSelectedStyles((prev) =>
      prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]
    );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const stepLabels = ["About You", "Your Trip", "Final Details"];

  // Close on escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      data-lenis-prevent
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-dark/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.4, ease: easeExpo }}
        className="relative z-10 flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden bg-bg shadow-[var(--shadow-elevation-4)]"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center bg-dark/40 text-white transition-colors hover:bg-dark/60"
          aria-label="Close"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Hero image */}
        <div className="relative h-48 shrink-0 overflow-hidden md:h-56">
          <Image
            src={heroImage}
            alt="Luxury travel"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 672px"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/20 via-transparent to-dark/40" />
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto overscroll-contain" data-lenis-prevent>
          <div className="px-6 py-8 md:px-10 md:py-10">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key={`step-${step}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: easeSmooth }}
                >
                  {/* Progress */}
                  <div className="mb-8 flex items-center gap-2">
                    {stepLabels.map((label, i) => (
                      <div key={label} className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => i < step && setStep(i)}
                          className={`font-sans text-xs uppercase tracking-[0.15em] transition-colors ${
                            i === step
                              ? "text-text"
                              : i < step
                                ? "text-muted cursor-pointer hover:text-text"
                                : "text-muted/40"
                          }`}
                        >
                          {label}
                        </button>
                        {i < stepLabels.length - 1 && (
                          <span className="font-sans text-xs text-muted/30">
                            /
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Step 1: About You */}
                  {step === 0 && (
                    <div className="space-y-8">
                      <div>
                        <h3 className="font-heading text-2xl font-medium text-text">
                          Let's start with you
                        </h3>
                        <p className="mt-2 font-sans text-sm text-muted">
                          So we know who we're crafting this journey for.
                        </p>
                      </div>
                      <div className="grid gap-8 sm:grid-cols-2">
                        <PremiumInput label="First Name" name="firstName" />
                        <PremiumInput label="Last Name" name="lastName" />
                      </div>
                      <PremiumInput
                        label="Email Address"
                        type="email"
                        name="email"
                      />
                      <div className="flex justify-end pt-4">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="inline-flex items-center gap-2 bg-text px-8 py-3.5 font-sans text-sm uppercase tracking-[0.15em] text-white transition-colors hover:bg-muted"
                        >
                          Next
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Your Trip */}
                  {step === 1 && (
                    <div className="space-y-10">
                      <div>
                        <h3 className="font-heading text-2xl font-medium text-text">
                          Where are you dreaming of?
                        </h3>
                        <p className="mt-2 font-sans text-sm text-muted">
                          Select destinations and we'll show you what's possible.
                        </p>
                      </div>

                      {/* Destination cards */}
                      <div className="grid grid-cols-3 gap-2 sm:gap-3">
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
                              <div
                                className={`absolute inset-0 transition-colors duration-200 ${
                                  selectedDestinations.includes(dest.name)
                                    ? "bg-dark/30"
                                    : "bg-dark/50 group-hover:bg-dark/35"
                                }`}
                              />
                              {selectedDestinations.includes(dest.name) && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center bg-white sm:h-5 sm:w-5"
                                >
                                  <svg
                                    className="h-2.5 w-2.5 text-text sm:h-3 sm:w-3"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={3}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                </motion.div>
                              )}
                              <div className="absolute inset-x-0 bottom-0 p-1.5 sm:p-2">
                                <p className="font-sans text-[10px] uppercase tracking-[0.1em] text-white sm:text-xs sm:tracking-[0.12em]">
                                  {dest.name}
                                </p>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>

                      <div className="flex justify-between pt-4">
                        <button
                          type="button"
                          onClick={() => setStep(0)}
                          className="font-sans text-sm uppercase tracking-[0.15em] text-muted transition-colors hover:text-text"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="inline-flex items-center gap-2 bg-text px-8 py-3.5 font-sans text-sm uppercase tracking-[0.15em] text-white transition-colors hover:bg-muted"
                        >
                          Next
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Final Details */}
                  {step === 2 && (
                    <form onSubmit={handleSubmit} className="space-y-10">
                      <div>
                        <h3 className="font-heading text-2xl font-medium text-text">
                          A few more details
                        </h3>
                        <p className="mt-2 font-sans text-sm text-muted">
                          Help us understand what you're looking for.
                        </p>
                      </div>

                      {/* Dates + Travellers */}
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
                              onClick={() =>
                                setTravellers((v) => Math.max(1, v - 1))
                              }
                              className="flex h-10 w-10 items-center justify-center border border-text/20 font-sans text-lg text-muted transition-colors duration-200 hover:border-text hover:text-text"
                            >
                              -
                            </button>
                            <span className="min-w-[2ch] text-center font-heading text-2xl font-medium text-text">
                              {travellers}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                setTravellers((v) => Math.min(20, v + 1))
                              }
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
                          Type of experience
                        </label>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {travelStyles.map((style) => (
                            <button
                              key={style}
                              type="button"
                              onClick={() => toggleStyle(style)}
                              className={`px-4 py-2 font-sans text-xs uppercase tracking-[0.15em] transition-[color,background-color,border-color] duration-200 ${
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
                          Budget range
                        </label>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {budgetRanges.map((range) => (
                            <button
                              key={range}
                              type="button"
                              onClick={() =>
                                setBudget(budget === range ? "" : range)
                              }
                              className={`px-4 py-2 font-sans text-xs uppercase tracking-[0.15em] transition-[color,background-color,border-color] duration-200 ${
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
                        label="Anything else?"
                        name="message"
                        textarea
                        rows={3}
                        placeholder="Special occasions, accessibility needs, must-have experiences..."
                      />

                      <div className="flex justify-between pt-4">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="font-sans text-sm uppercase tracking-[0.15em] text-muted transition-colors hover:text-text"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="inline-flex items-center gap-2 bg-text px-8 py-3.5 font-sans text-sm uppercase tracking-[0.15em] text-white transition-colors hover:bg-muted"
                        >
                          Send Enquiry
                        </button>
                      </div>
                    </form>
                  )}
                </motion.div>
              ) : (
                /* Success */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: easeExpo }}
                  className="flex flex-col items-center py-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2,
                      ease: easeExpo,
                    }}
                    className="flex h-16 w-16 items-center justify-center bg-text"
                  >
                    <motion.svg
                      className="h-8 w-8 text-white"
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
                        transition={{
                          duration: 0.4,
                          delay: 0.5,
                          ease: easeSmooth,
                        }}
                      />
                    </motion.svg>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Divider className="mx-auto mt-6" width="w-10" />
                    <h3 className="mt-6 font-heading text-2xl font-medium text-text">
                      Thank You
                    </h3>
                    <p className="mx-auto mt-3 max-w-sm font-sans text-sm leading-relaxed text-muted">
                      Your enquiry has been received. One of our advisors will
                      be in touch within 24 hours to begin crafting your
                      journey.
                    </p>
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    type="button"
                    onClick={onClose}
                    className="mt-8 border border-text px-8 py-3 font-sans text-sm uppercase tracking-[0.15em] text-text transition-colors hover:bg-text hover:text-white"
                  >
                    Close
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
