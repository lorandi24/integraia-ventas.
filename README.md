# IntegraIA by EMET — Landing de ventas

Landing page de alta conversión para **IntegraIA by EMET**, consultoría de Inteligencia Artificial para pymes mexicanas.
Incluye 3 herramientas interactivas que funcionan sin backend y convierten a WhatsApp.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4. Todas las páginas se generan como HTML estático.

## Inicio rápido

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev        # http://localhost:3000
```

Producción:

```bash
npm run build && npm start
```

## Estructura

```
app/
  layout.tsx              # Fuentes (next/font), metadatos SEO y Open Graph
  page.tsx                # Landing: monta las secciones y agrega JSON-LD (ProfessionalService + FAQPage)
  diagnostico/            # Herramienta 1: Diagnóstico de Madurez en IA (8 preguntas → nivel + 3 oportunidades)
  calculadora-roi/        # Herramienta 2: Calculadora de ROI (ahorro + ventas extra + recuperación de inversión)
  propuesta/              # Herramienta 3: Generador de Propuestas (plan preliminar, exportable a PDF)
  icon.png, apple-icon.png, sitemap.ts, robots.ts
components/
  sections/               # Hero, Problem, Solution, Tools, HowItWorks, Benefits, Pricing, Testimonials, Faq, FinalCta
  tools/                  # Lógica de las 3 herramientas (componentes cliente)
  Navbar, Footer, ContactForm, WhatsAppFloat, Icon, SmartLink, ToolShell
lib/
  site.ts                 # ⚙️ Número de WhatsApp, URL del sitio, enlaces de herramientas
  content.ts              # ✏️ TODOS los textos: hero, paquetes, precios, FAQ, testimonios…
public/
  logo-integraia.png      # Logo completo con fondo transparente
  logo-emblem.png         # Emblema (lobo) para la barra de navegación
```

## Personalización

| Qué cambiar | Dónde |
|---|---|
| Textos, precios de paquetes, FAQ, testimonios | `lib/content.ts` |
| Mostrar u ocultar precios en todo el sitio | `packages.showPrices` en `lib/content.ts` |
| Videos de testimonios | archivos en `public/testimonios/` + lista `testimonials.videos` en `lib/content.ts` |
| Número de WhatsApp, ciudad, URL | `lib/site.ts` o variables de entorno |
| Colores y tipografía | bloque `@theme` en `app/globals.css` |
| Preguntas del diagnóstico | `components/tools/Diagnostic.tsx` |
| Supuestos de la calculadora (mejora de cierre, inversión de referencia) | constantes al inicio de `components/tools/RoiCalculator.tsx` |
| Soluciones y precios del generador de propuestas | arreglo `needs` en `components/tools/ProposalGenerator.tsx` |

### Variables de entorno (opcionales)

Copia `.env.example` a `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://integraia.mx
NEXT_PUBLIC_WHATSAPP=5219992978891
NEXT_PUBLIC_URL_DIAGNOSTICO=   # si tienes la herramienta en otra URL, los botones apuntarán ahí
NEXT_PUBLIC_URL_ROI=
NEXT_PUBLIC_URL_PROPUESTAS=
```

## Cómo convierte

- **CTA principal** “Hacer diagnóstico gratuito” en hero, navbar y menú móvil → `/diagnostico`.
- Cada herramienta termina con un botón que abre **WhatsApp con el resultado prellenado** (puntaje, ROI o propuesta), así el lead llega ya calificado.
- Los botones de **paquetes** abren WhatsApp indicando el paquete de interés.
- **Formulario final** (nombre, empresa, giro, tamaño, reto) arma el mensaje y abre WhatsApp: no hace falta backend ni base de datos.
- **Botón flotante** de WhatsApp en todas las páginas.

## Rendimiento

- Páginas 100 % estáticas (SSG); sólo Navbar, formulario y herramientas cargan JavaScript en el cliente.
- FAQ con `<details>` nativo (sin JS); iconos SVG inline (sin librerías de iconos).
- Imágenes con `next/image` (AVIF/WebP automáticos) y fuentes con `next/font` (sin bloqueo de renderizado).
- Respeta `prefers-reduced-motion`.

## Despliegue

**Vercel (recomendado):** importa el repositorio en vercel.com, sin configuración adicional. Agrega las variables de entorno si las necesitas.

También funciona en cualquier hosting con Node (`npm run build && npm start`).

## Antes de publicar

- [ ] Confirma que cada alumno que aparece en video autorizó publicar su imagen.
- [ ] Agrega una frase textual de cada video en `quote` (`testimonials.videos`).
- [ ] Define precios y activa `showPrices: true` (o déjalo en `false` para “Precio a la medida”).
- [ ] Configura `NEXT_PUBLIC_SITE_URL` con tu dominio final.
- [ ] (Opcional) Agrega Google Analytics / Meta Pixel en `app/layout.tsx` para medir conversiones.

### Agregar otro video de testimonio

```bash
ffmpeg -i original.mp4 -vf "scale=540:-2" -c:v libx264 -crf 27 -preset slow -c:a aac -b:a 96k -movflags +faststart public/testimonios/nombre.mp4
ffmpeg -ss 5 -i public/testimonios/nombre.mp4 -frames:v 1 public/testimonios/nombre-poster.jpg
```

Después agrega su entrada en `testimonials.videos` (`summary` = resumen sin comillas; `quote` = sólo frases textuales).

### Activar el caso destacado (video de la directora)

1. Guarda el video como `public/testimonios/directora.mp4` y su portada como `public/testimonios/directora-poster.webp`.
2. En `lib/content.ts` → `testimonials.caseStudy`: pon `enabled: true`, ajusta `width`/`height` del video y agrega 2–3 resultados en `results`.
