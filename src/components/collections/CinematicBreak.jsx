import Image from "next/image";

export default function CinematicBreak({
  image,
  title,
  subtitle,
}) {
  return (
    <section className="relative my-32 h-[92vh] w-full overflow-hidden">

      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority={false}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#090D12] via-black/25 to-black/50" />

      <div className="absolute bottom-24 left-1/2 w-full max-w-7xl -translate-x-1/2 px-8">

        <p className="mb-5 text-xs uppercase tracking-[0.45em] text-[#D6B36A]">
          {subtitle}
        </p>

        <h2 className="max-w-4xl font-serif text-5xl leading-tight md:text-7xl">
          {title}
        </h2>

      </div>

    </section>
  );
}