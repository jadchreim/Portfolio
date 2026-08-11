"use client";

import { useTheme } from "./theme-provider";
import { SunIcon, MoonIcon } from "./icons";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
      className={[
        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-surface dark:border-line-dark dark:text-ink-dark dark:hover:bg-surface-dark",
        className,
      ].join(" ")}
    >
      {isDark ? (
        <SunIcon className="h-4 w-4" strokeWidth={1.9} />
      ) : (
        <MoonIcon className="h-4 w-4" strokeWidth={1.9} />
      )}
    </button>
  );
}
