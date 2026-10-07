import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12">
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary-container text-white flex items-center justify-center font-headline-sm">
                {profile.initials}
              </div>
              <span className="font-headline-sm">{profile.name}</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              Frontend developer building clean, responsive, and user-friendly web applications.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Tailwind CSS"].map((tag) => (
                <span key={tag} className="font-label-code text-label-code px-2 py-1 rounded bg-surface-container text-on-surface-variant">{tag}</span>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Index</span>
            {["About", "Skills", "Projects", "Experience", "Contact"].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary-container">
                {link}
              </a>
            ))}
          </div>

          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Connect</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Open to discussing frontend projects, internships, and development opportunities.
            </p>
            <div className="flex gap-4">
              <a href={profile.github} target="_blank" rel="noreferrer" className="font-label-code text-label-code hover:text-secondary-container">GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="font-label-code text-label-code hover:text-secondary-container">LinkedIn</a>
              <a href={`mailto:${profile.email}`} className="font-label-code text-label-code hover:text-secondary-container">Email</a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-surface-container-low px-6 py-4 rounded-xl">
          <span className="font-label-code text-label-code text-on-surface-variant">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </span>
          <span className="font-label-code text-label-code text-secondary-container font-semibold">
            Built with React
          </span>
        </div>
      </div>
    </footer>
  );
}
