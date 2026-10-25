import "./ImagePlaceholder.css";

type ImagePlaceholderProps = {
  label: string;
  rounded?: boolean;
  aspectRatio?: string;
  className?: string;
};

export default function ImagePlaceholder({
  label,
  rounded = true,
  aspectRatio,
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`image-placeholder ${rounded ? "image-placeholder--rounded" : ""} ${className ?? ""}`}
      style={aspectRatio ? { aspectRatio } : undefined}
      role="img"
      aria-label={label}
    >
      <span>{label}</span>
    </div>
  );
}
