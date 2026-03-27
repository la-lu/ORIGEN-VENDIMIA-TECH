import { stars } from "@/lib/utils";

export function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-gold">
      {stars(rating).map((filled, index) => (
        <span key={index}>{filled ? "★" : "☆"}</span>
      ))}
    </div>
  );
}
