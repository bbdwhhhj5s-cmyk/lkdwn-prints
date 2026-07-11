import Section from "../layout/Section";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

export default function AboutSection() {
  return (
    <Section
      id="about"
      className="bg-[#0B1016] text-white py-40 lg:py-48"
    >
      <div className="mx-auto max-w-5xl text-center">

        <p className="mb-8 uppercase tracking-[0.35em] text-xs text-[#B8965A]">
          About LKDWN Prints
        </p>

        <SectionTitle className="mx-auto max-w-4xl">
          Photography collected over a decade of exploration.
        </SectionTitle>

        <p className="mx-auto mt-12 max-w-3xl text-[20px] leading-10 text-[#C8CDD2]">
          LKDWN Prints is the personal archive of Scottish photographer
          John McHugh. Every photograph has been made with patience,
          returning to landscapes in changing weather and changing light,
          before being carefully prepared as a museum-quality archival print
          designed to be lived with for generations.
        </p>

        <div className="mt-16">
          <Button href="/about">
            Discover the Story
          </Button>
        </div>

      </div>
    </Section>
  );
}