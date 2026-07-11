"use client";

export default function FullscreenImage({
  image,
  title,
  location,
}) {
  return (
    <section className="bg-black">

      <div className="relative h-screen">

        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />

       <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/30" />

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
      mb-6
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
      max-w-5xl
      leading-[1.05]
    "
  >
    {title}
  </h2>

</div>

      </div>

    </section>
  );
}