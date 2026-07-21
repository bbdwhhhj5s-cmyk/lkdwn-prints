import Section from "../layout/Section";

export default function EditorialFeature() {
  return (
    <Section className="bg-[#0A1016] py-0">
      <div className="relative">

        <img
          src="/images/scotland/scotland-23.jpg"
          alt="LKDWN Prints framed fine art print"
          className="w-full h-[85vh] object-cover"
        />

        <div className="absolute inset-0 bg-black/45 flex items-end">

          <div className="max-w-4xl px-8 md:px-16 lg:px-24 pb-24">

            <p className="uppercase tracking-[0.35em] text-[#D6B36A] text-xs mb-6">
              Collector's Edition
            </p>

            <h2 className="heading text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white max-w-4xl">
              Every landscape is photographed with patience.
              <br />
              Then printed to be lived with.
            </h2>

            <p className="body-text mt-8 max-w-2xl text-lg leading-8 text-white/80">
              Museum-quality archival Giclée prints produced using fine art
              papers and pigment inks, preserving every detail, tone and
              atmosphere for generations.
            </p>

          </div>

        </div>

      </div>
    </Section>
  );
}