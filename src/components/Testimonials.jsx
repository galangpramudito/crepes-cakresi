import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/storeData';

export default function Testimonials() {
  return (
    <section id="ulasan" className="py-14 sm:py-20 bg-white border-b border-amber-100/70 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <span className="inline-block bg-amber-100 text-amber-900 font-extrabold text-xs uppercase tracking-wider px-3.5 py-1 rounded-full">
            Ulasan Pelanggan Setia
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-stone-950 tracking-tight">
            Apa Kata Warga Tentang Crepes Cak Resz?
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            Kualitas rasa dan keramahan Mas Resi Hutomo yang membuat warga sekitar terus kembali sejak 2013.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testi, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-[#FFFDF9] to-[#FFF9EE] p-6 rounded-3xl border border-amber-200/80 shadow-warm hover:shadow-warm-hover transition-all flex flex-col justify-between relative group"
            >
              <Quote className="w-8 h-8 text-amber-200/80 absolute top-5 right-5 pointer-events-none" />

              <div className="space-y-3">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="text-xs font-black text-stone-800 ml-1">5.0</span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                  "{testi.comment}"
                </p>
              </div>

              {/* Author & Menu */}
              <div className="mt-6 pt-4 border-t border-amber-200/70 flex items-center justify-between gap-2">
                <div>
                  <h4 className="font-extrabold text-xs sm:text-sm text-stone-900">{testi.name}</h4>
                  <span className="text-[11px] text-stone-500 font-medium">{testi.role}</span>
                </div>
                <span className="text-[10px] font-bold text-amber-800 bg-white px-2.5 py-1 rounded-lg border border-amber-200 shadow-2xs">
                  {testi.menuFavorit}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
