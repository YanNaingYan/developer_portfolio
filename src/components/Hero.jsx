import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container/10 border border-secondary-container/20">
            <span className="w-2 h-2 rounded-full bg-secondary-container animate-ping" />
            <span className="font-label-caps text-label-caps text-secondary-container uppercase">
              Frontend Developer • Available for hire
            </span>
          </div>

          <h1 className="font-display text-display tracking-tight">
            Building Digital Experiences That Feel{" "}
            <span className="text-secondary-container underline decoration-secondary-container/30 underline-offset-8">
              Simple.
            </span>
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            I'm a frontend developer focused on building clean, responsive,
            and user-friendly web applications with modern technologies.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-secondary-container text-white font-semibold hover:-translate-y-0.5 transition-all">
              View My Work
              <span className="material-symbols-outlined">arrow_downward</span>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-outline-variant font-semibold hover:bg-surface-container-low transition-all">
              Let's Talk
              <span className="material-symbols-outlined text-secondary-container">chat_bubble</span>
            </a>
          </div>

          <div className="flex items-center gap-2 pt-4 text-on-surface-variant flex-wrap">
            <span className="font-label-caps text-label-caps uppercase">Primary Stack</span>
            <span className="h-3 w-px bg-outline-variant" />
            {["React", "TypeScript", "Tailwind CSS", "JavaScript"].map((tech) => (
              <span key={tech} className="font-label-code text-label-code px-2 py-1 rounded-md bg-white border border-outline-variant/80">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-secondary-container/10 rounded-full blur-3xl" />
          <div className="relative bg-primary-container text-white rounded-2xl shadow-2xl border border-outline/20 overflow-hidden">
            <div className="bg-primary-container/90 px-4 py-3 border-b border-outline/20 flex justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-secondary-container" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="ml-3 font-label-code text-label-code text-on-primary-container">
                  FrontendEngineer.jsx
                </span>
              </div>
            </div>

            <div className="p-5 font-label-code text-label-code text-sm leading-relaxed overflow-x-auto">
              <pre className="whitespace-pre-wrap">{`export const FrontendEngineer = {
  name: "${profile.name}",
  mission: "Clean & scalable UI",
  stack: ["React", "TypeScript"],
  responsive: true,
  accessibility: "First-class",
};`}</pre>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-outline-variant shadow-xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <span className="material-symbols-outlined">speed</span>
            </div>
            <div>
              <div className="font-title-md">Fast UI</div>
              <div className="font-label-caps text-label-caps text-on-surface-variant uppercase">Performance Focus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
