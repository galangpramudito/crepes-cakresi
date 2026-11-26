import { FLAVORS, PRICE_TIERS } from '../data/menuData';
import { STORE_INFO } from '../data/storeData';
import { formatRupiah, waLink } from '../lib/utils';

export default function MenuSection() {
  return (
    <section id="menu" className="py-20 sm:py-28 bg-cream-50 text-choco-950 border-b border-choco-200/60">
      <div className="container-page space-y-16">

        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-block text-xs font-black tracking-widest uppercase text-caramel-700 bg-caramel-100 px-3 py-1 rounded-md border border-caramel-200">
            Daftar Menu & Harga Papan Gerobak
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-choco-950">
            Pilih Berapa Rasa, <br className="hidden sm:inline" />
            Campur Sesuka Hati.
          </h2>
          <p className="text-base sm:text-lg text-choco-600 leading-relaxed max-w-2xl font-normal">
            Harga jujur langsung dari gerobak Mas Resi di Taman Mutiara Citra Graha Bligo. Mau satu rasa santai, dua rasa klasik, atau tiga rasa melimpah.
          </p>
        </div>

        {/* Real Menu Showcase: Photo Beside Price Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Column: Authentic Photo of Mas Resi Smiling with Cart Menu Board */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl overflow-hidden border-2 border-choco-200/80 bg-white shadow-lg p-4 sm:p-5">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-choco-900">
              <img
                src={STORE_INFO.images.menuPhoto}
                alt="Foto asli papan menu di gerobak Crepes Cak Resi bersama Mas Resi Hutomo"
                className="w-full h-full object-cover object-[center_35%] hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-choco-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-black uppercase tracking-wider text-caramel-300 bg-black/40 px-2 py-0.5 rounded inline-block">
                  Foto Asli Gerobak
                </span>
                <p className="font-display text-base font-black leading-snug mt-1">
                  Papan Menu Asli di Lapak Mas Resi
                </p>
                <p className="text-xs text-choco-200">
                  Taman Perumahan Mutiara Citra Graha, Desa Bligo
                </p>
              </div>
            </div>

            <div className="pt-4 px-2 space-y-1">
              <span className="block text-xs font-black uppercase tracking-wider text-caramel-700">
                Otentik & Nyata
              </span>
              <p className="text-xs text-choco-600 leading-relaxed">
                Foto langsung papan menu kuning legendaris di gerobak motor Mas Resi. Harga tetap murah merakyat sejak 2013.
              </p>
            </div>
          </div>

          {/* Right Column: 3 Price Cards in Vertical Stack */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            {PRICE_TIERS.map((tier) => {
              const isFeatured = !!tier.featured;
              const waOrderMessage = `Halo Mas Resi Hutomo, saya mau pesan crepes *${tier.title}* (${formatRupiah(tier.price)}).`;

              return (
                <div
                  key={tier.id}
                  className={`rounded-2xl p-5 sm:p-6 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-2 ${isFeatured
                    ? 'bg-choco-950 text-white border-caramel-500 shadow-xl'
                    : 'bg-white text-choco-900 border-choco-200/80 shadow-xs'
                    }`}
                >
                  <div className="space-y-1.5 max-w-sm">
                    <div className="flex items-center gap-2">
                      <span className={`text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded ${isFeatured ? 'bg-caramel-500 text-choco-950' : 'bg-caramel-100 text-caramel-800'
                        }`}>
                        {tier.flavors} Rasa
                      </span>
                      {isFeatured && (
                        <span className="text-[11px] font-bold uppercase tracking-wider text-caramel-300">
                          Paling Puas &bull; Best Value
                        </span>
                      )}
                    </div>

                    <h3 className="font-display text-2xl font-black uppercase tracking-tight">
                      {tier.title} &mdash; <span className={isFeatured ? 'text-caramel-300' : 'text-caramel-700'}>{formatRupiah(tier.price)}</span>
                    </h3>

                    <p className={`text-xs ${isFeatured ? 'text-choco-300' : 'text-choco-600'} leading-relaxed`}>
                      {tier.note}
                    </p>

                    {/* Small preview of combos */}
                    <p className={`text-[11px] font-semibold ${isFeatured ? 'text-choco-400' : 'text-choco-500'} pt-0.5`}>
                      Favorit: {tier.combos.slice(0, 3).map((c) => c.join(' + ')).join(' · ')}
                    </p>
                  </div>

                  <a
                    href={waLink(waOrderMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`shrink-0 inline-flex items-center justify-center gap-1.5 font-display text-xs font-black uppercase tracking-wider py-3 px-5 rounded-xl transition-all ${isFeatured
                      ? 'bg-caramel-500 hover:bg-caramel-400 text-choco-950'
                      : 'bg-choco-950 hover:bg-choco-900 text-white'
                      }`}
                  >
                    <span>Pesan {tier.title}</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              );
            })}

            {/* Quick Helper Note */}
            <div className="p-4 rounded-2xl bg-white border border-choco-200/70 text-xs text-choco-600 flex items-center justify-between">
              <span>Bisa titip pesan via WA sebelum berangkat ke taman agar siap pas Anda tiba.</span>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-caramel-700 hover:underline shrink-0 ml-2"
              >
                Chat WA &rarr;
              </a>
            </div>
          </div>

        </div>

        {/* 11 Flavors Clean Street Typography Grid */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-choco-200/80 shadow-md space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-choco-100 pb-4">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-caramel-700">Daftar Bahan & Topping</span>
              <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-choco-950 mt-1">
                11 Pilihan Rasa Bebas Campur
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-choco-500 font-medium">
              Sesuai daftar resmi di papan gerobak Mas Resi
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {FLAVORS.map((flavor, i) => (
              <div
                key={flavor}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-cream-50 border border-choco-200/60 hover:border-caramel-500 hover:bg-caramel-50/50 transition-colors"
              >
                <span className="font-display text-xs font-black text-caramel-700 opacity-60">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-sm sm:text-base font-extrabold text-choco-900">
                  {flavor}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Real Signboard Tribute: Anak Yatim & Piatu Gratis */}
        <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-caramel-600 via-caramel-700 to-caramel-800 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl">
            <span className="text-xs font-black tracking-widest uppercase text-caramel-200 bg-black/20 px-3 py-1 rounded-md inline-block">
              Tradisi Baik di Papan Gerobak
            </span>
            <h4 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white pt-1">
              Anak Yatim Atau Piatu: GRATIS
            </h4>
            <p className="text-sm sm:text-base text-caramel-100/90 leading-relaxed font-normal">
              Bagi adik-adik yatim atau piatu, silakan langsung datang ke lapak gerobak Mas Resi di Taman Mutiara Citra Graha. Nikmati crepes hangat renyah tanpa biaya.
            </p>
          </div>

          <a
            href={waLink('Halo Mas Resi Hutomo, saya mau tanya lokasi lapak di taman')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white hover:bg-cream-100 text-choco-950 font-display text-xs sm:text-sm font-black uppercase tracking-wider px-6 py-3.5 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            Mampir ke Lapak &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
