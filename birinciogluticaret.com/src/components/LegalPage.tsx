import { site } from "@/data/site";

export default function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="container-x py-12 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-black mb-6">{title}</h1>
      <div className="prose-ish space-y-4 text-[var(--muted)] leading-relaxed">
        {children}
        <hr className="my-6 border-[var(--border)]" />
        <p className="text-sm">
          Sorularınız için: <a href={`mailto:${site.email}`} className="text-[var(--brand)]">{site.email}</a> · {site.phone1}
        </p>
      </div>
    </div>
  );
}
