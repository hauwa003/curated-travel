"use client";

import { motion } from "framer-motion";
import { easeExpo, easeSmooth } from "@/lib/animations";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}

export default function SectionLabel({
  children,
  className = "",
  align = "left",
}: SectionLabelProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`flex items-center gap-4 ${align === "center" ? "justify-center" : ""} ${className}`}
    >
      <motion.div
        variants={{
          hidden: { scaleX: 0, opacity: 0 },
          visible: {
            scaleX: 1,
            opacity: 1,
            transition: { duration: 0.6, ease: easeExpo },
          },
        }}
        style={{ originX: 0 }}
        className="h-px w-8 bg-gold"
      />
      <motion.span
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration: 0.5, delay: 0.3, ease: easeSmooth },
          },
        }}
        className="text-xs font-body uppercase tracking-[0.2em] text-gold"
      >
        {children}
      </motion.span>
    </motion.div>
  );
}
