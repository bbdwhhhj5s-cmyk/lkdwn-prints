import CollectionChapter from "./CollectionChapter";
import ExhibitionImage from "./ExhibitionImage";
import StoryBlock from "./StoryBlock";
import QuoteBlock from "./QuoteBlock";
import Diptych from "./Diptych";
import FullscreenImage from "./FullscreenImage";
import SectionBreak from "./SectionBreak";
import PullQuote from "./PullQuote";

export default function ExhibitionSequence({ collection }) {
  return (
    <>
      {collection.map((section, index) => {
        switch (section.type) {
          case "chapter":
            return (
              <CollectionChapter
                key={index}
                number={section.number}
                title={section.title}
                subtitle={section.subtitle}
              />
            );

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
                image={section.image}
                reverse={section.reverse}
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

          case "section":
            return (
              <SectionBreak
                key={index}
                title={section.title}
                text={section.text}
              />
            );

          case "pullquote":
            return (
              <PullQuote
                key={index}
                quote={section.quote}
              />
            );

          default:
            return null;
        }
      })}
    </>
  );
}