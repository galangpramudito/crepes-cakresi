import React from 'react';
import { 
  ArrowRight, 
  MessageCircle, 
  Check, 
  Star,
  Sparkles
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export default function Hero() {
  return (
    <section id="beranda" className="pt-10 pb-16 sm:pt-16 sm:pb-20 border-b border-stone-200/60 bg-[#FAF9F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text / Value Proposition */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            
            {/* Subtle Tag */}
            <div className="inline-flex items-center gap-2 bg-stone-100 border border-stone-200/80 px-3 py-1 rounded-full text-xs font-semibold text-stone-700">
              <span className="w-2 h-2 rounded-full bg-amber-600" />
              <span>Jajanan Crepes UMKM Khas Resep Asli</span>
            </div>

            {/* Clean, Impactful Headline */}
            <h1 className="text-3xl sm:text-5xl font-black text-stone-950 tracking-tight leading-[1.18]">
              Sensasi Crepes <span className="text-amber-700">Ekstra Renyah</span> dengan Topping Melimpah
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Dipanggang dadakan di loyang putar panas dengan formula adonan rahasia Cak Resz. Menghasilkan kulit keemasan yang garing tahan lama, berpadu puluhan varian rasa manis legit dan gurih lezat.
            </p>

            {/* Key Value Points (Clean 3 Pillars) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-xs text-stone-700 pt-1">
              <div className="flex items-center gap-1.5 font-semibold">
                <Check className="w-4 h-4 text-amber-700 stroke-[2.5]" />
                <span>100% Bahan Halal</span>
              </div>
              <div className="flex items-center gap-1.5 font-semibold">
                <Check className="w-4 h-4 text-amber-700 stroke-[2.5]" />
                <span>Harga Mulai Rp 7.000</span>
              </div>
              <div className="flex items-center gap-1.5 font-semibold">
                <Check className="w-4 h-4 text-amber-700 stroke-[2.5]" />
                <span>Selalu Hangat Dadakan</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-3">
              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-bold px-6 py-3 rounded-xl shadow-sm text-sm transition-all"
              >
                <span>Lihat Menu & Harga</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Halo%20Cak%20Resz,%20saya%20mau%20pesan%20crepes!`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 font-semibold px-5 py-3 rounded-xl text-sm transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Pesan Cepat WhatsApp</span>
              </a>
            </div>

            {/* Social Proof (Clean & Subtle) */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3 text-xs text-stone-500">
              <div className="flex items-center gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                ))}
              </div>
              <span className="font-semibold text-stone-700">4.9 / 5.0</span>
              <span>&bull;</span>
              <span>1.500+ Ulasan Pelanggan</span>
            </div>

          </div>

          {/* Right Showcase Card (Clean, Sharp Product Feature) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-4 sm:p-5 space-y-4">
              
              {/* Product Visual */}
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-stone-100">
                <img 
                  src="https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=700&q=80" 
                  alt="Crepes Cak Resz Choco Cheese"
                  className="w-full h-full object-cover" 
                />
                <span className="absolute top-3 left-3 bg-stone-900/85 backdrop-blur text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                  Menu Terlaris
                </span>
              </div>

              {/* Product Summary */}
              <div className="flex items-start justify-between gap-3 pt-1">
                <div>
                  <h3 className="font-bold text-stone-900 text-base">Choco Cheese Supreme</h3>
                  <p className="text-xs text-stone-500 mt-0.5">Cokelat lumer khas & keju parut cheddar tebal</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-base font-extrabold text-stone-900 block font-display">Rp 14.000</span>
                  <span className="text-[10px] text-amber-700 font-bold bg-amber-50 px-1.5 py-0.5 rounded">Renyah 1 Jam</span>
                </div>
              </div>

              {/* Clean Highlight Metrics */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-stone-100 text-center">
                <div className="bg-stone-50 p-2 rounded-lg">
                  <span className="block text-xs font-bold text-stone-800">50k+</span>
                  <span className="text-[10px] text-stone-500">Porsi Terjual</span>
                </div>
                <div className="bg-stone-50 p-2 rounded-lg">
                  <span className="block text-xs font-bold text-stone-800">18+</span>
                  <span className="text-[10px] text-stone-500">Pilihan Menu</span>
                </div>
                <div className="bg-stone-50 p-2 rounded-lg">
                  <span className="block text-xs font-bold text-stone-800">2 Outlet</span>
                  <span className="text-[10px] text-stone-500">Pusat & Kampus</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
