"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { easeSmooth } from "@/lib/animations";

const navLinks = [
  { href: "/about", label: "About", image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=400&q=80" },
  { href: "/services", label: "Services", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80" },
  { href: "/destinations", label: "Destinations", image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&q=80" },
  { href: "/journal", label: "Journal", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&q=80" },
  { href: "/reviews", label: "Reviews", image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=400&q=80" },
  { href: "/contact", label: "Contact", image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=80" },
];

interface NavbarProps {
  transparent?: boolean;
}

export default function Navbar({ transparent = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isLight = mobileOpen || (transparent && !scrolled);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-300 ${
          mobileOpen
            ? "bg-transparent"
            : scrolled
              ? "bg-bg/95 backdrop-blur-sm shadow-sm"
              : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
          <Link href="/" className="relative z-10">
            <span className={`font-heading text-2xl font-medium tracking-wide transition-colors duration-300 ${isLight ? "text-white" : "text-text"}`}>
              Vela <span className={isLight ? "text-white/70" : "text-muted"}>&</span> Co.
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative font-sans text-sm uppercase tracking-[0.12em] transition-colors duration-300 ${isLight ? "text-white/90 hover:text-white" : "text-text hover:text-muted"}`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-1/2 h-px w-0 -translate-x-1/2 transition-[width] duration-200 group-hover:w-full ${isLight ? "bg-white" : "bg-text"}`}
                  style={{ transformOrigin: "center" }}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-10 flex flex-col gap-1.5 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className={`block h-px w-6 ${isLight ? "bg-white" : "bg-text"}`}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className={`block h-px w-6 ${isLight ? "bg-white" : "bg-text"}`}
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className={`block h-px w-6 ${isLight ? "bg-white" : "bg-text"}`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-dark"
          >
            <nav className="flex flex-col gap-1 px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20, filter: "blur(6px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -10, transition: { duration: 0.15 } }}
                  transition={{ delay: i * 0.05 + 0.1, duration: 0.4, ease: easeSmooth }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="group flex items-center gap-4 py-3"
                  >
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-sm">
                      <Image
                        src={link.image}
                        alt={link.label}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="48px"
                      />
                    </div>
                    <span className="font-heading text-2xl font-medium text-white transition-colors group-hover:text-white/70">
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
