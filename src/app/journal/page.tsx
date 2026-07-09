import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import ImageReveal from "@/components/ImageReveal";
import SubPageHero from "@/components/SubPageHero";
import { journalPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Journal",
  description: "Stories, insights, and inspiration from the world of luxury travel — by the advisors at Vela & Co.",
};

export default function JournalPage() {
  const [featured, ...rest] = journalPosts;

  return (
    <>
      <Navbar />
      <PageWrapper>
        <SubPageHero
          image="https://images.unsplash.com/photo-1455587734955-081b22074882?w=1920&q=80"
          alt="Journal"
          label="Stories & Insights"
          title="The Journal"
          height="h-[50vh] min-h-[350px]"
        />

        {/* Featured Post */}
        <section className="py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <ScrollReveal>
              <Link href={`/journal/${featured.slug}`} className="group block">
                <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                  <ImageReveal
                    src={featured.image}
                    alt={featured.title}
                    aspectClass="aspect-[4/3]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="font-sans text-xs uppercase tracking-[0.15em] text-muted">
                        {featured.category}
                      </span>
                      <span className="font-sans text-xs text-text/40">
                        {featured.readTime}
                      </span>
                    </div>
                    <h2 className="mt-4 font-heading text-3xl font-medium text-text transition-colors group-hover:text-muted md:text-4xl">
                      {featured.title}
                    </h2>
                    <p className="mt-4 font-sans text-base leading-relaxed text-text/60">
                      {featured.excerpt}
                    </p>
                    <p className="mt-6 font-sans text-sm text-text/40">
                      By {featured.author} &middot;{" "}
                      {new Date(featured.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            {/* Post Grid */}
            {rest.length > 0 && (
              <div className="mt-24">
                <ScrollReveal>
                  <SectionLabel>More Stories</SectionLabel>
                </ScrollReveal>
                <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                  {rest.map((post, i) => (
                    <ScrollReveal key={post.slug} delay={i * 0.1}>
                      <Link href={`/journal/${post.slug}`} className="group block">
                        <ImageReveal
                          src={post.image}
                          alt={post.title}
                          aspectClass="aspect-[4/5]"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="mt-5">
                          <div className="flex items-center gap-4">
                            <span className="font-sans text-xs uppercase tracking-[0.15em] text-muted">
                              {post.category}
                            </span>
                            <span className="font-sans text-xs text-text/40">
                              {post.readTime}
                            </span>
                          </div>
                          <h3 className="mt-2 font-heading text-2xl font-medium text-text transition-colors group-hover:text-muted">
                            {post.title}
                          </h3>
                          <p className="mt-2 font-sans text-sm leading-relaxed text-text/60">
                            {post.excerpt}
                          </p>
                        </div>
                      </Link>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </PageWrapper>
      <Footer />
    </>
  );
}
