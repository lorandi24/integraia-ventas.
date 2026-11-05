"use client";

import { useState } from "react";
import { formatMXN, formatNum } from "@/lib/format";
import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "../Icon";

type Field = { key: keyof Inputs; label: string; min: number; max: number; step: number; suffix?: string; prefix?: string };
type Inputs = {
  personas: number;
  horas: number;
  costoHora: number;
  automatizable: number;
  prospectos: number;
  ticket: number;
  cierre: number;
  inversion: number;
};

const fields: Field[] = [
  { key: "personas", label: "Personas que hacen tareas repetitivas", min: 1, max: 50, step: 1 },
  { key: "horas", label: "Horas a la semana (por persona) en esas tareas", min: 1, max: 40, step: 1, suffix: "h" },
  { key: "costoHora", label: "Costo por hora de tu equipo", min: 50, max: 1000, step: 10, prefix: "$" },
  { key: "automatizable", label: "Porcentaje que se puede automatizar", min: 10, max: 80, step: 5, suffix: "%" },
  { key: "prospectos", label: "Prospectos o consultas al mes", min: 0, max: 1000, step: 10 },
  { key: "ticket", label: "Venta promedio por cliente", min: 0, max: 100000, step: 500, prefix: "$" },
  { key: "cierre", label: "Tasa de cierre: de cada 100 interesados, ¿cuántos te compran?", min: 1, max: 60, step: 1, suffix: "%" },
  { key: "inversion", label: "Inversión que contemplas en IA", min: 3000, max: 100000, step: 1000, prefix: "$" },
];

/** Mejora relativa conservadora en cierre por respuesta inmediata y seguimiento automático. */
const MEJORA_CIERRE = 0.15;
const SEMANAS_MES = 4.33;

export function RoiCalculator() {
  const [v, setV] = useState<Inputs>({
    personas: 3,
    horas: 10,
    costoHora: 120,
    automatizable: 40,
    prospectos: 120,
    ticket: 3500,
    cierre: 15,
    inversion: 15000,
  });

  const horasMes = v.personas * v.horas * SEMANAS_MES * (v.automatizable / 100);
  const ahorro = horasMes * v.costoHora;
  const ventasExtra = v.prospectos * (v.cierre / 100) * MEJORA_CIERRE * v.ticket;
  const total = ahorro + ventasExtra;
  const recuperacion = total > 0 ? v.inversion / total : Infinity;
  const recuperacionTxt =
    recuperacion < 1 ? `${Math.max(1, Math.round(recuperacion * 30))} días` : Number.isFinite(recuperacion) ? `${recuperacion.toFixed(1)} meses` : "—";

  const msg = `Hola IntegraIA 👋 Usé la Calculadora de ROI.\n\n• Horas recuperables: ${formatNum(horasMes)} h/mes\n• Ahorro operativo: ${formatMXN(ahorro)}/mes\n• Ventas adicionales estimadas: ${formatMXN(ventasExtra)}/mes\n• Beneficio total: ${formatMXN(total)}/mes\n\nQuiero validar estos números en un diagnóstico gratuito.`;

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="card space-y-6 p-6 sm:p-8">
        {fields.map((f) => (
          <label key={f.key} className="block">
            <span className="flex items-center justify-between gap-4 text-sm">
              <span className="text-slate-300">{f.label}</span>
              <span className="font-mono font-semibold text-cyan-300">
                {f.prefix}
                {formatNum(v[f.key])}
                {f.suffix}
              </span>
            </span>
            <input
              type="range"
              min={f.min}
              max={f.max}
              step={f.step}
              value={v[f.key]}
              onChange={(e) => setV((p) => ({ ...p, [f.key]: Number(e.target.value) }))}
              className="mt-3 w-full cursor-pointer accent-cyan-400"
            />
          </label>
        ))}
      </div>

      <div className="flex flex-col gap-4 lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-2xl border border-cyan-400/40 bg-gradient-to-b from-cyan-400/[0.12] to-ink-900 p-6 shadow-[0_0_60px_-20px_rgba(0,229,255,0.6)] sm:p-8">
          <p className="text-sm text-slate-300">Beneficio mensual estimado</p>
          <p className="font-display text-gradient mt-1 text-4xl font-bold sm:text-5xl" aria-live="polite">
            {formatMXN(total)}
          </p>
          <p className="mt-1 text-sm text-slate-400">≈ {formatMXN(total * 12)} al año</p>

          <dl className="mt-6 space-y-3 border-t border-white/10 pt-6 text-sm">
            <Row label="Horas recuperadas" value={`${formatNum(horasMes)} h/mes`} />
            <Row label="Ahorro operativo" value={formatMXN(ahorro)} />
            <Row label="Ventas adicionales" value={formatMXN(ventasExtra)} />
            <Row label="Recuperas la inversión en" value={recuperacionTxt} highlight />
          </dl>
        </div>
        <a href={waLink(msg)} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
          <WhatsAppIcon /> Validar mi ROI gratis
        </a>
        <p className="text-xs leading-relaxed text-slate-500">
          Estimación orientativa con tus propios números. Supone una mejora conservadora de {MEJORA_CIERRE * 100}% en tu tasa de
          cierre gracias a respuesta inmediata y seguimiento automático.
        </p>
      </div>
    </div>
  );
}

function Row({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt className="text-slate-400">{label}</dt>
      <dd className={`font-semibold ${highlight ? "text-teal-300" : "text-white"}`}>{value}</dd>
    </div>
  );
}
