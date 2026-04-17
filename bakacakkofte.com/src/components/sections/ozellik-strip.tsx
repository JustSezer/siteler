import { Truck, Flame, Clock, Leaf, ShieldCheck } from "lucide-react";

const items = [
  { icon: Truck, title: "Mobil konsept", no: "01" },
  { icon: Flame, title: "Köz ızgara", no: "02" },
  { icon: Clock, title: "Hızlı servis", no: "03" },
  { icon: Leaf, title: "Günlük taze", no: "04" },
  { icon: ShieldCheck, title: "Standart kalite", no: "05" },
];

export default function OzellikStrip() {
  return (
    <section className="relative bg-cream border-y border-ink/15 py-10 md:py-14">
      <div className="mx-auto max-w-[1280px] px-5 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-ink/15">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`flex items-center gap-4 px-4 md:px-6 ${
                i === 0 ? "sm:pl-0" : ""
              } ${i === items.length - 1 ? "lg:pr-0" : ""}`}
            >
              <span className="flex shrink-0 items-center justify-center w-11 h-11 rounded-full bg-red/10 text-red">
                <item.icon className="w-5 h-5" />
              </span>
              <div>
                <span className="mono-font text-[10px] uppercase tracking-[0.24em] text-muted font-bold">
                  {item.no}
                </span>
                <p className="display-font text-base md:text-lg font-semibold text-ink leading-tight">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
