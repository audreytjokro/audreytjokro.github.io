type PixelPointingHandProps = {
  className?: string;
};

// A blocky, pixel-art right-pointing hand (manicule), built from plain
// rects on a 12x10 grid so it stays crisp/pixelated at any size.
export default function PixelPointingHand({ className }: PixelPointingHandProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 40"
      fill="currentColor"
      shapeRendering="crispEdges"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="12" y="0" width="8" height="4" />
      <rect x="12" y="4" width="8" height="4" />
      <rect x="8" y="8" width="16" height="4" />
      <rect x="0" y="12" width="48" height="4" />
      <rect x="0" y="16" width="48" height="4" />
      <rect x="0" y="20" width="24" height="4" />
      <rect x="0" y="24" width="24" height="4" />
      <rect x="0" y="28" width="24" height="4" />
      <rect x="4" y="32" width="16" height="4" />
      <rect x="8" y="36" width="8" height="4" />
    </svg>
  );
}
