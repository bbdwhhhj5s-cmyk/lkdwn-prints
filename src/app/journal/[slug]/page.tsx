import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import { getJournalArticle, journalArticles } from "@/data/journal";
import { routes } from "@/lib/routes";

type JournalArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return journalArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: JournalArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getJournalArticle(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: routes.journalArticle(article.slug),
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      images: [
        {
          url: article.image,
          alt: article.imageAlt,
        },
      ],
    },
  };
}

export default async function JournalArticlePage({
  params,
}: JournalArticlePageProps) {
  const { slug } = await params;
  const article = getJournalArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#090D12] text-white">
      <Navbar />

      <article>
        <header className="mx-auto max-w-6xl px-8 pb-16 pt-40 text-center md:pb-24 md:pt-52">
          <Link
            href={routes.journal}
            className="text-xs uppercase tracking-[0.4em] text-[#D6B36A] transition-opacity hover:opacity-70"
          >
            Journal
          </Link>

          <h1 className="heading mx-auto mt-8 max-w-5xl text-5xl leading-[0.98] md:text-7xl lg:text-8xl">
            {article.title}
          </h1>

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-white/65 md:text-xl">
            {article.excerpt}
          </p>

          <p className="mt-8 text-xs uppercase tracking-[0.3em] text-white/40">
            {article.location}
          </p>
        </header>

        <div className="mx-auto flex max-w-[96rem] items-center justify-center px-4 md:px-8">
          <Image
            src={article.image}
            alt={article.imageAlt}
            width={article.imageOrientation === "portrait" ? 1000 : 1800}
            height={article.imageOrientation === "portrait" ? 1400 : 1125}
            sizes="(max-width: 1535px) calc(100vw - 2rem), 1472px"
            priority
            className="h-auto max-h-[58rem] w-auto max-w-full object-contain"
          />
        </div>

        <div className="mx-auto max-w-3xl px-8 py-24 md:py-36">
          <blockquote className="mb-20 border-l border-[#D6B36A] pl-8 md:mb-28 md:pl-10">
            <p className="heading text-3xl leading-relaxed text-white md:text-5xl">
              “The photograph is only the beginning.”
            </p>
          </blockquote>

          <div className="space-y-12 text-xl leading-10 text-white/75 md:text-[1.45rem] md:leading-[2.5rem]">
            {article.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {article.collectionSlug && article.collectionLabel ? (
            <aside className="mt-28 border-t border-white/10 pt-14">
              <p className="text-xs uppercase tracking-[0.4em] text-[#D6B36A]">
                Related exhibition
              </p>

              <Link
                href={routes.collection(article.collectionSlug)}
                className="heading mt-7 inline-flex items-center gap-4 text-3xl text-white transition-opacity hover:opacity-70 md:text-4xl"
              >
                {article.collectionLabel}
                <span aria-hidden="true">→</span>
              </Link>
            </aside>
          ) : null}
        </div>
      </article>
    </main>
  );
}