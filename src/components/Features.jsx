import React from 'react';
import { 
  Sparkles, 
  Heart, 
  BadgePercent, 
  Clock 
} from 'lucide-react';
import { HIGHLIGHTS } from '../data/storeData';

export default function Features() {
  const iconList = [Sparkles, Heart, BadgePercent, Clock];

  return (
    <section id="keunggulan" className="py-14 sm:py-18 bg-white border-b border-amber-100/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <span className="inline-block bg-amber-100 text-amber-900 font-extrabold text-xs uppercase tracking-wider px-3.5 py-1 rounded-full">
            Kualitas & Pengalaman Sejak 2013
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-stone-950">
            Alasan Menjadi Pilihan Crepes Terbaik di Sidoarjo
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            Menjaga kualitas rasa <strong>crepes enak Sidoarjo</strong> khas Mas Resi Hutomo selama lebih dari 10 tahun untuk seluruh pelanggan di Candi dan sekitarnya.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HIGHLIGHTS.map((item, idx) => {
            const Icon = iconList[idx] || Sparkles;
            return (
              <div 
                key={idx}
                className="bg-gradient-to-b from-[#FFFDF9] to-[#FFF9EE] p-5 sm:p-6 rounded-2xl border border-amber-200/80 hover:border-amber-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-amber-500/15 border border-amber-300/60 flex items-center justify-center text-amber-800 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-stone-900 text-base group-hover:text-amber-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
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
