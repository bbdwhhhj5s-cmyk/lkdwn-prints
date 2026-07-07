import Section from "../layout/Section";
import SectionTitle from "../ui/SectionTitle";

export default function CollectionIntro() {
  return (
    <Section
      id="collection"
      className="bg-[#081722]"
    >
      <SectionTitle
        eyebrow="The Collection"
        title="Collected Landscapes."
        subtitle="A decade of landscapes, architecture and quiet moments, collected across Scotland and Europe. Every photograph is produced as a museum-quality archival print using carefully selected papers and pigment inks, created to be lived with for generations."
      />
    </Section>
  );
}