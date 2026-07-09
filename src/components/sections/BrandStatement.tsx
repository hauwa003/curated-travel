import ScrollReveal from "@/components/ScrollReveal";
import TextReveal from "@/components/TextReveal";
import Divider from "@/components/Divider";

export default function BrandStatement() {
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <ScrollReveal>
          <Divider className="mx-auto" width="w-16" />
        </ScrollReveal>
        <div className="mt-10">
          <TextReveal
            text="We believe that extraordinary travel is not about the places you visit, but the way they make you feel — the quiet moments of wonder, the connections forged, the stories you carry home."
            className="font-heading text-2xl font-medium leading-relaxed text-text md:text-3xl lg:text-4xl"
          />
        </div>
        <ScrollReveal delay={0.4}>
          <p className="mt-8 font-sans text-sm uppercase tracking-[0.15em] text-muted">
            Isabella Montague, Founder
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.5}>
          <Divider className="mx-auto mt-10" width="w-16" />
        </ScrollReveal>
      </div>
    </section>
  );
}
