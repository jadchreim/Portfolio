import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { profile } from "@/lib/data";
import { PhoneIcon, MailIcon, PinIcon, WhatsAppIcon, LinkedInIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact - Jad Chreim",
};

const directDetails = [
  { label: "Phone", value: profile.phone, href: profile.phoneHref, Icon: PhoneIcon },
  { label: "Email", value: profile.email, href: profile.emailHref, Icon: MailIcon },
  { label: "Location", value: profile.location, Icon: PinIcon },
];

export default function ContactPage() {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        description="Send an email with a direct question and I will respond whenever I can. All soliciting is ignored."
      >
        <div className="animate-fade-up mt-8 flex flex-wrap gap-3">
          <a
            href={profile.emailHref}
            className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            <MailIcon className="h-4 w-4" strokeWidth={2} />
            Send an email
          </a>
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-line px-6 text-[15px] font-semibold text-ink transition-colors hover:bg-canvas dark:border-line-dark dark:text-ink-dark dark:hover:bg-canvas-dark"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </PageHero>

      <section className="mx-auto max-w-container px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-muted dark:text-muted-dark">
              Direct details
            </h2>
            <div className="rounded-2xl border border-line bg-panel shadow-card dark:border-line-dark dark:bg-panel-dark dark:shadow-card-dark">
              {directDetails.map((row, i) => {
                const content = (
                  <div
                    className={[
                      "flex items-center gap-3 px-5 py-4",
                      i !== directDetails.length - 1 ? "border-b border-line dark:border-line-dark" : "",
                    ].join(" ")}
                  >
                    <row.Icon className="h-4 w-4 shrink-0 text-muted dark:text-muted-dark" strokeWidth={1.9} />
                    <span className="flex-1 text-[14px] text-muted dark:text-muted-dark">{row.label}</span>
                    <span className="text-[14px] font-medium text-ink dark:text-ink-dark">{row.value}</span>
                  </div>
                );
                return row.href ? (
                  <a key={row.label} href={row.href} className="block transition-colors hover:bg-surface dark:hover:bg-surface-dark">
                    {content}
                  </a>
                ) : (
                  <div key={row.label}>{content}</div>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-muted dark:text-muted-dark">
              Elsewhere
            </h2>
            <div className="rounded-2xl border border-line bg-panel shadow-card dark:border-line-dark dark:bg-panel-dark dark:shadow-card-dark">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border-b border-line px-5 py-4 transition-colors hover:bg-surface dark:border-line-dark dark:hover:bg-surface-dark"
              >
                <LinkedInIcon className="h-4 w-4 shrink-0 text-muted dark:text-muted-dark" />
                <span className="flex-1 text-[14px] text-muted dark:text-muted-dark">LinkedIn</span>
                <span className="text-[14px] font-medium text-accent">View profile</span>
              </a>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-4 transition-colors hover:bg-surface dark:hover:bg-surface-dark"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0 text-muted dark:text-muted-dark" />
                <span className="flex-1 text-[14px] text-muted dark:text-muted-dark">WhatsApp</span>
                <span className="text-[14px] font-medium text-accent">Message</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
