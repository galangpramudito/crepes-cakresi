import React from 'react';
import { 
  Sparkles, 
  Heart, 
  Flame, 
  Award, 
  ShoppingBag, 
  Clock,
  ShieldCheck,
  Check
} from 'lucide-react';
import { FEATURES } from '../data/storeData';

export default function Features() {
  const iconMap = {
    Sparkles: Sparkles,
    Heart: Heart,
    Flame: Flame,
    Award: Award,
    ShoppingBag: ShoppingBag,
    Clock: Clock
  };

  return (
    <section id="keunggulan" className="py-16 sm:py-24 bg-gradient-to-b from-white via-amber-50/40 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 text-xs sm:text-sm font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            ⭐ Mengapa Harus Crepes Cak Resz?
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Kelezatan Otentik dengan Standar Kualitas Juara
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Kami mendedikasikan setiap adonan crepes untuk memberikan pengalaman ngemil terbaik: renyah tahan lama, topping berkualitas premium, dan rasa yang selalu bikin kangen.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURES.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div 
                key={index}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-amber-200/70 hover:border-amber-400 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-white shadow-md shadow-amber-500/20 mb-5 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mt-2.5">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Special Detail: Resep Rahasia Crepes Cak Resz */}
        <div className="mt-14 bg-gradient-to-r from-amber-900 to-stone-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-full uppercase">
                Bukan Crepes Biasa
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-amber-100">
                Rahasia Kulit Crepes Golden Crisp yang Tahan 1 Jam
              </h3>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Kebanyakan crepes di pasaran cepat letoy dan alot saat dibawa pulang. Di Crepes Cak Resz, kami menggunakan teknik pemanggangan suhu stabil dan formula adonan khusus tanpa pengawet yang mengunci kerenyahan lebih lama.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-200">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Tanpa Pengawet</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-200">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Mentega Nabati Segar</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-200">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Cone Khusus Berpori</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 text-center">
              <div className="text-5xl mb-2">🥞</div>
              <span className="text-2xl font-black text-white font-display">100% Puas</span>
              <p className="text-xs text-stone-300 mt-1">Garansi dibuatkan ulang jika crepes gosong atau salah topping!</p>
              <a
                href="#menu"
                className="mt-4 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs px-5 py-2.5 rounded-xl shadow transition-colors"
              >
                Coba Sekarang
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
