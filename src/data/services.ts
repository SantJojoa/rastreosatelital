export type ServiceSection = {
  title: string;
  items: string[];
};

export type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export type SubService = {
  title: string;
  items: string[];
};

export type Service = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  headline?: string;
  intro?: string;
  closing?: string;
  subServices?: SubService[];
  sections: ServiceSection[];
  image: string;
  accent: string;
  light: string;
  tag: string;
};

// ─── Planes (iguales para todos los servicios) ────────────────────────────────

export const PLANS: Plan[] = [
  {
    name: "Básico",
    price: "Consultar",
    period: "mes",
    description: "Protección esencial para cualquier vehículo.",
    features: [
      "Botón de pánico",
      "Ubicación en tiempo real",
      "Histórico de viajes desde la APP",
      "Cobertura internacional",
      "Línea de atención para emergencias 24/7",
      "App para Android / iOS",
      "Multiusuarios para ingreso a la plataforma",
    ],
  },
  {
    name: "Administrativo",
    price: "Consultar",
    period: "mes",
    description: "Control total de flota con funciones avanzadas de gestión.",
    features: [
      "Todo lo del plan Básico",
      "Personalización de mapas",
      "Creación de geocercas y rutas",
      "Apagado del vehículo desde APP y PC",
      "Histórico de viajes en APP y PC",
      "Apertura remota del bloqueo de puertas desde APP o PC",
      "Alerta por exceso de velocidad en tiempo real",
    ],
    highlighted: true,
  },
  {
    name: "Extra",
    price: "Consultar",
    period: "mes",
    description: "Todo lo anterior más vigilancia de audio de alta sensibilidad.",
    features: [
      "Todo lo del plan Administrativo",
      "Micrófono oculto de alta sensibilidad",
    ],
  },
];

// ─── Servicios ────────────────────────────────────────────────────────────────

export const SERVICES: Service[] = [
  {
    slug: "transporte-de-pasajeros",
    title: "Rastreo Satelital",
    subtitle: "para Transporte de Pasajeros",
    headline: "Control y seguimiento de su flota en tiempo real",
    description:
      "Monitoree sus vehículos de transporte de pasajeros desde una plataforma web y APP, con información sobre ubicación, recorridos, velocidades, tiempos de operación y novedades.",
    intro:
      "Nuestra solución permite fortalecer el control de la operación, mejorar la trazabilidad de los vehículos y disponer de información para la gestión diaria de la flota.",
    closing: "Controle su flota. Conozca su operación.",
    image: "/services_images/transporte_pasajeros_image.webp",
    accent: "#0284c7",
    light: "#e0f2fe",
    tag: "FUEC incluido",
    sections: [
      {
        title: "Rastreo y control de la operación",
        items: [
          "Rastreo GPS en tiempo real 24/7",
          "Seguimiento de recorridos y rutas",
          "Control de velocidad",
          "Control de rutas y desvíos",
          "Historial de recorridos",
        ],
      },
      {
        title: "Alertas y seguridad",
        items: [
          "Geocercas y puntos de control",
          "Alertas y novedades de operación",
          "Botón de pánico y protocolo de emergencia",
        ],
      },
      {
        title: "Reportes, plataforma y cumplimiento",
        items: [
          "Reportes de distancia y tiempos de operación",
          "Reportes para seguimiento de la operación",
          "Aplicación móvil y plataforma web",
          "FUEC incluido",
        ],
      },
    ],
  },
  {
    slug: "vehiculos-particulares",
    title: "Rastreo Satelital",
    subtitle: "para Motocicletas",
    description:
      "Rastree y apague su motocicleta desde el celular, reciba alertas en tiempo real.",
    image: "/services_images/moto_image.webp",
    accent: "#0059a6",
    light: "#e8f0fb",
    tag: "Más popular",
    subServices: [
      {
        title: "Rastreo satelital para vehículos particulares",
        items: [
          "Reporte de consumo de combustible",
          "Reporte de horas trabajadas",
          "Reporte del registro de salida de zona de trabajo",
        ],
      },
      {
        title: "Rastreo satelital para motocicleta",
        items: [
          "Reporte de consumo de combustible",
          "Reporte de horas de motor encendido",
          "Reporte del registro de salida de zona de trabajo",
        ],
      },
      {
        title: "Rastreo satelital para bicicleta",
        items: [
          "GPS camuflado",
          "Batería recargable",
          "Ubicación satelital",
          "Cobertura internacional",
        ],
      },
    ],
    sections: [],
  },
  {
    slug: "maquinaria-amarilla",
    title: "Rastreo Satelital",
    subtitle: "para Maquinaria Amarilla",
    description:
      "Controle dónde está su maquinaria y cuánto tiempo está trabajando.",
    image: "/references/maquinaria-amarilla.jpeg",
    accent: "#d97706",
    light: "#fef3c7",
    tag: "Sector minero",
    sections: [
      {
        title: "Ubicación y zonas de trabajo",
        items: [
          "Historial de recorridos",
          "Control de zonas de trabajo",
          "Geocercas",
          "Alertas de movimiento",
        ],
      },
      {
        title: "Tiempos de operación",
        items: [
          "Reporte de horas trabajadas",
          "Control de tiempos de operación",
          "Control de horarios de operación",
        ],
      },
    ],
  },
  {
    slug: "transporte-de-hidrocarburos",
    title: "Rastreo Satelital",
    subtitle: "para Transporte de Hidrocarburos",
    headline: "Seguridad y trazabilidad",
    description:
      "Control de las operaciones mediante información de ubicación, recorridos, rutas, tiempos logísticos y eventos de operación.",
    image: "/references/hidro-cargapeligrosa.jpeg",
    accent: "#dc2626",
    light: "#fee2e2",
    tag: "Alta seguridad",
    sections: [
      {
        title: "Rastreo y control de la operación",
        items: [
          "Rastreo GPS 24/7",
          "Geocercas y puntos de control",
          "Control de tiempos detenidos y en marcha",
          "Gestión RNDC y tiempos logísticos",
        ],
      },
      {
        title: "Alertas y seguridad",
        items: [
          "Excesos de velocidad",
          "Alertas de operación",
          "Movimientos en horarios no autorizados",
          "Desconexión de batería",
          "Botón de pánico y protocolo de emergencia",
          "Control de fuga de combustible, mediante la solución y sensores",
        ],
      },
    ],
  },
  {
    slug: "transporte-de-carga",
    title: "Rastreo Satelital",
    subtitle: "para Transporte de Carga",
    headline: "GPS - Cumplimiento PESV",
    description:
      "Solución para empresas logísticas de transporte, que relaciona tiempos logísticos, manifiestos, remesas y RNDC.",
    image: "/services_images/transporte_carga_image.webp",
    accent: "#7c3aed",
    light: "#ede9fe",
    tag: "Integración RNDC",
    sections: [
      {
        title: "Rastreo y rutas",
        items: [
          "Seguimiento de vehículos y recorridos",
          "Control de rutas y desvíos",
          "Geocercas y puntos de control",
          "Alertas de operación",
        ],
      },
      {
        title: "RNDC y tiempos logísticos",
        items: [
          "Control de tiempos logísticos RNDC",
          "Integración con procesos asociados al RNDC, según la operación",
        ],
      },
      {
        title: "Reportes y plataforma",
        items: [
          "Reportes de distancia recorrida",
          "Reportes de tiempos detenidos y en marcha",
          "Reportes automatizados",
          "Plataforma web y APP",
        ],
      },
    ],
  },
];
