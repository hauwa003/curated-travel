import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import ScrollReveal from "@/components/ScrollReveal";
import Divider from "@/components/Divider";
import SubPageHero from "@/components/SubPageHero";
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
        <SubPageHero
          image={post.image}
          alt={post.title}
          label={post.category}
          title={post.title}
        >
          <div className="mt-4 flex items-center gap-4">
            <span className="font-sans text-sm text-white/60">
              By {post.author}
            </span>
            <span className="font-sans text-sm text-white/40">
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="font-sans text-sm text-white/40">
              {post.readTime}
            </span>
          </div>
        </SubPageHero>

        {/* Article Content */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            {paragraphs.map((paragraph, i) => (
              <ScrollReveal key={i}>
                {i === 1 ? (
                  <blockquote className="my-12 border-l-2 border-text pl-8">
                    <p className="font-sans text-2xl font-medium leading-relaxed text-text md:text-3xl">
                      {paragraph}
                    </p>
                  </blockquote>
                ) : (
                  <p className="mt-6 font-sans text-base leading-[1.8] text-text/80 first:mt-0">
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
                  className="font-sans text-sm uppercase tracking-[0.15em] text-muted transition-colors hover:text-subtle"
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
