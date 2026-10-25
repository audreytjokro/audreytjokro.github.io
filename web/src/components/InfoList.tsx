import ImagePlaceholder from "./ImagePlaceholder";
import "./InfoList.css";

type InfoRow = {
  label: string;
  value: string;
};

type InfoListProps = {
  heading: string;
  rows: InfoRow[];
  imageLabel?: string;
  image?: { src: string; alt: string };
};

export default function InfoList({
  heading,
  rows,
  imageLabel,
  image,
}: InfoListProps) {
  return (
    <div className="info-list">
      <p className="text-caption-3 info-list__heading">{heading}</p>
      <div className="info-list__rows">
        {rows.map((row) => (
          <div className="info-list__row" key={row.label}>
            <span className="text-caption info-list__label">{row.label}</span>
            <span className="text-caption info-list__value">{row.value}</span>
          </div>
        ))}
        {image ? (
          <img
            src={image.src}
            alt={image.alt}
            className="info-list__image info-list__photo"
            loading="lazy"
          />
        ) : (
          imageLabel && (
            <ImagePlaceholder
              label={imageLabel}
              aspectRatio="1 / 1"
              className="info-list__image"
            />
          )
        )}
      </div>
    </div>
  );
}
