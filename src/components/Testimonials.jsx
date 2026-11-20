import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/storeData';

export default function Testimonials() {
  return (
    <section id="ulasan" className="py-16 sm:py-20 bg-white border-b border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-2">
          <span className="text-amber-800 font-bold text-xs uppercase tracking-wider block">
            Ulasan Pelanggan
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950">
            Kata Mereka Tentang Crepes Cak Resz
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            Ulasan jujur dari pelanggan setia kami di kedua cabang.
          </p>
        </div>

        {/* 3 Clean Testimonial Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.slice(0, 3).map((testi, idx) => (
            <div
              key={idx}
              className="bg-[#FAF9F5] p-5 rounded-2xl border border-stone-200/80 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* 5 Stars */}
                <div className="flex items-center gap-0.5 text-amber-500">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  "{testi.comment}"
                </p>
              </div>

              {/* Author & Menu */}
              <div className="mt-5 pt-3.5 border-t border-stone-200/70 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs text-stone-900">{testi.name}</h4>
                  <span className="text-[11px] text-stone-500">{testi.role}</span>
                </div>
                <span className="text-[10px] font-semibold text-amber-800 bg-white px-2 py-0.5 rounded border border-stone-200">
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
