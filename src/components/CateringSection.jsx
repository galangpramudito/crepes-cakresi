import React from 'react';
import { MessageCircle, Check, PartyPopper, Calendar, PhoneCall } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export default function CateringSection() {
  const c = STORE_INFO.catering;
  const waCateringUrl = `https://wa.me/${STORE_INFO.whatsappNumber}?text=Halo%20Mas%20Resi%20Hutomo,%20saya%20mau%20tanya%20paket%20catering%20crepes%20untuk%20acara%20saya%20di%20Sidoarjo`;

  return (
    <section id="catering" className="py-14 sm:py-20 bg-gradient-to-b from-amber-50/70 via-amber-50/40 to-white border-b border-amber-100/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Container with Warm Frame */}
        <div className="bg-white rounded-3xl border-2 border-amber-200/80 p-6 sm:p-10 shadow-lg shadow-amber-900/5 relative overflow-hidden">
          
          {/* Subtle Decorative Backdrop */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-amber-200/30 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                <PartyPopper className="w-3.5 h-3.5 text-amber-800" />
                <span>Layanan Catering & Pesanan Acara</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-stone-950 tracking-tight leading-tight">
                Punya Acara Ulang Tahun Anak, Arisan RT, atau Syukuran Warga?
              </h2>

              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Selain mangkal setiap sore di taman perumahan, <strong>Mas Resi Hutomo</strong> melayani pesanan crepes hangat dalam jumlah banyak untuk wilayah Candi & Sidoarjo. Praktis, disukai semua umur dari anak-anak hingga orang dewasa!
              </p>

              {/* Checklist */}
              <div className="space-y-2 text-xs sm:text-sm text-stone-700 pt-1">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3]" />
                  <span><strong>Pesanan Ringan:</strong> Mulai dari 20 porsi saja</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3]" />
                  <span><strong>Pilihan Rasa Campur:</strong> Bebas mix manis (cokelat, keju, oreo) & sosis gurih</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3]" />
                  <span><strong>Bisa Diantar / Live Cooking:</strong> Disajikan renyah hangat di tempat acara</span>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="pt-2">
                <a
                  href={waCateringUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-2xl shadow-md shadow-green-600/20 hover:shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Booking / Konsultasi Catering via WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Packages Cards */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
                Pilihan Paket Catering Paling Laris
              </span>

              {/* Package 1 */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50/60 p-4 rounded-2xl border border-amber-200 shadow-2xs space-y-1.5 hover:border-amber-400 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="bg-amber-600 text-white font-extrabold text-[10px] px-2 py-0.5 rounded uppercase">
                    Paket Ultah Ceria
                  </span>
                  <span className="text-base font-black text-amber-800 font-display">Rp 200.000</span>
                </div>
                <h4 className="font-bold text-sm text-stone-900">Isi 25 Porsi Manis Campur</h4>
                <p className="text-xs text-stone-600">
                  Kombinasi rasa cokelat susu, keju susu, dan oreo crumble. Favorit pesta anak!
                </p>
              </div>

              {/* Package 2 */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50/60 p-4 rounded-2xl border border-amber-200 shadow-2xs space-y-1.5 hover:border-amber-400 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="bg-stone-900 text-white font-extrabold text-[10px] px-2 py-0.5 rounded uppercase">
                    Paket Arisan & Rapat RT
                  </span>
                  <span className="text-base font-black text-amber-800 font-display">Rp 350.000</span>
                </div>
                <h4 className="font-bold text-sm text-stone-900">Isi 40 Porsi Manis & Gurih</h4>
                <p className="text-xs text-stone-600">
                  Campuran rasa manis legit + sosis keju mayo gurih. Praktis untuk konsumsi kumpul warga.
                </p>
              </div>

              <div className="text-[11px] text-stone-500 bg-stone-50 p-2.5 rounded-xl border border-stone-200/80">
                💡 <em>Pesan H-1 atau H-2 via WhatsApp Mas Resi Hutomo (0889-8905-5777) agar jadwal tidak bentrok.</em>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
