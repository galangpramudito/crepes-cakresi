import React, { useState } from 'react';
import { X, Check, Plus, Minus, ShoppingBag } from 'lucide-react';
import { EXTRA_TOPPINGS } from '../data/menuData';

export default function CustomizerModal({ item, isOpen, onClose, onConfirmAdd }) {
  if (!isOpen || !item) return null;

  const [selectedToppings, setSelectedToppings] = useState([]);
  const [crispinessLevel, setCrispinessLevel] = useState('Extra Crispy');
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white w-full max-w-md rounded-2xl shadow-xl border border-stone-200 overflow-hidden relative flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div>
            <h3 className="font-bold text-stone-900 text-sm">Sesuaikan Pesanan</h3>
            <p className="text-xs text-stone-500">{item.name}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-stone-400 hover:text-stone-700 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 space-y-5 overflow-y-auto">
          
          {/* Level of Crispiness */}
          <div>
            <label className="block text-xs font-bold uppercase text-stone-600 tracking-wider mb-2">
              Tingkat Kerenyahan
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                { label: 'Extra Crispy', desc: 'Garing maksimal, sangat renyah' },
                { label: 'Medium Crispy', desc: 'Renyah pas, sedikit lembut' },
              ].map((opt) => (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => setCrispinessLevel(opt.label)}
                  className={`p-2.5 rounded-xl border text-left transition-all ${
                    crispinessLevel === opt.label
                      ? 'border-stone-900 bg-stone-900 text-white font-medium'
                      : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  <span className="font-bold block text-xs">{opt.label}</span>
                  <span className={`text-[10px] block mt-0.5 ${crispinessLevel === opt.label ? 'text-stone-300' : 'text-stone-400'}`}>
                    {opt.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Extra Toppings */}
          <div>
            <label className="block text-xs font-bold uppercase text-stone-600 tracking-wider mb-2">
              Topping Tambahan (Opsional)
            </label>
            <div className="space-y-1.5">
              {EXTRA_TOPPINGS.map((topping) => {
                const isSelected = selectedToppings.some(t => t.id === topping.id);
                return (
                  <div
                    key={topping.id}
                    onClick={() => toggleTopping(topping)}
                    className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer text-xs transition-all ${
                      isSelected
                        ? 'border-amber-700/60 bg-amber-50/50 text-stone-900 font-semibold'
                        : 'border-stone-200 text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                        isSelected ? 'bg-amber-700 border-amber-700 text-white' : 'border-stone-300 bg-white'
                      }`}>
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span>{topping.name}</span>
                    </div>
                    <span className="font-bold text-stone-800">
                      +{formatRupiah(topping.price)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Special Notes */}
          <div>
            <label className="block text-xs font-bold uppercase text-stone-600 tracking-wider mb-1.5">
              Catatan Pesanan
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Cth: saus pedas dipisah, jangan terlalu manis..."
              className="w-full px-3 py-2 border border-stone-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-stone-400"
            />
          </div>

          {/* Quantity */}
          <div className="flex items-center justify-between pt-1">
            <span className="text-xs font-bold text-stone-700">Jumlah Porsi</span>
            <div className="flex items-center gap-2 bg-stone-100 p-1 rounded-xl">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-6 h-6 rounded-lg bg-white text-stone-700 flex items-center justify-center font-bold text-xs"
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="font-bold text-xs text-stone-900 w-5 text-center">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-6 h-6 rounded-lg bg-white text-stone-700 flex items-center justify-center font-bold text-xs"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-stone-200 bg-stone-50 flex items-center justify-between gap-3">
          <div>
            <span className="text-[10px] text-stone-500 block">Total:</span>
            <span className="text-base font-extrabold text-stone-950 font-display">
              {formatRupiah(grandTotal)}
            </span>
          </div>

          <button
            onClick={handleConfirm}
            className="flex-1 bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs py-2.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-1.5"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Masukkan Pesanan</span>
          </button>
        </div>

      </div>
    </div>
  );
}
