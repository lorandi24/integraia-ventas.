"use client";

import { useMemo, useState } from "react";
import { waLink } from "@/lib/site";
import { Icon, WhatsAppIcon } from "../Icon";

type Question = { area: string; q: string; options: string[]; tip: string };

const questions: Question[] = [
  {
    area: "Atención a clientes",
    q: "¿Cómo respondes los mensajes de WhatsApp y redes sociales?",
    options: ["Cuando alguien tiene tiempo", "Una persona dedicada en horario laboral", "Respuestas rápidas / plantillas", "Asistente automático 24/7"],
    tip: "Un asistente de IA en WhatsApp responde al instante y califica prospectos aunque sea de madrugada.",
  },
  {
    area: "Ventas",
    q: "¿Cómo das seguimiento a tus prospectos?",
    options: ["De memoria", "En una libreta o Excel", "En un CRM, de forma manual", "Seguimiento automatizado"],
    tip: "Automatiza recordatorios y mensajes de seguimiento para que ningún prospecto se enfríe.",
  },
  {
    area: "Cotizaciones",
    q: "¿Cuánto tardas en enviar una cotización?",
    options: ["Más de un día", "Algunas horas", "Menos de una hora", "Minutos, casi automática"],
    tip: "La IA puede generar cotizaciones con tus precios y formato en minutos.",
  },
  {
    area: "Operación",
    q: "¿Cuántas tareas repetitivas hace tu equipo a mano cada día?",
    options: ["Casi todo es manual", "Muchas", "Algunas", "Muy pocas, está automatizado"],
    tip: "Captura de datos, reportes y correos son los primeros candidatos para automatizar.",
  },
  {
    area: "Datos",
    q: "¿Cómo tomas decisiones sobre tu negocio?",
    options: ["Por intuición", "Reviso ventas de vez en cuando", "Reportes mensuales", "Tableros con datos actualizados"],
    tip: "Reportes automáticos con IA te dan claridad sin pasar horas en hojas de cálculo.",
  },
  {
    area: "Marketing",
    q: "¿Cómo creas el contenido para redes y publicidad?",
    options: ["Casi no publicamos", "Lo hacemos a mano cuando se puede", "Tenemos calendario de contenido", "Usamos IA para crear y programar"],
    tip: "Con IA produces un mes de contenido de calidad en una tarde.",
  },
  {
    area: "Equipo",
    q: "¿Tu equipo usa herramientas de IA (ChatGPT, Claude, Gemini…)?",
    options: ["Nadie", "Alguno, por su cuenta", "Varios, sin lineamientos", "Sí, con procesos y capacitación"],
    tip: "Capacitar al equipo con casos de tu propio negocio multiplica la productividad.",
  },
  {
    area: "Estrategia",
    q: "¿Tienes un plan para adoptar IA en tu empresa?",
    options: ["No lo he pensado", "Me interesa pero no sé por dónde empezar", "Tengo ideas, no un plan", "Tengo un plan con metas"],
    tip: "Una hoja de ruta a 90 días evita gastar en herramientas que no necesitas.",
  },
];

const levels = [
  { min: 0, name: "Inicial", color: "text-rose-300", text: "Tu negocio tiene un enorme potencial sin aprovechar. Con pocas acciones bien elegidas puedes ver resultados en semanas." },
  { min: 7, name: "Explorador", color: "text-amber-300", text: "Ya diste los primeros pasos. El siguiente salto es automatizar los procesos que más tiempo consumen." },
  { min: 13, name: "En desarrollo", color: "text-cyan-300", text: "Vas por buen camino. Integrar tus herramientas con IA te dará una ventaja clara frente a la competencia." },
  { min: 19, name: "Avanzado", color: "text-teal-300", text: "Estás por delante de la mayoría de las pymes. Ahora toca optimizar y escalar lo que ya funciona." },
];

