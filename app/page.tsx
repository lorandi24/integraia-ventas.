import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Benefits } from "@/components/sections/Benefits";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Testimonials } from "@/components/sections/Testimonials";
import { Tools } from "@/components/sections/Tools";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { faq } from "@/lib/content";
import { site } from "@/lib/site";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description: site.description,
    url: site.url,
    logo: `${site.url}/logo-integraia.png`,
    telephone: `+${site.whatsapp}`,
    areaServed: "MX",
    address: { "@type": "PostalAddress", addressLocality: "Mérida", addressRegion: "Yucatán", addressCountry: "MX" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Tools />
        <HowItWorks />
        <Benefits />
        <Pricing />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
