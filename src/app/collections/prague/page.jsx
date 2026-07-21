import ProgressBar from "../../../components/navigation/ProgressBar";
import CollectionNav from "../../../components/navigation/CollectionNav";
import CollectionFooter from "../../../components/navigation/CollectionFooter";

import ChapterDivider from "../../../components/scotland/ChapterDivider";

import ExhibitionSequence from "../../../components/exhibition/ExhibitionSequence";

import Footer from "../../../components/home/Footer";

import galleryData from "../../../components/collections/prague";

export default function PraguePage() {
  return (
    <>
      <ProgressBar />

      <CollectionNav title="Prague" />

      <section
        style={{
          height: "100vh",
          backgroundImage: "url('/images/Prague/1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <ChapterDivider
        number="I"
        title="The Golden City"
        subtitle="Prague reveals its beauty through history, architecture and the changing light along the Vltava."
        quote="Some cities feel timeless because every street tells another story."
      />

      <ExhibitionSequence collection={galleryData} />

      <CollectionFooter
        previous="/collections/porto"
        previousTitle="Porto"
        next="/collections/port-de-pollenca"
        nextTitle="Port de Pollença"
      />

      <Footer />
    </>
  );
}