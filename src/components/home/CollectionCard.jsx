import Link from "next/link";

export default function CollectionCard({
  title,
  subtitle,
  image,
  href = "#",
}) {
  return (
    <Link
      href={href}
      className="group relative block overflow-hidden rounded-md"
    >
      <div className="relative h-[520px] overflow-hidden">

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
            duration-700
            ease-out
            group-hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors duration-700" />

        <div className="absolute bottom-0 left-0 p-10">

          <p className="uppercase tracking-[0.35em] text-[#D6B36A] text-xs mb-4">
            Collection
          </p>

          <h3 className="text-white text-4xl md:text-5xl font-light">
            {title}
          </h3>

          <p className="mt-4 text-[#D7D7D7] text-lg max-w-sm">
            {subtitle}
          </p>

          <span className="inline-block mt-8 uppercase tracking-[0.3em] text-sm text-white">
            Explore →
          </span>

        </div>

      </div>
    </Link>
  );
}