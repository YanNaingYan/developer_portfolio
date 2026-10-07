export default function About() {
  const stats = [
    ["10+", "Projects", "Built & shipped"],
    ["5+", "Core Skills", "Modern frontend"],
    ["100%", "Craft", "Detail focused"],
  ];

  return (
    <section id="about" className="w-full bg-surface-container-lowest py-24 border-y border-outline-variant/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
        <div className="max-w-xl">
          <span className="font-label-caps text-label-caps text-secondary-container uppercase">01 / ABOUT</span>
          <h2 className="font-headline-lg text-headline-lg mt-2">Turning Ideas Into Interfaces.</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              I specialize in transforming designs and ideas into fluid,
              accessible, and responsive digital products. I enjoy working
              between pixel-perfect visual design and practical frontend
              engineering.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              My focus is building reusable React components, clean layouts,
              reliable API integrations, and interfaces that feel effortless
              for users.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map(([number, title, caption]) => (
              <div key={title} className="bg-surface p-6 rounded-xl border border-outline-variant relative overflow-hidden">
                <div className="w-full h-1 bg-secondary-container absolute top-0 left-0" />
                <div className="font-display text-[2.75rem] font-bold leading-none mb-2">{number}</div>
                <div className="font-title-md">{title}</div>
                <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-1">{caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
