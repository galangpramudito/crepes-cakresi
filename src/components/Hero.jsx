import { STORE_INFO } from '../data/storeData';
import { PRICE_TIERS } from '../data/menuData';
import { formatRupiah, waLink, hoursLabel } from '../lib/utils';
import { useOpenStatus } from '../lib/useOpenStatus';

export default function Hero() {
  const { isOpen, closeLabel } = useOpenStatus();

  return (
    <section id="beranda" className="relative min-h-[640px] lg:min-h-[720px] flex flex-col justify-between overflow-hidden bg-choco-950 text-white pt-24 pb-8 sm:pt-28 sm:pb-12">

      {/* Real Background Image with Atmospheric Dusk Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={STORE_INFO.images.hero}
          alt="Mas Resi Hutomo sedang melayani pembeli di lapak gerobak Taman Mutiara Citra Graha Bligo"
          fetchPriority="high"
          className="w-full h-full object-cover object-[55%_65%] filter brightness-[0.95] contrast-[1.08]"
        />

        {/* Cinematic Vignette Overlays: Keeps Mas Resi & Taman Landmark Visible While Text is 100% Readable */}
        {/* Mobile vertical gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-choco-950 via-choco-950/85 to-choco-950/60 lg:hidden" />

        {/* Desktop horizontal vignette (dark on left text area, fading toward right where Mas Resi & cart are) */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-choco-950 via-choco-950/85 to-choco-950/30" />

        {/* Top & bottom subtle blends */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-choco-950/90 via-choco-950/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-choco-950 to-transparent" />
      </div>

      {/* Main Content Area */}
      <div className="container-page relative z-10 my-auto py-6 sm:py-8">
        <div className="max-w-2xl space-y-6 text-left">

          {/* Authentic Local Tag */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-caramel-500/20 border border-caramel-400/30 text-caramel-300 text-xs font-bold tracking-widest uppercase backdrop-blur-sm">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-caramel-400 animate-pulse" />
            <span>Lapak Gerobak Sejak 2013 &bull; Taman Bligo, Candi</span>
          </div>

          {/* Heavyweight Editorial Headline */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] uppercase text-white">
            Crepes Renyah, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-caramel-300 via-caramel-400 to-caramel-200">
              Topping Gak Pelit.
            </span>
          </h1>

          {/* Direct, Honest Street Food Description */}
          <p className="text-base sm:text-lg text-choco-100/90 leading-relaxed max-w-xl font-normal">
            Racikan asli <strong>Mas Resi Hutomo</strong> langsung di atas loyang putar panas. Jajanan sore favorit warga Taman Mutiara Citra Graha Candi sejak 2013. Renyah keemasan, dimasak dadakan mulai <strong className="text-white underline decoration-caramel-400 decoration-2 underline-offset-4">Rp 3.000</strong>.
          </p>

          {/* Action Row (Zero SVG) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-caramel-600 hover:bg-caramel-500 text-white font-display text-sm sm:text-base font-extrabold uppercase tracking-wider px-7 py-4 rounded-full transition-all shadow-xl shadow-caramel-950/50 hover:scale-[1.02] active:scale-[0.98] border border-caramel-400/40"
            >
              <span>Pesan WhatsApp Sekarang</span>
              <span aria-hidden="true">&rarr;</span>
            </a>

            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-display text-sm sm:text-base font-bold uppercase tracking-wider px-6 py-4 rounded-full transition-all border border-white/15 backdrop-blur-sm"
            >
              <span>Lihat Menu & Harga</span>
              <span aria-hidden="true">&darr;</span>
            </a>
          </div>

          {/* Live Status Subtext */}
          <p className="text-xs text-choco-300/80 pt-1">
            {isOpen ? (
              <span className="text-caramel-300 font-bold">&bull; Lapak sedang buka di taman sampai {closeLabel} WIB</span>
            ) : (
              <span>&bull; Jam mangkal: {hoursLabel()} WIB di Taman Mutiara Citra Graha</span>
            )}
            {' '}&bull; Pembayaran Tunai & QRIS
          </p>

        </div>
      </div>

      {/* Bottom Board Strip: Direct Pricing & Generosity Note (Zero SVG) */}
      <div className="container-page relative z-10 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 p-4 sm:p-5 rounded-2xl bg-choco-900/90 border border-white/10 backdrop-blur-md">

          {/* Price Quick Look */}
          <div className="md:col-span-8 flex flex-wrap items-center justify-between sm:justify-start gap-4 sm:gap-8">
            <div className="text-xs uppercase tracking-wider text-choco-400 font-bold block sm:hidden md:block">
              Harga Lapak:
            </div>
            {PRICE_TIERS.map((tier) => (
              <div key={tier.id} className="flex items-baseline gap-2">
                <span className="text-xs font-bold text-choco-300 uppercase tracking-wide">{tier.title}:</span>
                <span className="font-display text-lg sm:text-xl font-black text-caramel-300">
                  {formatRupiah(tier.price)}
                </span>
              </div>
            ))}
          </div>

          {/* Special Banner from the cart */}
          <div className="md:col-span-4 flex items-center justify-start md:justify-end border-t md:border-t-0 md:border-l border-white/10 pt-2 md:pt-0 md:pl-4">
            <span className="text-xs font-black uppercase tracking-wider text-caramel-200 bg-caramel-500/20 border border-caramel-400/40 px-3 py-1.5 rounded-lg">
              Anak Yatim / Piatu: GRATIS
            </span>
          </div>

        </div>
      </div>

    </section>
  );
}
