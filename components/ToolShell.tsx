import Link from "next/link";
import { Footer } from "./Footer";
import { Icon } from "./Icon";
import { Navbar } from "./Navbar";
import { WhatsAppFloat } from "./WhatsAppFloat";

/** Plantilla común para las páginas de herramientas. */
export function ToolShell({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden pt-28 pb-24 sm:pt-32">
        <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[600px]" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[120px]"
          aria-hidden="true"
        />
        <div className="container-x relative max-w-4xl">
          <Link href="/#herramientas" className="print:hidden inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-300">
            <Icon name="arrow" className="h-4 w-4 rotate-180" /> Volver a herramientas
          </Link>
          <div className="mt-6 text-center print:hidden">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="font-display mt-5 text-3xl font-bold tracking-tight text-balance text-white sm:text-5xl">{title}</h1>
            <p className="lead mx-auto mt-4 max-w-2xl">{subtitle}</p>
          </div>
          <div className="mt-12">{children}</div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
