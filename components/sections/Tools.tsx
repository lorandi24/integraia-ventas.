import { tools } from "@/lib/content";
import { Icon } from "../Icon";
import { SectionHeader } from "../SectionHeader";
import { SmartLink } from "../SmartLink";

export function Tools() {
  return (
    <section id="herramientas" className="section">
      <div className="container-x">
        <SectionHeader eyebrow={tools.eyebrow} title={tools.title} subtitle={tools.subtitle} />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tools.items.map((t, i) => (
            <article
              key={t.title}
              className="card group relative flex flex-col overflow-hidden p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <div
                className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-cyan-400/10 opacity-0 blur-3xl transition group-hover:opacity-100"
                aria-hidden="true"
              />
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-teal-500/10 text-cyan-300 ring-1 ring-cyan-400/25">
                  <Icon name={t.icon} />
                </span>
                <span className="font-mono text-xs text-slate-500">0{i + 1}</span>
              </div>
              <span className="mt-6 text-xs font-semibold tracking-wider text-teal-300 uppercase">{t.tag}</span>
              <h3 className="font-display mt-2 text-xl font-semibold text-white">{t.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{t.text}</p>
              <SmartLink href={t.href} className="btn-ghost mt-7 w-full group-hover:border-cyan-400/50">
                {t.cta}
                <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
              </SmartLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
