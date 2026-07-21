import ProgressBar from "../../../components/navigation/ProgressBar";
import CollectionNav from "../../../components/navigation/CollectionNav";
import CollectionFooter from "../../../components/navigation/CollectionFooter";

import ChapterDivider from "../../../components/scotland/ChapterDivider";

import ExhibitionSequence from "../../../components/exhibition/ExhibitionSequence";

import Footer from "../../../components/home/Footer";

import galleryData from "../../../components/collections/porto";

export default function ParisPage() {
  return (
    <>
      <ProgressBar />

      <CollectionNav title="Porto" />

      <section
        style={{
          height: "100vh",
          backgroundImage: "url('/images/porto/porto-9.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

<ChapterDivider
  number="I"
  title="Along the Douro"
  subtitle="Porto is a city of texture. Weathered stone, tiled facades and soft Atlantic light create an atmosphere unlike anywhere else in Europe."
  quote="Cities become memorable when the light reveals their character."
/>

      <ExhibitionSequence collection={galleryData} />

      <CollectionFooter
        previous="/collections/paris"
previousTitle="Paris"

next="/collections/prague"
nextTitle="Prague"
      />

      <Footer />
    </>
  );
}