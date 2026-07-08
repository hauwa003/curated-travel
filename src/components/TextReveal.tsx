"use client";

import { motion } from "framer-motion";
import { easeSmooth } from "@/lib/animations";

interface TextRevealProps {
  text: string;
  className?: string;
}

export default function TextReveal({ text, className = "" }: TextRevealProps) {
  const words = text.split(" ");

  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block" style={{ clipPath: "inset(0 0 0 0)" }}>
          <motion.span
            className="inline-block"
            variants={{
              hidden: { clipPath: "inset(0 0 100% 0)", opacity: 0 },
              visible: {
                clipPath: "inset(0 0 0% 0)",
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: i * 0.04,
                  ease: easeSmooth,
                },
              },
            }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </motion.p>
  );
}
