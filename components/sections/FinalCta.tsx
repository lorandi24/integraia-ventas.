import { finalCta } from "@/lib/content";
import { site, WA_DEFAULT } from "@/lib/site";
import { ContactForm } from "../ContactForm";
import { Icon, WhatsAppIcon } from "../Icon";

export function FinalCta() {
  return (
    <section id="contacto" className="section overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-96 w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[120px]"
        aria-hidden="true"
      />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <span className="eyebrow">Sin costo · Sin compromiso</span>
          <h2 className="h2 mt-5">{finalCta.title}</h2>
          <p className="lead mt-5">{finalCta.text}</p>
          <ul className="mt-8 space-y-3 text-left">
            {["Análisis de tus procesos actuales", "3 oportunidades concretas de IA para tu negocio", "Estimación de ahorro en horas y pesos"].map((x) => (
              <li key={x} className="flex gap-3 text-slate-200">
                <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-teal-300" />
                {x}
              </li>
            ))}
          </ul>
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="btn mt-9 bg-[#25D366] text-ink-950 hover:brightness-110"
          >
            <WhatsAppIcon />
            Escríbenos: {site.whatsappDisplay}
          </a>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
