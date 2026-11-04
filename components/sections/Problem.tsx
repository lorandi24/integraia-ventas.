import { problem } from "@/lib/content";
import { Icon } from "../Icon";
import { SectionHeader } from "../SectionHeader";

export function Problem() {
  return (
    <section id="problema" className="section">
      <div className="container-x">
        <SectionHeader eyebrow={problem.eyebrow} title={problem.title} subtitle={problem.subtitle} />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problem.items.map((item) => (
            <article key={item.title} className="card group p-6 transition hover:border-rose-400/25">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-rose-400/10 text-rose-300">
                <Icon name={item.icon} />
              </span>
              <h3 className="mt-5 font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl border border-rose-400/15 bg-rose-500/[0.04] p-6 text-center sm:flex-row sm:gap-6 sm:text-left">
          <span className="font-display text-4xl font-bold text-rose-300">{problem.highlight.value}</span>
          <p className="text-slate-300">{problem.highlight.text}</p>
        </div>
      </div>
    </section>
  );
}
