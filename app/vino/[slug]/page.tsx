import { notFound } from "next/navigation";
import { ReviewCard } from "@/components/sections/review-card";
import { RatingStars } from "@/components/ui/rating-stars";
import { WineIllustration } from "@/components/ui/wine-illustration";
import { wines } from "@/data/wines";
import { formatPrice } from "@/lib/utils";
import { AddToCart } from "@/app/vino/[slug]/add-to-cart";

export default async function ProductDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const wine = wines.find((item) => item.slug === slug);

  if (!wine) notFound();

  return (
    <div className="space-y-16">
      <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <WineIllustration
          accent={wine.imageAccent}
          label={wine.variety}
          className="min-h-[520px]"
        />
        <div className="space-y-7">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-olive">
              {wine.winery}
            </p>
            <h1 className="font-display text-5xl leading-tight text-graphite">
              {wine.name}
            </h1>
            <p className="text-lg text-graphite/70">
              {wine.type} · {wine.variety}
            </p>
          </div>
          <p className="text-3xl font-semibold text-burgundy">{formatPrice(wine.price)}</p>
          <p className="max-w-2xl text-base leading-8 text-graphite/76">
            {wine.description}
          </p>
          <div className="flex flex-wrap gap-3">
            {wine.tastingNotes.map((note) => (
              <span
                key={note}
                className="rounded-full border border-burgundy/10 bg-white/80 px-4 py-2 text-sm text-graphite"
              >
                {note}
              </span>
            ))}
          </div>
          <div className="rounded-[1.5rem] bg-white/80 p-5">
            <p className="text-sm uppercase tracking-[0.24em] text-olive">Resenas visibles</p>
            <div className="mt-3 flex items-center gap-3">
              <RatingStars
                rating={Math.round(
                  wine.reviews.reduce((sum, review) => sum + review.rating, 0) /
                    wine.reviews.length
                )}
              />
              <span className="text-sm text-graphite/70">
                {wine.reviews.length} opiniones de turistas
              </span>
            </div>
          </div>
          <AddToCart wine={wine} />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-display text-3xl text-graphite">Lo que dicen otros viajeros</h2>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {wine.reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </section>
    </div>
  );
}
