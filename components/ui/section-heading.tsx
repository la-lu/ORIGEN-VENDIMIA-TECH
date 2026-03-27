export function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-olive">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl leading-tight text-graphite md:text-5xl">
        {title}
      </h2>
      <p className="text-base leading-7 text-graphite/75">{description}</p>
    </div>
  );
}
