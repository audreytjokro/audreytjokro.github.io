import Button from "./Button";
import ImagePlaceholder from "./ImagePlaceholder";
import "./ProjectRow.css";

type ProjectRowProps = {
  category: string;
  title: string;
  color: string;
  buttonColor?: string;
  to?: string;
  image?: { src: string; alt: string };
  noThumbnail?: boolean;
  buttonText?: string;
};

export default function ProjectRow({
  category,
  title,
  color,
  buttonColor,
  to,
  image,
  noThumbnail,
  buttonText = "Read more ->",
}: ProjectRowProps) {
  return (
    <div
      className={`project-row ${noThumbnail ? "project-row--text-only" : ""}`}
      style={{ borderTopColor: color }}
    >
      <div className="project-row__text">
        <h2 className="text-caption-2 project-row__category" style={{ color }}>
          {category}
        </h2>
        <p className="text-heading project-row__title" style={{ color }}>
          {title}
        </p>
        <Button to={to} color={buttonColor}>
          {buttonText}
        </Button>
      </div>
      {!noThumbnail && (
        <div className="project-row__image">
          {image ? (
            <img
              src={image.src}
              alt={image.alt}
              className="project-row__photo"
              loading="lazy"
            />
          ) : (
            <ImagePlaceholder label={title} aspectRatio="1 / 1" />
          )}
        </div>
      )}
    </div>
  );
}
