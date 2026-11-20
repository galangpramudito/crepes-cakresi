import React from 'react';
import { 
  Instagram, 
  MessageCircle, 
  Mail, 
  ArrowUp 
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-400 text-xs pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-stone-800">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2 text-white">
              <span className="text-xl">🥞</span>
              <span className="font-display font-extrabold text-lg tracking-tight">
                {STORE_INFO.brandName}
              </span>
            </div>
            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              Jajanan crepes renyah khas racikan resep asli Cak Resz. Pilihan menu manis dan gurih istimewa untuk santap di tempat, bawa pulang, dan pesanan acara.
            </p>
            <div className="flex items-center gap-2 pt-1 text-[11px]">
              <span className="bg-stone-800 text-stone-300 px-2.5 py-1 rounded">
                100% Halal
              </span>
              <span className="bg-stone-800 text-stone-300 px-2.5 py-1 rounded">
                Est. {STORE_INFO.establishedYear}
              </span>
            </div>
          </div>

          {/* Outlets */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Cabang Outlet
            </h4>
            <div className="space-y-2 text-xs">
              {STORE_INFO.outlets.map((outlet) => (
                <div key={outlet.id} className="text-stone-400">
                  <strong className="text-stone-200 block">{outlet.name}</strong>
                  <p className="text-[11px] text-stone-500">{outlet.address}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Socials */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Kontak
            </h4>
            <div className="space-y-1.5 text-xs">
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
                <span>WA: {STORE_INFO.primaryPhone}</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-stone-400" />
                <span>Instagram: {STORE_INFO.instagramHandle}</span>
              </a>
              <a
                href={`mailto:${STORE_INFO.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-stone-400" />
                <span>{STORE_INFO.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-500">
          <p>© {new Date().getFullYear()} {STORE_INFO.brandName}. Seluruh Hak Cipta Dilindungi.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-stone-300 transition-colors"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
}
