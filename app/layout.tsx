import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "IntegraIA by EMET | Consultoría de Inteligencia Artificial para pymes en México",
    template: "%s | IntegraIA by EMET",
  },
  description: site.description,
  keywords: [
    "inteligencia artificial para pymes",
    "consultoría IA México",
    "automatización WhatsApp",
    "IA para negocios",
    "IntegraIA",
    "EMET",
  ],
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: site.name,
    title: "IntegraIA by EMET | IA que hace crecer tu pyme",
    description: site.description,
    images: [{ url: "/logo-integraia.png", width: 720, height: 762, alt: "IntegraIA" }],
  },
  twitter: { card: "summary", title: "IntegraIA by EMET", description: site.description },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#030814" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${inter.variable} ${grotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
