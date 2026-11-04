import { nav } from "@/lib/content";
import { site, WA_DEFAULT } from "@/lib/site";
import { Logo } from "./Navbar";

export function Footer() {
  return (
    <footer className="print:hidden border-t border-white/[0.06] bg-ink-950 py-12">
      <div className="container-x flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="text-center md:text-left">
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-slate-500">
            Consultoría de Inteligencia Artificial para pymes. Una división de EMET.
          </p>
        </div>
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          {nav.map((n) => (
            <li key={n.href}>
              <a href={`/${n.href}`} className="text-slate-400 hover:text-cyan-300">{n.label}</a>
            </li>
          ))}
          <li>
            <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-300">
              WhatsApp
            </a>
          </li>
        </ul>
      </div>
      <p className="container-x mt-10 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} {site.name} · {site.city}, México. Todos los derechos reservados.
      </p>
    </footer>
  );
}
