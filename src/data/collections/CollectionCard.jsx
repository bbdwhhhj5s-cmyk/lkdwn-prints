import Link from "next/link";
import Image from "next/image";

export default function CollectionCard({ collection, reverse = false }) {
  return (
    <section className="py-24">
      <div
        className={`grid items-center gap-16 lg:grid-cols-2 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Image */}

        <Link
          href={`/collections/${collection.slug}`}
          className="group block overflow-hidden rounded-3xl"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={collection.hero}
              alt={collection.title}
              fill
              priority={false}
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </Link>

        {/* Content */}

        <div className="max-w-xl">

          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#D6B36A]">
            Exhibition
          </p>

          <h2 className="mb-8 font-serif text-5xl lg:text-6xl">
            {collection.title}
          </h2>

          <p className="mb-10 text-lg leading-9 text-white/70">
            {collection.description}
          </p>

          <div className="mb-10 flex items-center gap-8 text-sm uppercase tracking-[0.25em] text-white/50">
            <span>{collection.printCount} Prints</span>
            <span>Museum Quality</span>
          </div>

          <Link
            href={`/collections/${collection.slug}`}
            className="inline-flex items-center gap-3 border-b border-[#D6B36A] pb-2 text-sm uppercase tracking-[0.3em] text-[#D6B36A] transition-all duration-300 hover:gap-5"
          >
            Explore Collection →
          </Link>

        </div>

      </div>
    </section>
  );
}