import React from 'react';
import { GALLERY } from '../data/storeData';
import { STORE_INFO } from '../data/storeData';
import { Camera, Sparkles } from 'lucide-react';

export default function GallerySection() {
  return (
    <section id="galeri" className="py-14 sm:py-20 bg-warmcream-50 border-b border-amber-100/70 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <span className="inline-block bg-amber-100 text-amber-900 font-extrabold text-xs uppercase tracking-wider px-3.5 py-1 rounded-full">
            Dokumentasi & Suasana
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-stone-950 tracking-tight">
            Galeri Crepes Renyah & Panggangan
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            Intip serunya proses pembuatan crepes garing keemasan langsung di gerobak Mas Resi Hutomo.
          </p>
        </div>

        {/* 6 Curated Photos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {GALLERY.map((img, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-amber-200/80 shadow-warm hover:shadow-warm-hover hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="aspect-[4/3] overflow-hidden bg-amber-50 relative">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity" />
                <span className="absolute bottom-2.5 left-2.5 text-white text-[10px] font-bold bg-amber-600/90 backdrop-blur px-2 py-0.5 rounded">
                  Crepes Cak Resz
                </span>
              </div>
              <div className="p-3.5">
                <h4 className="text-xs sm:text-sm font-extrabold text-stone-900 truncate group-hover:text-amber-800 transition-colors">
                  {img.title}
                </h4>
                <p className="text-[11px] text-stone-500 mt-0.5 truncate">
                  {img.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
