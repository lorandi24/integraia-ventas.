import { steps } from "@/lib/content";
import { SectionHeader } from "../SectionHeader";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="section border-y border-white/[0.05] bg-ink-900/50">
      <div className="container-x">
        <SectionHeader eyebrow={steps.eyebrow} title={steps.title} />

        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          <span
            className="absolute top-6 right-[12.5%] left-[12.5%] hidden h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400/50 to-cyan-400/0 md:block"
            aria-hidden="true"
          />
          {steps.items.map((s, i) => (
            <li key={s.title} className="relative text-center">
              <span className="font-display relative z-10 mx-auto grid h-12 w-12 place-items-center rounded-full border border-cyan-400/40 bg-ink-950 text-lg font-bold text-cyan-300 shadow-[0_0_24px_-4px_rgba(0,229,255,0.55)]">
                {i + 1}
              </span>
              <h3 className="mt-5 font-semibold text-white">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-slate-400">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
