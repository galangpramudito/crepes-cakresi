import { STORE_INFO } from '../data/storeData';
import { waLink, hoursLabel } from '../lib/utils';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-choco-950 text-white border-t border-white/10 pt-16 pb-12">
      <div className="container-page space-y-12">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">

          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-caramel-600 flex items-center justify-center font-display font-black text-white text-lg tracking-wider border border-caramel-400/40">
                CR
              </div>
              <div>
                <span className="block font-display text-xl font-black tracking-tight text-white">
                  {STORE_INFO.brandName}
                </span>
                <span className="block text-xs uppercase tracking-wider text-caramel-300 font-bold">
                  Kuliner Kaki Lima Sejak 2013
                </span>
              </div>
            </div>

            <p className="text-sm text-choco-300 leading-relaxed max-w-sm font-normal">
              Pilihan crepes terdekat, renyah, enak, dan terbaik racikan <strong>{STORE_INFO.ownerName}</strong> di Taman Perumahan Mutiara Citra Graha, Desa Bligo, Kecamatan Candi, Sidoarjo. Melayani lapak PKL harian dan catering live cooking acara.
            </p>

            <div className="pt-1">
              <span className="inline-block text-xs font-black uppercase tracking-wider bg-white/5 border border-white/10 text-choco-200 px-3 py-1.5 rounded-full">
                Pemilik: {STORE_INFO.ownerName} &bull; Sejak 2013
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="block text-xs font-black uppercase tracking-wider text-caramel-400">
              Navigasi Halaman:
            </span>
            <ul className="space-y-2 text-sm font-semibold text-choco-200">
              <li>
                <a href="#menu" className="hover:text-caramel-300 transition-colors">Daftar Menu & 11 Rasa &rarr;</a>
              </li>
              <li>
                <a href="#catering" className="hover:text-caramel-300 transition-colors">Layanan Catering Acara &rarr;</a>
              </li>
              <li>
                <a href="#tentang" className="hover:text-caramel-300 transition-colors">Dokumentasi Lapak &rarr;</a>
              </li>
              <li>
                <a href="#lokasi" className="hover:text-caramel-300 transition-colors">Titik Lokasi Taman Bligo &rarr;</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-caramel-300 transition-colors">Tanya Jawab (FAQ) &rarr;</a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-4 space-y-3">
            <span className="block text-xs font-black uppercase tracking-wider text-caramel-400">
              Kontak & Pemesanan:
            </span>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-sm text-choco-200">
              <p className="font-bold text-white">Lapak Taman Mutiara Citra Graha</p>
              <p className="text-xs text-choco-300">Setiap Hari &bull; {hoursLabel()} WIB</p>
              <p className="text-xs text-choco-300">WhatsApp: <strong className="text-white">{STORE_INFO.phone}</strong></p>

              <div className="pt-2">
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-caramel-600 hover:bg-caramel-500 text-white font-display text-xs font-extrabold uppercase tracking-wider py-2.5 px-3 rounded-xl transition-all"
                >
                  Chat WhatsApp Sekarang &rarr;
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar (Zero SVG) */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-choco-400">
          <p>
            &copy; {new Date().getFullYear()} <strong>{STORE_INFO.brandName}</strong> &bull; Resi Hutomo. Candi, Sidoarjo, Jawa Timur.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="text-xs font-bold uppercase tracking-wider text-choco-300 hover:text-caramel-300 transition-colors py-1 px-3 rounded bg-white/5 border border-white/10"
          >
            Kembali ke Atas &uarr;
          </button>
        </div>

      </div>
    </footer>
  );
}
