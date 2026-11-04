import Image from "next/image";
import { solution } from "@/lib/content";
import { Icon } from "../Icon";
import { SectionHeader } from "../SectionHeader";

const layers = [
  { label: "Diagnóstico", detail: "Procesos · datos · metas" },
  { label: "Implementación", detail: "WhatsApp · CRM · documentos" },
  { label: "Capacitación", detail: "Tu equipo usando IA" },
  { label: "Resultados", detail: "Horas y ventas medibles" },
];

export function Solution() {
  return (
    <section className="section overflow-hidden">
      <div
        className="pointer-events-none absolute top-1/2 left-0 h-96 w-96 -translate-y-1/2 rounded-full bg-teal-500/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeader eyebrow={solution.eyebrow} title={solution.title} align="left" />
          <p className="lead mt-5">{solution.text}</p>
          <ul className="mt-8 space-y-4">
            {solution.points.map((p) => (
              <li key={p} className="flex gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-cyan-400/15 text-cyan-300">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                <span className="text-slate-200">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Diagrama de flujo IntegraIA */}
        <div className="card relative p-6 sm:p-8">
          <div className="flex items-center gap-3 border-b border-white/[0.06] pb-5">
            <Image src="/logo-emblem.png" alt="" width={523} height={600} sizes="36px" className="h-9 w-auto" />
            <div>
              <p className="font-display font-semibold text-white">Método IntegraIA</p>
              <p className="text-xs text-slate-400">IA aplicada de punta a punta</p>
            </div>
          </div>
          <ol className="relative mt-6 space-y-5">
            <span
              className="absolute top-3 bottom-3 left-[15px] w-px bg-gradient-to-b from-cyan-400 via-teal-400 to-cyan-400/0"
              aria-hidden="true"
            />
            {layers.map((l, i) => (
              <li key={l.label} className="relative flex items-center gap-4">
                <span className="relative z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-cyan-400/40 bg-ink-900 font-mono text-xs text-cyan-300 shadow-[0_0_14px_-2px_rgba(0,229,255,0.5)]">
                  {i + 1}
                </span>
                <div className="flex-1 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
                  <p className="font-medium text-white">{l.label}</p>
                  <p className="text-xs text-slate-400">{l.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
