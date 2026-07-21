import Hero from "@/components/home/Hero";
import Editorial from "@/components/home/Editorial";
import FeaturedCollections from "@/components/home/FeaturedCollections";

export default function HomePage() {
  return (
    <main className="bg-[#090D12] text-white">

      <Hero />

      <Editorial />

      <FeaturedCollections />

    </main>
  );
}