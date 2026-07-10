import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import SubPageHero from "@/components/SubPageHero";
import JournalGrid from "@/components/sections/JournalGrid";

export const metadata: Metadata = {
  title: "Journal",
  description: "Stories, insights, and inspiration from the world of luxury travel — by the advisors at Vela & Co.",
};

export default function JournalPage() {
  return (
    <>
      <Navbar transparent />
      <PageWrapper>
        <SubPageHero
          image="https://images.unsplash.com/photo-1455587734955-081b22074882?w=1920&q=80"
          alt="Journal"
          label="Stories & Insights"
          title="The Journal"
          height="h-[50vh] min-h-[350px]"
        />

        <JournalGrid />
      </PageWrapper>
      <Footer />
    </>
  );
}
