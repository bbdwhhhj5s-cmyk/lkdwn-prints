import Link from "next/link";

export default function CollectionPanel({
  collection,
  location,
}) {
  const collectionSlug = collection.toLowerCase().replace(/\s+/g, "-");

  return (
    <section className="mt-32 overflow-hidden rounded-[36px] border border-white/10 bg-[#0D1218]">

      <div className="grid lg:grid-cols-[1.45fr_0.55fr]">

        {/* Editorial */}

        <div className="p-12 lg:p-20">

          <p className="text-xs font-medium uppercase tracking-[0.45em] text-[#D6B36A]">
            Curator's Notes
          </p>

          <h2 className="mt-6 font-serif text-5xl leading-tight md:text-6xl">
            {collection}
          </h2>

          <div className="mt-10 h-px w-28 bg-[#D6B36A]" />

          <div className="mt-12 space-y-8 text-lg leading-9 text-white/70">

            <p>
              Every collection within LKDWN Prints is curated as an evolving
              body of work rather than a collection of individual photographs.
              Each image contributes to a broader visual narrative shaped by
              atmosphere, light and the character of the landscape.
            </p>

            <p>
              Rather than documenting locations, these photographs preserve
              fleeting moments that existed only briefly before weather,
              seasons and light transformed the scene once again. Together,
              they create a quieter, more immersive experience that rewards
              careful observation.
            </p>

            <p>
              Every artwork is produced using museum-quality archival papers
              and pigment inks, ensuring exceptional tonal depth, colour
              fidelity and longevity suitable for both private collectors and
              commercial interiors.
            </p>

          </div>

          <Link
            href={`/collections/${collectionSlug}`}
            className="
              mt-14
              inline-flex
              items-center
              rounded-2xl
              border
              border-[#D6B36A]
              px-8
              py-4
              text-xs
              font-medium
              uppercase
              tracking-[0.35em]
              transition-all
              duration-300
              hover:bg-[#D6B36A]
              hover:text-black
            "
          >
            Explore the Collection
          </Link>

        </div>

        {/* Exhibition Details */}

        <aside className="border-t border-white/10 bg-black/20 lg:border-l lg:border-t-0">

          <div className="flex h-full flex-col justify-center p-12">

            <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#D6B36A]">
              Exhibition Details
            </p>

            <div className="mt-12 space-y-10">

              <div>

                <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                  Collection
                </p>

                <p className="mt-3 text-xl text-white">
                  {collection}
                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                  Location
                </p>

                <p className="mt-3 text-xl text-white">
                  {location}
                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                  Medium
                </p>

                <p className="mt-3 text-xl text-white">
                  Fine Art Photography
                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                  Print Process
                </p>

                <p className="mt-3 text-xl text-white">
                  Museum Giclée Printing
                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                  Paper
                </p>

                <p className="mt-3 text-xl text-white">
                  Hahnemühle Photo Rag 308gsm
                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                  Finish
                </p>

                <p className="mt-3 text-xl text-white">
                  Archival Matte
                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                  Availability
                </p>

                <p className="mt-3 text-xl text-white">
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