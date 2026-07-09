"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { easeSmooth } from "@/lib/animations";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-8 py-3.5 text-sm font-sans uppercase tracking-[0.15em] transition-[color,background-color,border-color] duration-200 group/btn";

  const variants = {
    primary: "bg-text text-white hover:bg-muted",
    secondary: "border border-text text-text hover:bg-text hover:text-white",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  const hoverProps = {
    whileHover: { y: -2, boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)" },
    whileTap: { scale: 0.97, y: 0, boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)" },
    transition: { duration: 0.15, ease: easeSmooth },
  };

  const inner = (
    <>
      <span>{children}</span>
      <span className="inline-flex w-0 overflow-hidden transition-[width,margin] duration-200 group-hover/btn:w-5 group-hover/btn:ml-1">
        <span className="translate-x-[-10px] transition-transform duration-200 group-hover/btn:translate-x-0">
          &rarr;
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <motion.div {...hoverProps} className="inline-block">
        <Link href={href} className={classes}>
          {inner}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      {...hoverProps}
      className={classes}
    >
      {inner}
    </motion.button>
  );
}
