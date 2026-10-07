const milestones = [
  ["2026", "Frontend Developer / Junior Engineer", "Building responsive React applications, reusable components, and API-connected interfaces."],
  ["2025", "Frontend Development Projects", "Developing portfolio projects, dashboards, e-commerce interfaces, and modern web experiences."],
  ["2024", "Professional Web Foundations", "Strengthening HTML, CSS, JavaScript, responsive design, and modern frontend development."],
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
      <div className="flex flex-col gap-12">
        <div className="max-w-xl">
          <span className="font-label-caps text-label-caps text-secondary-container uppercase">04 / BACKGROUND</span>
          <h2 className="font-headline-lg text-headline-lg mt-2">My Journey</h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="hidden md:block absolute top-6 left-6 right-6 h-0.5 bg-outline-variant" />
          {milestones.map(([year, title, description], index) => (
            <article key={year} className="relative bg-white p-6 rounded-xl border border-outline-variant">
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl font-bold">{year}</span>
                <span className={`w-3.5 h-3.5 rounded-full ring-4 ring-secondary-container/20 ${index === 0 ? "bg-secondary-container" : "bg-on-surface-variant/40"}`} />
              </div>
              <h3 className="font-title-md mt-4">{title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
