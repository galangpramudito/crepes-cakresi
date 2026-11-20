import React from 'react';
import { GALLERY } from '../data/storeData';
import { STORE_INFO } from '../data/storeData';

export default function GallerySection() {
  return (
    <section id="galeri" className="py-12 sm:py-16 bg-[#FAF9F5] border-b border-stone-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-1.5 mb-8">
          <span className="text-amber-800 font-bold text-xs uppercase tracking-wider block">
            Suasana Lapak
          </span>
          <h2 className="text-2xl font-extrabold text-stone-950">
            Foto Suasana & Panggangan
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            Intip proses memanggang crepes hangat langsung dari gerobak Cak Resz.
          </p>
        </div>

        {/* 4 Clean Curated Photos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {GALLERY.map((img, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl overflow-hidden border border-stone-200 shadow-2xs group"
            >
              <div className="aspect-square overflow-hidden bg-stone-100">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-2.5">
                <p className="text-xs font-bold text-stone-800 truncate">
                  {img.title}
                </p>
                <p className="text-[10px] text-stone-500 mt-0.5 truncate">
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
