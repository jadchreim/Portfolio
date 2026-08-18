"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, profile } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";
import { MenuIcon, CloseIcon } from "./icons";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-canvas/85 backdrop-blur-md dark:border-line-dark dark:bg-canvas-dark/85">
      <div className="mx-auto flex h-16 max-w-container items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src={profile.logo.src}
            alt={profile.logo.alt}
            width={profile.logo.width}
            height={profile.logo.height}
            priority
            className="shrink-0 object-contain"
          />
          <span className="text-[15px] font-semibold tracking-tight text-ink dark:text-ink-dark">
            {profile.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "text-[14px] font-medium transition-colors",
                  active
                    ? "text-ink dark:text-ink-dark"
                    : "text-muted hover:text-ink dark:text-muted-dark dark:hover:text-ink-dark",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            href="/contact"
            className="inline-flex h-9 items-center rounded-full bg-accent px-4 text-[13.5px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            Get in touch
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink dark:border-line-dark dark:text-ink-dark"
          >
            {open ? (
              <CloseIcon className="h-4 w-4" strokeWidth={1.9} />
            ) : (
              <MenuIcon className="h-4 w-4" strokeWidth={1.9} />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-canvas px-5 py-4 dark:border-line-dark dark:bg-canvas-dark md:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "rounded-lg px-3 py-2.5 text-[15px] font-medium transition-colors",
                    active
                      ? "bg-accent-dim text-accent dark:bg-accent-dim-dark"
                      : "text-muted hover:bg-surface hover:text-ink dark:text-muted-dark dark:hover:bg-surface-dark dark:hover:text-ink-dark",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-accent text-[14px] font-semibold text-white"
            >
              Get in touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
