import Section from "../layout/Section";

export default function EditorialFeature() {
  return (
    <Section className="bg-[#0A1016] py-0">
      <div className="relative">

        <img
          src="/images/scotland/glencoe-editorial.jpg"
          alt="Glencoe, Scotland"
          className="w-full h-[80vh] object-cover"
        />

        <div className="absolute inset-0 bg-black/35 flex items-end">
          <div className="max-w-4xl px-8 md:px-16 lg:px-24 pb-20">

            <p className="uppercase tracking-[0.35em] text-[#D6B36A] text-xs mb-6">
              Editorial Selection
            </p>

            <h2 className="heading text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white max-w-4xl">
              Every landscape is photographed with patience.
              <br />
              Then printed to be lived with.
            </h2>

            <p className="body-text mt-8 max-w-2xl text-lg leading-8 text-[#E5E2DC]">
              Museum-quality archival prints produced using fine art papers
              and pigment inks, preserving every detail, tone and atmosphere
              for generations.
            </p>

          </div>
        </div>

      </div>
    </Section>
  );
}