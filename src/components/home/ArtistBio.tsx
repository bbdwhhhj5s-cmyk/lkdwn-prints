export default function ArtistBio() {
  return (
    <section className="pb-40">
      <div className="mx-auto max-w-7xl px-8">
        <div className="border-y border-white/10 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
            <div>
              <p className="text-xs uppercase tracking-[0.45em] text-[#D6B36A]">
                The Photographer
              </p>
              <h2 className="heading mt-6 text-5xl leading-tight md:text-6xl">
                John
                <br />
                McHugh
              </h2>
            </div>

            <div className="max-w-2xl space-y-7 text-lg leading-9 text-white/70 md:text-xl md:leading-10">
              <p>
                I&apos;m John McHugh, a Glasgow photographer retired from a
                long career in graphic design.
              </p>
              <p>
                LKDWN Prints is my way of sharing my best photographs with the
                world—after all, what else would I do with them?
              </p>
              <p>
                Every photograph in these collections was taken by me and
                edited with love.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
