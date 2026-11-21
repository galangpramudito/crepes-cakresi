import React from 'react';
import { 
  MapPin, 
  Clock, 
  ArrowRight, 
  MessageCircle, 
  Check, 
  Star,
  Sparkles,
  PartyPopper
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export default function Hero() {
  return (
    <section id="beranda" className="pt-8 pb-14 sm:pt-14 sm:pb-20 bg-gradient-to-b from-amber-50/50 via-[#FFFDF9] to-[#FFFDF9] border-b border-amber-100/70 relative overflow-hidden">
      
      {/* Decorative Warm Backlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-gradient-to-b from-amber-200/25 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Compelling Typography & Value Propostion */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-amber-200/80 px-3.5 py-1.5 rounded-full text-xs font-semibold text-amber-950 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-amber-500" />
              <span className="font-bold">Lapak PKL & Catering Terpercaya Sejak 2013</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl font-black text-stone-950 tracking-tight leading-[1.18]">
              Sensasi Crepes <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-600 to-orange-600">Renyah Keemasan</span>, Topping Melimpah!
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Cemilan sore favorit warga perumahan racikan <strong>Mas Resi Hutomo</strong>. Dipanggang dadakan langsung di gerobak dengan kulit garing keemasan, limpahan cokelat manis legit, dan sosis keju gurih. Harga ramah di kantong mulai <strong>Rp 7.000</strong>!
            </p>

            {/* Trust Signal Checkmarks */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700 font-semibold max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-xl border border-amber-100 shadow-2xs">
                <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                <span>100% Bahan Halal</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-xl border border-amber-100 shadow-2xs">
                <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                <span>Mulai Rp 7.000</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-xl border border-amber-100 shadow-2xs">
                <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                <span>Dimasak Hangat Dadakan</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-xl border border-amber-100 shadow-2xs">
                <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                <span>10+ Thn Kualitas Terjaga</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-xl border border-amber-100 shadow-2xs col-span-2 sm:col-span-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                <span>Melayani Catering Ultah & Arisan</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold px-6 py-3 rounded-2xl text-sm transition-all shadow-md shadow-amber-600/20 hover:scale-[1.02]"
              >
                <span>Lihat Menu & Harga</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Halo%20Mas%20Resi%20Hutomo,%20saya%20mau%20tanya%20pesanan%20crepes`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-5 py-3 rounded-2xl text-sm transition-all shadow-md shadow-emerald-700/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat WA Mas Resi</span>
              </a>

              <a
                href="#lokasi"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-stone-700 hover:text-stone-900 font-semibold px-4 py-3 rounded-2xl text-xs sm:text-sm transition-colors border border-stone-200 bg-white"
              >
                <MapPin className="w-4 h-4 text-amber-700" />
                <span>Lokasi Taman</span>
              </a>
            </div>

            {/* Location Notice */}
            <div className="pt-2 text-xs text-stone-500 flex items-center justify-center lg:justify-start gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0" />
              <span>Mangkal di: <strong>Taman Perum Mutiara Citra Graha, Desa Bligo, Candi - Sidoarjo</strong></span>
            </div>

          </div>

          {/* Right Column: Mouth-Watering Food Showcase Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Card Container */}
            <div className="bg-white rounded-3xl border-2 border-amber-200/80 p-4 sm:p-5 shadow-xl relative group">
              
              {/* Floating Top Badge */}
              <div className="absolute -top-3 -right-2 bg-gradient-to-r from-red-600 to-amber-600 text-white text-[11px] font-black px-3.5 py-1 rounded-full shadow-md flex items-center gap-1 z-10">
                <Sparkles className="w-3 h-3 fill-white" />
                <span>Paling Laris di Taman!</span>
              </div>

              {/* Delicious Crepe Image Preview */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-amber-50">
                <img 
                  src="https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80" 
                  alt="Crepes Cokelat Keju Mas Resi Hutomo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="bg-amber-500 text-stone-950 font-black text-[10px] px-2 py-0.5 rounded uppercase">
                    Signature Menu
                  </span>
                  <h3 className="text-lg font-extrabold mt-1">Choco Cheese Spesial</h3>
                  <p className="text-xs text-amber-100">Cokelat meses legit + parutan keju cheddar gurih</p>
                </div>
              </div>

              {/* Price & Status Bar */}
              <div className="mt-3.5 pt-3 border-t border-amber-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-stone-400 block font-medium">Harga di Lapak</span>
                  <span className="text-xl font-black text-amber-700 font-display">Rp 11.000</span>
                </div>

                <a
                  href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Halo%20Mas%20Resi,%20mau%20pesan%20Choco%20Cheese%20Spesial%20ya`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all shadow-xs flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Pesan Varian Ini</span>
                </a>
              </div>

              {/* 3 Metric Pills under Card */}
              <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-stone-100 text-center text-xs">
                <div className="bg-amber-50/70 p-2 rounded-xl border border-amber-100">
                  <strong className="block font-black text-stone-900">10+ Thn</strong>
                  <span className="text-[10px] text-stone-500">Sejak 2013</span>
                </div>
                <div className="bg-amber-50/70 p-2 rounded-xl border border-amber-100">
                  <strong className="block font-black text-stone-900">14+ Menu</strong>
                  <span className="text-[10px] text-stone-500">Pilihan Rasa</span>
                </div>
                <div className="bg-amber-50/70 p-2 rounded-xl border border-amber-100">
                  <strong className="block font-black text-stone-900">Rp 7.000</strong>
                  <span className="text-[10px] text-stone-500">Mulai Dari</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
