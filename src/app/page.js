import HeroComponent from "../components/HeroComponent";
import HomepageEditorial from "../components/home/HomepageEditorial";
import FeaturedCollection from "../components/home/FeaturedCollection";

export default function Home() {
  return (
    <main className="bg-[#090D12] text-white">
      <HeroComponent />
      <HomepageEditorial />
      <FeaturedCollection />
    </main>
  );
}
