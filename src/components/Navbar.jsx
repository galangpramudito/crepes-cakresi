import { useEffect, useState } from 'react';
import { STORE_INFO } from '../data/storeData';
import { waLink, hoursLabel } from '../lib/utils';
import { useOpenStatus } from '../lib/useOpenStatus';

const NAV_LINKS = [
  { name: 'Menu & Harga', href: '#menu' },
  { name: 'Catering Acara', href: '#catering' },
  { name: 'Tentang Lapak', href: '#tentang' },
  { name: 'Lokasi', href: '#lokasi' },
  { name: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isOpen, openLabel, closeLabel } = useOpenStatus();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled || open
          ? 'bg-choco-950/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
          : 'bg-gradient-to-b from-choco-950/90 via-choco-950/50 to-transparent py-4 sm:py-5'
        }`}
    >
      <div className="container-page flex items-center justify-between gap-4">
        {/* Brand */}
        <a
          href="#beranda"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 group"
        >
          <div className="h-10 w-10 rounded-xl bg-caramel-600 flex items-center justify-center font-display font-black text-white text-lg tracking-wider border border-caramel-400/40 group-hover:scale-105 transition-transform">
            CR
          </div>
          <div className="leading-tight">
            <span className="block font-display text-lg sm:text-xl font-black tracking-tight text-white group-hover:text-caramel-300 transition-colors">
              {STORE_INFO.brandName}
            </span>
            <span className="block text-[11px] font-semibold tracking-wider uppercase text-choco-300">
              Bligo &bull; Candi &bull; Est. 2013
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full" aria-label="Navigasi">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-choco-200 hover:text-white hover:bg-white/10 rounded-full transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA / Status */}
        <div className="flex items-center gap-3">
          {/* Status Dot */}
          <div className="hidden sm:flex items-center gap-2 text-xs font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-choco-200">
            <span className={`h-2 w-2 rounded-full ${isOpen ? 'bg-caramel-400' : 'bg-choco-500'}`} />
            <span>{isOpen ? `Buka s/d ${closeLabel}` : `Buka ${openLabel} WIB`}</span>
          </div>

          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 bg-caramel-600 hover:bg-caramel-500 text-white font-display text-xs font-extrabold uppercase tracking-wider px-4 py-2.5 rounded-full transition-colors border border-caramel-400/40 shadow-lg shadow-caramel-900/30"
          >
            Pesan WA &rarr;
          </a>

          {/* CSS Hamburger Button (Zero SVG) */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="lg:hidden relative h-10 w-10 flex flex-col items-center justify-center gap-1.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white focus:outline-none"
            aria-label={open ? 'Tutup navigasi' : 'Buka navigasi'}
            aria-expanded={open}
          >
            <span
              className={`block h-0.5 w-5 bg-white transition-transform duration-200 ${open ? 'rotate-45 translate-y-2' : ''
                }`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition-opacity duration-200 ${open ? 'opacity-0' : 'opacity-100'
                }`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition-transform duration-200 ${open ? '-rotate-45 -translate-y-2' : ''
                }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Zero SVG) */}
      {open && (
        <div className="fixed inset-x-0 top-[65px] bottom-0 z-40 bg-choco-950 border-t border-white/10 overflow-y-auto px-6 py-6 flex flex-col justify-between lg:hidden animate-in fade-in duration-200">
          <nav className="space-y-2" aria-label="Navigasi HP">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 px-3 border-b border-white/5 font-display text-lg font-black uppercase tracking-tight text-white hover:text-caramel-300"
              >
                {link.name} &rarr;
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-white/10 space-y-4">
            <div className="text-xs text-choco-300 space-y-1">
              <p className="font-bold text-white">{STORE_INFO.location.spotName}</p>
              <p>Setiap hari &bull; {hoursLabel()} WIB</p>
              <p>Mulai Rp 3.000 &bull; 11 Pilihan Rasa</p>
            </div>

            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-caramel-600 hover:bg-caramel-500 text-white font-display text-sm font-extrabold uppercase tracking-wider py-3.5 rounded-full"
            >
              Chat Mas Resi via WhatsApp &rarr;
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
