"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { easeExpo } from "@/lib/animations";

interface ImageRevealProps {
  src: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
  className?: string;
  aspectClass?: string;
  priority?: boolean;
}

export default function ImageReveal({
  src,
  alt,
  fill = true,
  sizes,
  className = "",
  aspectClass = "aspect-[4/3]",
  priority = false,
}: ImageRevealProps) {
  return (
    <motion.div
      initial={{ clipPath: "inset(100% 0 0 0)" }}
      whileInView={{ clipPath: "inset(0% 0 0 0)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1, ease: easeExpo }}
      className={`relative overflow-hidden ${aspectClass} ${className}`}
    >
      <motion.div
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2, ease: easeExpo }}
        className="absolute inset-0"
      >
        <Image
          src={src}
          alt={alt}
          fill={fill}
          className="object-cover"
          sizes={sizes}
          priority={priority}
        />
      </motion.div>
    </motion.div>
  );
}
