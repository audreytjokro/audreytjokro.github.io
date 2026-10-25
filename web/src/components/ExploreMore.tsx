import ImagePlaceholder from "./ImagePlaceholder";
import "./Button.css";
import "./ExploreMore.css";

type ExploreCard = {
  category: string;
  title: string;
  color: string;
  buttonText: string;
  href?: string;
  linkText?: string;
  image?: { src: string; alt: string };
};

type ExploreMoreProps = {
  intro: string;
  items: ExploreCard[];
};

export default function ExploreMore({ intro, items }: ExploreMoreProps) {
  return (
    <section className="explore-more">
      <p className="text-heading explore-more__intro">{intro}</p>
      <div className="explore-more__grid">
        {items.map((item) => (
          <article
            key={item.title}
            className="explore-more__card"
            style={{ borderTopColor: item.color }}
          >
            <h2
              className="text-caption-2 explore-more__category"
              style={{ color: item.color }}
            >
              {item.category}
            </h2>
            <p className="text-heading explore-more__title" style={{ color: item.color }}>
              {item.title}
            </p>
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="button explore-more__button"
                style={{ "--button-color": "var(--color-accent-pink)" } as React.CSSProperties}
              >
                {item.buttonText}
              </a>
            ) : (
              <div
                className="button explore-more__button"
                style={{ "--button-color": "var(--color-accent-pink)" } as React.CSSProperties}
              >
                {item.buttonText}
              </div>
            )}
            {item.image ? (
              <img
                src={item.image.src}
                alt={item.image.alt}
                className="explore-more__photo"
                loading="lazy"
              />
            ) : (
              <ImagePlaceholder label={item.title} aspectRatio="1 / 1" />
            )}
            {item.linkText && (
              <p className="text-caption-2 explore-more__link">{item.linkText}</p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
