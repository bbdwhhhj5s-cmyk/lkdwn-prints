import galleryData from "@/data/collections/scotland";

import ScotlandHero from "@/components/collections/ScotlandHero";
import ScotlandIntro from "@/components/collections/ScotlandIntro";

import ChapterDivider from "@/components/collections/ChapterDivider";
import StorySection from "@/components/collections/StorySection";
import Diptych from "@/components/collections/Diptych";
import Panorama from "@/components/collections/Panorama";
import EditorialQuote from "@/components/collections/EditorialQuote";
import EditorialImage from "@/components/collections/EditorialImage";
import FilmStrip from "@/components/collections/FilmStrip";
import EditorsSelection from "@/components/collections/EditorsSelection";
import NextCollection from "@/components/collections/NextCollection";

export default function ScotlandPage() {
  const featuredPrints = galleryData.filter(
    (item) => item.type === "image"
  );

  return (
    <>
      <ScotlandHero />

      <ScotlandIntro />

      {galleryData.map((item, index) => {
        switch (item.type) {
          case "chapter":
            return (
              <ChapterDivider
                key={index}
                number={item.number}
                title={item.title}
                subtitle={item.subtitle}
              />
            );

          case "story":
            return (
              <StorySection
                key={index}
                title={item.heading}
                body={item.text}
              />
            );

          case "image":
            return (
              <EditorialImage
                key={index}
                image={item.image}
                title={item.title}
                location={item.location}
                caption={item.description}
              />
            );

          case "diptych":
            return (
              <Diptych
                key={index}
                left={item.left}
                right={item.right}
              />
            );

          case "quote":
            return (
              <EditorialQuote
                key={index}
                quote={item.quote}
                author={item.author}
              />
            );

          case "filmstrip":
            return (
              <FilmStrip
                key={index}
                images={item.images}
              />
            );

          case "fullscreen":
            return (
              <Panorama
                key={index}
                image={item.image}
                title={item.title}
                location={item.location}
              />
            );

          default:
            return null;
        }
      })}

      <EditorsSelection
        prints={featuredPrints}
      />

      <NextCollection
        image="/images/paris/paris.jpg"
        title="Paris"
        description="A study of architecture, atmosphere and quiet mornings."
        href="/collections/paris"
      />
    </>
  );
}