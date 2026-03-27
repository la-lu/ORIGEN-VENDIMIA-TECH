import { PremiumCard } from "@/components/sections/premium-card";
import { WineCard } from "@/components/sections/wine-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { wines } from "@/data/wines";

export default async function CatalogPage({
  searchParams
}: {
  searchParams?: Promise<{ highlight?: string }>;
}) {
  const params = await searchParams;
  const highlightPremium = params?.highlight === "premium";

  return (
    <div className="space-y-14">
      <SectionHeading
        eyebrow="Catalogo"
        title="Seleccion curada de vinos mendocinos"
        description="Entre 4 y 8 etiquetas bien presentadas, con nombres, bodegas, tipo y precio. Lo justo para una experiencia de compra clara y elegante."
      />
      {highlightPremium ? <PremiumCard /> : null}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {wines.map((wine) => (
          <WineCard key={wine.id} wine={wine} highlightPremium={highlightPremium} />
        ))}
      </div>
    </div>
  );
}
