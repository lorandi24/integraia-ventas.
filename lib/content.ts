/**
 * Todos los textos de la landing viven aquí para editarlos sin tocar componentes.
 */
import type { IconName } from "@/components/Icon";
import { site } from "./site";

export const nav = [
  { label: "Problema", href: "#problema" },
  { label: "Herramientas", href: "#herramientas" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Paquetes", href: "#paquetes" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: "Consultoría de IA para pymes mexicanas",
  title: ["Tu negocio puede vender más", "y trabajar menos con IA."],
  subtitle:
    "Detectamos dónde tu empresa pierde tiempo y dinero, e implementamos Inteligencia Artificial que responde clientes, cotiza, da seguimiento y ordena tu operación. Sin tecnicismos, con resultados medibles desde el primer mes.",
  primary: "Hacer diagnóstico gratuito",
  secondary: "Calcular mi ahorro",
  trust: ["Diagnóstico sin costo", "Resultados en 30 días", "Hecho en México"],
  stats: [
    { value: "-60%", label: "hasta, en tareas repetitivas" },
    { value: "24/7", label: "atención por WhatsApp" },
    { value: "100%", label: "de prospectos con seguimiento" },
  ],
};

export const problem = {
  eyebrow: "El problema",
  title: "Cada día sin IA, tu pyme está dejando dinero sobre la mesa",
  subtitle:
    "No es falta de esfuerzo. Es que tú y tu equipo hacen a mano lo que hoy una IA bien configurada resuelve en segundos.",
  items: [
    {
      icon: "chat",
      title: "Clientes que no reciben respuesta",
      text: "Mensajes de WhatsApp que se contestan horas después (o nunca). El cliente ya le compró a la competencia.",
    },
    {
      icon: "clock",
      title: "Horas perdidas en lo repetitivo",
      text: "Cotizaciones, reportes, captura de datos y facturas consumen el tiempo que deberías usar para vender.",
    },
    {
      icon: "funnel",
      title: "Prospectos que se enfrían",
      text: "Sin seguimiento sistemático, la mayoría de las oportunidades se pierde por falta de un segundo o tercer contacto.",
    },
    {
      icon: "user",
      title: "Todo depende de ti",
      text: "Si no estás, el negocio se detiene. Sin procesos claros no puedes crecer ni tomar vacaciones.",
    },
  ] satisfies { icon: IconName; title: string; text: string }[],
  highlight: {
    value: "$18,000+",
    text: "pesos al mes puede perder una pyme típica entre horas improductivas y ventas no cerradas.",
  },
};

export const solution = {
  eyebrow: "La solución",
  title: "IntegraIA: tu socio para aplicar IA que sí genera resultados",
  text: "Somos la división de Inteligencia Artificial de EMET. No te vendemos software ni cursos teóricos: diagnosticamos tu negocio, implementamos las herramientas correctas y capacitamos a tu equipo para que las use desde el día uno.",
  points: [
    "Estrategia a la medida de tu giro y tamaño",
    "Implementación llave en mano (WhatsApp, CRM, cotizaciones, contenido)",
    "Capacitación práctica para tu equipo, en español y sin tecnicismos",
    "Métricas claras: sabes cuánto ahorras y cuánto vendes de más",
  ],
};

export const tools = {
  eyebrow: "Herramientas gratuitas",
  title: "Empieza hoy con nuestras 3 herramientas",
  subtitle: "Úsalas sin costo para saber dónde estás, cuánto puedes ganar y qué necesitas.",
  items: [
    {
      icon: "radar",
      tag: "5 minutos",
      title: "Diagnóstico de Madurez en IA",
      text: "Responde 8 preguntas y descubre en qué nivel está tu empresa, qué áreas tienen más potencial y por dónde empezar.",
      cta: "Hacer mi diagnóstico",
      href: site.tools.diagnostico,
    },
    {
      icon: "calculator",
      tag: "Resultados al instante",
      title: "Calculadora de ROI",
      text: "Estima cuántas horas y pesos recuperas al mes automatizando tareas con IA, con base en los números reales de tu negocio.",
      cta: "Calcular mi ROI",
      href: site.tools.roi,
    },
    {
      icon: "document",
      tag: "Personalizada",
      title: "Generador de Propuestas",
      text: "Cuéntanos tu giro y tus retos, y recibe una propuesta de implementación con soluciones, tiempos e inversión estimada.",
      cta: "Generar mi propuesta",
      href: site.tools.propuestas,
    },
  ] satisfies { icon: IconName; tag: string; title: string; text: string; cta: string; href: string }[],
};

export const steps = {
  eyebrow: "Cómo funciona",
  title: "De la idea a resultados en 4 pasos",
  items: [
    { title: "Diagnóstico gratuito", text: "Sesión de 30 minutos para entender tu negocio, tus procesos y tus metas." },
    { title: "Plan de acción", text: "Te entregamos un mapa claro: qué automatizar primero, inversión y retorno esperado." },
    { title: "Implementación", text: "Configuramos e integramos la IA en tus herramientas actuales. Tú sigues operando." },
    { title: "Capacitación y mejora", text: "Entrenamos a tu equipo y medimos resultados para optimizar cada mes." },
  ],
};

export const benefits = {
  eyebrow: "Beneficios",
  title: "Lo que cambia para ti como dueño",
  items: [
    { icon: "bolt", title: "Respuesta inmediata", text: "Tus clientes reciben atención en segundos, a cualquier hora, por WhatsApp y redes." },
    { icon: "trend", title: "Más ventas cerradas", text: "Seguimiento automático a cada prospecto: nadie se queda sin respuesta." },
    { icon: "clock", title: "Recuperas tu tiempo", text: "Hasta 15 horas a la semana libres de tareas operativas para enfocarte en crecer." },
    { icon: "coins", title: "Costos bajo control", text: "Haz más con el mismo equipo, sin contratar personal extra para tareas repetitivas." },
    { icon: "chart", title: "Decisiones con datos", text: "Reportes claros de ventas y operación, generados automáticamente." },
    { icon: "shield", title: "Ventaja competitiva", text: "Adelántate a tu competencia mientras la mayoría de las pymes sigue haciendo todo a mano." },
  ] satisfies { icon: IconName; title: string; text: string }[],
};

export const packages = {
  eyebrow: "Paquetes",
  title: "Elige cómo quieres empezar",
  subtitle: "Precios en pesos mexicanos, más IVA. Sin contratos forzosos.",
  items: [
    {
      name: "Arranque IA",
      price: "$4,900",
      period: "pago único",
      description: "Para saber exactamente qué hacer con IA en tu negocio.",
      features: [
        "Diagnóstico profundo de procesos (2 sesiones)",
        "Hoja de ruta de IA a 90 días",
        "3 automatizaciones rápidas listas para usar",
        "Taller de IA para el dueño (2 h)",
        "Estimación de ahorro y ROI",
      ],
      cta: "Quiero el Arranque",
      featured: false,
    },
    {
      name: "Impulso IA",
      price: "$14,900",
      period: "por proyecto",
      description: "Implementamos la IA que más impacto tiene en tus ventas.",
      features: [
        "Todo lo de Arranque IA",
        "Asistente de IA en WhatsApp para atención y ventas",
        "Automatización de cotizaciones y seguimiento",
        "Integración con tus hojas de cálculo o CRM",
        "Capacitación del equipo (6 h)",
        "30 días de soporte y ajustes",
      ],
      cta: "Quiero el Impulso",
      featured: true,
    },
    {
      name: "Socio IA",
      price: "$8,900",
      period: "al mes",
      description: "Tu área de IA externa, mejorando tu negocio cada mes.",
      features: [
        "Consultor de IA asignado",
        "Nuevas automatizaciones cada mes",
        "Optimización continua y reportes de resultados",
        "Capacitación mensual del equipo",
        "Soporte prioritario por WhatsApp",
      ],
      cta: "Quiero ser Socio",
      featured: false,
    },
  ],
};

export const testimonials = {
  eyebrow: "Resultados",
  title: "Así se ve la IA trabajando en una pyme",
  note: "Escenarios ilustrativos basados en procesos típicos de pymes mexicanas.",
  items: [
    {
      business: "Distribuidora de materiales",
      place: "Mérida, Yuc.",
      quote:
        "Las cotizaciones que tomaban un día ahora salen en 10 minutos. El asistente de WhatsApp atiende fuera de horario y pasa al vendedor sólo los clientes listos para comprar.",
      metric: "+32%",
      metricLabel: "cotizaciones cerradas",
    },
    {
      business: "Clínica dental",
      place: "Guadalajara, Jal.",
      quote:
        "Confirmación de citas y recordatorios automáticos. La recepcionista dejó de pasar la mañana al teléfono y ahora se enfoca en atender a los pacientes en sitio.",
      metric: "-45%",
      metricLabel: "citas no asistidas",
    },
    {
      business: "Despacho contable",
      place: "Monterrey, N.L.",
      quote:
        "La IA clasifica documentos, redacta correos y prepara reportes para clientes. El equipo recuperó más de 12 horas a la semana sin contratar a nadie.",
      metric: "12 h",
      metricLabel: "ahorradas por semana",
    },
  ],
};

export const faq = [
  {
    q: "¿Necesito saber de tecnología para trabajar con ustedes?",
    a: "No. Nosotros nos encargamos de la parte técnica y te explicamos todo en lenguaje claro. Tu equipo recibe capacitación práctica para usar las herramientas desde el primer día.",
  },
  {
    q: "¿Cuánto tiempo tarda en verse un resultado?",
    a: "Las primeras automatizaciones suelen estar funcionando en 2 a 4 semanas. Desde el primer mes puedes medir horas ahorradas y respuesta a clientes.",
  },
  {
    q: "¿Mi información y la de mis clientes está segura?",
    a: "Sí. Trabajamos con plataformas empresariales reconocidas, configuramos permisos y firmamos acuerdo de confidencialidad. Tus datos siguen siendo tuyos.",
  },
  {
    q: "¿Sirve para mi giro?",
    a: "Si tu negocio atiende clientes, cotiza, agenda, vende o genera documentos, la IA te puede ayudar. Hemos diseñado soluciones para comercio, servicios, salud, educación, despachos y manufactura.",
  },
  {
    q: "¿El diagnóstico gratuito me compromete a algo?",
    a: "No. Es una sesión sin costo ni compromiso. Sales con ideas concretas que puedes aplicar aunque decidas no contratarnos.",
  },
  {
    q: "¿Emiten factura?",
    a: "Sí, todos nuestros servicios se facturan. Los precios publicados son más IVA.",
  },
];

export const finalCta = {
  title: "Agenda tu diagnóstico gratuito hoy",
  text: "En 30 minutos te mostramos dónde la IA puede ahorrarte tiempo y dinero. Sin costo, sin compromiso.",
};
