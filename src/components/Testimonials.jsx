import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/storeData';

export default function Testimonials() {
  return (
    <section id="ulasan" className="py-16 sm:py-24 bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 text-xs sm:text-sm font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            💬 Ulasan Jujur Pelanggan
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">
            Apa Kata Mereka Tentang Crepes Cak Resz?
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Kepuasan pelanggan adalah prioritas utama kami. Ini alasan mengapa ribuan pelanggan terus kembali ngemil crepes kami!
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS.map((testi, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-sm hover:shadow-lg transition-all duration-300 relative flex flex-col justify-between"
            >
              <Quote className="w-10 h-10 text-amber-200/80 absolute top-5 right-5 pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="text-xs font-black text-stone-800 ml-1.5">5.0 / 5.0</span>
                </div>

                {/* Comment Text */}
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed italic">
                  "{testi.comment}"
                </p>
              </div>

              {/* Author & Favorite Menu */}
              <div className="mt-6 pt-5 border-t border-amber-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={testi.avatar}
                    alt={testi.name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-amber-400/50"
                  />
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">{testi.name}</h4>
                    <span className="text-xs text-stone-500 font-medium">{testi.role}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-stone-400 block">Menu Favorit:</span>
                  <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200/50">
                    {testi.menuFavorit}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
