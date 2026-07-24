import Link from "next/link";

export default function ExhibitionImage({
  image,
  title,
  location,
  slug,
}) {
  const content = (
    <figure className="max-w-7xl mx-auto px-8 py-24">
      <img
        src={image}
        alt={title}
        className="w-full object-cover transition duration-700 hover:scale-[1.01]"
      />

      {(title || location) && (
        <figcaption className="mt-6 flex justify-between text-sm tracking-[0.25em] uppercase text-white/60">
          <span>{title}</span>
          <span>{location}</span>
        </figcaption>
      )}
    </figure>
  );

  if (!slug) {
    return content;
  }

  return (
    <Link
      href={`/print//${slug}`}
      className="block cursor-pointer"
    >
      {content}
    </Link>
  );
}