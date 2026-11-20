import React, { useState } from 'react';
import { 
  Menu as MenuIcon, 
  X, 
  MessageCircle, 
  MapPin, 
  Clock 
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Menu & Harga', href: '#menu' },
    { name: 'Lokasi Gerobak', href: '#lokasi' },
    { name: 'Keunggulan', href: '#keunggulan' },
    { name: 'Suasana', href: '#galeri' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 70;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 py-3">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo & Info Gerobak */}
          <a 
            href="#beranda" 
            onClick={(e) => handleNavClick(e, '#beranda')}
            className="flex items-center gap-2.5"
          >
            <div className="w-9 h-9 rounded-xl bg-amber-600 text-white flex items-center justify-center text-lg font-bold shadow-sm">
              🥞
            </div>
            <div>
              <span className="font-display font-black text-lg tracking-tight text-stone-900 block leading-tight">
                Crepes Cak Resz
              </span>
              <span className="text-[11px] text-stone-500 font-medium block">
                Jajanan Gerobak Kaki Lima
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-semibold text-stone-600 hover:text-amber-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact Cak Resz via WhatsApp */}
          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Halo%20Cak%20Resz,%20apakah%20gerobak%20crepes%20sudah%20buka?`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-stone-900 hover:bg-stone-800 text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Chat Cak Resz</span>
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-100"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-200 px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block py-2 text-xs font-semibold text-stone-700 border-b border-stone-100 last:border-0"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 text-[11px] text-stone-500 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-amber-700" />
            <span>Mangkal sore: <strong>16.00 - 22.00 WIB</strong></span>
          </div>
        </div>
      )}
    </header>
  );
}
