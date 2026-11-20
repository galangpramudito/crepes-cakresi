import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  MessageCircle, 
  Navigation, 
  CheckCircle2, 
  Store, 
  ExternalLink,
  Car,
  Wifi,
  Smartphone
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export default function LocationSection() {
  const [activeOutletIndex, setActiveOutletIndex] = useState(0);
  const activeOutlet = STORE_INFO.outlets[activeOutletIndex];

  return (
    <section id="lokasi" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 text-xs sm:text-sm font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            📍 Lokasi Outlet & Jam Operasional
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">
            Kunjungi Cabang Crepes Cak Resz Terdekat
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Nikmati aroma wangi panggangan crepes langsung di tempat, atau pesan awal lewat WhatsApp untuk langsung ambil tanpa antre!
          </p>
        </div>

        {/* Outlet Switcher Tabs */}
        <div className="mt-10 flex justify-center gap-3">
          {STORE_INFO.outlets.map((outlet, idx) => (
            <button
              key={outlet.id}
              onClick={() => setActiveOutletIndex(idx)}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all ${
                activeOutletIndex === idx
                  ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/25 scale-105'
                  : 'bg-amber-50 text-stone-700 hover:bg-amber-100 border border-amber-200'
              }`}
            >
              <Store className="w-4 h-4" />
              <span>{outlet.name}</span>
            </button>
          ))}
        </div>

        {/* Active Outlet Detail Container */}
        <div className="mt-8 bg-amber-50/50 rounded-3xl border border-amber-200/80 p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Info Column */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              
              <div>
                <div className="inline-block bg-amber-500 text-stone-950 font-black text-[11px] px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                  {activeOutlet.badge}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-stone-900">
                  {activeOutlet.name}
                </h3>
              </div>

              {/* Address */}
              <div className="bg-white p-4 rounded-2xl border border-amber-100 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-xs font-bold text-stone-900 block">Alamat Lengkap:</strong>
                  <p className="text-xs sm:text-sm text-stone-600 mt-0.5 leading-relaxed">
                    {activeOutlet.address}
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="bg-white p-4 rounded-2xl border border-amber-100 flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="w-full">
                  <strong className="text-xs font-bold text-stone-900 block">Jam Operasional:</strong>
                  <div className="mt-1 text-xs sm:text-sm text-stone-600 space-y-1">
                    <div className="flex justify-between">
                      <span>Senin - Jumat:</span>
                      <strong className="text-amber-800">{activeOutlet.hoursWeekday}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Sabtu - Minggu:</span>
                      <strong className="text-amber-800">{activeOutlet.hoursWeekend}</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Facilities Checklist */}
              <div>
                <span className="text-xs font-bold uppercase text-stone-500 tracking-wider block mb-2">
                  Fasilitas Outlet:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                  {activeOutlet.facilities.map((fac, i) => (
                    <div key={i} className="flex items-center gap-1.5 bg-white/80 px-3 py-2 rounded-xl border border-amber-100">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{fac}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons for Location */}
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={activeOutlet.gmapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[180px] bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Petunjuk Arah (Google Maps)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`https://wa.me/${activeOutlet.phone.replace(/[^0-9]/g, '').replace(/^0/, '62')}?text=Halo%20Admin%20${encodeURIComponent(activeOutlet.name)},%20saya%20mau%20tanya%20menu%20dan%20lokasi`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat Cabang Ini</span>
                </a>
              </div>

            </div>

            {/* Right Map Column */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="w-full h-72 sm:h-96 lg:h-full min-h-[300px] rounded-3xl overflow-hidden border-2 border-amber-200/80 shadow-md relative bg-amber-100">
                <iframe
                  src={activeOutlet.mapEmbedSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Google Maps ${activeOutlet.name}`}
                  className="w-full h-full"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl border border-amber-200 shadow-md text-xs font-bold text-stone-800 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Buka Hari Ini ({activeOutlet.hoursWeekday})</span>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-stone-500 px-2">
                <span>Tersedia parkir kendaraan roda 2 dan roda 4</span>
                <a 
                  href={activeOutlet.gmapsUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-700 font-bold hover:underline"
                >
                  Buka Tampilan Penuh
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
