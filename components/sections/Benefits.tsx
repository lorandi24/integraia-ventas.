import { benefits } from "@/lib/content";
import { Icon } from "../Icon";
import { SectionHeader } from "../SectionHeader";

export function Benefits() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeader eyebrow={benefits.eyebrow} title={benefits.title} />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-3">
          {benefits.items.map((b) => (
            <article key={b.title} className="bg-ink-950 p-7 transition hover:bg-ink-900">
              <span className="text-teal-300">
                <Icon name={b.icon} className="h-7 w-7" />
              </span>
              <h3 className="mt-4 font-semibold text-white">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{b.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
