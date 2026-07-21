import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import PurchasePanel from "@/components/print/PurchasePanel";
import ArtworkDetails from "@/components/print/ArtworkDetails";

import {
  getAllPrints,
  getPrintBySlug,
  getAdjacentPrints,
  getRelatedPrints,
} from "@/lib/gallery";

export async function generateStaticParams() {
  return getAllPrints().map((print) => ({
    slug: print.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const print = getPrintBySlug(slug);

  if (!print) {
    return {
      title: "Artwork Not Found | LKDWN Prints",
    };
  }

  return {
    title: `${print.title} | LKDWN Prints`,
    description: print.description,
  };
}

export default async function PrintPage({ params }) {
  const { slug } = await params;

  const print = getPrintBySlug(slug);

  if (!print) {
    notFound();
  }

  const { previous, next } = getAdjacentPrints(slug);
  const related = getRelatedPrints(slug);

  return (
    <main className="bg-[#090D12] text-white">

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-8 py-24">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div>

            <p className="uppercase tracking-[0.35em] text-xs text-[#B8965A]">
              {print.location}
            </p>

            <h1 className="font-serif text-6xl lg:text-7xl mt-5">
              {print.title}
            </h1>

            <p className="mt-10 text-lg leading-9 text-white/70">
              {print.description}
            </p>

            <PurchasePanel
              medium={print.medium}
              sizes={print.printSizes}
            />

          </div>

          {/* RIGHT */}

          <div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">

              <Image
                src={print.image}
                alt={print.title}
                fill
                priority
                className="object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ARTWORK DETAILS */}

      <ArtworkDetails
        story={print.story}
        location={print.location}
        paper={print.paper}
        camera={print.camera}
        lens={print.lens}
        dateTaken={print.dateTaken}
      />

      {/* RELATED */}

      <section className="max-w-7xl mx-auto px-8 py-24 border-t border-white/10">

        <h2 className="font-serif text-4xl mb-12">
          Related Prints
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {related.map((item) => (

            <Link
              key={item.slug}
              href={`/print/${item.slug}`}
              className="group"
            >

              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              <h3 className="mt-5 text-2xl font-serif">
                {item.title}
              </h3>

              <p className="mt-2 text-white/60">
                {item.location}
              </p>

            </Link>

          ))}

        </div>

      </section>

      {/* PREVIOUS / NEXT */}

      <section className="max-w-7xl mx-auto px-8 py-20 border-t border-white/10">

        <div className="flex justify-between">

          <div>

            {previous && (
              <Link
                href={`/print/${previous.slug}`}
                className="text-white/70 hover:text-white transition"
              >
                ← {previous.title}
              </Link>
            )}

          </div>

          <div>

            {next && (
              <Link
                href={`/print/${next.slug}`}
                className="text-white/70 hover:text-white transition"
              >
                {next.title} →
              </Link>
            )}

          </div>

        </div>

      </section>

    </main>
  );
}