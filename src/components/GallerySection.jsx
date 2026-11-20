import React from 'react';
import { Camera, Sparkles, Instagram } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/storeData';
import { STORE_INFO } from '../data/storeData';

export default function GallerySection() {
  return (
    <section id="galeri" className="py-16 sm:py-24 bg-gradient-to-b from-white via-amber-50/30 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 text-xs sm:text-sm font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            📸 Galeri Crepes Cak Resz
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">
            Sensasi Lezat yang Nyata di Setiap Sudut
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Intip serunya proses pemanggangan adonan di loyang putar dan lelehan topping menggoda selera kami.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <div 
              key={idx}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] border border-amber-200/80 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="bg-amber-500 text-stone-950 font-black text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  {img.tag}
                </span>
                <h3 className="text-base sm:text-lg font-bold mt-1 text-white group-hover:text-amber-200 transition-colors">
                  {img.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Social Instagram Prompt */}
        <div className="mt-10 text-center">
          <a
            href={`https://instagram.com`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 hover:opacity-90 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md transition-all"
          >
            <Instagram className="w-4 h-4" />
            <span>Tag kami di Instagram <strong>{STORE_INFO.instagramHandle}</strong></span>
          </a>
        </div>

      </div>
    </section>
  );
}
