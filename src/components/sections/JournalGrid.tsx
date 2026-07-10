"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import ImageReveal from "@/components/ImageReveal";
import { journalPosts } from "@/lib/data";

const categories = ["All", ...Array.from(new Set(journalPosts.map((p) => p.category)))];

type SortOption = "newest" | "oldest";

export default function JournalGrid() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sort, setSort] = useState<SortOption>("newest");

  const filtered = useMemo(() => {
    let posts = journalPosts;

    // Search
    if (search.trim()) {
      const q = search.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.author.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (activeCategory !== "All") {
      posts = posts.filter((p) => p.category === activeCategory);
    }

    // Sort
    posts = [...posts].sort((a, b) => {
      const da = new Date(a.date).getTime();
      const db = new Date(b.date).getTime();
      return sort === "newest" ? db - da : da - db;
    });

    return posts;
  }, [search, activeCategory, sort]);

  const [featured, ...rest] = filtered;

  return (
    <section className="py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Search & Controls */}
        <div className="mb-16 space-y-8">
          {/* Search bar */}
          <div className="relative mx-auto max-w-xl">
            <svg
              className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles..."
              className="w-full border-0 border-b border-text/20 bg-transparent py-3 pl-7 pr-4 font-sans text-base text-text placeholder:text-muted/60 transition-colors duration-200 focus:border-text/40 focus:outline-none"
            />
          </div>

          {/* Filters & Sort row */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-1.5 font-sans text-xs uppercase tracking-[0.12em] transition-colors duration-200 ${
                    activeCategory === cat
                      ? "bg-text text-white"
                      : "bg-surface text-muted hover:bg-text/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="border border-text/20 bg-transparent px-3 py-1.5 font-sans text-xs uppercase tracking-[0.12em] text-muted transition-colors duration-200 focus:border-text/40 focus:outline-none"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>

        {/* No results */}
        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="font-sans text-base text-muted">
              No articles found. Try a different search or filter.
            </p>
          </div>
        )}

        {/* Featured Post */}
        {featured && (
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
                    <span className="font-sans text-xs text-muted">
                      {featured.readTime}
                    </span>
                  </div>
                  <h2 className="mt-4 font-heading text-3xl font-medium text-text transition-colors group-hover:text-muted md:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 font-sans text-base leading-relaxed text-muted">
                    {featured.excerpt}
                  </p>
                  <p className="mt-6 font-sans text-sm text-muted">
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
        )}

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
                        <span className="font-sans text-xs text-muted">
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="mt-2 font-heading text-2xl font-medium text-text transition-colors group-hover:text-muted">
                        {post.title}
                      </h3>
                      <p className="mt-2 font-sans text-sm leading-relaxed text-muted">
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
  );
}
