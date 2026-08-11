import { profile } from "@/lib/data";
import { MailIcon, WhatsAppIcon } from "./icons";

export function CtaBand() {
  return (
    <section className="bg-deep dark:bg-deep-dark">
      <div className="mx-auto max-w-container px-5 py-16 text-center sm:px-8 sm:py-20">
        <h2 className="mx-auto max-w-xl text-[26px] font-bold leading-tight tracking-tight text-white sm:text-[32px]">
          Looking for reliable IT support for your team?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-white/60">
          Reach out directly, I respond to every genuine message myself.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={profile.emailHref}
            className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-[14px] font-semibold text-deep transition-opacity hover:opacity-90"
          >
            <MailIcon className="h-4 w-4" strokeWidth={2} />
            Send an email
          </a>
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-white/20 px-5 text-[14px] font-semibold text-white transition-colors hover:bg-white/10"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
