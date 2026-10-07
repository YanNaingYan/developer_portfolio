import { useState } from "react";
import { profile } from "../data/portfolio";

const links = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-primary-container text-on-primary flex items-center justify-center font-headline-sm">
            {profile.initials}
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-title-md leading-none">{profile.name}</span>
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-1">
              Frontend Dev
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1 px-1 py-1 rounded-xl bg-surface-container-low">
          {links.map((link, index) => (
            <a
              key={link}
              href={index === 0 ? "#home" : `#${link.toLowerCase()}`}
              className={`px-4 py-1.5 rounded-lg text-sm transition-colors ${
                index === 0
                  ? "bg-surface-container-high font-medium"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex gap-1">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container">
              <span className="material-symbols-outlined">code</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container">
              <span className="material-symbols-outlined">share</span>
            </a>
          </div>

          <a href="#contact" className="hidden sm:inline-flex px-5 py-2.5 rounded-lg bg-secondary-container text-white font-semibold hover:-translate-y-0.5 transition-transform">
            Let's Talk
          </a>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center"
            aria-label="Toggle navigation"
          >
            <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden bg-surface border-t border-outline-variant px-6 py-4 flex flex-col gap-2">
          {links.map((link) => (
            <a
              key={link}
              href={link === "Home" ? "#home" : `#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-lg hover:bg-surface-container-low"
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
