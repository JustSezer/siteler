'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Anasayfa' },
  { href: '/blog', label: 'Blog' },
  { href: '/blog/wix-ucretsiz-web-sitesi-kurma', label: 'Rehberler' },
  { href: '/blog/wix-seo-rehberi-2024', label: 'SEO' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 group"
            aria-label="Wix Destek - Anasayfaya git"
          >
            <div
              className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center"
              aria-hidden="true"
            >
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
              Wix<span className="text-primary-600">Destek</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-8"
            aria-label="Ana navigasyon"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`font-medium transition-colors text-sm ${
                    isActive
                      ? 'text-primary-600 border-b-2 border-primary-500 pb-0.5'
                      : 'text-gray-600 hover:text-primary-600'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/git/wix-start"
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm shadow-sm hover:shadow-md min-h-[44px] flex items-center"
            >
              Wix&apos;i Dene →
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2.5 rounded-lg text-gray-600 hover:text-primary-600 hover:bg-gray-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            id="mobile-menu"
            className="md:hidden border-t border-gray-100 py-4 space-y-1"
            aria-label="Mobil navigasyon"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`block font-medium py-3 px-2 rounded-lg transition-colors ${
                    isActive
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/git/wix-start"
              className="block bg-primary-500 hover:bg-primary-600 text-white font-semibold px-5 py-3 rounded-lg transition-colors text-center mt-2 min-h-[44px] flex items-center justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Wix&apos;i Dene →
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
