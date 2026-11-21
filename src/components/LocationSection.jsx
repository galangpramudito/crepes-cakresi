import React from 'react';
import { 
  MapPin, 
  Clock, 
  Navigation, 
  MessageCircle, 
  ExternalLink, 
  Wallet, 
  Car,
  Store,
  Sparkles
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export default function LocationSection() {
  const loc = STORE_INFO.location;

  return (
    <section id="lokasi" className="py-14 sm:py-20 bg-white border-b border-amber-100/70 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <span className="inline-block bg-amber-100 text-amber-900 font-extrabold text-xs uppercase tracking-wider px-3.5 py-1 rounded-full">
            Lokasi Mangkal Gerobak
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-stone-950 tracking-tight">
            Kunjungi Lapak Taman Cak Resz
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            Tempat strategis di area taman perumahan yang asri dan sejuk, pas untuk jajan sore sambil nongkrong santai.
          </p>
        </div>

        {/* Location Box */}
        <div className="bg-gradient-to-b from-[#FFFDF9] to-[#FFF9EE] rounded-3xl border-2 border-amber-200/80 p-6 sm:p-8 lg:p-10 shadow-lg shadow-amber-900/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Detail */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <span className="bg-amber-600 text-white font-extrabold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider">
                  Lapak Gerobak Kaki Lima
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-stone-950 mt-2">
                  {loc.spotName}
                </h3>
              </div>

              {/* Street Address */}
              <div className="bg-white p-4 rounded-2xl border border-amber-200/70 shadow-2xs space-y-1">
                <span className="text-xs font-extrabold text-amber-900 uppercase tracking-wider block">
                  Alamat & Patokan
                </span>
                <div className="flex items-start gap-2.5 text-stone-700 text-xs sm:text-sm leading-relaxed">
                  <MapPin className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900 text-sm">{loc.street}</strong>
                    <span className="text-stone-600 text-xs">{loc.district}</span>
                    <p className="text-stone-500 text-xs mt-1 italic">{loc.landmark}</p>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="bg-white p-4 rounded-2xl border border-amber-200/70 shadow-2xs space-y-1">
                <span className="text-xs font-extrabold text-amber-900 uppercase tracking-wider block">
                  Jam Buka Mangkal
                </span>
                <div className="flex items-start gap-2.5 text-stone-700 text-xs sm:text-sm">
                  <Clock className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 text-sm">{loc.hours}</strong>
                    <p className="text-xs text-stone-500 mt-0.5">Mulai mangkal jam 4 sore sampai adonan harian habis</p>
                  </div>
                </div>
              </div>

              {/* Payment & Facilities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                <div className="bg-white p-3 rounded-xl border border-amber-200/70 flex items-center gap-2">
                  <Wallet className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Bayar: <strong>{loc.payment}</strong></span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-amber-200/70 flex items-center gap-2">
                  <Car className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{loc.parking}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[180px] bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-extrabold text-xs sm:text-sm py-3 px-4 rounded-2xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Buka di Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Halo%20Mas%20Resi,%20apakah%20lapak%20taman%20hari%20ini%20buka?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-2xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Tanya Jam Buka via WA</span>
                </a>
              </div>

            </div>

            {/* Right Map Embed */}
            <div className="lg:col-span-6 w-full">
              <div className="w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden border-2 border-amber-300/80 shadow-md bg-stone-100 relative">
                <iframe
                  src={loc.mapEmbedSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Peta Lokasi Taman Perum Mutiara Citra Graha Bligo Candi Sidoarjo"
                  className="w-full h-full"
                />
                
                {/* Floating Map Label */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-amber-200 text-xs font-bold text-stone-900 shadow">
                  📍 Area Taman Perum Mutiara Citra Graha
                </div>
              </div>
              <p className="text-[11px] text-stone-500 mt-2 text-center lg:text-left">
                *Patokan: Area taman terbuka di dalam Perum Mutiara Citra Graha, Desa Bligo, Candi - Sidoarjo.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
