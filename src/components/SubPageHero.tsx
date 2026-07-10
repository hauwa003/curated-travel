"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import { easeExpo, easeSmooth } from "@/lib/animations";

interface SubPageHeroProps {
  image: string;
  alt: string;
  label: string;
  title: string;
  subtitle?: string;
  height?: string;
  children?: React.ReactNode;
}

export default function SubPageHero({
  image,
  alt,
  label,
  title,
  subtitle,
  height = "h-[60vh] min-h-[400px]",
  children,
}: SubPageHeroProps) {
  return (
    <section className={`relative ${height} w-full overflow-hidden`}>
      {/* Image with scale settle */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: easeExpo }}
        className="absolute inset-0"
      >
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Overlay  - fades in with delay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: easeSmooth }}
        className="absolute inset-0 bg-dark/40"
      />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        <SectionLabel>{label}</SectionLabel>
        <motion.h1
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.4, ease: easeSmooth }}
          className="mt-4 font-heading text-3xl font-medium text-white md:text-4xl lg:text-5xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.6, ease: easeSmooth }}
            className="mt-4 max-w-lg font-sans text-base text-white/70"
          >
            {subtitle}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  );
}
