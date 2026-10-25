// Commented out for now — bring back when there's something to show here.
// import ExploreMore from "../components/ExploreMore";
import image01 from "../assets/echoes-of-italy/image-01-man-wall.webp";
import image02 from "../assets/echoes-of-italy/image-02-town-square.webp";
import image03 from "../assets/echoes-of-italy/image-03-basketball.webp";
import image04 from "../assets/echoes-of-italy/image-04-wharf.webp";
import image05 from "../assets/echoes-of-italy/image-05-venice.webp";
import image06 from "../assets/echoes-of-italy/image-06-dancing.webp";
import "./Project.css";

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  align: "start" | "center" | "end";
  widthPercent: number;
  aspectRatio: string;
};

const topImages: GalleryImage[] = [
  {
    src: image01,
    alt: "A man walking in front of a textured wall",
    caption: "Wandering and wondering, lost in the rhythm of the city.",
    align: "center",
    widthPercent: 59,
    aspectRatio: "2521 / 3358",
  },
  {
    src: image02,
    alt: "A crowd of people gathered in a town square",
    caption: "A symphony of motion and architecture, framed by history.",
    align: "start",
    widthPercent: 75,
    aspectRatio: "778.39 / 583.79",
  },
  {
    src: image03,
    alt: "People playing basketball outside",
    caption: "A study in contrasts: light, shadow, and the rhythm of the game.",
    align: "end",
    widthPercent: 83,
    aspectRatio: "3034 / 2025",
  },
];

const bottomImages: GalleryImage[] = [
  {
    src: image04,
    alt: "A man taking a photo on a wharf",
    caption: "Dockside perspective, capturing the soul of the water.",
    align: "start",
    widthPercent: 100,
    aspectRatio: "978 / 567",
  },
  {
    src: image05,
    alt: "Two people sitting on a ledge talking, in Venice",
    caption: "Venice, and a moment between two.",
    align: "center",
    widthPercent: 78,
    aspectRatio: "3034 / 2025",
  },
  {
    src: image06,
    alt: "People dancing in a town square",
    caption: "A spontaneous rhythm, a shared moment, pure joy.",
    align: "center",
    widthPercent: 100,
    aspectRatio: "1100 / 600",
  },
];

function GalleryFigure({ image }: { image: GalleryImage }) {
  return (
    <figure
      className="project-gallery__figure"
      style={{
        maxWidth: `${image.widthPercent}%`,
        alignSelf:
          image.align === "center"
            ? "center"
            : image.align === "end"
              ? "flex-end"
              : "flex-start",
      }}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="project-gallery__image"
        style={{ aspectRatio: image.aspectRatio }}
        loading="lazy"
      />
      <figcaption className="text-caption project-gallery__caption">
        {image.caption}
      </figcaption>
    </figure>
  );
}

export default function Project() {
  return (
    <div className="project-page">
      <header className="project-page__header">
        <div className="project-page__title">
          <p className="text-caption-3">Photography</p>
          <p className="text-heading">Echoes of Italy</p>
        </div>
        <p className="text-body">
          'Echoes of Italy' is my lens on the country's timeless charm —
          candid moments, architectural details, and sun-kissed scenes.
        </p>
      </header>

      <div className="project-gallery">
        {topImages.map((image) => (
          <GalleryFigure image={image} key={image.caption} />
        ))}
      </div>

      <div className="project-page__midtext">
        <p className="text-heading">
          From sun-drenched piazzas to intimate still-lives, I aimed to
          capture the soul of the country through light and composition.
        </p>
      </div>

      <div className="project-gallery">
        {bottomImages.map((image) => (
          <GalleryFigure image={image} key={image.caption} />
        ))}
      </div>

      {/* Commented out for now — bring back when there's something to show here.
      <ExploreMore
        intro="From graphic design to interior spaces, see the breadth of my creative explorations."
        items={[
          {
            category: "Design",
            title: "Castro Capital branding",
            color: "var(--color-accent-blue)",
            buttonText: "Capturing the world from my perspective",
            linkText: "See more here →",
          },
          {
            category: "Product Management",
            title: "Building Products at Flywheel",
            color: "var(--color-accent-pink)",
            buttonText: "Building Products at Flywheel",
            linkText: "See more here →",
          },
        ]}
      />
      */}
    </div>
  );
}
