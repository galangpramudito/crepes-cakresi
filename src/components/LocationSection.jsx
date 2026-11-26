import { STORE_INFO } from '../data/storeData';
import { waLink, hoursLabel } from '../lib/utils';
import { useOpenStatus } from '../lib/useOpenStatus';

export default function LocationSection() {
  const loc = STORE_INFO.location;
  const { isOpen, openLabel, closeLabel } = useOpenStatus();

  return (
    <section id="lokasi" className="py-20 sm:py-28 bg-cream-50 text-choco-950 border-b border-choco-200/60">
      <div className="container-page space-y-16">

        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <div className="inline-block text-xs font-black tracking-widest uppercase text-caramel-700 bg-caramel-100 px-3 py-1 rounded-md border border-caramel-200">
            Lokasi Crepes Terdekat &amp; Jam Buka
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-choco-950">
            Titik Mangkal Taman Bligo, Candi, Sidoarjo.
          </h2>
          <p className="text-base sm:text-lg text-choco-600 leading-relaxed font-normal">
            Cari crepes terdekat di Bligo, Candi, atau sekitar Sidoarjo kota? Gerobak Crepes Cak Resi mangkal setiap sore di pelataran Taman Perumahan Mutiara Citra Graha.
          </p>
        </div>

        {/* Content & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Info Card */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border-2 border-choco-200/80 shadow-md space-y-6">

            {/* Status Live */}
            <div className="flex items-center justify-between pb-4 border-b border-choco-100">
              <span className="text-xs font-black uppercase tracking-wider text-choco-400">Status Gerobak:</span>
              <span className={`inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full ${isOpen ? 'bg-caramel-100 text-caramel-800' : 'bg-choco-100 text-choco-600'
                }`}>
                <span className={`h-2 w-2 rounded-full ${isOpen ? 'bg-caramel-500 animate-pulse' : 'bg-choco-400'}`} />
                <span>{isOpen ? `Sedang Buka (s/d ${closeLabel} WIB)` : `Buka Sore ${openLabel} WIB`}</span>
              </span>
            </div>

            {/* List Details (Zero SVG) */}
            <div className="space-y-4 text-sm">
              <div>
                <span className="block text-xs font-black uppercase tracking-wider text-caramel-700">Nama Titik:</span>
                <strong className="block text-base text-choco-950 pt-0.5">{loc.spotName}</strong>
              </div>

              <div>
                <span className="block text-xs font-black uppercase tracking-wider text-caramel-700">Alamat Lengkap:</span>
                <p className="text-choco-700 pt-0.5">{loc.street}, {loc.district}</p>
                <p className="text-xs text-choco-500 italic mt-0.5">{loc.landmark}</p>
              </div>

              <div>
                <span className="block text-xs font-black uppercase tracking-wider text-caramel-700">Jam Operasional:</span>
                <p className="text-choco-950 font-bold pt-0.5">Setiap Hari &bull; {hoursLabel()} WIB</p>
                <p className="text-xs text-choco-500">Mulai mangkal jam 4 sore sampai adonan ludes.</p>
              </div>

              <div>
                <span className="block text-xs font-black uppercase tracking-wider text-caramel-700">Metode Pembayaran:</span>
                <p className="text-choco-950 font-bold pt-0.5">{loc.payment} (Bisa scan barcode langsung di gerobak)</p>
              </div>

              <div>
                <span className="block text-xs font-black uppercase tracking-wider text-caramel-700">Parkir:</span>
                <p className="text-choco-700 pt-0.5">{loc.parking}</p>
              </div>

              {loc.nearbyAreas && (
                <div>
                  <span className="block text-xs font-black uppercase tracking-wider text-caramel-700 mb-1.5">
                    Dekat Dari Wilayah:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {loc.nearbyAreas.map((area) => (
                      <span
                        key={area}
                        className="text-[11px] font-semibold text-choco-700 bg-cream-100 border border-choco-200/70 px-2.5 py-1 rounded-full"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons (Zero SVG) */}
            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={loc.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-choco-950 hover:bg-choco-900 text-white font-display text-xs sm:text-sm font-black uppercase tracking-wider py-3.5 px-4 rounded-xl transition-all shadow"
              >
                <span>Buka Petunjuk Arah di Google Maps</span>
                <span aria-hidden="true">&rarr;</span>
              </a>

              <a
                href={waLink('Halo Mas Resi Hutomo, apakah gerobak di taman hari ini buka?')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-caramel-50 hover:bg-caramel-100 text-caramel-800 font-display text-xs sm:text-sm font-black uppercase tracking-wider py-3 px-4 rounded-xl border border-caramel-300 transition-all text-center"
              >
                <span>Tanya Jam Buka Hari Ini via WA</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

          </div>

          {/* Embedded Google Map (Clean, Full Control) */}
          <div className="lg:col-span-7 h-80 sm:h-96 lg:h-[480px] rounded-3xl overflow-hidden border-2 border-choco-200/80 shadow-md relative bg-choco-100">
            <iframe
              src={loc.mapEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi Crepes Cak Resi di Taman Perumahan Mutiara Citra Graha Candi Sidoarjo"
              className="w-full h-full"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
