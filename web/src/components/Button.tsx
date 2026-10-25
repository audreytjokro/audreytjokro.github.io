import { Link } from "react-router-dom";
import "./Button.css";

type ButtonProps = {
  children: React.ReactNode;
  to?: string;
  href?: string;
  color?: string;
};

export default function Button({ children, to, href, color }: ButtonProps) {
  const style = color
    ? ({ "--button-color": color } as React.CSSProperties)
    : undefined;

  if (to) {
    return (
      <Link to={to} className="button" style={style}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className="button"
        style={style}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className="button" style={style}>
      {children}
    </button>
  );
}
