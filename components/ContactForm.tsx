"use client";

import { useState } from "react";
import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "./Icon";

const giros = ["Comercio / Retail", "Servicios profesionales", "Salud", "Educación", "Restaurantes", "Manufactura", "Inmobiliaria", "Otro"];
const tamanos = ["1 a 5", "6 a 20", "21 a 50", "51 a 200", "Más de 200"];

/** Formulario sin backend: arma un mensaje y abre WhatsApp con los datos del prospecto. */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const msg = [
      "Hola IntegraIA 👋 Quiero agendar mi diagnóstico gratuito.",
      "",
      `• Nombre: ${d.nombre}`,
      `• Empresa: ${d.empresa}`,
      `• Giro: ${d.giro}`,
      `• Colaboradores: ${d.tamano}`,
      d.reto ? `• Principal reto: ${d.reto}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-4 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm text-slate-300">Tu nombre</span>
          <input name="nombre" required autoComplete="name" className="input" placeholder="Ej. Laura Martínez" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm text-slate-300">Empresa</span>
          <input name="empresa" required autoComplete="organization" className="input" placeholder="Nombre de tu negocio" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm text-slate-300">Giro</span>
          <select name="giro" required className="input" defaultValue="">
            <option value="" disabled>Selecciona…</option>
            {giros.map((g) => <option key={g}>{g}</option>)}
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm text-slate-300">Colaboradores</span>
          <select name="tamano" required className="input" defaultValue="">
            <option value="" disabled>Selecciona…</option>
            {tamanos.map((t) => <option key={t}>{t}</option>)}
          </select>
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-sm text-slate-300">¿Qué te quita más tiempo o dinero hoy? (opcional)</span>
        <textarea name="reto" rows={3} className="input resize-none" placeholder="Ej. contestar WhatsApp, hacer cotizaciones, dar seguimiento…" />
      </label>
      <button type="submit" className="btn-primary w-full">
        <WhatsAppIcon />
        Agendar por WhatsApp
      </button>
      <p className="text-center text-xs text-slate-500" aria-live="polite">
        {sent ? "¡Listo! Si WhatsApp no se abrió, escríbenos directo al botón verde." : "Te respondemos en horario laboral en menos de 2 horas."}
      </p>
    </form>
  );
}
