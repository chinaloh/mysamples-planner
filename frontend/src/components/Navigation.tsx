import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  className?: string;
}

type NavItem = {
  name: string;
  to: string;
  ariaLabel?: string;
};

const NAV_ITEMS: NavItem[] = [
  { name: "Home", to: "/" },
  { name: "Executive Dashboard", to: "/executive-dashboard" },
  { name: "MySamples", to: "/mysamples", ariaLabel: "My Samples" },
  { name: "Wafer Plan", to: "/wafer-plan" },
  { name: "Wafer Simulation", to: "/wafer-simulation" },
  { name: "Timeline Simulation", to: "/timeline-simulation" },
  { name: "Help", to: "/help" },
];

export default function Navigation({ className }: Props): JSX.Element {
  const classes = ["navigation", className].filter(Boolean).join(" ");

  return (
    <nav className={classes} aria-label="Main navigation" role="navigation">
      <ul className="nav-list" role="menu">
        {NAV_ITEMS.map((item) => (
          <li key={item.to} className="nav-item" role="none">
            <NavLink
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `nav-link${isActive ? " active" : ""}`
              }
              role="menuitem"
              aria-label={item.ariaLabel ?? item.name}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
