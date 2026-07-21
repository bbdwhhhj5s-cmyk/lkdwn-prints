"use client";

export default function FullscreenImage({
  image,
  title,
  location,
}) {
  return (
    <section className="bg-black">

      <div className="relative h-screen overflow-hidden">

        <img
          src={image}
          alt={title}
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            transition-transform
            duration-[4000ms]
            ease-out
            hover:scale-[1.02]
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/35" />

        <div
          className="
            absolute
            inset-0
            flex
            flex-col
            items-center
            justify-center
            text-center
            px-8
          "
        >

          <p
            className="
              uppercase
              tracking-[0.45em]
              text-[#D6B36A]
              text-xs
              mb-8
            "
          >
            {location}
          </p>

          <h2
            className="
              font-serif
              text-5xl
              md:text-6xl
              lg:text-7xl
              xl:text-8xl
              text-white
              leading-[1.08]
              max-w-5xl
            "
          >
            {title}
          </h2>

        </div>

      </div>

    </section>
  );
}