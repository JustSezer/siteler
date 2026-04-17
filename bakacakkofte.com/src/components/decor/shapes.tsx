type DecorProps = {
  className?: string;
  style?: React.CSSProperties;
};

export function TomatoDecor({ className, style }: DecorProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      style={style}
      aria-hidden
      data-a11y-ui="true"
    >
      <circle cx="60" cy="66" r="40" fill="var(--color-tomato)" opacity="0.85" />
      <ellipse cx="45" cy="52" rx="8" ry="5" fill="#fff" opacity="0.22" />
      <g transform="translate(60 24)">
        <path
          d="M0 0 L-14 -8 L-6 6 L-18 4 L-4 12 L-14 18 L0 14 L14 18 L4 12 L18 4 L6 6 L14 -8 Z"
          fill="var(--color-leaf)"
        />
        <circle cx="0" cy="8" r="3" fill="var(--color-leaf)" />
      </g>
    </svg>
  );
}

export function PepperDecor({ className, style }: DecorProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      style={style}
      aria-hidden
      data-a11y-ui="true"
    >
      <path
        d="M40 36 Q22 52 28 78 Q34 100 58 100 Q82 100 90 78 Q96 58 86 44 Q78 34 66 36 Q56 38 50 34 Q44 32 40 36 Z"
        fill="var(--color-red)"
      />
      <path
        d="M50 34 Q60 20 70 22 L72 14 L66 16 L64 10 L60 18 Q56 20 50 34 Z"
        fill="var(--color-leaf)"
      />
      <path
        d="M44 52 Q48 56 44 62"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.3"
      />
    </svg>
  );
}

export function LeafDecor({ className, style }: DecorProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      style={style}
      aria-hidden
      data-a11y-ui="true"
    >
      <path
        d="M20 60 Q40 20 100 30 Q80 80 30 98 Q22 88 20 60 Z"
        fill="var(--color-leaf)"
        opacity="0.85"
      />
      <path
        d="M30 80 Q56 60 90 40"
        stroke="#fff"
        strokeWidth="2"
        fill="none"
        opacity="0.35"
      />
    </svg>
  );
}

export function OnionRingDecor({ className, style }: DecorProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      style={style}
      aria-hidden
      data-a11y-ui="true"
    >
      <circle cx="60" cy="60" r="44" fill="none" stroke="var(--color-gold)" strokeWidth="6" strokeDasharray="2 6" />
      <circle cx="60" cy="60" r="30" fill="none" stroke="var(--color-gold-deep)" strokeWidth="3" strokeDasharray="1 4" />
    </svg>
  );
}

export function FlameDecor({ className, style }: DecorProps) {
  return (
    <svg
      viewBox="0 0 80 120"
      className={className}
      style={style}
      aria-hidden
      data-a11y-ui="true"
    >
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

export function HalfCircleDecor({ className, style }: DecorProps) {
  return (
    <svg
      viewBox="0 0 200 100"
      className={className}
      style={style}
      aria-hidden
      data-a11y-ui="true"
    >
      <path d="M0 100 A100 100 0 0 1 200 100 Z" fill="var(--color-red)" opacity="0.08" />
    </svg>
  );
}

export function ZigDivider({ className }: DecorProps) {
  return (
    <svg
      viewBox="0 0 200 12"
      className={className}
      preserveAspectRatio="none"
      aria-hidden
      data-a11y-ui="true"
    >
      <path
        d="M0 6 L10 2 L20 10 L30 2 L40 10 L50 2 L60 10 L70 2 L80 10 L90 2 L100 10 L110 2 L120 10 L130 2 L140 10 L150 2 L160 10 L170 2 L180 10 L190 2 L200 6"
        stroke="var(--color-red)"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}
