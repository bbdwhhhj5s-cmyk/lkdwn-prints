import Section from "../layout/Section";

export default function ScotlandIntro() {
  return (
    <Section
      id="chapter-one"
      className="bg-[#0B1016] text-white py-40"
    >
      <div className="max-w-5xl mx-auto">

        <p className="uppercase tracking-[0.45em] text-[#B8965A] text-xs mb-6">
          Chapter One
        </p>

        <h2
          className="
            text-5xl
            md:text-7xl
            font-light
            tracking-[-0.05em]
            leading-[1]
            mb-20
          "
        >
          The Highlands
        </h2>

        <div className="grid lg:grid-cols-2 gap-20">

          <div>

            <p className="text-3xl leading-[1.5] font-light text-white">

              Scotland has never become familiar to me.

              Every journey feels different.

              Every season rewrites the landscape.

            </p>

          </div>

          <div>

            <p className="text-lg leading-9 text-[#CFCFCF]">

              I've spent more than a decade returning to the
              Highlands in search of changing weather,
              shifting light and those brief moments when
              the landscape reveals something unexpected.

            </p>

            <p className="mt-8 text-lg leading-9 text-[#CFCFCF]">

              Sometimes the photograph appears immediately.

              Sometimes it takes five visits.

              That's what keeps drawing me back.

            </p>

          </div>

        </div>

      </div>
    </Section>
  );
}