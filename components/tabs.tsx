"use client";

export function Tabs({
  options,
  value,
  onChange,
}: {
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="mb-8 flex gap-6 border-b border-line dark:border-line-dark" role="tablist">
      {options.map((option) => {
        const active = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(option.value)}
            className={[
              "relative pb-3 text-[14.5px] font-semibold transition-colors",
              active
                ? "text-ink dark:text-ink-dark"
                : "text-muted hover:text-ink dark:text-muted-dark dark:hover:text-ink-dark",
            ].join(" ")}
          >
            {option.label}
            {active && (
              <span className="absolute inset-x-0 -bottom-px h-[2px] rounded-full bg-accent" />
            )}
          </button>
        );
      })}
    </div>
  );
}
