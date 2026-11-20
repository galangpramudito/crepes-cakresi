import React from 'react';
import { 
  Sparkles, 
  Flame, 
  Star, 
  MapPin, 
  ShoppingBag, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck,
  Award
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export default function Hero({ onOpenMenu, onOpenCart }) {
  return (
    <section id="beranda" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      
      {/* Decorative Warm Background Blobs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-amber-200/40 via-orange-100/30 to-transparent blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-40 -left-20 w-72 h-72 bg-amber-300/30 rounded-full blur-2xl -z-10 pointer-events-none" />
      <div className="absolute top-20 -right-20 w-80 h-80 bg-orange-200/30 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-300/70 text-amber-900 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-ping" />
              <Flame className="w-4 h-4 text-amber-600 fill-amber-500" />
              <span>Jajanan Crepes Krispi No. 1 Pilihan Warga</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-warm-950 leading-[1.15] tracking-tight">
              Sensasi Crepes <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-orange-500">Super Renyah</span>, Topping Melimpah!
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Nikmati kelezatan crepes resep asli <strong>Cak Resz</strong>. Dipanggang dadakan dengan kulit keemasan yang ekstra krispi, diselimuti puluhan pilihan topping manis lumer dan daging gurih melted. Murah, higienis, dan 100% Halal!
            </p>

            {/* Key Trust Signals */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm font-semibold text-stone-700 pt-1">
              <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full border border-amber-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>100% Halal LPPOM</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full border border-amber-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Harga Mulai Rp 7.000</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full border border-amber-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Live Cooking Dadakan</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-3">
              <a
                href="#menu"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-extrabold px-7 py-3.5 rounded-2xl shadow-lg shadow-amber-500/30 hover:shadow-xl hover:scale-[1.02] transition-all text-base"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Lihat Menu & Harga Lengkap</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Halo%20Cak%20Resz,%20saya%20tertarik%20mau%20pesan%20crepes!`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-2xl shadow-md hover:shadow-lg transition-all text-base"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Pesan Cepat via WhatsApp</span>
              </a>
            </div>

            {/* Social Proof & Rating Strip */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-2 overflow-hidden">
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Pelanggan" />
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Pelanggan" />
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" alt="Pelanggan" />
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Pelanggan" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-black text-stone-800 ml-1">4.9 / 5.0</span>
                </div>
                <p className="text-xs text-stone-500 font-medium">
                  Lebih dari <strong>1.500+ ulasan puas</strong> di Google Maps & Grab/GoFood
                </p>
              </div>
            </div>

          </div>

          {/* Right Visual Column (Appealing Interactive Card Mockup) */}
          <div className="lg:col-span-5 relative">
            
            {/* Glowing Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/40 to-orange-500/40 rounded-3xl blur-2xl transform rotate-3 scale-95 -z-10" />

            {/* Main Featured Crepe Card */}
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-5 border border-amber-200 shadow-2xl relative">
              
              {/* Floating Badge 1: Top Crispiness */}
              <div className="absolute -top-4 -right-3 bg-gradient-to-r from-red-600 to-orange-500 text-white font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 animate-bounce">
                <Flame className="w-3.5 h-3.5 fill-white" />
                <span>Paling Banyak Dipesan!</span>
              </div>

              {/* Crepe Image Preview */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
                <img 
                  src="https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80" 
                  alt="Crepes Cak Resz Signature Choco Cheese"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="bg-amber-500 text-stone-950 font-black text-[11px] px-2 py-0.5 rounded-md uppercase">
                    Signature Menu
                  </span>
                  <h3 className="text-lg font-bold mt-1">Choco Cheese Supreme</h3>
                  <p className="text-xs text-amber-100">Cokelat lumer + Parutan Keju Cheddar Menggunung</p>
                </div>
              </div>

              {/* Price & Quick Order Bar inside Card */}
              <div className="mt-4 pt-3 border-t border-amber-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-stone-500 block">Harga Terjangkau</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-black text-amber-600">Rp 14.000</span>
                    <span className="text-xs text-stone-400 line-through">Rp 16.000</span>
                  </div>
                </div>
                <a 
                  href="#menu"
                  className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-sm hover:shadow flex items-center gap-1 transition-colors"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Pesan Varian Ini</span>
                </a>
              </div>

              {/* Floating Floating Badges */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                <div className="bg-amber-50 border border-amber-200/80 p-2.5 rounded-xl flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-700 flex items-center justify-center font-bold text-sm">
                    ✨
                  </div>
                  <div>
                    <strong className="block text-stone-800 font-bold">Extra Crispy</strong>
                    <span className="text-[11px] text-stone-500">Tahan renyah 1 jam</span>
                  </div>
                </div>

                <div className="bg-orange-50 border border-orange-200/80 p-2.5 rounded-xl flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-orange-500/20 text-orange-700 flex items-center justify-center font-bold text-sm">
                    📍
                  </div>
                  <div>
                    <strong className="block text-stone-800 font-bold">2 Cabang</strong>
                    <span className="text-[11px] text-stone-500">Pusat & Kampus</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Highlight Stats Strip */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 bg-white/90 backdrop-blur rounded-3xl border border-amber-200/80 shadow-md">
          <div className="text-center p-2">
            <span className="block text-3xl sm:text-4xl font-black text-amber-600 font-display">50.000+</span>
            <span className="text-xs sm:text-sm font-semibold text-stone-600 mt-1 block">Crepes Terjual Puas</span>
          </div>
          <div className="text-center p-2 border-l border-amber-100">
            <span className="block text-3xl sm:text-4xl font-black text-amber-600 font-display">18+</span>
            <span className="text-xs sm:text-sm font-semibold text-stone-600 mt-1 block">Varian Manis & Gurih</span>
          </div>
          <div className="text-center p-2 border-l-0 md:border-l border-amber-100">
            <span className="block text-3xl sm:text-4xl font-black text-amber-600 font-display">2 Outlet</span>
            <span className="text-xs sm:text-sm font-semibold text-stone-600 mt-1 block">Lokasi Strategis</span>
          </div>
          <div className="text-center p-2 border-l border-amber-100">
            <span className="block text-3xl sm:text-4xl font-black text-amber-600 font-display">4.9 / 5.0</span>
            <span className="text-xs sm:text-sm font-semibold text-stone-600 mt-1 block">Rating Pelanggan</span>
          </div>
        </div>

      </div>
    </section>
  );
}
