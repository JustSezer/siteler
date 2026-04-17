import { MessageCircle, Instagram, Facebook } from "lucide-react";
import { site } from "@/data/site";

export default function SocialRail() {
  const items = [
    { href: site.social.whatsapp, label: "Whatsapp", Icon: MessageCircle, bg: "#25D366" },
    { href: site.social.instagram, label: "Instagram", Icon: Instagram, bg: "#E4405F" },
    { href: site.social.facebook, label: "Facebook", Icon: Facebook, bg: "#1877F2" },
  ];

  return (
    <div className="fixed right-3 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2">
      {items.map(({ href, label, Icon, bg }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener"
          aria-label={label}
          style={{ background: bg }}
          className="w-10 h-10 rounded-full text-white flex items-center justify-center shadow-md hover:scale-110 transition"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
}
