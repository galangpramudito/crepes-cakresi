import React from 'react';
import { 
  MapPin, 
  Clock, 
  ArrowRight, 
  MessageCircle, 
  Check, 
  Store,
  CalendarCheck
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export default function Hero() {
  return (
    <section id="beranda" className="pt-8 pb-14 sm:pt-12 sm:pb-16 bg-[#FAF9F5] border-b border-stone-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Text */}
          <div className="md:col-span-7 space-y-4 text-center md:text-left">
            
            {/* Status Mangkal Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-stone-200 px-3 py-1 rounded-full text-xs font-medium text-stone-700 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Di Taman Perum Mutiara Citra Graha, Desa Bligo, Candi - Sidoarjo</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 tracking-tight leading-[1.2]">
              Crepes Renyah & Gurih <br />
              <span className="text-amber-800">Khas Mas Resi Hutomo</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
              Melayani warga Candi Sidoarjo <strong>sejak 2013</strong>. Kualitas rasa terjaga, kulit garing keemasan dengan topping cokelat & keju melimpah. Cocok untuk cemilan sore santai di taman maupun pesanan catering acara warga!
            </p>

            {/* 3 Quick Highlights */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-y-2 gap-x-4 text-xs font-semibold text-stone-700 pt-1">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-amber-700 stroke-[2.5]" />
                <span>Beroperasi Sejak 2013</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-amber-700 stroke-[2.5]" />
                <span>Mulai Rp 7.000 (Semua Umur)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-amber-700 stroke-[2.5]" />
                <span>Lapak PKL & Layanan Catering</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 pt-2">
              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-800 hover:bg-amber-900 text-white font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-xs"
              >
                <span>Lihat Menu & Harga</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#catering"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 font-semibold px-4 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-2xs"
              >
                <CalendarCheck className="w-4 h-4 text-amber-800" />
                <span>Pesan Catering Acara</span>
              </a>
            </div>

          </div>

          {/* Right Product Card */}
          <div className="md:col-span-5">
            <div className="bg-white rounded-2xl border border-stone-200 p-4 shadow-sm space-y-3">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 relative">
                <img 
                  src="https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=600&q=80" 
                  alt="Crepes Cokelat Keju Mas Resi Hutomo"
                  className="w-full h-full object-cover" 
                />
                <span className="absolute bottom-2.5 left-2.5 bg-stone-900/80 backdrop-blur text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  Favorit Warga Sejak 2013
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-sm text-stone-900">Choco Cheese Spesial</h3>
                  <p className="text-[11px] text-stone-500">Cokelat meses legit + keju cheddar gurih</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-extrabold text-stone-900 font-display">Rp 11.000</span>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-stone-400" />
                  <span>Taman Perum Mutiara Citra Graha Bligo</span>
                </span>
                <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  Buka Sore
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
