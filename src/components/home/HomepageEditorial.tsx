export default function HomepageEditorial() {
  return (
    <section
      aria-labelledby="homepage-editorial-title"
      className="relative overflow-hidden"
    >
      <div className="mx-auto max-w-5xl px-8 py-40">

        <p className="text-center text-xs uppercase tracking-[0.45em] text-[#D6B36A]">
          The Gallery
        </p>

        <h2
          id="homepage-editorial-title"
          className="heading mt-8 text-center text-5xl leading-tight md:text-6xl"
        >
          Photography Preserves
          <br />
          What Time Cannot.
        </h2>

        <div
          aria-hidden="true"
          className="mx-auto mt-12 h-px w-24 bg-[#D6B36A]"
        />

        <div className="mx-auto mt-16 max-w-3xl space-y-10 text-center text-xl leading-10 text-white/72">

          <p>
            Every landscape exists for only a moment. The light changes,
            weather moves across the horizon and familiar places become
            something entirely different. These photographs are created in
            those brief moments when atmosphere, composition and light come
            together before quietly disappearing again.
          </p>

          <p>
            LKDWN Prints is a carefully curated collection of museum-quality
            fine art photography from Scotland, Paris, Porto and Prague.
            Rather than documenting destinations, each collection explores
            the character of a place through changing seasons, architecture,
            landscape and light.
          </p>

          <p>
            Every print is professionally produced using archival fine art
            papers and premium pigment inks, creating gallery-quality
            photographs designed to be enjoyed for generations. Whether
            displayed in a contemporary home or a professional interior,
            each piece is crafted to become part of the space it inhabits.
          </p>

        </div>

      </div>
    </section>
  );
}