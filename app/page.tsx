import Link from "next/link";
import { profile, pillars, exploreLinks, highlights } from "@/lib/data";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/icons";
import { CtaBand } from "@/components/cta-band";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-line dark:border-line-dark">
        <div className="mx-auto max-w-container px-5 py-20 sm:px-8 sm:py-28">
          <p className="animate-fade-up mb-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-accent">
            {profile.title}
          </p>
          <h1 className="animate-fade-up max-w-3xl text-[36px] font-bold leading-[1.1] tracking-tight text-ink dark:text-ink-dark sm:text-[54px]">
            Reliable IT support behind the systems a business runs on.
          </h1>
          <p className="animate-fade-up mt-6 max-w-xl text-[16.5px] leading-relaxed text-muted dark:text-muted-dark">
            {profile.summary}
          </p>
          <div className="animate-fade-up mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/experience"
              className="inline-flex h-12 items-center gap-1.5 rounded-full bg-accent px-6 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              View experience
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center gap-1.5 rounded-full border border-line px-6 text-[15px] font-semibold text-ink transition-colors hover:bg-surface dark:border-line-dark dark:text-ink-dark dark:hover:bg-surface-dark"
            >
              Talk to us
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line dark:border-line-dark dark:bg-line-dark sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="bg-canvas p-6 dark:bg-canvas-dark">
                <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-muted dark:text-muted-dark">
                  {item.label}
                </p>
                <p className="mt-2 text-[18px] font-semibold text-ink dark:text-ink-dark">
                  {item.value}
                </p>
                <p className="mt-1 text-[13.5px] text-muted dark:text-muted-dark">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why work with me */}
      <section className="border-b border-line bg-surface dark:border-line-dark dark:bg-surface-dark">
        <div className="mx-auto max-w-container px-5 py-16 sm:px-8 sm:py-20">
          <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.1em] text-accent">
            Why work with me
          </p>
          <h2 className="max-w-lg text-[26px] font-bold tracking-tight text-ink dark:text-ink-dark sm:text-[32px]">
            Support built around how the systems actually get used.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="border-t border-line pt-5 dark:border-line-dark">
                <h3 className="text-[16px] font-semibold text-ink dark:text-ink-dark">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted dark:text-muted-dark">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore */}
      <section className="border-b border-line dark:border-line-dark">
        <div className="mx-auto max-w-container px-5 py-16 sm:px-8 sm:py-20">
          <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.1em] text-accent">
            Explore
          </p>
          <h2 className="max-w-lg text-[26px] font-bold tracking-tight text-ink dark:text-ink-dark sm:text-[32px]">
            Everything about how I work.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {exploreLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-2xl border border-line bg-panel p-6 shadow-card transition-transform duration-200 hover:-translate-y-0.5 dark:border-line-dark dark:bg-panel-dark dark:shadow-card-dark"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[16.5px] font-semibold text-ink dark:text-ink-dark">
                      {link.title}
                    </h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-muted dark:text-muted-dark">
                      {link.description}
                    </p>
                  </div>
                  <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-muted-dark" />
                </div>
                <span className="mt-4 inline-block text-[13.5px] font-semibold text-accent">
                  Learn more
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
