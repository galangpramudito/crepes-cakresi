import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Flame, 
  Heart, 
  Award, 
  ShoppingBag, 
  Coffee, 
  Search, 
  Plus, 
  SlidersHorizontal, 
  Star, 
  Tag, 
  Check
} from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';

export default function MenuSection({ onAddToCart, onCustomizeItem }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePromoOnly, setActivePromoOnly] = useState(false);

  const iconComponents = {
    Sparkles,
    Flame,
    Heart,
    Award,
    ShoppingBag,
    Coffee
  };

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      let matchCategory = true;
      if (selectedCategory === 'bestseller') {
        matchCategory = item.isBestSeller;
      } else if (selectedCategory !== 'all') {
        matchCategory = item.category === selectedCategory;
      }

      // Promo filter
      if (activePromoOnly && !item.isPromo) {
        return false;
      }

      // Search query filter
      const matchSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery, activePromoOnly]);

  const formatRupiah = (val) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="menu" className="py-16 sm:py-24 bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 text-xs sm:text-sm font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            🍴 Daftar Menu & Harga Resmi
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">
            Pilihan Rasa yang Bikin Lidah Bergoyang
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Dari rasa manis legit yang memanjakan hingga sensasi gurih daging asap & keju leleh. Pilih langsung dan sesuaikan topping favoritmu!
          </p>
        </div>

        {/* Search Bar & Promo Toggle */}
        <div className="mt-10 max-w-2xl mx-auto flex flex-col sm:flex-row gap-3 items-center">
          <div className="relative w-full">
            <Search className="w-5 h-5 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari menu... (cth: Nutella, Mozzarella, Keju, Es Teh)"
              className="w-full pl-11 pr-4 py-3 bg-white border border-amber-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-xs font-bold"
              >
                Clear
              </button>
            )}
          </div>

          <button
            onClick={() => setActivePromoOnly(!activePromoOnly)}
            className={`w-full sm:w-auto shrink-0 flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold border transition-all ${
              activePromoOnly
                ? 'bg-amber-500 border-amber-600 text-white shadow-md'
                : 'bg-white border-amber-200 text-stone-700 hover:border-amber-400 shadow-sm'
            }`}
          >
            <Tag className="w-4 h-4" />
            <span>Hanya Promo Hemat</span>
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-8 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {MENU_CATEGORIES.map((cat) => {
            const Icon = iconComponents[cat.icon] || Sparkles;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold shrink-0 transition-all ${
                  isSelected
                    ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20 scale-105'
                    : 'bg-amber-100/70 text-amber-950 hover:bg-amber-200/80 border border-amber-200/60'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Grid */}
        <div className="mt-12">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-amber-200 max-w-md mx-auto p-8">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="font-bold text-stone-800 text-lg">Menu Tidak Ditemukan</h3>
              <p className="text-stone-500 text-xs sm:text-sm mt-1">
                Tidak ada menu yang sesuai dengan kata kunci "{searchQuery}". Coba kata kunci lain atau reset filter.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setActivePromoOnly(false);
                }}
                className="mt-4 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs px-4 py-2 rounded-xl transition-colors"
              >
                Tampilkan Semua Menu
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl border border-amber-200/80 hover:border-amber-400 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  {/* Image Container with Badges */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-amber-50">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {item.badge && (
                        <span className="bg-amber-500 text-stone-950 font-black text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
                          {item.badge}
                        </span>
                      )}
                      {item.isPromo && (
                        <span className="bg-red-500 text-white font-extrabold text-[10px] px-2 py-1 rounded-full uppercase shadow flex items-center gap-1">
                          <Tag className="w-2.5 h-2.5" /> Promo
                        </span>
                      )}
                    </div>

                    {/* Sold count badge */}
                    <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>{item.rating}</span>
                      <span className="text-white/60">({item.soldCount})</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Name & Tags */}
                      <h3 className="font-bold text-lg text-stone-900 group-hover:text-amber-600 transition-colors">
                        {item.name}
                      </h3>
                      
                      <p className="text-stone-500 text-xs sm:text-sm mt-1.5 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {item.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-amber-50 text-amber-800 text-[10px] font-semibold px-2 py-0.5 rounded-md border border-amber-200/50"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Price & Action Area */}
                    <div className="mt-5 pt-4 border-t border-amber-100 flex items-center justify-between gap-2">
                      <div>
                        <span className="text-[11px] text-stone-400 font-medium block">Harga Porsi</span>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-xl font-black text-amber-600 font-display">
                            {formatRupiah(item.price)}
                          </span>
                          {item.originalPrice && (
                            <span className="text-xs text-stone-400 line-through">
                              {formatRupiah(item.originalPrice)}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center gap-1.5">
                        {item.category !== 'drink' && (
                          <button
                            onClick={() => onCustomizeItem(item)}
                            className="bg-amber-50 hover:bg-amber-100 text-amber-900 p-2.5 rounded-xl border border-amber-200 hover:border-amber-300 transition-colors text-xs font-bold"
                            title="Kustomisasi Topping & Kerenyahan"
                          >
                            <SlidersHorizontal className="w-4 h-4 text-amber-700" />
                          </button>
                        )}
                        <button
                          onClick={() => onAddToCart(item)}
                          className="bg-amber-500 hover:bg-amber-600 active:scale-95 text-white font-bold text-xs px-3.5 py-2.5 rounded-xl shadow-sm hover:shadow flex items-center gap-1.5 transition-all"
                        >
                          <Plus className="w-4 h-4 stroke-[3]" />
                          <span>Pesan</span>
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

        {/* Note at Bottom of Menu */}
        <div className="mt-12 bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-200 text-amber-800 flex items-center justify-center font-bold text-lg shrink-0">
              💡
            </div>
            <div>
              <h4 className="font-bold text-stone-900 text-sm">Mau Tambah Topping Sesuai Selera?</h4>
              <p className="text-xs text-stone-600 mt-0.5">
                Bisa tambah Extra Mozzarella (+Rp 5rb), Extra Keju (+Rp 3rb), Oreo, Almond, dan tentukan tingkat kerenyahan lewat tombol kustomisasi atau WhatsApp.
              </p>
            </div>
          </div>
          <a
            href="#lokasi"
            className="shrink-0 bg-white border border-amber-300 hover:border-amber-500 text-amber-900 text-xs font-bold px-4 py-2 rounded-xl shadow-sm transition-colors"
          >
            Cek Lokasi Cabang Terdekat
          </a>
        </div>

      </div>
    </section>
  );
}
