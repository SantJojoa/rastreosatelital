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
    subtitle: "para Transporte de Pasajeros y Servicio Especial - PESV ",
    description:
      "Monitoreo en tiempo real para flotas de transporte intermunicipal, urbano y especial. Garantiza la seguridad de tus pasajeros, el cumplimiento de rutas y el control total de tu operación.",
    image: "/services_images/transporte_pasajeros_image.webp",
    accent: "#0284c7",
    light: "#e0f2fe",
    tag: "FUEC incluido",
    sections: [
      {
        title: "Reportes para el cumplimiento del PESV",
        items: [
          "Preoperacional",
        ],
      },
      {
        title: "FUEC",
        items: [
          "Mantenimientos Preventivos",
          "Promedio de Gasto de Combustible",
        ],
      },
    ],
  },
  {
    slug: "vehiculos-particulares",
    title: "Rastreo Satelital",
    subtitle: "para Motocicletas",
    description:
      "Rastrea y apaga tu motocicleta desde el ceulular, recibe alertas en tiempo real.",
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
    title: "GPS",
    subtitle: "para Maquinaria Amarilla",
    description:
      "Reporte de horas trabajadas, motor encendido, estamos habilitados por Policía Nacional.",
    image: "/references/maquinaria-amarilla.jpeg",
    accent: "#d97706",
    light: "#fef3c7",
    tag: "Sector minero",
    sections: [
      {
        title: "Reportes Especiales",
        items: [
          "Reporte del registro de salida de zona asignada",
          "Reporte de consumo de combustible promediado por horas",
          "Reporte de horas trabajadas",
        ],
      },
      {
        title: "Módulo de Mantenimiento",
        items: [
          "Módulo de mantenimiento por horas de trabajo",
          "Módulo de mantenimiento por fecha",
        ],
      },
    ],
  },
  {
    slug: "transporte-de-hidrocarburos",
    title: "Rastreo Satelital",
    subtitle: "para Transporte de Hidrocarburos",
    description:
      "Monitoreo especializado para cargas peligrosas. Control estricto de rutas, paradas autorizadas y trazabilidad completa del viaje para cumplir con la normatividad del sector hidrocarburífero.",
    image: "/references/hidro-cargapeligrosa.jpeg",
    accent: "#dc2626",
    light: "#fee2e2",
    tag: "Alta seguridad",
    sections: [
      {
        title: "Reportes Especiales",
        items: [
          "Reporte de paradas mayores a las programadas en zonas específicas con alerta a celular en tiempo real",
          "Reporte del registro de salida de la ruta asignada",
          "Reporte de apertura y cierre de manholes con hora y lugar, con alerta a celular",
          "Reporte de consumo de combustible",
          "Reporte de horas trabajadas",
        ],
      },
      {
        title: "Módulo de Mantenimiento",
        items: [
          "Módulo de mantenimiento por km recorridos (cambios de aceite, cadena de distribución, rotación de llantas, etc.)",
          "Módulo de mantenimiento por horas de trabajo",
          "Módulo de mantenimiento por fecha (SOAT, seguro, revisión tecnomecánica, etc.)",
          "Módulo de control de llantas (ubicación y datos de referencia)",
        ],
      },
      {
        title: "Sensores de Tapas",
        items: [
          "Reporte de apertura y cierre de manholes (tapas)",
          "Alerta en tiempo real por email",
          "Reporte de tiempo de duración, fecha y lugar de apertura de tapas",
        ],
      },
    ],
  },
  {
    slug: "transporte-de-carga",
    title: "Rastreo Satelital",
    subtitle: "para Transporte de Carga",
    description:
      "Soluciones especializadas para refrigerados, contenedores y grúas. Monitoreo en tiempo real con sensores de temperatura, candados satelitales y control de planchón desde cualquier lugar.",
    image: "/services_images/transporte_carga_image.webp",
    accent: "#7c3aed",
    light: "#ede9fe",
    tag: "Sensor incluido",
    sections: [
      {
        title: "Reportes para Refrigerados — Sensores de Temperatura",
        items: [
          "Reporte de temperatura en línea a APP y PC",
          "Histórico con diagrama y gráfica de la temperatura durante el viaje",
          "Reporte del registro de salida de zona de trabajo",
        ],
      },
      {
        title: "Reportes para Contenedores — Candados Satelitales",
        items: [
          "Generación del FUEC desde la plataforma o en línea",
          "Descarga de código QR",
          "Bloqueo por documentación vencida",
        ],
      },
      {
        title: "Reportes para Grúas — Sensores de Planchón",
        items: [
          "Reporte de ascenso y descenso de planchón",
          "Alerta en tiempo real por email",
          "Reporte de tiempo de duración, fecha y lugar de planchón arriba",
        ],
      },
    ],
  },
];
