import HeroComponent from "../components/HeroComponent";
import HomepageEditorial from "../components/home/HomepageEditorial";
import ArtistBio from "../components/home/ArtistBio";
import FeaturedCollection from "../components/home/FeaturedCollection";

export const metadata = {
  title: "Fine Art Photography Prints from Scotland and Europe",
  description:
    "Discover original fine art photography prints by Glasgow photographer John McHugh, featuring landscapes and architecture from Scotland, Paris, Porto and Prague.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fine Art Photography Prints from Scotland and Europe",
    description:
      "Original museum-quality photography prints featuring Scotland, Paris, Porto and Prague.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/images/hero/Hero.jpg",
        alt: "Fine art landscape photography by LKDWN Prints",
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="bg-[#090D12] text-white">
      <HeroComponent />
      <HomepageEditorial />
      <ArtistBio />
      <FeaturedCollection />
    </main>
  );
}