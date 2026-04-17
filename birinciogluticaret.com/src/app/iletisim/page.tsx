"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, Instagram, Facebook } from "lucide-react";
import { site } from "@/data/site";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Ad: ${form.name}\nE-posta: ${form.email}\nTelefon: ${form.phone}\n\n${form.message}`
    );
    window.location.href = `mailto:${site.email}?subject=İletişim Formu&body=${body}`;
    setSent(true);
  };

  return (
    <div className="container-x py-12">
      <h1 className="text-3xl md:text-4xl font-black">İletişim</h1>
      <p className="text-[var(--muted)] mt-2 max-w-xl">
        Ürünlerimiz, fiyatlarımız veya toptan satış için bize ulaşın. En kısa sürede dönüş yaparız.
      </p>

      <div className="grid gap-8 lg:grid-cols-2 mt-10">
        <div className="space-y-5">
          <div className="card p-5 flex gap-4">
            <div className="w-12 h-12 rounded-full bg-[var(--brand)] text-white flex items-center justify-center shrink-0">
              <Phone size={20} />
            </div>
            <div>
              <div className="font-semibold">Telefon</div>
              <a href={`tel:${site.phone1Tel}`} className="block text-[var(--muted)] hover:text-[var(--brand)]">{site.phone1}</a>
              <a href={`tel:${site.phone2Tel}`} className="block text-[var(--muted)] hover:text-[var(--brand)]">{site.phone2}</a>
            </div>
          </div>

          <a href={site.social.whatsapp} target="_blank" rel="noopener" className="card p-5 flex gap-4 hover:border-[#25D366]">
            <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
              <MessageCircle size={20} />
            </div>
            <div>
              <div className="font-semibold">Whatsapp Destek</div>
              <div className="text-[var(--muted)] text-sm">Anlık yanıt için tıklayın</div>
            </div>
          </a>

          <div className="card p-5 flex gap-4">
            <div className="w-12 h-12 rounded-full bg-[var(--brand)] text-white flex items-center justify-center shrink-0">
              <Mail size={20} />
            </div>
            <div>
              <div className="font-semibold">E-posta</div>
              <a href={`mailto:${site.email}`} className="text-[var(--muted)] hover:text-[var(--brand)] break-all">{site.email}</a>
            </div>
          </div>

          <div className="card p-5 flex gap-4">
            <div className="w-12 h-12 rounded-full bg-[var(--brand)] text-white flex items-center justify-center shrink-0">
              <MapPin size={20} />
            </div>
            <div>
              <div className="font-semibold">Adres</div>
              <div className="text-[var(--muted)]">{site.address}</div>
            </div>
          </div>

          <div className="flex gap-3">
            <a href={site.social.instagram} target="_blank" rel="noopener" className="w-11 h-11 rounded-full border border-[var(--border)] flex items-center justify-center hover:bg-[var(--brand)] hover:text-white hover:border-[var(--brand)]">
              <Instagram size={18} />
            </a>
            <a href={site.social.facebook} target="_blank" rel="noopener" className="w-11 h-11 rounded-full border border-[var(--border)] flex items-center justify-center hover:bg-[var(--brand)] hover:text-white hover:border-[var(--brand)]">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div>
          <form onSubmit={submit} className="card p-6 space-y-4">
            <h2 className="text-xl font-bold">Bize yazın</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <input required placeholder="Adınız Soyadınız" value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--brand)]" />
              <input required type="email" placeholder="E-posta" value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--brand)]" />
            </div>
            <input placeholder="Telefon (opsiyonel)" value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--brand)]" />
            <textarea required rows={6} placeholder="Mesajınız" value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--brand)] resize-none" />
            <button type="submit" className="btn btn-primary w-full">
              <Send size={18} /> Gönder
            </button>
            {sent && (
              <p className="text-sm text-green-700 text-center">
                Tebrikler! Mesajınız iletildi, sizinle en kısa sürede iletişime geçeceğiz.
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="mt-10 card overflow-hidden">
        <iframe
          title="Harita"
          src="https://www.google.com/maps?q=Pazarkap%C4%B1%20Kalkano%C4%9Flu%20Caddesi%20No:35%20Ortahisar%20Trabzon&output=embed"
          className="w-full h-[400px] border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
