import { MessageCircle } from "lucide-react";
import { site } from "@/data/site";

export default function WhatsAppFab() {
  return (
    <a
      href={site.social.whatsapp}
      target="_blank"
      rel="noopener"
      aria-label="Whatsapp ile iletişim"
      className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-105 transition"
    >
      <MessageCircle size={26} />
    </a>
  );
}
