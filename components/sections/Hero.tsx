import Image from "next/image";
import { hero } from "@/lib/content";
import { site } from "@/lib/site";
import { Icon } from "../Icon";
import { SmartLink } from "../SmartLink";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Fondo: retícula + halos */}
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-teal-500/10 blur-[100px]"
        aria-hidden="true"
      />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="text-center lg:text-left">
          <span className="eyebrow">
            <Icon name="spark" className="h-3.5 w-3.5" />
            {hero.eyebrow}
          </span>

          <h1 className="font-display mt-6 text-4xl leading-[1.05] font-bold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
            {hero.title[0]} <span className="text-gradient">{hero.title[1]}</span>
          </h1>

          <p className="lead mx-auto mt-6 max-w-xl lg:mx-0">{hero.subtitle}</p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <SmartLink href={site.tools.diagnostico} className="btn-primary">
              {hero.primary}
              <Icon name="arrow" className="h-5 w-5" />
            </SmartLink>
            <SmartLink href={site.tools.roi} className="btn-ghost">
              {hero.secondary}
            </SmartLink>
          </div>

          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-400 lg:justify-start">
            {hero.trust.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-teal-300" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Logo con anillos de energía */}
        <div className="relative mx-auto w-full max-w-[480px] px-6 sm:px-14">
          <div className="absolute inset-[8%] rounded-full border border-cyan-400/20" aria-hidden="true" />
          <div className="absolute inset-[-2%] rounded-full border border-dashed border-teal-400/15" aria-hidden="true" />
          <div
            className="absolute inset-[18%] rounded-full bg-gradient-to-br from-cyan-400/25 to-teal-500/10 blur-3xl"
            aria-hidden="true"
          />
          <Image
            src="/logo-integraia.png"
            alt="Logotipo de IntegraIA by EMET"
            width={720}
            height={762}
            priority
            sizes="(min-width: 1024px) 400px, 80vw"
            className="animate-float relative z-10 mx-auto w-full will-change-transform"
          />

          <div className="card absolute top-[4%] -left-8 z-20 bg-ink-900/90 hidden items-center gap-3 px-4 py-3 shadow-xl sm:flex">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-teal-400/15 text-teal-300">
              <Icon name="chat" className="h-5 w-5" />
            </span>
            <span className="text-xs leading-tight">
              <span className="block font-semibold text-white">Cliente respondido</span>
              <span className="text-slate-400">en 4 segundos · 11:48 p.m.</span>
            </span>
          </div>
          <div className="card absolute top-[46%] -right-6 z-20 bg-ink-900/90 hidden items-center gap-3 px-4 py-3 shadow-xl sm:flex">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-cyan-400/15 text-cyan-300">
              <Icon name="document" className="h-5 w-5" />
            </span>
            <span className="text-xs leading-tight">
              <span className="block font-semibold text-white">Cotización enviada</span>
              <span className="text-slate-400">generada con IA · $38,450</span>
            </span>
          </div>
        </div>
      </div>

      <div className="container-x relative mt-16">
        <dl className="card grid grid-cols-3 divide-x divide-white/[0.07] py-6">
          {hero.stats.map((s) => (
            <div key={s.label} className="px-3 text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-2xl font-bold text-white sm:text-4xl">{s.value}</dd>
              <dd className="mt-1 text-xs text-slate-400 sm:text-sm">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
