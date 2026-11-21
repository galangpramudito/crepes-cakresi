import React from 'react';
import { 
  MapPin, 
  Clock, 
  Navigation, 
  MessageCircle, 
  ExternalLink,
  Wallet,
  Car
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export default function LocationSection() {
  const loc = STORE_INFO.location;

  return (
    <section id="lokasi" className="py-12 sm:py-16 bg-white border-b border-stone-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-1.5 mb-8">
          <span className="text-amber-800 font-bold text-xs uppercase tracking-wider block">
            Titik Mangkal Gerobak
          </span>
          <h2 className="text-2xl font-extrabold text-stone-950">
            Lokasi Lapak & Jam Mangkal
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            Lokasi gampang dicari di area taman perumahan, suasana santai untuk ngemil sore.
          </p>
        </div>

        {/* Location Details Card */}
        <div className="bg-[#FAF9F5] rounded-2xl border border-stone-200 p-5 sm:p-7">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Left Detail */}
            <div className="md:col-span-6 space-y-4">
              <div>
                <span className="text-[11px] font-bold text-amber-800 bg-amber-100/60 px-2.5 py-0.5 rounded">
                  Lapak PKL Gerobak
                </span>
                <h3 className="text-xl font-extrabold text-stone-900 mt-1">
                  {loc.spotName}
                </h3>
              </div>

              {/* Address */}
              <div className="space-y-1">
                <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
                  Alamat Lengkap
                </span>
                <div className="flex items-start gap-2 text-stone-700 text-xs sm:text-sm leading-relaxed">
                  <MapPin className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900">{loc.street}</strong>
                    <span className="text-stone-600 text-xs">{loc.district}</span>
                    <p className="text-stone-500 text-xs mt-1">{loc.landmark}</p>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="space-y-1">
                <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
                  Jam Buka Mangkal
                </span>
                <div className="flex items-start gap-2 text-stone-700 text-xs sm:text-sm">
                  <Clock className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900">{loc.hours}</strong>
                    <p className="text-[11px] text-stone-500">Mulai goreng jam 4 sore sampai adonan harian habis</p>
                  </div>
                </div>
              </div>

              {/* Payment & Parking */}
              <div className="space-y-2 pt-1 border-t border-stone-200/80 text-xs text-stone-600">
                <div className="flex items-center gap-2">
                  <Wallet className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                  <span>Pembayaran: <strong>{loc.payment}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                  <span>{loc.parking}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-2.5">
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Buka di Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>

                <a
                  href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Halo%20Mas%20Resi,%20apakah%20lapak%20di%20taman%20hari%20ini%20buka?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 text-xs font-semibold px-3.5 py-2 rounded-xl transition-all shadow-2xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Tanya Jam Buka via WA</span>
                </a>
              </div>

            </div>

            {/* Right Map Embed */}
            <div className="md:col-span-6 w-full">
              <div className="w-full h-56 sm:h-64 rounded-xl overflow-hidden border border-stone-200 bg-stone-100">
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
              </div>
              <p className="text-[11px] text-stone-400 mt-2 text-center sm:text-left">
                *Patokan: Area taman terbuka Perum Mutiara Citra Graha, Desa Bligo, Candi, Sidoarjo.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