export function Diagnostic() {
  const [answers, setAnswers] = useState<(number | null)[]>(() => questions.map(() => null));
  const [step, setStep] = useState(0);
  const done = step >= questions.length;

  const result = useMemo(() => {
    const score = answers.reduce<number>((s, a) => s + (a ?? 0), 0);
    const level = [...levels].reverse().find((l) => score >= l.min)!;
    const weakest = questions
      .map((q, i) => ({ ...q, value: answers[i] ?? 0 }))
      .sort((a, b) => a.value - b.value)
      .slice(0, 3);
    return { score, pct: Math.round((score / (questions.length * 3)) * 100), level, weakest };
  }, [answers]);

  function choose(i: number) {
    setAnswers((prev) => prev.map((a, idx) => (idx === step ? i : a)));
    setTimeout(() => setStep((s) => s + 1), 180);
  }

  if (done) {
    const msg = `Hola IntegraIA 👋 Hice el Diagnóstico de Madurez en IA.\n\nResultado: ${result.pct}/100 · Nivel ${result.level.name}\nÁreas de oportunidad: ${result.weakest.map((w) => w.area).join(", ")}.\n\nQuiero agendar mi sesión gratuita para revisar mi plan.`;
    return (
      <div className="card p-6 sm:p-10">
        <div className="grid items-center gap-8 sm:grid-cols-[auto_1fr]">
          <div
            className="relative mx-auto grid h-40 w-40 place-items-center rounded-full"
            style={{ background: `conic-gradient(#22d3ee ${result.pct * 3.6}deg, rgba(255,255,255,0.06) 0deg)` }}
          >
            <div className="grid h-32 w-32 place-items-center rounded-full bg-ink-950 text-center">
              <div>
                <p className="font-display text-4xl font-bold text-white">{result.pct}</p>
                <p className="text-xs text-slate-400">de 100</p>
              </div>
            </div>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-sm text-slate-400">Tu nivel de madurez en IA</p>
            <p className={`font-display text-3xl font-bold ${result.level.color}`}>{result.level.name}</p>
            <p className="mt-3 text-slate-300">{result.level.text}</p>
          </div>
        </div>

        <h2 className="font-display mt-10 text-xl font-semibold text-white">Tus 3 mayores oportunidades</h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-3">
          {result.weakest.map((w) => (
            <li key={w.area} className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
              <p className="text-sm font-semibold text-cyan-300">{w.area}</p>
              <p className="mt-2 text-sm text-slate-400">{w.tip}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href={waLink(msg)} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1">
            <WhatsAppIcon /> Recibir mi plan gratuito por WhatsApp
          </a>
          <button
            type="button"
            className="btn-ghost"
            onClick={() => {
              setAnswers(questions.map(() => null));
              setStep(0);
            }}
          >
            Repetir diagnóstico
          </button>
        </div>
      </div>
    );
  }

  const q = questions[step];
  return (
    <div className="card p-6 sm:p-10">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-cyan-300">{q.area}</span>
        <span className="text-slate-400">
          Pregunta {step + 1} de {questions.length}
        </span>
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 transition-all duration-500"
          style={{ width: `${(step / questions.length) * 100}%` }}
        />
      </div>
      <h2 className="font-display mt-8 text-xl font-semibold text-white sm:text-2xl">{q.q}</h2>
      <div className="mt-6 grid gap-3" role="radiogroup" aria-label={q.q}>
        {q.options.map((opt, i) => {
          const selected = answers[step] === i;
          return (
            <button
              key={opt}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => choose(i)}
              className={`flex items-center gap-4 rounded-xl border px-5 py-4 text-left transition ${
                selected
                  ? "border-cyan-400/60 bg-cyan-400/10 text-white"
                  : "border-white/10 bg-white/[0.02] text-slate-300 hover:border-cyan-400/40 hover:bg-white/[0.04]"
              }`}
            >
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-white/15 font-mono text-xs">
                {String.fromCharCode(65 + i)}
              </span>
              {opt}
            </button>
          );
        })}
      </div>
      {step > 0 && (
        <button type="button" onClick={() => setStep((s) => s - 1)} className="mt-6 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white">
          <Icon name="arrow" className="h-4 w-4 rotate-180" /> Anterior
        </button>
      )}
    </div>
  );
}
