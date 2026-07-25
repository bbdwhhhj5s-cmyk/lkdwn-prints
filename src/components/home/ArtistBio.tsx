import Image from "next/image";

export default function ArtistBio() {
  return (
    <section className="pb-40">
      <div className="mx-auto max-w-7xl px-8">
        <div className="border-y border-white/10 py-20 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-white/10 bg-[#0D1218]">
              <Image
                src="/images/about/john-mchugh.png"
                alt="John McHugh, the Glasgow photographer behind LKDWN Prints"
                fill
                sizes="(max-width: 767px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
            </div>

            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.45em] text-[#D6B36A]">
                The Photographer
              </p>
              <h2 className="heading mt-6 text-5xl leading-tight md:text-6xl">
                John
                <br />
                McHugh
              </h2>

              <div className="mt-10 space-y-7 text-lg leading-9 text-white/70 md:text-xl md:leading-10">
                <p>
                  I&apos;m John McHugh, a Glasgow photographer retired from a
                  long career in graphic design.
                </p>
                <p>
                  LKDWN Prints is my way of sharing my best photographs with
                  the world—after all, what else would I do with them?
                </p>
                <p>
                  Every photograph in these collections was taken by me and
                  edited with love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
