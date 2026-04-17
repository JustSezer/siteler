type IconConfig = {
  gradient: string;
  color: string;
  tint: string;
  icon: React.ReactNode;
};

const ICONS: Record<string, IconConfig> = {
  "wix-site-kurulumu": {
    gradient: "linear-gradient(135deg, var(--coral-soft), var(--gold-soft))",
    color: "var(--coral)",
    tint: "tint-coral",
    // Layout/layers icon
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </>
    ),
  },
  "wix-tasarim-duzenleme": {
    gradient: "linear-gradient(135deg, var(--lilac-soft), var(--coral-soft))",
    color: "var(--lilac)",
    tint: "tint-lilac",
    // Palette/brush icon
    icon: (
      <>
        <path d="M12 22a10 10 0 1 1 10-10 5 5 0 0 1-5 5h-2a2 2 0 0 0-2 2 3 3 0 0 1-3 3Z" />
        <circle cx="7.5" cy="10.5" r="0.75" fill="currentColor" />
        <circle cx="12" cy="7.5" r="0.75" fill="currentColor" />
        <circle cx="16.5" cy="10.5" r="0.75" fill="currentColor" />
      </>
    ),
  },
  "wix-seo": {
    gradient: "linear-gradient(135deg, var(--mint-soft), var(--sky-soft))",
    color: "var(--mint)",
    tint: "tint-mint",
    // Trending up / chart icon
    icon: (
      <>
        <polyline points="3 17 9 11 13 15 21 7" />
        <polyline points="14 7 21 7 21 14" />
      </>
    ),
  },
  "wix-domain-baglama": {
    gradient: "linear-gradient(135deg, var(--sky-soft), var(--mint-soft))",
    color: "var(--sky)",
    tint: "tint-sky",
    // Globe icon
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10Z" />
      </>
    ),
  },
  "wix-e-ticaret": {
    gradient: "linear-gradient(135deg, var(--gold-soft), var(--coral-soft))",
    color: "#D97706",
    tint: "tint-gold",
    // Shopping bag
    icon: (
      <>
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </>
    ),
  },
  "wix-hata-giderme": {
    gradient: "linear-gradient(135deg, var(--coral-soft), var(--lilac-soft))",
    color: "var(--coral)",
    tint: "tint-coral",
    // Wrench icon
    icon: (
      <>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z" />
      </>
    ),
  },
  "wix-egitim": {
    gradient: "linear-gradient(135deg, var(--lilac-soft), var(--sky-soft))",
    color: "var(--lilac)",
    tint: "tint-lilac",
    // Graduation cap
    icon: (
      <>
        <path d="M22 10 12 5 2 10l10 5 10-5Z" />
        <path d="M6 12v5c3 2 9 2 12 0v-5" />
      </>
    ),
  },
};

const DEFAULT: IconConfig = {
  gradient: "linear-gradient(135deg, var(--coral-soft), var(--gold-soft))",
  color: "var(--coral)",
  tint: "tint-coral",
  icon: (
    <>
      <polyline points="9 11 12 14 22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </>
  ),
};

export function getServiceIcon(slug: string): IconConfig {
  return ICONS[slug] ?? DEFAULT;
}

export default function ServiceIcon({ slug, size = 22 }: { slug: string; size?: number }) {
  const cfg = getServiceIcon(slug);
  return (
    <span
      className="flex items-center justify-center w-11 h-11 rounded-xl"
      style={{ background: cfg.gradient }}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={cfg.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {cfg.icon}
      </svg>
    </span>
  );
}
