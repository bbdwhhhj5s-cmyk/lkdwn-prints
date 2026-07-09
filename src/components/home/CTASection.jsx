import Section from "../layout/Section";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

export default function CTASection() {
  return (
    <Section
      className="bg-[#081019] text-white py-40"
    >
      <div className="text-center max-w-4xl mx-auto">

        <SectionTitle>
          Bring the Landscape Home.
        </SectionTitle>

        <p className="mt-8 text-lg leading-8 text-[#CFCFCF] max-w-2xl mx-auto">
          Museum-quality archival photography from Scotland and Europe,
          created to be lived with for generations.
        </p>

        <div className="mt-14">
          <Button href="/collections">
            Explore All Collections
          </Button>
        </div>

      </div>
    </Section>
  );
}