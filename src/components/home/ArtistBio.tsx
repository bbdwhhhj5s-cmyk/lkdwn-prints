import Image from "next/image";

export default function ArtistBio() {
  return (
    <section id="photographer" className="scroll-mt-28 pb-40">
      <div className="mx-auto max-w-7xl px-8">
        <div className="border-y border-white/10 py-20 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-[0.75fr_1.25fr] md:gap-20">
            <div className="relative aspect-[4/3] w-full max-w-md justify-self-center overflow-hidden rounded-[32px] border border-white/10 bg-[#0D1218]">
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
                  I&apos;m John McHugh, a Glasgow photographer and retired
                  graphic designer. A long career working with image,
                  composition and colour still shapes the way I see the world.
                </p>
                <p>
                  LKDWN Prints brings together the photographs I most want to
                  share—fleeting light, striking places and moments worth
                  holding onto. After all, what else would I do with them?
                </p>
                <p>
                  Every image in these collections was photographed and edited
                  by me, with care, curiosity and love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
