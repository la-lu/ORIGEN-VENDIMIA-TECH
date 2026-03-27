import { PremiumPackButton } from "@/components/sections/premium-pack-button";
import { premiumPack } from "@/data/wines";
import { ButtonLink } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";

export function PremiumCard() {
  return (
    <section className="rounded-[2rem] border border-gold/30 bg-[linear-gradient(135deg,rgba(232,220,203,0.9),rgba(198,169,106,0.24))] p-7 shadow-soft">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl space-y-4">
          <span className="inline-flex rounded-full bg-gold/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-graphite">
            Capa premium
          </span>
          <div className="space-y-3">
            <h3 className="font-display text-3xl text-graphite md:text-4xl">
              {premiumPack.name}
            </h3>
            <p className="max-w-xl text-base leading-7 text-graphite/75">
              {premiumPack.description} En la narrativa del MVP, esta compra activa una
              reserva digital defendible sobre Rootstock sin prometer renta: acceso,
              prioridad y valor acumulable dentro de ORIGEN.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {premiumPack.perks.map((perk) => (
              <span
                key={perk}
                className="rounded-full border border-burgundy/10 bg-white/70 px-4 py-2 text-sm text-graphite"
              >
                {perk}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-4 rounded-[1.75rem] bg-white/70 p-6 lg:w-[320px]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-olive">Pack especial</p>
            <p className="mt-2 font-display text-4xl text-burgundy">
              {formatPrice(premiumPack.price)}
            </p>
            <p className="mt-2 text-sm text-graphite/70">{premiumPack.bottles} botellas seleccionadas</p>
          </div>
          <div className="flex flex-col gap-3">
            <ButtonLink href="/catalogo?highlight=premium" variant="premium" className="w-full">
              Explorar beneficio premium
            </ButtonLink>
            <PremiumPackButton />
          </div>
        </div>
      </div>
    </section>
  );
}
