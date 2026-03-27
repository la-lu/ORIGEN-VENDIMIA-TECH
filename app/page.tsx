import { ArchitectureStrip } from "@/components/sections/architecture-strip";
import { Hero } from "@/components/sections/hero";
import { PremiumCard } from "@/components/sections/premium-card";
import { WineCard } from "@/components/sections/wine-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { wines } from "@/data/wines";

export default function HomePage() {
  return (
    <div className="space-y-24">
      <Hero />

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Seleccion curada"
          title="Vinos mendocinos listos para descubrir y comprar"
          description="El MVP mantiene el foco en una sola categoria para que la demo sea solida: catalogo breve, detalle convincente y compra completa sin friccion."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {wines.slice(0, 3).map((wine) => (
            <WineCard key={wine.id} wine={wine} />
          ))}
        </div>
      </section>

      <PremiumCard />
      <ArchitectureStrip />
    </div>
  );
}
