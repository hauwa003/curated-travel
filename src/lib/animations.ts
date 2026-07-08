export const easeSmooth: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const easeExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeSmooth },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: easeSmooth },
  },
};

export const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const scaleReveal = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: easeExpo },
  },
};

export const slideIn = (direction: "left" | "right" = "left") => ({
  hidden: { opacity: 0, x: direction === "left" ? -40 : 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: easeSmooth },
  },
});
