import { STORE_INFO } from '../data/storeData';
import { CATERING_PACKAGES } from '../data/menuData';
import { formatRupiah, waLink } from '../lib/utils';

export default function CateringSection() {
  return (
    <section id="catering" className="py-20 sm:py-28 bg-choco-950 text-white relative overflow-hidden border-b border-white/10">

      {/* Subtle Warm Backdrop Lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-caramel-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-page relative z-10 space-y-16">

        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <div className="inline-block text-xs font-black tracking-widest uppercase text-caramel-300 bg-white/10 border border-white/15 px-3 py-1 rounded-md">
            Catering Crepes Sidoarjo &amp; Live Cooking
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Hadirkan Panggangan Crepes di Acara Kamu.
          </h2>
          <p className="text-base sm:text-lg text-choco-200 leading-relaxed font-normal">
            Cari catering crepes terbaik di Sidoarjo? Mas Resi siap bawa kompor loyang putar dan masak langsung (<em>live cooking</em>) untuk ulang tahun anak, arisan RT/RW, hingga resepsi di seluruh Candi &amp; Sidoarjo.
          </p>
        </div>

        {/* Feature Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Real Photo: Live Cooking in Banquet Hall */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl aspect-[4/5] bg-choco-900">
              <img
                src={STORE_INFO.images.catering}
                alt="Mas Resi melayani catering live cooking crepes enak dan terbaik di acara resepsi Sidoarjo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-choco-950 via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-xs font-black uppercase tracking-wider text-caramel-300 bg-black/40 px-2.5 py-1 rounded inline-block">
                  Dokumentasi Asli Acara
                </span>
                <p className="font-display text-lg font-black leading-snug">
                  Mas Resi Live Cooking di Acara Resepsi Sidoarjo
                </p>
                <p className="text-xs text-choco-200">
                  Tamu bisa request rasa langsung di depan kompor panas
                </p>
              </div>
            </div>
          </div>

          {/* Details & Packages */}
          <div className="lg:col-span-7 space-y-8">

            {/* Practical Notes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <span className="block font-display text-2xl font-black text-caramel-300">Min. 20</span>
                <span className="block text-xs font-bold uppercase tracking-wider text-choco-200">Porsi Minimal</span>
                <p className="text-xs text-choco-300 pt-1">Bisa pesan jumlah kecil untuk arisan keluarga</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <span className="block font-display text-2xl font-black text-caramel-300">Live</span>
                <span className="block text-xs font-bold uppercase tracking-wider text-choco-200">Masak di Lokasi</span>
                <p className="text-xs text-choco-300 pt-1">Atau diantar hangat dalam kemasan siap santap</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <span className="block font-display text-2xl font-black text-caramel-300">11 Rasa</span>
                <span className="block text-xs font-bold uppercase tracking-wider text-choco-200">Bebas Campur</span>
                <p className="text-xs text-choco-300 pt-1">Tamu bebas pilih rasa manis atau favoritnya</p>
              </div>
            </div>

            {/* Packages Box */}
            <div className="space-y-4">
              <h3 className="font-display text-xl font-black uppercase tracking-wider text-white">
                Pilihan Paket Paling Laris:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CATERING_PACKAGES.map((pkg) => (
                  <div
                    key={pkg.id}
                    className="p-5 rounded-2xl bg-white/5 border border-white/15 space-y-2 hover:border-caramel-400 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-wider text-caramel-300">
                        {pkg.portions} Porsi
                      </span>
                      <span className="font-display text-xl font-black text-white">
                        {formatRupiah(pkg.price)}
                      </span>
                    </div>
                    <h4 className="font-display text-lg font-black text-white">
                      Paket {pkg.name}
                    </h4>
                    <p className="text-xs text-choco-300">
                      {pkg.desc}. Sudah termasuk kemasan corong praktis.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA to WhatsApp Catering Booking (Zero SVG) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={waLink('Halo Mas Resi Hutomo, saya mau konsultasi jadwal paket catering crepes untuk acara di Sidoarjo.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-caramel-600 hover:bg-caramel-500 text-white font-display text-sm font-extrabold uppercase tracking-wider px-7 py-4 rounded-full transition-all shadow-xl shadow-caramel-950/60 border border-caramel-400/40"
              >
                <span>Tanya Jadwal Catering via WhatsApp</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
              <span className="text-xs text-choco-300 text-center sm:text-left">
                Pesan H-1 atau H-2 via WhatsApp agar jadwal tidak bentrok.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
