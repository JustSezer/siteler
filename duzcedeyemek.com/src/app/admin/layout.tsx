import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Admin Panel", template: "%s | Admin - Düzce'de Yemek" },
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-stone-100">
      {children}
    </div>
  );
}
