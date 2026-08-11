export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="border-b border-line bg-surface dark:border-line-dark dark:bg-surface-dark">
      <div className="mx-auto max-w-container px-5 py-16 sm:px-8 sm:py-20">
        <p className="animate-fade-up mb-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-accent">
          {eyebrow}
        </p>
        <h1 className="animate-fade-up max-w-2xl text-[34px] font-bold leading-[1.12] tracking-tight text-ink dark:text-ink-dark sm:text-[46px]">
          {title}
        </h1>
        {description && (
          <p className="animate-fade-up mt-5 max-w-xl text-[16px] leading-relaxed text-muted dark:text-muted-dark">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
