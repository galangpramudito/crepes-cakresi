import React from 'react';
import { MessageCircle, Check, Users, Sparkles, PartyPopper } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export default function CateringSection() {
  const c = STORE_INFO.catering;

  const waCateringUrl = `https://wa.me/${STORE_INFO.whatsappNumber}?text=Halo%20Mas%20Resi%20Hutomo,%20saya%20mau%20tanya%20pesanan%20catering%20crepes%20untuk%20acara%20saya%20di%20Sidoarjo`;

  return (
    <section id="catering" className="py-12 sm:py-16 bg-[#FAF9F5] border-b border-stone-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                <PartyPopper className="w-3.5 h-3.5 text-amber-800" />
                <span>Layanan Catering & Pesanan Acara</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950">
                Punya Acara Arisan, Ultah, atau Rapat Warga?
              </h2>

              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Selain mangkal di taman perumahan, Mas Resi Hutomo juga melayani pesanan crepes partai sedang/besar untuk arisan RT/RW, ulang tahun anak, acara sekolah, atau kumpul keluarga di Candi & Sidoarjo.
              </p>

              <div className="space-y-2 text-xs text-stone-700 pt-1">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Minimal Pesanan Ringan:</strong> Mulai dari 20 porsi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Pilihan Rasa Campur:</strong> Bebas pilih varian manis (cokelat/keju/oreo) & sosis gurih</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Bisa Diantar / Live Cooking:</strong> Disajikan hangat sesuai kesepakatan</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={waCateringUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Tanya / Booking Catering via WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Card Summary */}
            <div className="md:col-span-5 bg-[#FAF9F5] p-5 rounded-xl border border-stone-200 space-y-3">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
                Paket Favorit Acara
              </span>
              
              <div className="bg-white p-3 rounded-lg border border-stone-200 space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <strong className="text-stone-900">Paket Ultah (25 Porsi)</strong>
                  <span className="text-amber-800 font-extrabold font-display">Rp 200.000</span>
                </div>
                <p className="text-[11px] text-stone-500">Kombinasi rasa cokelat susu, keju susu, dan oreo</p>
              </div>

              <div className="bg-white p-3 rounded-lg border border-stone-200 space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <strong className="text-stone-900">Paket Arisan (40 Porsi)</strong>
                  <span className="text-amber-800 font-extrabold font-display">Rp 350.000</span>
                </div>
                <p className="text-[11px] text-stone-500">Campur manis & sosis gurih untuk warga/tamu</p>
              </div>

              <p className="text-[11px] text-stone-500 italic pt-1">
                *Hubungi Mas Resi Hutomo (0889-8905-5777) minimal H-1 atau H-2 sebelum acara.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
