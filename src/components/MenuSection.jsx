import React, { useState, useMemo } from 'react';
import { MessageCircle, Star, Sparkles } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, TOPPINGS_EXTRA } from '../data/menuData';
import { STORE_INFO } from '../data/storeData';

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return MENU_ITEMS;
    return MENU_ITEMS.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  const formatRupiah = (val) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(val);
  };

  const getWaOrderUrl = (itemName) => {
    const text = `Halo Cak Resz, mau pesan 1x *${itemName}* ya. Nanti saya ambil ke gerobak. Terima kasih!`;
    return `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="menu" className="py-12 sm:py-16 bg-[#FAF9F5] border-b border-stone-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-1.5 mb-8">
          <span className="text-amber-800 font-bold text-xs uppercase tracking-wider block">
            Papan Menu & Harga
          </span>
          <h2 className="text-2xl font-extrabold text-stone-950">
            Daftar Menu Gerobak Cak Resz
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            Harga bersahabat, porsi pas, bisa pesan langsung di lapak atau titip pesan lewat WhatsApp.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-1.5 overflow-x-auto pb-2 scrollbar-none mb-6">
          {MENU_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-all ${
                  isSelected
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs hover:border-stone-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Photo & Badge */}
                <div className="relative aspect-[16/10] bg-stone-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {item.isPopular && (
                    <span className="absolute top-2 left-2 bg-stone-900/80 backdrop-blur text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      Favorit
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="p-3.5 space-y-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-xs sm:text-sm text-stone-900">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-stone-500 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Price & Quick WA Order */}
              <div className="px-3.5 py-2.5 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-stone-400 block text-[10px]">Harga</span>
                  <span className="text-sm font-extrabold text-stone-900 font-display">
                    {formatRupiah(item.price)}
                  </span>
                </div>

                <a
                  href={getWaOrderUrl(item.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-white hover:bg-stone-100 border border-stone-200 text-stone-700 hover:text-stone-900 text-xs font-semibold px-2.5 py-1.5 rounded-lg transition-colors shadow-2xs"
                  title="Titip pesan ke WA Cak Resz"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Titip Pesan</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Topping Tambahan Strip */}
        <div className="mt-8 bg-white rounded-xl border border-stone-200 p-4">
          <h4 className="font-bold text-xs text-stone-800 uppercase tracking-wider mb-2">
            Pilihan Topping Tambahan di Gerobak
          </h4>
          <div className="flex flex-wrap gap-2 text-xs text-stone-700">
            {TOPPINGS_EXTRA.map((top, idx) => (
              <span key={idx} className="bg-stone-50 px-2.5 py-1 rounded-lg border border-stone-200">
                {top.name} <strong className="text-stone-900">+{formatRupiah(top.price)}</strong>
              </span>
            ))}
          </div>
          <p className="text-[11px] text-stone-500 mt-2">
            *Bisa minta langsung ke Cak Resz saat memesan di gerobak sesuai selera.
          </p>
        </div>

      </div>
    </section>
  );
}
