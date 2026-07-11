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
      className="group relative block overflow-hidden"
    >
      <div className="relative h-[640px] overflow-hidden rounded-sm">

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
            duration-[1800ms]
            ease-out
            group-hover:scale-110
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10 transition-opacity duration-700 group-hover:opacity-90" />

        <div className="absolute bottom-0 left-0 p-10">

          <p className="uppercase tracking-[0.35em] text-[#D6B36A] text-xs mb-5">
            Collection
          </p>

          <h3 className="text-white text-5xl font-light leading-none">
            {title}
          </h3>

          <p className="mt-5 text-[#D7D7D7] leading-7 max-w-xs">
            {subtitle}
          </p>

          <div className="mt-8 flex items-center gap-3 uppercase tracking-[0.35em] text-xs text-white">

            Explore

            <span
              className="
                transition-transform
                duration-500
                group-hover:translate-x-2
              "
            >
              →
            </span>

          </div>

        </div>

      </div>
    </Link>
  );
}