import { testimonials } from "@/lib/content";
import { site } from "@/lib/site";
import { Icon } from "../Icon";
import { SectionHeader } from "../SectionHeader";
import { SmartLink } from "../SmartLink";

/** Testimonios reales en video (sin JS: <video> nativo con preload="none") + escenarios ilustrativos. */
export function Testimonials() {
  const { videos, program } = testimonials;
  return (
    <section id="testimonios" className="section border-y border-white/[0.05] bg-ink-900/50">
      <div className="container-x">
        <SectionHeader eyebrow={testimonials.eyebrow} title={testimonials.title} subtitle={testimonials.subtitle} />

        <div className="mt-14 grid items-center gap-8 lg:grid-cols-[auto_1fr] lg:gap-12">
          <div className={`grid gap-6 ${videos.length > 1 ? "sm:grid-cols-2" : ""}`}>
            {videos.map((v) => (
              <figure key={v.src} className="card mx-auto w-full max-w-sm overflow-hidden p-2">
                <video
                  controls
                  playsInline
                  preload="none"
                  poster={v.poster}
                  width={v.width}
                  height={v.height}
                  className="aspect-[540/602] w-full rounded-xl bg-ink-950 object-cover"
                  aria-label={`Testimonio en video de ${v.name}`}
                >
                  <source src={v.src} type="video/mp4" />
                </video>
                <figcaption className="px-3 pt-4 pb-2">
                  {v.quote && <blockquote className="mb-3 text-sm leading-relaxed text-slate-300">“{v.quote}”</blockquote>}
                  <span className="block text-sm font-semibold text-white">{v.name}</span>
                  <span className="text-xs text-slate-400">{v.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="card relative overflow-hidden p-7 sm:p-9">
            <div
              className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl"
              aria-hidden="true"
            />
            <span className="text-xs font-semibold tracking-wider text-teal-300 uppercase">Programa de formación</span>
            <h3 className="font-display mt-2 text-2xl font-bold text-white sm:text-3xl">“{program.name}”</h3>
            <p className="mt-4 leading-relaxed text-slate-300">{program.text}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {program.facts.map((f) => (
                <li
                  key={f}
                  className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/25 bg-cyan-400/5 px-3 py-1.5 text-sm text-cyan-200"
                >
                  <Icon name="check" className="h-3.5 w-3.5" />
                  {f}
                </li>
              ))}
            </ul>
            <SmartLink href={site.tools.diagnostico} className="btn-primary mt-8">
              Empieza con tu diagnóstico gratuito
              <Icon name="arrow" className="h-5 w-5" />
            </SmartLink>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="font-display text-center text-xl font-semibold text-white sm:text-2xl">
            {testimonials.scenariosTitle}
          </h3>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.scenarios.map((s) => (
              <article key={s.business} className="card p-6">
                <p className="text-sm font-semibold text-cyan-300">{s.business}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-slate-500">{testimonials.scenariosNote}</p>
        </div>
      </div>
    </section>
  );
}
