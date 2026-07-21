import ProgressBar from "../../../components/navigation/ProgressBar";
import CollectionNav from "../../../components/navigation/CollectionNav";
import CollectionFooter from "../../../components/navigation/CollectionFooter";

import ChapterDivider from "../../../components/scotland/ChapterDivider";

import ExhibitionSequence from "../../../components/exhibition/ExhibitionSequence";

import Footer from "../../../components/home/Footer";

import galleryData from "../../../components/collections/paris";

export default function ParisPage() {
  return (
    <>
      <ProgressBar />

      <CollectionNav title="Paris" />

      <section
        style={{
          height: "100vh",
          backgroundImage: "url('/images/paris/paris.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <ChapterDivider
        number="I"
        title="The City of Light"
        subtitle="Paris reveals itself slowly. Every visit feels familiar yet completely different."
        quote="Cities are remembered by atmosphere more than landmarks."
      />

      <ExhibitionSequence collection={galleryData} />

      <CollectionFooter
        previous="/collections/scotland"
        previousTitle="Scotland"
        next="/collections/porto"
        nextTitle="Porto"
      />

      <Footer />
    </>
  );
}