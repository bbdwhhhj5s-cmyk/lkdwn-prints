import Section from "../layout/Section";
import SectionTitle from "../ui/SectionTitle";
import CollectionCard from "./CollectionCard";

export default function FeaturedCollections() {
  return (
    <Section
      id="collections"
      className="bg-[#081019] text-white py-32 lg:py-40"
    >
      <div className="text-center max-w-3xl mx-auto">

        <p className="uppercase tracking-[0.35em] text-[#B8965A] text-xs mb-6">
          Featured Collections
        </p>

        <SectionTitle>
          Explore the Archive
        </SectionTitle>

        <p className="mt-8 text-[#CFCFCF] text-lg leading-8">
          A curated selection of landscapes photographed across Scotland
          and Europe. Each collection tells its own story through light,
          atmosphere and place.
        </p>

      </div>

      <div className="mt-24 grid lg:grid-cols-3 gap-10">

        <CollectionCard
          title="Scotland"
          subtitle="Highlands, Islands & Wild Places"
          image="/images/scotland/glencoe.jpg"
          href="/collections/scotland"
        />

        <CollectionCard
          title="Paris"
          subtitle="Architecture, Streets & Atmosphere"
          image="/images/paris/paris.jpg"
          href="/collections/paris"
        />

        <CollectionCard
          title="Porto"
          subtitle="Colour, Texture & Light"
          image="/images/porto/porto.jpg"
          href="/collections/porto"
        />

      </div>
    </Section>
  );
}