type Props = { className?: string; style?: React.CSSProperties };

export function ChilliShape({ className, style }: Props) {
  return (
    <svg viewBox="0 0 120 160" className={className} style={style} aria-hidden data-a11y-ui="true">
      <path
        d="M52 40 Q24 58 26 92 Q28 124 56 138 Q90 140 96 110 Q100 78 86 58 Q76 46 64 46 Q56 46 52 40 Z"
        fill="var(--color-red)"
      />
      <path
        d="M34 80 Q42 84 40 92 Q52 96 50 104"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
      {/* stem */}
      <path
        d="M52 40 Q54 22 68 20 L76 10 L68 16 L66 6 L60 20 Q54 28 52 40 Z"
        fill="var(--color-leaf)"
      />
    </svg>
  );
}

export function TomatoShape({ className, style }: Props) {
  return (
    <svg viewBox="0 0 140 140" className={className} style={style} aria-hidden data-a11y-ui="true">
      <circle cx="70" cy="80" r="48" fill="var(--color-red)" />
      <ellipse cx="54" cy="64" rx="10" ry="6" fill="#fff" opacity="0.25" />
      {/* leaves */}
      <g transform="translate(70 30)">
        <path d="M0 0 L-16 -8 L-6 8 L-22 4 L-4 14 L-16 22 L0 16 L16 22 L4 14 L22 4 L6 8 L16 -8 Z" fill="var(--color-leaf)" />
        <circle cx="0" cy="10" r="4" fill="var(--color-leaf)" />
      </g>
    </svg>
  );
}

export function LeafShape({ className, style }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} style={style} aria-hidden data-a11y-ui="true">
      <path d="M20 60 Q40 20 100 30 Q80 80 30 98 Q22 88 20 60 Z" fill="var(--color-leaf)" />
      <path d="M30 82 Q56 60 90 40" stroke="#fff" strokeWidth="2" fill="none" opacity="0.4" />
    </svg>
  );
}

export function OnionShape({ className, style }: Props) {
  return (
    <svg viewBox="0 0 140 140" className={className} style={style} aria-hidden data-a11y-ui="true">
      <ellipse cx="70" cy="78" rx="50" ry="54" fill="var(--color-orange)" />
      <path d="M70 24 Q68 14 60 10 Q58 18 66 24 Q56 22 48 28 Q54 30 64 30" fill="var(--color-leaf)" />
      <path d="M30 80 Q70 70 110 80" stroke="var(--color-orange-deep)" strokeWidth="2" fill="none" opacity="0.6" />
      <path d="M32 96 Q70 88 108 96" stroke="var(--color-orange-deep)" strokeWidth="2" fill="none" opacity="0.5" />
      <path d="M34 110 Q70 104 106 110" stroke="var(--color-orange-deep)" strokeWidth="2" fill="none" opacity="0.4" />
    </svg>
  );
}

export function FlameShape({ className, style }: Props) {
  return (
    <svg viewBox="0 0 80 120" className={className} style={style} aria-hidden data-a11y-ui="true">
      <path
        d="M40 8 Q55 38 58 54 Q62 72 52 82 Q58 74 60 66 Q64 78 56 92 Q66 88 68 78 Q74 96 56 108 Q38 118 22 102 Q10 84 22 64 Q28 54 28 44 Q36 50 38 36 Q42 28 40 8 Z"
        fill="var(--color-red)"
      />
      <path
        d="M40 32 Q48 50 48 62 Q48 76 38 84 Q42 72 38 62 Q32 54 36 46 Q38 40 40 32 Z"
        fill="var(--color-gold)"
      />
    </svg>
  );
}

export function Sparkle({ className, style }: Props) {
  return (
    <svg viewBox="0 0 40 40" className={className} style={style} aria-hidden data-a11y-ui="true">
      <path d="M20 2 L23 17 L38 20 L23 23 L20 38 L17 23 L2 20 L17 17 Z" fill="var(--color-gold)" />
    </svg>
  );
}

export function SwoopUnderline({ className }: Props) {
  return (
    <svg viewBox="0 0 200 20" className={className} preserveAspectRatio="none" aria-hidden data-a11y-ui="true">
      <path
        d="M4 14 Q 60 -2, 120 10 T 196 8"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
