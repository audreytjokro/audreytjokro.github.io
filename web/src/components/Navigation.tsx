import { NavLink } from "react-router-dom";
import "./Navigation.css";

const links = [
  { to: "/", label: "Work" },
  { to: "/about", label: "About" },
];

export default function Navigation() {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav__name text-body">
        Audrey Tjokro
      </NavLink>
      <div className="nav__links">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) =>
              `nav__link text-link-1 ${isActive ? "nav__link--active" : ""}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
