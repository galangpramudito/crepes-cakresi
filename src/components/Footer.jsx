import React from 'react';
import { 
  MessageCircle, 
  MapPin, 
  Clock, 
  ArrowUp 
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-400 text-xs pt-10 pb-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-8 border-b border-stone-800">
          
          {/* Lapak Info */}
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-2 text-white">
              <span className="text-xl">🥞</span>
              <span className="font-display font-extrabold text-base tracking-tight">
                {STORE_INFO.brandName}
              </span>
            </div>
            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              Jajanan crepes kaki lima renyah dan gurih. Dibuat hangat dadakan langsung di gerobak untuk cemilan sore warga sekitar.
            </p>
            <p className="text-[11px] text-stone-500">
              {STORE_INFO.vendorType} &bull; Melayani Sejak {STORE_INFO.since}
            </p>
          </div>

          {/* Lokasi Lapak */}
          <div className="md:col-span-3 space-y-1.5">
            <h4 className="font-bold text-white text-[11px] uppercase tracking-wider">
              Lokasi Lapak
            </h4>
            <p className="text-stone-400 text-xs leading-relaxed">
              {STORE_INFO.location.street}
            </p>
            <p className="text-[11px] text-stone-500">
              Buka: {STORE_INFO.location.hours}
            </p>
          </div>

          {/* Kontak */}
          <div className="md:col-span-3 space-y-1.5">
            <h4 className="font-bold text-white text-[11px] uppercase tracking-wider">
              Kontak Gerobak
            </h4>
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-stone-300 hover:text-white transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp: {STORE_INFO.phone}</span>
            </a>
            <p className="text-[11px] text-stone-500">
              Bisa tanya ketersediaan menu sebelum mampir
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-5 flex items-center justify-between text-[11px] text-stone-500">
          <p>© {new Date().getFullYear()} {STORE_INFO.brandName}. Jajanan Kaki Lima.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-stone-400 hover:text-stone-200"
          >
            <span>Ke Atas</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
}
