import { GALLERY } from '../data/storeData';
import { STORE_INFO } from '../data/storeData';

export default function GallerySection() {
  return (
    <section id="tentang" className="py-20 sm:py-28 bg-cream-100 text-choco-950 border-b border-choco-200/60">
      <div className="container-page space-y-16">

        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <div className="inline-block text-xs font-black tracking-widest uppercase text-caramel-700 bg-caramel-100 px-3 py-1 rounded-md border border-caramel-200">
            Dokumentasi & Cerita Lapak
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-choco-950">
            Dari Taman Bligo Sejak 2013.
          </h2>
          <p className="text-base sm:text-lg text-choco-600 leading-relaxed font-normal">
            Bukan franchise mall atau resep instan. Ini jajanan kaki lima otentik racikan <strong>{STORE_INFO.ownerName}</strong> yang setia menemani sore warga Candi selama lebih dari satu dekade.
          </p>
        </div>

        {/* 3 Real Truth Points (Non-AI Slop, Authentic Street Realities) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-choco-200/80 shadow-sm space-y-2">
            <span className="font-display text-2xl font-black text-caramel-600">01</span>
            <h3 className="font-display text-lg font-black uppercase text-choco-900">
              3 Loyang Putar Dadakan
            </h3>
            <p className="text-sm text-choco-600 leading-relaxed">
              Adonan diputar langsung begitu pesanan masuk. Selalu disajikan panas mengepul, kulit garing renyah tidak pernah melempem.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-choco-200/80 shadow-sm space-y-2">
            <span className="font-display text-2xl font-black text-caramel-600">02</span>
            <h3 className="font-display text-lg font-black uppercase text-choco-900">
              Adonan Fresh Tiap Hari
            </h3>
            <p className="text-sm text-choco-600 leading-relaxed">
              Adonan tepung, susu, dan telur segar diracik harian. Tanpa bahan pengawet. Setiap malam adonan habis bersih.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-choco-200/80 shadow-sm space-y-2">
            <span className="font-display text-2xl font-black text-caramel-600">03</span>
            <h3 className="font-display text-lg font-black uppercase text-choco-900">
              Harga Jujur & Bersahabat
            </h3>
            <p className="text-sm text-choco-600 leading-relaxed">
              Mulai Rp 3.000, ramah untuk anak-anak sekolah yang lagi main di taman, remaja nongkrong, hingga konsumsi keluarga.
            </p>
          </div>
        </div>

        {/* Real Photo Grid: 4 Photos (Zero SVG) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GALLERY.map((img, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-choco-900 border-2 border-choco-200/60 shadow-md"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-choco-950 via-choco-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-display text-sm font-black uppercase tracking-wide">
                  {img.title}
                </p>
                <p className="text-xs text-choco-200/90 line-clamp-1">
                  {img.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
