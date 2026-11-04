"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";
import { site } from "@/lib/site";
import { Icon } from "./Icon";
import { SmartLink } from "./SmartLink";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label={`${site.name} – inicio`}>
      <Image
        src="/logo-emblem.png"
        alt=""
        width={523}
        height={600}
        priority
        sizes="40px"
        className="h-10 w-auto drop-shadow-[0_0_10px_rgba(0,229,255,0.35)] transition group-hover:drop-shadow-[0_0_16px_rgba(0,229,255,0.6)]"
      />
      <span className="leading-none">
        <span className="font-display text-lg font-bold tracking-tight text-white">
          Integra<span className="text-cyan-300">IA</span>
        </span>
        {!compact && (
          <span className="block text-[10px] font-medium tracking-[0.25em] text-slate-400 uppercase">
            by EMET
          </span>
        )}
      </span>
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors print:hidden duration-300 ${
        scrolled || open ? "border-b border-white/[0.06] bg-ink-950/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between sm:h-18">
        <Logo />

        <ul className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={`/${item.href}`} className="text-sm text-slate-300 transition hover:text-cyan-300">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <SmartLink href={site.tools.diagnostico} className="btn-primary hidden !px-5 !py-2.5 !text-sm sm:inline-flex">
            Diagnóstico gratis
          </SmartLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-2 text-white lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </nav>

      {open && (
        <div id="menu-movil" className="container-x pb-6 lg:hidden">
          <ul className="flex flex-col gap-1 border-t border-white/[0.06] pt-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={`/${item.href}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base text-slate-200 hover:bg-white/5"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <SmartLink href={site.tools.diagnostico} onClick={() => setOpen(false)} className="btn-primary mt-4 w-full">
            Hacer diagnóstico gratuito
          </SmartLink>
        </div>
      )}
    </header>
  );
}
