import { Flame, CheckCircle2, Clock, MapPin } from "lucide-react";

const items = [
  { icon: Flame, text: "Başvurular açık · Sadece Türkiye geneli 81 il" },
  { icon: Clock, text: "3 iş günü içinde fizibilite raporu" },
  { icon: CheckCircle2, text: "Anahtar teslim paket · Tek sözleşme" },
  { icon: MapPin, text: "Karavan No. 01 · Bolu Dağı Bakacak Mevki" },
];

export default function AnnounceBar() {
  const loop = [...items, ...items, ...items];
  return (
    <div className="bg-ink text-bone overflow-hidden">
      <div className="relative flex whitespace-nowrap py-2.5">
        <div className="flex animate-[announce_50s_linear_infinite] gap-12 pr-12 will-change-transform">
          {loop.map((it, i) => (
            <span key={i} className="inline-flex items-center gap-2.5 text-xs font-bold">
              <it.icon className="w-3.5 h-3.5 text-red-soft shrink-0" />
              <span className="tracking-wide">{it.text}</span>
              <span aria-hidden className="text-red-soft ml-10">◆</span>
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes announce {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
