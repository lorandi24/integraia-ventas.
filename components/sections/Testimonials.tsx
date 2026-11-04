import { testimonials } from "@/lib/content";
import { SectionHeader } from "../SectionHeader";

export function Testimonials() {
  return (
    <section className="section border-y border-white/[0.05] bg-ink-900/50">
      <div className="container-x">
        <SectionHeader eyebrow={testimonials.eyebrow} title={testimonials.title} />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.items.map((t) => (
            <figure key={t.business} className="card flex flex-col p-7">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-gradient text-4xl font-bold">{t.metric}</span>
                <span className="text-sm text-slate-400">{t.metricLabel}</span>
              </div>
              <blockquote className="mt-5 flex-1 leading-relaxed text-slate-300">“{t.quote}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                <span className="font-display grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-cyan-400/30 to-teal-500/20 text-sm font-bold text-white">
                  {t.business.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">{t.business}</span>
                  <span className="text-xs text-slate-400">{t.place}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-slate-500">{testimonials.note}</p>
      </div>
    </section>
  );
}
