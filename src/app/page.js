import HeroComponent from "../components/HeroComponent";
import CollectionIntro from "../components/collections/CollectionIntro";
import CollectionChapter from "../components/collections/CollectionChapter";

export default function Home() {
  return (
    <>
      <HeroComponent />

      <CollectionIntro />

      <CollectionChapter
        eyebrow="Scotland"
        title="The Highlands Collection"
        description="A decade exploring Scotland's changing light, dramatic weather and timeless landscapes. Each image is individually prepared as a museum-quality archival print."
        image="/images/scotland/glencoe.jpg"
      />
    </>
  );
}