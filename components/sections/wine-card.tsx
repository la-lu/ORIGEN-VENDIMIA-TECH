import Link from "next/link";
import { WineIllustration } from "@/components/ui/wine-illustration";
import { formatPrice } from "@/lib/utils";
import { Wine } from "@/lib/types";

export function WineCard({
  wine,
  highlightPremium = false
}: {
  wine: Wine;
  highlightPremium?: boolean;
}) {
  return (
    <article
      className={`overflow-hidden rounded-[1.75rem] border bg-white/75 shadow-soft transition hover:-translate-y-1 hover:shadow-xl ${
        highlightPremium && wine.premiumEligible ? "border-gold/40" : "border-burgundy/10"
      }`}
    >
      <WineIllustration accent={wine.imageAccent} className="min-h-[260px]" label={wine.variety} />
      <div className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl text-graphite">{wine.name}</h3>
            <p className="text-sm text-olive">{wine.winery}</p>
          </div>
          {wine.premiumEligible ? (
            <span className="rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-graphite">
              Premium
            </span>
          ) : null}
        </div>
        <p className="text-sm leading-6 text-graphite/72">{wine.type} · {wine.variety}</p>
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold text-burgundy">{formatPrice(wine.price)}</p>
          <Link
            href={`/vino/${wine.slug}`}
            className="rounded-full border border-burgundy/20 px-4 py-2 text-sm font-semibold text-burgundy transition hover:bg-burgundy/5"
          >
            Ver detalle
          </Link>
        </div>
      </div>
    </article>
  );
}
