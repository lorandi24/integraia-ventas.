"use client";

import { useState } from "react";
import { formatMXN } from "@/lib/format";
import { waLink } from "@/lib/site";
import { Icon, WhatsAppIcon } from "../Icon";

type Need = { id: string; label: string; solution: string; weeks: number; cost: number };

const needs: Need[] = [
  { id: "whatsapp", label: "Responder WhatsApp y redes", solution: "Asistente de IA en WhatsApp que responde, califica y agenda 24/7", weeks: 2, cost: 6500 },
  { id: "cotizaciones", label: "Hacer cotizaciones", solution: "Generador de cotizaciones con tus precios, formato y logotipo", weeks: 2, cost: 4500 },
  { id: "seguimiento", label: "Dar seguimiento a prospectos", solution: "Secuencias automáticas de seguimiento y recordatorios al vendedor", weeks: 1, cost: 3500 },
  { id: "contenido", label: "Crear contenido para redes", solution: "Sistema de creación de contenido con IA y calendario mensual", weeks: 1, cost: 3000 },
  { id: "reportes", label: "Reportes y control del negocio", solution: "Reportes automáticos de ventas y operación cada semana", weeks: 2, cost: 4000 },
  { id: "citas", label: "Agendar y confirmar citas", solution: "Agenda inteligente con confirmación y recordatorios automáticos", weeks: 1, cost: 3500 },
  { id: "documentos", label: "Documentos, correos y captura", solution: "Asistentes para redactar, clasificar documentos y capturar datos", weeks: 2, cost: 4000 },
  { id: "equipo", label: "Capacitar a mi equipo en IA", solution: "Programa de capacitación práctica con casos de tu negocio", weeks: 1, cost: 3900 },
];

const urgencias = ["Este mes", "En 1 a 3 meses", "Solo estoy explorando"];

type Proposal = { empresa: string; giro: string; urgencia: string; items: Need[]; weeks: number; cost: number; paquete: string };

export function ProposalGenerator() {
  const [selected, setSelected] = useState<string[]>(["whatsapp", "cotizaciones"]);
  const [proposal, setProposal] = useState<Proposal | null>(null);

  function toggle(id: string) {
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  }

  function generate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const items = needs.filter((n) => selected.includes(n.id));
    if (!items.length) return;
    const raw = items.reduce((s, n) => s + n.cost, 0);
    // Descuento por volumen: a más soluciones, mejor precio por solución.
    const cost = Math.round((raw * (items.length >= 4 ? 0.85 : items.length >= 2 ? 0.92 : 1)) / 100) * 100;
    const weeks = Math.min(8, Math.max(2, Math.ceil(items.reduce((s, n) => s + n.weeks, 0) * 0.7)));
    const paquete = items.length <= 1 ? "Arranque IA" : items.length <= 4 ? "Impulso IA" : "Socio IA";
    setProposal({ empresa: d.empresa || "Tu empresa", giro: d.giro, urgencia: d.urgencia, items, weeks, cost, paquete });
    requestAnimationFrame(() => document.getElementById("propuesta")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  return (
    <div className="space-y-8">
      <form onSubmit={generate} className="card space-y-6 p-6 sm:p-8 print:hidden">
        <div className="grid gap-4 sm:grid-cols-3">
          <label className="block">
            <span className="mb-1.5 block text-sm text-slate-300">Empresa</span>
            <input name="empresa" required className="input" placeholder="Nombre de tu negocio" />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm text-slate-300">Giro</span>
            <input name="giro" required className="input" placeholder="Ej. ferretería, clínica…" />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm text-slate-300">¿Cuándo quieres empezar?</span>
            <select name="urgencia" className="input" defaultValue={urgencias[0]}>
              {urgencias.map((u) => <option key={u}>{u}</option>)}
            </select>
          </label>
        </div>

        <fieldset>
          <legend className="text-sm text-slate-300">¿Qué quieres resolver con IA? Elige todo lo que aplique.</legend>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {needs.map((n) => {
              const on = selected.includes(n.id);
              return (
                <button
                  key={n.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggle(n.id)}
                  className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition ${
                    on ? "border-cyan-400/60 bg-cyan-400/10 text-white" : "border-white/10 bg-white/[0.02] text-slate-300 hover:border-cyan-400/40"
                  }`}
                >
                  <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-md border ${on ? "border-cyan-300 bg-cyan-400 text-ink-950" : "border-white/20"}`}>
                    {on && <Icon name="check" className="h-3.5 w-3.5" />}
                  </span>
                  {n.label}
                </button>
              );
            })}
          </div>
        </fieldset>

        <button type="submit" disabled={!selected.length} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50">
          Generar mi propuesta <Icon name="arrow" className="h-5 w-5" />
        </button>
      </form>

      {proposal && <ProposalView p={proposal} />}
    </div>
  );
}

