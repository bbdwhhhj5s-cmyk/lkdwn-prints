import Section from "../layout/Section";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

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
      <div className="grid lg:grid-cols-[0.42fr_0.58fr] gap-20 lg:gap-28 items-center">

        {/* Left Column */}

        <div className="max-w-lg">

          <p className="uppercase tracking-[0.35em] text-[#B8965A] text-xs mb-8">
            {eyebrow}
          </p>

          <SectionTitle>
            {title}
          </SectionTitle>

          <p className="mt-10 text-[#CFCFCF] text-lg leading-9">
            {description}
          </p>

          <div className="mt-12">
            <Button>
              Explore Collection
            </Button>
          </div>

        </div>

        {/* Right Column */}

        <div className="relative">

          <img
            src={image}
            alt={title}
            className="
              w-full
              rounded-md
              object-cover
              shadow-[0_30px_80px_rgba(0,0,0,0.45)]
              transition-transform
              duration-700
              hover:scale-[1.015]
            "
          />

        </div>

      </div>
    </Section>
  );
}