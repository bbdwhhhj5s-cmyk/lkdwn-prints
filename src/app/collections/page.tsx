import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { collections, getCollectionSelection } from "@/data/catalog";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Fine Art Photography Collections",
  description:
    "Explore curated fine art photography collections from Scotland, Paris, Porto and Prague.",
  alternates: {
    canonical: routes.collections,
  },
  openGraph: {
    title: "Fine Art Photography Collections | LKDWN Prints",
    description:
      "Explore curated fine art photography collections from Scotland, Paris, Porto and Prague.",
    type: "website",
    images: [
      {
        url: "/images/scotland/scotland-16.jpg",
        alt: "A quiet view across Loch Shiel beneath a clear blue sky",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fine Art Photography Collections | LKDWN Prints",
    description:
      "Explore curated fine art photography collections from Scotland, Paris, Porto and Prague.",
    images: ["/images/scotland/scotland-16.jpg"],
  },
};

export default function CollectionsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#090D12] text-white">
        <section className="relative min-h-[92svh] overflow-hidden">
          <Image
            src="/images/scotland/scotland-16.jpg"
            alt="A quiet view across Loch Shiel beneath a clear blue sky"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#090D12] via-black/20 to-black/45" />

          <header className="absolute inset-x-0 bottom-16 px-8 md:bottom-24">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.45em] text-[#D6B36A]">
                  LKDWN Prints
                </p>
                <h1 className="heading mt-7 text-6xl leading-tight md:text-8xl">
                  Collected Landscapes.
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-9 text-white/75">
                  Curated bodies of work exploring atmosphere, architecture,
                  landscape and light.
                </p>
              </div>
            </div>
          </header>
        </section>

        <div className="mx-auto max-w-7xl px-8 pb-28 pt-24">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.45em] text-[#D6B36A]">
              The collections
            </p>
            <p className="heading mt-7 text-4xl leading-tight text-white/90 md:text-5xl">
              Four evolving exhibitions shaped by place, weather and light.
            </p>
          </div>

          <div className="mt-24 space-y-16">
            {collections.map((collection, index) => {
              const selectedArtworks = getCollectionSelection(collection);
              const cover = selectedArtworks[0];

              return (
                <Link
                  key={collection.slug}
                  href={routes.collection(collection.slug)}
                  className="group block overflow-hidden rounded-[36px] border border-white/10 bg-[#0D1218]"
                >
                  <article
                    className={`grid lg:grid-cols-[1.25fr_0.75fr] ${
                      index % 2 === 1
                        ? "lg:grid-cols-[0.75fr_1.25fr]"
                        : ""
                    }`}
                  >
                    <div
                      className={`relative min-h-[28rem] overflow-hidden bg-[#07131C] lg:min-h-[42rem] ${
                        index % 2 === 1 ? "lg:order-2" : ""
                      }`}
                    >
                      {cover ? (
                        <Image
                          src={cover.image}
                          alt={cover.alt}
                          fill
                          sizes="(max-width: 1023px) 100vw, 65vw"
                          className="object-cover transition duration-[2500ms] ease-out group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-[#102632] to-[#05080D]" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                    </div>

                    <div className="flex items-center">
                      <div className="p-10 md:p-14 lg:p-16">
                        <p className="text-xs uppercase tracking-[0.4em] text-[#D6B36A]">
                          Collection {String(index + 1).padStart(2, "0")}
                        </p>
                        <h2 className="heading mt-6 text-5xl md:text-6xl">
                          {collection.name}
                        </h2>
                        <p className="heading mt-5 text-3xl leading-tight text-white/85">
                          {collection.title}
                        </p>
                        <div className="mt-9 h-px w-24 bg-[#D6B36A]" />
                        <p className="mt-9 text-lg leading-9 text-white/65">
                          {collection.description}
                        </p>
                        <p className="mt-8 text-xs uppercase tracking-[0.3em] text-white/40">
                          {selectedArtworks.length > 0
                            ? `${selectedArtworks.length} selected works`
                            : "Forthcoming collection"}
                        </p>
                        <span className="mt-12 inline-flex border border-[#D6B36A] px-8 py-4 text-xs uppercase tracking-[0.3em] text-[#D6B36A] transition group-hover:bg-[#D6B36A] group-hover:text-black">
                          Explore collection →
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