function ProposalView({ p }: { p: Proposal }) {
  const fecha = new Date().toLocaleDateString("es-MX", { day: "numeric", month: "long", year: "numeric" });
  const msg = `Hola IntegraIA 👋 Generé una propuesta para ${p.empresa} (${p.giro}).\n\nSoluciones:\n${p.items
    .map((i) => `• ${i.solution}`)
    .join("\n")}\n\nPaquete sugerido: ${p.paquete}\nInversión estimada: ${formatMXN(p.cost)} + IVA\nTiempo: ${p.weeks} semanas\nInicio: ${p.urgencia}\n\nQuiero revisarla con un consultor.`;

  return (
    <article id="propuesta" className="card scroll-mt-24 overflow-hidden print:border-0 print:bg-white print:text-black">
      <header className="border-b border-white/[0.07] bg-gradient-to-r from-cyan-400/10 to-teal-500/5 p-6 sm:p-8">
        <p className="text-xs font-semibold tracking-wider text-cyan-300 uppercase">Propuesta preliminar · {fecha}</p>
        <h2 className="font-display mt-2 text-2xl font-bold text-white sm:text-3xl">Plan de IA para {p.empresa}</h2>
        <p className="mt-1 text-slate-400">Giro: {p.giro} · Inicio deseado: {p.urgencia}</p>
      </header>

      <div className="space-y-8 p-6 sm:p-8">
        <section>
          <h3 className="font-semibold text-white">Soluciones recomendadas</h3>
          <ol className="mt-4 space-y-3">
            {p.items.map((i, idx) => (
              <li key={i.id} className="flex gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-cyan-400/15 font-mono text-xs text-cyan-300">{idx + 1}</span>
                <span>
                  <span className="block text-sm font-medium text-white">{i.solution}</span>
                  <span className="text-xs text-slate-400">Resuelve: {i.label}</span>
                </span>
              </li>
            ))}
          </ol>
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          <Stat label="Paquete sugerido" value={p.paquete} />
          <Stat label="Tiempo de implementación" value={`${p.weeks} semanas`} />
          <Stat label="Inversión estimada" value={`${formatMXN(p.cost)} + IVA`} accent />
        </section>

        <section>
          <h3 className="font-semibold text-white">Siguientes pasos</h3>
          <ol className="mt-3 list-inside list-decimal space-y-1 text-sm text-slate-400">
            <li>Sesión de diagnóstico gratuita (30 min) para validar alcance.</li>
            <li>Propuesta formal con cronograma y entregables.</li>
            <li>Arranque de implementación y capacitación del equipo.</li>
          </ol>
        </section>

        <div className="flex flex-col gap-3 sm:flex-row print:hidden">
          <a href={waLink(msg)} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1">
            <WhatsAppIcon /> Revisar con un consultor
          </a>
          <button type="button" onClick={() => window.print()} className="btn-ghost">
            Guardar como PDF
          </button>
        </div>
        <p className="text-xs text-slate-500">
          Estimación preliminar generada automáticamente. El precio final se confirma tras el diagnóstico.
        </p>
      </div>
    </article>
  );
}

function Stat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
      <p className="text-xs text-slate-400">{label}</p>
      <p className={`font-display mt-1 text-lg font-semibold ${accent ? "text-gradient" : "text-white"}`}>{value}</p>
    </div>
  );
}
