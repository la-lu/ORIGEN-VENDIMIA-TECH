import { RatingStars } from "@/components/ui/rating-stars";
import { Review } from "@/lib/types";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="rounded-[1.5rem] border border-burgundy/10 bg-white/80 p-5">
      <RatingStars rating={review.rating} />
      <p className="mt-4 text-sm leading-7 text-graphite/75">“{review.comment}”</p>
      <div className="mt-4 text-sm">
        <p className="font-semibold text-graphite">{review.author}</p>
        <p className="text-olive">Turista de {review.country}</p>
      </div>
    </article>
  );
}
