import { useEffect, useRef, useState } from "react";
import { profile } from "../content";
import { Icon } from "./Icon";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Projects", "work"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Services", "services"],
  ["Contact", "contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const breakpoint = window.matchMedia("(min-width: 1101px)");
    const reset = () => {
      if (breakpoint.matches) setOpen(false);
    };
    window.addEventListener("keydown", close);
    breakpoint.addEventListener("change", reset);
    return () => {
      window.removeEventListener("keydown", close);
      breakpoint.removeEventListener("change", reset);
    };
  }, [open]);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="wordmark" href="#home" aria-label="Izel Bianchina home">
          Izel Bianchina<span>.</span>
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
        <nav
          id="navigation"
          className={open ? "navigation is-open" : "navigation"}
          aria-label="Main navigation"
        >
          <div className="nav-links">
            {links.map(([label, id]) => (
              <a key={id} onClick={() => setOpen(false)} href={`#${id}`}>
                {label}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <a
              className="icon-link"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile (opens in a new tab)"
            >
              <Icon name="github" />
            </a>
            {profile.linkedin && (
              <a
                className="icon-link"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile (opens in a new tab)"
              >
                <Icon name="linkedin" />
              </a>
            )}
            <a
              className="button primary nav-contact"
              href="#contact"
              onClick={() => setOpen(false)}
            >
              Let’s talk
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
