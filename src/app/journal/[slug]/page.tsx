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

  if (!article) return {};

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
      images: [{ url: article.image, alt: article.imageAlt }],
    },
  };
}

export default async function JournalArticlePage({
  params,
}: JournalArticlePageProps) {
  const { slug } = await params;
  const article = getJournalArticle(slug);

  if (!article) notFound();

  return (
    <main className="min-h-screen bg-[#090D12] text-white">
      <Navbar />

      <article>
        <header className="mx-auto max-w-5xl px-8 pb-16 pt-40 text-center md:pb-24 md:pt-48">
          <Link
            href={routes.journal}
            className="text-xs uppercase tracking-[0.35em] text-[#D6B36A]"
          >
            Journal
          </Link>

          <h1 className="heading mx-auto mt-8 max-w-4xl text-5xl leading-[0.98] md:text-7xl lg:text-8xl">
            {article.title}
          </h1>

          <p className="mx-auto mt-10 max-w-2xl text-lg leading-9 text-white/65 md:text-xl">
            {article.excerpt}
          </p>

          <p className="mt-8 text-xs uppercase tracking-[0.3em] text-white/40">
            {article.location}
          </p>
        </header>

        <div className="mx-auto flex max-w-7xl items-center justify-center px-8">
          <Image
            src={article.image}
            alt={article.imageAlt}
            width={article.imageOrientation === "portrait" ? 1000 : 1800}
            height={article.imageOrientation === "portrait" ? 1400 : 1125}
            sizes="(max-width: 1279px) calc(100vw - 4rem), 1216px"
            priority
            className="h-auto max-h-[52rem] w-auto max-w-full object-contain"
          />
        </div>

        <div className="mx-auto max-w-3xl px-8 py-24 md:py-32">
          {article.sections ? (
            <div className="space-y-20">
              {article.sections.map((section, sectionIndex) => (
                <section key={section.heading || `introduction-${sectionIndex}`}>
                  {section.heading ? (
                    <h2 className="heading mb-8 text-3xl leading-tight text-white md:text-5xl">
                      {section.heading}
                    </h2>
                  ) : null}

                  <div className="space-y-10 text-lg leading-9 text-white/72 md:text-xl md:leading-10">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : (
            <div className="space-y-10 text-lg leading-9 text-white/72 md:text-xl md:leading-10">
              {article.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          )}

          {article.featuredArtworks?.length ? (
            <aside className="mt-24 border-t border-white/10 pt-12">
              <p className="text-xs uppercase tracking-[0.35em] text-[#D6B36A]">
                Featured artwork
              </p>

              <div className="mt-8 space-y-10">
                {article.featuredArtworks.map((artwork) => (
                  <div key={artwork.slug}>
                    <Link
                      href={routes.artwork(artwork.slug)}
                      className="heading inline-flex items-center gap-4 text-3xl transition-opacity hover:opacity-70 md:text-4xl"
                    >
                      {artwork.title}
                      <span aria-hidden="true">→</span>
                    </Link>
                    <p className="mt-4 text-lg leading-8 text-white/60">
                      {artwork.description}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          ) : null}

          {article.relatedLinks?.length ? (
            <aside className="mt-20 border-t border-white/10 pt-12">
              <p className="text-xs uppercase tracking-[0.35em] text-[#D6B36A]">
                Further information
              </p>

              <div className="mt-7 flex flex-col items-start gap-5">
                {article.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] transition-opacity hover:opacity-70"
                  >
                    {link.label}
                    <span aria-hidden="true">→</span>
                  </Link>
                ))}
              </div>
            </aside>
          ) : null}

          {article.collectionSlug && article.collectionLabel ? (
            <aside className="mt-24 border-t border-white/10 pt-12">
              <p className="text-xs uppercase tracking-[0.35em] text-[#D6B36A]">
                Related exhibition
              </p>

              <Link
                href={routes.collection(article.collectionSlug)}
                className="heading mt-6 inline-flex items-center gap-4 text-3xl md:text-4xl"
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
