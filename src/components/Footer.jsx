import React from 'react';
import { 
  Heart, 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  MessageCircle, 
  Mail, 
  ShieldCheck, 
  ArrowUp,
  Sparkles
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-amber-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-2xl shadow-md">
                🥞
              </div>
              <div>
                <span className="font-display font-black text-2xl text-white tracking-tight">
                  {STORE_INFO.brandName}
                </span>
                <span className="block text-xs text-amber-400 font-semibold">
                  {STORE_INFO.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              UMKM jajanan crepes legendaris dengan adonan rahasia keemasan super krispi. Melayani pesanan takeaway, dine-in, hingga catering pesta & bazaar.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="bg-emerald-950 border border-emerald-700/60 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{STORE_INFO.halalCertified}</span>
              </span>
              <span className="bg-amber-950 border border-amber-700/60 text-amber-300 text-xs font-bold px-3 py-1 rounded-full">
                Est. {STORE_INFO.establishedYear}
              </span>
            </div>
          </div>

          {/* Outlets Quick Info */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider">
              Cabang Outlet Kami
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm">
              {STORE_INFO.outlets.map((outlet) => (
                <div key={outlet.id} className="bg-stone-900/80 p-3 rounded-2xl border border-stone-800">
                  <div className="flex items-center justify-between font-bold text-amber-400">
                    <span>{outlet.name}</span>
                    <span className="text-[10px] bg-stone-800 px-2 py-0.5 rounded text-stone-300">{outlet.district}</span>
                  </div>
                  <p className="text-xs text-stone-400 mt-1 leading-snug">{outlet.address}</p>
                  <p className="text-[11px] text-stone-500 mt-1">Buka: {outlet.hoursWeekday}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links & Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider">
              Kontak & Pemesanan
            </h4>

            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-stone-400 hover:text-emerald-400 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-500" />
                  <span>WhatsApp: {STORE_INFO.primaryPhone}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-stone-400 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-500" />
                  <span>Instagram: {STORE_INFO.instagramHandle}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${STORE_INFO.email}`}
                  className="flex items-center gap-2 text-stone-400 hover:text-amber-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-500" />
                  <span>{STORE_INFO.email}</span>
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="#menu"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-black text-xs py-2.5 px-4 rounded-xl shadow transition-all"
              >
                <span>Pesan Crepes Sekarang</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} <strong>{STORE_INFO.brandName}</strong>. Hak Cipta Dilindungi Undang-Undang. Bangga Mengembangkan UMKM Kuliner Indonesia 🇮🇩
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-stone-400 hover:text-amber-400 transition-colors p-2 bg-stone-900 rounded-xl border border-stone-800"
            title="Kembali ke atas"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
