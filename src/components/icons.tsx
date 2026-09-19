// Hand-drawn inline SVGs, matching ../crm/src/components/icons.tsx's own
// convention exactly — no icon-library dependency.
type IconProps = { className?: string };

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function CodeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="m9 18-6-6 6-6" />
      <path d="m15 6 6 6-6 6" />
    </svg>
  );
}

export function SmartphoneIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="6" y="2" width="12" height="20" rx="2.5" />
      <path d="M11 18h2" />
    </svg>
  );
}

export function CpuIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="6" y="6" width="12" height="12" rx="1.5" />
      <rect x="9" y="9" width="6" height="6" rx="0.5" />
      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
    </svg>
  );
}

export function DatabaseIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3 6 9 7 9-7" />
    </svg>
  );
}

export function GithubIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M9 19c-4.3 1.3-4.3-2.5-6-3m12 5v-3.4c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.5 11.5 0 0 0-6.2 0C6.6 2.9 5.6 3.2 5.6 3.2a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.2 9.6c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  );
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="3" />
      <path d="M7 10v7M7 7v.01M11 17v-4.5c0-1.4 1-2.5 2.5-2.5s2.5 1.1 2.5 2.5V17M11 10v7" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 4.5v15l13-7.5-13-7.5Z" />
    </svg>
  );
}

export function ImageIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="2.5" />
      <circle cx="9" cy="9" r="1.75" />
      <path d="m21 15-5.5-5.5L4 21" />
    </svg>
  );
}

export function LockIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
      <path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" />
    </svg>
  );
}
