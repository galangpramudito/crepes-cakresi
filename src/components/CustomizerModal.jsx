import React, { useState } from 'react';
import { X, Check, Plus, Minus, ShoppingBag, Sparkles } from 'lucide-react';
import { EXTRA_TOPPINGS } from '../data/menuData';

export default function CustomizerModal({ item, isOpen, onClose, onConfirmAdd }) {
  if (!isOpen || !item) return null;

  const [selectedToppings, setSelectedToppings] = useState([]);
  const [crispinessLevel, setCrispinessLevel] = useState('Extra Crispy (Golden)');
  const [notes, setNotes] = useState('');
  const [quantity, setQuantity] = useState(1);

  const toggleTopping = (topping) => {
    if (selectedToppings.some(t => t.id === topping.id)) {
      setSelectedToppings(selectedToppings.filter(t => t.id !== topping.id));
    } else {
      setSelectedToppings([...selectedToppings, topping]);
    }
  };

  const toppingsTotalPrice = selectedToppings.reduce((sum, t) => sum + t.price, 0);
  const singleItemTotal = item.price + toppingsTotalPrice;
  const grandTotal = singleItemTotal * quantity;

  const formatRupiah = (val) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(val);
  };

  const handleConfirm = () => {
    onConfirmAdd({
      ...item,
      cartId: `${item.id}-${Date.now()}`,
      quantity,
      selectedToppings,
      crispinessLevel,
      notes,
      unitPrice: singleItemTotal,
      itemTotal: grandTotal
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-amber-200 overflow-hidden relative animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 border-b border-amber-100 flex items-center justify-between bg-amber-50/50">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center text-sm shadow">
              🥞
            </span>
            <div>
              <h3 className="font-bold text-stone-900 text-base leading-tight">Kustomisasi Pesanan</h3>
              <p className="text-xs text-stone-500 font-medium">{item.name}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-5 space-y-6 overflow-y-auto">
          
          {/* Item Preview Card */}
          <div className="flex gap-4 p-3 bg-amber-50/60 rounded-2xl border border-amber-200/60">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-20 h-20 rounded-xl object-cover shrink-0" 
            />
            <div className="flex-1">
              <h4 className="font-bold text-stone-900 text-sm">{item.name}</h4>
              <p className="text-xs text-stone-500 line-clamp-2 mt-0.5">{item.description}</p>
              <div className="mt-2 font-black text-amber-600 text-base">
                {formatRupiah(item.price)}
              </div>
            </div>
          </div>

          {/* Level of Crispiness */}
          <div>
            <label className="block text-xs font-extrabold uppercase text-stone-700 tracking-wider mb-2.5">
              Pilihan Tingkat Kerenyahan
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                { label: 'Extra Crispy (Golden)', desc: 'Sangat garing, favorit pelanggan' },
                { label: 'Medium Crispy', desc: 'Renyah pas, sedikit lembut di tengah' },
              ].map((opt) => (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => setCrispinessLevel(opt.label)}
                  className={`p-3 rounded-2xl border text-left transition-all ${
                    crispinessLevel === opt.label
                      ? 'border-amber-500 bg-amber-50 text-amber-950 font-bold ring-1 ring-amber-500'
                      : 'border-stone-200 hover:border-amber-300 text-stone-600'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs">{opt.label}</span>
                    {crispinessLevel === opt.label && <Check className="w-3.5 h-3.5 text-amber-600" />}
                  </div>
                  <span className="text-[11px] text-stone-500 mt-1 block font-normal">{opt.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Extra Toppings */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <label className="text-xs font-extrabold uppercase text-stone-700 tracking-wider">
                Tambah Topping Ekstra (Opsional)
              </label>
              <span className="text-[11px] text-stone-500">Bisa pilih lebih dari 1</span>
            </div>

            <div className="space-y-2">
              {EXTRA_TOPPINGS.map((topping) => {
                const isSelected = selectedToppings.some(t => t.id === topping.id);
                return (
                  <div
                    key={topping.id}
                    onClick={() => toggleTopping(topping)}
                    className={`flex items-center justify-between p-3 rounded-2xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'border-amber-500 bg-amber-50/80 text-amber-950 font-semibold'
                        : 'border-stone-200 hover:border-amber-200 text-stone-700 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-amber-500 border-amber-500 text-white' : 'border-stone-300 bg-white'
                      }`}>
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <span className="text-xs sm:text-sm font-medium">{topping.name}</span>
                    </div>
                    <span className="text-xs font-bold text-amber-600">
                      +{formatRupiah(topping.price)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Notes for Chef */}
          <div>
            <label className="block text-xs font-extrabold uppercase text-stone-700 tracking-wider mb-2">
              Catatan Khusus untuk Mas/Mbak Kasir
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Cth: saus sambal dipisah ya mas, jangan terlalu manis..."
              className="w-full px-3.5 py-2.5 bg-white border border-stone-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
            />
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs font-bold text-stone-700">Jumlah Porsi</span>
            <div className="flex items-center gap-3 bg-stone-100 p-1.5 rounded-2xl border border-stone-200">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-7 h-7 rounded-xl bg-white text-stone-700 flex items-center justify-center font-bold text-sm shadow-sm hover:bg-stone-50"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="font-extrabold text-stone-900 text-sm w-6 text-center">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-7 h-7 rounded-xl bg-white text-stone-700 flex items-center justify-center font-bold text-sm shadow-sm hover:bg-stone-50"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-5 border-t border-amber-100 bg-amber-50/40 flex items-center justify-between gap-4">
          <div>
            <span className="text-[11px] text-stone-500 block">Total Item Ini:</span>
            <span className="text-xl font-black text-amber-600 font-display">
              {formatRupiah(grandTotal)}
            </span>
          </div>

          <button
            onClick={handleConfirm}
            className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-extrabold text-sm py-3 px-5 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Masukkan ke Keranjang</span>
          </button>
        </div>

      </div>
    </div>
  );
}
