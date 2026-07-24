export default function ProductInfo({
  title,
  location,
  description,
  specifications = [],
}) {
  return (
    <section className="max-w-4xl">

      {/* Catalogue Header */}

      <header>

        <p className="text-xs font-medium uppercase tracking-[0.45em] text-[#D6B36A]">
          Exhibition Catalogue
        </p>

        <h2 className="mt-6 font-serif text-5xl leading-tight md:text-6xl">
          {title}
        </h2>

        <p className="mt-6 text-xl text-white/60">
          {location}
        </p>

      </header>

      {/* Divider */}

      <div className="mt-14 h-px w-28 bg-[#D6B36A]" />

      {/* The Photograph */}

      <section className="mt-16">

        <h3 className="font-serif text-3xl">
          The Photograph
        </h3>

        <div className="mt-8 space-y-8 text-lg leading-9 text-white/72">

          <p>{description}</p>

          <p>
            Landscape photography is rarely about reaching a destination.
            More often it is about patience — watching the weather evolve,
            waiting for the light to settle and recognising the brief
            moments when atmosphere, composition and emotion come together
            in perfect balance.
          </p>

          <p>
            Every artwork within the LKDWN collection is created with that
            philosophy in mind. Rather than documenting a place, each image
            seeks to preserve the feeling of standing within that landscape,
            allowing the viewer to reconnect with a moment that may never
            occur in exactly the same way again.
          </p>

        </div>

      </section>

      {/* Quote */}

      <section className="my-24 border-l-2 border-[#D6B36A] pl-10">

        <blockquote className="font-serif text-3xl leading-relaxed text-white md:text-4xl">

          “Photography allows us to return to moments that existed for only
          a heartbeat.”

        </blockquote>

      </section>

      {/* Photographer's Notes */}

      <section>

        <h3 className="font-serif text-3xl">
          Photographer's Notes
        </h3>

        <div className="mt-8 space-y-8 text-lg leading-9 text-white/72">

          <p>
            Every photograph is edited individually using a restrained,
            natural approach. Contrast, colour and tonal balance are refined
            carefully to preserve the atmosphere experienced on location
            rather than exaggerating it through heavy processing.
          </p>

          <p>
            Each print is produced using museum-quality archival materials
            and colour-managed workflows to ensure exceptional fidelity from
            screen to paper. The objective is to create a print that feels
            timeless, allowing the image to be enjoyed for decades without
            compromising its original character.
          </p>

        </div>

      </section>

      {/* Print Specifications */}

      <section className="mt-20 rounded-[32px] border border-white/10 bg-[#0D1218] p-10">

        <h3 className="font-serif text-3xl">
          Print Specifications
        </h3>

        <p className="mt-4 max-w-2xl leading-8 text-white/55">
          Every LKDWN print is produced to exhibition standards using
          premium archival materials selected for longevity, colour accuracy
          and museum-quality presentation.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">

          {specifications.map((specification) => (

            <div
              key={specification}
              className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-[#D6B36A]/30"
            >

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D6B36A] text-sm font-semibold text-black">

                ✓

              </div>

              <p className="leading-7 text-white/75">
                {specification}
              </p>

            </div>

          ))}

        </div>

      </section>

    </section>
  );
}