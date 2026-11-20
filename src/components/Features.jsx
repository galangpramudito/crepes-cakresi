import React from 'react';
import { 
  Sparkles, 
  Heart, 
  Flame, 
  BadgePercent 
} from 'lucide-react';
import { HIGHLIGHTS } from '../data/storeData';

export default function Features() {
  const iconList = [Sparkles, Heart, BadgePercent, Flame];

  return (
    <section id="keunggulan" className="py-12 sm:py-16 bg-white border-b border-stone-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-1.5 mb-8">
          <span className="text-amber-800 font-bold text-xs uppercase tracking-wider block">
            Jajanan Kaki Lima Pilihan
          </span>
          <h2 className="text-2xl font-extrabold text-stone-950">
            Kenapa Mampir ke Gerobak Cak Resz?
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            Rasa enak, porsi pas, dan harga ramah di kantong untuk santap sore.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {HIGHLIGHTS.map((item, idx) => {
            const Icon = iconList[idx] || Sparkles;
            return (
              <div 
                key={idx}
                className="bg-[#FAF9F5] p-4 rounded-xl border border-stone-200/80 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-amber-800 mb-3 shadow-xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-stone-900 text-sm">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-xs mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
