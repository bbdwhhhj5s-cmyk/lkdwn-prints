import Section from "../layout/Section";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import Reveal from "../animations/Reveal";

export default function CollectionChapter({
  eyebrow,
  title,
  description,
  image,
}) {
  return (
    <Section
      id="scotland"
      className="bg-[#0B1016] text-white py-32 lg:py-40"
    >
      <div className="grid items-center gap-20 lg:grid-cols-[0.42fr_0.58fr] lg:gap-28">

        {/* Left Column */}

        <Reveal>
          <div className="max-w-lg">

            <p className="mb-8 text-xs uppercase tracking-[0.35em] text-[#B8965A]">
              {eyebrow}
            </p>

            <SectionTitle>
              {title}
            </SectionTitle>

            <p className="mt-10 max-w-lg text-[19px] leading-9 text-[#C7CBD1]">
              {description}
            </p>

            <div className="mt-14">
              <Button href="/collections/scotland">
                Explore Collection
              </Button>
            </div>

          </div>
        </Reveal>

        {/* Right Column */}

        <Reveal delay={250}>
          <div className="overflow-hidden rounded-sm shadow-[0_35px_80px_rgba(0,0,0,0.45)]">

            <img
              src={image}
              alt={title}
              className="
                h-[760px]
                w-full
                object-cover
                transition-transform
                duration-[1800ms]
                ease-out
                hover:scale-105
              "
            />

          </div>
        </Reveal>

      </div>
    </Section>
  );
}