import { packages } from "@/lib/content";
import { waLink } from "@/lib/site";
import { Icon } from "../Icon";
import { SectionHeader } from "../SectionHeader";

export function Pricing() {
  return (
    <section id="paquetes" className="section overflow-x-clip">
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 h-96 w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="container-x relative">
        <SectionHeader eyebrow={packages.eyebrow} title={packages.title} subtitle={packages.subtitle} />

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {packages.items.map((p) => (
            <article
              key={p.name}
              className={`relative flex flex-col rounded-2xl p-7 sm:p-8 ${
                p.featured
                  ? "border border-cyan-400/50 bg-gradient-to-b from-cyan-400/[0.12] to-ink-900 shadow-[0_0_60px_-20px_rgba(0,229,255,0.6)] lg:-my-4 lg:py-12"
                  : "card"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 px-4 py-1 text-xs font-bold text-ink-950">
                  MÁS ELEGIDO
                </span>
              )}
              <h3 className="font-display text-xl font-semibold text-white">{p.name}</h3>
              <p className="mt-2 text-sm text-slate-400">{p.description}</p>
              <p className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold text-white">{p.price}</span>
                <span className="text-sm text-slate-400">MXN {p.period}</span>
              </p>
              <ul className="mt-7 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-slate-300">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={waLink(`Hola IntegraIA 👋 Me interesa el paquete "${p.name}". ¿Me pueden dar más información?`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`${p.featured ? "btn-primary" : "btn-ghost"} mt-8 w-full`}
              >
                {p.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
