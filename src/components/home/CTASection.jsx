import Section from "../layout/Section";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

export default function CTASection() {
  return (
    <Section
      className="bg-[#081019] text-white py-44 lg:py-56"
    >
      <div className="mx-auto max-w-4xl text-center">

        <SectionTitle className="mx-auto">
          Find the photograph that
          <br />
          belongs on your wall.
        </SectionTitle>

        <p className="mx-auto mt-10 max-w-2xl text-[20px] leading-10 text-[#C7CBD1]">
          Every print is produced using museum-quality archival papers
          and pigment inks, selected to preserve detail, atmosphere and
          colour for generations.
        </p>

        <div className="mt-16">
          <Button href="/collections">
            Explore All Collections
          </Button>
        </div>

      </div>
    </Section>
  );
}