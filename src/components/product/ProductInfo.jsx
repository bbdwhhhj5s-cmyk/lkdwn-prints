export default function ProductInfo({
  title,
  location,
  description,
  specifications = [],
}) {
  return (
    <section className="max-w-4xl">

      {/* Exhibition Heading */}

      <div>

        <p className="text-xs uppercase tracking-[0.45em] text-[#D6B36A]">
          Exhibition Catalogue
        </p>

        <h2 className="mt-6 font-serif text-6xl leading-tight">
          {title}
        </h2>

        <p className="mt-6 text-xl text-white/60">
          {location}
        </p>

      </div>

      {/* Divider */}

      <div className="mt-14 h-px w-28 bg-[#D6B36A]" />

      {/* Story */}

      <section className="mt-16">

        <h3 className="font-serif text-3xl">
          The Photograph
        </h3>

        <p className="mt-8 text-lg leading-9 text-white/72">
          {description}
        </p>

        <p className="mt-8 text-lg leading-9 text-white/72">
          Landscape photography is rarely about arriving at a destination.
          More often it is about waiting. Watching the weather change,
          observing light move across the landscape and recognising the
          brief moments when atmosphere, composition and emotion align.
        </p>

        <p className="mt-8 text-lg leading-9 text-white/72">
          Every artwork in this collection is intended to preserve one of
          those fleeting moments, creating a visual record that extends
          beyond documentation and becomes something more personal and
          reflective.
        </p>

      </section>

      {/* Pull Quote */}

      <section className="my-20 border-l-2 border-[#D6B36A] pl-10">

        <blockquote className="font-serif text-4xl leading-tight text-white">

          “Photography allows us to return to moments that existed for
          only a heartbeat.”

        </blockquote>

      </section>

      {/* Photographer's Notes */}

      <section>

        <h3 className="font-serif text-3xl">
          Photographer's Notes
        </h3>

        <p className="mt-8 text-lg leading-9 text-white/72">
          The images within LKDWN Prints are intentionally presented with
          restrained colour, subtle contrast and natural light. The goal
          is not simply to reproduce a landscape, but to convey the
          atmosphere experienced when standing there.
        </p>

        <p className="mt-8 text-lg leading-9 text-white/72">
          Each photograph is processed individually before being prepared
          for museum-quality archival printing, ensuring the final print
          retains the tonal depth and detail captured in the original
          scene.
        </p>

      </section>

      {/* Specifications */}

      <section className="mt-20 rounded-[32px] border border-white/10 bg-[#0D1218] p-10">

        <h3 className="font-serif text-3xl">
          Print Specifications
        </h3>

        <div className="mt-10 grid gap-6 md:grid-cols-2">

          {specifications.map((specification) => (

            <div
              key={specification}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D6B36A] text-black">

                ✓

              </div>

              <p className="text-white/75">
                {specification}
              </p>

            </div>

          ))}

        </div>

      </section>

    </section>
  );
}