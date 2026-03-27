const layers = [
  {
    name: "Stellar",
    title: "Pago simple para turistas",
    description: "Se implementa como checkout simulado con una abstraccion clara de pago internacional."
  },
  {
    name: "BNB Chain",
    title: "Recomendaciones inteligentes",
    description: "Se muestra como capa futura de concierge y sugerencias personalizadas."
  },
  {
    name: "Hedera",
    title: "Resenas verificables",
    description: "Se representa en la narrativa de reputacion y trazabilidad futura."
  },
  {
    name: "Rootstock",
    title: "Beneficios premium tokenizables",
    description: "Se aterriza visualmente en ORIGEN PASS Reserve x10."
  },
  {
    name: "Beexo Connect",
    title: "Wallet onboarding sin friccion",
    description: "Se deja como proximo paso sin forzar complejidad en el MVP."
  }
];

export function ArchitectureStrip() {
  return (
    <section className="space-y-5">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-olive">
          Arquitectura defendible
        </p>
        <h3 className="mt-3 font-display text-3xl text-graphite">
          Modular para pitch, simple para hackathon
        </h3>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {layers.map((layer) => (
          <article
            key={layer.name}
            className="rounded-[1.5rem] border border-burgundy/10 bg-white/70 p-5"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-burgundy">
              {layer.name}
            </p>
            <h4 className="mt-3 text-lg font-semibold text-graphite">{layer.title}</h4>
            <p className="mt-3 text-sm leading-6 text-graphite/70">{layer.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
