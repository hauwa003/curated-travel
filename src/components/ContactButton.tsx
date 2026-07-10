"use client";

import { motion } from "framer-motion";
import { useContactModal } from "@/components/ContactModal";
import { easeSmooth } from "@/lib/animations";

interface ContactButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function ContactButton({
  children,
  variant = "primary",
  className = "",
}: ContactButtonProps) {
  const { open } = useContactModal();

  const base =
    "inline-flex items-center justify-center px-8 py-3.5 text-sm font-sans uppercase tracking-[0.15em] transition-[color,background-color,border-color] duration-200 group/btn";

  const variants = {
    primary: "bg-text text-white hover:bg-muted",
    secondary: "border border-text text-text hover:bg-text hover:text-white",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  return (
    <motion.button
      type="button"
      onClick={open}
      whileHover={{ y: -2, boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)" }}
      whileTap={{ scale: 0.97, y: 0, boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.15, ease: easeSmooth }}
      className={classes}
    >
      <span>{children}</span>
      <span className="inline-flex w-0 overflow-hidden transition-[width,margin] duration-200 group-hover/btn:w-5 group-hover/btn:ml-1">
        <span className="translate-x-[-10px] transition-transform duration-200 group-hover/btn:translate-x-0">
          &rarr;
        </span>
      </span>
    </motion.button>
  );
}
