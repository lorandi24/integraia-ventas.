import type { Metadata } from "next";
import { ToolShell } from "@/components/ToolShell";
import { ProposalGenerator } from "@/components/tools/ProposalGenerator";

export const metadata: Metadata = {
  title: "Generador de Propuestas de IA",
  description: "Obtén una propuesta preliminar de implementación de IA para tu negocio: soluciones, tiempos e inversión.",
};

export default function Page() {
  return (
    <ToolShell
      eyebrow="Generador de Propuestas"
      title="Tu propuesta de IA en 1 minuto"
      subtitle="Cuéntanos qué quieres resolver y te armamos un plan preliminar con soluciones, tiempos e inversión estimada."
    >
      <ProposalGenerator />
    </ToolShell>
  );
}
