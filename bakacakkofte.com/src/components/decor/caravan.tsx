type Props = { className?: string; style?: React.CSSProperties };

export function CaravanSilhouette({ className, style }: Props) {
  return (
    <svg
      viewBox="0 0 320 140"
      className={className}
      style={style}
      aria-hidden
      data-a11y-ui="true"
      fill="none"
    >
      <defs>
        <pattern id="cvn-hatch" patternUnits="userSpaceOnUse" width="4" height="4" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="4" stroke="currentColor" strokeWidth="0.6" opacity="0.35" />
        </pattern>
      </defs>
      {/* tow bar */}
      <path d="M16 108 L44 108 L52 100" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* body */}
      <rect x="44" y="34" width="210" height="72" rx="14" fill="url(#cvn-hatch)" stroke="currentColor" strokeWidth="2.5" />
      {/* roof cap */}
      <path d="M56 34 L244 34 L252 24 L48 24 Z" fill="currentColor" opacity="0.9" />
      {/* awning */}
      <path d="M60 34 L250 34 L240 44 L70 44 Z" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.5" />
      {/* window */}
      <rect x="74" y="52" width="80" height="36" rx="4" fill="currentColor" opacity="0.12" stroke="currentColor" strokeWidth="1.8" />
      {/* service hatch */}
      <rect x="168" y="52" width="72" height="36" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeDasharray="4 3" />
      {/* chimney */}
      <rect x="248" y="8" width="14" height="22" rx="2" fill="currentColor" />
      <path d="M255 8 Q250 0 258 -4 Q264 0 255 8" fill="currentColor" opacity="0.5" />
      {/* wheel wells */}
      <circle cx="92" cy="112" r="18" fill="currentColor" />
      <circle cx="92" cy="112" r="8" fill="var(--color-cream, #fbf5ec)" />
      <circle cx="216" cy="112" r="18" fill="currentColor" />
      <circle cx="216" cy="112" r="8" fill="var(--color-cream, #fbf5ec)" />
      {/* rear stripe */}
      <line x1="254" y1="48" x2="254" y2="100" stroke="currentColor" strokeWidth="2.5" />
      <line x1="260" y1="48" x2="260" y2="100" stroke="currentColor" strokeWidth="2.5" opacity="0.6" />
      {/* sign */}
      <rect x="84" y="14" width="120" height="16" rx="2" fill="currentColor" />
      <text x="144" y="25" textAnchor="middle" fontFamily="serif" fontStyle="italic" fontSize="11" fill="var(--color-cream, #fbf5ec)" fontWeight="700">
        Bakacak
      </text>
    </svg>
  );
}

export function WaxSeal({ className, text = "Usta Eli · Bolu Dağı", style }: Props & { text?: string }) {
  const id = "ws-" + text.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={style}
      aria-hidden
      data-a11y-ui="true"
    >
      <defs>
        <path id={id} d="M 100,100 m -72,0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0" />
      </defs>
      {/* outer dashed */}
      <circle cx="100" cy="100" r="92" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" opacity="0.5" />
      {/* seal body */}
      <circle cx="100" cy="100" r="82" fill="currentColor" opacity="0.08" />
      <circle cx="100" cy="100" r="82" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1 3" />
      {/* center emblem: flame + B */}
      <path
        d="M100 62 Q110 82 112 92 Q114 104 106 112 Q112 106 114 100 Q112 112 104 118 Q94 122 86 114 Q78 106 84 92 Q90 82 90 72 Q95 76 96 68 Q98 64 100 62 Z"
        fill="currentColor"
      />
      <text x="100" y="150" textAnchor="middle" fontFamily="serif" fontSize="14" fill="currentColor" fontWeight="700">
        ✦
      </text>
      {/* curved text */}
      <text fill="currentColor" fontFamily="var(--font-sans)" fontSize="10" fontWeight="700" letterSpacing="2">
        <textPath href={`#${id}`} startOffset="25%" textAnchor="middle">
          {text.toUpperCase()}
        </textPath>
      </text>
    </svg>
  );
}

export function TicketEdge({ className, side = "left" }: { className?: string; side?: "left" | "right" | "both" }) {
  // Vertical perforated ticket edge (as a decorative mask)
  return (
    <svg
      viewBox="0 0 20 400"
      preserveAspectRatio="none"
      className={className}
      aria-hidden
      data-a11y-ui="true"
    >
      {(side === "left" || side === "both") && (
        <g>
          {Array.from({ length: 20 }).map((_, i) => (
            <circle key={i} cx="0" cy={10 + i * 20} r="4" fill="var(--color-cream, #fbf5ec)" />
          ))}
        </g>
      )}
      {(side === "right" || side === "both") && (
        <g>
          {Array.from({ length: 20 }).map((_, i) => (
            <circle key={i} cx="20" cy={10 + i * 20} r="4" fill="var(--color-cream, #fbf5ec)" />
          ))}
        </g>
      )}
    </svg>
  );
}

export function ForkKnifeMark({ className }: Props) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      aria-hidden
      data-a11y-ui="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <path d="M12 4 L12 18 M8 4 L8 14 Q8 16 12 16 Q16 16 16 14 L16 4" />
      <path d="M12 18 L12 36" />
      <path d="M28 4 Q22 4 22 14 Q22 20 28 20 L28 36" />
    </svg>
  );
}

export function UnderlineSquiggle({ className }: Props) {
  return (
    <svg
      viewBox="0 0 200 12"
      className={className}
      preserveAspectRatio="none"
      aria-hidden
      data-a11y-ui="true"
      fill="none"
    >
      <path
        d="M2 8 Q 20 2, 40 8 T 80 8 T 120 8 T 160 8 T 198 8"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HandDrawnCircle({ className }: Props) {
  return (
    <svg
      viewBox="0 0 200 100"
      className={className}
      aria-hidden
      data-a11y-ui="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    >
      <path d="M16 52 Q20 20 100 14 Q180 12 184 48 Q186 82 104 88 Q22 90 14 54 Q12 40 22 26" />
    </svg>
  );
}
