import InfoList from "../components/InfoList";
import ExploreMore from "../components/ExploreMore";
import aboutPhoto from "../assets/about/audrey-brooklyn-bridge.webp";
import booksThumbnail from "../assets/about/books-ive-read.webp";
import watercolorThumbnail from "../assets/about/watercolor-paintings.webp";
import echoesOfItalyThumbnail from "../assets/echoes-of-italy/image-05-venice.webp";
import "./StackedPage.css";

const exploreItems = [
  {
    category: "Artwork",
    title: "Watercolor",
    color: "var(--color-accent-pink)",
    buttonText: "Some artwork I've made",
    image: {
      src: watercolorThumbnail,
      alt: "Three watercolor paintings: flowers in a blue-and-white vase, a portrait, and a heron",
    },
  },
  {
    category: "Books",
    title: "Favorite books",
    color: "var(--color-accent-olive)",
    buttonText:
      "Some of my favorite books! In-depth reviews of my books are on my Goodreads account.",
    href: "https://www.goodreads.com/user/show/17700379-audrey-tjokro",
    image: {
      src: booksThumbnail,
      alt: "Flat lay of three books: When Breath Becomes Air, Hollywood Ending, and The Unbearable Lightness of Being",
    },
  },
  {
    category: "Photography",
    title: "My photography",
    color: "var(--color-accent-blue)",
    buttonText: "Capturing the world from my perspective",
    href: "https://audreychristabelt.wixsite.com/portfolio",
    image: {
      src: echoesOfItalyThumbnail,
      alt: "Two people sitting on a ledge talking, in Venice",
    },
  },
];

export default function About() {
  return (
    <div className="stacked-page">
      <section className="stacked-page__section stacked-page__section--stack">
        <p className="text-heading">
          I'm a technical product manager experienced with launching and
          building features for an AI-powered e-commerce platform. Also, a
          budding researcher / engineer with hands-on experience in computer
          vision, ML systems, and hardware optimization. I thrive in
          collaborative environments, where ideas can bounce and evolve.
        </p>
        <p className="text-heading">
          I love the challenge of taking a concept and translating it into a
          compelling visual experience. Whether I'm sketching, photographing,
          or designing, I'm always searching for ways to connect with people
          on a deeper level through my work.
        </p>
      </section>

      <section className="stacked-page__section">
        <InfoList
          heading="Right now I am..."
          image={{
            src: aboutPhoto,
            alt: "Audrey smiling on the Brooklyn waterfront, with the Brooklyn Bridge and Manhattan skyline behind her",
          }}
          rows={[
            { label: "Reading:", value: "Hollywood, Ending" },
            {
              label: "Book I recommend to everyone:",
              value: "When Breath Becomes Air",
            },
            {
              label: "Current obsession:",
              value: "Reliving my youth and watching iCarly",
            },
            { label: "Training for:", value: "The NYC Marathon" },
          ]}
        />
      </section>

      <ExploreMore
        intro="From graphic design to interior spaces, see the breadth of my creative explorations."
        items={exploreItems}
      />
    </div>
  );
}
