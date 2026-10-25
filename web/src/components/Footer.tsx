import "./Footer.css";

const links = [
  {
    label: "Email",
    href: "https://mailhide.io/e/E5L68W0F",
    color: "var(--color-accent-pink)",
  },
  { label: "Twitter", href: "https://x.com/audreyctjokro", color: "var(--color-accent-purple)" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/audreytjokro",
    color: "var(--color-accent-blue)",
  },
];

export default function Footer() {
  return (
    <footer className="footer text-heading">
      <div className="footer__links">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="footer__link"
            style={{ color: link.color }}
          >
            {link.label}
          </a>
        ))}
      </div>
      <p className="footer__copy">
        © Audrey Tjokro {new Date().getFullYear()} All Rights Reserved
      </p>
    </footer>
  );
}
