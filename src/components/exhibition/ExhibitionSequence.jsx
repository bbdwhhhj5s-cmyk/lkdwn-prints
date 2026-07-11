import ExhibitionImage from "./ExhibitionImage";
import StoryBlock from "./StoryBlock";
import QuoteBlock from "./QuoteBlock";
import Diptych from "./Diptych";
import FullscreenImage from "./FullscreenImage";
import scotland from "../../data/collections/scotland";
<ExhibitionSequence
    collection={scotland}
/>
export default function ExhibitionSequence() {
  return (
    <>
      {galleryData.map((section, index) => {
        switch (section.type) {
          case "image":
            return (
              <ExhibitionImage
                key={index}
                {...section}
              />
            );

          case "story":
            return (
              <StoryBlock
                key={index}
                heading={section.heading}
                text={section.text}
              />
            );

          case "quote":
            return (
              <QuoteBlock
                key={index}
                quote={section.quote}
                author={section.author}
              />
            );

          case "diptych":
            return (
              <Diptych
                key={index}
                left={section.left}
                right={section.right}
              />
            );

          case "fullscreen":
            return (
              <FullscreenImage
                key={index}
                image={section.image}
                title={section.title}
                location={section.location}
              />
            );

          default:
            return null;
        }
      })}
    </>
  );
}