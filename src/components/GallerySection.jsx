import React from 'react';
import { GALLERY_IMAGES } from '../data/storeData';
import { STORE_INFO } from '../data/storeData';
import { Instagram } from 'lucide-react';

export default function GallerySection() {
  return (
    <section id="galeri" className="py-16 sm:py-20 bg-[#FAF9F5] border-b border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-2">
          <span className="text-amber-800 font-bold text-xs uppercase tracking-wider block">
            Dokumentasi
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950">
            Galeri Suasana & Panggangan
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            Momen proses live-cooking adonan crepes emas dan kreasi topping favorit pelanggan.
          </p>
        </div>

        {/* 4 Clean Curated Photos Grid */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.slice(0, 4).map((img, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl overflow-hidden border border-stone-200 shadow-sm group"
            >
              <div className="aspect-square overflow-hidden bg-stone-100">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-3">
                <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block">
                  {img.tag}
                </span>
                <p className="text-xs font-semibold text-stone-800 truncate mt-0.5">
                  {img.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Link Strip */}
        <div className="mt-8 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors"
          >
            <Instagram className="w-3.5 h-3.5 text-stone-500" />
            <span>Ikuti keseharian kami di Instagram <strong>{STORE_INFO.instagramHandle}</strong></span>
          </a>
        </div>

      </div>
    </section>
  );
}
