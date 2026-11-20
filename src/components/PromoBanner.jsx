import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-stone-900 text-stone-200 text-xs py-2 px-4 border-b border-stone-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 mx-auto text-center">
          <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
            Promo Hari Ini
          </span>
          <p className="font-medium text-stone-300">
            Beli 3 Crepes Manis Gratis 1 Es Teh Jumbo &bull; Diskon 10% untuk Pelajar
          </p>
          <a 
            href="#menu" 
            className="hidden sm:inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-semibold ml-2 underline underline-offset-2"
          >
            <span>Lihat Menu</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-stone-400 hover:text-white p-0.5 transition-colors"
          aria-label="Tutup pengumuman"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
