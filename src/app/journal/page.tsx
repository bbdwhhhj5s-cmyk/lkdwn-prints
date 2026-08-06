import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import { journalArticles } from "@/data/journal";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Stories about landscape, light, creative interpretation and the photographs behind LKDWN Prints.",
  alternates: {
    canonical: routes.journal,
  },
};

export default function JournalPage() {
  return (
    <main className="min-h-screen bg-[#090D12] text-white">
      <Navbar />

      <header className="mx-auto max-w-7xl px-8 pb-20 pt-40 md:pb-28 md:pt-48">
        <p className="text-xs uppercase tracking-[0.45em] text-[#D6B36A]">
          LKDWN Prints
        </p>

        <h1 className="heading mt-6 text-6xl leading-none md:text-8xl">
          Journal
        </h1>

        <p className="mt-10 max-w-2xl text-lg leading-9 text-white/65 md:text-xl">
          Reflections on landscape, creative interpretation and the joyful
          moments that begin with a photograph.
        </p>
      </header>

      <section className="mx-auto max-w-7xl px-8 pb-32 md:pb-40">
        {journalArticles.map((article) => (
          <article
            key={article.slug}
            className="border-t border-white/10 py-16 md:py-24"
          >
            <Link
              href={routes.journalArticle(article.slug)}
              className="group grid items-center gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20"
            >
              <div className="flex min-h-[20rem] items-center justify-center bg-[#050608] md:min-h-[34rem]">
                <Image
                  src={article.image}
                  alt={article.imageAlt}
                  width={
                    article.imageOrientation === "portrait" ? 900 : 1600
                  }
                  height={
                    article.imageOrientation === "portrait" ? 1200 : 1000
                  }
                  sizes="(max-width: 1023px) 100vw, 65vw"
                  className="h-auto max-h-[44rem] w-auto max-w-full object-contain transition-transform duration-700 group-hover:scale-[1.01]"
                />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-[#D6B36A]">
                  {article.location}
                </p>

                <h2 className="heading mt-6 text-4xl leading-tight md:text-6xl">
                  {article.title}
                </h2>

                <p className="mt-8 text-lg leading-9 text-white/65">
                  {article.excerpt}
                </p>

                <span className="mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white">
                  Read Journal
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}