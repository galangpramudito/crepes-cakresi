import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Plus, 
  SlidersHorizontal, 
  Star, 
  Tag
} from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';

export default function MenuSection({ onAddToCart, onCustomizeItem }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePromoOnly, setActivePromoOnly] = useState(false);

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
    <section id="menu" className="py-16 sm:py-20 bg-[#FAF9F5] border-b border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-2">
          <span className="text-amber-800 font-bold text-xs uppercase tracking-wider block">
            Daftar Menu & Harga
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950">
            Pilihan Menu Crepes Cak Resz
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            Harga transparan, porsi mengenyangkan, dan tersedia opsi kustomisasi topping.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 items-center justify-between">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 scrollbar-none">
            {MENU_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all ${
                    isSelected
                      ? 'bg-stone-900 text-white shadow-sm'
                      : 'bg-white text-stone-600 hover:text-stone-950 border border-stone-200'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72 shrink-0">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari rasa atau topping..."
              className="w-full pl-9 pr-3 py-2 bg-white border border-stone-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-stone-400 focus:border-stone-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-[11px]"
              >
                Batal
              </button>
            )}
          </div>

        </div>

        {/* Menu Cards Grid */}
        <div className="mt-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-stone-200 p-6 max-w-sm mx-auto">
              <p className="text-stone-600 text-sm font-semibold">Menu tidak ditemukan</p>
              <p className="text-stone-400 text-xs mt-1">Coba kata kunci pencarian yang lain.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="mt-3 text-xs font-bold text-amber-800 underline"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-stone-200/90 hover:border-stone-300 transition-all flex flex-col justify-between overflow-hidden shadow-sm"
                >
                  <div>
                    {/* Image with subtle badge */}
                    <div className="relative aspect-[16/10] bg-stone-100 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      {item.badge && (
                        <span className="absolute top-2.5 left-2.5 bg-stone-900/80 backdrop-blur text-white text-[10px] font-bold px-2 py-0.5 rounded">
                          {item.badge}
                        </span>
                      )}
                      {item.isPromo && (
                        <span className="absolute top-2.5 right-2.5 bg-amber-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                          Promo
                        </span>
                      )}
                    </div>

                    {/* Details */}
                    <div className="p-4 space-y-1.5">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-bold text-sm text-stone-900">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-1 text-[11px] text-stone-500 shrink-0">
                          <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                          <span>{item.rating}</span>
                        </div>
                      </div>

                      <p className="text-stone-500 text-xs line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Price & Action Footer */}
                  <div className="px-4 py-3 bg-stone-50/70 border-t border-stone-100 flex items-center justify-between">
                    <div>
                      <span className="text-sm font-extrabold text-stone-900 font-display">
                        {formatRupiah(item.price)}
                      </span>
                      {item.originalPrice && (
                        <span className="text-[10px] text-stone-400 line-through ml-1.5">
                          {formatRupiah(item.originalPrice)}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5">
                      {item.category !== 'drink' && (
                        <button
                          onClick={() => onCustomizeItem(item)}
                          className="p-1.5 rounded-lg border border-stone-200 hover:bg-white text-stone-600 transition-colors"
                          title="Kustomisasi Topping"
                        >
                          <SlidersHorizontal className="w-3.5 h-3.5" />
                        </button>
                      )}
                      <button
                        onClick={() => onAddToCart(item)}
                        className="bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Pesan</span>
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
