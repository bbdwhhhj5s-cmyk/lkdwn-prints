import Link from "next/link";

export default function CollectionPanel({
  collection,
  location,
}) {
  return (
    <section className="mt-32 overflow-hidden rounded-[32px] border border-white/10 bg-[#0E1319]">

      <div className="grid lg:grid-cols-[1.45fr_0.55fr]">

        {/* Editorial */}

        <div className="p-12 lg:p-20">

          <p className="text-xs uppercase tracking-[0.45em] text-[#D6B36A]">
            Curator's Notes
          </p>

          <h2 className="mt-6 font-serif text-5xl leading-tight">
            {collection}
          </h2>

          <div className="mt-10 h-px w-28 bg-[#D6B36A]" />

          <p className="mt-12 text-lg leading-9 text-white/70">
            This body of work explores atmosphere rather than geography.
            Each photograph represents a carefully observed moment where
            weather, light and landscape briefly aligned before changing
            forever.
          </p>

          <p className="mt-8 text-lg leading-9 text-white/70">
            Rather than documenting a journey, the collection is intended
            to be experienced as an evolving exhibition. Every new image
            expands the narrative while remaining connected to those that
            came before.
          </p>

          <p className="mt-8 text-lg leading-9 text-white/70">
            Printed using museum-quality archival materials, every artwork
            is produced to preserve subtle tonal transitions, texture and
            detail for decades to come.
          </p>

          <Link
            href={`/collections/${collection.toLowerCase()}`}
            className="mt-14 inline-flex items-center border border-[#D6B36A] px-8 py-4 text-xs uppercase tracking-[0.35em] transition-all duration-300 hover:bg-[#D6B36A] hover:text-black"
          >
            Explore the Collection
          </Link>

        </div>

        {/* Details */}

        <aside className="border-t border-white/10 bg-black/20 lg:border-l lg:border-t-0">

          <div className="flex h-full flex-col justify-center p-12">

            <p className="text-xs uppercase tracking-[0.35em] text-[#D6B36A]">
              Exhibition Details
            </p>

            <div className="mt-12 space-y-10">

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                  Collection
                </p>

                <p className="mt-3 text-xl">
                  {collection}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                  Location
                </p>

                <p className="mt-3 text-xl">
                  {location}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                  Medium
                </p>

                <p className="mt-3 text-xl">
                  Fine Art Photography
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                  Process
                </p>

                <p className="mt-3 text-xl">
                  Museum Giclée Printing
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                  Paper
                </p>

                <p className="mt-3 text-xl">
                  Hahnemühle Photo Rag 308gsm
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                  Availability
                </p>

                <p className="mt-3 text-xl">
                  Printed to Order
                </p>
              </div>

            </div>

          </div>

        </aside>

      </div>

    </section>
  );
}