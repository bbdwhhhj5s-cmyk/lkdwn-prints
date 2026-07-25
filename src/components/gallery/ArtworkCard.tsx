import Link from "next/link";
import Image from "next/image";
import type { Artwork } from "@/data/catalog";
import { routes } from "@/lib/routes";

type ArtworkCardProps = {
  artwork: Artwork;
};

export default function ArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <Link
      href={routes.artwork(artwork.slug)}
      className="group block"
    >
      <div className="aspect-[4/5] overflow-hidden bg-[#102632]">
        <Image
          src={artwork.image}
          alt={artwork.alt}
          width={artwork.orientation === "portrait" ? 900 : 1200}
          height={artwork.orientation === "portrait" ? 1200 : 900}
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex items-baseline justify-between gap-4 pt-4">
        <h3 className="heading text-2xl text-white">{artwork.title}</h3>
        <span className="text-xs uppercase tracking-[0.2em] text-[#9AA4AE]">
          {artwork.location}
        </span>
      </div>
    </Link>
  );
}
