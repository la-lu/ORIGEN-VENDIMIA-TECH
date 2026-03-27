type WineIllustrationProps = {
  accent: string;
  label?: string;
  className?: string;
};

export function WineIllustration({
  accent,
  label = "Reserva",
  className = ""
}: WineIllustrationProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] bg-gradient-to-br ${accent} ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.34),transparent_30%)]" />
      <div className="absolute -right-8 bottom-0 h-32 w-32 rounded-full bg-white/20 blur-2xl" />
      <div className="absolute bottom-6 left-1/2 h-44 w-16 -translate-x-1/2 rounded-t-[2.5rem] rounded-b-[1rem] bg-[#271d1d] shadow-2xl">
        <div className="mx-auto mt-3 h-6 w-8 rounded-full bg-[#1a1111]" />
        <div className="mx-auto mt-4 w-11 rounded-2xl bg-cream/95 px-2 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.24em] text-burgundy">
          {label}
        </div>
      </div>
    </div>
  );
}
