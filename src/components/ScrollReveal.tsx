"use client";

import { motion, type Variants } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface ScrollRevealProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}

export default function ScrollReveal({
  children,
  variants = fadeUp,
  className,
  delay = 0,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
