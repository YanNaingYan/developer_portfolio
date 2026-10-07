import { projects } from "../data/portfolio";

function ProjectCard({ project, reverse }) {
  return (
    <article className="bg-white rounded-2xl border border-outline-variant overflow-hidden hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12">
      <div className={`lg:col-span-7 relative h-72 lg:h-auto overflow-hidden bg-surface-container ${reverse ? "order-1 lg:order-2" : ""}`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
        />
        <div className={`absolute top-4 ${reverse ? "right-4" : "left-4"} bg-primary-container text-white font-label-caps text-xs px-2.5 py-1 rounded`}>
          {project.badge}
        </div>
      </div>

      <div className={`lg:col-span-5 p-6 lg:p-10 flex flex-col justify-between ${reverse ? "order-2 lg:order-1" : ""}`}>
        <div className="flex flex-col gap-3">
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
            {project.category} • {project.year}
          </span>
          <h3 className="font-headline-sm text-headline-sm">{project.title}</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">{project.description}</p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag) => (
              <span key={tag} className="font-label-code text-label-code px-2 py-0.5 rounded bg-surface border border-outline-variant">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-5 pt-8">
          <a href="#" className="inline-flex items-center gap-1.5 font-label-code text-label-code font-semibold text-secondary-container hover:underline">
            Live Demo <span className="material-symbols-outlined text-base">open_in_new</span>
          </a>
          <a href="#" className="inline-flex items-center gap-1.5 font-label-code text-label-code hover:text-secondary-container">
            View Code <span className="material-symbols-outlined text-base">code</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-surface-container-low/50 py-24 border-t border-outline-variant/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
        <div className="max-w-2xl">
          <span className="font-label-caps text-label-caps text-secondary-container uppercase">03 / SELECTED WORK</span>
          <h2 className="font-headline-lg text-headline-lg mt-2">Selected Work</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-3">
            A selection of real-world projects I've designed and developed with a focus on clean UI and frontend quality.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} reverse={index % 2 === 1} />
          ))}

          <article className="bg-primary-container text-white rounded-2xl p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
                <span className="font-label-caps text-label-caps text-secondary-container uppercase">Personal Project</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm">Personal Portfolio</h3>
              <p className="font-body-md text-body-md text-on-primary-container max-w-2xl">
                A responsive portfolio designed to present frontend projects,
                technical skills, and development experience in a clean visual system.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end gap-3">
              <a href="#contact" className="px-5 py-3 rounded-lg bg-secondary-container text-white font-semibold">
                Contact Me
              </a>
              <a href="#" className="px-5 py-3 rounded-lg border border-white/20 hover:bg-white/10">
                GitHub
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
