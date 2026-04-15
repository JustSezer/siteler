import { Phone, MapPin } from "lucide-react";
import { site } from "@/lib/site";

export default function StickyCta() {
  return (
    <div className="sticky-cta">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-3">
        <div className="hidden sm:flex items-center gap-3 text-bone">
          <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-ember">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ember opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-ember" />
            </span>
            7/24 Açık
          </span>
          <span className="w-px h-4 bg-smoke" />
          <span className="text-[13px] text-bone-soft">Bolu Dağı · D100 Bakacak Mevki</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
          <a
            href={site.maps.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost flex-1 sm:flex-none justify-center !py-3 !px-5 !text-[13px]"
          >
            <MapPin className="w-4 h-4" />
            Yol Tarifi
          </a>
          <a
            href={`tel:${site.phones[0].value}`}
            className="btn-ember flex-1 sm:flex-none justify-center !py-3 !px-5 !text-[13px]"
          >
            <Phone className="w-4 h-4" />
            Hemen Ara
          </a>
        </div>
      </div>
    </div>
  );
}
