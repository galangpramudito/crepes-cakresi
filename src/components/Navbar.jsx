import React, { useState } from 'react';
import { 
  Menu as MenuIcon, 
  X, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Sparkles,
  PartyPopper
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Menu & Harga', href: '#menu' },
    { name: 'Lokasi Taman', href: '#lokasi' },
    { name: 'Paket Catering', href: '#catering' },
    { name: 'Keunggulan', href: '#keunggulan' },
    { name: 'Galeri', href: '#galeri' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 72;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-100 shadow-xs py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo & Info Gerobak */}
          <a 
            href="#beranda" 
            onClick={(e) => handleNavClick(e, '#beranda')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-600 to-amber-500 text-white flex items-center justify-center text-xl font-bold shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              🥞
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-lg sm:text-xl tracking-tight text-stone-900 group-hover:text-amber-800 transition-colors">
                  {STORE_INFO.brandName}
                </span>
                <span className="bg-amber-100 text-amber-900 text-[10px] font-extrabold px-1.5 py-0.5 rounded-full">
                  10+ Thn
                </span>
              </div>
              <span className="text-[11px] text-stone-500 font-medium block">
                Resi Hutomo &bull; Taman Bligo Candi Sidoarjo
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 bg-amber-50/60 border border-amber-200/50 px-4 py-1.5 rounded-full">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-semibold text-stone-700 hover:text-amber-800 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact Mas Resi via WhatsApp */}
          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Halo%20Mas%20Resi%20Hutomo,%20saya%20mau%20pesan%20crepes`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm shadow-green-600/20 hover:shadow-md"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WA: {STORE_INFO.phone}</span>
              <span className="sm:hidden">Chat WA</span>
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-stone-700 hover:bg-amber-50 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-amber-100 px-4 py-3 space-y-2 animate-in slide-in-from-top duration-150">
          <div className="grid grid-cols-2 gap-1 pb-2 border-b border-stone-100">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block py-2 px-2 text-xs font-semibold text-stone-700 hover:text-amber-800 hover:bg-amber-50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 text-[11px] text-stone-500 flex items-center justify-between">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-700" />
              <span>Buka Sore: <strong>16.00 – 21.30 WIB</strong></span>
            </span>
            <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded text-[10px]">
              Taman Bligo
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
