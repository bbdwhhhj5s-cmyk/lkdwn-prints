import ProgressBar from "../../../components/navigation/ProgressBar";
import CollectionNav from "../../../components/navigation/CollectionNav";
import CollectionFooter from "../../../components/navigation/CollectionFooter";

import ScotlandHero from "../../../components/scotland/ScotlandHero";
import ScotlandIntro from "../../../components/scotland/ScotlandIntro";
import ChapterDivider from "../../../components/scotland/ChapterDivider";
import scotland from "../../../data/collections/scotland";

<ExhibitionSequence
    collection={scotland}
/>

import Footer from "../../../components/home/Footer";
export default function ScotlandPage() {
  return (
    <>
      <ProgressBar />

      <CollectionNav
        title="Scotland"
      />

      <ScotlandHero />

      <ScotlandIntro />

      <ChapterDivider
        number="I"
        title="Arrival"
        subtitle="The first encounter with Scotland is never forgotten."
        quote="Every journey begins long before the shutter is pressed."
      />

      <ExhibitionSequence />

      <CollectionFooter
        previous="/"
        previousTitle="LKDWN Prints"

        next="/collections/paris"
        nextTitle="Paris"
      />

      <Footer />
    </>
  );
}