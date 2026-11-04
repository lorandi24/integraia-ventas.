import type { Metadata } from "next";
import { ToolShell } from "@/components/ToolShell";
import { Diagnostic } from "@/components/tools/Diagnostic";

export const metadata: Metadata = {
  title: "Diagnóstico de Madurez en IA gratuito",
  description: "Descubre en 5 minutos qué tan preparada está tu pyme para la Inteligencia Artificial y por dónde empezar.",
};

export default function Page() {
  return (
    <ToolShell
      eyebrow="Diagnóstico gratuito · 5 minutos"
      title="Diagnóstico de Madurez en IA"
      subtitle="Responde 8 preguntas rápidas sobre tu negocio y recibe tu nivel de madurez con las 3 oportunidades más rentables para empezar."
    >
      <Diagnostic />
    </ToolShell>
  );
}
