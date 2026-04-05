import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://et-mangal.com";

export const metadata: Metadata = {
  title: "İletişim | Et & Mangal - Bize Ulaşın",
  description:
    "Et & Mangal ile iletişime geçin. Sorularınız, önerileriniz ve iş birliği talepleriniz için bize ulaşın.",
  alternates: {
    canonical: `${SITE_URL}/iletisim`,
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-stone-500 mb-6">
        <Link href="/" className="hover:text-red-700">Ana Sayfa</Link>
        <span className="mx-1.5 sm:mx-2">/</span>
        <span className="text-stone-700">İletişim</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">İletişim</h1>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Contact Info */}
        <div className="space-y-6">
          <p className="text-stone-600 leading-relaxed">
            Sorularınız, önerileriniz veya iş birliği talepleriniz için bize aşağıdaki
            kanallardan ulaşabilirsiniz.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-stone-800">E-posta</h3>
                <a href="mailto:info@et-mangal.com" className="text-red-700 hover:text-red-800 text-sm">
                  info@et-mangal.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-stone-800">Web Sitesi</h3>
                <a
                  href="https://ibrahiminyeri.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-700 hover:text-red-800 text-sm"
                >
                  ibrahiminyeri.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  );
}
