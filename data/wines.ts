import { PremiumPack, Wine } from "@/lib/types";

export const wines: Wine[] = [
  {
    id: "w1",
    slug: "andes-malbec-reserva",
    name: "Andes Malbec Reserva",
    winery: "Bodega Cerro de Luz",
    price: 24500,
    type: "Tinto Reserva",
    variety: "Malbec",
    description:
      "Un Malbec mendocino de perfil elegante, con fruta negra madura, taninos suaves y final persistente. Ideal para quienes quieren llevarse una gran botella sin cargarla durante el viaje.",
    tastingNotes: ["Ciruela madura", "Vainilla suave", "Final redondo"],
    imageAccent: "from-[#5b1822] via-[#8f3343] to-[#d7b6a5]",
    premiumEligible: true,
    reviews: [
      {
        id: "r1",
        author: "Emily T.",
        country: "USA",
        rating: 5,
        comment: "Perfecto para cerrar el viaje. Llego al hotel justo antes del check-out."
      },
      {
        id: "r2",
        author: "Rafael M.",
        country: "Brasil",
        rating: 5,
        comment: "Muy facil de comprar despues de la visita a la bodega. Excelente presentacion."
      },
      {
        id: "r3",
        author: "Catalina R.",
        country: "Chile",
        rating: 4,
        comment: "Buen precio y entrega puntual. Lo volveria a pedir para regalo."
      }
    ]
  },
  {
    id: "w2",
    slug: "valle-blanco-altura",
    name: "Valle Blanco Altura",
    winery: "Finca Altos del Viento",
    price: 19800,
    type: "Blanco fresco",
    variety: "Chardonnay",
    description:
      "Un blanco vibrante de altura con notas citricas y textura cremosa. Pensado para turistas que quieren una compra simple y un recuerdo refinado de Mendoza.",
    tastingNotes: ["Citricos", "Pera", "Mineralidad sutil"],
    imageAccent: "from-[#dcbf83] via-[#f1dfb4] to-[#f7f3ee]",
    reviews: [
      {
        id: "r4",
        author: "Mark S.",
        country: "USA",
        rating: 4,
        comment: "Sorprendentemente fresco y facil de pedir para retirar en aeropuerto."
      },
      {
        id: "r5",
        author: "Bianca F.",
        country: "Brasil",
        rating: 5,
        comment: "La app hizo todo simple. El vino llego impecable."
      }
    ]
  },
  {
    id: "w3",
    slug: "cordillera-cabernet-icono",
    name: "Cordillera Cabernet Icono",
    winery: "Bodega Horizonte",
    price: 28900,
    type: "Tinto intenso",
    variety: "Cabernet Sauvignon",
    description:
      "Estructurado, especiado y con una impronta de montana muy marcada. Una botella para quienes buscan profundidad y una etiqueta con identidad local.",
    tastingNotes: ["Mora", "Pimienta negra", "Cacao"],
    imageAccent: "from-[#2b2a28] via-[#5d3227] to-[#8e6352]",
    reviews: [
      {
        id: "r6",
        author: "Sofia P.",
        country: "Chile",
        rating: 5,
        comment: "Se siente premium, pero la compra fue muy simple."
      },
      {
        id: "r7",
        author: "Jordan L.",
        country: "USA",
        rating: 4,
        comment: "Gran opcion para llevar Mendoza conmigo sin preocuparme por el equipaje."
      }
    ]
  },
  {
    id: "w4",
    slug: "origen-rose-viaje",
    name: "Origen Rose Viaje",
    winery: "Casa del Camino",
    price: 17600,
    type: "Rose delicado",
    variety: "Blend de Malbec y Syrah",
    description:
      "Ligero, expresivo y pensado para momentos relajados. Una etiqueta accesible que suma una propuesta mas fresca al catalogo curado del MVP.",
    tastingNotes: ["Frambuesa", "Flores secas", "Acidez equilibrada"],
    imageAccent: "from-[#b86a74] via-[#e0b4b9] to-[#f6d9d1]",
    reviews: [
      {
        id: "r8",
        author: "Laura B.",
        country: "Brasil",
        rating: 5,
        comment: "Hermoso para regalar. La experiencia se sintio cuidada de punta a punta."
      }
    ]
  },
  {
    id: "w5",
    slug: "gran-reserva-parral",
    name: "Gran Reserva Parral",
    winery: "Vina Los Senderos",
    price: 33200,
    type: "Edicion limitada",
    variety: "Malbec de parcela",
    description:
      "Una etiqueta de produccion corta con mayor complejidad y narrativa premium. Ideal para destacar el concepto de reserva garantizada dentro de ORIGEN.",
    tastingNotes: ["Cassis", "Tabaco", "Final largo"],
    imageAccent: "from-[#50342f] via-[#7f5650] to-[#c6a96a]",
    premiumEligible: true,
    reviews: [
      {
        id: "r9",
        author: "Ben K.",
        country: "USA",
        rating: 5,
        comment: "Se nota curado. Muy buena forma de asegurar una botella especial."
      }
    ]
  },
  {
    id: "w6",
    slug: "espumante-sol-andino",
    name: "Espumante Sol Andino",
    winery: "Bodega Punto Norte",
    price: 21900,
    type: "Espumante brut",
    variety: "Chardonnay - Pinot Noir",
    description:
      "Burbuja fina, perfil festivo y una opcion ideal para un cierre de viaje. Le da variedad al catalogo sin romper el foco del MVP en vino.",
    tastingNotes: ["Manzana verde", "Pan brioche", "Burbuja persistente"],
    imageAccent: "from-[#7a8062] via-[#c0c7ae] to-[#f7f3ee]",
    reviews: [
      {
        id: "r10",
        author: "Fernanda C.",
        country: "Chile",
        rating: 4,
        comment: "Muy buena opcion para retiro en aeropuerto. Se sintio simple y confiable."
      }
    ]
  }
];

export const premiumPack: PremiumPack = {
  id: "p1",
  name: "ORIGEN PASS Reserve x10",
  bottles: 10,
  price: 214000,
  description:
    "Un pack especial de diez botellas seleccionadas que activa una capa premium dentro de ORIGEN para futuras compras y experiencias.",
  perks: [
    "Reserva garantizada de etiquetas limitadas",
    "Prioridad en proximas compras premium",
    "Descuentos acumulables dentro del ecosistema",
    "Invitacion a experiencias exclusivas seleccionadas"
  ]
};

export const airports = [
  "Aeropuerto Internacional El Plumerillo (MDZ)",
  "Aeroparque Jorge Newbery (AEP) - retiro post viaje",
  "Ezeiza (EZE) - retiro coordinado"
];
