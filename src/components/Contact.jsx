import { useState } from "react";
import { profile } from "../data/portfolio";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const submit = (event) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div>
            <span className="font-label-caps text-label-caps text-secondary-container uppercase">06 / CONTACT</span>
            <h2 className="font-headline-lg text-headline-lg mt-2">Have a Project in Mind?</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-3">
              Let's build something clean, useful, and memorable together.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-outline-variant flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <span className="material-symbols-outlined text-secondary-container">alternate_email</span>
              <div className="min-w-0">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase block">Email Address</span>
                <span className="font-label-code text-label-code font-semibold truncate block">{profile.email}</span>
              </div>
            </div>
            <button type="button" onClick={copyEmail} className="px-4 py-1.5 rounded-lg bg-surface-container font-label-code text-label-code shrink-0">
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          <div>
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Network Links</span>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href={profile.github} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-lg bg-white border border-outline-variant hover:border-secondary-container">GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-lg bg-white border border-outline-variant hover:border-secondary-container">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white p-6 lg:p-10 rounded-2xl border border-outline-variant shadow-sm">
          <form onSubmit={submit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Your Name</span>
                <input required type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-xl bg-surface border border-outline-variant focus:border-secondary-container focus:ring-2 focus:ring-secondary-container/20 focus:outline-none" />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Your Email</span>
                <input required type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl bg-surface border border-outline-variant focus:border-secondary-container focus:ring-2 focus:ring-secondary-container/20 focus:outline-none" />
              </label>
            </div>

            <label className="flex flex-col gap-1.5">
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Subject</span>
              <input required type="text" placeholder="Project inquiry" className="w-full px-4 py-3 rounded-xl bg-surface border border-outline-variant focus:border-secondary-container focus:ring-2 focus:ring-secondary-container/20 focus:outline-none" />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Message</span>
              <textarea required rows="5" placeholder="Tell me about your project..." className="w-full px-4 py-3 rounded-xl bg-surface border border-outline-variant focus:border-secondary-container focus:ring-2 focus:ring-secondary-container/20 focus:outline-none" />
            </label>

            <button type="submit" className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-secondary-container text-white font-semibold hover:bg-secondary transition-all">
              Send Message
              <span className="material-symbols-outlined">send</span>
            </button>

            {sent && (
              <div className="p-3.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 font-label-code text-label-code text-center">
                ✓ Message submitted successfully. Connect this form to your email/API when ready.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
