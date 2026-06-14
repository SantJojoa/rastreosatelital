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
};

// ─── Planes (iguales para todos los servicios) ────────────────────────────────

export const PLANS: Plan[] = [
  {
    name: "Básico",
    price: "Consultar",
    period: "mes",
    description: "Ideal para flotas pequeñas que inician con rastreo satelital.",
    features: [
      "Rastreo en tiempo real",
      "Historial de recorridos",
      "Alertas de velocidad",
      "App móvil incluida",
      "Soporte por WhatsApp",
    ],
  },
  {
    name: "Empresarial",
    price: "Consultar",
    period: "mes",
    description: "Para operaciones medianas que requieren control avanzado.",
    features: [
      "Todo lo del plan Básico",
      "Módulo de mantenimiento",
      "Módulo preoperacional",
      "Reportes especiales",
      "Geocercas ilimitadas",
      "Soporte prioritario 24/7",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "Consultar",
    period: "mes",
    description: "Solución completa para grandes flotas y operaciones críticas.",
    features: [
      "Todo lo del plan Empresarial",
      "Integración con sistemas propios",
      "Módulo FUEC (transporte especial)",
      "Panel de analíticas avanzadas",
      "Capacitación personalizada",
      "Gerente de cuenta dedicado",
    ],
  },
];

// ─── Servicios ────────────────────────────────────────────────────────────────

export const SERVICES: Service[] = [
  {
    slug: "transporte-de-pasajeros",
    title: "Rastreo Satelital",
    subtitle: "para Transporte de Pasajeros",
    description:
      "Monitoreo en tiempo real para flotas de transporte intermunicipal, urbano y especial. Garantiza la seguridad de tus pasajeros, el cumplimiento de rutas y el control total de tu operación.",
    sections: [
      {
        title: "Contador de Pasajeros",
        items: [
          "Contador de pasajeros",
          "Contabilizador por días",
          "Contabilizador por horas",
          "Contabilizador por km recorridos",
          "Registro de productividad del vehículo por número de pasajeros",
        ],
      },
      {
        title: "Módulo FUEC",
        items: [
          "Generación del FUEC desde la plataforma o en línea",
          "Bloqueo de generación de FUEC por documentación vencida",
          "Descarga de código QR",
        ],
      },
    ],
  },
  {
    slug: "vehiculos-particulares",
    title: "Rastreo Satelital",
    subtitle: "para Vehículos Particulares y Motocicletas",
    description:
      "Protege tu vehículo, moto o bicicleta con rastreo preciso las 24 horas. Recibe alertas al instante ante movimientos no autorizados y recupera tu vehículo rápidamente en caso de robo.",
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
      "Control total de excavadoras, volquetas, retroexcavadoras y equipos pesados. Optimiza el tiempo de uso, previene robos y gestiona el mantenimiento de tu maquinaria desde cualquier lugar.",
    sections: [
      {
        title: "Control Operativo",
        items: [
          "Seguimiento de horas de trabajo por máquina",
          "Geovallas de zona de obra con alertas de salida",
          "Alertas de inactividad prolongada",
          "Reporte de productividad diaria por equipo",
          "Control de operadores por turno",
        ],
      },
      {
        title: "Mantenimiento Preventivo",
        items: [
          "Mantenimiento programado por horas de motor",
          "Alertas de cambio de aceite, filtros y correas",
          "Historial completo de intervenciones por máquina",
          "Reporte de vida útil estimada por componente",
          "Integración con proveedor de mantenimiento",
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
    sections: [
      {
        title: "Control de Ruta y Seguridad",
        items: [
          "Alertas de desvío de ruta autorizada",
          "Control de paradas no autorizadas en ruta",
          "Trazabilidad completa del viaje origen-destino",
          "Bloqueo remoto ante situaciones de riesgo",
          "Comunicación directa con el conductor desde la plataforma",
        ],
      },
      {
        title: "Cumplimiento Normativo",
        items: [
          "Reportes para auditorías de entes reguladores",
          "Registro de cadena de custodia del cargamento",
          "Control de tiempos máximos de conducción",
          "Alertas de vencimiento de documentación del vehículo",
          "Historial de viajes con firma digital del conductor",
        ],
      },
    ],
  },
  {
    slug: "transporte-de-carga",
    title: "Rastreo Satelital",
    subtitle: "para Transporte de Carga",
    description:
      "Optimiza la gestión de tu flota de carga con rutas inteligentes, control de entregas y reportes de eficiencia. Reduce costos operativos y mejora los tiempos de entrega con datos en tiempo real.",
    sections: [
      {
        title: "Gestión de Entregas",
        items: [
          "Seguimiento de entrega en tiempo real para el cliente",
          "Confirmación digital de entrega desde la APP",
          "Alerta al cliente cuando el vehículo está próximo",
          "Reporte de entregas cumplidas vs. programadas",
          "Control de devoluciones y novedades de entrega",
        ],
      },
      {
        title: "Eficiencia de Flota",
        items: [
          "Optimización automática de rutas de reparto",
          "Reporte de consumo de combustible por ruta",
          "Control de peso y capacidad por vehículo",
          "Análisis de comportamiento de conductores",
          "Panel de indicadores KPI de la operación",
        ],
      },
    ],
  },
];
