import type { Metadata } from "next";
import { ToolShell } from "@/components/ToolShell";
import { RoiCalculator } from "@/components/tools/RoiCalculator";

export const metadata: Metadata = {
  title: "Calculadora de ROI de Inteligencia Artificial",
  description: "Calcula cuántas horas y pesos puede ahorrar tu pyme al mes automatizando tareas con IA.",
};

export default function Page() {
  return (
    <ToolShell
      eyebrow="Calculadora de ROI"
      title="¿Cuánto puedes ganar con IA?"
      subtitle="Mueve los controles con los números de tu negocio y mira al instante el ahorro y las ventas adicionales que puedes obtener."
    >
      <RoiCalculator />
    </ToolShell>
  );
}
