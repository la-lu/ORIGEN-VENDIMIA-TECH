import { ButtonLink } from "@/components/ui/button";
import { WineIllustration } from "@/components/ui/wine-illustration";

export function Hero() {
  return (
    <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div className="space-y-7">
        <span className="inline-flex rounded-full border border-burgundy/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-olive">
          Turismo premium accesible
        </span>
        <div className="space-y-5">
          <h1 className="font-display text-5xl leading-none text-graphite md:text-7xl">
            Descubri y recibi vinos regionales sin complicaciones durante tu viaje.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-graphite/75">
            ORIGEN convierte la intencion de compra del turista en una experiencia simple,
            confiable y elegante. Explora vinos mendocinos, compralos en minutos y elegi
            recibirlos en tu hotel o retirarlos en aeropuerto.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/catalogo">Explorar vinos</ButtonLink>
          <ButtonLink href="/checkout" variant="secondary">
            Ver flujo de compra
          </ButtonLink>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-[1.5rem] bg-white/70 p-4">
            <p className="text-2xl font-semibold text-burgundy">6</p>
            <p className="mt-2 text-sm text-graphite/70">Vinos curados para una demo clara y creible</p>
          </div>
          <div className="rounded-[1.5rem] bg-white/70 p-4">
            <p className="text-2xl font-semibold text-burgundy">2</p>
            <p className="mt-2 text-sm text-graphite/70">Modalidades de entrega simples: hotel o aeropuerto</p>
          </div>
          <div className="rounded-[1.5rem] bg-white/70 p-4">
            <p className="text-2xl font-semibold text-burgundy">1</p>
            <p className="mt-2 text-sm text-graphite/70">Pack premium para contar la historia de escalabilidad</p>
          </div>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-[0.7fr_1fr]">
        <WineIllustration
          accent="from-[#7a8062] via-[#d6dbc9] to-[#f7f3ee]"
          label="Rose"
          className="min-h-[280px]"
        />
        <WineIllustration
          accent="from-[#6b1f2a] via-[#964353] to-[#e8dccb]"
          label="Malbec"
          className="min-h-[340px]"
        />
        <div className="rounded-[1.75rem] bg-white/80 p-6 sm:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-olive">
            Beneficio destacado
          </p>
          <h2 className="mt-3 font-display text-3xl text-graphite">
            Compras premium que se convierten en acceso, reserva y prioridad futura.
          </h2>
          <p className="mt-3 text-base leading-7 text-graphite/72">
            La capa premium de ORIGEN permite presentar packs especiales con beneficios
            acumulables, sin sobrecargar el MVP con complejidad blockchain real.
          </p>
        </div>
      </div>
    </section>
  );
}
