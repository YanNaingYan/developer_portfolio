import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
      <div className="flex flex-col gap-12">
        <div className="max-w-2xl">
          <span className="font-label-caps text-label-caps text-secondary-container uppercase">02 / EXPERTISE</span>
          <h2 className="font-headline-lg text-headline-lg mt-2">Tools I Work With</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-3">
            A practical toolkit for building clean architecture, responsive interfaces, and smooth user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <article key={skill.title} className="bg-white p-6 rounded-xl border border-outline-variant flex flex-col justify-between hover:shadow-lg hover:border-outline transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined">{skill.icon}</span>
                </div>
                <h3 className="font-title-md">{skill.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {skill.items.map((item, i) => (
                    <span key={item} className={`font-label-code text-label-code px-2 py-1 rounded border ${
                      i === 0 ? "bg-secondary-container/10 border-secondary-container/30 text-secondary-container font-semibold" : "bg-surface border-outline-variant"
                    }`}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-outline-variant/50 font-label-code text-label-code text-xs text-on-surface-variant">
                {skill.footer}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
