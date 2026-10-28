import "./ProjectHeader.css";

type MetaItem = {
  label: string;
  value: string | string[];
};

type ProjectHeaderProps = {
  category: string;
  title: string;
  subtitle: string;
  intro?: string[];
  meta: MetaItem[];
};

export default function ProjectHeader({
  category,
  title,
  subtitle,
  intro,
  meta,
}: ProjectHeaderProps) {
  return (
    <header className="project-header">
      <div className="project-header__main">
        <p className="text-caption-3 project-header__category">{category}</p>
        <p className="text-heading project-header__title">{title}</p>
        <p className="text-body project-header__subtitle">{subtitle}</p>
        {intro?.map((paragraph) => (
          <p className="text-body project-header__intro" key={paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
      <div className="project-header__meta">
        {meta.map((item) => (
          <div className="project-header__meta-item" key={item.label}>
            <p className="text-caption-3 project-header__meta-label">
              {item.label}
            </p>
            {Array.isArray(item.value) ? (
              <ul className="project-header__meta-list">
                {item.value.map((line) => (
                  <li className="text-caption" key={line}>
                    {line}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-caption project-header__meta-value">
                {item.value}
              </p>
            )}
          </div>
        ))}
      </div>
    </header>
  );
}
