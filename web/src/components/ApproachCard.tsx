import "./ApproachCard.css";

type ApproachCardProps = {
  emoji: string;
  title: string;
  description: string;
};

export default function ApproachCard({
  emoji,
  title,
  description,
}: ApproachCardProps) {
  return (
    <div className="approach-card">
      <span className="approach-card__emoji" aria-hidden="true">
        {emoji}
      </span>
      <p className="approach-card__title">{title}</p>
      <p className="text-caption approach-card__description">{description}</p>
    </div>
  );
}
