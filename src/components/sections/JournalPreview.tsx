"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import { journalPosts } from "@/lib/data";

export default function JournalPreview() {
  const posts = journalPosts.slice(0, 3);

  return (
    <section className="py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <ScrollReveal>
          <SectionLabel align="center">Journal</SectionLabel>
          <h2 className="mt-4 text-center font-heading text-4xl font-medium text-text md:text-5xl">
            Stories & Insights
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {posts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.07}>
              <Link href={`/journal/${post.slug}`} className="group block">
                <div>
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="mt-5">
                    <span className="font-sans text-xs uppercase tracking-[0.15em] text-muted">
                      {post.category}
                    </span>
                    <h3 className="mt-2 font-heading text-2xl font-medium text-text transition-colors group-hover:text-muted">
                      {post.title}
                    </h3>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-muted">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <Button href="/journal" variant="secondary">
              Read the Journal
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
