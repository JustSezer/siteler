export default function LcpChart() {
  const points = [
    { x: 60, y: 30, label: "Baseline", value: "4.1s" },
    { x: 160, y: 75, label: "Sprint 1", value: "3.2s" },
    { x: 260, y: 130, label: "Sprint 2", value: "2.3s" },
    { x: 360, y: 165, label: "Final", value: "1.8s" },
  ];

  const pathD = `M ${points.map((p) => `${p.x},${p.y}`).join(" L ")}`;
  const areaD = `${pathD} L ${points[points.length - 1].x},200 L ${points[0].x},200 Z`;

  return (
    <div className="relative w-full" aria-hidden="true">
      <svg viewBox="0 0 420 220" className="w-full h-auto">
        <defs>
          <linearGradient id="lcpFill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D4B878" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#D4B878" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lcpLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E7CD92" />
            <stop offset="100%" stopColor="#9DECC8" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {[50, 100, 150, 200].map((y) => (
          <line key={y} x1="40" y1={y} x2="400" y2={y} stroke="rgba(232,237,232,0.06)" strokeWidth="1" />
        ))}

        {/* Threshold line — 2.5s good CWV */}
        <line x1="40" y1="115" x2="400" y2="115" stroke="#3BCF95" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
        <text x="395" y="110" textAnchor="end" fill="#3BCF95" fontSize="9" fontFamily="ui-monospace,monospace" opacity="0.7">
          2.5s · &quot;Good&quot;
        </text>

        {/* Y-axis labels */}
        <text x="30" y="35" textAnchor="end" fill="#7A8A82" fontSize="9" fontFamily="ui-monospace,monospace">4.5s</text>
        <text x="30" y="120" textAnchor="end" fill="#7A8A82" fontSize="9" fontFamily="ui-monospace,monospace">2.5s</text>
        <text x="30" y="200" textAnchor="end" fill="#7A8A82" fontSize="9" fontFamily="ui-monospace,monospace">1.0s</text>

        {/* Area under line */}
        <path d={areaD} fill="url(#lcpFill)" />

        {/* Line */}
        <path d={pathD} stroke="url(#lcpLine)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />

        {/* Points */}
        {points.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="5" fill="#07110D" stroke={i === points.length - 1 ? "#9DECC8" : "#D4B878"} strokeWidth="2" />
            <text x={p.x} y={215} textAnchor="middle" fill="#7A8A82" fontSize="9" fontFamily="ui-monospace,monospace">
              {p.label}
            </text>
            <text x={p.x} y={p.y - 12} textAnchor="middle" fill={i === points.length - 1 ? "#9DECC8" : "#E8EDE8"} fontSize="10" fontWeight="700" fontFamily="ui-monospace,monospace">
              {p.value}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
