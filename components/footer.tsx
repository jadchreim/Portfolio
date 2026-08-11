import Link from "next/link";
import { profile, navItems, exploreLinks } from "@/lib/data";
import { LinkedInIcon, MailIcon, PhoneIcon } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface dark:border-line-dark dark:bg-surface-dark">
      <div className="mx-auto max-w-container px-5 py-14 sm:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent text-[12px] font-bold text-white">
                {profile.initials}
              </span>
              <span className="text-[15px] font-semibold text-ink dark:text-ink-dark">
                {profile.name}
              </span>
            </Link>
            <p className="mt-3 max-w-[220px] text-[13.5px] leading-relaxed text-muted dark:text-muted-dark">
              {profile.title} based in {profile.location}.
            </p>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex h-8 w-8 items-center justify-center rounded-full border border-line text-muted transition-colors hover:text-accent dark:border-line-dark dark:text-muted-dark"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
          </div>

          <div>
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-muted dark:text-muted-dark">
              Explore
            </p>
            <ul className="space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13.5px] text-muted transition-colors hover:text-ink dark:text-muted-dark dark:hover:text-ink-dark"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-muted dark:text-muted-dark">
              Site
            </p>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[13.5px] text-muted transition-colors hover:text-ink dark:text-muted-dark dark:hover:text-ink-dark"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-muted dark:text-muted-dark">
              Contact
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={profile.emailHref}
                  className="flex items-center gap-2 text-[13.5px] text-muted transition-colors hover:text-ink dark:text-muted-dark dark:hover:text-ink-dark"
                >
                  <MailIcon className="h-3.5 w-3.5 shrink-0" strokeWidth={1.9} />
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={profile.phoneHref}
                  className="flex items-center gap-2 text-[13.5px] text-muted transition-colors hover:text-ink dark:text-muted-dark dark:hover:text-ink-dark"
                >
                  <PhoneIcon className="h-3.5 w-3.5 shrink-0" strokeWidth={1.9} />
                  {profile.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-[12.5px] text-muted dark:border-line-dark dark:text-muted-dark sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {profile.name}. All rights reserved.</p>
          <p>{profile.location}</p>
        </div>
      </div>
    </footer>
  );
}
