import React, { useState } from 'react';
import { Sparkles, X, ChevronRight, Tag } from 'lucide-react';

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-orange-500 text-white text-xs sm:text-sm font-medium py-2 px-3 relative z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 overflow-hidden mx-auto text-center">
          <span className="bg-white/20 text-white px-2 py-0.5 rounded-full text-[11px] font-black tracking-wide uppercase shrink-0 flex items-center gap-1">
            <Tag className="w-3 h-3" /> PROMO HARI INI
          </span>
          <p className="truncate sm:overflow-visible">
            🎉 <strong className="font-bold">Beli 3 Crepes Manis Gratis 1 Es Teh Jumbo</strong> | Diskon 10% Khusus Pelajar & Mahasiswa!
          </p>
          <a 
            href="#menu" 
            className="hidden md:inline-flex items-center underline font-bold hover:text-amber-100 transition-colors ml-1"
          >
            Pilih Menu <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-white/80 hover:text-white p-1 rounded-full hover:bg-black/10 transition-colors shrink-0"
          aria-label="Tutup banner promo"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
