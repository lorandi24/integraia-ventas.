/**
 * Configuración central del sitio. Cambia aquí número, URLs y marca.
 */
export const site = {
  name: "IntegraIA by EMET",
  shortName: "IntegraIA",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://integraia.mx",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "5219992978891",
  whatsappDisplay: "+52 999 297 8891",
  city: "Mérida, Yucatán",
  description:
    "Consultoría de Inteligencia Artificial para pymes mexicanas. Automatiza ventas, atención y operación con IA aplicada, medible y sin tecnicismos.",
  tools: {
    diagnostico: process.env.NEXT_PUBLIC_URL_DIAGNOSTICO || "/diagnostico",
    roi: process.env.NEXT_PUBLIC_URL_ROI || "/calculadora-roi",
    propuestas: process.env.NEXT_PUBLIC_URL_PROPUESTAS || "/propuesta",
  },
} as const;

/** Genera un enlace de WhatsApp con mensaje prellenado. */
export function waLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT = waLink(
  "Hola IntegraIA 👋 Quiero agendar mi diagnóstico gratuito de IA para mi negocio."
);

export const isExternal = (href: string) => /^https?:\/\//.test(href);
