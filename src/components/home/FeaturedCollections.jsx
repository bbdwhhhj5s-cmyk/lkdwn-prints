import Section from "../layout/Section";
import SectionTitle from "../ui/SectionTitle";
import CollectionCard from "./CollectionCard";

export default function FeaturedCollections() {
  return (
    <Section
      id="collections"
      className="bg-[#081019] text-white py-36 lg:py-44"
    >
      <div className="max-w-3xl mx-auto text-center">

        <p className="uppercase tracking-[0.35em] text-[#B8965A] text-xs mb-6">
          Featured Collections
        </p>

        <SectionTitle>
          Explore the Archive
        </SectionTitle>

        <p className="mt-8 text-[#CFCFCF] text-lg leading-9">
          A curated selection of museum-quality landscape photography from
          Scotland and Europe. Every collection has been carefully edited to
          celebrate atmosphere, light and a lasting sense of place.
        </p>

      </div>

      <div className="mt-32 grid xl:grid-cols-3 gap-14">

        <CollectionCard
          title="Scotland"
          subtitle="Highlands, Islands & Wild Places"
          image="/images/scotland/glencoe.jpg"
          href="/collections/scotland"
        />

        <CollectionCard
          title="Paris"
          subtitle="Architecture, Light & Atmosphere"
          image="/images/paris/Paris.jpg"
          href="/collections/paris"
        />

        <CollectionCard
          title="Porto"
          subtitle="Colour, Texture & Light"
          image="/images/porto/Porto.jpg"
          href="/collections/porto"
        />

      </div>
    </Section>
  );
}
