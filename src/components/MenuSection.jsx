import React, { useState, useMemo } from 'react';
import { 
  MessageCircle, 
  Sparkles, 
  Heart, 
  Award, 
  PartyPopper, 
  Coffee, 
  Search, 
  Tag, 
  ChevronRight 
} from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, TOPPINGS_EXTRA } from '../data/menuData';
import { STORE_INFO } from '../data/storeData';

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
      const matchSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const formatRupiah = (val) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(val);
  };

  const getWaOrderUrl = (itemName, category) => {
    let text = '';
    if (category === 'catering') {
      text = `Halo Mas Resi Hutomo, saya mau tanya / pesan *${itemName}* untuk acara saya di Sidoarjo. Bisa info ketersediaan tanggalnya?`;
    } else {
      text = `Halo Mas Resi Hutomo, mau titip pesan 1x *${itemName}* ya. Nanti saya ambil di lapak Taman Perumahan Mutiara Citra Graha.`;
    }
    return `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="menu" className="py-14 sm:py-20 bg-warmcream-50 border-b border-amber-100/70 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <span className="inline-block bg-amber-100 text-amber-900 font-extrabold text-xs uppercase tracking-wider px-3.5 py-1 rounded-full">
            Daftar Menu & Harga
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-stone-950 tracking-tight">
            Pilihan Menu Lezat & Krispi
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            Harga jujur, porsi mengenyangkan, topping melimpah. Bisa dinikmati langsung di taman atau pesan antar catering acara!
          </p>
        </div>

        {/* Category Tabs & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-8">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 scrollbar-none">
            {MENU_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold shrink-0 transition-all ${
                    isSelected
                      ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20 scale-105'
                      : 'bg-white text-stone-700 hover:text-amber-900 hover:bg-amber-50 border border-amber-200/80 shadow-2xs'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72 shrink-0">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari menu (cokelat, keju, sosis)..."
              className="w-full pl-9 pr-8 py-2 bg-white border border-amber-200/90 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-[11px] font-bold"
              >
                Hapus
              </button>
            )}
          </div>

        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-amber-200/80 hover:border-amber-400 overflow-hidden shadow-warm hover:shadow-warm-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Food Image with Hover Zoom */}
                <div className="relative aspect-[16/10] bg-amber-50 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {item.badge && (
                      <span className="bg-amber-500 text-stone-950 font-black text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {item.category === 'catering' && (
                    <span className="absolute bottom-3 left-3 bg-red-600 text-white font-extrabold text-[10px] px-2 py-0.5 rounded-md shadow">
                      Catering Acara
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-extrabold text-stone-900 text-base group-hover:text-amber-800 transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price & Action Button Footer */}
              <div className="p-4 sm:p-5 pt-0 mt-2">
                <div className="pt-3 border-t border-amber-100 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] text-stone-400 block font-medium">Harga</span>
                    <span className="text-lg font-black text-amber-800 font-display">
                      {formatRupiah(item.price)}
                    </span>
                  </div>

                  <a
                    href={getWaOrderUrl(item.name, item.category)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all shadow-xs hover:shadow"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{item.category === 'catering' ? 'Tanya Paket' : 'Titip Pesan'}</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Topping Tambahan Box with Food Icons */}
        <div className="mt-10 bg-white rounded-3xl border border-amber-200/80 p-5 sm:p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
            <div>
              <h4 className="font-black text-stone-900 text-sm sm:text-base flex items-center gap-1.5">
                <span>🧀</span>
                <span>Pilihan Topping Tambahan (Extra) di Lapak</span>
              </h4>
              <p className="text-xs text-stone-500">
                Mau lebih melimpah? Bisa minta tambah keju, meses, atau sosis ke Mas Resi langsung saat menggoreng.
              </p>
            </div>
            <span className="text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 shrink-0">
              Mulai +Rp 2.000
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 pt-1">
            {TOPPINGS_EXTRA.map((top, idx) => (
              <div key={idx} className="bg-amber-50/50 p-2.5 rounded-2xl border border-amber-200/60 flex items-center gap-2">
                <span className="text-lg">{top.icon}</span>
                <div>
                  <strong className="block text-stone-800 text-xs font-bold">{top.name}</strong>
                  <span className="text-amber-800 text-[11px] font-black">+{formatRupiah(top.price)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
