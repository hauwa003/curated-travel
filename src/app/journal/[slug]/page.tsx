import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import ScrollReveal from "@/components/ScrollReveal";
import Divider from "@/components/Divider";
import Button from "@/components/Button";
import { journalPosts } from "@/lib/data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return journalPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function JournalArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const paragraphs = post.content.split("\n\n");

  return (
    <>
      <Navbar />
      <PageWrapper>
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/30 to-transparent" />
          <div className="relative flex h-full flex-col items-end justify-end px-6 pb-16">
            <div className="mx-auto w-full max-w-3xl">
              <span className="font-body text-xs uppercase tracking-[0.15em] text-gold">
                {post.category}
              </span>
              <h1 className="mt-3 font-display text-4xl font-light text-white md:text-5xl lg:text-6xl">
                {post.title}
              </h1>
              <div className="mt-4 flex items-center gap-4">
                <span className="font-body text-sm text-white/60">
                  By {post.author}
                </span>
                <span className="font-body text-sm text-white/40">
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span className="font-body text-sm text-white/40">
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            {paragraphs.map((paragraph, i) => (
              <ScrollReveal key={i}>
                {i === 1 ? (
                  <blockquote className="my-12 border-l-2 border-gold pl-8">
                    <p className="font-display text-2xl font-light italic leading-relaxed text-charcoal md:text-3xl">
                      {paragraph}
                    </p>
                  </blockquote>
                ) : (
                  <p className="mt-6 font-body text-base leading-[1.8] text-charcoal/80 first:mt-0">
                    {paragraph}
                  </p>
                )}
              </ScrollReveal>
            ))}

            <ScrollReveal>
              <Divider className="mx-auto mt-16" width="w-24" />
            </ScrollReveal>

            <ScrollReveal>
              <div className="mt-12 text-center">
                <Link
                  href="/journal"
                  className="font-body text-sm uppercase tracking-[0.15em] text-gold transition-colors hover:text-champagne"
                >
                  &larr; Back to Journal
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </PageWrapper>
      <Footer />
    </>
  );
}
