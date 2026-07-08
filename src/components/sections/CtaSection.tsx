import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import Button from "@/components/Button";

export default function CtaSection() {
  return (
    <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1920&q=80"
        alt="Luxury travel destination"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy/50" />

      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        <ScrollReveal>
          <h2 className="max-w-3xl font-display text-4xl font-light text-white md:text-5xl lg:text-6xl">
            Your Next Chapter
            <br />
            <span className="italic">Begins Here</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg font-body text-base text-white/70">
            Tell us where your imagination wanders, and we&apos;ll craft a
            journey that exceeds it.
          </p>
          <div className="mt-10">
            <Button href="/contact">
              Start the Conversation
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
