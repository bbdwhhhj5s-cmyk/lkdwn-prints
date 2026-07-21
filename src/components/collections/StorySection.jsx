import Image from "next/image";

export default function StorySection({
  eyebrow,
  title,
  body,
  image,
  imageLeft = false,
}) {
  return (
    <section className="mx-auto max-w-7xl px-8 py-32">

      <div
        className={`grid items-center gap-20 lg:grid-cols-2 ${
          imageLeft ? "" : "lg:[&>*:first-child]:order-2"
        }`}
      >
        <div className="relative h-[72vh] overflow-hidden rounded-3xl">

          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-700 hover:scale-[1.02]"
          />

        </div>

        <div>

          <p className="text-xs uppercase tracking-[0.45em] text-[#D6B36A]">
            {eyebrow}
          </p>

          <h2 className="mt-6 font-serif text-5xl leading-tight">
            {title}
          </h2>

          <div className="mt-10 space-y-8 text-lg leading-9 text-white/70">

            {body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}