import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  MapPin, 
  Menu as MenuIcon, 
  X, 
  Phone, 
  MessageCircle, 
  Flame, 
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
    { name: 'Beranda', href: '#beranda' },
    { name: 'Menu & Harga', href: '#menu' },
    { name: 'Keunggulan', href: '#keunggulan' },
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
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-amber-100' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a 
            href="#beranda" 
            onClick={(e) => handleNavClick(e, '#beranda')}
            className="flex items-center gap-3 group"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-2xl shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              🥞
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-amber-950 group-hover:text-amber-600 transition-colors">
                  Crepes Cak Resz
                </span>
                <span className="bg-amber-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                  Original
                </span>
              </div>
              <p className="text-xs text-amber-800/80 font-medium hidden sm:block">
                Krispi • Gurih • Melimpah Sejak 2019
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-amber-50/80 border border-amber-200/60 p-1.5 rounded-full shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-1.5 text-sm font-semibold text-stone-700 hover:text-amber-600 hover:bg-white rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Cart / Order Simulator Button */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 bg-white border border-amber-200 hover:border-amber-400 text-amber-900 px-3 sm:px-4 py-2 rounded-full font-bold text-xs sm:text-sm shadow-sm hover:shadow transition-all group"
              title="Lihat Keranjang Pesanan"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 text-amber-600 group-hover:scale-110 transition-transform" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2.5 bg-red-500 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline">Pesanan</span>
            </button>

            {/* Direct WhatsApp Button */}
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Halo%20Crepes%20Cak%20Resz,%20saya%20mau%20tanya%20menu%20dan%20pesan%20crepes%20krispi!`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600 text-white px-3.5 sm:px-4 py-2 rounded-full font-bold text-xs sm:text-sm shadow-md shadow-green-600/20 hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden md:inline">Pesan WA</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-stone-700 hover:bg-amber-100 transition-colors"
              aria-label="Buka menu navigasi"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 border-b border-amber-100 shadow-xl px-4 pt-3 pb-6 mt-3 space-y-2 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-amber-100">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between px-3 py-2 text-sm font-semibold text-stone-700 hover:text-amber-700 hover:bg-amber-50 rounded-lg transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs text-stone-600 bg-amber-50/70 p-2.5 rounded-lg border border-amber-100">
              <Clock className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Buka Hari Ini: <strong>14.00 - 22.30 WIB</strong></span>
            </div>
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Halo%20Cak%20Resz,%20mau%20tanya%20menu`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-gradient-to-r from-emerald-600 to-green-500 text-white font-bold py-2.5 rounded-xl text-sm shadow flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Chat Langsung via WhatsApp ({STORE_INFO.primaryPhone})
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
