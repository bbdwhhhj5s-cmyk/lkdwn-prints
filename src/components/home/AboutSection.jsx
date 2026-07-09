import Section from "../layout/Section";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

export default function AboutSection() {
  return (
    <Section
      id="about"
      className="bg-[#0D1219] text-white py-32 lg:py-40"
    >
      <div className="max-w-5xl mx-auto text-center">

        <p className="uppercase tracking-[0.35em] text-[#B8965A] text-xs mb-6">
          About LKDWN Prints
        </p>

        <SectionTitle>
          Crafted with patience.
          <br />
          Printed to last.
        </SectionTitle>

        <p className="mt-10 max-w-3xl mx-auto text-lg leading-9 text-[#CFCFCF]">
          LKDWN Prints is the personal photographic archive of John McHugh.
          Over more than a decade, Scotland and Europe have been explored
          through changing light, shifting weather and quiet moments. Every
          photograph is carefully prepared as a museum-quality archival print
          using premium fine art papers and pigment inks, preserving every
          detail for generations.
        </p>

        <div className="mt-14">
          <Button href="/about">
            Discover the Story
          </Button>
        </div>

      </div>
    </Section>
  );
}