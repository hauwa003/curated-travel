"use client";

import { motion } from "framer-motion";
import { easeExpo } from "@/lib/animations";

interface DividerProps {
  className?: string;
  width?: string;
}

export default function Divider({ className = "", width = "w-16" }: DividerProps) {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: easeExpo }}
      style={{ originX: 0.5 }}
      className={`h-px bg-gold/40 ${width} ${className}`}
    />
  );
}
