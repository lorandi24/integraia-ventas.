import { faq } from "@/lib/content";
import { Icon } from "../Icon";
import { SectionHeader } from "../SectionHeader";

/** FAQ con <details> nativo: accesible y sin JavaScript en cliente. */
export function Faq() {
  return (
    <section id="faq" className="section">
      <div className="container-x max-w-3xl">
        <SectionHeader eyebrow="Preguntas frecuentes" title="Resolvemos tus dudas" />
        <div className="mt-12 space-y-3">
          {faq.map((item, i) => (
            <details key={item.q} className="card group px-6 py-1 open:border-cyan-400/25" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-medium text-white [&::-webkit-details-marker]:hidden">
                {item.q}
                <Icon
                  name="plus"
                  className="h-5 w-5 shrink-0 text-cyan-300 transition-transform duration-200 group-open:rotate-45"
                />
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-slate-400">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
