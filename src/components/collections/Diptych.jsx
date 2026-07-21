import Image from "next/image";

export default function Diptych({
  leftImage,
  rightImage,
  leftCaption,
  rightCaption,
}) {
  return (
    <section className="mx-auto max-w-7xl px-8 py-24">

      <div className="grid gap-8 lg:grid-cols-2">

        <figure>

          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">

            <Image
              src={leftImage}
              alt={leftCaption}
              fill
              className="object-cover transition duration-700 hover:scale-[1.02]"
            />

          </div>

          {leftCaption && (
            <figcaption className="mt-5 text-sm uppercase tracking-[0.35em] text-white/40">
              {leftCaption}
            </figcaption>
          )}

        </figure>

        <figure>

          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">

            <Image
              src={rightImage}
              alt={rightCaption}
              fill
              className="object-cover transition duration-700 hover:scale-[1.02]"
            />

          </div>

          {rightCaption && (
            <figcaption className="mt-5 text-right text-sm uppercase tracking-[0.35em] text-white/40">
              {rightCaption}
            </figcaption>
          )}

        </figure>

      </div>

    </section>
  );
}