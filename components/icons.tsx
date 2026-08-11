type IconProps = {
  className?: string;
  strokeWidth?: number;
};

const base = "none";

export function SunIcon({ className, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth={strokeWidth} />
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round">
        <path d="M12 2.5v2.2" />
        <path d="M12 19.3v2.2" />
        <path d="M4.2 4.2l1.6 1.6" />
        <path d="M18.2 18.2l1.6 1.6" />
        <path d="M2.5 12h2.2" />
        <path d="M19.3 12h2.2" />
        <path d="M4.2 19.8l1.6-1.6" />
        <path d="M18.2 5.8l1.6-1.6" />
      </g>
    </svg>
  );
}

export function MoonIcon({ className, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} className={className} aria-hidden="true">
      <path
        d="M20 14.2A8.4 8.4 0 1 1 9.8 4a6.6 6.6 0 0 0 10.2 10.2Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRightIcon({ className, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} className={className} aria-hidden="true">
      <path d="M4.5 12h15" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowUpRightIcon({ className, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} className={className} aria-hidden="true">
      <path d="M7 17 17 7" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M9 7h8v8" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MenuIcon({ className, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} className={className} aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} className={className} aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

export function PhoneIcon({ className, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} className={className} aria-hidden="true">
      <path
        d="M7.2 3.5 9.8 9l-2.3 2c1 2.2 2.8 4 5 5l2-2.3 5.5 2.6c.2 1.7-1 3.2-2.7 3.4-7 .7-14.5-6.8-13.8-13.8.2-1.7 1.7-2.9 3.4-2.7Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MailIcon({ className, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} className={className} aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.2" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M4.5 7 12 12.5 19.5 7" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PinIcon({ className, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} className={className} aria-hidden="true">
      <path
        d="M12 21.5s7-6.3 7-12.1a7 7 0 1 0-14 0c0 5.8 7 12.1 7 12.1Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.3" r="2.4" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function CalendarIcon({ className, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} className={className} aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.2" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M3.5 9.5h17" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M8 3v3.6M16 3v3.6" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

export function GraduationCapIcon({ className, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} className={className} aria-hidden="true">
      <path d="M2.5 9 12 5l9.5 4-9.5 4-9.5-4Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" />
      <path d="M6.5 11v4.4c0 1.5 2.5 3 5.5 3s5.5-1.5 5.5-3V11" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21.5 9v6" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

export function GlobeIcon({ className, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M3.5 12h17" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M12 3.5c2.4 2.3 3.7 5.3 3.7 8.5s-1.3 6.2-3.7 8.5c-2.4-2.3-3.7-5.3-3.7-8.5s1.3-6.2 3.7-8.5Z" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function ShieldIcon({ className, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} className={className} aria-hidden="true">
      <path
        d="M12 3 19 6v5.5c0 5-3 8-7 9.5-4-1.5-7-4.5-7-9.5V6Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path d="M9 12.2l2 2 4-4.4" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ServerIcon({ className, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} className={className} aria-hidden="true">
      <rect x="3.5" y="4" width="17" height="6.4" rx="1.6" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="3.5" y="13.6" width="17" height="6.4" rx="1.6" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M7 7.2h.01M7 16.8h.01" stroke="currentColor" strokeWidth={strokeWidth + 0.6} strokeLinecap="round" />
    </svg>
  );
}

export function WrenchIcon({ className, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} className={className} aria-hidden="true">
      <path
        d="M14.5 3.7a4.5 4.5 0 0 0-5.9 5.5L3 14.8l2.2 2.2 5.6-5.6a4.5 4.5 0 0 0 5.5-5.9l-2.9 2.9-2.3-.6-.6-2.3Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path d="M5.2 17 5 17.2c-.7.7-.7 1.9 0 2.6.7.7 1.9.7 2.6 0l.2-.2" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

export function CheckIcon({ className, strokeWidth = 2 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} className={className} aria-hidden="true">
      <path d="M5 12.5 9.5 17 19 6.5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BriefcaseIcon({ className, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} className={className} aria-hidden="true">
      <rect x="3.5" y="7.5" width="17" height="11.5" rx="2.4" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M3.5 12.8h17" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function LayersIcon({ className, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} className={className} aria-hidden="true">
      <path d="M12 3.5 21 8 12 12.5 3 8Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" />
      <path d="M3 13l9 4.5 9-4.5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
      <path d="M3 17.5 12 22l9-4.5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export function UserIcon({ className, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} className={className} aria-hidden="true">
      <circle cx="12" cy="8.2" r="3.4" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M5 20c1.1-3.6 4-5.4 7-5.4s5.9 1.8 7 5.4" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.02 2.5c-5.24 0-9.5 4.26-9.5 9.5 0 1.68.44 3.3 1.28 4.73L2.5 21.5l4.9-1.28a9.46 9.46 0 0 0 4.62 1.18h.01c5.24 0 9.5-4.26 9.5-9.5s-4.27-9.4-9.51-9.4Zm0 17.28h-.01a7.7 7.7 0 0 1-3.94-1.08l-.28-.17-2.93.76.78-2.86-.19-.29a7.65 7.65 0 0 1-1.18-4.14c0-4.24 3.45-7.69 7.7-7.69 2.06 0 4 .8 5.45 2.26a7.63 7.63 0 0 1 2.25 5.44c0 4.24-3.45 7.77-7.65 7.77Zm4.22-5.76c-.23-.12-1.36-.67-1.57-.75-.21-.08-.36-.12-.52.12-.15.23-.6.75-.73.9-.14.15-.27.17-.5.06-.23-.12-.98-.36-1.87-1.16-.69-.62-1.16-1.38-1.29-1.61-.14-.23-.01-.36.1-.47.11-.11.23-.27.35-.41.11-.14.15-.23.23-.39.08-.15.04-.29-.02-.41-.06-.12-.52-1.26-.71-1.72-.19-.45-.38-.39-.52-.4h-.44c-.15 0-.4.06-.6.29-.21.23-.79.77-.79 1.87s.81 2.17.92 2.32c.12.15 1.6 2.45 3.89 3.43.54.24.97.38 1.3.48.55.17 1.05.15 1.44.09.44-.07 1.36-.55 1.55-1.09.19-.53.19-.98.14-1.08-.06-.1-.21-.16-.44-.28Z" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.2 8.75h3.5V21h-3.5V8.75Zm6.2 0h3.36v1.68h.05c.47-.88 1.6-1.8 3.3-1.8 3.53 0 4.18 2.32 4.18 5.35V21h-3.5v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.86V21H9.4V8.75Z" />
    </svg>
  );
}
