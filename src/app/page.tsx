import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import BrandStatement from "@/components/sections/BrandStatement";
import FeaturedDestinations from "@/components/sections/FeaturedDestinations";
import TestimonialsTeaser from "@/components/sections/TestimonialsTeaser";
import JournalPreview from "@/components/sections/JournalPreview";
import CtaSection from "@/components/sections/CtaSection";
import InstagramMarquee from "@/components/sections/InstagramMarquee";

export default function Home() {
  return (
    <>
      <Navbar transparent />
      <Hero />
      <BrandStatement />
      <FeaturedDestinations />
      <TestimonialsTeaser />
      <JournalPreview />
      <CtaSection />
      <InstagramMarquee />
      <Footer />
    </>
  );
}
