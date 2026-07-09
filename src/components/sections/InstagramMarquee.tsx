"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";

const images = [
  "https://images.unsplash.com/photo-1502784444-fa2c2f4148ac?w=600&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80",
  "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=600&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
  "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&q=80",
  "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80",
];

export default function InstagramMarquee() {
  // Double the images for seamless loop
  const doubled = [...images, ...images];

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center">
            <SectionLabel align="center">Follow Along</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-medium text-text md:text-4xl">
              @velaandco
            </h2>
          </div>
        </ScrollReveal>
      </div>

      <div className="mt-12 flex marquee-track">
        {doubled.map((src, i) => (
          <div
            key={i}
            className="relative mx-2 aspect-square w-[280px] shrink-0 overflow-hidden md:w-[320px]"
          >
            <Image
              src={src}
              alt={`Travel inspiration ${(i % images.length) + 1}`}
              fill
              className="object-cover"
              sizes="320px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
