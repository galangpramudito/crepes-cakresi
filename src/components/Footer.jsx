import React from 'react';
import { 
  MessageCircle, 
  MapPin, 
  Clock, 
  ArrowUp, 
  User, 
  Sparkles,
  Award
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 text-xs pt-14 pb-10 border-t-2 border-amber-500/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-stone-800">
          
          {/* Brand Info & Local SEO Description */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-600 to-amber-400 text-white flex items-center justify-center text-xl font-bold shadow-md">
                🥞
              </div>
              <div>
                <span className="font-display font-black text-xl text-white tracking-tight block">
                  {STORE_INFO.brandName}
                </span>
                <span className="text-[11px] text-amber-400 font-bold block">
                  Crepes Enak & Terbaik di Sidoarjo
                </span>
              </div>
            </div>

            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              Rekomendasi <strong>crepes terdekat</strong> dan <strong>crepes Bligo Sidoarjo</strong> khas Mas Resi Hutomo. Pilihan <strong>crepes terbaik Sidoarjo</strong> dengan tekstur renyah keemasan, topping berlimpah, dan harga merakyat sejak 2013.
            </p>

            <div className="text-[11px] text-stone-400 pt-1 flex items-center gap-2">
              <span className="bg-stone-900 border border-stone-800 text-amber-300 font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                <span>Pemilik: {STORE_INFO.ownerName}</span>
              </span>
              <span className="bg-stone-900 border border-stone-800 text-stone-300 font-bold px-3 py-1 rounded-full">
                Sejak {STORE_INFO.since}
              </span>
            </div>
          </div>

          {/* Lokasi Mangkal & Area Layanan */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Lokasi & Area Layanan
            </h4>
            <div className="bg-stone-900/80 p-3.5 rounded-2xl border border-stone-800 space-y-1">
              <strong className="text-amber-400 block text-xs">
                {STORE_INFO.location.spotName}
              </strong>
              <p className="text-stone-300 text-xs leading-relaxed">
                {STORE_INFO.location.street}
              </p>
              <p className="text-stone-400 text-[11px]">
                {STORE_INFO.location.district}
              </p>
              <p className="text-[11px] text-stone-500 pt-1 border-t border-stone-800 mt-2">
                Buka: <strong>{STORE_INFO.location.hours}</strong>
              </p>
            </div>
          </div>

          {/* Kontak & Catering */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Pemesanan & Catering Acara
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Halo%20Mas%20Resi,%20saya%20mau%20tanya%20menu%20dan%20pesanan%20crepes`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-700/30 border border-emerald-600/50 hover:bg-emerald-700/50 text-emerald-300 font-bold px-3.5 py-2 rounded-xl transition-colors w-full"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: {STORE_INFO.phone}</span>
              </a>
              <p className="text-[11px] text-stone-500 leading-snug">
                Melayani pesanan PKL harian dan paket catering crepes untuk ulang tahun anak, arisan RT, dan syukuran di Sidoarjo.
              </p>
            </div>
          </div>

        </div>

        {/* Local SEO Keyword Tag Cloud Strip */}
        <div className="py-4 border-b border-stone-800/60 flex flex-wrap gap-2 items-center text-[11px] text-stone-500">
          <span className="font-bold text-stone-400">Pencarian Terkait:</span>
          <span className="hover:text-amber-400 transition-colors">Crepes Terdekat</span> &bull;
          <span className="hover:text-amber-400 transition-colors">Crepes Bligo Sidoarjo</span> &bull;
          <span className="hover:text-amber-400 transition-colors">Crepes Enak Sidoarjo</span> &bull;
          <span className="hover:text-amber-400 transition-colors">Crepes Terbaik Sidoarjo</span> &bull;
          <span className="hover:text-amber-400 transition-colors">Crepes Candi Sidoarjo</span> &bull;
          <span className="hover:text-amber-400 transition-colors">Catering Crepes Sidoarjo</span>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} <strong>{STORE_INFO.brandName}</strong> (Mas Resi Hutomo). Pilihan Crepes Terdekat, Enak, dan Terbaik di Candi, Sidoarjo.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-stone-400 hover:text-amber-400 transition-colors bg-stone-900 px-3 py-1.5 rounded-xl border border-stone-800"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
