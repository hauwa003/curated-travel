"use client";

import { useEffect } from "react";
import Lenis from "lenis";

declare global {
  // eslint-disable-next-line no-var
  var lenis: Lenis | undefined;
}

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    globalThis.lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      globalThis.lenis = undefined;
    };
  }, []);

  return null;
}
