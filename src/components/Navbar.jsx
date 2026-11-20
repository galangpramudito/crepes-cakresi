import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Menu as MenuIcon, 
  X, 
  MessageCircle, 
  ChevronRight,
  Clock
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export default function Navbar({ cartCount, onOpenCart }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#tentang' },
    { name: 'Menu & Harga', href: '#menu' },
    { name: 'Lokasi Outlet', href: '#lokasi' },
    { name: 'Galeri', href: '#galeri' },
    { name: 'Ulasan', href: '#ulasan' },
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
    <header className={`sticky top-0 z-40 transition-all duration-200 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-sm py-3' 
        : 'bg-[#FAF9F5]/90 backdrop-blur-sm border-b border-stone-200/40 py-4'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          
          {/* Clean Brand Logo */}
          <a 
            href="#beranda" 
            onClick={(e) => handleNavClick(e, '#beranda')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-amber-600 flex items-center justify-center text-lg text-white font-black shadow-sm">
              🥞
            </div>
            <div>
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-stone-900 group-hover:text-amber-800 transition-colors">
                Crepes Cak Resz
              </span>
              <span className="block text-[11px] text-stone-500 font-medium">
                Krispi &bull; Manis & Gurih
              </span>
            </div>
          </a>

          {/* Minimalist Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-semibold text-stone-600 hover:text-stone-950 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Area */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Minimalist Cart Trigger */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 bg-white border border-stone-200 hover:border-stone-400 text-stone-800 px-3 py-2 rounded-xl text-xs font-semibold shadow-sm transition-all"
              title="Keranjang Pesanan"
            >
              <ShoppingBag className="w-4 h-4 text-stone-700" />
              <span className="hidden sm:inline">Pesanan</span>
              {cartCount > 0 && (
                <span className="bg-amber-600 text-white text-[11px] font-bold px-1.5 py-0.2 rounded-full min-w-[18px] text-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Direct WhatsApp Action */}
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Halo%20Crepes%20Cak%20Resz,%20saya%20mau%20pesan%20crepes!`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-stone-900 hover:bg-stone-800 text-white px-3.5 py-2 rounded-xl text-xs font-semibold transition-all shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Pesan WA</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-stone-700 hover:bg-stone-100 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 px-4 py-4 space-y-2">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between py-2 text-sm font-semibold text-stone-700 hover:text-stone-950 border-b border-stone-100 last:border-0"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </a>
            ))}
          </div>

          <div className="pt-3 flex items-center justify-between text-xs text-stone-500 bg-stone-50 p-2.5 rounded-xl border border-stone-200">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-stone-600" />
              <span>Buka Hari Ini: 14.00 - 22.30 WIB</span>
            </span>
            <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">Buka</span>
          </div>
        </div>
      )}
    </header>
  );
}
