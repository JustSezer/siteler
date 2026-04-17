import { ForkKnifeMark } from "@/components/decor/caravan";

const items = [
  "Türkiye geneli franchise açık",
  "Anahtar teslim karavan modeli",
  "30+ yıllık usta tarifi",
  "Köz ızgarada günlük taze",
  "2 kişilik kompakt operasyon",
  "Yatırımcı başvurusu aktif",
];

export default function Ticker() {
  const loop = [...items, ...items];
  return (
    <div className="bg-ink text-bone overflow-hidden border-y border-red/30">
      <div className="relative flex whitespace-nowrap py-3">
        <div className="flex animate-[ticker_40s_linear_infinite] gap-8 pr-8 will-change-transform">
          {loop.map((it, i) => (
            <span key={i} className="inline-flex items-center gap-4 text-sm uppercase tracking-[0.24em] font-semibold">
              <ForkKnifeMark className="w-4 h-4 text-red-soft shrink-0" />
              {it}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
