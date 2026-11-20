import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Navigation, 
  Check, 
  Store, 
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export default function LocationSection() {
  const [activeOutletIndex, setActiveOutletIndex] = useState(0);
  const activeOutlet = STORE_INFO.outlets[activeOutletIndex];

  return (
    <section id="lokasi" className="py-16 sm:py-20 bg-white border-b border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-2">
          <span className="text-amber-800 font-bold text-xs uppercase tracking-wider block">
            Informasi Outlet
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950">
            Lokasi Cabang & Jam Buka
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            Kunjungi gerai terdekat kami untuk dine-in santai atau takeaway cepat.
          </p>
        </div>

        {/* Clean Outlet Switcher Tabs */}
        <div className="mt-8 flex justify-center gap-2">
          {STORE_INFO.outlets.map((outlet, idx) => (
            <button
              key={outlet.id}
              onClick={() => setActiveOutletIndex(idx)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeOutletIndex === idx
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'bg-stone-100 text-stone-600 hover:text-stone-900 border border-stone-200'
              }`}
            >
              <Store className="w-4 h-4" />
              <span>{outlet.name}</span>
            </button>
          ))}
        </div>

        {/* Detail Box */}
        <div className="mt-6 bg-[#FAF9F5] rounded-2xl border border-stone-200 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <span className="text-[11px] font-bold text-amber-800 bg-amber-100/60 px-2 py-0.5 rounded">
                  {activeOutlet.badge}
                </span>
                <h3 className="text-xl font-extrabold text-stone-950 mt-1.5">
                  {activeOutlet.name}
                </h3>
              </div>

              {/* Address */}
              <div className="space-y-1">
                <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
                  Alamat Lengkap
                </span>
                <div className="flex items-start gap-2 text-stone-700 text-xs sm:text-sm leading-relaxed">
                  <MapPin className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>{activeOutlet.address}</span>
                </div>
              </div>

              {/* Operating Hours Table */}
              <div className="space-y-1">
                <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
                  Jam Buka
                </span>
                <div className="bg-white p-3 rounded-xl border border-stone-200 text-xs space-y-1.5 text-stone-700">
                  <div className="flex justify-between">
                    <span>Senin - Jumat:</span>
                    <strong className="text-stone-900">{activeOutlet.hoursWeekday}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabtu - Minggu:</span>
                    <strong className="text-stone-900">{activeOutlet.hoursWeekend}</strong>
                  </div>
                </div>
              </div>

              {/* Facilities */}
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
                  Fasilitas
                </span>
                <div className="flex flex-wrap gap-1.5 text-xs text-stone-600">
                  {activeOutlet.facilities.map((fac, i) => (
                    <span key={i} className="inline-flex items-center gap-1 bg-white px-2.5 py-1 rounded-lg border border-stone-200 text-[11px]">
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span>{fac}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-2.5">
                <a
                  href={activeOutlet.gmapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Buka di Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>

                <a
                  href={`https://wa.me/${activeOutlet.phone.replace(/[^0-9]/g, '').replace(/^0/, '62')}?text=Halo%20Admin%20${encodeURIComponent(activeOutlet.name)},%20saya%20mau%20pesan%20crepes`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 text-xs font-semibold px-4 py-2.5 rounded-xl transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Chat Cabang Ini</span>
                </a>
              </div>
            </div>

            {/* Right Map Embed Column */}
            <div className="lg:col-span-6 w-full">
              <div className="w-full h-64 sm:h-80 rounded-xl overflow-hidden border border-stone-200 bg-stone-100">
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
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
