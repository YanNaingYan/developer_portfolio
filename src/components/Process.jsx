const steps = [
  ["01", "Discover", "Understand the problem, requirements, users, and technical constraints."],
  ["02", "Design", "Create clean layouts, reusable patterns, responsive behavior, and visual hierarchy."],
  ["03", "Develop", "Build semantic, reusable React components and connect the required APIs."],
  ["04", "Refine", "Test responsiveness, polish interactions, and improve the final user experience."],
];

export default function Process() {
  return (
    <section className="w-full bg-surface-container-lowest py-24 border-y border-outline-variant/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
        <div className="max-w-xl">
          <span className="font-label-caps text-label-caps text-secondary-container uppercase">05 / METHODOLOGY</span>
          <h2 className="font-headline-lg text-headline-lg mt-2">How I Build</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(([number, title, description]) => (
            <article key={number} className="p-6 rounded-xl bg-surface border border-outline-variant flex flex-col gap-2">
              <span className="font-display text-3xl font-extrabold text-secondary-container/40">{number}</span>
              <h3 className="font-title-md">{title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
