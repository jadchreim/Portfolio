import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { profile, languages } from "@/lib/data";
import { PhoneIcon, MailIcon, PinIcon, CalendarIcon, WhatsAppIcon, LinkedInIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About - Jad Chreim",
};

const personalInfo = [
  { label: "Location", value: profile.location, Icon: PinIcon },
  { label: "Date of birth", value: profile.dob, Icon: CalendarIcon },
];

const contactInfo = [
  { label: "Phone", value: profile.phone, href: profile.phoneHref, Icon: PhoneIcon },
  { label: "Email", value: profile.email, href: profile.emailHref, Icon: MailIcon },
  { label: "WhatsApp", value: "Message directly", href: profile.whatsapp, Icon: WhatsAppIcon, external: true },
  { label: "LinkedIn", value: "View profile", href: profile.linkedin, Icon: LinkedInIcon, external: true },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About"
        title="A short introduction"
        description="A closer look at my background and how to reach me."
      />

      <section className="mx-auto max-w-container px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-muted dark:text-muted-dark">
              Background
            </h2>
            <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-ink dark:text-ink-dark">
              {profile.summary}
            </p>

            <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.08em] text-muted dark:text-muted-dark">
              Languages
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="rounded-2xl border border-line bg-panel p-4 dark:border-line-dark dark:bg-panel-dark"
                >
                  <p className="text-[15px] font-semibold text-ink dark:text-ink-dark">
                    {lang.name}
                  </p>
                  <p className="mt-0.5 text-[13px] text-muted dark:text-muted-dark">
                    {lang.level}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-muted dark:text-muted-dark">
              Personal information
            </h2>
            <div className="rounded-2xl border border-line bg-panel shadow-card dark:border-line-dark dark:bg-panel-dark dark:shadow-card-dark">
              {personalInfo.map((row, i) => (
                <div
                  key={row.label}
                  className={[
                    "flex items-center gap-3 px-5 py-4",
                    i !== personalInfo.length - 1 ? "border-b border-line dark:border-line-dark" : "",
                  ].join(" ")}
                >
                  <row.Icon className="h-4 w-4 shrink-0 text-muted dark:text-muted-dark" strokeWidth={1.9} />
                  <span className="flex-1 text-[14px] text-muted dark:text-muted-dark">{row.label}</span>
                  <span className="text-[14px] font-medium text-ink dark:text-ink-dark">{row.value}</span>
                </div>
              ))}
            </div>

            <h2 className="mb-4 mt-8 text-[13px] font-semibold uppercase tracking-[0.08em] text-muted dark:text-muted-dark">
              Contact
            </h2>
            <div className="rounded-2xl border border-line bg-panel shadow-card dark:border-line-dark dark:bg-panel-dark dark:shadow-card-dark">
              {contactInfo.map((row, i) => (
                <a
                  key={row.label}
                  href={row.href}
                  target={row.external ? "_blank" : undefined}
                  rel={row.external ? "noopener noreferrer" : undefined}
                  className={[
                    "flex items-center gap-3 px-5 py-4 transition-colors hover:bg-surface dark:hover:bg-surface-dark",
                    i !== contactInfo.length - 1 ? "border-b border-line dark:border-line-dark" : "",
                  ].join(" ")}
                >
                  <row.Icon className="h-4 w-4 shrink-0 text-muted dark:text-muted-dark" strokeWidth={1.9} />
                  <span className="flex-1 text-[14px] text-muted dark:text-muted-dark">{row.label}</span>
                  <span className="text-[14px] font-medium text-accent">{row.value}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
