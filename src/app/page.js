import Hero from "../components/Hero";
import CollectionIntro from "../components/collections/CollectionIntro";
import CollectionChapter from "../components/collections/CollectionChapter";
import EditorialFeature from "../components/home/EditorialFeature";
import FeaturedCollections from "../components/home/FeaturedCollections";
import AboutSection from "../components/home/AboutSection";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />

      <CollectionIntro />

      <CollectionChapter
        eyebrow="Scotland"
        title="The Highlands Collection"
        description="A decade spent photographing Scotland's changing light, dramatic weather and timeless landscapes."
        image="/images/scotland/glencoe.jpg"
      />

      <EditorialFeature />

      <FeaturedCollections />

      <AboutSection />

      <CTASection />
    </>
  );
}